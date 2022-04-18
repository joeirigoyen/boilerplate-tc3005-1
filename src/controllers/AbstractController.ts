import {Router} from 'express';

export default abstract class AbstractController {
    // Attributes
    private _router: Router = Router();
    private _prefix: string;

    public get router(): Router {
        return this._router;
    }
    public set router(value: Router) {
        this._router = value;
    }
    public get prefix(): string {
        return this._prefix;
    }
    public set prefix(value: string) {
        this._prefix = value;
    }

    constructor(prefix: string) {
        this._prefix = prefix;
        this.initRoutes();
    }

    protected abstract initRoutes(): void;
};