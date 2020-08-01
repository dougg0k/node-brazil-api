import { promisify } from "util";
import { ConsultaCadastroError } from "../../errors/ConsultaCadastroError";
import { Sigla } from "../../typings/generalTypes";
import { setupNFe } from "../helper";
import { INUTILIZACAO } from "./../../utils/constants";

export async function inutilizacaoSync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, INUTILIZACAO);
		const nfeInutilizacaoNF = promisify(response.nfeInutilizacaoNF);
		const data = await nfeInutilizacaoNF({});
		return data;
	} catch (err) {
		throw new ConsultaCadastroError(err);
	}
}

export async function inutilizacaoAsync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, INUTILIZACAO);
		const nfeInutilizacaoNFAsync = promisify(response.nfeInutilizacaoNFAsync);
		const data = await nfeInutilizacaoNFAsync({});
		return data;
	} catch (err) {
		throw new ConsultaCadastroError(err);
	}
}
