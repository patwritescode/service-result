import Result from "./Result";
import ResultType from "./ResultType";

class UnexpectedResult<T> extends Result<T> {
    public type: ResultType = ResultType.Unexpected;
    public errors: string[] = ["There was an unexpected problem"];
    public data: T;
}

export default UnexpectedResult;