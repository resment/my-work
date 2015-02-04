for(var i = 0; i < 132; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToPanelStateChangeFunction['u33'] = function() {
var e = windowEvent;

if (((GetGlobalVariableValue('imgitem')) == ('1')) || ((GetGlobalVariableValue('imgitem')) == (''))) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u34', 'pd1u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd1u47','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('imgitem')) == ('2')) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u34', 'pd2u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd2u47','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('imgitem')) == ('3')) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u34', 'pd3u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd3u47','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('imgitem')) == ('4')) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u34', 'pd4u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd4u47','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('imgitem')) == ('5')) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u34', 'pd5u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd5u47','none','',500,'none','',500);

}
else
if ((GetGlobalVariableValue('imgitem')) == ('6')) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u34', 'pd0u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

}

}

widgetIdToShowFunction['u34'] = function() {
var e = windowEvent;

if (true) {
function waituc2ce6f4ec53d4c82aea9e31f116c33a11() {

	SetPanelState('u33', 'pd1u33','none','',500,'none','',500);
}
setTimeout(waituc2ce6f4ec53d4c82aea9e31f116c33a11, 4000);

}

}

widgetIdToPanelStateChangeFunction['u34'] = function() {
var e = windowEvent;

if ((GetPanelState('u33')) == ('pd0u33')) {
function waitud767c50e9dcb41db9de1fdea253bb1091() {

	SetPanelState('u33', 'pd1u33','none','',500,'none','',500);
}
setTimeout(waitud767c50e9dcb41db9de1fdea253bb1091, 4000);

}

if ((GetPanelState('u33')) == ('pd1u33')) {
function waitu0b6a9f4db0c24a6893e53af6ed00034b1() {

	SetPanelState('u33', 'pd0u33','none','',500,'none','',500);
}
setTimeout(waitu0b6a9f4db0c24a6893e53af6ed00034b1, 4000);

}

}
gv_vAlignTable['u57'] = 'center';document.getElementById('u86_img').tabIndex = 0;

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u34', 'pd4u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd4u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u51'] = 'center';document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u34', 'pd1u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd1u47','none','',500,'none','',500);

}
});

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('筷搜建议.html');

}
});
gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u59'] = 'center';document.getElementById('u66_img').tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u34', 'pd1u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd1u47','none','',500,'none','',500);

}
});
document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u34', 'pd4u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd4u47','none','',500,'none','',500);

}
});
document.getElementById('u112_img').tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u34', 'pd3u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd3u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u38'] = 'center';document.getElementById('u120_img').tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u34', 'pd0u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u123'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u115'] = 'center';document.getElementById('u106_img').tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u34', 'pd0u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u67'] = 'center';
u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页.html');

}
});
gv_vAlignTable['u73'] = 'center';document.getElementById('u60_img').tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u34', 'pd5u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd5u47','none','',500,'none','',500);

}
});
document.getElementById('u94_img').tabIndex = 0;

u94.style.cursor = 'pointer';
$axure.eventManager.click('u94', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u34', 'pd1u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd1u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u89'] = 'center';document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u34', 'pd1u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd1u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u117'] = 'center';document.getElementById('u100_img').tabIndex = 0;

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u34', 'pd4u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd4u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u81'] = 'center';document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u34', 'pd3u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd3u47','none','',500,'none','',500);

}
});
document.getElementById('u124_img').tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u34', 'pd2u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd2u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u11'] = 'top';
u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('筷搜统计.html');

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u75'] = 'center';document.getElementById('u126_img').tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u34', 'pd3u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd3u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u87'] = 'center';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u34', 'pd0u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u13'] = 'top';document.getElementById('u84_img').tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u34', 'pd3u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd3u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u131'] = 'center';document.getElementById('u58_img').tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u34', 'pd4u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd4u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u20'] = 'top';document.getElementById('u50_img').tabIndex = 0;

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u34', 'pd0u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u101'] = 'center';document.getElementById('u98_img').tabIndex = 0;

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u34', 'pd3u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd3u47','none','',500,'none','',500);

}
});
document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u34', 'pd2u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd2u47','none','',500,'none','',500);

}
});
document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u34', 'pd5u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd5u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u129'] = 'center';document.getElementById('u114_img').tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u34', 'pd4u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd4u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u103'] = 'center';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u34', 'pd2u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd2u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u127'] = 'center';document.getElementById('u110_img').tabIndex = 0;

u110.style.cursor = 'pointer';
$axure.eventManager.click('u110', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u34', 'pd2u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd2u47','none','',500,'none','',500);

}
});
document.getElementById('u116_img').tabIndex = 0;

u116.style.cursor = 'pointer';
$axure.eventManager.click('u116', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u34', 'pd5u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd5u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u69'] = 'center';document.getElementById('u82_img').tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u34', 'pd2u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd2u47','none','',500,'none','',500);

}
});
document.getElementById('u72_img').tabIndex = 0;

u72.style.cursor = 'pointer';
$axure.eventManager.click('u72', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '5');

	SetPanelState('u34', 'pd4u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd4u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u42'] = 'center';document.getElementById('u88_img').tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u34', 'pd5u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd5u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u63'] = 'center';document.getElementById('u64_img').tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u34', 'pd0u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

}
});
document.getElementById('u78_img').tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '1');

	SetPanelState('u34', 'pd0u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd0u47','none','',500,'none','',500);

}
});
document.getElementById('u80_img').tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u34', 'pd1u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd1u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u40'] = 'center';document.getElementById('u70_img').tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '4');

	SetPanelState('u34', 'pd3u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd3u47','none','',500,'none','',500);

}
});

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('实时筷搜.html');

}
});
gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u44'] = 'center';document.getElementById('u102_img').tabIndex = 0;

u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u34', 'pd5u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd5u47','none','',500,'none','',500);

}
});
document.getElementById('u74_img').tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '6');

	SetPanelState('u34', 'pd5u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd5u47','none','',500,'none','',500);

}
});
document.getElementById('u68_img').tabIndex = 0;

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '3');

	SetPanelState('u34', 'pd2u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd2u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u119'] = 'center';document.getElementById('u108_img').tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

SetGlobalVariableValue('imgitem', '2');

	SetPanelState('u34', 'pd1u34','swing','left',500,'swing','left',500);

	SetPanelState('u47', 'pd1u47','none','',500,'none','',500);

}
});
gv_vAlignTable['u91'] = 'center';