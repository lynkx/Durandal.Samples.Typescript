﻿class BaseViewModel implements IViewModel {
    canActivate = () => { return $.Deferred().promise(); }
    activate = (options?: any) => { }
    canDeactivate = () => { return $.Deferred().promise(); }
    deactivate = (options?: any) => { }
}