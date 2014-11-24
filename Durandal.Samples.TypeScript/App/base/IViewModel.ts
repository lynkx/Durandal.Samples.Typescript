interface IViewModel {
    canActivate(): JQueryPromise<string>;
    activate(): void;
    canDeactivate(): JQueryPromise<string>;
    deactivate(): void;
} 