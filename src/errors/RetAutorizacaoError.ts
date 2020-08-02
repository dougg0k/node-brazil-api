export class RetAutorizacaoError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "RetAutorizacaoError";
	}
}
