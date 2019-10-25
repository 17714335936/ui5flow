sap.ui.define([
    "com/oprtnl/ui5locserv/controller/BaseController"
], function(Controller) {
    "use strict";
    return Controller.extend("com.oprtnl.ui5locserv.controller.App", {

        onInit: function() {
            this.getView().addStyleClass(this.getContentDensityClass());          
        },

        onBeforeRendering: function() {
        }
    });

});