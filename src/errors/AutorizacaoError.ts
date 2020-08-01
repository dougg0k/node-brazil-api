export class AutorizacaoError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "AutorizacaoError";
	}
}
