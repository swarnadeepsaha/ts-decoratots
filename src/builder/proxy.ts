import { Builder as BuilderPatternBuilder } from 'builder-pattern';

export abstract class Builder<T> {
    public builder() {
        return BuilderPatternBuilder<T>();
    }
}
