import { promisify } from "util";
import { ConsultaCadastroError } from "../../errors/ConsultaCadastroError";
import { Sigla } from "../../typings/generalTypes";
import { CONSULTA_CADASTRO } from "../../utils/constants";
import { setupNFe } from "../helper";
import { ConsultaCadastroSaida } from "./ConsultaCadastro";

export async function consultaCadastroSync(
	sigla: Sigla,
): Promise<ConsultaCadastroSaida> {
	try {
		const response = await setupNFe(sigla, CONSULTA_CADASTRO);
		const consultaCadastro = promisify(response.consultaCadastro);
		const data = await consultaCadastro({});
		return data;
	} catch (err) {
		throw new ConsultaCadastroError(err);
	}
}

export async function consultaCadastroAsync(
	sigla: Sigla,
): Promise<ConsultaCadastroSaida> {
	try {
		const response = await setupNFe(sigla, CONSULTA_CADASTRO);
		const consultaCadastroAsync = promisify(response.consultaCadastroAsync);
		const data = await consultaCadastroAsync({});
		return data;
	} catch (err) {
		throw new ConsultaCadastroError(err);
	}
}
