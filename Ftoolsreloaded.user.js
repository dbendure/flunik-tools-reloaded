// ==UserScript==
// @name        Flunik Tools
// @namespace   FlunikTools
// @description Mirror Army, Auto Level
// @version     4.2.0
// @author      Flunik
// @include     http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// ==/UserScript==
//C:\Users\dbend\AppData\Roaming\Mozilla\Firefox\Profiles\xe32e3zv.default\gm_scripts\Flunik_Tools
(function (){
	var FlunikTools_main =  function() {
		try {
			function CCTAWrapperIsInstalled() {
				return (typeof (CCTAWrapper_IsInstalled) != 'undefined' && CCTAWrapper_IsInstalled);
			}
			
			function createFlunikTools() {
				console.log('FLUNIKTOLS createFlunikTools');
				
				qx.Class.define("FlunikTools.Main", {
					type: "singleton",
					extend: qx.core.Object,
					members: {
						AutoUpdateButton : null,
						cmdButton : null,
						autoUpdateHandleAll : null,
						composite : null,
						tabView : null,
						page1 : null,
						win : null,
						//checkGB : null,
						groupBoxA : null,
						groupBoxB : null,
						groupBoxC : null,
						groupBoxD : null,
						checkBoxA : null,
						checkBoxCy : null,
						checkBoxRe : null,
						checkBoxPp : null,
						checkBoxCc : null,
						checkBoxDh : null,
						checkBoxBa : null,
						checkBoxFa : null,
						checkBoxAi : null,
						checkBoxDf : null,
						//checkBoxA = new qx.ui.form.CheckBox(ClientLib.Base.ETechName.Research_BaseFound
						//checkBoxA = new qx.ui.form.CheckBox(ClientLib.Base.ETechName.Harvester_Crystal
						checkBoxHa : null,
						checkBoxSai : null,
						checkBoxSio : null,
						checkBoxSar : null,
						checkBoxSi : null,
						checkBoxAc : null,
						checkBoxB : null,
						checkBoxC : null,
						cityPage : null,
						cmdB : null,
						textfield : null,

						
						initialize: function() {
							
						
							console.log('FLUNIKTOLS initialize');
							win = new qx.ui.window.Window("First Window");
							win.setWidth(600);
							win.setHeight(600);
							win.setShowMinimize(false);
							win.setLayout(new qx.ui.layout.VBox());
							//////////////////////////////////////////////////////////
							composite = new qx.ui.container.Composite();
							composite.setLayout(new qx.ui.layout.Basic());
							////////////////////////////////////////////////////////////////
							page2 = new qx.ui.tabview.Page("Main");
							page2.setLayout(new qx.ui.layout.VBox());
							////////////////////////////////////////////////////////////////
							tabView = new qx.ui.tabview.TabView();
							tabView.setBarPosition('left');
							//page2.add(tabView);
							//////////////////////////////////////////////////////////////////
							tabViewA = new qx.ui.tabview.TabView();
							tabViewA.setBarPosition('top');
							tabViewA.add(page2);
							//////////////////////////////////////////////////////////////////
							page1 = new qx.ui.tabview.Page("BaseName");
							page1.setLayout(new qx.ui.layout.VBox());
							//page1.add(new qx.ui.basic.Label("Page Content"));
							//tabView.add(page1);
							/////////////////////////////////////////////////////////////////
							/*checkGB = new qx.ui.groupbox.CheckGroupBox("Label");
							checkGB.setLayout(new qx.ui.layout.VBox());*/
							/////////////////////////////////////////////////////////////////
							groupBoxA = new qx.ui.groupbox.GroupBox("Buildings");
							groupBoxA.setLayout(new qx.ui.layout.Grid());
							groupBoxB = new qx.ui.groupbox.GroupBox("Defense");
							groupBoxB.setLayout(new qx.ui.layout.Grid());
							groupBoxC = new qx.ui.groupbox.GroupBox("Offence");
							groupBoxC.setLayout(new qx.ui.layout.Grid());
							groupBoxD = new qx.ui.groupbox.GroupBox("Base");
							groupBoxD.setLayout(new qx.ui.layout.VBox());
							groupBoxE = new qx.ui.groupbox.GroupBox();
							groupBoxE.setLayout(new qx.ui.layout.VBox());
							groupBoxF = new qx.ui.groupbox.GroupBox();
							groupBoxF.setLayout(new qx.ui.layout.VBox());
							//////////////////////////////////////////////////////////////////
							/*checkBoxA = new qx.ui.form.CheckBox("stuffA");
							checkBoxCy = new qx.ui.form.CheckBox("Construction_Yard");
							checkBoxRe = new qx.ui.form.CheckBox("Refinery");
							checkBoxPp = new qx.ui.form.CheckBox("PowerPlant");
							checkBoxCc = new qx.ui.form.CheckBox("Command_Center");
							checkBoxDh = new qx.ui.form.CheckBox("Defense_HQ");
							checkBoxBa = new qx.ui.form.CheckBox("Barracks");
							checkBoxFa = new qx.ui.form.CheckBox("Factory");
							checkBoxAi = new qx.ui.form.CheckBox("Airport");
							checkBoxDf = new qx.ui.form.CheckBox("Defense_Facility");
							//checkBoxA = new qx.ui.form.CheckBox(ClientLib.Base.ETechName.Research_BaseFound
							//checkBoxA = new qx.ui.form.CheckBox(ClientLib.Base.ETechName.Harvester_Crystal
							checkBoxHa = new qx.ui.form.CheckBox("Harvester");
							checkBoxSai = new qx.ui.form.CheckBox("Support_Air");
							checkBoxSio = new qx.ui.form.CheckBox("Support_Ion");
							checkBoxSar = new qx.ui.form.CheckBox("Support_Art");
							checkBoxSi = new qx.ui.form.CheckBox("Silo");
							checkBoxAc = new qx.ui.form.CheckBox("Accumulator");
							
							checkBoxB = new qx.ui.form.CheckBox("stuffB");
							
							checkBoxC = new qx.ui.form.CheckBox("stuffC");
							*/
							//////////////////////////////////////////////////////////////////
							textfield = new qx.ui.form.TextArea("Change me...");
							//textfield.setLiveUpdate(true);
							//var label = new qx.ui.basic.Label("Change me...");
							//textfield.bind("value", label, "value");
							/////////////////////////////////////////////////////////////////////
							//groupBoxA.add(checkBoxCy, {row : 0, column : 0});
							//groupBoxA.add(checkBoxRe, {row : 0, column : 1});
							//groupBoxA.add(checkBoxPp, {row : 0, column : 2});
							//groupBoxA.add(checkBoxCc, {row : 0, column : 3});
							//groupBoxA.add(checkBoxDh, {row : 1, column : 0});
							//groupBoxA.add(checkBoxBa, {row : 1, column : 1});
							//groupBoxA.add(checkBoxFa, {row : 1, column : 2});
							//groupBoxA.add(checkBoxAi, {row : 1, column : 3});
							//groupBoxA.add(checkBoxDf, {row : 2, column : 0});
							//groupBoxA.add(checkBoxHa, {row : 2, column : 1});
							//groupBoxA.add(checkBoxSai, {row : 3, column : 1});
							//groupBoxA.add(checkBoxSio, {row : 3, column : 2});
							//groupBoxA.add(checkBoxSar, {row : 3, column : 0});
							//groupBoxA.add(checkBoxSi, {row : 2, column : 2});
							//groupBoxA.add(checkBoxAc, {row : 2, column : 3});
							//groupBoxB.add(checkBoxB, {row : 3, column : 3});
							//groupBoxC.add(checkBoxC, {row : 4, column : 0});
							
							groupBoxD.add(groupBoxA);
							groupBoxD.add(groupBoxB);
							groupBoxD.add(groupBoxC);
							//groupBoxF.add(textfield);
							//groupBoxF.add(label);

							/*checkGB.add(groupBoxA);
							checkGB.add(groupBoxB);
							checkGB.add(groupBoxC);*/
							
							page2.add(groupBoxE);
							page2.add(tabView);
							page2.add(groupBoxF);
							//page2.add(label);


							page1.add(groupBoxD);

							composite.add(tabViewA);

							win.add(tabViewA);
							//win.open();

							/*this.getRoot().add(win, {left:20, top:20});
							win.open();*/
							
							
							AutoUpdateButton = new qx.ui.form.Button("Toggle Autoupdate", null).set({
								toolTipText: "Autoupdate",
								width: 100,
								height: 40,
								maxWidth: 100,
								maxHeight: 40,
								appearance: ("button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
								center: true
							});
							
							cmdButton = new qx.ui.form.Button("command", null).set({
								toolTipText: "turn auto-update On or Off ",
								width: 100,
								height: 40,
								maxWidth: 100,
								maxHeight: 40,
								appearance: ("button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
								center: true
							});
							
							cmdButton.addListener("click", function(e) {
								//numb = 0;
								if (FlunikTools.Main.getInstance().autoUpdateHandleAll != null) {
									//numb = 0;
									FlunikTools.Main.getInstance().stopAutoUpdate();
									
									cmdButton.setLabel("cmd.OFF");
									//FlunikTools.Main.getInstance().clearCheckBox();
									
									//FlunikTools.Main.getInstance().NumberCount(numb);
								} else {
									this.startAutoUpdate();
									
									cmdButton.setLabel("cmd.ON");
									
									//win.open();
									
									
								}
								//groupBoxE.add(cmdButton);
								//page.add(new qx.ui.form.CheckBox("Reading"));
							}, this);
							
							AutoUpdateButton.addListener("click", function(e) {
								//numb = 0;
								if (FlunikTools.Main.getInstance().cmdB != null) {
									//numb = 0;
									FlunikTools.Main.getInstance().stopCmdAutoUpdate();
									AutoUpdateButton.setLabel("B.OFF");
									//FlunikTools.Main.getInstance().clearCheckBox();
									//win.close();
									//FlunikTools.Main.getInstance().NumberCount(numb);
								} else {
									
									FlunikTools.Main.getInstance().cmdUpdate();
									AutoUpdateButton.setLabel("B.ON");
									//win.open();
									
									
									
								}
								if(AutoUpdateButton.getLabel() == "B.ON"){
									win.open();
								} else {
									win.close();
								}
								//page.add(new qx.ui.form.CheckBox("Reading"));
							}, this);
							groupBoxE.add(new qx.ui.basic.Label("Options"));
						
							groupBoxE.add(cmdButton);
							
							var app = qx.core.Init.getApplication();

							app.getDesktop().add(AutoUpdateButton, {
								right: 120,
								bottom: 100
							});	
							
									
						},
						
						cityPage : function (city, num){
							var _this = FlunikTools.Main.getInstance();
							var pageArr = new Array();
							var groupBoxArrA = new Array();
							var groupBoxArrB = new Array();
							var groupBoxArrC = new Array();
							var groupBoxArr = new Array();
							//var checkBoxArr = new Array();
							if(num == 0 && num >= tabView.getChildren().length){
							//page1.resetLabel();
							//page1.setLabel(city.m_SupportDedicatedBaseName);
							////groupBoxD.resetLegend();
							//groupBoxD.setLegend("Upgrade on this base: " + city.m_SupportDedicatedBaseName);
							page = new qx.ui.tabview.Page(city.m_SupportDedicatedBaseName);
							pageArr[num] = page;
							pageArr[num].setLayout(new qx.ui.layout.VBox());
							
							groupBoxArrA[num] = new qx.ui.groupbox.GroupBox("Buildings");
							groupBoxArrA[num].setLayout(new qx.ui.layout.Grid());
							
							groupBoxArrB[num] = new qx.ui.groupbox.GroupBox("Defense");
							groupBoxArrB[num].setLayout(new qx.ui.layout.Grid());
							
							groupBoxArrC[num] = new qx.ui.groupbox.GroupBox("Offense");
							groupBoxArrC[num].setLayout(new qx.ui.layout.Grid());
							
							groupBoxArr[num] = new qx.ui.groupbox.GroupBox("Upgrade on this base: " + city.m_SupportDedicatedBaseName);
							groupBoxArr[num].setLayout(new qx.ui.layout.VBox());
							
							
							
							groupBoxArr[num].add(groupBoxArrA[num]);
							groupBoxArr[num].add(groupBoxArrB[num]);
							groupBoxArr[num].add(groupBoxArrC[num]);
							pageArr[num].add(groupBoxArr[num]);
							tabView.add(pageArr[num]);
							//console.log(num, page1.getLabel(), page1.setLabel(city.m_SupportDedicatedBaseName) );
							} if(num > 0 && num >= tabView.getChildren().length) {
							
							page = new qx.ui.tabview.Page(city.m_SupportDedicatedBaseName);
							pageArr[num] = page;
							pageArr[num].setLayout(new qx.ui.layout.VBox());
							
							groupBoxArrA[num] = new qx.ui.groupbox.GroupBox("Buildings");
							groupBoxArrA[num].setLayout(new qx.ui.layout.Grid());
							
							groupBoxArrB[num] = new qx.ui.groupbox.GroupBox("Defense");
							groupBoxArrB[num].setLayout(new qx.ui.layout.Grid());
							
							groupBoxArrC[num] = new qx.ui.groupbox.GroupBox("Offense");
							groupBoxArrC[num].setLayout(new qx.ui.layout.Grid());
							
							groupBoxArr[num] = new qx.ui.groupbox.GroupBox("Upgrade on this base: " + city.m_SupportDedicatedBaseName);
							groupBoxArr[num].setLayout(new qx.ui.layout.VBox());
							
							
							
							groupBoxArr[num].add(groupBoxArrA[num]);
							groupBoxArr[num].add(groupBoxArrB[num]);
							groupBoxArr[num].add(groupBoxArrC[num]);
							pageArr[num].add(groupBoxArr[num]);
							tabView.add(pageArr[num]);
							}
							
						},
						buildingBox(building, num, tech, arr, typeNum){
							var groupBoxArrA = new Array();
							
							var checkBox;
							//console.log(building, tech, num, arr);
							if(num == 0){
							
							if(tech == ClientLib.Base.ETechName.Research_BaseFound){checkBox;}
							
							else if(tech == ClientLib.Base.ETechName.Construction_Yard && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 0, column : 0});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Refinery && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 0, column : 1});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.PowerPlant && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 0, column : 2});
										}
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Command_Center && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 0, column : 3});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								//continue;
								}
								
							else if(tech == ClientLib.Base.ETechName.Defense_HQ && tech == arr[building]){
							try{
							if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 1, column : 0});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
							}
							else if(tech == ClientLib.Base.ETechName.Barracks && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 1, column : 1});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Factory && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 1, column : 2});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Airport && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 1, column : 3});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Defense_Facility && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 0});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Harvester && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 1});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Support_Air && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 2});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								//continue;
								}
							else if(tech == ClientLib.Base.ETechName.Support_Ion && tech == arr[building]){
							try{
							if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 2});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
							}
							else if(tech == ClientLib.Base.ETechName.Support_Art && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 2});
										}
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Silo && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 3});
										} 
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Accumulator && tech == arr[building]){
							try{
							if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 3, column : 0});
										} 
							}catch (e) {
									console.log("createFlunikTools: ", e);
								}
							
							}
							
							
							
								
							}
							if(num > 0){
								//console.log(tabView.getSelectables()[num]);
							if(tech == ClientLib.Base.ETechName.Research_BaseFound){checkBox;}
							
							else if(tech == ClientLib.Base.ETechName.Construction_Yard && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 0, column : 0});
										}
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								//tabView.getChildren()[num].getChildren()[0].getChildren()[0].add(new qx.ui.form.CheckBox(building), {row : 0, column : 0});
								//continue;
								}
							else if(tech == ClientLib.Base.ETechName.Refinery && tech == arr[building]){
								try{
								
									if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 0, column : 1});
										}
									
									
								
								}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								
								
								}
							else if(tech == ClientLib.Base.ETechName.PowerPlant && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 0, column : 2});
									}
								}catch (e) {
									console.log("createFlunikTools: ", e);
								}
							}
							else if(tech == ClientLib.Base.ETechName.Command_Center && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 0, column : 3});
										}
										//FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Defense_HQ && tech == arr[building]){
							try{
							if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 1, column : 0});
										}
										//FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
							}
							else if(tech == ClientLib.Base.ETechName.Barracks && tech == arr[building]){
							try{
							if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 1, column : 1});
										}
										//FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Factory && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 1, column : 2});
										}
										//FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Airport && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 1, column : 3});
										}
										//FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
							}
							else if(tech == ClientLib.Base.ETechName.Defense_Facility && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 0});
										}
								//FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
								}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							
							else if(tech == ClientLib.Base.ETechName.Harvester && tech == arr[building]){
								try{
								
									if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 1});
										}
								}catch (e){
								console.log("createFlunikTools: ", e);
								}

								
								}
							else if(tech == ClientLib.Base.ETechName.Support_Air && tech == arr[building]){
								try{
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 2});
										}
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Support_Ion && tech == arr[building]){
							try{
							if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 2});
										}
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							//continue;
							
							else if(tech == ClientLib.Base.ETechName.Support_Art && tech == arr[building]){
							try{
							if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
											tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 2});
										}
										}catch (e) {
									console.log("createFlunikTools: ", e);
								}
								}
							else if(tech == ClientLib.Base.ETechName.Silo && tech == arr[building]){
							try{
							if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
								tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 2, column : 3});
							}
									//groupBoxArrA[0].add(new qx.ui.form.CheckBox(building), {row : 2, column : 3});
							}catch (e){
								console.log("createFlunikTools: ", e);
								}	
								
								}
							else if(tech == ClientLib.Base.ETechName.Accumulator && tech == arr[building]){
							try{
							if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false){
								tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {row : 3, column : 0});
							}
							}catch (e){
								console.log("createFlunikTools: ", e);
							}
							}
							}	
							
						},
						
						plzCheckBox : function (num, building, typeNum){
							var bool = false;
							for(var key in tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()){
										
										var obj = tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()[key];
										
										//if(obj.getLabel() == building || obj.toString() == "undefined"){
										if(cmdButton.getLabel() == "cmd.On"){	
										obj.setValue() = true;
											
										} 
									}
									//return bool;
						},
						
						isCheckBoxChecked : function (num, building, typeNum){
							var bool = false;
							for(var key in tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()){
										
										var obj = tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()[key];
										
										//if(obj.getLabel() == building || obj.toString() == "undefined"){
										if(obj.getValue() && obj.getLabel() == building){	
										bool = true;
											
										} 
									}
									return bool;
						},
						isCheckBoxPlaced : function (num, building, typeNum){
							var bool = false;
							for(var key in tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()){
										
										var obj = tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()[key];
										
										if(obj.getLabel() == building || obj.toString() == "undefined"){
											
										bool = true;
											
										} 
									}
									return bool;
						},
						clearCheckBox : function (){
							var bool = false;
							for(var key in tabView.getSelectables()){
								var piece = tabView.getSelectables()[key];
							for(var aKey in piece.getChildren()[0].getChildren()[typeNum].getChildren()){
										
										var obj = piece.getChildren()[0].getChildren()[aKey];
										
										if(obj.toString() != "undefined"){
											
										bool = obj.removeAll();
											
										} 
									}
							}
									return bool;
						},
						unitBox : function (unitName, num, typeNum, xNum, yNum){
							if(typeNum == 2){
								//console.log(unitName, num, typeNum, xNum, yNum);
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, unitName, typeNum) == false){
								tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(unitName), {row : xNum, column : yNum});
								//console.log(unitName, num, typeNum, xNum, yNum);
							}
							} else if(typeNum == 1){
								//console.log(unitName, num, typeNum, xNum, yNum);
								if(FlunikTools.Main.getInstance().isCheckBoxPlaced(num, unitName, typeNum) == false){
								tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(unitName), {row : xNum, column : yNum});
								//console.log(unitName, num, typeNum, xNum, yNum);
							}
							}
							
						},
						
						canUpgradeUnit: function (unit, city) {
							var _this = FlunikTools.Main.getInstance();
							var nextLevel = unit.get_CurrentLevel() + 1;
							var gameDataTech = unit.get_UnitGameData_Obj();
							var hasEnoughResources = city.HasEnoughResources(ClientLib.Base.Util.GetTechLevelResourceRequirements_Obj(nextLevel, gameDataTech));
						    if (gameDataTech == null || unit.get_IsDamaged() || city.get_IsLocked() || !hasEnoughResources) {
						        return false;
						    }
						    var id = _this.getMainProductionBuildingMdbId(gameDataTech.pt, gameDataTech.f);
						    var building = city.get_CityBuildingsData().GetBuildingByMDBId(id);
						    if ((building == null) || (building.get_CurrentDamage() > 0)) {
						        return false;
						    }
						    var levelReq = ClientLib.Base.Util.GetUnitLevelRequirements_Obj(nextLevel, gameDataTech);
							var reqTechIndexes = _this.getMissingTechIndexesFromTechLevelRequirement(levelReq, true, city);
						    if ((reqTechIndexes != null) && (reqTechIndexes.length > 0)) {
						        return false;
						    }
						    return true;
						},

						getMainProductionBuildingMdbId: function (placementType, faction) {
							var mdbId = -1;
							var techNameId = -1;
							if (placementType == 2) {
								techNameId = 3;
							} else {
								techNameId = 4;
							}
							if (techNameId > 0) {
								mdbId = ClientLib.Base.Tech.GetTechIdFromTechNameAndFaction(techNameId, faction);
							}
							return mdbId;
						},

						getMissingTechIndexesFromTechLevelRequirement: function (levelRequirements, breakAtFirst, city) {
							var reqTechIndexes = [];
							if (levelRequirements != null && levelRequirements.length > 0) {
								for (var lvlIndex=0; (lvlIndex < levelRequirements.length); lvlIndex++) {
									var lvlReq = levelRequirements[lvlIndex];
									var requirementsMet = false;
									var amountCounter = lvlReq.Amount;
									for (var buildingIndex in city.get_Buildings().d) {
										if (city.get_Buildings().d[buildingIndex].get_MdbBuildingId() == lvlReq.RequiredTechId && city.get_Buildings().d[buildingIndex].get_CurrentLevel() >= lvlReq.Level) {
											amountCounter--;
											if (amountCounter <= 0) {
												requirementsMet=true;
												break;
											}
										}
									}
									if (!requirementsMet) {
										requirementsMet = ClientLib.Data.MainData.GetInstance().get_Player().get_PlayerResearch().IsResearchMinLevelAvailable(lvlReq.RequiredTechId, lvlReq.Level);
									}
									if (!requirementsMet) {
										reqTechIndexes.push(lvlIndex);
										if (breakAtFirst) {
											return reqTechIndexes;
										}
									}
								}
							}
							return reqTechIndexes;
						},
						
						// Add the below function to your code and then use
						// this.canUpgradeBuilding(building, city)
						// instead of
						// building.CanUpgrade()
						//Thanks to KRS_L

						canUpgradeBuilding: function (building, city) {
							var nextLevel = (building.get_CurrentLevel() + 1);
							var gameDataTech = building.get_TechGameData_Obj();
							var hasEnoughResources = city.HasEnoughResources(ClientLib.Base.Util.GetTechLevelResourceRequirements_Obj(nextLevel, gameDataTech));
							return (!building.get_IsDamaged() && !city.get_IsLocked() && hasEnoughResources);
						},
						
						startAutoUpdate : function() {
							//var _this = FlunikTools.Main.getInstance();
							//_this.win.open();
							//_this.autoUpgrade();
							this.autoUpdateHandleAll = window.setInterval(this.autoUpgrade(), 30000);
							
							//return setInterval(upgrade, _this.autoUpdateHandleAll);
						},
						stopAutoUpdate : function() {
							var _this = FlunikTools.Main.getInstance();
							clearInterval(this.autoUpdateHandleAll);
							this.autoUpdateHandleAll = null;
						},
						
						cmdUpdate : function() {
							var _this = FlunikTools.Main.getInstance();
							//this.autoUpgrade();
							_this.cmdB = 1;
						},
						stopCmdAutoUpdate : function() {
							var _this = FlunikTools.Main.getInstance();
							
							_this.cmdB = null;
						},
						
						autoUpgrade : function() {
							console.log("Start of Main Function");
							var _this = FlunikTools.Main.getInstance();
							var num = -1;
							var checkBoxes = null;
							//_this.cityPageTab(_this.cityName(), _this.buildingName());
							//page2.getChildren()[1].getChildren()[num] == 0;
							for (var nCity in ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d){
								num++;
								
								var city = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d[nCity];
								console.log(city.m_SupportDedicatedBaseName);
								
								try{
								_this.cityPage(city, num);
								}catch (e){
									console.log("error : ", e)
								}
							
								
								
        				
        			
								
								var buildings = city.get_Buildings();
								//console.log(city);
								
								var fNum = 0;
								var B_obj = 0;
								var D_obj = 0;
								var O_obj = 0;
								var x = -1;
								var y = -1;
								var nameArr = new Array();
								
								var typeArr5 = [];
								//typeArr5[num] = new Array();

								for (var nBuildings in buildings.d) {
									var aNum = -1;
									var bNum = -1;
									var cNum = -1;
									var dNum = -1;
									var eNum = -1;
									var building = buildings.d[nBuildings];
									
									var tech = building.get_TechName();
									var buildingName = building.get_UnitGameData_Obj().dn;
									nameArr[buildingName]= tech;
									//_this.buildingBox(buildingName, num, tech);continue;
									//if(num == 0){
										aNum = 0;
										//console.log(aNum, bNum, cNum, dNum, eNum);
									if(tech == ClientLib.Base.ETechName.Construction_Yard){_this.buildingBox(buildingName, num, tech, nameArr, aNum);}//ClientLib.Base.ETechName.Construction_Yard
									if(tech == ClientLib.Base.ETechName.Refinery){
										aNum = 0;
										//typeArr0[aNum] = buildingName;
										_this.buildingBox(buildingName, num, tech, nameArr, aNum);
										
										}
									if(tech == ClientLib.Base.ETechName.PowerPlant){bNum = 0;_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Command_Center){_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Defense_HQ){_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Barracks){_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Factory){_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Airport){_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Defense_Facility){_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									
									if(tech == ClientLib.Base.ETechName.Harvester){cNum = 0;_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Support_Air){_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Support_Ion){_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Support_Art){_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Silo){dNum++;_this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									if(tech == ClientLib.Base.ETechName.Accumulator){eNum = 0; _this.buildingBox(buildingName, num, tech, nameArr, aNum);}
									//_this.buildingBox(building, num);
									//}
									console.log(_this.isCheckBoxChecked(num, buildingName, aNum), buildingName, aNum, city.m_SupportDedicatedBaseName, num );
									//if(!_this.canUpgradeBuilding(building, city))continue;
									if(_this.isCheckBoxChecked(num, buildingName, aNum) && !_this.canUpgradeBuilding(building, city)){
									//console.log(_this.isCheckBoxChecked(num, buildingName, aNum), buildingName, aNum, city.m_SupportDedicatedBaseName );
									
									B_obj = {
											cityid: city.get_Id(),
											basename: city.m_SupportDedicatedBaseName,
											//Ratio: unitHealthperCost,
											unitname: building.get_UnitGameData_Obj().dn,
											level: building.get_CurrentLevel(),
											type: "Building",
											posX: building.get_CoordX(),
											posY: building.get_CoordY(),
											//upgradepossiblity: canUpgrade,
											unitId: building.get_Id()
										}
										//var label = new qx.ui.basic.Label(_this.isCheckBoxChecked(num, buildingName, aNum), buildingName, aNum, B_obj );
										//console.log((_this.isCheckBoxChecked(num, buildingName, aNum), buildingName, aNum, B_obj ));
										//page2.add(label);
									}
									
								}//building loop
							  
								
								var units = city.get_CityUnitsData();
								
								var offenceUnits = units.get_OffenseUnits();
								var gNum = 0;
								var hNum = 0;
								for (var nUnit in offenceUnits.d) 
								{
									
									var unit = offenceUnits.d[nUnit];
									//console.log(_this.canUpgradeUnit(unit, city));
									
									var unitTech = unit.get_UnitGameData_Obj().at;
									var unitName = unit.get_UnitGameData_Obj().dn;
									var offNum = 2;
									//typeArr5[unitName] == unitTech;
									//console.log(ClientLib.Base.EUnitType.Infantry);
									//console.log(ClientLib.Base.EUnitType.Tank);
									//console.log(ClientLib.Base.EUnitType.Air);
									if(unitTech == ClientLib.Base.EUnitType.Infantry){
										//fNum = 0;
										_this.unitBox(unitName, num, offNum, 0, fNum++);
										//console.log(typeArr5);
									}
									if(unitTech == ClientLib.Base.EUnitType.Tank){
										//gNum = 0;
										_this.unitBox(unitName, num, offNum, 1, gNum++);
										
									}
									if(unitTech == ClientLib.Base.EUnitType.Air){
										//hNum = 0;
										_this.unitBox(unitName, num, offNum, 2, hNum++);
										
									}
									if(!_this.canUpgradeUnit(unit, city))continue;
									if(_this.isCheckBoxChecked(num, unitName, offNum)){
									//console.log(_this.isCheckBoxChecked(num, unitName, offNum), unitName, offNum, city.m_SupportDedicatedBaseName );
									
									
									//console.log(ClientLib.Base.EUnitType.Structure);
									
									O_obj = {
											cityid: city.get_Id(),
											basename: city.m_SupportDedicatedBaseName,
											//Ratio: unitHealthperCost,
											unitname: unit.get_UnitGameData_Obj().dn,
											level: unit.get_CurrentLevel(),
											type: "Offence",
											posX: unit.get_CoordX(),
											posY: unit.get_CoordY(),
											//upgradepossiblity: canUpgrade,
											unitId: unit.get_Id()
										}
										//textfield.setValue(_this.isCheckBoxChecked(num, unitName, offNum), unitName, offNum, O_obj );
									}
									
								}//off loop
								var xNum = 0;
								var yNum = 0;
								var zNum = 0;

								var defenceUnits = units.get_DefenseUnits();
								for (var nUnit in defenceUnits.d){
									var unit = defenceUnits.d[nUnit];
									//if(!_this.canUpgradeUnit(unit, city))continue;
									var unitTech = unit.get_UnitGameData_Obj().at;
									var unitName = unit.get_UnitGameData_Obj().dn;
									var defNum = 1;
									if(unitTech == ClientLib.Base.EUnitType.Infantry){
										
										_this.unitBox(unitName, num, defNum, 0, xNum++);
										//console.log(typeArr5);
									}
									if(unitTech == ClientLib.Base.EUnitType.Tank){
										//gNum++;
										_this.unitBox(unitName, num, defNum, 1, yNum++);
										
									}
									if(unitTech == ClientLib.Base.EUnitType.Structure){
										//hNum++;
										_this.unitBox(unitName, num, defNum, 2, zNum++);
										
									}
									if(!_this.canUpgradeUnit(unit, city))continue;
									if(_this.isCheckBoxChecked(num, unitName, defNum)){
									
									
									//if(!_this.canUpgradeUnit(unit, city))continue;
									
									D_obj = {
									cityid: city.get_Id(),
									basename: city.m_SupportDedicatedBaseName,
									//Ratio: unitHealthperCost,
									unitname: unit.get_UnitGameData_Obj().dn,
									level: unit.get_CurrentLevel(),
									type: "Defense",
									posX: unit.get_CoordX(),
									posY: unit.get_CoordY(),
									//upgradepossiblity: canUpgrade,
									unitId: unit.get_Id()
									}
									//textfield.add(_this.isCheckBoxChecked(num, unitName, defNum), unitName, defNum, D_obj);
									}
								}//def loop
								
								/*
								if(B_obj != 0){
									console.log(B_obj);
									//ClientLib.Net.CommunicationManager.GetInstance().SendCommand("UpgradeBuilding", B_obj, null, null, true);
									//continue;
									}
								
								//ClientLib.Net.CommunicationManager.GetInstance().SendCommand("UnitUpgrade", O_obj, null, null, true);
								
								if(D_obj != 0){
									console.log(D_obj);
									//ClientLib.Net.CommunicationManager.GetInstance().SendCommand("UnitUpgrade", D_obj, null, null, true);
									//continue;
									}
								if(O_obj != 0){
									console.log(D_obj);
									//ClientLib.Net.CommunicationManager.GetInstance().SendCommand("UnitUpgrade", O_obj, null, null, true);
									//continue;
									}
							*/
							//container.add(tabView);
							//win.add(container);
							//win.open();
							
							//continue;	
							}//city loop
							
							
							//textfield.add(_this.isCheckBoxChecked(num, buildingName, aNum), buildingName, aNum, B_obj );
						}
					}
				});
			}
		} catch (e) {
			console.log("createFlunikTools: ", e);
		}
		
		function FlunikTools_checkIfLoaded() {
			try {
			if (typeof qx != 'undefined' && qx.core.Init.getApplication() && qx.core.Init.getApplication().getUIItem(ClientLib.Data.Missions.PATH.BAR_NAVIGATION) && qx.core.Init.getApplication().getUIItem(ClientLib.Data.Missions.PATH.BAR_NAVIGATION).isVisible()) {
					createFlunikTools();
					FlunikTools.Main.getInstance().initialize();
					
					
					
				} else {
					setTimeout(FlunikTools_checkIfLoaded, 1000);
				}
			} catch (e) {
				console.log("FlunikTools_checkIfLoaded: ", e);
			}
		}
		if (/commandandconquer\.com/i.test(document.domain)) {
			setTimeout(FlunikTools_checkIfLoaded, 1000);
		}
	}
		
	try
	{
		var FlunikScript = document.createElement("script");
		FlunikScript.innerHTML = "(" + FlunikTools_main.toString() + ")();";
		FlunikScript.type = "text/javascript";
		if (/commandandconquer\.com/i.test(document.domain)) {
			document.getElementsByTagName("head")[0].appendChild(FlunikScript);
		}
	} catch (e) {
		console.log("FlunikTools: init error: ", e);
	}
})();
