import { NFE } from "../../src";
import { EnviNFeIndSinc } from "../../src/nfe/autorizacao/Autorizacao";
import { setupAccessOptions } from "../testHelper";

describe("test nfe autorizacao", () => {
	beforeAll(() => {
		setupAccessOptions();
	});
	test("test", async () => {
		await NFE.autorizacaoNfeSync("SP", {
			idLote: "1",
			indSinc: EnviNFeIndSinc.SINC,
			NFe: {
				infNFe: {
					$Id: "1",
					$versao: "4.00",
				},
			},
		});
	});
});
