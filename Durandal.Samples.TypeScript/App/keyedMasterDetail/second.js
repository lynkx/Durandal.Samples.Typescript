define(["require", "exports", 'durandal/system', 'knockout'], function(require, exports, system, ko) {
    var activate = function (id) {
        system.log('Second Tab Activated', null, 'details', true);
        return loadObservables(id);
    };

    var deactivate = function () {
        system.log('Second Tab Deactivated', null, 'details', true);
    };

    var loadObservables = function (id) {
        secondVm({ id: id, name: 'Second Tab Content' });
    };
    var secondVm = ko.observable();

    var vm = {
        activate: activate,
        title: 'Second Tab',
        deactivate: deactivate,
        secondVm: secondVm
    };

    
    return vm;
});
//# sourceMappingURL=second.js.map
