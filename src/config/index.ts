import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

export default {
	GOV_CERTIFICATE_PASSWORD: process.env.GOV_CERTIFICATE_PASSWORD,
	GOV_PFX_CERTIFICATE: fs.readFileSync(
		path.resolve(__dirname, "./MORECAP.pfx"),
	),
	GOV_API_ENVIRONMENT: process.env.GOV_API_ENVIRONMENT || "homologacao",
};
