import request from "request";
import { Client, createClientAsync } from "soap";

export async function clientSoap(
	url: string,
	options?: {
		passphrase?: string;
		certificatePfx?: Buffer;
		privateKey?: Buffer;
		publicKey?: Buffer;
	},
): Promise<Client> {
	const customRequest = request.defaults({
		agentOptions: {
			pfx: options?.certificatePfx,
			key: options?.privateKey,
			cert: options?.publicKey,
			passphrase: options?.passphrase,
			rejectUnauthorized: false,
		},
	});
	const allOptions = {
		preserveWhitespace: false,
		returnFault: true,
		disableCache: true,
		attributesKey: "$attributes",
		handleNilAsNull: true,
		useEmptyTag: true,
		forceSoap12Headers: true,
		wsdl_headers: {
			connection: "keep-alive",
		},
		wsdl_options: {
			forever: true,
			rejectUnauthorized: false,
			pfx: options?.certificatePfx,
			passphrase: options?.passphrase,
			key: options?.privateKey,
			cert: options?.publicKey,
		},
		request: customRequest,
	};
	return await createClientAsync(url, allOptions);
}
