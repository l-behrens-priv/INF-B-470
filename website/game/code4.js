gdjs.ai_32programming_32testCode = {};
gdjs.ai_32programming_32testCode.GDbackgroundObjects1= [];
gdjs.ai_32programming_32testCode.GDbackgroundObjects2= [];
gdjs.ai_32programming_32testCode.GDBausteinMenueObjects1= [];
gdjs.ai_32programming_32testCode.GDBausteinMenueObjects2= [];
gdjs.ai_32programming_32testCode.GDBausteinObjects1= [];
gdjs.ai_32programming_32testCode.GDBausteinObjects2= [];
gdjs.ai_32programming_32testCode.GDbausteinTextObjects1= [];
gdjs.ai_32programming_32testCode.GDbausteinTextObjects2= [];

gdjs.ai_32programming_32testCode.conditionTrue_0 = {val:false};
gdjs.ai_32programming_32testCode.condition0IsTrue_0 = {val:false};
gdjs.ai_32programming_32testCode.condition1IsTrue_0 = {val:false};


gdjs.ai_32programming_32testCode.eventsList0 = function(runtimeScene) {

{


gdjs.ai_32programming_32testCode.condition0IsTrue_0.val = false;
{
gdjs.ai_32programming_32testCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ai_32programming_32testCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Baustein"), gdjs.ai_32programming_32testCode.GDBausteinObjects1);
gdjs.copyArray(runtimeScene.getObjects("bausteinText"), gdjs.ai_32programming_32testCode.GDbausteinTextObjects1);
{runtimeScene.getVariables().get("width").setNumber(32);
}{runtimeScene.getVariables().get("height").setNumber(32);
}{for(var i = 0, len = gdjs.ai_32programming_32testCode.GDbausteinTextObjects1.length ;i < len;++i) {
    gdjs.ai_32programming_32testCode.GDbausteinTextObjects1[i].setCenterPositionInScene((( gdjs.ai_32programming_32testCode.GDBausteinObjects1.length === 0 ) ? 0 :gdjs.ai_32programming_32testCode.GDBausteinObjects1[0].getPointX("")) + (( gdjs.ai_32programming_32testCode.GDBausteinObjects1.length === 0 ) ? 0 :gdjs.ai_32programming_32testCode.GDBausteinObjects1[0].getWidth()) / 2,(( gdjs.ai_32programming_32testCode.GDBausteinObjects1.length === 0 ) ? 0 :gdjs.ai_32programming_32testCode.GDBausteinObjects1[0].getPointY("")) + (( gdjs.ai_32programming_32testCode.GDBausteinObjects1.length === 0 ) ? 0 :gdjs.ai_32programming_32testCode.GDBausteinObjects1[0].getHeight()) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Baustein"), gdjs.ai_32programming_32testCode.GDBausteinObjects1);

gdjs.ai_32programming_32testCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ai_32programming_32testCode.GDBausteinObjects1.length;i<l;++i) {
    if ( gdjs.ai_32programming_32testCode.GDBausteinObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs.ai_32programming_32testCode.condition0IsTrue_0.val = true;
        gdjs.ai_32programming_32testCode.GDBausteinObjects1[k] = gdjs.ai_32programming_32testCode.GDBausteinObjects1[i];
        ++k;
    }
}
gdjs.ai_32programming_32testCode.GDBausteinObjects1.length = k;}if (gdjs.ai_32programming_32testCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ai_32programming_32testCode.GDBausteinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("bausteinText"), gdjs.ai_32programming_32testCode.GDbausteinTextObjects1);
{for(var i = 0, len = gdjs.ai_32programming_32testCode.GDBausteinObjects1.length ;i < len;++i) {
    gdjs.ai_32programming_32testCode.GDBausteinObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("width")) * Math.round((gdjs.ai_32programming_32testCode.GDBausteinObjects1[i].getPointX("")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("width"))),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("height")) * Math.round((gdjs.ai_32programming_32testCode.GDBausteinObjects1[i].getPointY("")) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("height"))));
}
}{for(var i = 0, len = gdjs.ai_32programming_32testCode.GDbausteinTextObjects1.length ;i < len;++i) {
    gdjs.ai_32programming_32testCode.GDbausteinTextObjects1[i].setCenterPositionInScene((( gdjs.ai_32programming_32testCode.GDBausteinObjects1.length === 0 ) ? 0 :gdjs.ai_32programming_32testCode.GDBausteinObjects1[0].getPointX("")) + (( gdjs.ai_32programming_32testCode.GDBausteinObjects1.length === 0 ) ? 0 :gdjs.ai_32programming_32testCode.GDBausteinObjects1[0].getWidth()) / 2,(( gdjs.ai_32programming_32testCode.GDBausteinObjects1.length === 0 ) ? 0 :gdjs.ai_32programming_32testCode.GDBausteinObjects1[0].getPointY("")) + (( gdjs.ai_32programming_32testCode.GDBausteinObjects1.length === 0 ) ? 0 :gdjs.ai_32programming_32testCode.GDBausteinObjects1[0].getHeight()) / 2);
}
}}

}


{


{
}

}


};

gdjs.ai_32programming_32testCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ai_32programming_32testCode.GDbackgroundObjects1.length = 0;
gdjs.ai_32programming_32testCode.GDbackgroundObjects2.length = 0;
gdjs.ai_32programming_32testCode.GDBausteinMenueObjects1.length = 0;
gdjs.ai_32programming_32testCode.GDBausteinMenueObjects2.length = 0;
gdjs.ai_32programming_32testCode.GDBausteinObjects1.length = 0;
gdjs.ai_32programming_32testCode.GDBausteinObjects2.length = 0;
gdjs.ai_32programming_32testCode.GDbausteinTextObjects1.length = 0;
gdjs.ai_32programming_32testCode.GDbausteinTextObjects2.length = 0;

gdjs.ai_32programming_32testCode.eventsList0(runtimeScene);
return;

}

gdjs['ai_32programming_32testCode'] = gdjs.ai_32programming_32testCode;
