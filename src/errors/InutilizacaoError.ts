export class InutilizacaoError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "InutilizacaoError";
	}
}
