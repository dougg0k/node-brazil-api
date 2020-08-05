import fastXmlParser from "fast-xml-parser";

const xmlToJSONOptions = {
	attributeNamePrefix: "$",
	ignoreAttributes: true,
	ignoreNameSpace: true,
	allowBooleanAttributes: false,
	parseNodeValue: true,
	parseAttributeValue: false,
	trimValues: true,
	parseTrueNumberOnly: false,
	arrayMode: false,
};

export function isValidXML(xml: string): boolean {
	try {
		return fastXmlParser.validate(xml) === true;
	} catch {
		return false;
	}
}

export function parseXMLToJson(xml: string): Record<string, unknown> {
	return fastXmlParser.parse(xml, xmlToJSONOptions);
}

const jsonToXMLOptions = {
	attributeNamePrefix: "$",
	ignoreAttributes: false,
	format: false,
	supressEmptyNode: true,
};

export function parseJSONToXML(json: Record<string, unknown>): string {
	const parser = new fastXmlParser.j2xParser(jsonToXMLOptions);
	return parser.parse(json);
}
