export function printWholeObj(obj: Record<string, unknown>): void {
	console.log(JSON.stringify(obj, null, 4));
}

export function buildSignature(
	nfId: string,
	digestValue: string,
	signatureValue: string,
	x509Certificate: string,
): Record<string, unknown> {
	return {
		Signature: {
			$attributes: {
				xmlns: "http://www.w3.org/2000/09/xmldsig#",
			},
		},
		SignedInfo: {
			CanonicalizationMethod: {
				$attributes: {
					Algorithm: "http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
				},
			},
			SignatureMethod: {
				$attributes: {
					Algorithm: "http://www.w3.org/2000/09/xmldsig#rsa-sha1",
				},
			},
			Reference: {
				$attributes: {
					URI: `#${nfId}`,
				},
				Transforms: {
					$xml: `<Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/><Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>`,
				},
				DigestMethod: {
					$attributes: {
						Algorithm: "http://www.w3.org/2000/09/xmldsig#sha1",
					},
				},
				DigestValue: {
					$value: digestValue,
				},
			},
		},
		SignatureValue: {
			$value: signatureValue,
		},
		KeyInfo: {
			X509Data: {
				X509Certificate: {
					$value: x509Certificate,
				},
			},
		},
	};
}
