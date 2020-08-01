export interface RetAutorizacaoEntrada {
	consReciNFe: string;
	versao: string;
	tpAmb: string;
	nRec: string;
}

export interface RetAutorizacaoSaida {
	retConsReciNFe: string;
	versao: string;
	tpAmb: string;
	verAplic: string;
	nRec: string;
	cStat: string;
	xMotivo: string;
	cUF: string;
	dhRecbto: string;
	cMsg: string;
	xMsg: string;
	protNFe: string;
}

export interface RetAutorizacaoProcessado {
	protNFe: string;
	versao: string;
	infProt: string;
	Id: string;
	tpAmb: string;
	verAplic: string;
	chNFe: string;
	dhRecbto: string;
	nProt: string;
	digVal: string;
	cStat: string;
	xMotivo: string;
	Signature: string;
}
