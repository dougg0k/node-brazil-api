import { Client } from "soap";
import {
	ambiente,
	passphrase,
	pfx,
	privatePEM,
	publicPEM,
	rejectUnauthorized,
} from "../utils/setupSefaz";
import { clientSoap } from "../utils/soapSetup";
import { buildUrl } from "../utils/urlHelper";
import { preRequestValidator } from "../utils/validators";
import autorizadoresNfe from "./autorizadoresNfe";

export async function setupNFe(
	estadoSigla: string,
	servico: string,
): Promise<Client> {
	preRequestValidator(estadoSigla, autorizadoresNfe, servico);
	const url = buildUrl(autorizadoresNfe, estadoSigla, servico, ambiente);
	const client = await clientSoap(url, {
		certificatePfx: pfx,
		passphrase: passphrase,
		privateKey: privatePEM,
		publicKey: publicPEM,
		rejectUnauthorized: rejectUnauthorized,
		forceSoap12Headers: true,
	});
	return client;
}
