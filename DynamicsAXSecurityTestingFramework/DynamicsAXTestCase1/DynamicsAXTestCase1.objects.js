var saved_script_objects={
	"TabControl": {
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
	"Tree": {
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
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "navPaneTable/Pane/Tab/Home/Tree"
	},
	"Grid": {
		"locations": [
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "regex:.Global address book.*",
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
		"object_name": "Grid",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "regex:Global address book.*/GlobalAddressBookListPage/Grid"
	}
};