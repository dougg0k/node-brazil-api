import { NFE } from "../../src";
import { setupAccessOptions } from "../testHelper";

describe("test nfe autorizacao", () => {
	beforeAll(() => {
		setupAccessOptions();
	});
	test("test", async () => {
		const data = await NFE.autorizacaoNfeSync("SP", {
			idLote: "1",
			NFe: {
				infNFe: {
					$Id: "1",
					$versao: "4.00",
				},
			},
		});
		console.log("DATA = ", data);
	});
});
