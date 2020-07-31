export class CorreiosCEPError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "CorreiosCEPError";
	}
}
