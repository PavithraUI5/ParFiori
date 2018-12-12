sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(Controller, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("cn.par.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf cn.par.view.Main
		 */
		//oPaths: null,
		oAmt: 0,
		oCurr: "",
		productId : null,
		popImg: null,
		oTotalPurchaseAmt : 0,
		aQty: [],
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
		},
		onItemPress: function() {
			//MessageToast.show("hello");
			//this.oRouter.navTo("register");
		},
		onBook: function() {
			//MessageToast.show("hello");
			this.oRouter.navTo("appointment", {
				Amount: this.oAmt,
				Currency: this.oCurr
			});
		},
		onSelectedItems: function() {
			//MessageToast.show("hello");
			//var oSelectedItems = oEvent.getParameters("listItems");
			var oList = this.getView().byId("idChoiceList");
			var oItemsList = oList.getSelectedItems();
			var oLength = oItemsList.length;
			var i;
			//var oPaths;
			var localNumber;
			var oTotal = 0;
			/*var localIndex = "";
			var oLoopIndex = "";*/
			for (i = 0; i < oLength; i++) {
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
		},
		onPressRegister: function() {

		},
		onProductName : function(oEvent){
			debugger;
			if(!this.popImg){
				this.popImg = new sap.ui.xmlfragment("cn.par.fragments.popImage", this);
				this.getView().addDependent(this.popImg);
			}
			
			var oPath = this.getView().byId("idProductTable").getSelectedItem().getBindingContextPath();
			this.popImg.bindElement(oPath);
			this.popImg.openBy(oEvent.getSource());
		},
		onClickDetails: function(oEvent) {
			if(!this.popup){
				this.popup = new sap.ui.xmlfragment("cn.par.fragments.PopoverData", this);
				this.getView().addDependent(this.popup);
			}
			var path = this.getView().byId("idProductTable").getSelectedItem().getBindingContextPath();
			path = path.concat("/ToSupplier");
			this.popup.bindElement(path);
			this.popup.openBy(oEvent.getSource());
			//var src = oEvent.getSource();
			
			/*this.oRouter.navTo("productDetail",{
				productId : 
			});*/
		},
		onSelectionProducts : function(){
			debugger;
			var oProdTab = this.getView().byId("idProductTable");
			var oItems = oProdTab.getSelectedItems();
			var oLength = oItems.length;
			var i;
			var localNumber, localQty;
			var oTotal = 0;
			for (i = 0; i < oLength; i++) {
				localNumber = oProdTab.getSelectedItems()[i].getCells()[5].getText();
				localNumber = parseInt(localNumber);
				oTotal = localNumber + oTotal;
				localQty = oProdTab.getSelectedItems()[i].getCells()[2].getValue();
				this.aQty.push(localQty);
			}
			this.oTotalPurchaseAmt = oTotal;
		},
		onPurchase : function(){
			MessageBox.confirm("Please confirm if you want to continue for Pay");
			this.oRouter.navTo("buyProducts",{
				amount : this.oTotalPurchaseAmt
			});
		},
		onSubmitFeedback : function(){
			this.oRouter.navTo("Feedback");
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