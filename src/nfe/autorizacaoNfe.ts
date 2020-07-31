import { promisify } from "util";
import { AutorizadorNfeError } from "../errors/AutorizadorNfeError";
import { ambiente, passphrase, pfx } from "../utils/setupGovAPI";
import { clientSoap } from "../utils/soapSetup";
import { buildUrl } from "../utils/urlHelper";
import { AUTORIZACAO } from "./../utils/constants";
import autorizadoresNfe from "./autorizadoresNfe";
import { verifyEstadoSigla } from "./helper";

async function setupAutorizacao(estadoSigla: string) {
	const url = buildUrl(autorizadoresNfe, estadoSigla, AUTORIZACAO, ambiente);
	return await clientSoap(url, {
		certificatePfx: pfx,
		passphrase: passphrase,
	});
}

export async function autorizarNfeSync(estadoSigla: string): Promise<any> {
	verifyEstadoSigla(estadoSigla, autorizadoresNfe);
	try {
		const response = await setupAutorizacao(estadoSigla);
		const nfeAutorizacaoLote = promisify(response.nfeAutorizacaoLote);
		const data = await nfeAutorizacaoLote({});
		return data;
	} catch (err) {
		throw new AutorizadorNfeError(err);
	}
}

export async function autorizarNfeAsync(estadoSigla: string): Promise<any> {
	verifyEstadoSigla(estadoSigla, autorizadoresNfe);
	try {
		const response = await setupAutorizacao(estadoSigla);
		const nfeAutorizacaoLoteAsync = promisify(response.nfeAutorizacaoLoteAsync);
		const data = await nfeAutorizacaoLoteAsync({});
		return data;
	} catch (err) {
		throw new AutorizadorNfeError(err);
	}
}
