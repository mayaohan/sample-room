const _0x5f282a=_0x25a0;function _0x5c2b(){const _0x4c5e87=['5QdhHLQ','lodash','defaultSession','getAppPath','join','info','lstatSync','[addon:chromeExtension]\x20load','11001rjAFRf','4369393jMhyCe','readdirSync','138600frovwm','isEmpty','10OwAaTq','isPackaged','electron','172AvZosk','extraResources','getDirs','[class\x20ChromeExtensionAddon]','loadExtension','path','load','926958nxRxSb','app','build','toString','exports','isDirectory','forEach','[addon:chromeExtension]\x20load\x20extension\x20error\x20extensionId:%s,\x20errorInfo:%s','2476184fcTUWh','6219ZfhbQz','getAllIds','chromeExtension','ee-core/log','length','push','[addon:chromeExtension]\x20extensionPath:','3981494buclla','3350qkVvIT','getDirectory','create'];_0x5c2b=function(){return _0x4c5e87;};return _0x5c2b();}(function(_0xd6a756,_0x3958ab){const _0x588bd9=_0x25a0,_0xa5b62d=_0xd6a756();while(!![]){try{const _0x3667d8=-parseInt(_0x588bd9(0x1c8))/0x1*(-parseInt(_0x588bd9(0x1c6))/0x2)+parseInt(_0x588bd9(0x1c3))/0x3*(parseInt(_0x588bd9(0x1cb))/0x4)+parseInt(_0x588bd9(0x1e6))/0x5*(-parseInt(_0x588bd9(0x1d2))/0x6)+parseInt(_0x588bd9(0x1c4))/0x7+-parseInt(_0x588bd9(0x1da))/0x8+parseInt(_0x588bd9(0x1db))/0x9*(-parseInt(_0x588bd9(0x1e3))/0xa)+-parseInt(_0x588bd9(0x1e2))/0xb;if(_0x3667d8===_0x3958ab)break;else _0xa5b62d['push'](_0xa5b62d['shift']());}catch(_0x540d73){_0xa5b62d['push'](_0xa5b62d['shift']());}}}(_0x5c2b,0x65e91));const {app,session}=require(_0x5f282a(0x1ca)),_=require(_0x5f282a(0x1e7)),fs=require('fs'),path=require(_0x5f282a(0x1d0)),Log=require(_0x5f282a(0x1de));class ChromeExtensionAddon{constructor(_0x5a3992){const _0x1e4df9=_0x5f282a;this[_0x1e4df9(0x1d3)]=_0x5a3992;}async[_0x5f282a(0x1e5)](){const _0x5689f6=_0x5f282a;Log[_0x5689f6(0x1c0)](_0x5689f6(0x1c2));const _0x536b5e=this[_0x5689f6(0x1dc)]();for(let _0x59e770=0x0;_0x59e770<_0x536b5e[_0x5689f6(0x1df)];_0x59e770++){await this[_0x5689f6(0x1d1)](_0x536b5e[_0x59e770]);}}[_0x5f282a(0x1dc)](){const _0x4b7859=_0x5f282a,_0x134697=this[_0x4b7859(0x1e4)](),_0x5335d9=this[_0x4b7859(0x1cd)](_0x134697);return _0x5335d9;}[_0x5f282a(0x1e4)](){const _0x143e8d=_0x5f282a;let _0x271845='',_0x36d0b4=_0x143e8d(0x1d4);return app[_0x143e8d(0x1c9)]&&(_0x36d0b4='..'),_0x271845=path[_0x143e8d(0x1bf)](app[_0x143e8d(0x1e9)](),_0x36d0b4,_0x143e8d(0x1cc),_0x143e8d(0x1dd)),_0x271845;}async[_0x5f282a(0x1d1)](_0x654d46=''){const _0x2b4a1d=_0x5f282a;if(_[_0x2b4a1d(0x1c7)](_0x654d46))return![];try{const _0x4c1144=path[_0x2b4a1d(0x1bf)](this[_0x2b4a1d(0x1e4)](),_0x654d46);Log[_0x2b4a1d(0x1c0)](_0x2b4a1d(0x1e1),_0x4c1144),await session[_0x2b4a1d(0x1e8)][_0x2b4a1d(0x1cf)](_0x4c1144,{'allowFileAccess':!![]});}catch(_0x4e447e){return Log[_0x2b4a1d(0x1c0)](_0x2b4a1d(0x1d9),_0x654d46,_0x4e447e[_0x2b4a1d(0x1d5)]()),![];}return!![];}[_0x5f282a(0x1cd)](_0x4832c9){const _0x2555a2=_0x5f282a;if(!_0x4832c9)return[];const _0x40d8be=[],_0x42a991=fs[_0x2555a2(0x1c5)](_0x4832c9);return _0x42a991[_0x2555a2(0x1d8)](function(_0x392a8c,_0x8dd6df){const _0x4931a2=_0x2555a2,_0x564bb5=fs[_0x4931a2(0x1c1)](_0x4832c9+'/'+_0x392a8c);_0x564bb5[_0x4931a2(0x1d7)]()===!![]&&_0x40d8be[_0x4931a2(0x1e0)](_0x392a8c);}),_0x40d8be;}}function _0x25a0(_0x3b133d,_0x23ba9a){const _0x5c2b6d=_0x5c2b();return _0x25a0=function(_0x25a01e,_0x3e2875){_0x25a01e=_0x25a01e-0x1bf;let _0x37c266=_0x5c2b6d[_0x25a01e];return _0x37c266;},_0x25a0(_0x3b133d,_0x23ba9a);}ChromeExtensionAddon[_0x5f282a(0x1d5)]=()=>_0x5f282a(0x1ce),module[_0x5f282a(0x1d6)]=ChromeExtensionAddon;