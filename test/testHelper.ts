import fs from "fs";
import path from "path";
import { setupAccess } from "../src";

export function setupAccessOptions(): void {
	setupAccess({
		ambiente: "homologacao",
		passphrase: "123456",
		pfx: fs.readFileSync(path.resolve(__dirname, "./CERT.pfx")),
		privatePEM: fs.readFileSync(path.resolve(__dirname, "./PRIVATE_KEY.pem")),
		publicPEM: fs.readFileSync(path.resolve(__dirname, "./PUBLIC_KEY.pem")),
	});
}
