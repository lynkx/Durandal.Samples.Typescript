/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
var BaseViewModel = (function () {
    function BaseViewModel() {
        this.canActivate = function () {
            return $.Deferred().promise();
        };
        this.activate = function (options) {
        };
        this.canDeactivate = function () {
            return $.Deferred().promise();
        };
        this.deactivate = function (options) {
        };
    }
    return BaseViewModel;
})();
//# sourceMappingURL=ViewModel.js.map
