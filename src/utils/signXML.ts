import forge from "node-forge";
import xmlCrypto from "xml-crypto";
import { passphrase, privatePEM, publicPEM } from "./setupGovAPI";

function getDecryptedKey(): Buffer {
	const decryptedKey = forge.pki.decryptRsaPrivateKey(privatePEM, passphrase);
	const decryptedKeyBuffer = Buffer.from(
		forge.pki.privateKeyToPem(decryptedKey),
	);
	return decryptedKeyBuffer;
}

function infoProvider(pem: Buffer) {
	return {
		file: "",
		getKeyInfo() {
			const cert = this.getCert();
			return `<X509Data><X509Certificate>${cert}</X509Certificate></X509Data>`;
		},
		getCert() {
			const certLines = pem.toString().split("\n");
			return certLines
				.filter((line: string) => !line.includes("-----"))
				.join("");
		},
		getKey() {
			return publicPEM;
		},
	};
}

export function signXmlX509(xml: string, refPath: string): string {
	const transforms = [
		"http://www.w3.org/2000/09/xmldsig#enveloped-signature",
		"http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
	];
	const signer = new xmlCrypto.SignedXml();
	signer.addReference(`//*[local-name(.)='${refPath}']`, transforms);
	signer.signingKey = getDecryptedKey();
	signer.keyInfoProvider = infoProvider(privatePEM);
	signer.computeSignature(xml, {
		location: { reference: `//*[local-name(.)='${refPath}']`, action: "after" },
	});
	return signer.getSignedXml();
}
