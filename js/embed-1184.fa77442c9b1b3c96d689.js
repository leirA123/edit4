(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[1184,95786],{24780:e=>{e.exports={"tv-spinner__container-rotate":"tv-spinner__container-rotate-z2AhmXBd"}},10864:(e,t,n)=>{"use strict";var r;n.d(t,{ToastIntent:()=>r}),function(e){e.Default="default",e.Success="success",e.Warning="warning",e.Danger="danger"}(r||(r={}))},521:(e,t,n)=>{"use strict";e.exports.pushChartPage=async function(e){const{default:t}=await Promise.all([n.e(31205),n.e(16061),n.e(23450),n.e(84575),n.e(80509),n.e(66708),n.e(38119),n.e(45818),n.e(86297),n.e(93682),n.e(34629)]).then(n.t.bind(n,55244,23)),r=new t.ChartPage(e);TradingView.historyManager.push(r)}},7436:(e,t,n)=>{"use strict";n.d(t,{DEFAULT_SIZE:()=>r,spinnerSizeMap:()=>o});const r="large",o={mini:"xsmall",xsmall:"xsmall",small:"small",medium:"medium",large:"large"}},41285:(e,t,n)=>{"use strict";n.d(t,{Spinner:()=>s});n(24780);var r=n(98969),o=n(7436);const i=(0,r.parseHtmlElement)(function(e=""){return`<div class="tv-spinner ${e}" role="progressbar"></div>`}());class s{constructor(e){this._shown=!1,this._el=i.cloneNode(!0),this.setSize(o.spinnerSizeMap[e||o.DEFAULT_SIZE])}spin(e){return this._el.classList.add("tv-spinner--shown"),void 0===this._container&&(this._container=e,void 0!==e&&e.appendChild(this._el)),this._shown=!0,this}stop(e){return e&&void 0!==this._container&&this._container.removeChild(this._el),this._el.classList.remove("tv-spinner--shown"),this._shown=!1,this}setStyle(e){return Object.keys(e).forEach(t=>{const n=e[t];void 0!==n&&this._el.style.setProperty(t,n)}),this}style(){return this._el.style}setSize(e){const t=void 0!==e?"tv-spinner--size_"+e:"";return this._el.className=`tv-spinner ${t} ${this._shown?"tv-spinner--shown":""}`,this}getEl(){return this._el}destroy(){this.stop(),delete this._el,delete this._container}}},92939:(e,t,n)=>{"use strict";var r;n.d(t,{AlertEditorAbortReason:()=>r}),function(e){e.AlertIsInvalid="alert-is-invalid",e.AlertsMaintenance="alerts-maintenance",e.ChartModelNotFound="chart-model-not-found",e.IsAlreadyPresent="is-already-present",e.MainSeriesIsATR="main-series-is-atr",e.MainSeriesIsInReplay="main-series-is-in-replay",e.MainSeriesIsOffline="main-series-is-offline",e.SourceIsDangerous="source-is-dangerous",e.SymbolInfoTimeout="symbol-info-timeout",e.SymbolIsInvalid="symbol-is-invalid",e.SymbolCurrencyConverted="symbol-currency-converted",e.SymbolUnitConverted="symbol-unit-converted",e.SymbolCurrencyAndUnitConverted="symbol-currency-and-unit-converted",e.SymbolIsEconomics="symbol-is-economics",e.UnsupportedResolution="unsupported-resolution",e.ManualAbort="manual-abort",e.MisleadingPriceScale="misleading-price-scale"}(r||(r={}))},17455:(e,t,n)=>{"use strict";n.d(t,{getAlertDialogType:()=>p,shouldAbortAlertEditor:()=>f,showAbortExplainingDialog:()=>b,ensureSeriesIsNotOffline:()=>m});var r=n(87236),o=n(79923),i=n(92939),s=n(95048),a=n(49473),l=n(83912),u=n(96329),c=n(17540),d=n(52279),h=n(78341);function p(e){return e.alert?e.type||"edit_alert":"create_alert"}function f(e){var t
;if(h.alertsMaintenanceTracker.value())return i.AlertEditorAbortReason.AlertsMaintenance;if(!e.alert&&!e.dataSourceHub)return i.AlertEditorAbortReason.ChartModelNotFound;if(!u.alertEditorInvocationHandler.isAllowedToInvoke(e))return i.AlertEditorAbortReason.IsAlreadyPresent;const n=null===(t=e.dataSourceHub)||void 0===t?void 0:t.mainSeries();if(n&&v(n))return i.AlertEditorAbortReason.MainSeriesIsOffline;if(n&&function(e){return e.status()===s.STATUS_INVALID_SYMBOL}(n))return i.AlertEditorAbortReason.SymbolIsInvalid;if(n&&n.isConvertedToOtherCurrency()&&n.isConvertedToOtherUnit())return i.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted;if(n&&n.isConvertedToOtherCurrency())return i.AlertEditorAbortReason.SymbolCurrencyConverted;if(n&&n.isConvertedToOtherUnit())return i.AlertEditorAbortReason.SymbolUnitConverted;const r=p(e);if("create_alert"===r&&n&&function(e){var t;return"ATR"===(null===(t=e.stateForAlert().styleInputs)||void 0===t?void 0:t.style)}(n))return i.AlertEditorAbortReason.MainSeriesIsATR;if("create_alert"===r&&n&&function(e){return e.isInReplay()}(n))return i.AlertEditorAbortReason.MainSeriesIsInReplay;if("create_alert"===r&&n&&function(e){const t=e.symbolInfo();return null!==t&&(0,a.isEconomicsSymbol)(t)}(n))return i.AlertEditorAbortReason.SymbolIsEconomics;const o=n?n.interval():l.linking.interval.value();return"create_alert"!==r||(0,c.canPlaceAlertOnResolution)(o)?null:i.AlertEditorAbortReason.UnsupportedResolution}function v(e){return e.status()===s.STATUS_OFFLINE}function b(e,t){if(y.has(e))return;y.add(e);const n=()=>y.delete(e),s=function(e){return new Map([[i.AlertEditorAbortReason.UnsupportedResolution,"alertsOnSeconds"]]).get(e)||null}(e);if(s)return void(0,d.reloginOrGoPro)({feature:s,actionAfterClose:n});const a=function(e,t){const n=r.t("Oops!"),o=r.t("Alert editor could not be initialized"),s=r.t("Ok");return new Map([[i.AlertEditorAbortReason.AlertsMaintenance,{title:r.t("Alerts maintenance"),text:r.t("We are doing some brief daily maintenance. Alerts will be back really soon, thanks for your patience!"),buttonText:s}],[i.AlertEditorAbortReason.MainSeriesIsOffline,{title:n,text:("create_alert"===t?r.t("Cannot create an alert while offline"):r.t("Cannot edit an alert while offline"))+". "+r.t("Please check your internet connection")+".",buttonText:s}],[i.AlertEditorAbortReason.SymbolIsInvalid,{title:n,text:"create_alert"===t?r.t("Can't create alert on invalid symbol"):r.t("Can't edit alert on invalid symbol"),buttonText:s}],[i.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted,{title:r.t("Both the currency and the unit have been converted!"),text:"create_alert"===t?r.t("It's not currently possible to create alerts on such a scale."):r.t("It's not currently possible to edit alerts on such a scale."),buttonText:r.t("Got it")}],[i.AlertEditorAbortReason.SymbolCurrencyConverted,{title:r.t("A converted currency has been detected!"),
text:"create_alert"===t?r.t("It's not currently possible to create alerts for this type of symbol."):r.t("It's not currently possible to edit alerts for this type of symbol."),buttonText:r.t("Got it")}],[i.AlertEditorAbortReason.SymbolUnitConverted,{title:r.t("A converted unit has been detected!"),text:"create_alert"===t?r.t("It's not currently possible to create alerts for this type of symbol."):r.t("It's not currently possible to edit alerts for this type of symbol."),buttonText:r.t("Got it")}],[i.AlertEditorAbortReason.SymbolIsEconomics,{title:r.t("Dang-it – Wrong symbol type!"),text:r.t("Alerts aren't available right now for economics symbols."),buttonText:r.t("Got it")}],[i.AlertEditorAbortReason.MainSeriesIsATR,{title:r.t("Alert cannot be set on an ATR-based chart"),text:r.t("Your alert won't trigger the way you expect it to! Inputs for ATR-based charts are recalculated each time you open a chart and are generally dependent on time. Please use the traditional chart type to set an alert with a static box size."),buttonText:s}],[i.AlertEditorAbortReason.MainSeriesIsInReplay,{title:r.t("Oops – Replay Mode!"),text:r.t("Alerts are not currently available in replay mode."),buttonText:r.t("Got it")}]]).get(e)||{title:n,text:o,buttonText:s}}(e,t);(0,o.showWarning)({...a,onClose:n})}const y=new Set;function m(e){return new Promise(t=>{if(!v(e))return void t();const n=()=>{v(e)||(e.onStatusChanged().unsubscribe(null,n),t())};e.onStatusChanged().subscribe(null,n)})}},95786:(e,t,n)=>{"use strict";n.d(t,{invokeAlertEditor:()=>d,invokeAlertEditorWithOnlineSeries:()=>p});var r=n(17455),o=n(20358),i=n(92939),s=n(21270),a=n(11905),l=n(96329),u=n(78341);const c=(0,a.getLogger)("Alerts.Price.InvokeAlertEditor");function d(e){u.alertsMaintenanceTracker.sync();const t=(0,r.shouldAbortAlertEditor)(e);if(null!==t)return t!==i.AlertEditorAbortReason.IsAlreadyPresent&&(0,r.showAbortExplainingDialog)(t,(0,r.getAlertDialogType)(e)),c.logWarn("Aborted: "+t),void(e.onAborted&&e.onAborted(t));const{unlockInvocation:s,abortSignal:a}=l.alertEditorInvocationHandler.lockInvocation(e);Promise.all([Promise.all([n.e(24377),n.e(26277),n.e(43309),n.e(68647),n.e(8935),n.e(93987),n.e(71402),n.e(85518),n.e(22723),n.e(96853),n.e(40968),n.e(65872),n.e(25192),n.e(32868),n.e(60273)]).then(n.t.bind(n,61587,19)),(0,o.getPriceAlertsDispatcher)(),h(e,s,a)]).then(e=>{const[t,n,r]=e;new t.AlertEditor(n,r)},s)}function h(e,t,n){return(e.series?(0,s.hasUserAccessToDataSource)(e.series):Promise.resolve(!0)).then(r=>{const o=e.onDestroy,i={...e,abortSignal:n,onDestroy:()=>{t(),o&&o()}};return r||(delete i.series,delete i.value),i})}function p(e){e.dataSourceHub?(0,r.ensureSeriesIsNotOffline)(e.dataSourceHub.mainSeries()).then(()=>{d(e)}):d(e)}},51728:(e,t,n)=>{"use strict";n.d(t,{createLayout:()=>s,layoutInitialSizingState:()=>a});var r=n(3308),o=n(88537);function i(e,t,n){const r=new Set;if("number"==typeof e)return r.add(e),{indices:r,smallestIndex:e,sizer:e=>e,splitters:()=>[],resizeApplier:(e,t,n,r,o)=>o,syncSublayoutsBySplitter:(e,t)=>t}
;const s=e[0],a=e.slice(1).map(e=>i(e,t));let l=1/0;for(const e of a)for(const t of Array.from(e.indices))t<l&&(l=t),r.add(t);const u=(e,t,n,r,o,i,s,a)=>{const l="h"===s?e.width:e.height;let u,c,d;if(a){const e=t*n+r*l;u=Math.round(e),c=t===i-1?l-u-1:Math.round(e+o*l)-u}else{const e=(l-(i-1)*n)/i,r=t*(e+n);u=Math.round(r),c=Math.round(r+e)-u}return d="h"===s?{top:e.top,left:e.left+u,height:e.height,width:c}:{top:e.top+u,left:e.left,height:c,width:e.width},d},c=(e,t,n,r,o,i,s)=>{if("number"==typeof n)return[];const a=n[0],l=n.slice(1);return l.reduce((n,d,h)=>{var p;const f=null==s?void 0:s[h],v=null!==(p=null==f?void 0:f.percent)&&void 0!==p?p:1/l.length,b=u(e,h,t,n.sumOfCoeffsBefore,v,l.length,a,s),y=n.sumOfCoeffsBefore+v;if(h<l.length-1){const e=`${i}-${r}-${h}-${a}`;let t;t="v"===a?{left:b.left,top:b.top+b.height-6+1,width:b.width,height:12}:{left:b.left+b.width-6+1,top:b.top,width:12,height:b.height};const s={level:r,orientation:a,indexes:[...o,h],metrics:t,className:e};n.splitters.push(s)}return Array.isArray(d)?{splitters:n.splitters.concat(c(b,t,d,r+1,[...o,h],i,null==f?void 0:f.substate)),sumOfCoeffsBefore:y}:{splitters:n.splitters,sumOfCoeffsBefore:y}},{splitters:[],sumOfCoeffsBefore:0}).splitters};return{indices:r,smallestIndex:l,sizer:(e,t,n,r,o)=>{let i,l,c,d=0,h=0,p=0;for(let e=0;e<a.length;e++){const r=a[e];r.smallestIndex>=n||(r.indices.has(t)&&(i=r,c=null==o?void 0:o[e].substate,o&&(p=o[e].percent),l=d),d++,o&&0===p&&(h+=o[e].percent))}const f=u(e,l,r,h,p,d,s,o);return i.sizer(f,t,n,r,c)},splitters:(t,n,r)=>c(t,n,e,0,[],"",r),resizeApplier:(t,n,r,i,a,l)=>function e(t,n,r,i,a,l,c,d){if("number"==typeof i)return l;const h=i.slice(1),p=[0];for(let e=0;e<h.length;e++)p.push(p[p.length-1]+l[e].percent);if(c<a.level)return h.map((i,f)=>{var v;const b=null==l?void 0:l[f];if("number"==typeof i)return b;if(!d&&f!==a.indexes[c])return b;const y=null!==(v=null==b?void 0:b.percent)&&void 0!==v?v:1/h.length,m=u(t,f,n,p[f],y,h.length,s,l);return{percent:b.percent,substate:e(m,n,r,i,a,(0,o.ensureDefined)(b.substate),c+1,d)}});{const e=i[0];if(e!==a.orientation)return l;const n=a.indexes[c],o="v"===e?t.height:t.width,s=r/o,u=l[n].percent+l[n+1].percent;return l[n].percent+=s,l[n].percent=Math.min(u-.05,Math.max(.05,l[n].percent)),l[n+1].percent-=s,l[n+1].percent=Math.min(u-.05,Math.max(.05,l[n+1].percent)),l}}(t,n,r,e,i,a,0,l),syncSublayoutsBySplitter:function(t,n){const r=function e(t,n){if(1===t.length)return n;{const r=(0,o.ensureDefined)(n[t[0]].substate);return e(t.slice(1),r)}}(t.indexes,n);return function e(t,n,r,i,s){if("number"==typeof t)return r;const a=t.slice(1);return s<n.level?a.map((t,a)=>{const l=null==r?void 0:r[a];return"number"==typeof t?l:{percent:l.percent,substate:e(t,n,(0,o.ensureDefined)(l.substate),i,s+1)}}):(r.forEach((e,t)=>e.percent=i[t].percent),r)}(e,t,n,r,0)}}}function s(e,t,n){const r=i(e,t);return{title:n,count:r.indices.size,sizer:r.sizer,splitters:r.splitters,resizeApplier:r.resizeApplier,syncSublayoutsBySplitter:r.syncSublayoutsBySplitter,expression:e,layoutType:t}}function a(e){
return function e(t){return t.map(n=>{if((0,r.default)(n))return{percent:1/t.length};{const r=n.slice(1);return{percent:1/t.length,substate:e(r)}}})}(e.slice(1))}},67608:(e,t,n)=>{"use strict";n.d(t,{layouts:()=>a,isMultipleLayout:()=>l});var r=n(38069),o=n(51728);const i={s:{title:"1 chart",count:1,layoutType:"s",sizer:(e,t)=>{if(0!==t)throw new RangeError("invalid index");return e},splitters:()=>[],resizeApplier:(e,t,n,r,o)=>o,syncSublayoutsBySplitter:(e,t)=>t,expression:["h",0]}};let s;s={"2h":(0,o.createLayout)(r["2h"],"2h","2-up horizontal"),"2v":(0,o.createLayout)(r["2v"],"2v","2-up vertical"),"2-1":(0,o.createLayout)(r["2-1"],"2-1","2 at top and 1 at bottom"),"1-2":(0,o.createLayout)(r["1-2"],"1-2","1 at top and 2 at bottom"),"3s":(0,o.createLayout)(r["3s"],"3s","3-up stacked"),"3r":(0,o.createLayout)(r["3r"],"3r","3-up stacked left"),"3h":(0,o.createLayout)(r["3h"],"3h","3-up horizontal"),"3v":(0,o.createLayout)(r["3v"],"3v","3-up vertical"),4:(0,o.createLayout)(r[4],"4","4-up"),"4h":(0,o.createLayout)(r["4h"],"4h","4-up horizontal"),"4v":(0,o.createLayout)(r["4v"],"4v","4-up vertical"),"4s":(0,o.createLayout)(r["4s"],"4s","4-up stacked"),"2-2":(0,o.createLayout)(r["2-2"],"2-2","2 at top and 2 at bottom"),"1-3":(0,o.createLayout)(r["1-3"],"1-3","1 at top and 3 at bottom"),"1-4":(0,o.createLayout)(r["1-4"],"1-4","1 at top and 4 at bottom"),"5s":(0,o.createLayout)(r["5s"],"5s","5-up stacked"),6:(0,o.createLayout)(r[6],"6","6-up"),"6c":(0,o.createLayout)(r["6c"],"6c","6-up in two columns"),8:(0,o.createLayout)(r[8],"8","8-up"),"8c":(0,o.createLayout)(r["8c"],"8c","8-up in two columns")};const a={...i,...s};function l(e){return!function(e){return"s"===e}(e)}},89468:(e,t,n)=>{"use strict";n.d(t,{parseIntervalValue:()=>l,intervalIsSupported:()=>u,canShowSpreadActions:()=>c,globalKeypressMatches:()=>d});var r=n(11688),o=n(64019),i=n(83912),s=n(73044),a=n(97128);new RegExp("^"+a.types.QUANDL,"i");function l(e){let t;t=/^[,\s]*(^[1-9][0-9]*)?\s*([hdwmsr]?)\s*$/i;const n=t.exec(e)||[],r=~~n[1],o=n[2]&&n[2].toUpperCase()||null,i={qty:!r&&o?1:r,unit:o};return i.error=!r&&!o,i.intraday=!(i.error||i.unit&&"H"!==i.unit&&"S"!==i.unit&&"T"!==i.unit),i}function u(e){if(r.enabled("allow_supported_resolutions_set_only")){const t=s.Interval.normalize(e);return null!==t&&(0,o.isAvailable)(t)}{const t=l(e);if(t.error)return!1;if(t.intraday)return i.linking.intraday.value();{const e=i.linking.supportedResolutions.value();return!e||null!==t.unit&&!!~e.indexOf(t.unit)}}}function c(){let e=!1;return e="cme"!==window.TradingView.widgetCustomer&&"bovespa"!==window.TradingView.widgetCustomer,e}function d(e){if(e.ctrlKey)return!1;if(e.metaKey)return!1;if(!e.charCode)return!1;if(!e.which||e.which<=32)return!1;if(null!==e.target&&/^(input|textarea)$/i.test(e.target.tagName))return!1;{const e=n.c[37225];if(e&&e.exports.isOpenedModals())return!1}return!0}},87545:(e,t,n)=>{"use strict";function r(){
return Promise.all([n.e(69129),n.e(82888),n.e(48463),n.e(25113),n.e(34956),n.e(15998),n.e(7427),n.e(53466),n.e(63562),n.e(63975),n.e(87836),n.e(77962),n.e(72485),n.e(85617),n.e(63921),n.e(98371),n.e(3520),n.e(93037),n.e(87670),n.e(88740),n.e(54104),n.e(53750),n.e(62853),n.e(26149),n.e(71577),n.e(76251),n.e(10307),n.e(41654),n.e(39859),n.e(99997),n.e(87995),n.e(97974),n.e(69397),n.e(93921),n.e(29594),n.e(39521),n.e(3306),n.e(64806),n.e(21754)]).then(n.bind(n,91406))}n.d(t,{loadNewSymbolSearch:()=>r})},96329:(e,t,n)=>{"use strict";n.d(t,{alertEditorInvocationHandler:()=>l});var r=n(62325),o=n.n(r),i=n(17455),s=n(88537);class a{constructor(){this._state=new(o())(!1)}subscribe(e){this._state.subscribe(e)}unsubscribe(e){this._state.unsubscribe(e)}value(){return this._state.value()}abort(){this._state.setValue(!0)}}const l=new class{constructor(){this._dialogInvocations=new(o())(new Map)}getDialogInvocations(){return this._dialogInvocations}isAllowedToInvoke(e){return e.silent||!this._dialogInvocations.value().has(u(e))}lockInvocation(e){if(e.silent)return{unlockInvocation:()=>{}};const t=u(e),n=new a,r=new Map(this._dialogInvocations.value());return r.set(t,n),this._dialogInvocations.setValue(r),{abortSignal:n,unlockInvocation:()=>{const e=new Map(this._dialogInvocations.value());e.delete(t),this._dialogInvocations.setValue(e)}}}};function u(e){return"create_alert"===(0,i.getAlertDialogType)(e)?-1:(0,s.ensureDefined)(e.alert).id}},78341:(e,t,n)=>{"use strict";n.d(t,{alertsMaintenanceTracker:()=>s});var r=n(62325),o=n.n(r),i=n(25226);const s=new class{constructor(){this._state=new(o())((0,i.isFeatureEnabled)("alerts-maintenance"))}value(){return this._state.value()}subscribe(e){this._state.subscribe(e)}unsubscribe(e){this._state.unsubscribe(e)}sync(){this._state.setValue((0,i.isFeatureEnabled)("alerts-maintenance"))}}},21270:(e,t,n)=>{"use strict";function r(e){return i().then(t=>t.hasUserAccessToDataSource(e))}function o(e){return i().then(t=>t.filterAccessibleDataSources(e))}n.d(t,{hasUserAccessToDataSource:()=>r,filterAccessibleDataSources:()=>o});const i=()=>Promise.all([n.e(15517),n.e(24377),n.e(26277),n.e(43309),n.e(8935),n.e(93987),n.e(71402),n.e(85518),n.e(22723),n.e(96853),n.e(40968),n.e(65872),n.e(25192),n.e(46305),n.e(83441)]).then(n.bind(n,72764))},17540:(e,t,n)=>{"use strict";n.d(t,{canPlaceAlertOnResolution:()=>s,isAlertResolutionEqual:()=>a});var r=n(73044),o=n(60507),i=n(33813);function s(e){return!r.Interval.isSeconds(e)||(0,o.enabled)(i.ProductFeatures.ALERTS_ON_SECONDS)}function a(e,t){return e.get("crossInterval")||r.Interval.isEqual(e.get("resolution"),t)}},37936:(e,t,n)=>{"use strict";n.d(t,{pushBackListener:()=>l,disable:()=>u,enable:()=>c});var r=n(95935);const o=[];let i=null;function s(e){for(let t=0;t<o.length;t++)if(o[t].name===e)return t;return-1}function a(e){if(!i)for(let t=o.length-1;t>=0&&!0!==o[t].func(e);t--);}function l(e,t){const n={name:e,func:t},r=s(n.name);r>-1&&o.splice(r,1),o.unshift(n)}function u(){return i?null:(i=(0,r.randomHashN)(4),i)}function c(e){
if(e!==i)throw Error("Lock id is outdated");i=null}window.addEventListener("keypress",a,!1)},63239:(e,t,n)=>{"use strict";function r(e){return o(e,null)}function o(e,t){const n=e.files&&e.files.length>0;if(!n&&t&&t.eventPhase>0)return i(t,e),Promise.resolve();if(!n){let t=!1;const n=n=>{n.stopImmediatePropagation(),i(n,e),t=!0};try{document.addEventListener("copy",n,!0),document.execCommand("copy")}finally{document.removeEventListener("copy",n,!0)}if(t)return Promise.resolve()}return async function(e){if(!navigator.clipboard||!navigator.clipboard.write||!window.ClipboardItem)throw new DOMException("ClipboardApi is not supported","NotSupportedError");const t={};for(const n of e.files||[])t[n.type]=n;e.text&&(t["text/plain"]=e.text);e.html&&(t["text/html"]=e.html);return navigator.clipboard.write([new window.ClipboardItem(t)])}(e)}function i(e,t){e.preventDefault();const n=e.clipboardData;t.text&&n.setData("text/plain",t.text),t.html&&n.setData("text/html",t.html)}async function s(e,t){if("text/plain"===t&&!navigator.clipboard.write){const t=await e;return navigator.clipboard.writeText(await t.text())}if(!navigator.clipboard||!navigator.clipboard.write||!window.ClipboardItem)throw new DOMException("ClipboardApi is not supported","NotSupportedError");let n=null;try{n=new window.ClipboardItem({[t]:e})}catch(r){n=new window.ClipboardItem({[t]:await e})}if(n)return navigator.clipboard.write([n]);throw new Error("ClipboardApi is not supported")}n.r(t),n.d(t,{copyToClipboard:()=>r,writeImpl:()=>o,writePromiseUsingApi:()=>s})},52279:(e,t,n)=>{"use strict";n.d(t,{reloginOrGoPro:()=>h,runOrGoPro:()=>d,runOrGoProWithoutSync:()=>c});var r=n(26225),o=n(29588),i=n(60507),s=n(33813);function a(e,t,n){return t.value||(0,i.enabled)(e,n)}function l(e,t,n){switch(e){case s.ProductFeatures.SCREENER_INTERVALS:return function(e,t){const n=(0,i.getConfig)(s.ProductFeatures.SCREENER_INTERVALS,t);return!(!n||!n.interval)&&n.interval.includes(e.interval)}(t,n);case s.ProductFeatures.SCREENER_AUTO_REFRESH:return a(s.ProductFeatures.SCREENER_AUTO_REFRESH,t,n);case s.ProductFeatures.ALERTS_NO_EXPIRATION:return a(s.ProductFeatures.ALERTS_NO_EXPIRATION,t,n);default:return(0,i.enabled)(e,n)}}var u=n(31039);function c(e,t,n,r){l(t,r)?e():(0,o.createGoProDialog)(n)}async function d(e,t,n,o={}){const i=window.is_authenticated;window.is_authenticated&&window.user.is_pro&&await(0,r.syncUserData)("gopro"),i===window.is_authenticated?c(e,t,n,o):(0,u.showSignModal)({source:n.goproSource,feature:n.feature,signinSuccess:e})}async function h(e){const t=window.is_authenticated;window.is_authenticated&&window.user.is_pro&&await(0,r.syncUserData)("gopro"),t===window.is_authenticated?(0,o.createGoProDialog)(e):(0,u.showSignModal)({source:e.goproSource,feature:e.feature})}},26225:(e,t,n)=>{"use strict";n.d(t,{syncUserData:()=>u,syncUserConversionData:()=>c});var r=n(11905),o=n(45848),i=n(86674);const s=(0,r.getLogger)("User.Sync");function a(e){return`${e}_${window.user&&window.user.username||""}`}function l(e,t,n){n!==window.user.pro_plan&&(window.user.pro_plan=n,
window.user.is_pro=Boolean(n),(0,o.trackEvent)("Sync User Data","Different Pro Plan",a(e))),t!==window.is_authenticated&&(window.is_authenticated=t,window.loginStateChange.fire(),(0,o.trackEvent)("Sync User Data","Different Auth",a(e)))}async function u(e){try{const t=await n.e(90254).then(n.bind(n,50305));l(e,!0,(await t.getMe()).pro_plan)}catch(t){!function(e,t){"not_authenticated"===t.type?l(e,!1,void 0):s.logError(t.message)}(e,t)}}async function c(e){const t=await(0,i.fetch)("/gopro/"),n=await t.json();return l(e,n.is_authenticated,n.user.pro_plan),n}},87492:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M13.111 18.5H10.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-8.389z"/><path d="M18.5 20v1.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H8"/></g></svg>'},38069:e=>{"use strict";e.exports=JSON.parse('{"4":["v",["h",0,2],["h",1,3]],"6":["v",["h",0,2,4],["h",1,3,5]],"8":["v",["h",0,2,4,6],["h",1,3,5,7]],"2h":["h",0,1],"2v":["v",0,1],"2-1":["v",["h",0,2],1],"3s":["h",0,["v",1,2]],"3h":["h",0,1,2],"3v":["v",0,1,2],"1-2":["v",0,["h",1,2]],"3r":["h",["v",0,1],2],"4h":["h",0,1,2,3],"4v":["v",0,1,2,3],"4s":["h",0,["v",1,2,3]],"1-3":["v",0,["h",1,2,3]],"2-2":["v",["h",0,1],["v",2,3]],"1-4":["v",0,["h",1,2,3,4]],"5s":["h",0,["v",1,2,3,4]],"6c":["v",["h",0,1],["h",2,3],["h",4,5]],"8c":["v",["h",0,1],["h",2,3],["h",4,5],["h",6,7]],"s":0}')}}]);