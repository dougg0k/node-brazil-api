export interface EnviNFe {
	idLote: string;
	indSinc: EnviNFeIndSinc;
	NFe: NFe;
}

export interface RetEnviNFe {
	verAplic: string;
	cStat: number;
	xMotivo: string;
	cUF: number;
	dhRecbto: string;
	infRec: string;
}

export enum EnviNFeIndSinc {
	ASSINC = "0",
	SINC = "1",
}

export interface NFe {
	infNFe: {
		$Id: string;
		$versao: string;
	};
}
