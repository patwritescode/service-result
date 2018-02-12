import Result from "./Result";
import ResultType from "./ResultType";

class SuccessResult<T> extends Result<T> {
    constructor(data: T)  {
        super();
        this.data = data;
    }
    public type: ResultType = ResultType.Ok;
    public errors: string[] = [];
    public data: T;
}

export default SuccessResult;