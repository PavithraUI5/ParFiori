sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("cn.par.controller.Feedback", {
		onSubmit: function() {
			var payload = this.getView().getModel("local").getProperty("/feedbackSubmit");
			var oDataModel = this.getView().getModel();
			oDataModel.create("/FeedbackSet", payload, {
				success: function() {
					MessageToast.show("Feedback Submitted");
				},
				error: function() {
					MessageToast.show("Sorry error while submitting");
				}
			});
		},
		onBack: function() {
			this.oRouter.navTo();
		},
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf cn.par.view.Feedback
		 */
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oJsonModel = new sap.ui.model.json.JSONModel();
			oJsonModel.setData({
				"feedbackSubmit": {
					"NAME" : "",
        			"EMAIL_ID" : "",
        			"RATING" : "4",
        			"COMMENTS" : ""
				}
			});
			this.getView().setModel(oJsonModel, "local");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf cn.par.view.Feedback
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf cn.par.view.Feedback
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf cn.par.view.Feedback
		 */
		//	onExit: function() {
		//
		//	}

	});

});