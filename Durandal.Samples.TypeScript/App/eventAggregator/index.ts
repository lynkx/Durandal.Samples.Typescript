import publisher = require('./publisher')
import subscriber = require('./subscriber')

var instance = {
    publisher: publisher,
    subscriber: subscriber
}

export = instance