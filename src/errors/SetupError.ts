export class SetupError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "SetupError";
	}
}
