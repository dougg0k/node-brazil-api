import { promisify } from "util";
import { ConsultaCadastroError } from "../../errors/ConsultaCadastroError";
import { Sigla } from "../../typings/generalTypes";
import { CONSULTA_PROTOCOLO } from "../../utils/constants";
import { setupNFe } from "../helper";

export async function consultarProtocoloSync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, CONSULTA_PROTOCOLO);
		const nfeConsultaNF = promisify(response.nfeConsultaNF);
		const data = await nfeConsultaNF({});
		return data;
	} catch (err) {
		throw new ConsultaCadastroError(err);
	}
}

export async function consultarProtocoloAsync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, CONSULTA_PROTOCOLO);
		const nfeConsultaNFAsync = promisify(response.nfeConsultaNFAsync);
		const data = await nfeConsultaNFAsync({});
		return data;
	} catch (err) {
		throw new ConsultaCadastroError(err);
	}
}
