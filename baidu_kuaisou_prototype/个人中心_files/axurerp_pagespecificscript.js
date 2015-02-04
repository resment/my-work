for(var i = 0; i < 64; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u45'] = 'top';
u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('关于筷搜.html');

}
});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u29'] = 'center';
u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

	SetPanelVisibility('u57','hidden','none',500);

}
});
gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u43'] = 'top';
$axure.eventManager.keyup('u44', function(e) {

if ((GetWidgetText('u44')) == ('')) {

SetGlobalVariableValue('passtext', '');

SetGlobalVariableValue('passtext', '');

SetGlobalVariableValue('password', '');

SetGlobalVariableValue('OnLoadVariable', '');

}
else
if (true) {

SetGlobalVariableValue('passtext', GetWidgetText('u44'));

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

if ((GetCheckState('u39')) == (true)) {

SetWidgetFormText('u44', GetGlobalVariableValue('password'));

}
else
if ((GetCheckState('u39')) == (false)) {

SetWidgetFormText('u44', GetGlobalVariableValue('passtexthide'));

}
});

$axure.eventManager.focus('u44', function(e) {

if ((GetWidgetText('u44')) == ('请输入登录密码')) {

SetWidgetFormText('u44', '');

}
});

$axure.eventManager.blur('u44', function(e) {

if ((GetWidgetText('u44')) == ('')) {

SetWidgetFormText('u44', '请输入登录密码');

}
});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u1'] = 'center';
u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	SetPanelVisibility('u57','hidden','none',500);

}
});
gv_vAlignTable['u61'] = 'top';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	SetPanelVisibility('u50','','fade',500);

	SetPanelVisibility('u50','hidden','fade',2500);

}
});

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if ((GetCheckState('u39')) == (true)) {

SetWidgetFormText('u44', GetGlobalVariableValue('password'));

}
else
if (true) {

SetWidgetFormText('u44', GetGlobalVariableValue('passtexthide'));

}
});

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	SetPanelVisibility('u57','','none',500);

}
});

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('健康信息.html');

}
});
gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u23'] = 'top';
u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('主页.html');

}
});
gv_vAlignTable['u47'] = 'center';
u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u49'] = 'center';
$axure.eventManager.focus('u37', function(e) {

if ((GetWidgetText('u37')) == ('请输入登录账号')) {

SetWidgetFormText('u37', '');

}
});

$axure.eventManager.blur('u37', function(e) {

if ((GetWidgetText('u37')) == ('')) {

SetWidgetFormText('u37', '请输入登录账号');

}
});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u31'] = 'center';