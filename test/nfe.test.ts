import { autorizarNfe } from "../src/nfe/autorizacaoNfe";

describe("test nfe", () => {
	test("authorize nfe", async () => {
		await autorizarNfe("SP");
	});
});
