import fs from "fs";
import path from "path";
import { setupGovAPI } from "../src";
import { autorizarNfeAsync } from "../src/nfe/autorizacaoNfe";

describe("test nfe", () => {
	beforeAll(() => {
		setupGovAPI({
			ambiente: "homologacao",
			pfx: fs.readFileSync(path.resolve(__dirname, "./CERT.pfx")),
			passphrase: "123456",
		});
	});
	test("authorize nfe", async () => {
		await autorizarNfeAsync("SP");
	});
});
