import { Autorizadores } from "../typings/generalTypes";
import {
	CONST_NAO_ENC,
	CONSULTA,
	DISTRIBUICAO_DFE,
	QR_CODE,
	RECEPCAO,
	RECEPCAO_EVENTO,
	RECEPCAO_SINC,
	RET_RECEPCAO,
	STATUS_SERVICO,
} from "./../utils/constants";

const autorizadoresMdfe: Autorizadores = {
	SVRS: {
		nome: "SEFAZ Virtual Rio Grande do Sul",
		servicos: {
			[RECEPCAO]: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRecepcao/MDFeRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRecepcao/MDFeRecepcao.asmx?wsdl",
			},
			[RET_RECEPCAO]: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRetRecepcao/MDFeRetRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRetRecepcao/MDFeRetRecepcao.asmx?wsdl",
			},
			[RECEPCAO_EVENTO]: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRecepcaoEvento/MDFeRecepcaoEvento.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRecepcaoEvento/MDFeRecepcaoEvento.asmx?wsdl",
			},
			[CONSULTA]: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeConsulta/MDFeConsulta.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeConsulta/MDFeConsulta.asmx?wsdl",
			},
			[STATUS_SERVICO]: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeStatusServico/MDFeStatusServico.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeStatusServico/MDFeStatusServico.asmx?wsdl",
			},
			[CONST_NAO_ENC]: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeConsNaoEnc/MDFeConsNaoEnc.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeConsNaoEnc/MDFeConsNaoEnc.asmx?wsdl",
			},
			[DISTRIBUICAO_DFE]: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeDistribuicaoDFe/MDFeDistribuicaoDFe.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeDistribuicaoDFe/MDFeDistribuicaoDFe.asmx?wsdl",
			},
			[RECEPCAO_SINC]: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRecepcaoSinc/MDFeRecepcaoSinc.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRecepcaoSinc/MDFeRecepcaoSinc.asmx?wsdl",
			},
			[QR_CODE]: {
				producaoUrl: "https://dfe-portal.svrs.rs.gov.br/mdfe/qrCode",
				homologacaoUrl: "https://dfe-portal.svrs.rs.gov.br/mdfe/qrCode",
			},
		},
	},
};

export default autorizadoresMdfe;
