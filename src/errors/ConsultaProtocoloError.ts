export class ConsultaProtocoloError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "ConsultaProtocoloError";
	}
}
