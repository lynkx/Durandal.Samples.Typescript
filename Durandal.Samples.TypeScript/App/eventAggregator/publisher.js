define(["require", "exports", 'durandal/app', 'knockout'], function (require, exports, app, ko) {
    var message = ko.observable();
    var canPublish = function () { return message() ? true : false; };
    var instance = {
        message: message,
        canPublish: canPublish,
        publish: function () { return app.trigger('sample:event', message()); }
    };
    return instance;
});
//# sourceMappingURL=publisher.js.map