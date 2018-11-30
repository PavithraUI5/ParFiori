sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("cn.par.controller.Appointment", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf cn.par.view.Appointment
		 */
		onAppointmentClick: function(oParams){
			//MessageToast.show("hello");
			var oTotalAmt = oParams.getParameters().arguments.Amount;
			var oCurr = oParams.getParameters().arguments.Currency;
			oTotalAmt = oTotalAmt.concat(" ",oCurr);
			this.getView().byId("idAmount").setValue(oTotalAmt);
		} ,
		onInit: function() {
			//this.oRouter = this.getOwnerComponent.getRouter();
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.attachRoutePatternMatched(this.onAppointmentClick, this);
		},
		onBackBtn:function(){
			this.oRouter.navTo();
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf cn.par.view.Appointment
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf cn.par.view.Appointment
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf cn.par.view.Appointment
		 */
		//	onExit: function() {
		//
		//	}

	});

});