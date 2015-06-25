/// <reference path="../../scripts/typings/knockout/knockout.d.ts" />
 import app = require('durandal/app')
 import system = require('durandal/system')
 import ko = require('knockout')

 var name : KnockoutObservable<string> = ko.observable("");
var canSayHello = () => {
    return name() ? true : false;
}
var instance = {
    displayName: 'What is your name?',
    name: name,
    sayHello: () => {
        app.showMessage('Hello ' + name() + '!', 'Greetings');
    },
    canSayHello: canSayHello,
    activate: () => {
        system.log('Lifecycle : activate : hello');
    },
    binding: () => {
        system.log('Lifecycle : binding : hello');
        return { cacheViews: false }; //cancels view caching for this module, allowing the triggering of the detached callback
    },
    bindingComplete: () => {
        system.log('Lifecycle : bindingComplete : hello');
    },
    attached: (view, parent) => {
        system.log('Lifecycle : attached : hello');
    },
    compositionComplete: view => {
        system.log('Lifecycle : compositionComplete : hello');
    },
    detached: view => {
        system.log('Lifecycle : detached : hello');
    }

}
 export = instance