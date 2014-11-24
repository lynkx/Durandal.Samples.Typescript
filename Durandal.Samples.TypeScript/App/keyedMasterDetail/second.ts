/// <reference path="itabcontent.ts" />
import system = require('durandal/system');
import ko = require('knockout');


var activate = (id:any) => {
    system.log('Second Tab Activated', null, 'details', true);
    return loadObservables(id);
}

var deactivate = () => {
    system.log('Second Tab Deactivated', null, 'details', true);
}

var loadObservables = (id: any) => {
    secondVm({ id: id, name: 'Second Tab Content' });
}
var secondVm = ko.observable<ITabContent>();

var vm = {
    activate: activate,
    title: 'Second Tab',
    deactivate: deactivate,
    secondVm: secondVm,
};

export = vm;

