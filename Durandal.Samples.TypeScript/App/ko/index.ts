﻿import router = require('plugins/router');
import ko = require('knockout');

var childRouter = router.createChildRouter()
    .makeRelative({
        moduleId: 'ko',
        fromParent: true
    }).map([
        { route: ['', 'helloWorld'], moduleId: 'helloWorld/index', title: 'Hello World', type: 'intro', nav: true },
        { route: 'clickCounter', moduleId: 'clickCounter/index', title: 'Click Counter', type: 'intro', nav: true },
        { route: 'simpleList', moduleId: 'simpleList/index', title: 'Simple List', type: 'intro', nav: true },
        { route: 'betterList', moduleId: 'betterList/index', title: 'Better List', type: 'intro', nav: true },
        { route: 'controlTypes', moduleId: 'controlTypes/index', title: 'Control Types', type: 'intro', nav: true },
        { route: 'collections', moduleId: 'collections/index', title: 'Collection', type: 'intro', nav: true },
        { route: 'pagedGrid', moduleId: 'pagedGrid/index', title: 'Paged Grid', type: 'intro', nav: true },
        { route: 'animatedTrans', moduleId: 'animatedTrans/index', title: 'Animated Transition', type: 'intro', nav: true },
        { route: 'contactsEditor', moduleId: 'contactsEditor/index', title: 'Contacts Editor', type: 'detailed', nav: true },
        { route: 'gridEditor', moduleId: 'gridEditor/index', title: 'Grid Editor', type: 'detailed', nav: true },
        { route: 'shoppingCart', moduleId: 'shoppingCart/index', title: 'Shopping Cart', type: 'detailed', nav: true }
    ]).buildNavigationModel();


var vm = {
    router: childRouter,
    introSamples: ko.computed(() => ko.utils.arrayFilter(childRouter.navigationModel(), (route:IRoute) => route.type == 'intro')),
    detailedSamples: ko.computed(() => ko.utils.arrayFilter(childRouter.navigationModel(), (route:IRoute) => route.type == 'detailed'))

};

export = vm;