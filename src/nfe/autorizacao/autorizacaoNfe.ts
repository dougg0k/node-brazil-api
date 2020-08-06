import { promisify } from "util";
import { AutorizacaoError } from "../../errors/AutorizacaoError";
import { Sigla } from "../../typings/generalTypes";
import { formatReturnData } from "../../utils/commonHelper";
import { AUTORIZACAO, TAG_RAIZ } from "../../utils/constants";
import { buildBaseXml, getRootAttr } from "../../utils/xmlBuilder";
import { setupNFe } from "../helper";
import { EnviNFe, EnviNFeIndSinc, RetEnviNFe } from "./Autorizacao";

export async function autorizacaoNfeSync(
	sigla: Sigla,
	data: EnviNFe,
): Promise<RetEnviNFe> {
	try {
		const client = await setupNFe(sigla, AUTORIZACAO);
		const rootAttribute = getRootAttr(client);
		const xml = buildBaseXml<EnviNFe>(
			{ ...data, indSinc: EnviNFeIndSinc.SINC },
			"infNFe",
			rootAttribute,
			TAG_RAIZ.ENVI_NFE,
		);
		const nfeAutorizacaoLote = promisify(client.nfeAutorizacaoLote);
		const nfeData = await nfeAutorizacaoLote({ _xml: xml });
		return formatReturnData(nfeData.retEnviNFe);
	} catch (err) {
		throw new AutorizacaoError(err.message);
	}
}

export async function autorizacaoNfeAsync(
	sigla: Sigla,
	data: EnviNFe,
): Promise<RetEnviNFe> {
	try {
		const client = await setupNFe(sigla, AUTORIZACAO);
		const rootAttribute = getRootAttr(client);
		const xml = buildBaseXml<EnviNFe>(
			{ ...data, indSinc: EnviNFeIndSinc.ASSINC },
			"infNFe",
			rootAttribute,
			TAG_RAIZ.ENVI_NFE,
		);
		const nfeAutorizacaoLoteAsync = promisify(client.nfeAutorizacaoLoteAsync);
		const nfeData = await nfeAutorizacaoLoteAsync({ _xml: xml });
		return nfeData;
	} catch (err) {
		throw new AutorizacaoError(err.message);
	}
}
