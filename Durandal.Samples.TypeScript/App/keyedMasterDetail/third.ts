/// <reference path="itabcontent.ts" />
import system = require('durandal/system');
import ko = require('knockout');

var thirdVm = ko.observable<ITabContent>();

var activate = (id: any) => {
    system.log('Third Tab Activated', null, 'details', true);
    return loadObservables(id);
};

var deactivate = () => {
    system.log('Third Tab Deactivated', null, 'details', true);
};

var loadObservables = (id: any) => {
    thirdVm({ id: id, name: 'Third Tab Content' });
};

var vm = {
    activate: activate,
    title: 'Third Tab',
    deactivate: deactivate,
    thirdVm: thirdVm,
};

export = vm