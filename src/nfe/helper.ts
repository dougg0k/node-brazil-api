import { Client } from "soap";
import { ambiente, passphrase, pfx } from "../utils/setupGovAPI";
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
	return await clientSoap(url, {
		certificatePfx: pfx,
		passphrase: passphrase,
	});
}
