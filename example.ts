import SuccessResult from "./models/SuccessResult";

const someAction = () => {
    return new SuccessResult<string>("Hello World");
}