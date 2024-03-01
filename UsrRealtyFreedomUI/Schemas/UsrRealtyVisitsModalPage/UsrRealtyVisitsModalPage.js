define("UsrRealtyVisitsModalPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_7lquxdv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealtyVisitsModalPageDS_UsrVisitdatetime_tx5zljj",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitsModalPageDS_UsrVisitdatetime_tx5zljj"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_zqbmlcu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitsModalPageDS_UsrPotentialcustomer_n4e8esx",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitsModalPageDS_UsrPotentialcustomer_n4e8esx",
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
				"name": "addRecord_8vj66ae",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8vj66ae_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_zqbmlcu",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_5mqbfsa",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyVisitsModalPageDS_UsrComment_panp4ic",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitsModalPageDS_UsrComment_panp4ic"
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
					"UsrRealtyVisitsModalPageDS_UsrVisitdatetime_tx5zljj": {
						"modelConfig": {
							"path": "UsrRealtyVisitsModalPageDS.UsrVisitdatetime"
						}
					},
					"UsrRealtyVisitsModalPageDS_UsrPotentialcustomer_n4e8esx": {
						"modelConfig": {
							"path": "UsrRealtyVisitsModalPageDS.UsrPotentialcustomer"
						}
					},
					"UsrRealtyVisitsModalPageDS_UsrOwner_f0ch9x9": {
						"modelConfig": {
							"path": "UsrRealtyVisitsModalPageDS.UsrOwner"
						}
					},
					"UsrRealtyVisitsModalPageDS_UsrComment_panp4ic": {
						"modelConfig": {
							"path": "UsrRealtyVisitsModalPageDS.UsrComment"
						}
					},
					"UsrRealtyVisitsModalPageDS_UsrName_buw4cz3": {
						"modelConfig": {
							"path": "UsrRealtyVisitsModalPageDS.UsrName"
						}
					},
					"UsrRealtyVisitsModalPageDS_UsrName_9w5hid3": {
						"modelConfig": {
							"path": "UsrRealtyVisitsModalPageDS.UsrName"
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
						"UsrRealtyVisitsModalPageDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyVisitsModalPage"
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyVisitsModalPageDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});