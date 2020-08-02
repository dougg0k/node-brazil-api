import { promisify } from "util";
import { ConsultaProtocoloError } from "../../errors/ConsultaProtocoloError";
import { Sigla } from "../../typings/generalTypes";
import { CONSULTA_PROTOCOLO } from "../../utils/constants";
import { setupNFe } from "../helper";

export async function consultaProtocoloSync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, CONSULTA_PROTOCOLO);
		const nfeConsultaNF = promisify(response.nfeConsultaNF);
		const data = await nfeConsultaNF({});
		return data;
	} catch (err) {
		throw new ConsultaProtocoloError(err);
	}
}

export async function consultaProtocoloAsync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, CONSULTA_PROTOCOLO);
		const nfeConsultaNFAsync = promisify(response.nfeConsultaNFAsync);
		const data = await nfeConsultaNFAsync({});
		return data;
	} catch (err) {
		throw new ConsultaProtocoloError(err);
	}
}
