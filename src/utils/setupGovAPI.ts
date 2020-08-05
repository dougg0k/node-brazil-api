import { SetupGovError } from "../errors/SetupGovError";
import { Ambiente } from "../typings/generalTypes";

export let ambiente;
export let passphrase;
export let pfx;
export let privatePEM;
export let publicPEM;

export function setupGovAPI(options: {
	ambiente: Ambiente;
	passphrase: string;
	pfx: Buffer;
	privatePEM?: Buffer;
	publicPEM?: Buffer;
}): void {
	if (!options.ambiente) {
		throw new SetupGovError("Precisa declarar o ambiente de uso");
	}
	if (typeof options.ambiente !== "string") {
		throw new SetupGovError("Ambiente precisa ser do tipo string");
	}
	if (!options.passphrase) {
		throw new SetupGovError(
			"PassphrasePFX do certificado digital é necessario",
		);
	}
	if (typeof options.passphrase !== "string") {
		throw new SetupGovError("PassphrasePFX deve ser do tipo string");
	}
	ambiente = options.ambiente;
	passphrase = options.passphrase;
	pfx = options.pfx;
	privatePEM = options.privatePEM;
	publicPEM = options.publicPEM;
}
