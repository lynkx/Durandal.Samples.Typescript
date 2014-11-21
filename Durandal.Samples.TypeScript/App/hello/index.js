define(["require", "exports", 'durandal/app', 'durandal/system', 'knockout'], function(require, exports, app, system, ko) {
    var name = ko.observable();
    var canSayHello = function () {
        return name() ? true : false;
    };
    var instance = {
        displayName: 'What is your name?',
        name: name,
        sayHello: function () {
            app.showMessage('Hello ' + name() + '!', 'Greetings');
        },
        canSayHello: canSayHello,
        activate: function () {
            system.log('Lifecycle : activate : hello');
        },
        binding: function () {
            system.log('Lifecycle : binding : hello');
            return { cacheViews: false };
        },
        bindingComplete: function () {
            system.log('Lifecycle : bindingComplete : hello');
        },
        attached: function (view, parent) {
            system.log('Lifecycle : attached : hello');
        },
        compositionComplete: function (view) {
            system.log('Lifecycle : compositionComplete : hello');
        },
        detached: function (view) {
            system.log('Lifecycle : detached : hello');
        }
    };
    
    return instance;
});
//# sourceMappingURL=index.js.map
