import { Client, createClientAsync } from "soap";
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
			disableCache: true,
			pfx: options?.certificatePfx || config.GOV_PFX_CERTIFICATE,
			passphrase: options?.passphrase || config.GOV_CERTIFICATE_PASSWORD,
		},
	};
	return await createClientAsync(url, allOptions);
}
