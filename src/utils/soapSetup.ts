import soap, { Client } from "soap";
import config from "../config";

const options = {
	wsdl_options: {
		forever: true,
		rejectUnauthorized: false,
		strictSSL: false,
		pfx: config.GOV_PFX_CERTIFICATE,
		passphrase: config.GOV_CERTIFICATE_PASSWORD,
	},
};

export async function clientSoap(url: string): Promise<Client> {
	return await soap.createClientAsync(url, options);
}
