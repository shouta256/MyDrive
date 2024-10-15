import type {
	CamelCasedProperties,
	SnakeCasedProperties,
} from "@/app/Types/capitalize";

function toCamelCase(str: string): string {
	return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

function toSnakeCase(str: string): string {
	return str
		.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
		.replace(/^_/, "");
}

function convertKeys<T, U>(obj: T, converter: (key: string) => string): U {
	if (Array.isArray(obj)) {
		return obj.map((v) => convertKeys(v, converter)) as any;
	}
	if (obj !== null && typeof obj === "object") {
		return Object.entries(obj).reduce((result, [key, value]) => {
			const newKey = converter(key);
			result[newKey] = convertKeys(value, converter);
			return result;
		}, {} as any);
	}
	return obj as any;
}

export const toCamelCaseObject = <T>(obj: T): CamelCasedProperties<T> =>
	convertKeys(obj, toCamelCase);
export const toSnakeCaseObject = <T>(obj: T): SnakeCasedProperties<T> =>
	convertKeys(obj, toSnakeCase);
