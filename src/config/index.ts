import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

export default {
	GOV_CERTIFICATE_PASSWORD: process.env.GOV_CERTIFICATE_PASSWORD,
	GOV_PFX_CERTIFICATE: fs.readFileSync(__dirname + ""),
};
