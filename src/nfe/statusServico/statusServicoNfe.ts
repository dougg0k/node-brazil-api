import { promisify } from "util";
import { StatusServicoError } from "../../errors/StatusServicoError";
import { Sigla } from "../../typings/generalTypes";
import { setupNFe } from "../helper";
import { STATUS_SERVICO } from "./../../utils/constants";

export async function statusServicoSync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, STATUS_SERVICO);
		const nfeStatusServicoNF = promisify(response.nfeStatusServicoNF);
		const data = await nfeStatusServicoNF({});
		return data;
	} catch (err) {
		throw new StatusServicoError(err);
	}
}

export async function statusServicoAsync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, STATUS_SERVICO);
		const nfeStatusServicoNFAsync = promisify(response.nfeStatusServicoNFAsync);
		const data = await nfeStatusServicoNFAsync({});
		return data;
	} catch (err) {
		throw new StatusServicoError(err);
	}
}
