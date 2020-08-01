import { promisify } from "util";
import { ConsultaCadastroError } from "../../errors/ConsultaCadastroError";
import { setupNFe } from "../helper";
import { Sigla } from "./../../typings/generalTypes.d";
import { RET_AUTORIZACAO } from "./../../utils/constants";

export async function retAutorizacaoSync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, RET_AUTORIZACAO);
		const nfeRetAutorizacaoLote = promisify(response.nfeRetAutorizacaoLote);
		const data = await nfeRetAutorizacaoLote({});
		return data;
	} catch (err) {
		throw new ConsultaCadastroError(err);
	}
}

export async function retAutorizacaoAsync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, RET_AUTORIZACAO);
		const nfeRetAutorizacaoLoteAsync = promisify(
			response.nfeRetAutorizacaoLoteAsync,
		);
		const data = await nfeRetAutorizacaoLoteAsync({});
		return data;
	} catch (err) {
		throw new ConsultaCadastroError(err);
	}
}
