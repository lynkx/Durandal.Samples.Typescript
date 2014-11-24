define(["require", "exports", 'durandal/system', 'knockout'], function(require, exports, system, ko) {
    var thirdVm = ko.observable();

    var activate = function (id) {
        system.log('Third Tab Activated', null, 'details', true);
        return loadObservables(id);
    };

    var deactivate = function () {
        system.log('Third Tab Deactivated', null, 'details', true);
    };

    var loadObservables = function (id) {
        thirdVm({ id: id, name: 'Third Tab Content' });
    };

    var vm = {
        activate: activate,
        title: 'Third Tab',
        deactivate: deactivate,
        thirdVm: thirdVm
    };

    
    return vm;
});
//# sourceMappingURL=third.js.map
