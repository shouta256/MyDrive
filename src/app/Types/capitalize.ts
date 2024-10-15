type CamelCase<S extends string> = S extends `${infer T}_${infer U}`
	? `${T}${Capitalize<CamelCase<U>>}`
	: S;

type SnakeCase<S extends string> = S extends `${infer T}${infer U}`
	? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${SnakeCase<U>}`
	: S;

export type CamelCasedProperties<T> = {
	[K in keyof T as CamelCase<string & K>]: T[K];
};

export type SnakeCasedProperties<T> = {
	[K in keyof T as SnakeCase<string & K>]: T[K];
};
