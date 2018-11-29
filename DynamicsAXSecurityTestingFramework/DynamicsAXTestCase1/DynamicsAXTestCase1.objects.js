var saved_script_objects={
	"AddressBarContainer": {
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
	"Maintain": {
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
		"object_class": "Group",
		"version": 0,
		"object_type": "DynamicsAXMenu",
		"object_flavor": "Menu",
		"object_name": "Maintain",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/Pane/AxContainerControl/ActionPaneTab/btnGrpMaintain"
	},
	"ButtonGroupUsersRoles": {
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
		"object_role": "param:object_class",
		"object_class": "Group",
		"version": 0,
		"object_type": "DynamicsAXMenu",
		"object_flavor": "Menu",
		"object_name": "ButtonGroupUsersRoles",
		"object_library": "DynamicsAX",
		"window_name": "regex:.User.*",
		"location": "AxContainerControl/ActionPaneTabUsersRoles/ButtonGroupUsersRoles"
	},
	"Grant_access_to_all_organization": {
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
		"object_class": "RadioButton",
		"version": 0,
		"object_type": "UIARadioButton",
		"object_flavor": "Radio",
		"object_name": "Grant access to all organizations",
		"object_library": "UIAutomation",
		"window_name": "regex:.Organizations for the user.*",
		"location": "regex:Organizations for the user.*/SysSecRoleAssignOM/Tab/Pane/Select the organizations for this user and role/Pane/Grant access to all organizations"
	},
	"Close": {
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
		"window_name": "regex:.Organizations for the user.*",
		"location": "Custom/closeItem/CloseButton"
	},
	"Close1": {
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
		"object_role": "param:object_class",
		"object_class": "Text",
		"version": 0,
		"object_type": "UIALabel",
		"object_flavor": "Label",
		"object_name": "Close",
		"object_library": "UIAutomation",
		"window_name": "regex:.User.*",
		"location": "Custom/closeItem/CloseButton/Close"
	},
	"Grid": {
		"locations": [
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "regex:.Users.*",
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
		"location": "regex:Users.*/SysUserInfoPage/Grid"
	},
	"Tree": {
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
		"window_name": "regex:.User.*",
		"location": "regex:User.*/SysUserInfoDetail/Tab/User details/regex:.*[1]/Pane/User's roles/Tree"
	}
};