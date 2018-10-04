var saved_script_objects={
	_File:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "",
				"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
			}
		}
	],
	"window_class": "AxMainFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "MenuBar",
	"version": 0,
	"object_type": "DynamicsAXMenu",
	"object_flavor": "Menu",
	"object_name": "File",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "Pane/MiddleRow/Jewel/File"
},
	AddressBarContainer:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "",
				"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
			}
		}
	],
	"window_class": "AxMainFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Pane",
	"version": 0,
	"object_type": "DynamicsAXAddressBar",
	"object_flavor": "Edit",
	"object_name": "AddressBarContainer",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "Pane/TopRow/AddressBarContainer"
},
	Purchase_order:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "",
				"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
			}
		}
	],
	"window_class": "AxMainFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "DynamicsAXMenuItem",
	"object_flavor": "MenuItem",
	"object_name": "Purchase order",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "Pane/Pane/AxContainerControl/Procurement/GroupNew/NewPurchOrder"
},
	Grid:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "DynamicsAXTable",
	"object_flavor": "Table",
	"object_name": "Grid",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Create purchase order.*",
	"location": "regex:Create purchase order.*/regex:.*/TemporaryFormName/Grid"
},
	General:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Pane",
	"version": 0,
	"object_type": "UIAObject",
	"object_flavor": "UIAutomation",
	"object_name": "General",
	"object_library": "UIAutomation",
	"window_name": "regex:.Create purchase order.*",
	"location": "regex:Create purchase order.*/PurchCreateOrder/Pane[1]/General"
},
	Purchase_type:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "DynamicsAXComboBoxEdit",
	"object_flavor": "ComboBox",
	"object_name": "Purchase type",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Create purchase order.*",
	"location": "regex:Create purchase order.*/PurchCreateOrder/Pane[1]/General/Purchase order/Purchase type/Purchase type"
},
	Site:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Edit",
	"version": 0,
	"object_type": "DynamicsAXTextBox",
	"object_flavor": "Text",
	"object_name": "Site",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Create purchase order.*",
	"location": "regex:Create purchase order.*/PurchCreateOrder/Pane[1]/General/Storage dimensions/Site"
},
	Site_lookup_button:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Pane",
	"version": 0,
	"object_type": "UIAObject",
	"object_flavor": "UIAutomation",
	"object_name": "Site lookup button",
	"object_library": "UIAutomation",
	"window_name": "regex:.Create purchase order.*",
	"location": "regex:Create purchase order.*/PurchCreateOrder/Pane[1]/General/Storage dimensions/Site/Site lookup button"
},
	Warehouse:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Edit",
	"version": 0,
	"object_type": "DynamicsAXTextBox",
	"object_flavor": "Text",
	"object_name": "Warehouse",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Create purchase order.*",
	"location": "regex:Create purchase order.*/PurchCreateOrder/Pane[1]/General/Storage dimensions/Warehouse"
},
	Warehouse_lookup_button:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Pane",
	"version": 0,
	"object_type": "UIAObject",
	"object_flavor": "UIAutomation",
	"object_name": "Warehouse lookup button",
	"object_library": "UIAutomation",
	"window_name": "regex:.Create purchase order.*",
	"location": "regex:Create purchase order.*/PurchCreateOrder/Pane[1]/General/Storage dimensions/Warehouse/Warehouse lookup button"
},
	OK:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "OK",
	"object_library": "UIAutomation",
	"window_name": "regex:.Create purchase order.*",
	"location": "regex:Create purchase order.*/PurchCreateOrder/Pane/OK"
},
	Item_number:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Edit",
	"version": 0,
	"object_type": "DynamicsAXTextBox",
	"object_flavor": "Text",
	"object_name": "Item number",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Purchase order.*",
	"location": "regex:Purchase order.*/PurchTable/Tab/Pane/Tab/Pane/Pane/Purchase order lines/LineSpec/Item number"
},
	Grid1:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "DynamicsAXTable",
	"object_flavor": "Table",
	"object_name": "Grid",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Purchase order.*",
	"location": "regex:Purchase order.*/regex:.*/InventItemIdLookupPurchase/Grid"
},
	LineSpec:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "DynamicsAXTable",
	"object_flavor": "Table",
	"object_name": "LineSpec",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Purchase order.*",
	"location": "regex:Purchase order.*/PurchTable/Tab/Pane/Tab/Pane/Pane/Purchase order lines/LineSpec"
},
	Purchase_order__1___dat____Purch:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Window",
	"version": 0,
	"object_type": "UIAObject",
	"object_flavor": "UIAutomation",
	"object_name": "Purchase order (1 - dat) - Purchase order: DAT-000010, Arthur Conan Doyle",
	"object_library": "UIAutomation",
	"window_name": "regex:.Purchase order.*",
	"location": "regex:Purchase order.*"
},
	Add_line:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "",
				"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "DynamicsAXMenuItem",
	"object_flavor": "MenuItem",
	"object_name": "Add line",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Purchase order.*",
	"location": "AxContainerControl/LineOverviewActionTab/LineOverviewCoreActionButtonGroup/LineStripNew"
},
	PurchaseTab:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "PurchaseTab",
	"object_library": "UIAutomation",
	"window_name": "regex:.Purchase order.*",
	"location": "LayoutContainer/Pane[1]/MiddleRow/Pane/AxContainerControl/ActionPaneHeader/PurchaseTab"
},
	Confirm:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "DynamicsAXMenuItem",
	"object_flavor": "MenuItem",
	"object_name": "Confirm",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Purchase order.*",
	"location": "LayoutContainer/Pane[1]/Pane/AxContainerControl/Purchase/PurchaseGenerate/buttonConfirm"
},
	ReceiveTab:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "ReceiveTab",
	"object_library": "UIAutomation",
	"window_name": "regex:.Purchase order.*",
	"location": "LayoutContainer/Pane[1]/MiddleRow/Pane/AxContainerControl/ActionPaneHeader/ReceiveTab"
},
	Product_receipt:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "DynamicsAXMenuItem",
	"object_flavor": "MenuItem",
	"object_name": "Product receipt",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Purchase order.*",
	"location": "LayoutContainer/Pane[1]/Pane/AxContainerControl/Receive/ReceiveProcess/buttonUpdatePackingSlip"
},
	Product_receipt1:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Edit",
	"version": 0,
	"object_type": "DynamicsAXTextBox",
	"object_flavor": "Text",
	"object_name": "Product receipt",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Posting product receipt.*",
	"location": "regex:Posting product receipt.*/PurchEditLines/Tab/Overview/gridParmTable/Product receipt"
},
	OK1:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "OK",
	"object_library": "UIAutomation",
	"window_name": "regex:.Posting product receipt.*",
	"location": "regex:Posting product receipt.*/PurchEditLines/Pane/OK"
},
	GeneralSMBTab:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "GeneralSMBTab",
	"object_library": "UIAutomation",
	"window_name": "regex:.Purchase order.*",
	"location": "LayoutContainer/Pane[1]/MiddleRow/Pane/AxContainerControl/ActionPaneHeader/GeneralSMBTab"
},
	_Number:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Edit",
	"version": 0,
	"object_type": "DynamicsAXTextBox",
	"object_flavor": "Text",
	"object_name": "Number",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Vendor invoice.*",
	"location": "regex:Vendor invoice.*/VendEditInvoice/Tab/Pane/Tab/Pane/Pane/Vendor invoice header/Pane/Pane/Invoice identification/Number"
},
	Invoice_date:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Edit",
	"version": 0,
	"object_type": "DynamicsAXTextBox",
	"object_flavor": "Text",
	"object_name": "Invoice date",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Vendor invoice.*",
	"location": "regex:Vendor invoice.*/VendEditInvoice/Tab/Pane/Tab/Pane/Pane/Vendor invoice header/Pane/Pane[1]/Invoice dates/Invoice date"
},
	Invoice_date_lookup_button:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Pane",
	"version": 0,
	"object_type": "UIAObject",
	"object_flavor": "UIAutomation",
	"object_name": "Invoice date lookup button",
	"object_library": "UIAutomation",
	"window_name": "regex:.Vendor invoice.*",
	"location": "regex:Vendor invoice.*/VendEditInvoice/Tab/Pane/Tab/Pane/Pane/Vendor invoice header/Pane/Pane[1]/Invoice dates/Invoice date lookup button"
},
	Today:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "Today",
	"object_library": "UIAutomation",
	"window_name": "regex:.Vendor invoice.*",
	"location": "regex:Vendor invoice.*/regex:.*/SysDateLookUp/Pane/Today"
},
	Post:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "SplitButton",
	"version": 0,
	"object_type": "UIAObject",
	"object_flavor": "UIAutomation",
	"object_name": "Post",
	"object_library": "UIAutomation",
	"window_name": "regex:.Vendor invoice.*",
	"location": "LayoutContainer/Pane[1]/Pane/AxContainerControl/Overview/Actions/OK"
},
	Post1:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "Post",
	"object_library": "UIAutomation",
	"window_name": "regex:.Vendor invoice.*",
	"location": "regex:Vendor invoice.*/regex:.*/VendEditInvoicePostDropDialog/Pane[1]/Pane/Post"
},
	Tree:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIATree",
	"object_flavor": "Tree",
	"object_name": "Tree",
	"ignore_object_name": true,
	"object_library": "UIAutomation",
	"window_name": "regex:.Infolog.*",
	"location": "regex:Infolog.*/SysInfologBrowser/Pane/Pane[1]/Tree"
},
	Close:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "Close",
	"object_library": "UIAutomation",
	"window_name": "regex:.Infolog.*",
	"location": "regex:Infolog.*/SysInfologBrowser/Pane[1]/Pane/Close"
},
	Close1:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "",
				"window_class": "regex:HwndWrapper\\[Ax32\\.exe.+\\]"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "Close",
	"object_library": "UIAutomation",
	"window_name": "regex:.Purchase order.*",
	"location": "Custom/closeItem/CloseButton"
},
	Refresh:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "",
				"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
			}
		}
	],
	"window_class": "AxMainFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "DynamicsAXMenuItem",
	"object_flavor": "MenuItem",
	"object_name": "Refresh",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "Pane/Pane/AxContainerControl/Procurement/List/Refresh"
},
	TabControl:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "",
				"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
			}
		}
	],
	"window_class": "AxMainFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Tab",
	"version": 0,
	"object_type": "UIATabControl",
	"object_flavor": "TabControl",
	"object_name": "TabControl",
	"ignore_object_name": true,
	"object_library": "UIAutomation",
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "navPaneTable/Pane/Tab"
},
	Column_right:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "Column right",
	"object_library": "UIAutomation",
	"window_name": "regex:.Purchase order.*",
	"location": "regex:Purchase order.*/PurchTable/Tab/Pane/Tab/Pane/Pane/Purchase order lines/LineSpec/NonClientHorizontalScrollBar/DownButton"
},
	Quantity:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Edit",
	"version": 0,
	"object_type": "DynamicsAXTextBox",
	"object_flavor": "Text",
	"object_name": "Quantity",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Purchase order.*",
	"location": "regex:Purchase order.*/PurchTable/Tab/Pane/Tab/Pane/Pane/Purchase order lines/LineSpec/Quantity"
},
	Unit_price:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Edit",
	"version": 0,
	"object_type": "DynamicsAXTextBox",
	"object_flavor": "Text",
	"object_name": "Unit price",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Purchase order.*",
	"location": "regex:Purchase order.*/PurchTable/Tab/Pane/Tab/Pane/Pane/Purchase order lines/LineSpec/Unit price"
},
	Vendor_account:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Edit",
	"version": 0,
	"object_type": "DynamicsAXTextBox",
	"object_flavor": "Text",
	"object_name": "Vendor account",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Create purchase order.*",
	"location": "regex:Create purchase order.*/PurchCreateOrder/Vendor/Vendor account"
},
	Vendor_account_lookup_button:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Pane",
	"version": 0,
	"object_type": "UIAObject",
	"object_flavor": "UIAutomation",
	"object_name": "Vendor account lookup button",
	"object_library": "UIAutomation",
	"window_name": "regex:.Create purchase order.*",
	"location": "regex:Create purchase order.*/PurchCreateOrder/Vendor/Vendor account/Vendor account lookup button"
},
	InvoiceTab:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "InvoiceTab",
	"object_library": "UIAutomation",
	"window_name": "regex:.Purchase order.*",
	"location": "LayoutContainer/Pane[1]/MiddleRow/Pane/AxContainerControl/ActionPaneHeader/InvoiceTab"
},
	Invoice:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "param:window_class"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_class",
	"object_class": "Group",
	"version": 0,
	"object_type": "DynamicsAXMenu",
	"object_flavor": "Menu",
	"object_name": "Generate",
	"object_library": "DynamicsAX",
	"window_name": "regex:.Purchase order.*",
	"location": "LayoutContainer/Pane[1]/Pane/AxContainerControl/Invoice/InvoiceProcess"
},

	Column_left:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "param:window_name",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxTopLevelFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "Column left",
	"object_library": "UIAutomation",
	"window_name": "regex:.Purchase order.*",
	"location": "regex:Purchase order.*/PurchTable/Tab/Pane/Tab/Pane/Pane/Purchase order lines/LineSpec/NonClientHorizontalScrollBar/UpButton"
}
};
