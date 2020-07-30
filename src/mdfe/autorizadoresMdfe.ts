export default {
	SVRS: {
		nome: "SEFAZ Virtual Rio Grande do Sul",
		servicos: {
			recepcao: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRecepcao/MDFeRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRecepcao/MDFeRecepcao.asmx?wsdl",
			},
			retRecepcao: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRetRecepcao/MDFeRetRecepcao.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRetRecepcao/MDFeRetRecepcao.asmx?wsdl",
			},
			recepcaoEvento: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRecepcaoEvento/MDFeRecepcaoEvento.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRecepcaoEvento/MDFeRecepcaoEvento.asmx?wsdl",
			},
			consulta: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeConsulta/MDFeConsulta.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeConsulta/MDFeConsulta.asmx?wsdl",
			},
			statusServico: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeStatusServico/MDFeStatusServico.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeStatusServico/MDFeStatusServico.asmx?wsdl",
			},
			consNaoEnc: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeConsNaoEnc/MDFeConsNaoEnc.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeConsNaoEnc/MDFeConsNaoEnc.asmx?wsdl",
			},
			distribuicaoDFe: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeDistribuicaoDFe/MDFeDistribuicaoDFe.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeDistribuicaoDFe/MDFeDistribuicaoDFe.asmx?wsdl",
			},
			recepcaoSinc: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRecepcaoSinc/MDFeRecepcaoSinc.asmx?wsdl",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRecepcaoSinc/MDFeRecepcaoSinc.asmx?wsdl",
			},
			qrCode: {
				producaoUrl: "https://dfe-portal.svrs.rs.gov.br/mdfe/qrCode",
				homologacaoUrl: "https://dfe-portal.svrs.rs.gov.br/mdfe/qrCode",
			},
		},
	},
};
