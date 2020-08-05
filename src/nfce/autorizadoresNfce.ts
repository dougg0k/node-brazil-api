import { Autorizadores } from "../typings/generalTypes";
import {
	AUTORIZACAO,
	CONSULTA_CADASTRO,
	CONSULTA_PROTOCOLO,
	INUTILIZACAO,
	RECEPCAO_EVENTO,
	RET_AUTORIZACAO,
	STATUS_SERVICO,
} from "../utils/constants";

const autorizadoresNfce: Autorizadores = {
	AM: {
		nome: "Amazonas",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.sefaz.am.gov.br/nfce-services/services/NfeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homnfce.sefaz.am.gov.br/nfce-services/services/NfeAutorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.sefaz.am.gov.br/nfce-services/services/NfeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homnfce.sefaz.am.gov.br/nfce-services/services/NfeRetAutorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfce.sefaz.am.gov.br/nfce-services/services/NfeStatusServico4?wsdl",
				homologacaoUrl:
					"https://homnfce.sefaz.am.gov.br/nfce-services/services/NfeStatusServico4.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfce.sefaz.am.gov.br/nfce-services/services/NFeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://homnfce.sefaz.am.gov.br/nfce-services/services/NFeInutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfce.sefaz.am.gov.br/nfce-services/services/NfeConsulta4?wsdl",
				homologacaoUrl:
					"https://homnfce.sefaz.am.gov.br/nfce-services/services/NfeConsulta4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfce.sefaz.am.gov.br/nfce-services/services/RecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://homnfce.sefaz.am.gov.br/nfce-services/services/RecepcaoEvento4?wsdl",
			},
		},
	},
	CE: {
		nome: "Ceará",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.sefaz.ce.gov.br/nfce4/services/NFeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://nfceh.sefaz.ce.gov.br/nfce4/services/NFeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.sefaz.ce.gov.br/nfce4/services/NFeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://nfceh.sefaz.ce.gov.br/nfce4/services/NFeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfce.sefaz.ce.gov.br/nfce4/services/NFeStatusServico4?wsdl",
				homologacaoUrl:
					"https://nfceh.sefaz.ce.gov.br/nfce4/services/NFeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfce.sefaz.ce.gov.br/nfce4/services/NFeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://nfceh.sefaz.ce.gov.br/nfce4/services/NFeInutilizacao4?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfce.sefaz.ce.gov.br/nfce4/services/NFeConsultaProtocolo4?wsdl",
				homologacaoUrl:
					"https://nfceh.sefaz.ce.gov.br/nfce4/services/NFeConsultaProtocolo4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfce.sefaz.ce.gov.br/nfce4/services/NFeRecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://nfceh.sefaz.ce.gov.br/nfce4/services/NFeRecepcaoEvento4?wsdl",
			},
		},
	},
	GO: {
		nome: "Goiás",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homolog.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homolog.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
				homologacaoUrl:
					"https://homolog.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://homolog.sefaz.go.gov.br/nfe/services/Nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4?wsdl",
				homologacaoUrl:
					"https://homolog.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://homolog.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
				homologacaoUrl:
					"https://homolog.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl",
			},
		},
	},
	MT: {
		nome: "Mato Grosso",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.sefaz.mt.gov.br/nfcews/services/NfeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfcews/services/NfeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.sefaz.mt.gov.br/nfcews/services/NfeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfcews/services/NfeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfce.sefaz.mt.gov.br/nfcews/services/NfeStatusServico4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfcews/services/NfeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfce.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfcews/services/Nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfce.sefaz.mt.gov.br/nfcews/services/NfeConsulta4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfcews/services/NfeConsulta4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfce.sefaz.mt.gov.br/nfcews/services/RecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfcews/services/RecepcaoEvento4?wsdl",
			},
		},
	},
	MS: {
		nome: "Mato Grosso do Sul",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl: "https://nfce.sefaz.ms.gov.br/ws/NFeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://hom.nfce.sefaz.ms.gov.br/ws/NFeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl: "https://nfce.sefaz.ms.gov.br/ws/NFeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://hom.nfce.sefaz.ms.gov.br/ws/NFeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl: "https://nfce.sefaz.ms.gov.br/ws/NFeStatusServico4?wsdl",
				homologacaoUrl:
					"https://hom.nfce.sefaz.ms.gov.br/ws/NFeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl: "https://nfce.sefaz.ms.gov.br/ws/NFeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://hom.nfce.sefaz.ms.gov.br/ws/Nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfce.sefaz.ms.gov.br/ws/NFeConsultaProtocolo4?wsdl",
				homologacaoUrl:
					"https://hom.nfce.sefaz.ms.gov.br/ws/NFeConsultaProtocolo4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl: "https://nfce.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://hom.nfce.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://nfce.sefaz.ms.gov.br/ws/CadConsultaCadastro4?wsdl",
				homologacaoUrl:
					"https://hom.nfce.sefaz.ms.gov.br/ws/CadConsultaCadastro4?wsdl",
			},
		},
	},
	MG: {
		nome: "Minas Gerais",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.fazenda.mg.gov.br/nfce/services/NFeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://hnfce.fazenda.mg.gov.br/nfce/services/NFeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.fazenda.mg.gov.br/nfce/services/NFeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://hnfce.fazenda.mg.gov.br/nfce/services/NFeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfce.fazenda.mg.gov.br/nfce/services/NFeStatusServico4?wsdl",
				homologacaoUrl:
					"https://hnfce.fazenda.mg.gov.br/nfce/services/NFeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfce.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://hnfce.fazenda.mg.gov.br/nfce/services/Nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfce.fazenda.mg.gov.br/nfce/services/NFeConsultaProtocolo4?wsdl",
				homologacaoUrl:
					"https://hnfce.fazenda.mg.gov.br/nfce/services/NFeConsultaProtocolo4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfce.fazenda.mg.gov.br/nfce/services/NFeRecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://hnfce.fazenda.mg.gov.br/nfce/services/NFeRecepcaoEvento4?wsdl",
			},
		},
	},
	PR: {
		nome: "Paraná",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl: "https://nfce.sefa.pr.gov.br/nfce/NFeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.sefa.pr.gov.br/nfce/NFeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl: "https://nfce.sefa.pr.gov.br/nfce/NFeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.sefa.pr.gov.br/nfce/NFeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl: "https://nfce.sefa.pr.gov.br/nfce/NFeStatusServico4?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.sefa.pr.gov.br/nfce/NFeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl: "https://nfce.sefa.pr.gov.br/nfe/NFeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.sefa.pr.gov.br/nfce/Nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					" https://nfce.sefa.pr.gov.br/nfce/NFeConsultaProtocolo4?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.sefa.pr.gov.br/nfce/NFeConsultaProtocolo4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl: "https://nfce.sefa.pr.gov.br/nfce/NFeRecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.sefa.pr.gov.br/nfce/NFeRecepcaoEvento4?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://nfce.sefa.pr.gov.br/nfce/CadConsultaCadastro4?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.sefa.pr.gov.br/nfce/CadConsultaCadastro4?wsdl",
			},
		},
	},
	RS: {
		nome: "Rio Grande do Sul",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfce.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfce.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfce.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfce.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx?wsdl",
			},
		},
	},
	SVRS: {
		nome: "SEFAZ Virtual – SVRS",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfce.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfce.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfce.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfce.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx?wsdl",
				homologacaoUrl:
					"https://nfce-homologacao.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx?wsdl",
			},
		},
	},
	SP: {
		nome: "São Paulo",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.fazenda.sp.gov.br/ws/NFeAutorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfce.fazenda.sp.gov.br/ws/NFeRetAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.fazenda.sp.gov.br/ws/NFeRetAutorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfce.fazenda.sp.gov.br/ws/NFeStatusServico4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.fazenda.sp.gov.br/ws/NFeStatusServico4.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfce.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfce.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://nfce.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfce.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfce.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx?wsdl",
			},
		},
	},
};

export default autorizadoresNfce;
