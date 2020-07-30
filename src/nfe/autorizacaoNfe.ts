import { AutorizadorNfeError } from "../errors/AutorizadorNfeError";
import { clientSoap } from "../utils/soapSetup";
import { buildUrl } from "../utils/urlHelper";
import { AUTORIZACAO } from "./../utils/constants";
import autorizadoresNfe from "./autorizadoresNfe";
import { verifyEstadoSigla } from "./helper";

export async function autorizarNfe(estadoSigla: string): Promise<any> {
	verifyEstadoSigla(estadoSigla, autorizadoresNfe);
	try {
		const url = buildUrl(autorizadoresNfe, estadoSigla, AUTORIZACAO);
		const response = await clientSoap(url);
		console.log("RESP = ", response);
	} catch (err) {
		throw new AutorizadorNfeError(err);
	}
}
