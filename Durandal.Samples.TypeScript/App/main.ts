import system = require("durandal/system");
import app = require("durandal/app");
import viewLocator = require("durandal/viewLocator");

class Main {
    static init() {
        //>>excludeStart("build", true);
        system.debug(true);
        //>>excludeEnd("build");

        app.title = "Durandal";

        //specify which plugins to install and their configuration
        app.configurePlugins({
            router: true,
            dialog: true,
            widget: {
                kinds: ["expander"]
            }
        });

        app.start().then(() => {
            viewLocator.useConvention();
            app.setRoot('shell');
        });
    }
}

export = Main; 