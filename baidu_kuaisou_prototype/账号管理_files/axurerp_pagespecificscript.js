for(var i = 0; i < 64; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u30'] = 'center';
u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('个人中心.html');

}
});
gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u13'] = 'center';
$axure.eventManager.keyup('u43', function(e) {

if ((GetWidgetText('u43')) == ('')) {

SetGlobalVariableValue('passtext', '');

SetGlobalVariableValue('passtext', '');

SetGlobalVariableValue('password', '');

SetGlobalVariableValue('OnLoadVariable', '');

}
else
if (true) {

SetGlobalVariableValue('passtext', GetWidgetText('u43'));

}

if (('' + (GetGlobalVariableValue('passtext').length) + '') <= Number('' + (GetGlobalVariableValue('password').length) + '')) {

SetGlobalVariableValue('password', '' + (GetGlobalVariableValue('password').substring(0, GetGlobalVariableValue('passtext').length - 1)) + '');

SetGlobalVariableValue('passtexthide', '' + (GetGlobalVariableValue('passtexthide').substring(0, GetGlobalVariableValue('passtext').length - 1)) + '');

SetGlobalVariableValue('passnum', '');

}
else
if (true) {

SetGlobalVariableValue('OnLoadVariable', '' + (GetGlobalVariableValue('passtext').length) + '');

SetGlobalVariableValue('passnum', '' + (GetGlobalVariableValue('passtext').substring(GetGlobalVariableValue('OnLoadVariable') - 1, GetGlobalVariableValue('OnLoadVariable'))) + '');

}

if (IsValueAlphaNumeric(GetGlobalVariableValue('passnum'))) {

SetGlobalVariableValue('password', '' + (GetGlobalVariableValue('password')) + '' + (GetGlobalVariableValue('passnum')) + '');

SetGlobalVariableValue('passtexthide', '' + (GetGlobalVariableValue('passtexthide')) + '*');

}

if ((GetCheckState('u38')) == (true)) {

SetWidgetFormText('u43', GetGlobalVariableValue('password'));

}
else
if ((GetCheckState('u38')) == (false)) {

SetWidgetFormText('u43', GetGlobalVariableValue('passtexthide'));

}
});

$axure.eventManager.focus('u43', function(e) {

if ((GetWidgetText('u43')) == ('请输入登录密码')) {

SetWidgetFormText('u43', '');

}
});

$axure.eventManager.blur('u43', function(e) {

if ((GetWidgetText('u43')) == ('')) {

SetWidgetFormText('u43', '请输入登录密码');

}
});
gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u1'] = 'center';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelVisibility('u57','','fade',500);

	SetPanelVisibility('u57','hidden','fade',2500);

}
});
gv_vAlignTable['u39'] = 'top';
u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	SetPanelVisibility('u50','','none',500);

}
});

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if ((GetCheckState('u38')) == (true)) {

SetWidgetFormText('u43', GetGlobalVariableValue('password'));

}
else
if (true) {

SetWidgetFormText('u43', GetGlobalVariableValue('passtexthide'));

}
});

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('关于筷搜.html');

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u23'] = 'top';
u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('健康信息.html');

}
});

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页.html');

}
});
gv_vAlignTable['u54'] = 'top';
u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

	SetPanelVisibility('u50','hidden','none',500);

}
});
gv_vAlignTable['u19'] = 'top';
$axure.eventManager.focus('u36', function(e) {

if ((GetWidgetText('u36')) == ('请输入登录账号')) {

SetWidgetFormText('u36', '');

}
});

$axure.eventManager.blur('u36', function(e) {

if ((GetWidgetText('u36')) == ('')) {

SetWidgetFormText('u36', '请输入登录账号');

}
});
gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u34'] = 'center';
u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	SetPanelVisibility('u50','hidden','none',500);

}
});
