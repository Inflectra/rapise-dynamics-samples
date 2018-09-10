var saved_script_objects={
	"Data": {
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
		"path": "%WORKDIR%\\Data.xlsx"
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
	"VendGroup": {
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
		"object_type": "UIAHyperlink",
		"object_flavor": "Hyperlink",
		"object_name": "VendGroup",
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/Main menu\\Accounts payable\\Setup\\Vendors/Vendors/VendGroup"
	},
	"Grid": {
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
		"window_name": "regex:.Vendor groups.*",
		"location": "regex:Vendor groups.*/VendGroup/Pane/Grid"
	},
	"Vendor_group": {
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
		"object_name": "Vendor group",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Vendor groups.*",
		"location": "regex:Vendor groups.*/VendGroup/Pane/Grid/Vendor group"
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
		"object_role": "param:object_class",
		"object_class": "Text",
		"version": 0,
		"object_type": "UIALabel",
		"object_flavor": "Label",
		"object_name": "Close",
		"object_library": "UIAutomation",
		"window_name": "regex:.Vendor groups.*",
		"location": "Custom/closeItem/CloseButton/Close"
	},
	"Type_to_filter": {
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
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "Type to filter",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "AxContainerControl/Filter/levelOneFilterPanel/lookForFilter/LookForFilter.LookForTextBox",
		"ignore_object_name": true
	},
	"Scope": {
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
		"object_name": "Scope",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "AxContainerControl/Filter/levelOneFilterPanel/lookForFilter/Scope"
	},
	"Action_button": {
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
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "Action button",
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "AxContainerControl/Filter/levelOneFilterPanel/lookForFilter/Action button"
	},
	"Name": {
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
		"object_library": "DynamicsAX",
		"window_name": "regex:.Vendors.*",
		"location": "regex:Vendors.*/VendTable/Tab/Pane/Pane[1]/General/Pane/Identification/Pane/@SYS80991/Name"
	},
	"Group": {
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
		"object_name": "Group",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Vendors.*",
		"location": "regex:Vendors.*/VendTable/Tab/Pane/Pane[1]/General/Pane/Identification/@SYS12919/Group"
	},
	"Group_lookup_button": {
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
		"object_name": "Group lookup button",
		"object_library": "UIAutomation",
		"window_name": "regex:.Vendors.*",
		"location": "regex:Vendors.*/VendTable/Tab/Pane/Pane[1]/General/Pane/Identification/@SYS12919/Group/Group lookup button"
	},
	"Grid1": {
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
		"window_name": "regex:.Vendors.*",
		"location": "regex:Vendors.*/regex:.*/TemporaryFormName/Grid"
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
		"window_name": "regex:.Vendors.*",
		"location": "Custom/closeItem/CloseButton/Close"
	},
	"VendorsGrid": {
		"locations": [
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "regex:.All vendors.*",
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
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "regex:All vendors.*/VendTableListPage/ListPageGrid"
	},
	"Type_to_filter1": {
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
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "Type to filter",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "AxContainerControl/Filter/levelOneFilterPanel/lookForFilter/LookForFilter.LookForTextBox",
		"ignore_object_name": true
	},
	"HierarchyDetails": {
		"locations": [
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "regex:.Category hierarchies.*",
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
		"object_name": "HierarchyDetails",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "regex:Category hierarchies.*/EcoResCategoryHierarchyListPage/HierarchyDetails"
	},
	"Category_hierarchy": {
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
		"object_class": "SplitButton",
		"version": 0,
		"object_type": "UIAObject",
		"object_flavor": "UIAutomation",
		"object_name": "Category hierarchy",
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/Pane/AxContainerControl/CategoryHierarchy/ButtonGroupNew/NewCategory"
	},
	"Name1": {
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
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "Name",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "regex:Microsoft Dynamics AX.*/regex:Create a category hierarchy.*/EcoResCategoryHierarchyCreate/Pane/Name"
	},
	"Create": {
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
		"object_name": "Create",
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "regex:Microsoft Dynamics AX.*/regex:Create a category hierarchy.*/EcoResCategoryHierarchyCreate/Pane[1]/Pane/Create"
	},
	"Close2": {
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
		"window_name": "regex:.Category hierarchy.*",
		"location": "Custom/closeItem/CloseButton/Close"
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
		"window_name": "regex:.Category hierarchy.*",
		"location": "regex:Category hierarchy.*/EcoResCategory/Pane[1]/Categories/Tree"
	},
	"Name2": {
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
		"object_library": "DynamicsAX",
		"window_name": "regex:.Category hierarchy.*",
		"location": "regex:Category hierarchy.*/EcoResCategory/Pane[1]/Pane[1]/General/Pane/Pane/Pane/Name"
	},
	"Type_to_filter2": {
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
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "Type to filter",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "AxContainerControl/Filter/levelOneFilterPanel/lookForFilter/LookForFilter.LookForTextBox",
		"ignore_object_name": true
	},
	"Product_number": {
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
		"object_name": "Product number",
		"object_library": "DynamicsAX",
		"window_name": "regex:.New Released product.*",
		"location": "regex:New Released product.*/EcoResProductCreate/Pane/Pane[1]/Identification/Pane/Product number"
	},
	"Item_number": {
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
		"window_name": "regex:.New Released product.*",
		"location": "regex:New Released product.*/EcoResProductCreate/Pane/Pane[1]/regex:Company.*/Pane/Item number"
	},
	"Product_name": {
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
		"object_name": "Product name",
		"object_library": "DynamicsAX",
		"window_name": "regex:.New Released product.*",
		"location": "regex:New Released product.*/EcoResProductCreate/Pane/Pane[1]/Identification/Product name"
	},
	"Search_name": {
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
		"object_name": "Search name",
		"object_library": "DynamicsAX",
		"window_name": "regex:.New Released product.*",
		"location": "regex:New Released product.*/EcoResProductCreate/Pane/Pane[1]/Identification/Search name"
	},
	"Search_name1": {
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
		"object_name": "Search name",
		"object_library": "DynamicsAX",
		"window_name": "regex:.New Released product.*",
		"location": "regex:New Released product.*/EcoResProductCreate/Pane/Pane[1]/regex:Company.*/Search name"
	},
	"OK": {
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
		"window_name": "regex:.New Released product.*",
		"location": "regex:New Released product.*/EcoResProductCreate/Pane[1]/Pane/Pane/OK"
	},
	"UIAutomation": {
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
		"object_type": "UIAObject",
		"object_flavor": "UIAutomation",
		"object_name": "UIAutomation",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/Pane/AxContainerControl/ActionPaneTabDefine/ButtonGroupDefineSetup/Pane"
	},
	"Grid2": {
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
		"window_name": "regex:.Product categories.*",
		"location": "regex:Product categories.*/regex:.*/TemporaryFormName/Grid"
	},
	"ProductCategory": {
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
		"object_name": "Product categories",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/Pane/AxContainerControl/ActionPaneTabDefine/ButtonGroupDefineSetup/ProductCategory"
	},
	"Category": {
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
		"object_name": "Category",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Product categories.*",
		"location": "regex:Product categories.*/EcoResProductCategory/Pane/ProductCategory/Category"
	},
	"Tree1": {
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
		"object_type": "UIATree",
		"object_flavor": "Tree",
		"object_name": "Tree",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Product categories.*",
		"location": "regex:Product categories.*/regex:Select a category.*/EcoResCategorySingleLookup/Pane/Pane[1]/Tree"
	},
	"Close3": {
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
		"window_name": "regex:.Product categories.*",
		"location": "Custom/closeItem/CloseButton/Close"
	},
	"ActionPaneTabProcurementTab": {
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
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "ActionPaneTabProcurementTab",
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/MiddleRow/Pane/AxContainerControl/ActionPane/ActionPaneTabProcurementTab"
	},
	"UIAutomation1": {
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
		"object_type": "UIAObject",
		"object_flavor": "UIAutomation",
		"object_name": "UIAutomation",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/Pane/AxContainerControl/ActionPaneTabProcurement/ButtonGroupPdsApprovedVendorList/Pane"
	},
	"Grid3": {
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
		"window_name": "regex:.Approved vendor list.*",
		"location": "regex:Approved vendor list.*/regex:.*/TemporaryFormName/Grid"
	},
	"Close4": {
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
		"window_name": "regex:.Approved vendor list.*",
		"location": "Custom/closeItem/CloseButton"
	},
	"ProductsGrid": {
		"locations": [
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "regex:.Released products.*",
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
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "regex:Released products.*/EcoResProductPerCompanyListPage/ListPageGrid"
	},
	"Category_hierarchy1": {
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
		"object_name": "Category hierarchy",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Product categories.*",
		"location": "regex:Product categories.*/EcoResProductCategory/Pane/ProductCategory/Category hierarchy"
	},
	"Close5": {
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
		"window_name": "regex:.Product categories.*",
		"location": "Custom/closeItem/CloseButton"
	},
	"Vendor": {
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
		"object_name": "Vendor",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Approved vendor list.*",
		"location": "regex:Approved vendor list.*/PdsApprovedVendorList/Pane/Pane[1]/DetailsGrid/Vendor"
	},
	"Friendly_name": {
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
		"object_name": "Friendly name",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Category hierarchy.*",
		"location": "regex:Category hierarchy.*/EcoResCategory/Pane[1]/Pane[1]/General/Pane/Pane[1]/Friendly name"
	},
	"ActionPaneTabDefineTab": {
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
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "ActionPaneTabDefineTab",
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/MiddleRow/Pane/AxContainerControl/ActionPane/ActionPaneTabDefineTab"
	},
	"NewDeleteButton": {
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
		"object_name": "New",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Vendor groups.*",
		"location": "LayoutContainer/Pane[1]/MiddleRow/Pane/AxContainerControl/Actions/NewDeleteButtonGroup/NewButton"
	},
	"MaintainEdit": {
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
		"object_name": "Edit",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/Pane/AxContainerControl/CategoryHierarchy/ButtonGroupModify/EditButton"
	},
	"NewProduct": {
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
		"object_name": "Product",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/Pane/AxContainerControl/ActionPaneTabDefine/ButtonGroupDefineNew/EcoResProductCreate"
	},
	"DropDown": {
		"locations": [
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:object_name",
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
		"object_type": "DynamicsAXMenuDropDownList",
		"object_flavor": "Menu",
		"object_name": "DropDown",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "DropDown"
	},
	"Setup": {
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
		"object_name": "Setup",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/Pane/AxContainerControl/ActionPaneTabProcurement/ButtonGroupPdsApprovedVendorList/PdsApprovedVendorList"
	},
	"AddVendorButton": {
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
		"object_name": "Add",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Approved vendor list.*",
		"location": "AxContainerControl/DetailsGridActionPaneTab/AVLGridButtonGroup/AddRecord"
	},
	"ProductCategory1": {
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
		"object_name": "ProductCategory",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Product categories.*",
		"location": "regex:Product categories.*/EcoResProductCategory/Pane/ProductCategory"
	},
	"NewVendor": {
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
		"object_name": "Vendor",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/Pane/AxContainerControl/Vendor/VendorNew/NewVendor"
	},
	"RefreshButton": {
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
		"location": "Pane/Pane/AxContainerControl/Vendor/VendorList/RefreshCommandButton"
	},
	"NewCategoryNode": {
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
		"object_name": "New category node",
		"object_library": "DynamicsAX",
		"window_name": "regex:.Category hierarchy.*",
		"location": "LayoutContainer/Pane[1]/Pane/AxContainerControl/Categories/NewGroup/commandButtonSubCat"
	}
};