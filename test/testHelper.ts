import fs from "fs";
import path from "path";
import { setupGovAPI } from "../src";

export function setupAccessOptions(): void {
	setupGovAPI({
		ambiente: "homologacao",
		passphrase: "123456",
		pfx: fs.readFileSync(path.resolve(__dirname, "./CERT.pfx")),
		privatePEM: fs.readFileSync(
			path.resolve(__dirname, "./CERT_PRIVATE_KEY.pem"),
		),
		publicPEM: fs.readFileSync(
			path.resolve(__dirname, "./CERT_PUBLIC_KEY.pem"),
		),
	});
}
