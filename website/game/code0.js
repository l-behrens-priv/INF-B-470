gdjs.Start_95ScreenCode = {};
gdjs.Start_95ScreenCode.GDBG_95StartObjects1= [];
gdjs.Start_95ScreenCode.GDBG_95StartObjects2= [];
gdjs.Start_95ScreenCode.GDBG_95StartObjects3= [];
gdjs.Start_95ScreenCode.GDBG_95StartObjects4= [];
gdjs.Start_95ScreenCode.GDPlanetObjects1= [];
gdjs.Start_95ScreenCode.GDPlanetObjects2= [];
gdjs.Start_95ScreenCode.GDPlanetObjects3= [];
gdjs.Start_95ScreenCode.GDPlanetObjects4= [];
gdjs.Start_95ScreenCode.GDlogoObjects1= [];
gdjs.Start_95ScreenCode.GDlogoObjects2= [];
gdjs.Start_95ScreenCode.GDlogoObjects3= [];
gdjs.Start_95ScreenCode.GDlogoObjects4= [];
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1= [];
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2= [];
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects3= [];
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects4= [];
gdjs.Start_95ScreenCode.GDSterne_952Objects1= [];
gdjs.Start_95ScreenCode.GDSterne_952Objects2= [];
gdjs.Start_95ScreenCode.GDSterne_952Objects3= [];
gdjs.Start_95ScreenCode.GDSterne_952Objects4= [];
gdjs.Start_95ScreenCode.GDSterne_951Objects1= [];
gdjs.Start_95ScreenCode.GDSterne_951Objects2= [];
gdjs.Start_95ScreenCode.GDSterne_951Objects3= [];
gdjs.Start_95ScreenCode.GDSterne_951Objects4= [];
gdjs.Start_95ScreenCode.GDNewObjectObjects1= [];
gdjs.Start_95ScreenCode.GDNewObjectObjects2= [];
gdjs.Start_95ScreenCode.GDNewObjectObjects3= [];
gdjs.Start_95ScreenCode.GDNewObjectObjects4= [];
gdjs.Start_95ScreenCode.GDBlack_95outroObjects1= [];
gdjs.Start_95ScreenCode.GDBlack_95outroObjects2= [];
gdjs.Start_95ScreenCode.GDBlack_95outroObjects3= [];
gdjs.Start_95ScreenCode.GDBlack_95outroObjects4= [];
gdjs.Start_95ScreenCode.GDblack_95introObjects1= [];
gdjs.Start_95ScreenCode.GDblack_95introObjects2= [];
gdjs.Start_95ScreenCode.GDblack_95introObjects3= [];
gdjs.Start_95ScreenCode.GDblack_95introObjects4= [];

gdjs.Start_95ScreenCode.conditionTrue_0 = {val:false};
gdjs.Start_95ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Start_95ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Start_95ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Start_95ScreenCode.conditionTrue_1 = {val:false};
gdjs.Start_95ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Start_95ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Start_95ScreenCode.condition2IsTrue_1 = {val:false};


gdjs.Start_95ScreenCode.mapOfGDgdjs_46Start_9595ScreenCode_46GDStart_9595ButtonObjects2Objects = Hashtable.newFrom({"Start_Button": gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2});gdjs.Start_95ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2, gdjs.Start_95ScreenCode.GDStart_95ButtonObjects3);

{for(var i = 0, len = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects3.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDStart_95ButtonObjects3[i].setAnimation(2);
}
}}

}


{


gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2 */
{for(var i = 0, len = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2[i].resetTimer("clicked");
}
}{runtimeScene.getVariables().get("Start").setNumber(1);
}}

}


};gdjs.Start_95ScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2);

gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_95ScreenCode.mapOfGDgdjs_46Start_9595ScreenCode_46GDStart_9595ButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2 */
{for(var i = 0, len = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Start_95ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Start_95ScreenCode.mapOfGDgdjs_46Start_9595ScreenCode_46GDStart_9595ButtonObjects2Objects = Hashtable.newFrom({"Start_Button": gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2});gdjs.Start_95ScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.Start_95ScreenCode.conditionTrue_1 = gdjs.Start_95ScreenCode.condition0IsTrue_0;
gdjs.Start_95ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11419004);
}
}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Chris_Grafiken\\button.wav", false, 50, 1);
}}

}


{

gdjs.copyArray(gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1, gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2);


gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2.length;i<l;++i) {
    if ( gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2[i].timerElapsedTime("clicked", 2) ) {
        gdjs.Start_95ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2[k] = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2[i];
        ++k;
    }
}
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2.length = k;}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Black_outro"), gdjs.Start_95ScreenCode.GDBlack_95outroObjects2);
{for(var i = 0, len = gdjs.Start_95ScreenCode.GDBlack_95outroObjects2.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDBlack_95outroObjects2[i].setOpacity(gdjs.Start_95ScreenCode.GDBlack_95outroObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 5));
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 2));
}}

}


{

/* Reuse gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1 */

gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1[i].timerElapsedTime("clicked", 5) ) {
        gdjs.Start_95ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1[k] = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1.length = k;}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "overworld", false);
}}

}


};gdjs.Start_95ScreenCode.eventsList3 = function(runtimeScene) {

{


gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Start")) == 0;
}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Start_95ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2);

gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_95ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Start_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_95ScreenCode.mapOfGDgdjs_46Start_9595ScreenCode_46GDStart_9595ButtonObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Start_95ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_95ScreenCode.conditionTrue_1 = gdjs.Start_95ScreenCode.condition1IsTrue_0;
gdjs.Start_95ScreenCode.condition0IsTrue_1.val = false;
{
gdjs.Start_95ScreenCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Start")) == 0;
}gdjs.Start_95ScreenCode.conditionTrue_1.val = true && gdjs.Start_95ScreenCode.condition0IsTrue_1.val;
}
}}
if (gdjs.Start_95ScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2 */
{for(var i = 0, len = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Start")) == 1;
}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1);
{for(var i = 0, len = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1[i].setAnimation(3);
}
}
{ //Subevents
gdjs.Start_95ScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Start_95ScreenCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_95ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Start_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Start_95ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_95ScreenCode.conditionTrue_1 = gdjs.Start_95ScreenCode.condition1IsTrue_0;
gdjs.Start_95ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11152460);
}
}}
if (gdjs.Start_95ScreenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Black_outro"), gdjs.Start_95ScreenCode.GDBlack_95outroObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("black_intro"), gdjs.Start_95ScreenCode.GDblack_95introObjects1);
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.Start_95ScreenCode.GDlogoObjects1);
{runtimeScene.getVariables().get("Start").setNumber(0);
}{runtimeScene.getVariables().get("game").setNumber(0);
}{for(var i = 0, len = gdjs.Start_95ScreenCode.GDBlack_95outroObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDBlack_95outroObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Start_95ScreenCode.GDblack_95introObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDblack_95introObjects1[i].resetTimer("");
}
}{for(var i = 0, len = gdjs.Start_95ScreenCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDlogoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Start_95ScreenCode.GDblack_95introObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDblack_95introObjects1[i].setOpacity(255);
}
}{runtimeScene.getVariables().get("music_fadeout").setNumber(0);
}{runtimeScene.getVariables().get("button_ready").setNumber(0);
}{runtimeScene.getVariables().get("game").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("black_intro"), gdjs.Start_95ScreenCode.GDblack_95introObjects1);

gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_95ScreenCode.GDblack_95introObjects1.length;i<l;++i) {
    if ( gdjs.Start_95ScreenCode.GDblack_95introObjects1[i].timerElapsedTime("", 1.5) ) {
        gdjs.Start_95ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_95ScreenCode.GDblack_95introObjects1[k] = gdjs.Start_95ScreenCode.GDblack_95introObjects1[i];
        ++k;
    }
}
gdjs.Start_95ScreenCode.GDblack_95introObjects1.length = k;}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_95ScreenCode.GDblack_95introObjects1 */
{for(var i = 0, len = gdjs.Start_95ScreenCode.GDblack_95introObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDblack_95introObjects1[i].setOpacity(gdjs.Start_95ScreenCode.GDblack_95introObjects1[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 5));
}
}{runtimeScene.getVariables().get("music_fadeout").setNumber(1);
}}

}


{


gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
gdjs.Start_95ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Start_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("music_fadeout")) == 1;
}if ( gdjs.Start_95ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_95ScreenCode.conditionTrue_1 = gdjs.Start_95ScreenCode.condition1IsTrue_0;
gdjs.Start_95ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11408868);
}
}}
if (gdjs.Start_95ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Chris_Grafiken\\intro.mp3", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("black_intro"), gdjs.Start_95ScreenCode.GDblack_95introObjects1);

gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_95ScreenCode.GDblack_95introObjects1.length;i<l;++i) {
    if ( gdjs.Start_95ScreenCode.GDblack_95introObjects1[i].timerElapsedTime("", 4) ) {
        gdjs.Start_95ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_95ScreenCode.GDblack_95introObjects1[k] = gdjs.Start_95ScreenCode.GDblack_95introObjects1[i];
        ++k;
    }
}
gdjs.Start_95ScreenCode.GDblack_95introObjects1.length = k;}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.Start_95ScreenCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.Start_95ScreenCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDlogoObjects1[i].setOpacity(gdjs.Start_95ScreenCode.GDlogoObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 3));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("black_intro"), gdjs.Start_95ScreenCode.GDblack_95introObjects1);

gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_95ScreenCode.GDblack_95introObjects1.length;i<l;++i) {
    if ( gdjs.Start_95ScreenCode.GDblack_95introObjects1[i].timerElapsedTime("", 6) ) {
        gdjs.Start_95ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_95ScreenCode.GDblack_95introObjects1[k] = gdjs.Start_95ScreenCode.GDblack_95introObjects1[i];
        ++k;
    }
}
gdjs.Start_95ScreenCode.GDblack_95introObjects1.length = k;}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1);
{for(var i = 0, len = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1[i].setOpacity(gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 3));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1);

gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1[i].getOpacity() == 255 ) {
        gdjs.Start_95ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1[k] = gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1.length = k;}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("button_ready").setNumber(1);
}}

}


{



}


{


gdjs.Start_95ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("button_ready")) == 1;
}if (gdjs.Start_95ScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Start_95ScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Sterne_2"), gdjs.Start_95ScreenCode.GDSterne_952Objects1);
{for(var i = 0, len = gdjs.Start_95ScreenCode.GDSterne_952Objects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDSterne_952Objects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Sterne_1"), gdjs.Start_95ScreenCode.GDSterne_951Objects1);
{for(var i = 0, len = gdjs.Start_95ScreenCode.GDSterne_951Objects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDSterne_951Objects1[i].setAnimation(1);
}
}}

}


};

gdjs.Start_95ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_95ScreenCode.GDBG_95StartObjects1.length = 0;
gdjs.Start_95ScreenCode.GDBG_95StartObjects2.length = 0;
gdjs.Start_95ScreenCode.GDBG_95StartObjects3.length = 0;
gdjs.Start_95ScreenCode.GDBG_95StartObjects4.length = 0;
gdjs.Start_95ScreenCode.GDPlanetObjects1.length = 0;
gdjs.Start_95ScreenCode.GDPlanetObjects2.length = 0;
gdjs.Start_95ScreenCode.GDPlanetObjects3.length = 0;
gdjs.Start_95ScreenCode.GDPlanetObjects4.length = 0;
gdjs.Start_95ScreenCode.GDlogoObjects1.length = 0;
gdjs.Start_95ScreenCode.GDlogoObjects2.length = 0;
gdjs.Start_95ScreenCode.GDlogoObjects3.length = 0;
gdjs.Start_95ScreenCode.GDlogoObjects4.length = 0;
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects1.length = 0;
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects2.length = 0;
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects3.length = 0;
gdjs.Start_95ScreenCode.GDStart_95ButtonObjects4.length = 0;
gdjs.Start_95ScreenCode.GDSterne_952Objects1.length = 0;
gdjs.Start_95ScreenCode.GDSterne_952Objects2.length = 0;
gdjs.Start_95ScreenCode.GDSterne_952Objects3.length = 0;
gdjs.Start_95ScreenCode.GDSterne_952Objects4.length = 0;
gdjs.Start_95ScreenCode.GDSterne_951Objects1.length = 0;
gdjs.Start_95ScreenCode.GDSterne_951Objects2.length = 0;
gdjs.Start_95ScreenCode.GDSterne_951Objects3.length = 0;
gdjs.Start_95ScreenCode.GDSterne_951Objects4.length = 0;
gdjs.Start_95ScreenCode.GDNewObjectObjects1.length = 0;
gdjs.Start_95ScreenCode.GDNewObjectObjects2.length = 0;
gdjs.Start_95ScreenCode.GDNewObjectObjects3.length = 0;
gdjs.Start_95ScreenCode.GDNewObjectObjects4.length = 0;
gdjs.Start_95ScreenCode.GDBlack_95outroObjects1.length = 0;
gdjs.Start_95ScreenCode.GDBlack_95outroObjects2.length = 0;
gdjs.Start_95ScreenCode.GDBlack_95outroObjects3.length = 0;
gdjs.Start_95ScreenCode.GDBlack_95outroObjects4.length = 0;
gdjs.Start_95ScreenCode.GDblack_95introObjects1.length = 0;
gdjs.Start_95ScreenCode.GDblack_95introObjects2.length = 0;
gdjs.Start_95ScreenCode.GDblack_95introObjects3.length = 0;
gdjs.Start_95ScreenCode.GDblack_95introObjects4.length = 0;

gdjs.Start_95ScreenCode.eventsList4(runtimeScene);
return;

}

gdjs['Start_95ScreenCode'] = gdjs.Start_95ScreenCode;
