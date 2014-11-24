define(["require", "exports", 'durandal/system', 'knockout'], function(require, exports, system, ko) {
    var firstVm = ko.observable();
    var activate = function (id) {
        system.log('First Tab Activated');
        return loadObservables(id);
    };
    var deactivate = function () {
        system.log('First Tab Deactivated');
    };

    var loadObservables = function (id) {
        firstVm({ id: id, name: 'First Tab Content' });
    };

    var vm = {
        activate: activate,
        title: 'First Tab',
        deactivate: deactivate,
        firstVm: firstVm
    };

    
    return vm;
});
//# sourceMappingURL=first.js.map
