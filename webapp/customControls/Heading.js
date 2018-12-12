sap.ui.define(
	["sap/ui/core/Control"],
	function(Control){
		return Control.extend("cn.par.customControls",{
			metadata: {
				properties : {
					"myText" : "",
					"value" : ""
				}
			},
			init : function(){},
			setTextValue: function(param){
				this.setProperty("value", param, true);
			},
			renderer : function(oRm, oControl){
				oRm.write("<h1>" + oControl.getMyText() + "</h1>");
				oRm.write("<h2");
				oRm.addStyle("color", "blue");
				oRm.writeStyles();
				oRm.write(">" + oControl.getValue() + "</h2>");
			}
		});
	}
);