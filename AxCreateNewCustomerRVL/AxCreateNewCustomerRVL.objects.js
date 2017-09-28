var saved_script_objects={
	Tree:{
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
	"object_type": "UIATree",
	"object_flavor": "Tree",
	"object_name": "Tree",
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "navPaneTable/Pane/Tab/Retail essentials/Tree"
},
	ListPageGrid:{
	"locations": [
		{
			"locator_name": "UIAutomation",
			"location": {
				"location": "param:location",
				"window_name": "?All customers? (??dat?)?? - ????Customer account?: ??DAT-000012????",
				"window_class": "AxChildFrame"
			}
		}
	],
	"window_class": "AxMainFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "DynamicsAXTable",
	"object_flavor": "Table",
	"object_name": "ListPageGrid",
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "All customers (dat) - Customer account: DAT-000012/CustTableListPage/ListPageGrid"
},
	Customer:{
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
	"object_name": "Customer",
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "Pane/Pane/AxContainerControl/HomeTab/NewGroup/NewCustomer"
},
	Name:{
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
	"object_name": "Name",
	"window_name": "?Customer? (??1? - ??dat?)?? - ??New Record??",
	"location": "Customer (1 - dat) - New Record/DirPartyQuickCreateForm/Pane/Pane/@SYS80991/Name"
},
	Customer_group:{
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
	"object_name": "Customer group",
	"window_name": "?Customer? (??1? - ??dat?)?? - ??New Record??",
	"location": "Customer (1 - dat) - New Record/DirPartyQuickCreateForm/Pane/@SYS340108/Customer group"
},
	Add:{
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
	"object_name": "Add",
	"window_name": "?Duplicate detected? (??1?)???",
	"location": "Duplicate detected (1)/DirPartyVerification/Pane[1]/Pane/Add"
},
	Customer_group_lookup_button:{
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
	"object_name": "Customer group lookup button",
	"window_name": "?Customer? (??1? - ??dat?)?? - ??New Record??",
	"location": "Customer (1 - dat) - New Record/DirPartyQuickCreateForm/Pane/@SYS340108/Customer group/Customer group lookup button"
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
	"window_name": "?Customer? (??1? - ??dat?)?? - ??New Record??",
	"location": "No id/No id/TemporaryFormName/Grid"
},
	Save_and_close:{
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
	"object_name": "Save and close",
	"window_name": "?Customer? (??1? - ??dat?)?? - ??New Record??",
	"location": "Customer (1 - dat) - New Record/DirPartyQuickCreateForm/Pane[1]/Pane/Save and close"
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
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "Pane/Pane/AxContainerControl/HomeTab/ListGroup/Refresh"
},
	_Delete:{
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
	"object_name": "Delete",
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "Pane/Pane/AxContainerControl/HomeTab/MaintainGroup/cmdbtnDelete"
},
	Yes:{
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
	"window_class": "AxMainFrame",
	"object_text": "",
	"object_role": "param:object_flavor",
	"object_class": "param:object_flavor",
	"version": 0,
	"object_type": "UIAButton",
	"object_flavor": "Button",
	"object_name": "Yes",
	"window_name": "regex:.Microsoft Dynamics AX.*",
	"location": "No id/No id/Yes"
}
};
