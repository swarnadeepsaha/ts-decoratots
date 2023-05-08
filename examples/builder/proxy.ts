import { Builder } from "../../src/builder/proxy";

class ApiClientConfiguration extends Builder<ApiClientConfiguration>{
    host!: string;
    port!: number;
    useHttps!: boolean;
    connectTimeout!: number;
    readTimeout!: number;
    username!: string;
    password!: string;
}

const apiClientConfigurationBuilder = new ApiClientConfiguration().builder();

const apiClientConfigurationObject = apiClientConfigurationBuilder
    .host('localhost')
    .port(8080)
    .useHttps(true)
    .readTimeout(1000)
    .username('user')
    .build()

console.log(JSON.stringify(apiClientConfigurationObject)); // {"host":"localhost","port":8080,"useHttps":true,"readTimeout":1000,"username":"user"}

