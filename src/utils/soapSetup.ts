import request from "request";
import { Client, createClientAsync } from "soap";

export async function clientSoap(
	url: string,
	options?: {
		passphrase?: string;
		certificatePfx?: Buffer;
		privateKey?: Buffer;
		publicKey?: Buffer;
		rejectUnauthorized?: boolean;
		forceSoap12Headers?: boolean;
	},
): Promise<Client> {
	const customRequest = request.defaults({
		agentOptions: {
			pfx: options?.certificatePfx,
			key: options?.privateKey,
			cert: options?.publicKey,
			passphrase: options?.passphrase,
			rejectUnauthorized: options?.rejectUnauthorized || false,
		},
	});
	const allOptions = {
		preserveWhitespace: false,
		returnFault: true,
		disableCache: true,
		attributesKey: "$attributes",
		handleNilAsNull: true,
		useEmptyTag: true,
		forceSoap12Headers: options?.forceSoap12Headers,
		wsdl_headers: {
			connection: "keep-alive",
		},
		wsdl_options: {
			forever: true,
			pfx: options?.certificatePfx,
			key: options?.privateKey,
			cert: options?.publicKey,
			passphrase: options?.passphrase,
		},
		request: customRequest,
	};
	return await createClientAsync(url, allOptions);
}
