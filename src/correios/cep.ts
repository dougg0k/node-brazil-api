import { promisify } from "util";
import { clientSoap } from "../utils/soapSetup";
import { CorreiosCEPError } from "./../errors/CorreiosCEPError";
import { CorreiosCEPSaida } from "./Correios";
import { CORREIOS_SOAP_ENDPOINT, formatCEP, validateCEP } from "./helper";

export async function fetchCEP(cep: string): Promise<CorreiosCEPSaida> {
	validateCEP(cep);
	cep = formatCEP(cep);
	try {
		const response = await clientSoap(CORREIOS_SOAP_ENDPOINT, {
			forceSoap12Headers: false,
		});
		const consultaCEP = promisify(response.consultaCEP);
		const data = await consultaCEP({ cep });
		return data.return;
	} catch (err) {
		throw new CorreiosCEPError(err.root.Envelope.Body.Fault.faultstring);
	}
}
