import composition = require('durandal/composition');
import $ = require('jquery');

class ViewModel{
    settings;
    activate = (settings) => {
        this.settings = settings;
    };
    getHeaderText = (item: any) => {
        if (this.settings.headerProperty)
            return item[this.settings.headerProperty];

        return item.toString();
    };

    afterRenderItem = (elements: HTMLElement[], item:any) => {
        var parts = composition.getParts(elements);
        var $itemContainer = $(parts.itemContainer);

        $itemContainer.hide();
        $(parts.headerContainer).bind('click', () => {
            $itemContainer.toggle('fast');
        });
    };

}

export = ViewModel;