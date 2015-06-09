define(["require", "exports", 'plugins/router', 'knockout', 'durandal/system'], function (require, exports, router, ko, system) {
    var masterVm = ko.observable();
    var childRouter = router
        .createChildRouter()
        .makeRelative({ moduleId: 'keyedMasterDetail', fromParent: true, dynamicHash: ':id' })
        .map([
        { route: ['first', ''], moduleId: 'first', title: 'First', nav: true, hash: '#first' },
        { route: 'second', moduleId: 'second', title: 'Second', nav: true },
        { route: 'third', moduleId: 'third', title: 'Third', nav: true }
    ]).buildNavigationModel();
    var activate = function (id) {
        system.log('Master View ' + id + ' Activated');
        return loadObservables(id);
    };
    var deactivate = function () {
        system.log('Master View ' + masterVm().id + ' Deactivated');
    };
    var loadObservables = function (id) {
        masterVm({ id: id, name: 'Master' });
    };
    var vm = {
        router: childRouter,
        activate: activate,
        deactivate: deactivate,
        masterVm: masterVm
    };
    return vm;
});
//# sourceMappingURL=master.js.map