sap.ui.define(
	[],
	function(){
		return sap.ui.core.Control.extend("cn.par.customControls",{
			metadata: {
				properties : {
					"myText" : ""
				}
			},
			init : function(){},
			renderer : function(oRm, oControl){
				oRm.write("<h1>" + oControl.getMyText() + "</h1>");
			}
		});
	}
);