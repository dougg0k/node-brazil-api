export function printWholeObj(obj: Record<string, unknown>): void {
	console.log(JSON.stringify(obj, null, 4));
}

export function formatReturnData(data: Record<string, unknown>): any {
	return Object.keys(data).reduce((acc, key) => {
		if (!key.startsWith("$")) {
			acc[key] = data[key];
		}
		return acc;
	}, {});
}
