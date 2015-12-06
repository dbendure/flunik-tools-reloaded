// ==UserScript==
// @name        Flunik Tools reloaded
// @namespace   FlunikTools reloaded
// @description Windowed variant, Base Upgrade info and POI info
// @version     4.2.7
// @author      dbendure
// @include     http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// ==/UserScript==

//change meaning the increase, the difference between pre and post upgarde
 //cost, change and time until.
(function() {
    var FlunikTools_main = function() {
        try {
            function CCTAWrapperIsInstalled() {
                return (typeof(CCTAWrapper_IsInstalled) != 'undefined' && CCTAWrapper_IsInstalled);
            }

            function createFlunikTools() {
                console.log('FLUNIKTOLS createFlunikTools');

                qx.Class.define("FlunikTools.Main", {
                    type: "singleton",
                    extend: qx.core.Object,
                    members: {
                        AutoUpdateButton: null,
                        cmdButton: null,
                        autoUpdateHandleAll: null,
                        composite: null,
                        tabView: null,
                        tabViewA: null,
                        tabViewB: null,
                        page1: null,
                        win: null,
                        //checkGB : null,
                        groupBoxA: null,
                        groupBoxB: null,
                        groupBoxC: null,
                        groupBoxD: null,
                        checkBoxA: null,

                        checkBoxB: null,
                        checkBoxC: null,
                        cityPage: null,
                        cmdB: null,
                        textfield: null,
                        tableModel: null,
                        table: null,
                        poiRows: null,
                        createRandomRows: null,
						arrA: [],
						arrB: [],
						arrC: [],
						arrD: [],
						arrE: [],
						arrF: [],
						arrG: [],







                        initialize: function() {


                            console.log('FLUNIKTOLS initialize');



                            win = new qx.ui.window.Window("First Window");
                            win.setWidth(600);
                            win.setHeight(300);
                            win.setShowMinimize(false);
                            win.setLayout(new qx.ui.layout.VBox());
                            //////////////////////////////////////////////////////////
                            composite = new qx.ui.container.Composite();
                            composite.setLayout(new qx.ui.layout.Basic());
                            ////////////////////////////////////////////////////////////////



                            // table model
                            tableModel = new qx.ui.table.model.Simple();
                            //tableModel.setColumns([ "ID", "Type", "Level", "Score" ]);
                            if (this.poiRows() != null) {
                                this.poiRows();
                            }
                            tableModelA = new qx.ui.table.model.Simple();
                            tableModelA.setColumns(["Name", "Type", "Level", "ProductionA", "NewLvlDeltaA", "ProductionB", "NewLvlDeltaB", "ProductonC", "NewLvlDeltaC", "TibCost", "PowCost", "x", "y"]);
                            // make second column editable
                            //tableModel.setColumnEditable(1, true);
							tableModelB = new qx.ui.table.model.Simple();
                            tableModelB.setColumns(["nextScore()","Score", "poiScore", "Level", "x", "y"]);
							
							tableModelC = new qx.ui.table.model.Simple();
                            tableModelC.setColumns(["nextScore()","Score", "poiScore", "Level", "x", "y"]);
							
							tableModelD = new qx.ui.table.model.Simple();
                            tableModelD.setColumns(["nextScore()","Score", "poiScore", "Level", "x", "y"]);
							
							tableModelE = new qx.ui.table.model.Simple();
                            tableModelE.setColumns(["nextScore()","Score", "poiScore", "Level", "x", "y"]);
							
							tableModelF = new qx.ui.table.model.Simple();
                            tableModelF.setColumns(["nextScore()","Score", "poiScore", "Level", "x", "y"]);
							
							tableModelG = new qx.ui.table.model.Simple();
                            tableModelG.setColumns(["nextScore()","Score", "poiScore", "Level", "x", "y"]);
							
							tableModelH = new qx.ui.table.model.Simple();
                            tableModelH.setColumns(["nextScore()","Score", "poiScore", "Level", "x", "y"]);

                            // table
                            var table = new qx.ui.table.Table(tableModel).set({
                                decorator: null,
                                Padding: 1,

                            });
                            var tableA = new qx.ui.table.Table(tableModelA).set({
                                decorator: null,
                                Padding: 1,
                                height: 200,
                                width: 600

                            });
							
							var tableB = new qx.ui.table.Table(tableModelB).set({
                                decorator: null,
                                Padding: 1,
                                height: 200,
                                width: 300

                            });
							
							var tableC = new qx.ui.table.Table(tableModelC).set({
                                decorator: null,
                                Padding: 1,
                                height: 200,
                                width: 300

                            });
							
							var tableD = new qx.ui.table.Table(tableModelD).set({
                                decorator: null,
                                Padding: 1,
                                height: 200,
                                width: 300

                            });
							var tableE = new qx.ui.table.Table(tableModelE).set({
                                decorator: null,
                                Padding: 1,
                                height: 200,
                                width: 300

                            });
							
							var tableF = new qx.ui.table.Table(tableModelF).set({
                                decorator: null,
                                Padding: 1,
                                height: 200,
                                width: 300

                            });
							
							var tableG = new qx.ui.table.Table(tableModelG).set({
                                decorator: null,
                                Padding: 1,
                                height: 200,
                                width: 300

                            });
							
							var tableH = new qx.ui.table.Table(tableModelH).set({
                                decorator: null,
                                Padding: 1,
                                height: 200,
                                width: 300

                            });
                            ////////////////////////////////////////////////////////////////
                            page2 = new qx.ui.tabview.Page("Base Upgrade");
                            page2.setLayout(new qx.ui.layout.VBox());
                            ////////////////////////////////////////////////////////////////
                            page3 = new qx.ui.tabview.Page("Poi Info");
                            page3.setLayout(new qx.ui.layout.VBox());
                            page3.add(table);
                            ////////////////////////////////////////////////////////////////
                            tabView = new qx.ui.tabview.TabView();
                            tabView.setBarPosition('left');
                            //page2.add(tabView);
                            //////////////////////////////////////////////////////////////////
                            tabViewB = new qx.ui.tabview.TabView();
                            tabViewB.setBarPosition('left');
                            tibPage = new qx.ui.tabview.Page("Tib", "https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/98abd73f92a4fb8f5f3a28a1b2a82344.png");
                            tibPage.setLayout(new qx.ui.layout.Canvas());
                            cryPage = new qx.ui.tabview.Page("Cry", "https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/61f096dde442bd3be1843a0929900194.png");
                            cryPage.setLayout(new qx.ui.layout.Canvas());
                            powPage = new qx.ui.tabview.Page("Pow", "https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/fa6798783e2c662ce81e861990aef03a.png");
                            powPage.setLayout(new qx.ui.layout.Canvas());
                            defPage = new qx.ui.tabview.Page("Def", "https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/58f5d05df06e0f7a168de22ecd3baaf8.png");
                            defPage.setLayout(new qx.ui.layout.Canvas());
                            infPage = new qx.ui.tabview.Page("Inf", "https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/2a86e68b80393142036e6b9121852555.png");
                            infPage.setLayout(new qx.ui.layout.Canvas());
                            vehPage = new qx.ui.tabview.Page("Veh", "https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/fdb2ebef642e14b91439d4b152c6c401.png");
                            vehPage.setLayout(new qx.ui.layout.Canvas());
                            airPage = new qx.ui.tabview.Page("Air", "https://eaassets-a.akamaihd.net/cncalliancesgame/cdn/data/b8735956fb36d35b16faf087bbcbd293.png");
                            airPage.setLayout(new qx.ui.layout.Canvas());
                            tabViewB.add(tibPage);
                            tabViewB.add(cryPage);
                            tabViewB.add(powPage);
                            tabViewB.add(defPage);
                            tabViewB.add(infPage);
                            tabViewB.add(vehPage);
                            tabViewB.add(airPage);
                            page3.add(tabViewB);

                            //////////////////////////////////////////////////////////////////
                            tabViewA = new qx.ui.tabview.TabView();
                            tabViewA.setBarPosition('top');
                            tabViewA.add(page2);
                            tabViewA.add(page3);
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
                            groupBoxF = new qx.ui.groupbox.GroupBox().set({
                                height: 300,
                                width: 600
                            });
                            groupBoxF.setLayout(new qx.ui.layout.VBox());
                            //////////////////////////////////////////////////////////////////
                            
							
                            /*checkBoxCy = new qx.ui.form.CheckBox("Construction_Yard");
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
							checkBoxA = new qx.ui.form.CheckBox("clearAddTable");
							tibPage.add(checkBoxA, {top:0, left:"60%"});
							textfieldTibx = new qx.ui.form.TextField("Change me...");
							textfieldTiby = new qx.ui.form.TextField("Change me...");
							tibPage.add(new qx.ui.basic.Label("Xcoord"), {top:0, left:"10%"});
							tibPage.add(textfieldTibx, {top:15, left:"10%"});
							tibPage.add(new qx.ui.basic.Label("Ycoord"), {top:0, left:"30%"});
							tibPage.add(textfieldTiby, {top:15, left:"30%"});
							tibPage.add(tableB, {top:50, left: 20});
							
							checkBoxB = new qx.ui.form.CheckBox("clearAddTable");
							cryPage.add(checkBoxB, {top:0, left:"60%"});
							textfieldCryx = new qx.ui.form.TextField("Change me...");
							textfieldCryy = new qx.ui.form.TextField("Change me...");
							cryPage.add(new qx.ui.basic.Label("Xcoord"), {top:0, left:"10%"});
							cryPage.add(textfieldCryx, {top:15, left:"10%"});
							cryPage.add(new qx.ui.basic.Label("Ycoord"), {top:0, left:"30%"});
							cryPage.add(textfieldCryy, {top:15, left:"30%"});
							cryPage.add(tableC, {top:50, left: 20});
					
							checkBoxC = new qx.ui.form.CheckBox("clearAddTable");
							powPage.add(checkBoxC, {top:0, left:"60%"});
							textfieldPowx = new qx.ui.form.TextField("Change me...");
							textfieldPowy = new qx.ui.form.TextField("Change me...");
							powPage.add(new qx.ui.basic.Label("Xcoord"), {top:0, left:"10%"});
							powPage.add(textfieldPowx, {top:15, left:"10%"});
							powPage.add(new qx.ui.basic.Label("Ycoord"), {top:0, left:"30%"});
							powPage.add(textfieldPowy, {top:15, left:"30%"});
							powPage.add(tableD, {top:50, left: 20});
							
							checkBoxD = new qx.ui.form.CheckBox("clearAddTable");
							defPage.add(checkBoxD, {top:0, left:"60%"});
							textfieldDefx = new qx.ui.form.TextField("Change me...");
							textfieldDefy = new qx.ui.form.TextField("Change me...");
							defPage.add(new qx.ui.basic.Label("Xcoord"), {top:0, left:"10%"});
							defPage.add(textfieldDefx, {top:15, left:"10%"});
							defPage.add(new qx.ui.basic.Label("Ycoord"), {top:0, left:"30%"});
							defPage.add(textfieldDefy, {top:15, left:"30%"});
							defPage.add(tableE, {top:50, left: 20});
							
							checkBoxE = new qx.ui.form.CheckBox("clearAddTable");
							infPage.add(checkBoxE, {top:0, left:"60%"});
							textfieldInfx = new qx.ui.form.TextField("Change me...");
							textfieldInfy = new qx.ui.form.TextField("Change me...");
							infPage.add(new qx.ui.basic.Label("Xcoord"), {top:0, left:"10%"});
							infPage.add(textfieldInfx, {top:15, left:"10%"});
							infPage.add(new qx.ui.basic.Label("Ycoord"), {top:0, left:"30%"});
							infPage.add(textfieldInfy, {top:15, left:"30%"});
							infPage.add(tableF, {top:50, left: 20});
							
							checkBoxF = new qx.ui.form.CheckBox("clearAddTable");
							vehPage.add(checkBoxF, {top:0, left:"60%"});
							textfieldVehx = new qx.ui.form.TextField("Change me...");
							textfieldVehy = new qx.ui.form.TextField("Change me...");
							vehPage.add(new qx.ui.basic.Label("Xcoord"), {top:0, left:"10%"});
							vehPage.add(textfieldVehx, {top:15, left:"10%"});
							vehPage.add(new qx.ui.basic.Label("Ycoord"), {top:0, left:"30%"});
							vehPage.add(textfieldVehy, {top:15, left:"30%"});
							vehPage.add(tableG, {top:50, left: 20});
									
							checkBoxG = new qx.ui.form.CheckBox("clearAddTable");
							airPage.add(checkBoxG, {top:0, left:"60%"});
							textfieldAirx = new qx.ui.form.TextField("Change me...");
							textfieldAiry = new qx.ui.form.TextField("Change me...");
							airPage.add(new qx.ui.basic.Label("Xcoord"), {top:0, left:"10%"});
							airPage.add(textfieldAirx, {top:15, left:"10%"});
							airPage.add(new qx.ui.basic.Label("Ycoord"), {top:0, left:"30%"});
							airPage.add(textfieldAiry, {top:15, left:"30%"});
							airPage.add(tableH, {top:50, left: 20});
							///////////////////////////////////////////////////////////////////
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
                            groupBoxF.add(tableA);

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

                            cmdButton = new qx.ui.form.RepeatButton("command", null).set({
                                    toolTipText: "Autoupdate",
                                    width: 100,
                                    height: 40,
                                    maxWidth: 100,
                                    maxHeight: 40,
                                    appearance: ("button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
                                    center: true,
                                    firstInterval: 10000,
                                    interval: 10000,
                                    minTimer: 0,
                                    timerDecrease: 1000

                                }),

                                tibButton = new qx.ui.form.Button("Update", null).set({
                                    toolTipText: "press to refresh table",
                                    width: 100,
                                    height: 40,
                                    maxWidth: 100,
                                    maxHeight: 40,
                                    appearance: ("button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
                                    center: true
                                });

                            cryButton = new qx.ui.form.Button("Update", null).set({
                                toolTipText: "press to refresh table",
                                width: 100,
                                height: 40,
                                maxWidth: 100,
                                maxHeight: 40,
                                appearance: ("button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
                                center: true
                            });

                            powButton = new qx.ui.form.Button("Update", null).set({
                                toolTipText: "press to refresh table",
                                width: 100,
                                height: 40,
                                maxWidth: 100,
                                maxHeight: 40,
                                appearance: ("button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
                                center: true
                            });

                            defButton = new qx.ui.form.Button("Update", null).set({
                                toolTipText: "press to refresh table",
                                width: 100,
                                height: 40,
                                maxWidth: 100,
                                maxHeight: 40,
                                appearance: ("button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
                                center: true
                            });

                            infButton = new qx.ui.form.Button("Update", null).set({
                                toolTipText: "press to refresh table",
                                width: 100,
                                height: 40,
                                maxWidth: 100,
                                maxHeight: 40,
                                appearance: ("button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
                                center: true
                            });

                            vehButton = new qx.ui.form.Button("Update", null).set({
                                toolTipText: "press to refresh table",
                                width: 100,
                                height: 40,
                                maxWidth: 100,
                                maxHeight: 40,
                                appearance: ("button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
                                center: true
                            });

                            airButton = new qx.ui.form.Button("Update", null).set({
                                toolTipText: "press to refresh table",
                                width: 100,
                                height: 40,
                                maxWidth: 100,
                                maxHeight: 40,
                                appearance: ("button-playarea-mode-frame"), //"button-standard-"+factionText), button-playarea-mode-red-frame
                                center: true
                            });

                            table.addListener("cellTap", function(e) {
                                if (table.getFocusedRow() != null) {
                                    var x = table.getTableModel().getData()[table.getFocusedRow()][5];
                                    var y = table.getTableModel().getData()[table.getFocusedRow()][6];
                                    FlunikTools.Main.getInstance().viewPOI(x, y);
                                }
                                //webfrontend.gui.UtilView.centerCoordinatesOnRegionViewWindow(parseInt('554', 10), parseInt('194', 10));
                            }, this);

                            tibButton.addListener("click", function(e) {
                                if (tabViewB.getSelection()[0].getLabel() == "Tib") {
									if(checkBoxA.getValue()){
										FlunikTools.Main.getInstance().arrA = [];
										tableModelB.removeRows(0, tableModelB.getRowCount(), true);
									} else {
                                    FlunikTools.Main.getInstance().poiRows();
									//if(textfieldTibx.getValue() != "Change me..." && textfieldTiby.getValue() != "Change me..."){
									FlunikTools.Main.getInstance().addNewTableOnCoords(0, FlunikTools.Main.getInstance().arrA, tableModelB, textfieldTibx, textfieldTiby);
									//console.log(tableModelB);
									}
									//tableModelB.setData(FlunikTools.Main.getInstance().arrA);
									//}
									//console.log(checkBoxA.getValue());
									
                                }
								

                            }, this);
                            tibPage.add(tibButton, {bottom:0 ,left: "41.67%"});

                            cryButton.addListener("click", function(e) {
                                if (tabViewB.getSelection()[0].getLabel() == "Cry") {
                                    if(checkBoxB.getValue()){
										FlunikTools.Main.getInstance().arrB = [];
										tableModelC.removeRows(0, tableModelC.getRowCount(), true);
									} else {
                                    FlunikTools.Main.getInstance().poiRows();
									//if(textfieldCryx.getValue() != "Change me..." && textfieldCryy.getValue() != "Change me..."){
									FlunikTools.Main.getInstance().addNewTableOnCoords(1, FlunikTools.Main.getInstance().arrB, tableModelC, textfieldCryx, textfieldCryy);
									}
									//tableModelC.setData(FlunikTools.Main.getInstance().arrB);
									//}
									//console.log(checkBoxA.getValue());
									
                                }

                            }, this);
                            cryPage.add(cryButton, {bottom:0 ,left: "41.67%"});

                            powButton.addListener("click", function(e) {
                                if (tabViewB.getSelection()[0].getLabel() == "Pow") {
                                    if(checkBoxC.getValue()){
										FlunikTools.Main.getInstance().arrC = [];
										tableModelD.removeRows(0, tableModelD.getRowCount(), true);
									} else {
                                    FlunikTools.Main.getInstance().poiRows();
									//if(textfieldPowx.getValue() != "Change me..." && textfieldPowy.getValue() != "Change me..."){
									FlunikTools.Main.getInstance().addNewTableOnCoords(2, FlunikTools.Main.getInstance().arrC, tableModelD, textfieldPowx, textfieldPowy);
									}
									//tableModelD.setData(FlunikTools.Main.getInstance().arrC);
									//}
									//console.log(checkBoxA.getValue());
									
                                }

                            }, this);
                            powPage.add(powButton, {bottom:0 ,left: "41.67%"});

                            defButton.addListener("click", function(e) {
                                if (tabViewB.getSelection()[0].getLabel() == "Def") {
                                    if(checkBoxD.getValue()){
										FlunikTools.Main.getInstance().arrD = [];
										tableModelE.removeRows(0, tableModelE.getRowCount(), true);
									} else {
                                    FlunikTools.Main.getInstance().poiRows();
									//if(textfieldDefx.getValue() != "Change me..." && textfieldDefy.getValue() != "Change me..."){
									FlunikTools.Main.getInstance().addNewTableOnCoords(6, FlunikTools.Main.getInstance().arrD, tableModelE, textfieldDefx, textfieldDefy);
									}
									//tableModelE.setData(FlunikTools.Main.getInstance().arrD);
									//}
									//console.log(checkBoxA.getValue());
									
                                }

                            }, this);
                            defPage.add(defButton, {bottom:0 ,left: "41.67%"});

                            infButton.addListener("click", function(e) {
                                if (tabViewB.getSelection()[0].getLabel() == "Inf") {
                                    if(checkBoxE.getValue()){
										FlunikTools.Main.getInstance().arrE = [];
										tableModelF.removeRows(0, tableModelF.getRowCount(), true);
									} else {
                                    FlunikTools.Main.getInstance().poiRows();
									//if(textfieldInfx.getValue() != "Change me..." && textfieldInfy.getValue() != "Change me..."){
									FlunikTools.Main.getInstance().addNewTableOnCoords(3, FlunikTools.Main.getInstance().arrE, tableModelF, textfieldInfx, textfieldInfy);
									}
									//tableModelF.setData(FlunikTools.Main.getInstance().arrE);
									//}
									//console.log(checkBoxA.getValue());
									
                                }

                            }, this);
                            infPage.add(infButton, {bottom:0 ,left: "41.67%"});

                            vehButton.addListener("click", function(e) {
                                if (tabViewB.getSelection()[0].getLabel() == "Veh") {
                                     if(checkBoxF.getValue()){
										FlunikTools.Main.getInstance().arrF = [];
										tableModelG.removeRows(0, tableModelG.getRowCount(), true);
									} else {
                                    FlunikTools.Main.getInstance().poiRows();
									//if(textfieldVehx.getValue() != "Change me..." && textfieldVehy.getValue() != "Change me..."){
									FlunikTools.Main.getInstance().addNewTableOnCoords(4, FlunikTools.Main.getInstance().arrF, tableModelG, textfieldVehx, textfieldVehy);
									}
									//tableModelG.setData(FlunikTools.Main.getInstance().arrF);
									//}
									//console.log(checkBoxA.getValue());
									
                                }

                            }, this);
                            vehPage.add(vehButton, {bottom:0 ,left: "41.67%"});

                            airButton.addListener("click", function(e) {
                                if (tabViewB.getSelection()[0].getLabel() == "Air") {
                                    if(checkBoxG.getValue()){
										FlunikTools.Main.getInstance().arrG = [];
										tableModelH.removeRows(0, tableModelH.getRowCount(), true);
									} else {
                                    FlunikTools.Main.getInstance().poiRows();
									//if(textfieldAirx.getValue() != "Change me..." && textfieldAiry.getValue() != "Change me..."){
									FlunikTools.Main.getInstance().addNewTableOnCoords(5, FlunikTools.Main.getInstance().arrG, tableModelH, textfieldAirx, textfieldAiry);
									}
									//tableModelH.setData(FlunikTools.Main.getInstance().arrG);
									//}
									//console.log(checkBoxA.getValue());
									
                                }

                            }, this);
                            airPage.add(airButton, {bottom:0 ,left: "41.67%"});


                            cmdButton.addListener("execute", function(e) {
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
                                if (AutoUpdateButton.getLabel() == "B.ON") {
                                    win.open();
                                    if (FlunikTools.Main.getInstance().poiRows() != null) {
                                        FlunikTools.Main.getInstance().poiRows();
                                    }
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

                            /*if(win.isActive()){
                            	FlunikTools.Main.getInstance().startAutoUpdate();
                            } else {
                            	FlunikTools.Main.getInstance().stopAutoUpdate();
                            }*/


                        },
						
						addNewTableOnCoords : function(numA, Arr0, aTable, x, y){
							var arr = [];
							//var arrA = [];
							var num = 0;
							var Level = 0;
							var nextscore = ClientLib.Base.PointOfInterestTypes.GetNextScore;
							var poiRank_Score = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore();
							if(x.getValue != "Change me..." && y.getValue() != "Change me..."){
							var x = x.getValue();
							var y = y.getValue();
							if(ClientLib.Data.MainData.GetInstance().get_World().GetObjectFromPosition(x,y) != undefined){
								var obj = ClientLib.Data.MainData.GetInstance().get_World().GetObjectFromPosition(x,y);
								if(obj.Type == ClientLib.Data.WorldSector.ObjectType.PointOfInterest){
									for(var key in obj){
									arr[num] = obj[key];
									if(num == 2){
									Level = arr[num];	
									}
									num++;
									}
									var poSc = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(Level);
									var poX = x;
									var poY = y;
									
									var nxSc = poiRank_Score[numA].s + ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(Level);
									var nxTi = nextscore(nxSc);
									if(Arr0[0] != undefined){
										nxSc +=  Arr0[0][2];
										nxTi = nextscore(nxSc);
									Arr0.push([nxTi, nxSc, poSc, Level, poX, poY]);
									} else { Arr0.push([nxTi, nxSc, poSc, Level, poX, poY]);}
								}
							aTable.setData(Arr0);
							}
							}
							
						},

                        viewPOI: function(coordx, coordy) {

                            return webfrontend.gui.UtilView.centerCoordinatesOnRegionViewWindow(parseInt(coordx.toString(), 10), parseInt(coordy.toString(), 10));
                        },

                        buildingRows: function(arr, building, type, prodA, prodB, prodC, costA, costB, deltaA, deltaB, deltaC) {
                            var _this = FlunikTools.Main.getInstance();
                            var buildingName = building.get_UnitGameData_Obj().dn;
                            var x = building.get_CoordX();
                            var y = building.get_CoordY();
							
							if(building.get_TechName() == ClientLib.Base.ETechName.PowerPlant){
							tableModelA.setColumns(["Name", "Type", "Level", "PowerProduction", "NewLvlDeltaA", "CrystalProduction", "NewLvlDeltaB", "CreditProducton", "NewLvlDeltaC", "TibCost", "PowCost", "x", "y"]);
							arr.push([buildingName, type, building.get_CurrentLevel(), prodA, deltaA, prodB, deltaB, prodC, deltaC, costA, costB, x, y]);
							}
							
							if(building.get_TechName() == ClientLib.Base.ETechName.Refinery){
							tableModelA.setColumns(["Name", "Type", "Level", "PowerCreditProduction", "NewLvlDeltaA", "TibCreditProduction", "NewLvlDeltaB",  "TibCost", "PowCost", "x", "y", "", ""]);
							arr.push([buildingName, type, building.get_CurrentLevel(), prodA, deltaA, prodB, deltaB, costA, costB, x, y, "",  ""]);
							}
							
							if(building.get_TechName() == ClientLib.Base.ETechName.Harvester){
							tableModelA.setColumns(["Name", "Type", "Level", "TibProduction", "NewLvlDeltaA", "CryProduction", "NewLvlDeltaB", "TibCost", "PowCost", "x", "y", "", ""]);
							arr.push([buildingName, type, building.get_CurrentLevel(), prodA, deltaA, prodB, deltaB, costA, costB, x, y,  "", ""]);
							}
							
							if(building.get_TechName() == ClientLib.Base.ETechName.Silo){
							tableModelA.setColumns(["Name", "Type", "Level", "TibProduction", "NewLvlDeltaA", "CryProduction", "NewLvlDeltaB", "TibCost", "PowCost", "x", "y", "", ""]);
							arr.push([buildingName, type, building.get_CurrentLevel(), prodA, deltaA, prodB, deltaB, costA, costB, x, y,  "", ""]);
							}
							
							if(building.get_TechName() == ClientLib.Base.ETechName.Accumulator){
							tableModelA.setColumns(["Name", "Type", "Level", "PowerProduction", "NewLvlDelta", "TibCost", "PowCost", "x", "y",  "", "",  "", ""]);
							arr.push([buildingName, type, building.get_CurrentLevel(), prodA, deltaA, costA, costB, x, y,  "", "",  "", ""]);
							}
							
							
							
							tableModelA.setData(arr);
                            //rowData = [];

                        },

                        poiRows: function() {
                            //var inputField = document.querySelector('input:focus, textarea:focus');
                            //if (inputField != null) {
                            var num = -1;
							//var alliance = ClientLib.Data.MainData.GetInstance().get_Alliance();
							var nextscore = ClientLib.Base.PointOfInterestTypes.GetNextScore;
							var boostByScore = ClientLib.Base.PointOfInterestTypes.GetBoostsByScore;
                            var tibArr = [];
                            var rowData = [];
							var rowDataA = [];
                            var poiSorceHolder = [];
                            var poiRank_Score = ClientLib.Data.MainData.GetInstance().get_Alliance().get_POIRankScore();
                            tableModel.setColumns(["nextTier(ifLost)","ifLost", "getBonus(ifLost)", "Level", "Score", "XCoord", "YCoord"]);

                            for (var key in ClientLib.Data.MainData.GetInstance().get_Alliance().get_OwnedPOIs()) {

                                var obj = ClientLib.Data.MainData.GetInstance().get_Alliance().get_OwnedPOIs()[key];

                                tibArr[num] = obj;

                                //var objCoords = obj.x, obj.y;//document.write(webfrontend.gui.util.BBCode.createCoordsLinkText(obj.x, obj.y));
                                if (tabViewB.getSelection()[0].getLabel() == "Tib" && obj.t == ClientLib.Base.EPOIType.TiberiumBonus) {
                                    num++;
                                    poiSorceHolder[num] = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l);
                                    if (num >= 0) {
                                        if (num == 0) {
                                            rowData.push([nextscore(poiRank_Score[0].s), poiRank_Score[0].s, boostByScore(poiRank_Score[0].s,ClientLib.Data.Ranking.ERankingType.BonusTiberium), ClientLib.Base.PointOfInterestTypes.GetBoostModifierByRank(poiRank_Score[0].r)+"%", "", "", ""]);
                                            val = poiRank_Score[0].s - poiSorceHolder[num];
                                        } else if (num >= 1) {
                                            val = poiRank_Score[0].s - poiSorceHolder.reduce(function(previousValue, currentValue, index, array) {
                                                return (previousValue + currentValue);
                                            });
                                        }

                                    }
									/*tibPage.add(new qx.ui.basic.Label("Rank : "+poiRank_Score[0].r), {top:50 ,left: "20%"});
									tibPage.add(new qx.ui.basic.Label("Next Score : "+poiRank_Score[0].ns), {top:62 ,left: "20%"});
									tibPage.add(new qx.ui.basic.Label("Our Score : "+poiRank_Score[0].s), {top:74 ,left: "20%"});
									tibPage.add(new qx.ui.basic.Label("Past Score : "+poiRank_Score[0].ps), {top:86 ,left: "20%"});
									tibPage.add(new qx.ui.basic.Label("Next Tier Score : "+nextscore(poiRank_Score[0].s)), {top:98 ,left: "20%"});*/
                                    rowData.push([nextscore(val), val, boostByScore(val, ClientLib.Data.Ranking.ERankingType.BonusTiberium), obj.l, ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l), obj.x, obj.y]);
                                }
                                if (tabViewB.getSelection()[0].getLabel() == "Cry" && obj.t == ClientLib.Base.EPOIType.CrystalBonus) {
                                    num++;
                                    poiSorceHolder[num] = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l);
                                    if (num >= 0) {
                                        if (num == 0) {
                                            rowData.push([nextscore(poiRank_Score[1].s),poiRank_Score[1].s, boostByScore(poiRank_Score[1].s,ClientLib.Data.Ranking.ERankingType.BonusCrystal), ClientLib.Base.PointOfInterestTypes.GetBoostModifierByRank(poiRank_Score[1].r)+"%", "", "", ""]);
                                            val = poiRank_Score[1].s - poiSorceHolder[num];
                                        } else if (num >= 1) {
                                            val = poiRank_Score[1].s - poiSorceHolder.reduce(function(previousValue, currentValue, index, array) {
                                                return (previousValue + currentValue);
                                            });
                                        }

                                    }
                                    rowData.push([nextscore(val), val, boostByScore(val,ClientLib.Data.Ranking.ERankingType.BonusCrystal), obj.l, ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l), obj.x, obj.y]);
                                }
                                if (tabViewB.getSelection()[0].getLabel() == "Pow" && obj.t == ClientLib.Base.EPOIType.PowerBonus) {
                                    num++;
                                    poiSorceHolder[num] = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l);
                                    if (num >= 0) {
                                        if (num == 0) {
                                            rowData.push([nextscore(poiRank_Score[2].s),poiRank_Score[2].s, boostByScore(poiRank_Score[2].s,ClientLib.Data.Ranking.ERankingType.BonusPower), ClientLib.Base.PointOfInterestTypes.GetBoostModifierByRank(poiRank_Score[2].r)+"%", "", "", ""]);
                                            val = poiRank_Score[2].s - poiSorceHolder[num];
                                        } else if (num >= 1) {
                                            val = poiRank_Score[2].s - poiSorceHolder.reduce(function(previousValue, currentValue, index, array) {
                                                return (previousValue + currentValue);
                                            });
                                        }

                                    }
                                    rowData.push([nextscore(val), val,boostByScore(val,ClientLib.Data.Ranking.ERankingType.BonusPower), obj.l, ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l), obj.x, obj.y]);
                                }
                                if (tabViewB.getSelection()[0].getLabel() == "Inf" && obj.t == ClientLib.Base.EPOIType.InfanteryBonus) {
                                    num++;
                                    poiSorceHolder[num] = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l);
                                    if (num >= 0) {
                                        if (num == 0) {
                                            rowData.push([nextscore(poiRank_Score[3].s), poiRank_Score[3].s, boostByScore(poiRank_Score[3].s, ClientLib.Data.Ranking.ERankingType.BonusInfantry), ClientLib.Base.PointOfInterestTypes.GetBoostModifierByRank(poiRank_Score[3].r)+"%", "", "", ""]);
                                            val = poiRank_Score[3].s - poiSorceHolder[num];
                                        } else if (num >= 1) {
                                            val = poiRank_Score[3].s - poiSorceHolder.reduce(function(previousValue, currentValue, index, array) {
                                                return (previousValue + currentValue);
                                            });
                                        }

                                    }
                                    rowData.push([nextscore(val), val, boostByScore(val, ClientLib.Data.Ranking.ERankingType.BonusInfantry), obj.l, ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l), obj.x, obj.y]);
                                }
                                if (tabViewB.getSelection()[0].getLabel() == "Veh" && obj.t == ClientLib.Base.EPOIType.VehicleBonus) {
                                    num++;
                                    poiSorceHolder[num] = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l);
                                    if (num >= 0) {
                                        if (num == 0) {
                                            rowData.push([nextscore(poiRank_Score[4].s), poiRank_Score[4].s, boostByScore(poiRank_Score[4].s, ClientLib.Data.Ranking.ERankingType.BonusVehicles), ClientLib.Base.PointOfInterestTypes.GetBoostModifierByRank(poiRank_Score[4].r)+"%", "", "", ""]);
                                            val = poiRank_Score[4].s - poiSorceHolder[num];
                                        } else if (num >= 1) {
                                            val = poiRank_Score[4].s - poiSorceHolder.reduce(function(previousValue, currentValue, index, array) {
                                                return (previousValue + currentValue);
                                            });
                                        }

                                    }
                                    rowData.push([nextscore(val),val,boostByScore(val, ClientLib.Data.Ranking.ERankingType.BonusVehicles), obj.l, ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l), obj.x, obj.y]);
                                }
                                if (tabViewB.getSelection()[0].getLabel() == "Air" && obj.t == ClientLib.Base.EPOIType.AirBonus) {
                                    num++;
                                    poiSorceHolder[num] = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l);
                                    if (num >= 0) {
                                        if (num == 0) {
                                            rowData.push([nextscore(poiRank_Score[5].s), poiRank_Score[5].s, boostByScore(poiRank_Score[5].s, ClientLib.Data.Ranking.ERankingType.BonusAircraft), ClientLib.Base.PointOfInterestTypes.GetBoostModifierByRank(poiRank_Score[5].r)+"%", "", "", ""]);
                                            val = poiRank_Score[5].s - poiSorceHolder[num];
                                        } else if (num >= 1) {
                                            val = poiRank_Score[5].s - poiSorceHolder.reduce(function(previousValue, currentValue, index, array) {
                                                return (previousValue + currentValue);
                                            });
                                        }

                                    }
                                    rowData.push([nextscore(val), val, boostByScore(val, ClientLib.Data.Ranking.ERankingType.BonusAircraft), obj.l, ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l), obj.x, obj.y]);
                                }
                                if (tabViewB.getSelection()[0].getLabel() == "Def" && obj.t == ClientLib.Base.EPOIType.DefenseBonus) {
                                    num++;
                                    poiSorceHolder[num] = ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l);
                                    if (num >= 0) {
                                        if (num == 0) {
                                            rowData.push([nextscore(poiRank_Score[6].s), poiRank_Score[6].s, boostByScore(poiRank_Score[6].s, ClientLib.Data.Ranking.ERankingType.BonusDefense), ClientLib.Base.PointOfInterestTypes.GetBoostModifierByRank(poiRank_Score[6].r)+"%", "", "", ""]);
                                            val = poiRank_Score[6].s - poiSorceHolder[num];
                                        } else if (num >= 1) {
                                            val = poiRank_Score[6].s - poiSorceHolder.reduce(function(previousValue, currentValue, index, array) {
                                                return (previousValue + currentValue);
                                            });
                                        }

                                    }
                                    rowData.push([nextscore(val), val, boostByScore(val, ClientLib.Data.Ranking.ERankingType.BonusDefense), obj.l, ClientLib.Base.PointOfInterestTypes.GetScoreByLevel(obj.l), obj.x, obj.y]);
                                }
                                //num++;
                            }


                            tableModel.setData(rowData);
                            rowData = [];
                            //tableModel.setData(FlunikTools.Main.getInstance().createRandomRows(tibArr.length));
                            //return tibArr.length
                            //}
                        },

                        cityPage: function(city, num) {
                            var _this = FlunikTools.Main.getInstance();
                            var pageArr = new Array();
                            var groupBoxArrA = new Array();
                            var groupBoxArrB = new Array();
                            var groupBoxArrC = new Array();
                            var groupBoxArr = new Array();
                            //var checkBoxArr = new Array();
                            if (num == 0 && num >= tabView.getChildren().length) {
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
                            }
                            if (num > 0 && num >= tabView.getChildren().length) {

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
                        buildingBox(building, num, tech, arr, typeNum) {
                            var groupBoxArrA = new Array();

                            var checkBox;
                            //console.log(building, tech, num, arr);
                            if (num == 0) {

                                if (tech == ClientLib.Base.ETechName.Research_BaseFound) {
                                    checkBox;
                                } else if (tech == ClientLib.Base.ETechName.Construction_Yard && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 0,
                                                column: 0
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Refinery && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 0,
                                                column: 1
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.PowerPlant && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 0,
                                                column: 2
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Command_Center && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 0,
                                                column: 3
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                    //continue;
                                } else if (tech == ClientLib.Base.ETechName.Defense_HQ && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 1,
                                                column: 0
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Barracks && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 1,
                                                column: 1
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Factory && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 1,
                                                column: 2
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Airport && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 1,
                                                column: 3
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Defense_Facility && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 0
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Harvester && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 1
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Support_Air && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 2
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                    //continue;
                                } else if (tech == ClientLib.Base.ETechName.Support_Ion && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 2
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Support_Art && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 2
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Silo && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 3
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Accumulator && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 3,
                                                column: 0
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }

                                }




                            }
                            if (num > 0) {
                                //console.log(tabView.getSelectables()[num]);
                                if (tech == ClientLib.Base.ETechName.Research_BaseFound) {
                                    checkBox;
                                } else if (tech == ClientLib.Base.ETechName.Construction_Yard && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 0,
                                                column: 0
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                    //tabView.getChildren()[num].getChildren()[0].getChildren()[0].add(new qx.ui.form.CheckBox(building), {row : 0, column : 0});
                                    //continue;
                                } else if (tech == ClientLib.Base.ETechName.Refinery && tech == arr[building]) {
                                    try {

                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 0,
                                                column: 1
                                            });
                                        }



                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }


                                } else if (tech == ClientLib.Base.ETechName.PowerPlant && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 0,
                                                column: 2
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Command_Center && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 0,
                                                column: 3
                                            });
                                        }
                                        //FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Defense_HQ && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 1,
                                                column: 0
                                            });
                                        }
                                        //FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Barracks && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 1,
                                                column: 1
                                            });
                                        }
                                        //FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Factory && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 1,
                                                column: 2
                                            });
                                        }
                                        //FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Airport && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 1,
                                                column: 3
                                            });
                                        }
                                        //FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Defense_Facility && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 0
                                            });
                                        }
                                        //FlunikTools.Main.getInstance().plzCheckBox(num, building, typeNum);
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Harvester && tech == arr[building]) {
                                    try {

                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 1
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }


                                } else if (tech == ClientLib.Base.ETechName.Support_Air && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 2
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Support_Ion && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 2
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                }
                                //continue;
                                else if (tech == ClientLib.Base.ETechName.Support_Art && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 2
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                } else if (tech == ClientLib.Base.ETechName.Silo && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 2,
                                                column: 3
                                            });
                                        }
                                        //groupBoxArrA[0].add(new qx.ui.form.CheckBox(building), {row : 2, column : 3});
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }

                                } else if (tech == ClientLib.Base.ETechName.Accumulator && tech == arr[building]) {
                                    try {
                                        if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, building, typeNum) == false) {
                                            tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(building), {
                                                row: 3,
                                                column: 0
                                            });
                                        }
                                    } catch (e) {
                                        console.log("createFlunikTools: ", e);
                                    }
                                }
                            }

                        },

                        plzCheckBox: function(num, building, typeNum) {
                            var bool = false;
                            for (var key in tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()) {

                                var obj = tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()[key];

                                //if(obj.getLabel() == building || obj.toString() == "undefined"){
                                if (cmdButton.getLabel() == "cmd.On") {
                                    obj.setValue() = true;

                                }
                            }
                            //return bool;
                        },

                        isCheckBoxChecked: function(num, building, typeNum) {
                            var bool = false;
                            for (var key in tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()) {

                                var obj = tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()[key];

                                //if(obj.getLabel() == building || obj.toString() == "undefined"){
                                if (obj.getValue() && obj.getLabel() == building) {
                                    bool = true;

                                }
                            }
                            return bool;
                        },
                        isCheckBoxPlaced: function(num, building, typeNum) {
                            var bool = false;
                            for (var key in tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()) {

                                var obj = tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].getChildren()[key];

                                if (obj.getLabel() == building || obj.toString() == "undefined") {

                                    bool = true;

                                }
                            }
                            return bool;
                        },
                        clearCheckBox: function() {
                            var bool = false;
                            for (var key in tabView.getSelectables()) {
                                var piece = tabView.getSelectables()[key];
                                for (var aKey in piece.getChildren()[0].getChildren()[typeNum].getChildren()) {

                                    var obj = piece.getChildren()[0].getChildren()[aKey];

                                    if (obj.toString() != "undefined") {

                                        bool = obj.removeAll();

                                    }
                                }
                            }
                            return bool;
                        },
                        unitBox: function(unitName, num, typeNum, xNum, yNum) {
                            if (typeNum == 2) {
                                //console.log(unitName, num, typeNum, xNum, yNum);
                                if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, unitName, typeNum) == false) {
                                    tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(unitName), {
                                        row: xNum,
                                        column: yNum
                                    });
                                    //console.log(unitName, num, typeNum, xNum, yNum);
                                }
                            } else if (typeNum == 1) {
                                //console.log(unitName, num, typeNum, xNum, yNum);
                                if (FlunikTools.Main.getInstance().isCheckBoxPlaced(num, unitName, typeNum) == false) {
                                    tabView.getSelectables()[num].getChildren()[0].getChildren()[typeNum].add(new qx.ui.form.CheckBox(unitName), {
                                        row: xNum,
                                        column: yNum
                                    });
                                    //console.log(unitName, num, typeNum, xNum, yNum);
                                }
                            }

                        },

                        canUpgradeUnit: function(unit, city) {
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

                        getMainProductionBuildingMdbId: function(placementType, faction) {
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

                        getMissingTechIndexesFromTechLevelRequirement: function(levelRequirements, breakAtFirst, city) {
                            var reqTechIndexes = [];
                            if (levelRequirements != null && levelRequirements.length > 0) {
                                for (var lvlIndex = 0;
                                    (lvlIndex < levelRequirements.length); lvlIndex++) {
                                    var lvlReq = levelRequirements[lvlIndex];
                                    var requirementsMet = false;
                                    var amountCounter = lvlReq.Amount;
                                    for (var buildingIndex in city.get_Buildings().d) {
                                        if (city.get_Buildings().d[buildingIndex].get_MdbBuildingId() == lvlReq.RequiredTechId && city.get_Buildings().d[buildingIndex].get_CurrentLevel() >= lvlReq.Level) {
                                            amountCounter--;
                                            if (amountCounter <= 0) {
                                                requirementsMet = true;
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

                        canUpgradeBuilding: function(building, city) {
                            var nextLevel = (building.get_CurrentLevel() + 1);
                            var gameDataTech = building.get_TechGameData_Obj();
                            var hasEnoughResources = city.HasEnoughResources(ClientLib.Base.Util.GetTechLevelResourceRequirements_Obj(nextLevel, gameDataTech));
                            return (!building.get_IsDamaged() && !city.get_IsLocked() && hasEnoughResources);
                        },

                        startAutoUpdate: function() {
                            //var _this = FlunikTools.Main.getInstance();
                            //_this.win.open();
                            //_this.autoUpgrade();
                            this.autoUpdateHandleAll = window.setInterval(this.autoUpgrade(), 30000);


                            //return setInterval(upgrade, _this.autoUpdateHandleAll);
                        },
                        stopAutoUpdate: function() {
                            var _this = FlunikTools.Main.getInstance();
                            clearInterval(this.autoUpdateHandleAll);
                            this.autoUpdateHandleAll = null;
                        },

                        cmdUpdate: function() {
                            var _this = FlunikTools.Main.getInstance();
                            //this.autoUpgrade();
                            _this.cmdB = 1;
                        },
                        stopCmdAutoUpdate: function() {
                            var _this = FlunikTools.Main.getInstance();

                            _this.cmdB = null;
                        },

                        autoUpgrade: function() {
                            console.log("Start of Main Function");
                            var _this = FlunikTools.Main.getInstance();
                            var num = -1;
                            var checkBoxes = null;
                            var buildArr = [];
                            //_this.cityPageTab(_this.cityName(), _this.buildingName());
                            //page2.getChildren()[1].getChildren()[num] == 0;
                            for (var nCity in ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d) {
                                num++;

                                var city = ClientLib.Data.MainData.GetInstance().get_Cities().get_AllCities().d[nCity];
                                console.log(city.m_SupportDedicatedBaseName);

                                try {
                                    _this.cityPage(city, num);
                                } catch (e) {
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
                                var gNum = -1;


                                var typeArr5 = [];
                                //typeArr5[num] = new Array();

                                for (var nBuildings in buildings.d) {
                                    var aNum = -1;
                                    var bNum = -1;
                                    var cNum = -1;
                                    var dNum = -1;
                                    var eNum = -1;

                                    var type = "";
                                    var building = buildings.d[nBuildings];

                                    var tech = building.get_TechName();
                                    var buildingName = building.get_UnitGameData_Obj().dn;
                                    nameArr[buildingName] = tech;
                                    //_this.buildingBox(buildingName, num, tech);continue;
                                    //if(num == 0){
                                    aNum = 0;
                                    //console.log(aNum, bNum, cNum, dNum, eNum);
                                    if (tech == ClientLib.Base.ETechName.Construction_Yard) {
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    } //ClientLib.Base.ETechName.Construction_Yard
                                    if (tech == ClientLib.Base.ETechName.Refinery) {
                                        gNum++;
                                        type = "Credits";
										var Delta = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].NewLvlDelta;
                                        var refPro = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].TotalValue;
                                        var refPac = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsPackageSize].TotalValue;
                                        var refPacperH = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsBonusTimeToComplete].TotalValue;
                                        var tibCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[0].Count;
                                        var powCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[1].Count;
                                        
										var LinkTypes0 = 0;
                                        var LinkTypes1 = 0;
										var deltaA = 0;
										var deltaB = 0;

                                        if (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].ConnectedLinkTypes.d[36] != undefined) {
                                            LinkTypes0 = (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.PowerplantCreditBonus].Value);
											deltaA = (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.PowerplantCreditBonus].NewLvlDelta)
                                            //var refTotalPro = refPro + (refPac/(refPacperH/3600)) +  LinkTypes0 ;
                                        } else {
                                            LinkTypes0 = 0;
											deltaA = 0;
                                        }

                                        if (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].ConnectedLinkTypes.d[37] != undefined) {
                                            LinkTypes1 = (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.TiberiumCreditProduction].Value);
                                            deltaB = (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.TiberiumCreditProduction].NewLvlDelta)
											//var refTotalPro = refPro + (refPac/(refPacperH/3600)) +  LinkTypes0 +  LinkTypes1  ;
                                        } else {
                                            LinkTypes1 = 0;
                                        }
                                        if (_this.isCheckBoxChecked(num, buildingName, aNum)) {
                                            _this.buildingRows(buildArr, building, type, LinkTypes0, LinkTypes1, "", tibCost, powCost, deltaA, deltaB);
											//_this.buildingRows(buildArr, building, type, LinkTypes0, LinkTypes1, tibCost, powCost, change, time);
                                        }
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);

                                    }
                                    if (tech == ClientLib.Base.ETechName.PowerPlant) {
                                        gNum++;
                                        type = "Power";
										var Delta = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].NewLvlDelta;
                                        var powPro = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].TotalValue;
                                        var powPac = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerPackageSize].TotalValue;
                                        var powPacperH = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerBonusTimeToComplete].TotalValue;
                                        var tibCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[0].Count;
                                        var powCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[1].Count;
                                        var LinkTypes0 = 0;
                                        var LinkTypes1 = 0;
                                        var LinkTypes2 = 0;
                                        var powTotalProOfLevel12 = 605 + (7260 / 6) + 570 + 456 + 484;
										var deltaA = 0;
										var deltaB = 0;
										var deltaC = 0;
										


                                        if (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.AccumulatorPowerBonus] != undefined) {
                                            LinkTypes0 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.AccumulatorPowerBonus].Value;
                                            deltaA = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.AccumulatorPowerBonus].NewLvlDelta;
											//LinkTypes1 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.CrystalCreditProduction].Value ;
                                        } else {
                                            LinkTypes0 = 0;
                                        }

                                        if (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.CrystalCreditProduction] != undefined) {
                                            LinkTypes1 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.CrystalCreditProduction].Value;
											deltaB = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.CrystalCreditProduction].NewLvlDelta;
										} else {
                                            LinkTypes1 = 0;
                                        }

                                        if (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].ConnectedLinkTypes.d[42] != undefined) {
                                            LinkTypes2 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.RefineryPowerBonus].Value;
											deltaC = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CreditsProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.RefineryPowerBonus].NewLvlDelta;
										} else {
                                            LinkTypes2 = 0;
                                        }

                                        if (_this.isCheckBoxChecked(num, buildingName, aNum)) {
                                            _this.buildingRows(buildArr, building, type, LinkTypes0, LinkTypes1, LinkTypes2, tibCost, powCost, deltaA, deltaB, deltaC);
                                        }
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Command_Center) {
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Defense_HQ) {
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Barracks) {
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Factory) {
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Airport) {
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Defense_Facility) {
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }

                                    if (tech == ClientLib.Base.ETechName.Harvester) {
                                        gNum++;
                                        var LinkTypes0 = 0;
                                        var LinkTypes1 = 0;
										var deltaA = 0;
										var deltaB = 0;
                                        //OwnProdModifiers.d[1].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.SiloTiberiumProduction].Value - 

                                        if ((city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[1, 25, 33])) {
                                            type = "Tiberium";
											var Delta = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].NewLvlDelta;
                                            var hartibPro = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].TotalValue;
                                            //var LinkTypes0 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.SiloTiberiumProduction].Value;
                                            var hartibPac = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumPackageSize].TotalValue;
                                            var hartibPacperH = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumBonusTimeToComplete].TotalValue;
											var tibCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[0].Count;
											var powCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[1].Count;

                                            if (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.SiloTiberiumProduction] != undefined) {
                                                LinkTypes0 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.SiloTiberiumProduction].Value;
												deltaA = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.SiloTiberiumProduction].NewLvlDelta
                                            } else {
                                                LinkTypes0 = 0;
                                            }

                                            if (_this.isCheckBoxChecked(num, buildingName, aNum)) {
                                                _this.buildingRows(buildArr, building, type, LinkTypes0, LinkTypes1,"" , tibCost, powCost, deltaA, deltaB);
                                            }
                                        }

                                        if ((city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[4, 26, 34])) {
                                            type = "Crystal";
											var Delta = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].NewLvlDelta;
                                            var harcryPro = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].TotalValue;
                                            //var LinkTypes1 =  city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.SiloCrystalProduction].Value;
                                            var harcryPac = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalPackageSize].TotalValue;
                                            var harcryPacperH = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalBonusTimeToComplete].TotalValue;
											var tibCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[0].Count;
											var powCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[1].Count;

                                            //var harCryCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[0 || 1].Count;

                                            if (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.SiloCrystalProduction] != undefined) {
                                                LinkTypes1 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.SiloCrystalProduction].Value;
                                                deltaB = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.SiloCrystalProduction].NewLvlDelta;
												//var harCryTotalPro = harcryPro + (harcryPac/(harcryPacperH/3600)) + LinkTypes1;
                                            } else {
                                                var LinkTypes1 = 0;
                                            }
                                            if (_this.isCheckBoxChecked(num, buildingName, aNum)) {
                                                _this.buildingRows(buildArr, building, type, LinkTypes0, LinkTypes1,"" ,tibCost, powCost, deltaA, deltaB);
                                            }
                                        }
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Support_Air) {
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Support_Ion) {
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Support_Art) {
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Silo) {
                                        gNum++;
                                        type = "Tib + Cry";
                                        var LinkTypes1 = 0;
                                        var LinkTypes0 = 0;
										var deltaA = 0;
										var deltaB = 0;
                                        var silTotalPro = 0;
										var DeltaA = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].NewLvlDelta;
										var DeltaB = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].NewLvlDelta;
                                        var silCryPro = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].TotalValue;
                                        //var LinkTypes1 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.HarvesterCrystalProduction].Value;
                                        var silTibPro = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].TotalValue;
                                        //var LinkTypes0 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.HarvesterTiberiumProduction].Value;
                                        var silCrySto = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalStorage].TotalValue;
                                        var silTibSto = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumStorage].TotalValue;
                                        //var silCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[0 || 1].Count;
										var tibCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[0].Count;
										var powCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[1].Count;

                                        if (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.HarvesterCrystalProduction] == undefined) {

                                            LinkTypes1 = 0;
                                        } else {
                                            LinkTypes1 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.HarvesterCrystalProduction].Value;
                                            deltaA = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.CrystalProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.HarvesterCrystalProduction].NewLvlDelta;
											//silTotalPro = LinkTypes1 + LinkTypes0;
                                        }

                                        if (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.HarvesterTiberiumProduction] == undefined) {

                                            LinkTypes0 = 0;
                                        } else {
                                            LinkTypes0 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.HarvesterTiberiumProduction].Value;
                                            deltaB = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.TiberiumProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.HarvesterTiberiumProduction].NewLvlDelta;
											//silTotalPro = LinkTypes1 + LinkTypes0;
                                        }
                                        //console.log(building);
                                        if (_this.isCheckBoxChecked(num, buildingName, aNum)) {
                                            _this.buildingRows(buildArr, building, type, LinkTypes0, LinkTypes1, "",tibCost, powCost, deltaB, deltaA);
                                        }
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    if (tech == ClientLib.Base.ETechName.Accumulator) {
                                        var LinkTypes0 = 0;
                                        //OwnProdModifiers.d[6].ConnectedLinkTypes.d[41].Value
                                        gNum++;
                                        type = "Power";
										var deltaA = 0;
										var Delta = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].NewLvlDelta;
                                        var accPro = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].TotalValue;
                                        //var LinkTypes0 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.PowerPlantAccumulatorBonus].Value;
                                        var accSto = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerStorage].TotalValue;
										var tibCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[0].Count;
										var powCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[1].Count;
                                        //var accCost = ClientLib.Base.Util.GetUnitLevelResourceRequirements_Obj((building.get_CurrentLevel() + 1), building.get_UnitGameData_Obj())[0 || 1].Count;
                                        //var accTotalPro = accPro ;

                                        if (city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.PowerPlantAccumulatorBonus] != undefined) {
                                            LinkTypes0 = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.PowerPlantAccumulatorBonus].Value;
											deltaA = city.GetBuildingCache(building.get_Id()).DetailViewInfo.OwnProdModifiers.d[ClientLib.Base.EModifierType.PowerProduction].ConnectedLinkTypes.d[ClientLib.Base.ELinkType.PowerPlantAccumulatorBonus].NewLvlDelta;
                                            //var accTotalPro = LinkTypes0;
                                        } else {
                                            LinkTypes0 = 0;
                                        }
                                        if (_this.isCheckBoxChecked(num, buildingName, aNum)) {
                                            _this.buildingRows(buildArr, building, type, LinkTypes0, "", "",tibCost, powCost, deltaA);
                                        }
                                        _this.buildingBox(buildingName, num, tech, nameArr, aNum);
                                    }
                                    //_this.buildingBox(building, num);
                                    //}
                                    //console.log(_this.isCheckBoxChecked(num, buildingName, aNum), buildingName, aNum, city.m_SupportDedicatedBaseName );
                                    //if(!_this.canUpgradeBuilding(building, city))continue;
                                    if (_this.isCheckBoxChecked(num, buildingName, aNum)) {
                                        console.log(_this.isCheckBoxChecked(num, buildingName, aNum), buildingName, aNum, city.m_SupportDedicatedBaseName);
                                        //_this.buildingRows(gNum, building, type, LinkTypes0, LinkTypes1, LinkTypes2);

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

                                } //building loop


                                var units = city.get_CityUnitsData();

                                var offenceUnits = units.get_OffenseUnits();
                                var gNum = 0;
                                var hNum = 0;
                                for (var nUnit in offenceUnits.d) {

                                    var unit = offenceUnits.d[nUnit];
                                    //console.log(_this.canUpgradeUnit(unit, city));

                                    var unitTech = unit.get_UnitGameData_Obj().at;
                                    var unitName = unit.get_UnitGameData_Obj().dn;
                                    var offNum = 2;
                                    //typeArr5[unitName] == unitTech;
                                    //console.log(ClientLib.Base.EUnitType.Infantry);
                                    //console.log(ClientLib.Base.EUnitType.Tank);
                                    //console.log(ClientLib.Base.EUnitType.Air);
                                    if (unitTech == ClientLib.Base.EUnitType.Infantry) {
                                        //fNum = 0;
                                        _this.unitBox(unitName, num, offNum, 0, fNum++);
                                        //console.log(typeArr5);
                                    }
                                    if (unitTech == ClientLib.Base.EUnitType.Tank) {
                                        //gNum = 0;
                                        _this.unitBox(unitName, num, offNum, 1, gNum++);

                                    }
                                    if (unitTech == ClientLib.Base.EUnitType.Air) {
                                        //hNum = 0;
                                        _this.unitBox(unitName, num, offNum, 2, hNum++);

                                    }
                                    if (!_this.canUpgradeUnit(unit, city)) continue;
                                    if (_this.isCheckBoxChecked(num, unitName, offNum)) {
                                        console.log(_this.isCheckBoxChecked(num, unitName, offNum), unitName, offNum, city.m_SupportDedicatedBaseName);


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

                                } //off loop
                                var xNum = 0;
                                var yNum = 0;
                                var zNum = 0;

                                var defenceUnits = units.get_DefenseUnits();
                                for (var nUnit in defenceUnits.d) {
                                    var unit = defenceUnits.d[nUnit];
                                    //if(!_this.canUpgradeUnit(unit, city))continue;
                                    var unitTech = unit.get_UnitGameData_Obj().at;
                                    var unitName = unit.get_UnitGameData_Obj().dn;
                                    var defNum = 1;
                                    if (unitTech == ClientLib.Base.EUnitType.Infantry) {

                                        _this.unitBox(unitName, num, defNum, 0, xNum++);
                                        //console.log(typeArr5);
                                    }
                                    if (unitTech == ClientLib.Base.EUnitType.Tank) {
                                        //gNum++;
                                        _this.unitBox(unitName, num, defNum, 1, yNum++);

                                    }
                                    if (unitTech == ClientLib.Base.EUnitType.Structure) {
                                        //hNum++;
                                        _this.unitBox(unitName, num, defNum, 2, zNum++);

                                    }
                                    if (!_this.canUpgradeUnit(unit, city)) continue;
                                    if (_this.isCheckBoxChecked(num, unitName, defNum)) {

                                        console.log(_this.isCheckBoxChecked(num, unitName, aNum), unitName, aNum, city.m_SupportDedicatedBaseName, num);
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
                                } //def loop

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
                            } //city loop
                            console.log("End of Main Function");



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
                    // var interval = window.setInterval
                    FlunikTools.Main.getInstance().initialize();
                    if (FlunikTools.Main.getInstance().cmdButton.getLabel != null) {
                        console.log(FlunikTools.Main.getInstance().cmdButton.getLabel);
                    }
                    /*if (FlunikTools.Main.getInstance().cmdButton.getLabel == "cmd.OFF") {
                                    //numb = 0;
                                    FlunikTools.Main.getInstance().stopAutoUpdate();
                                } else {
                                    FlunikTools.Main.getInstance()..startAutoUpdate();
                                }*/



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

    try {
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
