sap.ui.define(
	["sap/ui/core/UIComponent"],
	function(UIComponent) {
		return UIComponent.extend("cn.par.Component", {
			metadata: {
				"manifest": "json"
			},
			init: function() {
				UIComponent.prototype.init.apply(this);
				var oRouter = this.getRouter();
				oRouter.initialize();
			},
			/*createContent : function(){
				var oApp = new sap.ui.view("idApp",{
					viewName : "cn.par.view.App",
					type : "XML"
				});
				return oApp;
			},*/
			destroy: function() {

			}
		});
	}
);