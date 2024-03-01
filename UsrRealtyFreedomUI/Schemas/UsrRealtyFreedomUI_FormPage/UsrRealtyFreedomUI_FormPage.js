define("UsrRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/["UsrMyUtils"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(myutils)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "#FDD5E4",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "74825390-8f14-40d0-be53-b7bdc646054c",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrPushButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_rm09fxq_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "right-icon",
					"visible": true,
					"icon": "car-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_akvp7su",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_akvp7su"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_7dpo9xj",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_7dpo9xj"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_6zo2yzd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOffertypeUsrCommissionPercent",
					"control": "$PDS_UsrOffertypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCommission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_85rebco",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_85rebco"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_uvfzw01",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_uvfzw01",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_kmol2mc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_kmol2mc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOffertype",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOffertype_fn2nf43",
					"labelPosition": "auto",
					"control": "$PDS_UsrOffertype_fn2nf43",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_me2g0vm",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_me2g0vm_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOffertype",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_kz20x0w",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_kz20x0w",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_rjpumvm",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_rjpumvm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_8m4xaix",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8m4xaix_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCountry",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_o44tp9e",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_o44tp9e",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_g8s79hf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_g8s79hf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCountry",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCity",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_yn4axaq",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_yn4axaq",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_cov04cr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_cov04cr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCity",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_g9zufek",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_g9zufek_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_kv9pxkr",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_g9zufek",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_wdajou3",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_kv9pxkr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_307hrrq",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_307hrrq_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrVisitRealtyFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_wdajou3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ndcybrb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ndcybrb_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_p7ht28tDS"
						}
					}
				},
				"parentName": "FlexContainer_wdajou3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_h2u1rmj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_h2u1rmj_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_wdajou3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_2jjhgkg",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_2jjhgkg_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_p7ht28t"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_h2u1rmj",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_63ai6pq",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_63ai6pq_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrVisitRealtyFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_h2u1rmj",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_sipbxf4",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_sipbxf4_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_p7ht28t"
					]
				},
				"parentName": "FlexContainer_wdajou3",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_gtftpnl",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_g9zufek",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_p7ht28t",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_p7ht28t",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_p7ht28tDS_Id",
					"columns": [
						{
							"id": "3fea1a4b-48bc-caf9-c275-da761ba9c5c8",
							"code": "GridDetail_p7ht28tDS_UsrVisitdatetime",
							"path": "UsrVisitdatetime",
							"caption": "#ResourceString(GridDetail_p7ht28tDS_UsrVisitdatetime)#",
							"dataValueType": 7
						},
						{
							"id": "6df30b69-2471-8412-0464-069e7b320562",
							"code": "GridDetail_p7ht28tDS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_p7ht28tDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "311cee88-b5e2-7edd-7944-16d82573b990",
							"code": "GridDetail_p7ht28tDS_UsrComment",
							"caption": "#ResourceString(GridDetail_p7ht28tDS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"referenceSchema": "UsrRealtyVisitsModalPage"
				},
				"parentName": "GridContainer_gtftpnl",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_akvp7su": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PriceMustBeGreaterthanZero)#"
								}
							}
						}
					},
					"PDS_UsrArea_7dpo9xj": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(AreaMustBeGreaterthanZero)#"
								}
							}
						}
					},
					"PDS_UsrType_uvfzw01": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOffertype_fn2nf43": {
						"modelConfig": {
							"path": "PDS.UsrOffertype"
						}
					},
					"PDS_UsrComment_kz20x0w": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_rjpumvm": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrCountry_o44tp9e": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_yn4axaq": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"GridDetail_2xr7dy6": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_2xr7dy6DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_2xr7dy6DS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_2xr7dy6DS.UsrName"
									}
								},
								"GridDetail_2xr7dy6DS_Id": {
									"modelConfig": {
										"path": "GridDetail_2xr7dy6DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_lcmdq5h": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_lcmdq5hDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrPotentialcustomer"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_lcmdq5hDS_UsrVisitdatetime": {
									"modelConfig": {
										"path": "GridDetail_lcmdq5hDS.UsrVisitdatetime"
									}
								},
								"GridDetail_lcmdq5hDS_UsrPotentialcustomer": {
									"modelConfig": {
										"path": "GridDetail_lcmdq5hDS.UsrPotentialcustomer"
									}
								},
								"GridDetail_lcmdq5hDS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_lcmdq5hDS.UsrOwner"
									}
								},
								"GridDetail_lcmdq5hDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_lcmdq5hDS.UsrComment"
									}
								},
								"GridDetail_lcmdq5hDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_lcmdq5hDS.UsrName"
									}
								},
								"GridDetail_lcmdq5hDS_Id": {
									"modelConfig": {
										"path": "GridDetail_lcmdq5hDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_p7ht28t": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_p7ht28tDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrComment"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_p7ht28t_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_p7ht28tDS_UsrVisitdatetime": {
									"modelConfig": {
										"path": "GridDetail_p7ht28tDS.UsrVisitdatetime"
									}
								},
								"GridDetail_p7ht28tDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_p7ht28tDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_p7ht28tDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_p7ht28tDS.UsrComment"
									}
								},
								"GridDetail_p7ht28tDS_Id": {
									"modelConfig": {
										"path": "GridDetail_p7ht28tDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrCommission_85rebco": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOffertypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOffertypeUsrCommissionPercent"
						}
					},
					"GridDetail_p7ht28t_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_p7ht28tDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealtyFreedomUI",
							"attributes": {
								"UsrOffertypeUsrCommissionPercent": {
									"path": "UsrOffertype.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_lcmdq5hDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisitsModalPage",
							"attributes": {
								"UsrVisitdatetime": {
									"path": "UsrVisitdatetime"
								},
								"UsrPotentialcustomer": {
									"path": "UsrPotentialcustomer"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrName": {
									"path": "UsrName"
								}
							}
						}
					},
					"GridDetail_p7ht28tDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrVisitRealtyFreedomUI",
							"attributes": {
								"UsrVisitdatetime": {
									"path": "UsrVisitdatetime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_akvp7su;
					request.$context.PDS_UsrArea_7dpo9xj = price * 0.2;
					this.console.log("Price = " + price);
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					/* If the UsrPriceUSD field changes, take the following steps. */
					if (request.attributeName === 'PDS_UsrPrice_akvp7su' || 					// if price changed
					   request.attributeName === 'PDS_UsrOffertypeUsrCommissionPercent' ) { 		// or multiplier changed
						var price = await request.$context.PDS_UsrPrice_akvp7su;
						var percent = await request.$context.PDS_UsrOffertypeUsrCommissionPercent;
						//var commission = price * percent / 100;
						var commission = myutils.my_proc(price,percent);
						request.$context.PDS_UsrCommission_85rebco = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});