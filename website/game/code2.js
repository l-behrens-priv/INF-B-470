gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDBackground_95MinigameObjects1= [];
gdjs.New_32sceneCode.GDBackground_95MinigameObjects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDNewObject4Objects1= [];
gdjs.New_32sceneCode.GDNewObject4Objects2= [];
gdjs.New_32sceneCode.GDNewObject5Objects1= [];
gdjs.New_32sceneCode.GDNewObject5Objects2= [];
gdjs.New_32sceneCode.GDNewObject6Objects1= [];
gdjs.New_32sceneCode.GDNewObject6Objects2= [];
gdjs.New_32sceneCode.GDNewObject7Objects1= [];
gdjs.New_32sceneCode.GDNewObject7Objects2= [];
gdjs.New_32sceneCode.GDNewObject8Objects1= [];
gdjs.New_32sceneCode.GDNewObject8Objects2= [];
gdjs.New_32sceneCode.GDNewObject9Objects1= [];
gdjs.New_32sceneCode.GDNewObject9Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.New_32sceneCode.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.New_32sceneCode.GDNewObject7Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject7Objects1[i].setPosition((( gdjs.New_32sceneCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDNewObject5Objects1[0].getPointX("")),(( gdjs.New_32sceneCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDNewObject5Objects1[0].getPointY("")) + 123);
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDBackground_95MinigameObjects1.length = 0;
gdjs.New_32sceneCode.GDBackground_95MinigameObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject7Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject7Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject8Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject8Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject9Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject9Objects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
