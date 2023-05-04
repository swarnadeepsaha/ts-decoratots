declare class builderInternal {
    private data;
    constructor(builderProperties: (string | symbol)[]);
    clear(): void;
    build(): any;
    toJson(): string;
}
export declare function builder<T extends {
    new (...args: any[]): {};
}>(constructor: T, context: ClassDecoratorContext): ({
    new (...args: any[]): {};
    builder(): builderInternal;
} & T) | undefined;
export declare abstract class Builder {
    static builder(): any;
}
export {};
