import {
	autorizacaoNfeAsync,
	autorizacaoNfeSync,
} from "./autorizacao/autorizacaoNfe";
import {
	consultaCadastroAsync,
	consultaCadastroSync,
} from "./consultaCadastro/consultaCadastroNfe";
import {
	consultaProtocoloAsync,
	consultaProtocoloSync,
} from "./consultaProtocolo/consultaProtocoloNfe";
import {
	distribuicaoDFeAsync,
	distribuicaoDFeSync,
} from "./distribuicaoDfe/distribuicaoDfeNfe";
import {
	inutilizacaoAsync,
	inutilizacaoSync,
} from "./inutilizacao/inutilizacaoNfe";
import {
	recepcaoEventoAsync,
	recepcaoEventoSync,
} from "./recepcaoEvento/recepcaoEventoNfe";
import {
	retAutorizacaoAsync,
	retAutorizacaoSync,
} from "./retAutorizacao/retAutorizacaoNfe";
import {
	statusServicoAsync,
	statusServicoSync,
} from "./statusServico/statusServicoNfe";

export const NFE = {
	autorizacaoNfeSync,
	autorizacaoNfeAsync,
	consultaCadastroSync,
	consultaCadastroAsync,
	consultaProtocoloSync,
	consultaProtocoloAsync,
	distribuicaoDFeSync,
	distribuicaoDFeAsync,
	inutilizacaoSync,
	inutilizacaoAsync,
	recepcaoEventoAsync,
	recepcaoEventoSync,
	retAutorizacaoAsync,
	retAutorizacaoSync,
	statusServicoAsync,
	statusServicoSync,
};
