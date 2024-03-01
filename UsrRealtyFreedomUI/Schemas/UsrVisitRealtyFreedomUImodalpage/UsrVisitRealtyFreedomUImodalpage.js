define("UsrVisitRealtyFreedomUImodalpage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_yth5vhx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrVisitRealtyFreedomUIDS_UsrVisitdatetime_xaqivto",
					"labelPosition": "above",
					"control": "$UsrVisitRealtyFreedomUIDS_UsrVisitdatetime_xaqivto"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_z5tb4ei",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrVisitRealtyFreedomUIDS_UsrPotentialCustomer_6t5ikhp",
					"labelPosition": "above",
					"control": "$UsrVisitRealtyFreedomUIDS_UsrPotentialCustomer_6t5ikhp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_lmcged3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lmcged3_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_z5tb4ei",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_cnj8k3h",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrVisitRealtyFreedomUIDS_UsrComment_kx4zoi7",
					"labelPosition": "above",
					"control": "$UsrVisitRealtyFreedomUIDS_UsrComment_kx4zoi7"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrVisitRealtyFreedomUIDS_UsrVisitdatetime_xaqivto": {
						"modelConfig": {
							"path": "UsrVisitRealtyFreedomUIDS.UsrVisitdatetime"
						}
					},
					"UsrVisitRealtyFreedomUIDS_UsrPotentialCustomer_6t5ikhp": {
						"modelConfig": {
							"path": "UsrVisitRealtyFreedomUIDS.UsrPotentialCustomer"
						}
					},
					"UsrVisitRealtyFreedomUIDS_UsrComment_kx4zoi7": {
						"modelConfig": {
							"path": "UsrVisitRealtyFreedomUIDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrVisitRealtyFreedomUIDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrVisitRealtyFreedomUI"
							}
						}
					},
					"primaryDataSourceName": "UsrVisitRealtyFreedomUIDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});