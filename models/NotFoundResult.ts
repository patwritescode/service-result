import Result from "./Result";
import ResultType from "./ResultType";

class NotFoundResult<T> extends Result<T> {
    constructor(error: string)  {
        super();
        this.errors = [error];
    }
    public type: ResultType = ResultType.NotFound;
    public errors: string[] = [];
    public data: T;
}

export default NotFoundResult;