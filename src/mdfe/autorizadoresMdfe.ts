export default {
	SVRS: {
		nome: "SEFAZ Virtual Rio Grande do Sul",
		servicos: {
			recepcao: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRecepcao/MDFeRecepcao.asmx",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRecepcao/MDFeRecepcao.asmx",
			},
			retRecepcao: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRetRecepcao/MDFeRetRecepcao.asmx",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRetRecepcao/MDFeRetRecepcao.asmx",
			},
			recepcaoEvento: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRecepcaoEvento/MDFeRecepcaoEvento.asmx",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRecepcaoEvento/MDFeRecepcaoEvento.asmx",
			},
			consulta: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeConsulta/MDFeConsulta.asmx",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeConsulta/MDFeConsulta.asmx",
			},
			statusServico: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeStatusServico/MDFeStatusServico.asmx",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeStatusServico/MDFeStatusServico.asmx",
			},
			consNaoEnc: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeConsNaoEnc/MDFeConsNaoEnc.asmx",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeConsNaoEnc/MDFeConsNaoEnc.asmx",
			},
			distribuicaoDFe: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeDistribuicaoDFe/MDFeDistribuicaoDFe.asmx",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeDistribuicaoDFe/MDFeDistribuicaoDFe.asmx",
			},
			recepcaoSinc: {
				producaoUrl:
					"https://mdfe.svrs.rs.gov.br/ws/MDFeRecepcaoSinc/MDFeRecepcaoSinc.asmx",
				homologacaoUrl:
					"https://mdfe-homologacao.svrs.rs.gov.br/ws/MDFeRecepcaoSinc/MDFeRecepcaoSinc.asmx",
			},
			qrCode: {
				producaoUrl: "https://dfe-portal.svrs.rs.gov.br/mdfe/qrCode",
				homologacaoUrl: "https://dfe-portal.svrs.rs.gov.br/mdfe/qrCode",
			},
		},
	},
};
