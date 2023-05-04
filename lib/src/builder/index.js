"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = exports.builder = void 0;
class builderInternal {
    constructor(builderProperties) {
        this.data = {};
        builderProperties.forEach((builderProperty) => {
            Reflect.set(this, builderProperty, (value) => {
                this.data[builderProperty] = value;
                return this;
            });
        });
        return this;
    }
    clear() {
        this.data = {};
    }
    build() {
        return this.data;
    }
    toJson() {
        return JSON.stringify(this.data);
    }
}
function builder(constructor, context) {
    const instanceProperties = Reflect.ownKeys(new constructor());
    if (context.kind === "class") {
        return class extends constructor {
            static builder() {
                return new builderInternal(instanceProperties);
            }
        };
    }
}
exports.builder = builder;
class Builder {
    static builder() { }
}
exports.Builder = Builder;
