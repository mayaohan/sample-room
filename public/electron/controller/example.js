'use strict';const _0x22589a=_0x276d;(function(_0x17b8c9,_0x2509a9){const _0x16dfc7=_0x276d,_0xebb455=_0x17b8c9();while(!![]){try{const _0x34e208=-parseInt(_0x16dfc7(0x21e))/0x1+-parseInt(_0x16dfc7(0x172))/0x2+-parseInt(_0x16dfc7(0x157))/0x3+-parseInt(_0x16dfc7(0x1a0))/0x4+-parseInt(_0x16dfc7(0x143))/0x5+-parseInt(_0x16dfc7(0x1fc))/0x6*(-parseInt(_0x16dfc7(0x1cd))/0x7)+-parseInt(_0x16dfc7(0x14c))/0x8*(-parseInt(_0x16dfc7(0x1ee))/0x9);if(_0x34e208===_0x2509a9)break;else _0xebb455['push'](_0xebb455['shift']());}catch(_0x3e97db){_0xebb455['push'](_0xebb455['shift']());}}}(_0x22ce,0x7b8c9));const _=require(_0x22589a(0x212)),path=require(_0x22589a(0x1c7)),fs=require('fs'),{exec}=require(_0x22589a(0x196)),{Controller}=require(_0x22589a(0x1d3)),{app:electronApp,dialog,shell,BrowserView,Notification,powerMonitor,screen,nativeTheme}=require(_0x22589a(0x1e4)),dayjs=require(_0x22589a(0x161)),Ps=require(_0x22589a(0x19e)),Log=require(_0x22589a(0x1bd));function _0x22ce(){const _0x5dbef0=['getLogDir','mainServer','showMessageBoxSync','info','existsSync','jsonstorage','child_process','selectFolder','query','updateParam','web','protocol','http://localhost:','doCreatePool','ee-core/ps','search_age','1225376Vfndid','lock-screen','loadURL','点击确认按钮','isEmpty','file','addTestDataSqlite','content','new\x20window','removeBrowserView','title','windowName','[openSoftware]\x20softwarePath:','request','打开了消息框','getTestDataSqlite','app','不支持','自定义消息内容','update_name','delete_name','其它的额外信息','checkUpdate','shouldUseInvertedColorScheme','当前系统不支持通知','http://127.0.0.1:5173','add','webContents','使用电池中','ee-core/log','originalFilename','type','\x20x\x20','clickEvent','updateTestDataSqlite','height','update','test','stringify','path','getAllData','addon','getTheme','writeFileSync','getAllTestDataSqlite','7ltOeEQ','port','ipcSendMsg','ohther','system','openSoftware','ee-core','sqlitedbOperation','\x20-\x20','accelerometerSupport','开始了','html','initPowerMonitor','window-1','getData','startJavaServer','prod','silent','update_age','config','autoUpdater','uploadFileToSMMS','getCursorScreenPoint','electron','addon\x20not\x20enabled!','doHttpRequest','themeSource','example','run','createServer','openPath','show','service','97326LzpvWJ','all_list','hello\x20','unknown','readFileSync','delTestDataSqlite','removeViewContent','kill','解锁了','接入了电源','subtitle','server','env','colorSpace','1997670zkDxdA','start\x20','showNotification','result','httpServer','msg','filepath','addParam','number','colorDepth','join','getDataDir','setCustomDataDir','toString','点击取消按钮','loadViewContent','code','纵坐标','createWindow','on-battery','files','停止了','lodash','doSocketRequest','doJob','锁屏了','自定义标题-message','shouldUseHighContrastColors','get','getPrimaryDisplay','vue','setBrowserView','getScreen','closeEvent','524678PNAhbq','mainWindow','controller.example.sendNotification','addData','parse','touchSupport','all','create','controller.example.initPowerMonitor','now','closeJavaServer','monochrome','monitorJob','dark','unlink','1822775CJFTen','createPool','createDirectory','window','showOpenDialogSync','addons','hello','Basic\x20Notification','someJob','1616GRUYjK','checkHttpServer','storage','scaleFactor','exports','download','click','host','messageShowConfirm','setTheme','getAllDisplays','575727qupxeB','unlock-screen','reply','end','新窗口路径：','openDirectory','tmpDir:','messageShow','start','bounds','dayjs','search','delData','ipcSendSyncMsg','setDataDir','light','del','分辨率','someJobByPool','ipcInvokeMsg','sendNotification','doJobByPool','isSupported','YYYY-MM-DD\x20HH:mm:ss','updateData','setBounds','dbOperation','1247660dTbvzd','getPath','file://','getExtraResourcesDir','enable','您关闭了通知消息','横坐标','on-ac','downloadApp','close','checkForUpdater','isAbsolute','加速器','width','javaServer','data_dir','controller.example.ipcSendMsg','您点击了通知消息','[class\x20ExampleController]','Notification\x20from\x20the\x20Main\x20process','format','getWCid','body','httpInfo:','createReadStream','method','getAppPath','单色显示器','uploadFile','action'];_0x22ce=function(){return _0x5dbef0;};return _0x22ce();}function _0x276d(_0x4788b0,_0x11b867){const _0x22cef2=_0x22ce();return _0x276d=function(_0x276d05,_0x3aebd6){_0x276d05=_0x276d05-0x139;let _0x1fbb45=_0x22cef2[_0x276d05];return _0x1fbb45;},_0x276d(_0x4788b0,_0x11b867);}let myTimer=null,browserViewObj=null,notificationObj=null;class ExampleController extends Controller{constructor(_0x309457){super(_0x309457);}async[_0x22589a(0x1c5)](){const _0x80c1c7=_0x22589a,_0x4ba587=await this[_0x80c1c7(0x1ed)][_0x80c1c7(0x1e8)][_0x80c1c7(0x1c5)](_0x80c1c7(0x1e4));let _0x26d0a0=Ps[_0x80c1c7(0x190)]();return Log[_0x80c1c7(0x193)](_0x80c1c7(0x15d),_0x26d0a0),_0x4ba587;}async[_0x22589a(0x171)](_0x2e7310){const _0x222f92=_0x22589a,{service:_0xdad577}=this,_0x493c51=_0x2e7310,_0x12c892={'action':_0x493c51[_0x222f92(0x18f)],'result':null,'all_list':[]};switch(_0x493c51[_0x222f92(0x18f)]){case _0x222f92(0x1ba):_0x12c892[_0x222f92(0x1ff)]=await _0xdad577[_0x222f92(0x195)][_0x222f92(0x221)](_0x493c51[_0x222f92(0x203)]);break;case _0x222f92(0x167):_0x12c892[_0x222f92(0x1ff)]=await _0xdad577[_0x222f92(0x195)][_0x222f92(0x163)](_0x493c51[_0x222f92(0x1b4)]);break;case _0x222f92(0x1c4):_0x12c892[_0x222f92(0x1ff)]=await _0xdad577[_0x222f92(0x195)][_0x222f92(0x16f)](_0x493c51[_0x222f92(0x199)]);break;case _0x222f92(0x218):_0x12c892[_0x222f92(0x1ff)]=await _0xdad577[_0x222f92(0x195)][_0x222f92(0x1db)](_0x493c51[_0x222f92(0x162)]);break;case _0x222f92(0x13a):_0x12c892[_0x222f92(0x1ef)]=await _0xdad577[_0x222f92(0x195)][_0x222f92(0x1c8)]();break;}return _0x12c892;}async[_0x22589a(0x1d4)](_0x420447){const _0x19f5a5=_0x22589a,{service:_0x41a0d5}=this,_0x30db47=_0x420447,_0x1821cb={'action':_0x30db47[_0x19f5a5(0x18f)],'result':null,'all_list':[]};switch(_0x30db47[_0x19f5a5(0x18f)]){case _0x19f5a5(0x1ba):_0x1821cb[_0x19f5a5(0x1ff)]=await _0x41a0d5[_0x19f5a5(0x14e)][_0x19f5a5(0x1a6)](_0x30db47[_0x19f5a5(0x193)]);;break;case _0x19f5a5(0x167):_0x1821cb[_0x19f5a5(0x1ff)]=await _0x41a0d5[_0x19f5a5(0x14e)][_0x19f5a5(0x1f3)](_0x30db47[_0x19f5a5(0x1b4)]);;break;case _0x19f5a5(0x1c4):_0x1821cb[_0x19f5a5(0x1ff)]=await _0x41a0d5[_0x19f5a5(0x14e)][_0x19f5a5(0x1c2)](_0x30db47[_0x19f5a5(0x1b3)],_0x30db47[_0x19f5a5(0x1df)]);break;case _0x19f5a5(0x218):_0x1821cb[_0x19f5a5(0x1ff)]=await _0x41a0d5[_0x19f5a5(0x14e)][_0x19f5a5(0x1af)](_0x30db47[_0x19f5a5(0x19f)]);break;case _0x19f5a5(0x207):_0x1821cb[_0x19f5a5(0x1ff)]=await _0x41a0d5[_0x19f5a5(0x14e)][_0x19f5a5(0x207)]();break;case _0x19f5a5(0x165):_0x1821cb[_0x19f5a5(0x1ff)]=await _0x41a0d5[_0x19f5a5(0x14e)][_0x19f5a5(0x208)](_0x30db47[_0x19f5a5(0x181)]);break;}return _0x1821cb[_0x19f5a5(0x1ef)]=await _0x41a0d5[_0x19f5a5(0x14e)][_0x19f5a5(0x1cc)](),_0x1821cb;}[_0x22589a(0x15e)](){const _0x5c2b56=_0x22589a;return dialog[_0x5c2b56(0x192)]({'type':_0x5c2b56(0x193),'title':_0x5c2b56(0x216),'message':_0x5c2b56(0x1b2),'detail':_0x5c2b56(0x1b5)}),_0x5c2b56(0x1ae);}[_0x22589a(0x154)](){const _0x27adc9=_0x22589a,_0x38ee68=dialog[_0x27adc9(0x192)]({'type':_0x27adc9(0x193),'title':_0x27adc9(0x216),'message':_0x27adc9(0x1b2),'detail':_0x27adc9(0x1b5),'cancelId':0x1,'defaultId':0x0,'buttons':['确认','取消']});let _0x10faaa=_0x38ee68===0x0?_0x27adc9(0x1a3):_0x27adc9(0x20a);return _0x10faaa;}[_0x22589a(0x197)](){const _0x3e124b=_0x22589a,_0x958a0f=dialog[_0x3e124b(0x147)]({'properties':[_0x3e124b(0x15c),_0x3e124b(0x145)]});if(_[_0x3e124b(0x1a4)](_0x958a0f))return null;return Log[_0x3e124b(0x193)](_0x3e124b(0x189),_0x958a0f),_0x958a0f[0x0];}[_0x22589a(0x15c)](_0xb83ade){const _0x136363=_0x22589a;if(!_0xb83ade['id'])return![];let _0x28a8c0='';return path[_0x136363(0x17d)](_0xb83ade['id'])?_0x28a8c0=_0xb83ade['id']:_0x28a8c0=electronApp[_0x136363(0x173)](_0xb83ade['id']),shell[_0x136363(0x1eb)](_0x28a8c0),!![];}[_0x22589a(0x20b)](_0xaa043){const _0xcac978=_0x22589a;let _0x176b50=null;return _0xaa043[_0xcac978(0x1bf)]==_0xcac978(0x1d8)?_0x176b50=path[_0xcac978(0x206)](_0xcac978(0x174),electronApp[_0xcac978(0x18c)](),_0xaa043[_0xcac978(0x1a7)]):_0x176b50=_0xaa043[_0xcac978(0x1a7)],browserViewObj=new BrowserView(),this[_0xcac978(0x1b0)][_0xcac978(0x1e4)][_0xcac978(0x21f)][_0xcac978(0x21b)](browserViewObj),browserViewObj[_0xcac978(0x170)]({'x':0x12c,'y':0xaa,'width':0x28a,'height':0x190}),browserViewObj[_0xcac978(0x1bb)][_0xcac978(0x1a2)](_0x176b50),!![];}[_0x22589a(0x1f4)](){const _0x17adaf=_0x22589a;return this[_0x17adaf(0x1b0)][_0x17adaf(0x1e4)][_0x17adaf(0x21f)][_0x17adaf(0x1a9)](browserViewObj),!![];}[_0x22589a(0x1fe)](_0x27e9cd=_0x22589a(0x14a),_0x3b730c=_0x22589a(0x185)){const _0x394017=_0x22589a;new Notification({'title':_0x27e9cd,'body':_0x3b730c})[_0x394017(0x1ec)]();}[_0x22589a(0x20e)](_0x1b89f9){const _0x139c94=_0x22589a;let _0x56da49=null;if(_0x1b89f9[_0x139c94(0x1bf)]==_0x139c94(0x1d8))_0x56da49=path[_0x139c94(0x206)](_0x139c94(0x174),electronApp[_0x139c94(0x18c)](),_0x1b89f9[_0x139c94(0x1a7)]);else{if(_0x1b89f9[_0x139c94(0x1bf)]==_0x139c94(0x19a))_0x56da49=_0x1b89f9[_0x139c94(0x1a7)];else{if(_0x1b89f9[_0x139c94(0x1bf)]==_0x139c94(0x21a)){let _0x42f304=_0x139c94(0x1b9);if(this[_0x139c94(0x1e0)][_0x139c94(0x1fa)]==_0x139c94(0x1dd)){const _0x2fe286=this[_0x139c94(0x1b0)][_0x139c94(0x1e0)][_0x139c94(0x191)];_0x42f304=_0x2fe286[_0x139c94(0x19b)]+_0x2fe286[_0x139c94(0x153)]+':'+_0x2fe286[_0x139c94(0x1ce)];}_0x56da49=_0x42f304+_0x1b89f9[_0x139c94(0x1a7)];}else{}}}const _0x1d5f53=this[_0x139c94(0x1b0)][_0x139c94(0x1c9)][_0x139c94(0x146)];let _0x1f99cf={'title':_0x1b89f9[_0x139c94(0x1ab)]||_0x139c94(0x1a8)};const _0x3379f0=_0x1b89f9[_0x139c94(0x1ab)]||_0x139c94(0x1da),_0x2454f8=_0x1d5f53[_0x139c94(0x13b)](_0x3379f0,_0x1f99cf),_0x29d399=_0x2454f8[_0x139c94(0x1bb)]['id'];return this[_0x139c94(0x1fe)](_0x139c94(0x15b),_0x56da49),_0x2454f8[_0x139c94(0x1a2)](_0x56da49),_0x29d399;}[_0x22589a(0x187)](_0x27abb6){const _0x3990e9=_0x22589a,_0x124e1f=this[_0x3990e9(0x1b0)][_0x3990e9(0x1c9)][_0x3990e9(0x146)],_0x514f16=_0x27abb6,_0xa6ddca=_0x124e1f[_0x3990e9(0x187)](_0x514f16);return _0xa6ddca;}[_0x22589a(0x16b)](_0x4ad938,_0x1bd150){const _0x37f6e5=_0x22589a,_0x10e30a=_0x37f6e5(0x220);if(!Notification[_0x37f6e5(0x16d)]())return _0x37f6e5(0x1b8);let _0x254a5f={};return!_[_0x37f6e5(0x1a4)](_0x4ad938[_0x37f6e5(0x1aa)])&&(_0x254a5f[_0x37f6e5(0x1aa)]=_0x4ad938[_0x37f6e5(0x1aa)]),!_[_0x37f6e5(0x1a4)](_0x4ad938[_0x37f6e5(0x1f8)])&&(_0x254a5f[_0x37f6e5(0x1f8)]=_0x4ad938[_0x37f6e5(0x1f8)]),!_[_0x37f6e5(0x1a4)](_0x4ad938[_0x37f6e5(0x188)])&&(_0x254a5f[_0x37f6e5(0x188)]=_0x4ad938[_0x37f6e5(0x188)]),!_[_0x37f6e5(0x1a4)](_0x4ad938[_0x37f6e5(0x1de)])&&(_0x254a5f[_0x37f6e5(0x1de)]=_0x4ad938[_0x37f6e5(0x1de)]),notificationObj=new Notification(_0x254a5f),_0x4ad938[_0x37f6e5(0x1c1)]&&notificationObj['on'](_0x37f6e5(0x152),_0x15dbae=>{const _0xaf1afd=_0x37f6e5;let _0x4a6451={'type':_0xaf1afd(0x152),'msg':_0xaf1afd(0x183)};_0x1bd150[_0xaf1afd(0x159)](''+_0x10e30a,_0x4a6451);}),_0x4ad938[_0x37f6e5(0x21d)]&&notificationObj['on'](_0x37f6e5(0x17b),_0x2f54de=>{const _0x2f6d22=_0x37f6e5;let _0x3cba39={'type':_0x2f6d22(0x17b),'msg':_0x2f6d22(0x177)};_0x1bd150[_0x2f6d22(0x159)](''+_0x10e30a,_0x3cba39);}),notificationObj[_0x37f6e5(0x1ec)](),!![];}[_0x22589a(0x1d9)](_0x4fc6a0,_0x2581a8){const _0x3bf328=_0x22589a,_0x293a33=_0x3bf328(0x13c);return powerMonitor['on'](_0x3bf328(0x179),_0xb9d65=>{const _0x524658=_0x3bf328;let _0x4699bb={'type':_0x524658(0x179),'msg':_0x524658(0x1f7)};_0x2581a8[_0x524658(0x159)](''+_0x293a33,_0x4699bb);}),powerMonitor['on'](_0x3bf328(0x20f),_0x58919f=>{const _0x3e1bb3=_0x3bf328;let _0x577cd2={'type':_0x3e1bb3(0x20f),'msg':_0x3e1bb3(0x1bc)};_0x2581a8[_0x3e1bb3(0x159)](''+_0x293a33,_0x577cd2);}),powerMonitor['on'](_0x3bf328(0x1a1),_0x1b4143=>{const _0x41dccf=_0x3bf328;let _0xb6a2ef={'type':_0x41dccf(0x1a1),'msg':_0x41dccf(0x215)};_0x2581a8[_0x41dccf(0x159)](''+_0x293a33,_0xb6a2ef);}),powerMonitor['on'](_0x3bf328(0x158),_0x111b7c=>{const _0x4b0233=_0x3bf328;let _0x2db1d8={'type':_0x4b0233(0x158),'msg':_0x4b0233(0x1f6)};_0x2581a8[_0x4b0233(0x159)](''+_0x293a33,_0x2db1d8);}),!![];}[_0x22589a(0x21c)](_0x119fbf){const _0x1f357c=_0x22589a;let _0x2a1be0=[],_0x207960={};if(_0x119fbf==0x0){let _0xd505d0=screen[_0x1f357c(0x1e3)]();return _0x2a1be0=[{'title':_0x1f357c(0x178),'desc':_0xd505d0['x']},{'title':_0x1f357c(0x20d),'desc':_0xd505d0['y']}],_0x2a1be0;}_0x119fbf==0x1&&(_0x207960=screen[_0x1f357c(0x219)]());if(_0x119fbf==0x2){let _0x2b8b97=screen[_0x1f357c(0x156)]();_0x207960=_0x2b8b97[0x0];}return _0x2a1be0=[{'title':_0x1f357c(0x168),'desc':_0x207960[_0x1f357c(0x160)][_0x1f357c(0x17f)]+_0x1f357c(0x1c0)+_0x207960[_0x1f357c(0x160)][_0x1f357c(0x1c3)]},{'title':_0x1f357c(0x18d),'desc':_0x207960[_0x1f357c(0x13f)]?'是':'否'},{'title':'色深','desc':_0x207960[_0x1f357c(0x205)]},{'title':'色域','desc':_0x207960[_0x1f357c(0x1fb)]},{'title':_0x1f357c(0x14f),'desc':_0x207960[_0x1f357c(0x14f)]},{'title':_0x1f357c(0x17e),'desc':_0x207960[_0x1f357c(0x1d6)]},{'title':'触控','desc':_0x207960[_0x1f357c(0x139)]==_0x1f357c(0x1f1)?_0x1f357c(0x1b1):'支持'}],_0x2a1be0;}[_0x22589a(0x1d2)](_0x114df7){const _0x15f48b=_0x22589a;if(!_0x114df7)return![];let _0xfa44c4=path[_0x15f48b(0x206)](Ps[_0x15f48b(0x175)](),_0x114df7);Log[_0x15f48b(0x193)](_0x15f48b(0x1ac),_0xfa44c4);if(!fs[_0x15f48b(0x194)](_0xfa44c4))return![];let _0x5e88ff=_0x15f48b(0x1fd)+_0xfa44c4;return exec(_0x5e88ff),!![];}[_0x22589a(0x1ca)](){const _0x345156=_0x22589a;let _0x1f5b3d=_0x345156(0x1d1);if(nativeTheme[_0x345156(0x217)])_0x1f5b3d=_0x345156(0x166);else nativeTheme[_0x345156(0x1b7)]&&(_0x1f5b3d=_0x345156(0x141));return _0x1f5b3d;}[_0x22589a(0x155)](_0x381fcb){const _0xb6136c=_0x22589a;return nativeTheme[_0xb6136c(0x1e7)]=_0x381fcb,_0x381fcb;}[_0x22589a(0x17c)](){const _0xf2f056=_0x22589a,_0x4d04d3=this[_0xf2f056(0x1b0)][_0xf2f056(0x1c9)][_0xf2f056(0x1e1)];_0x4d04d3[_0xf2f056(0x1b6)]();return;}[_0x22589a(0x17a)](){const _0x458928=_0x22589a,_0x40a357=this[_0x458928(0x1b0)][_0x458928(0x1c9)][_0x458928(0x1e1)];_0x40a357[_0x458928(0x151)]();return;}async[_0x22589a(0x14d)](){const _0x271546=_0x22589a,_0x352866=this[_0x271546(0x1b0)][_0x271546(0x1e0)][_0x271546(0x200)],_0x1d0f69=_0x352866[_0x271546(0x19b)]+_0x352866[_0x271546(0x153)]+':'+_0x352866[_0x271546(0x1ce)],_0x49e07f={'enable':_0x352866[_0x271546(0x176)],'server':_0x1d0f69};return _0x49e07f;}async[_0x22589a(0x1e6)](){const _0x51c6cc=_0x22589a,_0x47bc83=this[_0x51c6cc(0x1b0)][_0x51c6cc(0x1ad)][_0x51c6cc(0x18b)];let _0x2a599c=this[_0x51c6cc(0x1b0)][_0x51c6cc(0x1ad)][_0x51c6cc(0x198)];_0x2a599c=_0x2a599c instanceof Object?_0x2a599c:JSON[_0x51c6cc(0x222)](JSON[_0x51c6cc(0x1c6)](_0x2a599c));const _0x2a0e00=this[_0x51c6cc(0x1b0)][_0x51c6cc(0x1ad)][_0x51c6cc(0x188)],_0x543450={'method':_0x47bc83,'params':_0x2a599c,'body':_0x2a0e00};Log[_0x51c6cc(0x193)](_0x51c6cc(0x189),_0x543450);if(!_0x2a0e00['id'])return![];const _0x4ce7cf=electronApp[_0x51c6cc(0x173)](_0x2a0e00['id']);return shell[_0x51c6cc(0x1eb)](_0x4ce7cf),!![];}async[_0x22589a(0x213)](_0x1f83ec){const _0x341b67=_0x22589a;if(!_0x1f83ec['id'])return![];const _0x5cdbe6=electronApp[_0x341b67(0x173)](_0x1f83ec['id']);return shell[_0x341b67(0x1eb)](_0x5cdbe6),!![];}async[_0x22589a(0x16a)](_0x5409cc,_0xdaa08){const _0x161d5=_0x22589a;let _0x53f618=dayjs()[_0x161d5(0x186)](_0x161d5(0x16e));const _0x38d086=_0x5409cc+_0x161d5(0x1d5)+_0x53f618;return _0x38d086;}async[_0x22589a(0x164)](_0x5346a1){const _0x19824b=_0x22589a;let _0x36830c=dayjs()[_0x19824b(0x186)](_0x19824b(0x16e));const _0x21c803=_0x5346a1+_0x19824b(0x1d5)+_0x36830c;return _0x21c803;}[_0x22589a(0x1cf)](_0x27dd3a,_0x257b9f){const _0x356c08=_0x22589a,_0x3d0766=_0x356c08(0x182);if(_0x27dd3a[_0x356c08(0x1bf)]==_0x356c08(0x15f))return myTimer=setInterval(function(_0x2df9b9,_0x256d15,_0x1886aa){const _0x4b283f=_0x356c08;let _0x491b1f=Date[_0x4b283f(0x13d)](),_0x16ef2b=_0x1886aa+':'+_0x491b1f;_0x2df9b9[_0x4b283f(0x159)](''+_0x256d15,_0x16ef2b);},0x3e8,_0x257b9f,_0x3d0766,_0x27dd3a[_0x356c08(0x1a7)]),_0x356c08(0x1d7);else return _0x27dd3a[_0x356c08(0x1bf)]==_0x356c08(0x15a)?(clearInterval(myTimer),_0x356c08(0x211)):_0x356c08(0x1d0);}async[_0x22589a(0x18e)](){const _0x16c3b6=_0x22589a;let _0x49296d=Ps[_0x16c3b6(0x190)]();const _0x1a88d8=this[_0x16c3b6(0x1b0)][_0x16c3b6(0x1ad)][_0x16c3b6(0x210)];let _0x33e408=_0x1a88d8[_0x16c3b6(0x1a5)],_0x5dfc72=path[_0x16c3b6(0x206)](_0x49296d,_0x33e408[_0x16c3b6(0x1be)]);try{let _0x5e8794=fs[_0x16c3b6(0x1f2)](_0x33e408[_0x16c3b6(0x202)]);fs[_0x16c3b6(0x1cb)](_0x5dfc72,_0x5e8794);}finally{await fs[_0x16c3b6(0x142)](_0x33e408[_0x16c3b6(0x202)],function(){});}const _0x4aece3=fs[_0x16c3b6(0x18a)](_0x5dfc72),_0x36e39f=await this[_0x16c3b6(0x1ed)][_0x16c3b6(0x1e8)][_0x16c3b6(0x1e2)](_0x4aece3);return _0x36e39f;}async[_0x22589a(0x1dc)](){const _0x2796a2=_0x22589a;let _0x42883f={'code':0x0,'msg':'','server':''};const _0x2f71d0=this[_0x2796a2(0x1b0)][_0x2796a2(0x1e0)][_0x2796a2(0x148)][_0x2796a2(0x180)]||{};if(!_0x2f71d0[_0x2796a2(0x176)])return _0x42883f[_0x2796a2(0x20c)]=-0x1,_0x42883f[_0x2796a2(0x201)]=_0x2796a2(0x1e5),_0x42883f;const _0x3ba2e2=this[_0x2796a2(0x1b0)][_0x2796a2(0x1c9)][_0x2796a2(0x180)];return await _0x3ba2e2[_0x2796a2(0x1ea)](),_0x42883f[_0x2796a2(0x1f9)]=_0x2796a2(0x19c)+_0x2f71d0[_0x2796a2(0x1ce)],_0x42883f;}async[_0x22589a(0x13e)](){const _0x1b61f7=_0x22589a;let _0x47cc04={'code':0x0,'msg':''};const _0x5b0015=this[_0x1b61f7(0x1b0)][_0x1b61f7(0x1e0)][_0x1b61f7(0x148)][_0x1b61f7(0x180)]||{};if(!_0x5b0015[_0x1b61f7(0x176)])return _0x47cc04[_0x1b61f7(0x20c)]=-0x1,_0x47cc04[_0x1b61f7(0x201)]=_0x1b61f7(0x1e5),_0x47cc04;const _0x38a35b=this[_0x1b61f7(0x1b0)][_0x1b61f7(0x1c9)][_0x1b61f7(0x180)];return await _0x38a35b[_0x1b61f7(0x1f5)](),_0x47cc04;}[_0x22589a(0x14b)](_0x296caf,_0x16c4a3){const _0x3d5389=_0x22589a;let _0x2506d5=_0x296caf['id'],_0x1cfba3=_0x296caf[_0x3d5389(0x18f)],_0x18673b;switch(_0x1cfba3){case _0x3d5389(0x13b):_0x18673b=this[_0x3d5389(0x1ed)][_0x3d5389(0x1e8)][_0x3d5389(0x214)](_0x2506d5,_0x1cfba3,_0x16c4a3);break;case _0x3d5389(0x17b):this[_0x3d5389(0x1ed)][_0x3d5389(0x1e8)][_0x3d5389(0x214)](_0x2506d5,_0x1cfba3,_0x16c4a3);break;default:}let _0x447d65={'jobId':_0x2506d5,'action':_0x1cfba3,'result':_0x18673b};return _0x447d65;}async[_0x22589a(0x144)](_0xec772e,_0x5a2222){const _0x4e27a6=_0x22589a;let _0x5b3147=_0xec772e[_0x4e27a6(0x204)];this[_0x4e27a6(0x1ed)][_0x4e27a6(0x1e8)][_0x4e27a6(0x19d)](_0x5b3147,_0x5a2222),this[_0x4e27a6(0x1ed)][_0x4e27a6(0x1e8)][_0x4e27a6(0x140)]();return;}[_0x22589a(0x169)](_0x14ef05,_0x32a5cf){const _0x108180=_0x22589a;let _0x2a9919=_0x14ef05['id'],_0x131f23=_0x14ef05[_0x108180(0x18f)],_0x15a1ca;switch(_0x131f23){case _0x108180(0x1e9):_0x15a1ca=this[_0x108180(0x1ed)][_0x108180(0x1e8)][_0x108180(0x16c)](_0x2a9919,_0x131f23,_0x32a5cf);break;default:}let _0x23f069={'jobId':_0x2a9919,'action':_0x131f23,'result':_0x15a1ca};return _0x23f069;}[_0x22589a(0x149)](_0x3669b0){const _0x474b40=_0x22589a;Log[_0x474b40(0x193)](_0x474b40(0x1f0),_0x3669b0);}}ExampleController[_0x22589a(0x209)]=()=>_0x22589a(0x184),module[_0x22589a(0x150)]=ExampleController;