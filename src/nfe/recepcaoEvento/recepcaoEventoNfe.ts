import { promisify } from "util";
import { ConsultaCadastroError } from "../../errors/ConsultaCadastroError";
import { Sigla } from "../../typings/generalTypes";
import { setupNFe } from "../helper";
import { RECEPCAO_EVENTO } from "./../../utils/constants";

export async function recepcaoEventoSync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, RECEPCAO_EVENTO);
		const nfeRecepcaoEvento = promisify(response.nfeRecepcaoEvento);
		const data = await nfeRecepcaoEvento({});
		return data;
	} catch (err) {
		throw new ConsultaCadastroError(err);
	}
}

export async function recepcaoEventoAsync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, RECEPCAO_EVENTO);
		const nfeRecepcaoEventoAsync = promisify(response.nfeRecepcaoEventoAsync);
		const data = await nfeRecepcaoEventoAsync({});
		return data;
	} catch (err) {
		throw new ConsultaCadastroError(err);
	}
}
