import { promisify } from "util";
import { AutorizacaoError } from "../../errors/AutorizacaoError";
import { Sigla } from "../../typings/generalTypes";
import { AUTORIZACAO, TAG_RAIZ } from "../../utils/constants";
import { buildBaseXml, getRootAttr } from "../../utils/xmlBuilder";
import { setupNFe } from "../helper";
import { EnviNFe, RetEnviNFe } from "./Autorizacao";

export async function autorizacaoNfeSync(
	sigla: Sigla,
	data: EnviNFe,
): Promise<RetEnviNFe> {
	try {
		const client = await setupNFe(sigla, AUTORIZACAO);
		const rootAttribute = getRootAttr(client);
		const xml = buildBaseXml<EnviNFe>(
			data,
			"infNFe",
			rootAttribute,
			TAG_RAIZ.ENVI_NFE,
		);
		const nfeAutorizacaoLote = promisify(client.nfeAutorizacaoLote);
		const nfeData = await nfeAutorizacaoLote({ _xml: xml });
		return nfeData.retEnviNFe;
	} catch (err) {
		throw new AutorizacaoError(err);
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
			data,
			"infNFe",
			rootAttribute,
			TAG_RAIZ.ENVI_NFE,
		);
		const nfeAutorizacaoLoteAsync = promisify(client.nfeAutorizacaoLoteAsync);
		const nfeData = await nfeAutorizacaoLoteAsync({ _xml: xml });
		return nfeData;
	} catch (err) {
		throw new AutorizacaoError(err);
	}
}
