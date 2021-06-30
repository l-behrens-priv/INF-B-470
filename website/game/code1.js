gdjs.IntroCode = {};
gdjs.IntroCode.GDBG_95StartObjects1= [];
gdjs.IntroCode.GDBG_95StartObjects2= [];
gdjs.IntroCode.GDIntro_951Objects1= [];
gdjs.IntroCode.GDIntro_951Objects2= [];
gdjs.IntroCode.GDpunkteObjects1= [];
gdjs.IntroCode.GDpunkteObjects2= [];
gdjs.IntroCode.GDpunkte_95hintenObjects1= [];
gdjs.IntroCode.GDpunkte_95hintenObjects2= [];
gdjs.IntroCode.GDBGOutroObjects1= [];
gdjs.IntroCode.GDBGOutroObjects2= [];
gdjs.IntroCode.GDIntro_9512Objects1= [];
gdjs.IntroCode.GDIntro_9512Objects2= [];
gdjs.IntroCode.GDpunkte_952Objects1= [];
gdjs.IntroCode.GDpunkte_952Objects2= [];
gdjs.IntroCode.GDpunkte_95hinten_952Objects1= [];
gdjs.IntroCode.GDpunkte_95hinten_952Objects2= [];
gdjs.IntroCode.GDBG_95Outro_952Objects1= [];
gdjs.IntroCode.GDBG_95Outro_952Objects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BGOutro"), gdjs.IntroCode.GDBGOutroObjects1);
gdjs.copyArray(runtimeScene.getObjects("BG_Outro_2"), gdjs.IntroCode.GDBG_95Outro_952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Intro_1"), gdjs.IntroCode.GDIntro_951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Intro_12"), gdjs.IntroCode.GDIntro_9512Objects1);
gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);
gdjs.copyArray(runtimeScene.getObjects("punkte_2"), gdjs.IntroCode.GDpunkte_952Objects1);
gdjs.copyArray(runtimeScene.getObjects("punkte_hinten"), gdjs.IntroCode.GDpunkte_95hintenObjects1);
gdjs.copyArray(runtimeScene.getObjects("punkte_hinten_2"), gdjs.IntroCode.GDpunkte_95hinten_952Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDpunkteObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkteObjects1[i].resetTimer("");
}
}{for(var i = 0, len = gdjs.IntroCode.GDpunkteObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkteObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntro_951Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntro_951Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.IntroCode.GDpunkte_95hintenObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkte_95hintenObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.IntroCode.GDBGOutroObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBGOutroObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDBG_95Outro_952Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBG_95Outro_952Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDpunkte_95hinten_952Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkte_95hinten_952Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.IntroCode.GDpunkte_952Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkte_952Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntro_9512Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntro_9512Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 2) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDpunkteObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDpunkteObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkteObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 4) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDpunkteObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDpunkteObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkteObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 4.5) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11527356);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Intro_1"), gdjs.IntroCode.GDIntro_951Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDIntro_951Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntro_951Objects1[i].setAnimation(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Chris_Grafiken\\keyboard.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 6.7) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("punkte_hinten"), gdjs.IntroCode.GDpunkte_95hintenObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDpunkte_95hintenObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkte_95hintenObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 8) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BGOutro"), gdjs.IntroCode.GDBGOutroObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDBGOutroObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBGOutroObjects1[i].setOpacity(gdjs.IntroCode.GDBGOutroObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 8));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 9.5) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Intro_1"), gdjs.IntroCode.GDIntro_951Objects1);
gdjs.copyArray(runtimeScene.getObjects("punkte_hinten"), gdjs.IntroCode.GDpunkte_95hintenObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDIntro_951Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntro_951Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.IntroCode.GDpunkte_95hintenObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkte_95hintenObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 10) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("punkte_2"), gdjs.IntroCode.GDpunkte_952Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDpunkte_952Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkte_952Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 11) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("punkte_2"), gdjs.IntroCode.GDpunkte_952Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDpunkte_952Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkte_952Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 11.5) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11532388);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Intro_12"), gdjs.IntroCode.GDIntro_9512Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDIntro_9512Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntro_9512Objects1[i].setAnimation(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Chris_Grafiken\\test_keyboard.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 14.1) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("punkte_hinten_2"), gdjs.IntroCode.GDpunkte_95hinten_952Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDpunkte_95hinten_952Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDpunkte_95hinten_952Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 15.4) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BG_Outro_2"), gdjs.IntroCode.GDBG_95Outro_952Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDBG_95Outro_952Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBG_95Outro_952Objects1[i].setOpacity(gdjs.IntroCode.GDBG_95Outro_952Objects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 8));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("punkte"), gdjs.IntroCode.GDpunkteObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDpunkteObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDpunkteObjects1[i].timerElapsedTime("", 17) ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDpunkteObjects1[k] = gdjs.IntroCode.GDpunkteObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDpunkteObjects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start_Screen", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDBG_95StartObjects1.length = 0;
gdjs.IntroCode.GDBG_95StartObjects2.length = 0;
gdjs.IntroCode.GDIntro_951Objects1.length = 0;
gdjs.IntroCode.GDIntro_951Objects2.length = 0;
gdjs.IntroCode.GDpunkteObjects1.length = 0;
gdjs.IntroCode.GDpunkteObjects2.length = 0;
gdjs.IntroCode.GDpunkte_95hintenObjects1.length = 0;
gdjs.IntroCode.GDpunkte_95hintenObjects2.length = 0;
gdjs.IntroCode.GDBGOutroObjects1.length = 0;
gdjs.IntroCode.GDBGOutroObjects2.length = 0;
gdjs.IntroCode.GDIntro_9512Objects1.length = 0;
gdjs.IntroCode.GDIntro_9512Objects2.length = 0;
gdjs.IntroCode.GDpunkte_952Objects1.length = 0;
gdjs.IntroCode.GDpunkte_952Objects2.length = 0;
gdjs.IntroCode.GDpunkte_95hinten_952Objects1.length = 0;
gdjs.IntroCode.GDpunkte_95hinten_952Objects2.length = 0;
gdjs.IntroCode.GDBG_95Outro_952Objects1.length = 0;
gdjs.IntroCode.GDBG_95Outro_952Objects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
