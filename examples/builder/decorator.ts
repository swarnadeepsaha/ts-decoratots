import { Builder, builder } from '../../src/builder/decorator';

@builder
class ApiClientConfiguration extends Builder {
    host!: string;
    port!: number;
    useHttps!: boolean;

    connectTimeout!: number;
    readTimeout!: number;

    username!: string;
    password!: string;

    roles!: string[];
}

/*
const apiClientConfigurationBuilder_1 = ApiClientConfiguration.builder<ApiClientConfiguration>();
const op_1 = apiClientConfigurationBuilder_1
                .host('localhost')
                .port(9000)
                .useHttps(true)
                .connectTimeout(10000)
                .username('user')
                .password('####')
                .roles(['role#1', 'role#3'])
                .useHttps(false)                // overwrites the data
                .build();
console.log(op_1);
console.log(op_1.host);         // localhost
console.log(op_1.useHttps);     // false
*/

/*
const apiClientConfigurationBuilder_2 = ApiClientConfiguration.builder<ApiClientConfiguration>({
    host: 'localhost',
    port: 9000
});
const op_2 = apiClientConfigurationBuilder_2
                .port(7000)     // overwrites the data
                .useHttps(true)
                .connectTimeout(10000)
                .username('user')
                .password('####')
                .roles(['role#1', 'role#3'])
                .build();
console.log(op_2);
console.log(op_2.host);         // localhost
console.log(op_2.useHttps);     // true
*/

/*
const apiClientConfigurationBuilder_3 = ApiClientConfiguration.builder<ApiClientConfiguration>({
    host: 'localhost',
    port: 9000
});
const op_3 = apiClientConfigurationBuilder_3
                .port(7000)     // overwrites the data
                .useHttps(true)
                .connectTimeout(10000)
                .username('user')
                .password('####')
                .roles(['role#1', 'role#3'])
                .toJson();
console.log(op_3);
*/

/*
const apiClientConfigurationBuilder_4 = ApiClientConfiguration.builder<ApiClientConfiguration>({
    host: 'localhost',
    port: 9000
});
const op_4 = apiClientConfigurationBuilder_4
                .port(7000)     // overwrites the data
                .useHttps(true)
                .connectTimeout(10000)
                .username('user')
                .password('####')
                .clear()
                .roles(['role#1', 'role#3'])
                .toJson();
console.log(op_4);
*/


const apiClientConfigurationBuilder_5 = ApiClientConfiguration.builder<ApiClientConfiguration>({
    host: 'localhost',
    port: 9000
});
const op_5 = apiClientConfigurationBuilder_5
                .port(7000)              // overwrites the data
                .useHttps(true)
                .connectTimeout(10000)
                .username('user')
                .password('####')
                .username();            // user                 
console.log(op_5);

