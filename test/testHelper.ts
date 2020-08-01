import fs from "fs";
import path from "path";
import { setupGovAPI } from "../src";

export function setupAccessOptions(): void {
	setupGovAPI({
		ambiente: "homologacao",
		pfx: fs.readFileSync(path.resolve(__dirname, "./CERT.pfx")),
		passphrase: "123456",
	});
}
