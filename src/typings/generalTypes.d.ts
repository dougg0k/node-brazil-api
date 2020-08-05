export type Sigla =
	| "AM"
	| "AC"
	| "AL"
	| "AP"
	| "AM"
	| "BA"
	| "CE"
	| "DF"
	| "ES"
	| "GO"
	| "MA"
	| "MT"
	| "MS"
	| "MG"
	| "PA"
	| "PB"
	| "PR"
	| "PE"
	| "PI"
	| "RJ"
	| "RN"
	| "RS"
	| "RO"
	| "RR"
	| "SC"
	| "SP"
	| "SE"
	| "TO"
	| "SVAN"
	| "SVRS"
	| "SVC-AN"
	| "SVC-RS"
	| "AN";

export type Autorizadores = {
	[sigla in Sigla]?: {
		nome: string;
		estadosSuportados?: Array<string>;
		servicos: {
			[servico: string]: { producaoUrl: string; homologacaoUrl: string };
		};
	};
};

export type Ambiente = "homologacao" | "producao";
