export class DistribuicaoDfeError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "DistribuicaoDfeError";
	}
}
