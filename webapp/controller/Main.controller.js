sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("cn.par.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf cn.par.view.Main
		 */
		//oPaths: null,
		oAmt : 0,
		oCurr : "",
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
		},
		onItemPress: function() {
			//MessageToast.show("hello");
			//this.oRouter.navTo("register");
		},
		onBook: function() {
			//MessageToast.show("hello");
			//if (!this.oPaths) {
				//var oApp = this.getView().getParent();
				//var oAppointmentView = oApp.getPages()[1];
				/*var oAppointmentV = sap.ui.view("idAppointment",{
					viewName : "cn.par.view.Appointment",
					type : "XML"
				});*/
				//oApp.addPage(oAppointmentV);
				//var oA = oApp.getPages()[1];
				/*oA.bindElement(this.oPaths);
				oApp.to(oA);*/
				//oAppointmentV.bindElement(this.oPaths);
				//this.oRouter.navTo("appointment");
				
				this.oRouter.navTo("appointment",{
					Amount : this.oAmt,
					Currency : this.oCurr
				});
				//oApp.to("idAppoint");
			//}
		},
		onSelectedItems: function() {
				//MessageToast.show("hello");
				//var oSelectedItems = oEvent.getParameters("listItems");
				var oList = this.getView().byId("idChoiceList");
				var oItemsList = oList.getSelectedItems();
				var oLength = oItemsList.length;
				var i, oPaths;
				var localNumber;
				var oTotal = 0;
				/*var localIndex = "";
				var oLoopIndex = "";*/
				for(i=0; i<oLength; i++){
					//oPaths = oList.getSelectedItems()[i].getBindingContextPath();
					localNumber = oList.getSelectedItems()[i].getNumber();
					localNumber = parseInt(localNumber);
					oTotal = localNumber + oTotal; 
					/*localIndex = oPaths.split("/")[oPaths.split("/").length - 1];
					if(i === oLength - 1){
						oLoopIndex = oLoopIndex.concat(localIndex);
					}else{
						oLoopIndex = oLoopIndex.concat(localIndex,",");
					}*/
					
				}
				this.oCurr = oList.getSelectedItems()[0].getNumberUnit();
				this.oAmt = oTotal;
				//this.oIndex = oLoopIndex;
				/*var oPaths = oList.getSelectedItems()[0].getBindingContextPath();
				this.oIndex = oPaths.split("/")[oPaths.split("/").length - 1];*/
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf cn.par.view.Main
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf cn.par.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf cn.par.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});