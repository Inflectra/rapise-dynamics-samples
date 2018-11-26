var saved_script_objects={
	"UserTable": {
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
	"RolesForUser": {
		"locations": [
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "?Roles for selected user?",
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
		"object_name": "rolesForUser",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Roles for selected user/SysSecPartRolesForUser/rolesForUser"
	},
	"AddressBar": {
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
	"Close": {
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
		"object_name": "Close",
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "regex:Microsoft Dynamics AX.*/TitleBar/Close"
	},
	"Users": {
		"locations": [
			{
				"locator_name": "Spreadsheet",
				"location": {
					"path": "param:path"
				}
			}
		],
		"window_name": "Spreadsheets",
		"version": 0,
		"ignore_object_name": true,
		"object_type": "Spreadsheet",
		"object_flavor": "Table",
		"object_library": "Spreadsheet",
		"path": "%WORKDIR%\\Users.xlsx"
	},
	"Roles": {
		"locations": [
			{
				"locator_name": "Spreadsheet",
				"location": {
					"path": "param:path"
				}
			}
		],
		"window_name": "Spreadsheets",
		"version": 0,
		"ignore_object_name": true,
		"object_type": "Spreadsheet",
		"object_flavor": "Table",
		"object_library": "Spreadsheet",
		"path": "%WORKDIR%\\Roles.xlsx"
	},
	"Modules": {
		"locations": [
			{
				"locator_name": "Spreadsheet",
				"location": {
					"path": "param:path"
				}
			}
		],
		"window_name": "Spreadsheets",
		"version": 0,
		"ignore_object_name": true,
		"object_type": "Spreadsheet",
		"object_flavor": "Table",
		"object_library": "Spreadsheet",
		"path": "%WORKDIR%\\Modules.xlsx"
	},
	"_File": {
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
	"Home": {
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
		"object_type": "UIACheckBox",
		"object_flavor": "CheckBox",
		"object_name": "Home",
		"object_library": "UIAutomation",
		"window_name": "regex:.Navigation pane options.*",
		"location": "regex:Navigation pane options.*/SysNavPaneOptionsDialog/Pane/Display buttons in this order/List/Home"
	},
	"Cancel": {
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
		"object_name": "Cancel",
		"object_library": "UIAutomation",
		"window_name": "regex:.Navigation pane options.*",
		"location": "regex:Navigation pane options.*/SysNavPaneOptionsDialog/Pane[1]/Pane/Cancel"
	},
	"NavPaneList": {
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
		"object_class": "List",
		"version": 0,
		"object_type": "UIAObject",
		"object_flavor": "UIAutomation",
		"object_name": "UIAutomation",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Navigation pane options.*",
		"location": "regex:Navigation pane options.*/SysNavPaneOptionsDialog/Pane/Display buttons in this order/List"
	},
	"CompanyGrid": {
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
		"object_name": "Grid",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Select company.*",
		"location": "regex:Select company.*/SysDataAreaSelect/Pane/Grid"
	},
	"CompanyOK": {
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
		"window_name": "regex:.Select company.*",
		"location": "regex:Select company.*/SysDataAreaSelect/Pane[1]/Pane/OK"
	},
	"CompanyButton": {
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
		"window_class": "AxMainFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "CompanyButton",
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Custom/companyItemItem/CompanyButton",
		"ignore_object_name": true
	}	
};