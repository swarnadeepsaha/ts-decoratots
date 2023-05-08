type IBuilder<T> = {
    [k in keyof T]-?: ((arg: T[k]) => IBuilder<T>) & (() => T[k]);
}
    & {
        build(): T;
        toJson(): string;
        clear(): IBuilder<T>;
    };

function createBuilder<T>(template?: Partial<T>): IBuilder<T> {
    let built: Record<string, unknown> = template ? Object.assign({}, template) : {};

    const builder = new Proxy({}, {
        get(target, property, receiver) {
            switch (property) {
                case 'build':
                    return () => Object.assign({} as T & Record<string, unknown>, built);
                case 'toJson':
                    return () => JSON.stringify(built);
                case 'clear':
                    built = {};
                    return (): unknown => builder;
                default:
                    return (...args: unknown[]): unknown => {
                        if (args.length === 0) {
                            return built[property.toString()];
                        } else if (args.length === 1){
                            built[property.toString()] = args[0];
                            return builder;
                        } else {
                            built[property.toString()] = args;
                            return builder;
                        }
                    }
            }
        }
    });

    return builder as IBuilder<T>;
}

export function builder<T extends { new(...args: any[]): {} }>(constructor: T, context: ClassDecoratorContext) {
    if (context.kind === "class") {
        return class extends constructor {
            constructor(...args: any[]) {
                super(args);
            }
            static builder<T>(template?: Partial<T>): IBuilder<T> {
                return createBuilder<T>(template);
            };
        }
    }
}

export abstract class Builder {
    static builder<T>(template?: Partial<T>): IBuilder<T> { return {} as IBuilder<T> }
}
