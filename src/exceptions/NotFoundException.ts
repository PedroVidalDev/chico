export class NotFoundException extends Error {
    public readonly entity?: string;

    constructor(message: string, entity?: string) {
        super(message);

        this.name = 'NotFoundException';

        if (entity) {
            this.entity = entity;
        }

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotFoundException);
        }
    }
}