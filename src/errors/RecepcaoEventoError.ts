export class RecepcaoEventoError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "RecepcaoEventoError";
	}
}
