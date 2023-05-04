import { builder, Builder } from "../src/builder";

@builder
class ApiClientConfiguration extends Builder{
    // Limitation: will not if properties are not initialized
    host: string = '';
    port: string = '';
    useHttps: string = '';

    connectTimeout: number = 0;
    readTimeout: number = 0;

    username: string = '';
    password: string = '';
}

const apiClientConfigurationBuilder = ApiClientConfiguration.builder();
const op = apiClientConfigurationBuilder
                .host('a')
                .port('b')
                .useHttps('r')
                .connectTimeout(600)
                .readTimeout(100)
                .username('Naruto')
                .toJson();

console.log(op); /* {"host":"a","port":"b","useHttps":"r","connectTimeout":600,"readTimeout":100,"username":"Naruto"} */