define(["require", "exports", 'durandal/composition', 'jquery'], function(require, exports, composition, $) {
    var ViewModel = (function () {
        function ViewModel() {
            var _this = this;
            this.activate = function (settings) {
                _this.settings = settings;
            };
            this.getHeaderText = function (item) {
                if (_this.settings.headerProperty)
                    return item[_this.settings.headerProperty];

                return item.toString();
            };
            this.afterRenderItem = function (elements, item) {
                var parts = composition.getParts(elements);
                var $itemContainer = $(parts.itemContainer);

                $itemContainer.hide();
                $(parts.headerContainer).bind('click', function () {
                    $itemContainer.toggle('fast');
                });
            };
        }
        return ViewModel;
    })();

    
    return ViewModel;
});
//# sourceMappingURL=viewmodel.js.map
