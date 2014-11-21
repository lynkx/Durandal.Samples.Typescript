 import app = require('durandal/app')
 import ko = require('knockout')

var message = ko.observable();
var canPublish = () => message() ? true : false;
var instance = {
    message: message,
    canPublish: canPublish,
    publish : ()=> app.trigger('sample:event', message())
}
 export = instance;