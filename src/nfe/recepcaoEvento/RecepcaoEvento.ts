export interface RecepcaoEventoEntrada {
	envEvento: string;
	versao: string;
	idLote: string;
	evento: string;
	infEvento: string;
	Id: string;
	cOrgao: string;
	tpAmb: string;
	CNPJ: string;
	CPF: string;
	chNFe: string;
	dhEvento: string;
	tpEvento: string;
	nSeqEvento: string;
	verEvento: string;
	detEvento: string;
	versaoDaCartaDeCorrecao: string;
	descEvento: string;
	xCorrecao: string;
	xCondUso: string;
	Signature: string;
}

export interface RecepcaoEventoSaida {
	retEnvioEvento: string;
	versao: string;
	idLote: string;
	tpAmb: string;
	verAplic: string;
	cOrgao: string;
	cStat: string;
	xMotivo: string;
	retEvento: string;
	infEvento: string;
	Id: string;
	chNfe: string;
	tpEvento: string;
	xEvento: string;
	nSeqEvento: string;
	CNPJDest: string;
	CPFDest: string;
	emailDest: string;
	dhRegEvento: string;
	nProt: string;
	Signature: string;
}
