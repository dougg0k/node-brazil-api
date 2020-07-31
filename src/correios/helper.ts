import { CorreiosCEPError } from "./../errors/CorreiosCEPError";

export const CORREIOS_SOAP_ENDPOINT =
	"https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl";

export function validateCEP(cep: string): void {
	if (!cep) {
		throw new CorreiosCEPError("CEP é necessario");
	}
	if (typeof cep !== "string") {
		throw new CorreiosCEPError("CEP precisa ser do tipo string");
	}
	cep = formatCEP(cep);
	if (cep.length !== 8) {
		throw new CorreiosCEPError("Um CEP precisa ter 8 characteres");
	}
}

export function formatCEP(cep: string): string {
	return cep.trim().replace(/\D+/g, "");
}
