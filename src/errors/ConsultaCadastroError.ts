export class ConsultaCadastroError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "ConsultaCadastroError";
	}
}
