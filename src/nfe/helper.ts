export function verifyEstadoSigla(
	estadoSigla: string,
	autorizadores: Record<string, unknown>,
): void {
	if (!estadoSigla) {
		throw new Error("A sigla é necessária");
	}
	if (typeof estadoSigla !== "string") {
		throw new Error("Deve ser do tipo string");
	}
	if (estadoSigla.length !== 2) {
		throw new Error("A sigla contêm apenas 2 digitos");
	}
	const autorizador = Object.keys(autorizadores).find(
		(sigla) => sigla === estadoSigla,
	);
	if (!autorizador) {
		throw new Error("Estado não encontrado, verifique se sua sigla existe.");
	}
}
