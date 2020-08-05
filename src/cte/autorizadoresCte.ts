import { Autorizadores } from "../typings/generalTypes";
import {
	CONSULTA_PROTOCOLO,
	DISTRIBUICAO_DFE,
	INUTILIZACAO,
	RECEPCAO,
	RECEPCAO_EVENTO,
	RECEPCAO_OS,
	RET_RECEPCAO,
	STATUS_SERVICO,
} from "../utils/constants";

const autorizadoresCte: Autorizadores = {
	MT: {
		nome: "Mato Grosso",
		servicos: {
			[RECEPCAO]: {
				producaoUrl:
					"https://cte.sefaz.mt.gov.br/ctews/services/CteRecepcao?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/ctews/services/CteRecepcao?wsdl",
			},
			[RET_RECEPCAO]: {
				producaoUrl:
					"https://cte.sefaz.mt.gov.br/ctews/services/CteRetRecepcao?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/ctews/services/CteRetRecepcao?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://cte.sefaz.mt.gov.br/ctews/services/CteInutilizacao?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/ctews/services/CteInutilizacao?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://cte.sefaz.mt.gov.br/ctews/services/CteConsulta?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/ctews/services/CteConsulta?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://cte.sefaz.mt.gov.br/ctews/services/CteStatusServico?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/ctews/services/CteStatusServico?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://cte.sefaz.mt.gov.br/ctews2/services/CteRecepcaoEvento?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/ctews2/services/CteRecepcaoEvento?wsdl",
			},
			[RECEPCAO_OS]: {
				producaoUrl:
					"https://cte.sefaz.mt.gov.br/ctews/services/CteRecepcaoOS?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/ctews/services/CteRecepcaoOS?wsdl",
			},
		},
	},
	MS: {
		nome: "Mato Grosso do Sul",
		servicos: {
			[RECEPCAO]: {
				producaoUrl: "https://producao.cte.ms.gov.br/ws/CteRecepcao?wsdl",
				homologacaoUrl: "https://homologacao.cte.ms.gov.br/ws/CteRecepcao?wsdl",
			},
			[RET_RECEPCAO]: {
				producaoUrl: "https://producao.cte.ms.gov.br/ws/CteRetRecepcao?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.ms.gov.br/ws/CteRetRecepcao?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl: "https://producao.cte.ms.gov.br/ws/CteInutilizacao?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.ms.gov.br/ws/CteInutilizacao?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl: "https://producao.cte.ms.gov.br/ws/CteConsulta?wsdl",
				homologacaoUrl: "https://homologacao.cte.ms.gov.br/ws/CteConsulta?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl: "https://producao.cte.ms.gov.br/ws/CteStatusServico?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.ms.gov.br/ws/CteStatusServico?wsdl",
			},
			consultaCadastro: {
				producaoUrl: "https://nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4?wsdl",
				homologacaoUrl:
					"https://hom.nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl: "https://producao.cte.ms.gov.br/ws/CteRecepcaoEvento?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.ms.gov.br/ws/CteRecepcaoEvento?wsdl",
			},
			[RECEPCAO_OS]: {
				producaoUrl: "https://producao.cte.ms.gov.br/ws/CteRecepcaoOS?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.ms.gov.br/ws/CteRecepcaoOS?wsdl",
			},
		},
	},
	MG: {
		nome: "Minas Gerais",
		servicos: {
			[RECEPCAO]: {
				producaoUrl:
					"https://cte.fazenda.mg.gov.br/cte/services/CteRecepcao?wsdl",
				homologacaoUrl:
					"https://hcte.fazenda.mg.gov.br/cte/services/CteRecepcao?wsdl",
			},
			[RET_RECEPCAO]: {
				producaoUrl:
					"https://cte.fazenda.mg.gov.br/cte/services/CteRetRecepcao?wsdl",
				homologacaoUrl:
					"https://hcte.fazenda.mg.gov.br/cte/services/CteRetRecepcao?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://cte.fazenda.mg.gov.br/cte/services/CteInutilizacao?wsdl",
				homologacaoUrl:
					"https://hcte.fazenda.mg.gov.br/cte/services/CteInutilizacao?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://cte.fazenda.mg.gov.br/cte/services/CteConsulta?wsdl",
				homologacaoUrl:
					"https://hcte.fazenda.mg.gov.br/cte/services/CteConsulta?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://cte.fazenda.mg.gov.br/cte/services/CteStatusServico?wsdl",
				homologacaoUrl:
					"https://hcte.fazenda.mg.gov.br/cte/services/CteStatusServico?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://cte.fazenda.mg.gov.br/cte/services/RecepcaoEvento?wsdl",
				homologacaoUrl:
					"https://hcte.fazenda.mg.gov.br/cte/services/RecepcaoEvento?wsdl",
			},
			[RECEPCAO_OS]: {
				producaoUrl:
					"https://cte.fazenda.mg.gov.br/cte/services/CteRecepcaoOS?wsdl",
				homologacaoUrl:
					"https://hcte.fazenda.mg.gov.br/cte/services/CteRecepcaoOS?wsdl",
			},
		},
	},
	PR: {
		nome: "Paraná",
		servicos: {
			[RECEPCAO]: {
				producaoUrl: "https://cte.fazenda.pr.gov.br/cte/CteRecepcao?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.fazenda.pr.gov.br/cte/CteRecepcao?wsdl",
			},
			[RET_RECEPCAO]: {
				producaoUrl: "https://cte.fazenda.pr.gov.br/cte/CteRetRecepcao?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.fazenda.pr.gov.br/cte/CteRetRecepcao?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl: "https://cte.fazenda.pr.gov.br/cte/CteInutilizacao?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.fazenda.pr.gov.br/cte/CteInutilizacao?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl: "https://cte.fazenda.pr.gov.br/cte/CteConsulta?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.fazenda.pr.gov.br/cte/CteConsulta?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl: "https://cte.fazenda.pr.gov.br/cte/CteStatusServico?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.fazenda.pr.gov.br/cte/CteStatusServico?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl: "https://cte.fazenda.pr.gov.br/cte/CteRecepcaoEvento?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.fazenda.pr.gov.br/cte/CteRecepcaoEvento?wsdl",
			},
			[RECEPCAO_OS]: {
				producaoUrl: "https://cte.fazenda.pr.gov.br/cte/CteRecepcaoOS?wsdl",
				homologacaoUrl:
					"https://homologacao.cte.fazenda.pr.gov.br/cte/CteRecepcaoOS?wsdl",
			},
		},
	},
	RS: {
		nome: "Rio Grande do Sul",
		servicos: {
			[RECEPCAO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cterecepcao/CteRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cterecepcao/CteRecepcao.asmx?wsdl",
			},
			[RET_RECEPCAO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cteretrecepcao/cteRetRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cteretrecepcao/cteRetRecepcao.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cteinutilizacao/cteinutilizacao.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cteinutilizacao/cteinutilizacao.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cteconsulta/CteConsulta.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cteconsulta/CteConsulta.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/ctestatusservico/CteStatusServico.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/ctestatusservico/CteStatusServico.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cterecepcaoevento/cterecepcaoevento.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cterecepcaoevento/cterecepcaoevento.asmx?wsdl",
			},
			[RECEPCAO_OS]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cterecepcaoos/cterecepcaoos.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cterecepcaoos/cterecepcaoos.asmx?wsdl",
			},
		},
	},
	SP: {
		nome: "São Paulo",
		servicos: {
			[RECEPCAO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteWEB/services/cteRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteWEB/services/cteRecepcao.asmx?wsdl",
			},
			[RET_RECEPCAO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteWEB/services/cteRetRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteWEB/services/cteRetRecepcao.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteWEB/services/cteInutilizacao.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteWEB/services/cteInutilizacao.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteWEB/services/cteConsulta.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteWEB/services/cteConsulta.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteWEB/services/cteStatusServico.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteWEB/services/cteStatusServico.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteweb/services/cteRecepcaoEvento.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteweb/services/cteRecepcaoEvento.asmx?wsdl",
			},
			[RECEPCAO_OS]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteWEB/services/cteRecepcaoOS.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteWEB/services/cteRecepcaoOS.asmx?wsdl",
			},
		},
	},
	SVRS: {
		nome: "Sefaz Virtual Rio Grande do Sul",
		estadosSuportados: [
			"AC",
			"AL",
			"AM",
			"BA",
			"CE",
			"DF",
			"ES",
			"GO",
			"MA",
			"PA",
			"PB",
			"PI",
			"RJ",
			"RN",
			"RO",
			"SC",
			"SE",
			"TO",
		],
		servicos: {
			[RECEPCAO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cterecepcao/CteRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cterecepcao/CteRecepcao.asmx?wsdl",
			},
			[RET_RECEPCAO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cteretrecepcao/cteRetRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cteretrecepcao/cteRetRecepcao.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cteinutilizacao/cteinutilizacao.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cteinutilizacao/cteinutilizacao.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cteconsulta/CteConsulta.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cteconsulta/CteConsulta.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/ctestatusservico/CteStatusServico.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/ctestatusservico/CteStatusServico.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cterecepcaoevento/cterecepcaoevento.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cterecepcaoevento/cterecepcaoevento.asmx?wsdl",
			},
			[RECEPCAO_OS]: {
				producaoUrl:
					"https://cte.svrs.rs.gov.br/ws/cterecepcaoos/cterecepcaoos.asmx?wsdl",
				homologacaoUrl:
					"https://cte-homologacao.svrs.rs.gov.br/ws/cterecepcaoos/cterecepcaoos.asmx?wsdl",
			},
		},
	},
	SVSP: {
		nome: "Sefaz Virtual São Paulo",
		estadosSuportados: ["AP", "PE", "RR"],
		servicos: {
			[RECEPCAO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteWEB/services/cteRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteWEB/services/CteRecepcao.asmx?wsdl",
			},
			[RET_RECEPCAO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteWEB/services/CteRetRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteWEB/services/CteRetRecepcao.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteWEB/services/CteConsulta.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteWEB/services/CteConsulta.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/cteWEB/services/CteStatusServico.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/cteWEB/services/CteStatusServico.asmx?wsdl",
			},
		},
	},
	AN: {
		nome: "Ambiente Nacional",
		servicos: {
			[DISTRIBUICAO_DFE]: {
				producaoUrl:
					"https://www1.cte.fazenda.gov.br/CTeDistribuicaoDFe/CTeDistribuicaoDFe.asmx?wsdl",
				homologacaoUrl:
					"https://hom1.cte.fazenda.gov.br/CTeDistribuicaoDFe/CTeDistribuicaoDFe.asmx?wsdl",
			},
		},
	},
};

export default autorizadoresCte;
