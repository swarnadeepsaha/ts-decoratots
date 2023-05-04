class builderInternal {
    private data: any = {};

    constructor(builderProperties: (string | symbol)[]) {
        builderProperties.forEach((builderProperty) => {
            Reflect.set(
                this,
                builderProperty,
                (value: any) => {
                    this.data[builderProperty] = value;
                    return this;
                }
            )
        });
        return this;
    }

    clear() {
        this.data = {};
    }

    build(){
        return this.data;
    }

    toJson() {
        return JSON.stringify(this.data);
    }
}

export function builder<T extends { new (...args: any[]): {} }>(constructor: T, context: ClassDecoratorContext) {
    const instanceProperties: (string | symbol)[] = Reflect.ownKeys(new constructor());
    if (context.kind === "class") {
        return class extends constructor {
            static builder(){
                return new builderInternal(instanceProperties);
            }
        }
    }
}

export abstract class Builder {
    static builder(): any {}
}
