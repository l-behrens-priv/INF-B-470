gdjs.overworldCode = {};
gdjs.overworldCode.GDbackgroundObjects1= [];
gdjs.overworldCode.GDbackgroundObjects2= [];
gdjs.overworldCode.GDwallObjects1= [];
gdjs.overworldCode.GDwallObjects2= [];
gdjs.overworldCode.GDplayerObjects1= [];
gdjs.overworldCode.GDplayerObjects2= [];
gdjs.overworldCode.GDdoorObjects1= [];
gdjs.overworldCode.GDdoorObjects2= [];
gdjs.overworldCode.GDfloor_95upObjects1= [];
gdjs.overworldCode.GDfloor_95upObjects2= [];
gdjs.overworldCode.GDfloor_95cornerObjects1= [];
gdjs.overworldCode.GDfloor_95cornerObjects2= [];
gdjs.overworldCode.GDfloor_95sideObjects1= [];
gdjs.overworldCode.GDfloor_95sideObjects2= [];
gdjs.overworldCode.GDfloorObjects1= [];
gdjs.overworldCode.GDfloorObjects2= [];
gdjs.overworldCode.GDBlack_95outroObjects1= [];
gdjs.overworldCode.GDBlack_95outroObjects2= [];
gdjs.overworldCode.GDnpcObjects1= [];
gdjs.overworldCode.GDnpcObjects2= [];
gdjs.overworldCode.GDDPadTopObjects1= [];
gdjs.overworldCode.GDDPadTopObjects2= [];
gdjs.overworldCode.GDDPadRightObjects1= [];
gdjs.overworldCode.GDDPadRightObjects2= [];
gdjs.overworldCode.GDDPadBottomObjects1= [];
gdjs.overworldCode.GDDPadBottomObjects2= [];
gdjs.overworldCode.GDDPadLeftObjects1= [];
gdjs.overworldCode.GDDPadLeftObjects2= [];
gdjs.overworldCode.GDSprechblaseObjects1= [];
gdjs.overworldCode.GDSprechblaseObjects2= [];
gdjs.overworldCode.GDTicTacToeQuestObjects1= [];
gdjs.overworldCode.GDTicTacToeQuestObjects2= [];
gdjs.overworldCode.GDGoButtonObjects1= [];
gdjs.overworldCode.GDGoButtonObjects2= [];
gdjs.overworldCode.GDGoButtonTextObjects1= [];
gdjs.overworldCode.GDGoButtonTextObjects2= [];

gdjs.overworldCode.conditionTrue_0 = {val:false};
gdjs.overworldCode.condition0IsTrue_0 = {val:false};
gdjs.overworldCode.condition1IsTrue_0 = {val:false};
gdjs.overworldCode.condition2IsTrue_0 = {val:false};


gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDDPadTopObjects1Objects = Hashtable.newFrom({"DPadTop": gdjs.overworldCode.GDDPadTopObjects1});gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDDPadRightObjects1Objects = Hashtable.newFrom({"DPadRight": gdjs.overworldCode.GDDPadRightObjects1});gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDDPadBottomObjects1Objects = Hashtable.newFrom({"DPadBottom": gdjs.overworldCode.GDDPadBottomObjects1});gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDDPadLeftObjects1Objects = Hashtable.newFrom({"DPadLeft": gdjs.overworldCode.GDDPadLeftObjects1});gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.overworldCode.GDplayerObjects1});gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.overworldCode.GDwallObjects1});gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.overworldCode.GDwallObjects1});gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDnpcObjects1Objects = Hashtable.newFrom({"npc": gdjs.overworldCode.GDnpcObjects1});gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.overworldCode.GDplayerObjects1});gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDGoButtonObjects1ObjectsGDgdjs_46overworldCode_46GDGoButtonTextObjects1Objects = Hashtable.newFrom({"GoButton": gdjs.overworldCode.GDGoButtonObjects1, "GoButtonText": gdjs.overworldCode.GDGoButtonTextObjects1});gdjs.overworldCode.eventsList0 = function(runtimeScene) {

{


gdjs.overworldCode.condition0IsTrue_0.val = false;
{
gdjs.overworldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.overworldCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Scene").setNumber(1);
}}

}


};gdjs.overworldCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.overworldCode.GDGoButtonObjects1 */

gdjs.overworldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.overworldCode.GDGoButtonObjects1.length;i<l;++i) {
    if ( gdjs.overworldCode.GDGoButtonObjects1[i].timerElapsedTime("change Scene", 1) ) {
        gdjs.overworldCode.condition0IsTrue_0.val = true;
        gdjs.overworldCode.GDGoButtonObjects1[k] = gdjs.overworldCode.GDGoButtonObjects1[i];
        ++k;
    }
}
gdjs.overworldCode.GDGoButtonObjects1.length = k;}if (gdjs.overworldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


};gdjs.overworldCode.eventsList2 = function(runtimeScene) {

{


gdjs.overworldCode.condition0IsTrue_0.val = false;
{
gdjs.overworldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.overworldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Black_outro"), gdjs.overworldCode.GDBlack_95outroObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoButton"), gdjs.overworldCode.GDGoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoButtonText"), gdjs.overworldCode.GDGoButtonTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sprechblase"), gdjs.overworldCode.GDSprechblaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("TicTacToeQuest"), gdjs.overworldCode.GDTicTacToeQuestObjects1);
{for(var i = 0, len = gdjs.overworldCode.GDSprechblaseObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDSprechblaseObjects1[i].hide();
}
for(var i = 0, len = gdjs.overworldCode.GDTicTacToeQuestObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDTicTacToeQuestObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.overworldCode.GDTicTacToeQuestObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDTicTacToeQuestObjects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.overworldCode.GDGoButtonObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDGoButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.overworldCode.GDGoButtonTextObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDGoButtonTextObjects1[i].hide();
}
}{runtimeScene.getVariables().get("Scene").setNumber(0);
}{for(var i = 0, len = gdjs.overworldCode.GDGoButtonObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDGoButtonObjects1[i].pauseTimer("change Scene");
}
}{for(var i = 0, len = gdjs.overworldCode.GDBlack_95outroObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDBlack_95outroObjects1[i].setVariableBoolean(gdjs.overworldCode.GDBlack_95outroObjects1[i].getVariables().get("intro"), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Black_outro"), gdjs.overworldCode.GDBlack_95outroObjects1);

gdjs.overworldCode.condition0IsTrue_0.val = false;
gdjs.overworldCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.overworldCode.GDBlack_95outroObjects1.length;i<l;++i) {
    if ( gdjs.overworldCode.GDBlack_95outroObjects1[i].getOpacity() > 0 ) {
        gdjs.overworldCode.condition0IsTrue_0.val = true;
        gdjs.overworldCode.GDBlack_95outroObjects1[k] = gdjs.overworldCode.GDBlack_95outroObjects1[i];
        ++k;
    }
}
gdjs.overworldCode.GDBlack_95outroObjects1.length = k;}if ( gdjs.overworldCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.overworldCode.GDBlack_95outroObjects1.length;i<l;++i) {
    if ( gdjs.overworldCode.GDBlack_95outroObjects1[i].getVariableBoolean(gdjs.overworldCode.GDBlack_95outroObjects1[i].getVariables().get("intro"), true) ) {
        gdjs.overworldCode.condition1IsTrue_0.val = true;
        gdjs.overworldCode.GDBlack_95outroObjects1[k] = gdjs.overworldCode.GDBlack_95outroObjects1[i];
        ++k;
    }
}
gdjs.overworldCode.GDBlack_95outroObjects1.length = k;}}
if (gdjs.overworldCode.condition1IsTrue_0.val) {
/* Reuse gdjs.overworldCode.GDBlack_95outroObjects1 */
{for(var i = 0, len = gdjs.overworldCode.GDBlack_95outroObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDBlack_95outroObjects1[i].setOpacity(gdjs.overworldCode.GDBlack_95outroObjects1[i].getOpacity() - (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Black_outro"), gdjs.overworldCode.GDBlack_95outroObjects1);

gdjs.overworldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.overworldCode.GDBlack_95outroObjects1.length;i<l;++i) {
    if ( gdjs.overworldCode.GDBlack_95outroObjects1[i].getOpacity() == 0 ) {
        gdjs.overworldCode.condition0IsTrue_0.val = true;
        gdjs.overworldCode.GDBlack_95outroObjects1[k] = gdjs.overworldCode.GDBlack_95outroObjects1[i];
        ++k;
    }
}
gdjs.overworldCode.GDBlack_95outroObjects1.length = k;}if (gdjs.overworldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.overworldCode.GDBlack_95outroObjects1 */
{for(var i = 0, len = gdjs.overworldCode.GDBlack_95outroObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDBlack_95outroObjects1[i].setVariableBoolean(gdjs.overworldCode.GDBlack_95outroObjects1[i].getVariables().get("intro"), false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.overworldCode.GDplayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.overworldCode.GDplayerObjects1.length !== 0 ? gdjs.overworldCode.GDplayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadTop"), gdjs.overworldCode.GDDPadTopObjects1);

gdjs.overworldCode.condition0IsTrue_0.val = false;
{
gdjs.overworldCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDDPadTopObjects1Objects, runtimeScene, true, false);
}if (gdjs.overworldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.overworldCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.overworldCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDplayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadRight"), gdjs.overworldCode.GDDPadRightObjects1);

gdjs.overworldCode.condition0IsTrue_0.val = false;
{
gdjs.overworldCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDDPadRightObjects1Objects, runtimeScene, true, false);
}if (gdjs.overworldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.overworldCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.overworldCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDplayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadBottom"), gdjs.overworldCode.GDDPadBottomObjects1);

gdjs.overworldCode.condition0IsTrue_0.val = false;
{
gdjs.overworldCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDDPadBottomObjects1Objects, runtimeScene, true, false);
}if (gdjs.overworldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.overworldCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.overworldCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDplayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadLeft"), gdjs.overworldCode.GDDPadLeftObjects1);

gdjs.overworldCode.condition0IsTrue_0.val = false;
{
gdjs.overworldCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDDPadLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.overworldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.overworldCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.overworldCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDplayerObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.overworldCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.overworldCode.GDwallObjects1);

gdjs.overworldCode.condition0IsTrue_0.val = false;
{
gdjs.overworldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDplayerObjects1Objects, gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDwallObjects1Objects, false, runtimeScene, false);
}if (gdjs.overworldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.overworldCode.GDplayerObjects1 */
/* Reuse gdjs.overworldCode.GDwallObjects1 */
{for(var i = 0, len = gdjs.overworldCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDwallObjects1Objects, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("npc"), gdjs.overworldCode.GDnpcObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.overworldCode.GDplayerObjects1);

gdjs.overworldCode.condition0IsTrue_0.val = false;
{
gdjs.overworldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDnpcObjects1Objects, gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDplayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.overworldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sprechblase"), gdjs.overworldCode.GDSprechblaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("TicTacToeQuest"), gdjs.overworldCode.GDTicTacToeQuestObjects1);
{for(var i = 0, len = gdjs.overworldCode.GDSprechblaseObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDSprechblaseObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.overworldCode.GDTicTacToeQuestObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDTicTacToeQuestObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.overworldCode.GDTicTacToeQuestObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDTicTacToeQuestObjects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TicTacToeQuest"), gdjs.overworldCode.GDTicTacToeQuestObjects1);

gdjs.overworldCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.overworldCode.GDTicTacToeQuestObjects1.length;i<l;++i) {
    if ( gdjs.overworldCode.GDTicTacToeQuestObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.overworldCode.condition0IsTrue_0.val = true;
        gdjs.overworldCode.GDTicTacToeQuestObjects1[k] = gdjs.overworldCode.GDTicTacToeQuestObjects1[i];
        ++k;
    }
}
gdjs.overworldCode.GDTicTacToeQuestObjects1.length = k;}if (gdjs.overworldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GoButton"), gdjs.overworldCode.GDGoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoButtonText"), gdjs.overworldCode.GDGoButtonTextObjects1);
{for(var i = 0, len = gdjs.overworldCode.GDGoButtonObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDGoButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.overworldCode.GDGoButtonTextObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDGoButtonTextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoButton"), gdjs.overworldCode.GDGoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoButtonText"), gdjs.overworldCode.GDGoButtonTextObjects1);

gdjs.overworldCode.condition0IsTrue_0.val = false;
gdjs.overworldCode.condition1IsTrue_0.val = false;
{
gdjs.overworldCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.overworldCode.mapOfGDgdjs_46overworldCode_46GDGoButtonObjects1ObjectsGDgdjs_46overworldCode_46GDGoButtonTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.overworldCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.overworldCode.GDGoButtonObjects1.length;i<l;++i) {
    if ( gdjs.overworldCode.GDGoButtonObjects1[i].isVisible() ) {
        gdjs.overworldCode.condition1IsTrue_0.val = true;
        gdjs.overworldCode.GDGoButtonObjects1[k] = gdjs.overworldCode.GDGoButtonObjects1[i];
        ++k;
    }
}
gdjs.overworldCode.GDGoButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.overworldCode.GDGoButtonTextObjects1.length;i<l;++i) {
    if ( gdjs.overworldCode.GDGoButtonTextObjects1[i].isVisible() ) {
        gdjs.overworldCode.condition1IsTrue_0.val = true;
        gdjs.overworldCode.GDGoButtonTextObjects1[k] = gdjs.overworldCode.GDGoButtonTextObjects1[i];
        ++k;
    }
}
gdjs.overworldCode.GDGoButtonTextObjects1.length = k;}}
if (gdjs.overworldCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.overworldCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.overworldCode.condition0IsTrue_0.val = false;
{
gdjs.overworldCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Scene")) > 0;
}if (gdjs.overworldCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Black_outro"), gdjs.overworldCode.GDBlack_95outroObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoButton"), gdjs.overworldCode.GDGoButtonObjects1);
{for(var i = 0, len = gdjs.overworldCode.GDGoButtonObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDGoButtonObjects1[i].unpauseTimer("change Scene");
}
}{for(var i = 0, len = gdjs.overworldCode.GDBlack_95outroObjects1.length ;i < len;++i) {
    gdjs.overworldCode.GDBlack_95outroObjects1[i].setOpacity(gdjs.overworldCode.GDBlack_95outroObjects1[i].getOpacity() + (5));
}
}
{ //Subevents
gdjs.overworldCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.overworldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.overworldCode.GDbackgroundObjects1.length = 0;
gdjs.overworldCode.GDbackgroundObjects2.length = 0;
gdjs.overworldCode.GDwallObjects1.length = 0;
gdjs.overworldCode.GDwallObjects2.length = 0;
gdjs.overworldCode.GDplayerObjects1.length = 0;
gdjs.overworldCode.GDplayerObjects2.length = 0;
gdjs.overworldCode.GDdoorObjects1.length = 0;
gdjs.overworldCode.GDdoorObjects2.length = 0;
gdjs.overworldCode.GDfloor_95upObjects1.length = 0;
gdjs.overworldCode.GDfloor_95upObjects2.length = 0;
gdjs.overworldCode.GDfloor_95cornerObjects1.length = 0;
gdjs.overworldCode.GDfloor_95cornerObjects2.length = 0;
gdjs.overworldCode.GDfloor_95sideObjects1.length = 0;
gdjs.overworldCode.GDfloor_95sideObjects2.length = 0;
gdjs.overworldCode.GDfloorObjects1.length = 0;
gdjs.overworldCode.GDfloorObjects2.length = 0;
gdjs.overworldCode.GDBlack_95outroObjects1.length = 0;
gdjs.overworldCode.GDBlack_95outroObjects2.length = 0;
gdjs.overworldCode.GDnpcObjects1.length = 0;
gdjs.overworldCode.GDnpcObjects2.length = 0;
gdjs.overworldCode.GDDPadTopObjects1.length = 0;
gdjs.overworldCode.GDDPadTopObjects2.length = 0;
gdjs.overworldCode.GDDPadRightObjects1.length = 0;
gdjs.overworldCode.GDDPadRightObjects2.length = 0;
gdjs.overworldCode.GDDPadBottomObjects1.length = 0;
gdjs.overworldCode.GDDPadBottomObjects2.length = 0;
gdjs.overworldCode.GDDPadLeftObjects1.length = 0;
gdjs.overworldCode.GDDPadLeftObjects2.length = 0;
gdjs.overworldCode.GDSprechblaseObjects1.length = 0;
gdjs.overworldCode.GDSprechblaseObjects2.length = 0;
gdjs.overworldCode.GDTicTacToeQuestObjects1.length = 0;
gdjs.overworldCode.GDTicTacToeQuestObjects2.length = 0;
gdjs.overworldCode.GDGoButtonObjects1.length = 0;
gdjs.overworldCode.GDGoButtonObjects2.length = 0;
gdjs.overworldCode.GDGoButtonTextObjects1.length = 0;
gdjs.overworldCode.GDGoButtonTextObjects2.length = 0;

gdjs.overworldCode.eventsList2(runtimeScene);
return;

}

gdjs['overworldCode'] = gdjs.overworldCode;
