import { SetupGovError } from "../errors/SetupGovError";
import { Ambiente } from "../typings/generalTypes";

export let ambiente;
export let pfx;
export let passphrase;

export function setupGovAPI(options: {
	ambiente: Ambiente;
	pfx: Buffer;
	passphrase: string;
}): void {
	if (!options.ambiente) {
		throw new SetupGovError("Precisa declarar o ambiente de uso");
	}
	if (typeof options.ambiente !== "string") {
		throw new SetupGovError("Ambiente precisa ser do tipo string");
	}
	if (!options.pfx) {
		throw new SetupGovError("Certificado Digital PFX é necessario");
	}
	if (!Buffer.isBuffer(options.pfx)) {
		throw new SetupGovError("O certificado digital precisa ser do tipo Buffer");
	}
	if (!options.passphrase) {
		throw new SetupGovError("Passphrase do certificado digital é necessario");
	}
	if (typeof options.passphrase !== "string") {
		throw new SetupGovError("Passphrase deve ser do tipo string");
	}
	ambiente = options.ambiente;
	pfx = options.pfx;
	passphrase = options.passphrase;
}
