export class InvalidParamException extends Error {
    public readonly paramName?: string;

    constructor(message: string, paramName?: string) {
        super(message);

        this.name = 'InvalidParamException';

        if (paramName) {
            this.paramName = paramName;
        }

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidParamException);
        }
    }
}