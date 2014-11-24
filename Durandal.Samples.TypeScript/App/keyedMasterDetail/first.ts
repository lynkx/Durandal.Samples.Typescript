/// <reference path="itabcontent.ts" />
import system = require('durandal/system');
import ko = require('knockout');


var firstVm = ko.observable();
var activate = (id:any) => {
    system.log('First Tab Activated');
    return loadObservables(id);
};
var deactivate = () => {
    system.log('First Tab Deactivated');
};

var loadObservables = (id: any) => {
    firstVm({ id: id, name: 'First Tab Content' });
};

var vm = {
    activate: activate,
    title: 'First Tab',
    deactivate: deactivate,
    firstVm: firstVm,
};

export = vm;