import ResultType from "./ResultType";

abstract class Result<T> {
    public abstract type: ResultType | string;
    public abstract errors: string[];
    public abstract data: T;
}

export default Result;