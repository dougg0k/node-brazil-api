export function printWholeObj(obj: Record<string, unknown>): void {
	console.log(JSON.stringify(obj, null, 4));
}
