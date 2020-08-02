import { promisify } from "util";
import { DistribuicaoDfeError } from "../../errors/DistribuicaoDfeError";
import { Sigla } from "../../typings/generalTypes";
import { setupNFe } from "../helper";
import { DISTRIBUICAO_DFE } from "./../../utils/constants";

export async function distribuicaoDFeSync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, DISTRIBUICAO_DFE);
		const nfeDistDFeInteresse = promisify(response.nfeDistDFeInteresse);
		const data = await nfeDistDFeInteresse({});
		return data;
	} catch (err) {
		throw new DistribuicaoDfeError(err);
	}
}

export async function distribuicaoDFeAsync(sigla: Sigla): Promise<any> {
	try {
		const response = await setupNFe(sigla, DISTRIBUICAO_DFE);
		const nfeDistDFeInteresseAsync = promisify(
			response.nfeDistDFeInteresseAsync,
		);
		const data = await nfeDistDFeInteresseAsync({});
		return data;
	} catch (err) {
		throw new DistribuicaoDfeError(err);
	}
}
