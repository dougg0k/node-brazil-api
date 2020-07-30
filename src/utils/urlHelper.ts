import config from "../config";
import { Autorizadores } from "./generalTypes.d";

export const isHomologacao = config.GOV_API_ENVIRONMENT === "homologacao";
export const isProducao = config.GOV_API_ENVIRONMENT === "producao";

export function buildUrl(
	autorizadores: Autorizadores,
	estadoSigla: string,
	servico: string,
): string {
	return autorizadores[estadoSigla].servicos[servico][
		isHomologacao ? "homologacaoUrl" : "producaoUrl"
	];
}
