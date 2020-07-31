import { Client, createClientAsync } from "soap";

export async function clientSoap(
	url: string,
	options?: {
		certificatePfx: Buffer;
		passphrase?: string;
	},
): Promise<Client> {
	const allOptions = {
		wsdl_options: {
			forever: true,
			rejectUnauthorized: false,
			strictSSL: false,
			disableCache: true,
			pfx: options?.certificatePfx,
			passphrase: options?.passphrase,
		},
	};
	return await createClientAsync(url, allOptions);
}
