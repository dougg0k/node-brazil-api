export class SetupGovError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "SetupGovError";
	}
}
