import { fetchCEP } from "../../src/correios/cep";
import { CorreiosCEPError } from "../../src/errors/CorreiosCEPError";

describe("test correios requests", () => {
	test("fetch cep", async () => {
		const data = await fetchCEP("08240-001");
		expect(data).toStrictEqual({
			bairro: "Vila Progresso (Zona Leste)",
			cep: "08240001",
			cidade: "São Paulo",
			complemento2: "",
			end: "Rua 23 de Novembro",
			uf: "SP",
		});
	});
	test("test inexistent cep", async () => {
		try {
			await fetchCEP("00000000");
		} catch (err) {
			expect(err).toBeInstanceOf(CorreiosCEPError);
			expect(err).toHaveProperty("message", "CEP INVÁLIDO");
		}
	});
});
