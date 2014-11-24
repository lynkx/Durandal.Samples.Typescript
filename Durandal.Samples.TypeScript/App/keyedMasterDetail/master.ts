/// <reference path="itabcontent.ts" />
import router = require('plugins/router');
import ko = require('knockout');
import system = require('durandal/system');

var masterVm = ko.observable<ITabContent>();

var childRouter = router
    .createChildRouter()
    .makeRelative({ moduleId: 'keyedMasterDetail', fromParent: true, dynamicHash: ':id' })
    .map([
        { route: ['first', ''], moduleId: 'first', title: 'First', nav: true, hash: '#first' },
        { route: 'second', moduleId: 'second', title: 'Second', nav: true },
        { route: 'third', moduleId: 'third', title: 'Third', nav: true }
    ]).buildNavigationModel();



var activate = (id:any) => {
    system.log('Master View ' + id + ' Activated');
    return loadObservables(id);
}

var deactivate =()=> {
    system.log('Master View ' + masterVm().id + ' Deactivated');
}

var loadObservables = (id:any) => {
    masterVm({ id: id, name: 'Master' });
}

var vm = {
    router: childRouter,
    activate: activate,
    deactivate: deactivate,
    masterVm: masterVm
}

export = vm;