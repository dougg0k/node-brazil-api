import { SetupError } from "../errors/SetupError";
import { Ambiente } from "../typings/generalTypes";

export let ambiente;
export let passphrase;
export let pfx;
export let privatePEM;
export let publicPEM;
export let rejectUnauthorized;

export function setupAccess(options: {
	ambiente: Ambiente;
	passphrase?: string;
	pfx?: Buffer;
	privatePEM?: Buffer;
	publicPEM?: Buffer;
	rejectUnauthorized?: boolean;
}): void {
	if (!options.ambiente) {
		throw new SetupError("Precisa declarar o ambiente de uso");
	}
	if (typeof options.ambiente !== "string") {
		throw new SetupError("Ambiente precisa ser do tipo string");
	}
	if (!options.pfx || (!options.privatePEM && !options.publicPEM)) {
		throw new SetupError("PFX ou PEM Private e Publica é necessária");
	}
	if (!!options.pfx && !Buffer.isBuffer(options.pfx)) {
		throw new SetupError("PFX deve ser do tipo Buffer");
	}
	if (!!options.privatePEM && !Buffer.isBuffer(options.privatePEM)) {
		throw new SetupError("PEM Private deve ser do tipo Buffer");
	}
	if (!!options.publicPEM && !Buffer.isBuffer(options.publicPEM)) {
		throw new SetupError("PEM Publico deve ser do tipo Buffer");
	}
	ambiente = options.ambiente;
	passphrase = options.passphrase;
	pfx = options.pfx;
	privatePEM = options.privatePEM;
	publicPEM = options.publicPEM;
	rejectUnauthorized = options.rejectUnauthorized;
}
