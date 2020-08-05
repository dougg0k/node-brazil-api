import { Client } from "soap";
import { NFE_NS, NFE_VERSAO_ATUAL } from "./constants";
import { signXmlX509 } from "./signXML";
import { parseJSONToXML } from "./xmlParser";

export function buildBaseXml<T>(
	data: T,
	refElement: string | null,
	rootAttrValue: string,
	childRootAttr?: string,
): string {
	const objToParse: any = {
		nfeDadosMsg: {
			$xmlns: rootAttrValue,
			$versao: NFE_VERSAO_ATUAL,
		},
	};
	if (!!childRootAttr) {
		objToParse.nfeDadosMsg[childRootAttr] = {
			$xmlns: NFE_NS,
			$versao: NFE_VERSAO_ATUAL,
			...data,
		};
	} else {
		objToParse.nfeDadosMsg = data;
	}
	const xmlParsed = parseJSONToXML(objToParse);
	if (!refElement) {
		return xmlParsed;
	}
	return signXmlX509(xmlParsed, refElement);
}

export function getRootAttr(client: Client): string {
	return client["wsdl"].definitions.xmlns.tns;
}
