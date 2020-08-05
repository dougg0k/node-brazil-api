import { Autorizadores } from "../typings/generalTypes";
import {
	AUTORIZACAO,
	CONSULTA_CADASTRO,
	CONSULTA_PROTOCOLO,
	DISTRIBUICAO_DFE,
	INUTILIZACAO,
	RECEPCAO_EVENTO,
	RET_AUTORIZACAO,
	STATUS_SERVICO,
} from "./../utils/constants";

const autorizadoresNfe: Autorizadores = {
	AM: {
		nome: "Amazonas",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homnfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homnfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4?wsdl",
				homologacaoUrl:
					"https://homnfe.sefaz.am.gov.br/services2/services/NfeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://homnfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4?wsdl",
				homologacaoUrl:
					"https://homnfe.sefaz.am.gov.br/services2/services/NfeConsulta4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://homnfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4?wsdl",
			},
		},
	},
	BA: {
		nome: "Bahia",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://hnfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://hnfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx?wsdl",
				homologacaoUrl:
					"https://hnfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://hnfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.sefaz.ba.gov.br/webservices/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx?wsdl",
				homologacaoUrl:
					"https://hnfe.sefaz.ba.gov.br/webservices/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx?wsdl",
				homologacaoUrl:
					"https://hnfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx?wsdl",
				homologacaoUrl:
					"https://hnfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx?wsdl",
			},
		},
	},
	CE: {
		nome: "Ceará",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.ce.gov.br/nfe4/services/NFeAutorizacao4?wsdl?wsdl",
				homologacaoUrl:
					"https://nfeh.sefaz.ce.gov.br/nfe4/services/NFeAutorizacao4?WSDL?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.ce.gov.br/nfe4/services/NFeRetAutorizacao4?wsdl?wsdl",
				homologacaoUrl:
					"https://nfeh.sefaz.ce.gov.br/nfe4/services/NFeRetAutorizacao4?WSDL?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.sefaz.ce.gov.br/nfe4/services/NFeStatusServico4?wsdl?wsdl",
				homologacaoUrl:
					"https://nfeh.sefaz.ce.gov.br/nfe4/services/NFeStatusServico4?WSDL?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.ce.gov.br/nfe4/services/NFeInutilizacao4?wsdl?wsdl",
				homologacaoUrl:
					"https://nfeh.sefaz.ce.gov.br/nfe4/services/NFeInutilizacao4?wsdl?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.sefaz.ce.gov.br/nfe4/services/NFeConsultaProtocolo4?wsdl?wsdl",
				homologacaoUrl:
					"https://nfeh.sefaz.ce.gov.br/nfe4/services/NFeConsultaProtocolo4?wsdl?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.sefaz.ce.gov.br/nfe4/services/NFeRecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://nfeh.sefaz.ce.gov.br/nfe4/services/NFeRecepcaoEvento4?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://nfe.sefaz.ce.gov.br/nfe4/services/CadConsultaCadastro4?wsdl",
				homologacaoUrl:
					"https://nfeh.sefaz.ce.gov.br/nfe4/services/CadConsultaCadastro4?wsdl",
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
					"https://homolog.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl",
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
	MG: {
		nome: "Minas Gerais",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4?wsdl",
				homologacaoUrl:
					"https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.fazenda.mg.gov.br/nfe2/services/NFeConsultaProtocolo4?wsdl",
				homologacaoUrl:
					"https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeConsultaProtocolo4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeRecepcaoEvento4?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://nfe.fazenda.mg.gov.br/nfe2/services/CadConsultaCadastro4?wsdl",
				homologacaoUrl:
					"https://hnfe.fazenda.mg.gov.br/nfe2/services/CadConsultaCadastro4?wsdl",
			},
		},
	},
	MS: {
		nome: "Mato Grosso do Sul",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl: "https://nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://hom.nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl: "https://nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://hom.nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl: "https://nfe.sefaz.ms.gov.br/ws/NFeStatusServico4?wsdl",
				homologacaoUrl:
					"https://hom.nfe.sefaz.ms.gov.br/ws/NFeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl: "https://nfe.sefaz.ms.gov.br/ws/NFeInutilizacao4?wsdl",
				homologacaoUrl: "https://hom.sefaz.ms.gov.br/ws/NFeInutilizacao4?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.sefaz.ms.gov.br/ws/NFeConsultaProtocolo4?wsdl",
				homologacaoUrl:
					"https://hom.sefaz.ms.gov.br/ws/NFeConsultaProtocolo4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl: "https://nfe.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://hom.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl: "https://nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4?wsdl",
				homologacaoUrl:
					"https://hom.sefaz.ms.gov.br/ws/CadConsultaCadastro4?wsdl",
			},
		},
	},
	MT: {
		nome: "Mato Grosso",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://nfe.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl",
			},
		},
	},
	PE: {
		nome: "Pernambuco",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4?wsdl",
				homologacaoUrl:
					"https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4?wsdl",
				homologacaoUrl:
					"https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://nfe.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4?wsdl",
				homologacaoUrl:
					"https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4?wsdl",
			},
		},
	},
	PR: {
		nome: "Paraná",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl: "https://nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl: "https://nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl: "https://nfe.sefa.pr.gov.br/nfe/NFeStatusServico4?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeStatusServico4?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl: "https://nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefa.pr.gov.br/nfe/NFeInutilizacao4?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl: "https://nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl: "https://nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4?wsdl",
				homologacaoUrl:
					"https://homologacao.sefa.pr.gov.br/nfe/CadConsultaCadastro4?wsdl",
			},
		},
	},
	RS: {
		nome: "Rio Grande do Sul",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://cad.sefazrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx?wsdl",
				homologacaoUrl:
					"https://cad-homologacao.sefazrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx?wsdl",
			},
		},
	},
	SP: {
		nome: "São Paulo",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx?wsdl",
				homologacaoUrl:
					"https://homologacao.nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx?wsdl",
			},
		},
	},
	SVAN: {
		nome: "Sefaz Virtual Ambiente Nacional",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx?wsdl",
			},
		},
	},
	SVRS: {
		nome: "Sefaz Virtual Rio Grande do Sul",
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx?wsdl",
			},
			[CONSULTA_CADASTRO]: {
				producaoUrl:
					"https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx?wsdl",
				homologacaoUrl:
					"https://cad-homologacao.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx?wsdl",
			},
		},
	},
	"SVC-AN": {
		nome: "Sefaz Virtual de Contingência Ambiente Nacional",
		estadosSuportados: [
			"AC",
			"AL",
			"AP",
			"DF",
			"ES",
			"MG",
			"PA",
			"PB",
			"PI",
			"RJ",
			"RN",
			"RO",
			"RR",
			"RS",
			"SC",
			"SE",
			"SP",
			"TO",
		],
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://www.svc.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.svc.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://www.svc.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.svc.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://www.svc.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.svc.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx?wsdl",
			},
			[INUTILIZACAO]: {
				producaoUrl:
					"https://www.svc.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.svc.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://www.svc.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.svc.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://www.svc.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.svc.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx?wsdl",
			},
		},
	},
	"SVC-RS": {
		nome: "Sefaz Virtual de Contingência Rio Grande do Sul",
		estadosSuportados: ["AM", "BA", "CE", "GO", "MA", "MS", "MT", "PE", "PR"],
		servicos: {
			[AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx?wsdl",
			},
			[RET_AUTORIZACAO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx?wsdl",
			},
			[CONSULTA_PROTOCOLO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx?wsdl",
				homologacaoUrl:
					"https://nfe-homologacao.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx?wsdl",
			},
		},
	},
	AN: {
		nome: "Ambiente Nacional",
		estadosSuportados: ["MA"],
		servicos: {
			[DISTRIBUICAO_DFE]: {
				producaoUrl:
					"https://www1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx?wsdl",
				homologacaoUrl:
					"https://hom.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://www.nfe.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx?wsdl",
				homologacaoUrl:
					"https://hom.nfe.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx?wsdl",
			},
		},
	},
};

export default autorizadoresNfe;
