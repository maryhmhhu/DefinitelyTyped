// Type definitions for jsonpack 1.1
// Project: https://github.com/sapienlab/jsonpack
// Definitions by: Vlad Jerca <https://github.com/vladjerca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface PackOptions {
    verbose?: boolean | undefined;
}

export interface PackDebugOptions extends PackOptions {
    debug?: boolean | undefined;
}

export interface DebugObject {
    dictionary: {
        strings: string[];
        integers: number[];
        floats: number[];
    };
    ast: Array<{
        type: string;
        index: number;
    }>;
    packed: string;
}

export function pack(json: string | object, options?: PackOptions): string;
export function pack(json: string | object, options?: PackDebugOptions): DebugObject;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function unpack<T = {}>(packed: string, options?: PackOptions): T;
