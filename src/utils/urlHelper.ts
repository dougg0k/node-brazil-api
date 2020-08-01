import { Ambiente, Autorizadores } from "../typings/generalTypes";

export function buildUrl(
	autorizadores: Autorizadores,
	estadoSigla: string,
	servico: string,
	ambiente: Ambiente,
): string {
	return autorizadores[estadoSigla].servicos[servico][
		ambiente === "homologacao" ? "homologacaoUrl" : "producaoUrl"
	];
}
