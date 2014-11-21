import app = require('durandal/app')
import ko = require('knockout')

var instance = {
    received: ko.observableArray(),
    subscription: ko.observable(),
    subscribe: function () {
        var sub = app.on('sample:event').then(function (message) {
            this.received.push(message);
        }, this);

        this.subscription(sub);
    },
    unsubscribe: function () {
        this.subscription().off();
        this.subscription(null);
    }

}

export = instance