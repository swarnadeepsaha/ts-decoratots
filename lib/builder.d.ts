export declare function builder<T extends {
    new (...args: any[]): any;
}>(constructor: T): {
    new (...args: any[]): {
        [x: string]: any;
        builder(): any;
    };
} & T;
export declare class ApiClientConfiguration {
    host: string;
    port: string;
    useHttps: string;
    connectTimeout: number;
    readTimeout: number;
    username: string;
    password: string;
}
