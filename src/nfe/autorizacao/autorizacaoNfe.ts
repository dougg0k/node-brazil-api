import { promisify } from "util";
import { AutorizacaoError } from "../../errors/AutorizacaoError";
import { Sigla } from "../../typings/generalTypes";
import { AUTORIZACAO } from "../../utils/constants";
import { setupNFe } from "../helper";
import { AutorizacaoSaida } from "./Autorizacao";

export async function autorizarNfeSync(
	sigla: Sigla,
): Promise<AutorizacaoSaida> {
	try {
		const response = await setupNFe(sigla, AUTORIZACAO);
		const nfeAutorizacaoLote = promisify(response.nfeAutorizacaoLote);
		const data = await nfeAutorizacaoLote({});
		return data;
	} catch (err) {
		throw new AutorizacaoError(err);
	}
}

export async function autorizarNfeAsync(
	sigla: Sigla,
): Promise<AutorizacaoSaida> {
	try {
		const response = await setupNFe(sigla, AUTORIZACAO);
		const nfeAutorizacaoLoteAsync = promisify(response.nfeAutorizacaoLoteAsync);
		const data = await nfeAutorizacaoLoteAsync({});
		return data;
	} catch (err) {
		throw new AutorizacaoError(err);
	}
}
