import soap, { Client } from "soap";
import config from "../config";

export async function clientSoap(
	url: string,
	options?: { certificatePfx: Buffer; passphrase: string },
): Promise<Client> {
	const allOptions = {
		wsdl_options: {
			forever: true,
			rejectUnauthorized: false,
			strictSSL: false,
			pfx: options?.certificatePfx || config.GOV_PFX_CERTIFICATE,
			passphrase: options?.passphrase || config.GOV_CERTIFICATE_PASSWORD,
		},
	};
	return await soap.createClientAsync(url, allOptions);
}
