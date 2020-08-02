export class StatusServicoError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "StatusServicoError";
	}
}
