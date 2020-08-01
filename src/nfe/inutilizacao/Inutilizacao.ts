export interface InutilizacaoEntrada {
	inutNFe: string;
	versao: string;
	infInut: string;
	Id: string;
	tpAmb: string;
	xServ: string;
	cUF: string;
	ano: string;
	CNPJ: string;
	mod: string;
	serie: string;
	nNFIni: string;
	nNFFin: string;
	xJust: string;
	Signature: string;
}

export interface InutilizacaoSaida {
	retInutNFe: string;
	versao: string;
	infInut: string;
	Id: string;
	tpAmb: string;
	verAplic: string;
	cStat: string;
	xMotivo: string;
	cUF: string;
	ano: string;
	CNPJ: string;
	mod: string;
	serie: string;
	nNFIni: string;
	nNFFin: string;
	dhRecbto: string;
	nProt: string;
	Signature: string;
}
