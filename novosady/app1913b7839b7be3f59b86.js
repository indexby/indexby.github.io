!function(e){function t(t){for(var l,c,u=t[0],o=t[1],i=t[2],f=0,s=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&s.push(n[c][0]),n[c]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(d&&d(t);s.length;)s.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,u=1;u<a.length;u++){var o=a[u];0!==n[o]&&(l=!1)}l&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var l={},n={1:0},r=[];function c(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=l,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)c.d(a,l,function(t){return e[t]}.bind(null,l));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var d=o;r.push([81,0,3]),a()}({127:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0)),r=a(61),c=l(a(47)),u=l(a(33)),o=l(a(62)),i=l(a(63));t.default=function(e){var t=e.hits;return n.default.createElement(n.default.Fragment,null,n.default.createElement("table",{className:"table table-striped"},n.default.createElement("thead",{className:"desktop-version"},n.default.createElement("tr",null,n.default.createElement("th",null),n.default.createElement("th",null,"Церковь"),n.default.createElement("th",null,"Дата"),n.default.createElement("th",{className:"born-name-tr"},"Родился"),n.default.createElement("th",null,"Родители"),n.default.createElement("th",null,"Восприемники"),n.default.createElement("th",null,"Заметки"),n.default.createElement("th",null,"Источник"))),n.default.createElement("tbody",{id:"list-of-res"},t.map((function(e,t){var a,l,d,f=e.church,s=e.fod,m=e.page,h=e.year,p=e.month,v=void 0===p?"":p,E=e.born,g=e.baptism,b=e.notes,_=e.parants_note,y=e.godparents_note,w=(e.churchTitle,e.source_link),k=e.archive,N=(e.churchFromTable,e._highlightResult),M="",x="",O=h,S=h;v.length>3?(M=v.slice(0,3),x=v.slice(-3),"DEC"===M&&"JAN"===x&&(O=h-1,S=h)):(M=v,x=v);var C="Рождение: ".concat(E," ").concat(r.monthMapping.get(M)," ").concat(O),j="Крещение: ".concat(g," ").concat(r.monthMapping.get(x)," ").concat(S),P="".concat(C,"\n\n ").concat(j),T="".concat(k,", Ф-О-Д: ").concat(s,", стр. ").concat(m,"; ").concat(r.churchesMapping.get(f)||f),I='<i class="mobile-version">Родители: </i><span>'.concat(null===(a=null==N?void 0:N.field2)||void 0===a?void 0:a.value,"</span>"),H='<i class="mobile-version">Крёстные: </i><span>'.concat(null===(l=null==N?void 0:N.field3)||void 0===l?void 0:l.value,"</span>");return n.default.createElement("tr",{key:t,className:"born-item"},n.default.createElement("td",null,n.default.createElement("button",{className:"btn btn-light",onClick:function(t){return function(e,t,a){t.year,t.month,t.born,t.church;var l=t.field1,n=t.field2,r=t.field3,c=a.date_born_note,u=a.date_baptism_note,o=a.church_note;try{navigator.clipboard.writeText("\n".concat(o,"\n").concat(c,"\n").concat(u,"\nИмя родившегося: ").concat(l,"\nРодители: ").concat(n,"\nКрестные: ").concat(r,"\n            ").trim());var i=new bootstrap.Tooltip(e,{title:"Скопировано",placement:"right"});i.show(),setTimeout((function(){return i.dispose()}),300)}catch(e){console.error("Failed to copy: ",e)}}(t.target,e,{date_born_note:C,date_baptism_note:j,church_note:T})}},"Copy"),n.default.createElement("span",{className:"feedback-td"},n.default.createElement(i.default,{hit:e}))),n.default.createElement("td",{className:"church-td"},n.default.createElement("i",{className:"mobile-version"},"Церковь: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:T,value:r.churchesMapping.get(f)||f,dotsWidth:4}))),n.default.createElement("td",{className:"date-note"},n.default.createElement("i",{className:"mobile-version"},"Дата: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:P,value:h,dotsWidth:4}))),n.default.createElement("td",{className:"born-name-tr"},n.default.createElement("i",{className:"mobile-version"},"Имя младенца: "),n.default.createElement("span",{dangerouslySetInnerHTML:{__html:null===(d=null==N?void 0:N.field1)||void 0===d?void 0:d.value}})),n.default.createElement("td",null,_?n.default.createElement(o.default,{note:_,value:I}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:I}})),n.default.createElement("td",null,y?n.default.createElement(o.default,{note:y,value:H}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:H}})),n.default.createElement("td",{className:"note-info"},b?n.default.createElement(c.default,{placement:"left",overlay:n.default.createElement(u.default,{id:"tooltip-left"},b)},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},n.default.createElement("g",{id:"Сгруппировать_186","data-name":"Сгруппировать 186",transform:"translate(-376 -747)"},n.default.createElement("g",{id:"Эллипс_80","data-name":"Эллипс 80",transform:"translate(376 747)",fill:"none",stroke:"#0067b9","stroke-width":"2"},n.default.createElement("circle",{cx:"10",cy:"10",r:"10",stroke:"none"}),n.default.createElement("circle",{cx:"10",cy:"10",r:"9",fill:"none"})),n.default.createElement("g",{id:"Сгруппировать_157","data-name":"Сгруппировать 157",transform:"translate(1879.223 -9641.982) rotate(180)"},n.default.createElement("g",{id:"Сгруппировать_145","data-name":"Сгруппировать 145",transform:"translate(1492.199 -10404.029)"},n.default.createElement("path",{id:"Контур_129","data-name":"Контур 129",d:"M6.5,9.677a.912.912,0,0,1-.913-.913V4.738a.913.913,0,1,1,1.826,0V8.764A.912.912,0,0,1,6.5,9.677Z",transform:"translate(-5.585 -3.825)",fill:"#0067b9"})),n.default.createElement("g",{id:"Сгруппировать_146","data-name":"Сгруппировать 146",transform:"translate(1492.016 -10396.144)"},n.default.createElement("circle",{id:"Эллипс_79","data-name":"Эллипс 79",cx:"1.095",cy:"1.095",r:"1.095",fill:"#0067b9"})))))):null),n.default.createElement("td",null,w&&n.default.createElement("a",{target:"_blank",href:w},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-link",viewBox:"0 0 16 16"},n.default.createElement("path",{d:"M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z",fill:"blue"}),n.default.createElement("path",{d:"M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z",fill:"blue"})))))})))))}},131:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0)),r=a(61),c=l(a(47)),u=l(a(33)),o=l(a(62)),i=l(a(63));t.default=function(e){var t=e.hits;return n.default.createElement(n.default.Fragment,null,n.default.createElement("table",{className:"table table-striped"},n.default.createElement("thead",{className:"desktop-version"},n.default.createElement("tr",null,n.default.createElement("th",null),n.default.createElement("th",null,"Церковь"),n.default.createElement("th",null,"Дата"),n.default.createElement("th",null,"Жених"),n.default.createElement("th",{className:"age-tr"},"Его возраст"),n.default.createElement("th",null,"Невеста"),n.default.createElement("th",{className:"age-tr"},"Ее возраст"),n.default.createElement("th",null,"Кто были попечители"),n.default.createElement("th",null,"Заметки"),n.default.createElement("th",null,"Источник"))),n.default.createElement("tbody",{id:"list-of-res"},t.map((function(e,t){var a,l,d,f=e.church,s=e.page,m=e.fod,h=e.year,p=e.month,v=e.day,E=e.husband_age,g=e.wife_age,b=e.notes,_=e.husband_note,y=e.wife_note,w=e.trustees_note,k=(e.churchTitle,e.source_link),N=e.archive,M=(e.churchFromTable,e._highlightResult),x='<i class="mobile-version">Жених: </i><span>'.concat(null===(a=null==M?void 0:M.field1)||void 0===a?void 0:a.value,"</span>"),O='<i class="mobile-version">Невеста: </i><span>'.concat(null===(l=null==M?void 0:M.field2)||void 0===l?void 0:l.value,"</span>"),S='<i class="mobile-version">Попечители: </i><span>'.concat(null===(d=null==M?void 0:M.field3)||void 0===d?void 0:d.value,"</span>"),C="".concat(v," ").concat(r.monthMapping.get(p)," ").concat(h),j="".concat(N,", Ф-О-Д: ").concat(m,", стр. ").concat(s,"; ").concat(r.churchesMapping.get(f)||f);return n.default.createElement("tr",{key:t,className:"marriage-item"},n.default.createElement("td",null,n.default.createElement("button",{className:"btn btn-light",onClick:function(t){return function(e,t,a){t.church;var l=t.year,n=t.month,c=t.day,u=t.field1,o=t.husband_age,i=t.field2,d=t.wife_age,f=t.field3,s=a.church_note;try{navigator.clipboard.writeText("\n".concat(s,"\nДата: ").concat(c," ").concat(r.monthMapping.get(n)," ").concat(l," \nЖених: ").concat(u,"\nВозраст жениха: ").concat(o,"\nНевеста: ").concat(i,"\nВозраст невесты: ").concat(d,"\nПопечители: \n").concat(f,"\n            ").trim());var m=new bootstrap.Tooltip(e,{title:"Скопировано",placement:"right"});m.show(),setTimeout((function(){return m.dispose()}),300)}catch(e){console.error("Failed to copy: ",e)}}(t.target,e,{church_note:j})}},"Copy"),n.default.createElement("span",{className:"feedback-td"},n.default.createElement(i.default,{hit:e}))),n.default.createElement("td",{className:"church-td"},n.default.createElement("i",{className:"mobile-version"},"Церковь: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:j,value:r.churchesMapping.get(f)||f,dotsWidth:4}))),n.default.createElement("td",{className:"date-note"},n.default.createElement("i",{className:"mobile-version"},"Дата: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:C,value:h,dotsWidth:4}))),n.default.createElement("td",null,_?n.default.createElement(o.default,{note:_,value:x}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:x}})),n.default.createElement("td",{className:"age-tr"},n.default.createElement("i",{className:"mobile-version"},"Жениху лет: "),n.default.createElement("span",null,E)),n.default.createElement("td",null,y?n.default.createElement(o.default,{note:y,value:O}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:O}})),n.default.createElement("td",{className:"age-tr"},n.default.createElement("i",{className:"mobile-version"},"Невесте лет: "),n.default.createElement("span",null,g)),n.default.createElement("td",null,w?n.default.createElement(o.default,{note:w,value:S}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),n.default.createElement("td",{className:"note-info"},b?n.default.createElement(c.default,{placement:"left",overlay:n.default.createElement(u.default,{id:"tooltip-left"},b)},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},n.default.createElement("g",{id:"Сгруппировать_186","data-name":"Сгруппировать 186",transform:"translate(-376 -747)"},n.default.createElement("g",{id:"Эллипс_80","data-name":"Эллипс 80",transform:"translate(376 747)",fill:"none",stroke:"#0067b9","stroke-width":"2"},n.default.createElement("circle",{cx:"10",cy:"10",r:"10",stroke:"none"}),n.default.createElement("circle",{cx:"10",cy:"10",r:"9",fill:"none"})),n.default.createElement("g",{id:"Сгруппировать_157","data-name":"Сгруппировать 157",transform:"translate(1879.223 -9641.982) rotate(180)"},n.default.createElement("g",{id:"Сгруппировать_145","data-name":"Сгруппировать 145",transform:"translate(1492.199 -10404.029)"},n.default.createElement("path",{id:"Контур_129","data-name":"Контур 129",d:"M6.5,9.677a.912.912,0,0,1-.913-.913V4.738a.913.913,0,1,1,1.826,0V8.764A.912.912,0,0,1,6.5,9.677Z",transform:"translate(-5.585 -3.825)",fill:"#0067b9"})),n.default.createElement("g",{id:"Сгруппировать_146","data-name":"Сгруппировать 146",transform:"translate(1492.016 -10396.144)"},n.default.createElement("circle",{id:"Эллипс_79","data-name":"Эллипс 79",cx:"1.095",cy:"1.095",r:"1.095",fill:"#0067b9"})))))):null),n.default.createElement("td",null,k&&n.default.createElement("a",{target:"_blank",href:k},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-link",viewBox:"0 0 16 16"},n.default.createElement("path",{d:"M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z",fill:"blue"}),n.default.createElement("path",{d:"M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z",fill:"blue"})))))})))))}},132:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0)),r=a(61),c=l(a(47)),u=l(a(33)),o=l(a(62)),i=l(a(63));t.default=function(e){var t=e.hits;return n.default.createElement(n.default.Fragment,null,n.default.createElement("table",{className:"table table-striped"},n.default.createElement("thead",{className:"desktop-version"},n.default.createElement("tr",null,n.default.createElement("th",null),n.default.createElement("th",null,"Церковь"),n.default.createElement("th",null,"Год"),n.default.createElement("th",null,"Кто умер"),n.default.createElement("th",null,"Возраст"),n.default.createElement("th",null,"От чего"),n.default.createElement("th",null,"Заметки"),n.default.createElement("th",null,"Источник"))),n.default.createElement("tbody",{id:"list-of-res"},t.map((function(e,t){var a,l,d=e.church,f=e.fod,s=e.page,m=e.year,h=e.month,p=e.died,v=e.buried,E=e.age,g=e.reason,b=e.notes,_=e.name_note,y=(e.churchTitle,e.source_link),w=e.archive,k=(e.churchFromTable,e._highlightResult),N="",M="",x=m,O=m;h.length>3?(N=h.slice(0,3),M=h.slice(-3),"DEC"===N&&"JAN"===M&&(x=m-1,O=m)):(N=h,M=h);var S="Умер: ".concat(p," ").concat(r.monthMapping.get(N)," ").concat(x),C="Похоронен: ".concat(v," ").concat(r.monthMapping.get(M)," ").concat(O),j="".concat(S,"\n\n ").concat(C),P="".concat(w,", Ф-О-Д: ").concat(f,", стр. ").concat(s,"; ").concat(r.churchesMapping.get(d)||d);return n.default.createElement("tr",{key:t,className:"died-item"},n.default.createElement("td",null,n.default.createElement("button",{className:"btn btn-light",onClick:function(t){return function(e,t,a){t.year,t.month,t.died;var l=t.field1,n=t.age,r=t.reason,c=(t.church,a.date_died_note),u=a.date_buried_note,o=a.church_note;try{navigator.clipboard.writeText("\n".concat(o,"\n").concat(c,"\n").concat(u,"\nКто умер: ").concat(l,"\nВозраст: ").concat(n,"\n").concat(r?"Причина смерти: ".concat(r):"","\n").trim());var i=new bootstrap.Tooltip(e,{title:"Скопировано",placement:"right"});i.show(),setTimeout((function(){return i.dispose()}),300)}catch(e){console.error("Failed to copy: ",e)}}(t.target,e,{date_died_note:S,date_buried_note:C,church_note:P})}},"Copy"),n.default.createElement("span",{className:"feedback-td"},n.default.createElement(i.default,{hit:e}))),n.default.createElement("td",{className:"church-td"},n.default.createElement("i",{className:"mobile-version"},"Церковь: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:P,value:r.churchesMapping.get(d)||d,dotsWidth:4}))),n.default.createElement("td",{className:"date-note"},n.default.createElement("i",{className:"mobile-version"},"Дата: "),n.default.createElement("span",null,n.default.createElement(o.default,{note:j,value:m,dotsWidth:4}))),n.default.createElement("td",null,_?n.default.createElement(o.default,{note:_,value:null===(a=null==k?void 0:k.field1)||void 0===a?void 0:a.value}):n.default.createElement("span",{dangerouslySetInnerHTML:{__html:null===(l=null==k?void 0:k.field1)||void 0===l?void 0:l.value}})),n.default.createElement("td",{className:"date-note"},n.default.createElement("i",{className:"mobile-version"},"Возраст: "),n.default.createElement("span",null,E)),n.default.createElement("td",null,g),n.default.createElement("td",{className:"note-info"},b?n.default.createElement(c.default,{placement:"left",overlay:n.default.createElement(u.default,{id:"tooltip-left"},b)},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},n.default.createElement("g",{id:"Сгруппировать_186","data-name":"Сгруппировать 186",transform:"translate(-376 -747)"},n.default.createElement("g",{id:"Эллипс_80","data-name":"Эллипс 80",transform:"translate(376 747)",fill:"none",stroke:"#0067b9","stroke-width":"2"},n.default.createElement("circle",{cx:"10",cy:"10",r:"10",stroke:"none"}),n.default.createElement("circle",{cx:"10",cy:"10",r:"9",fill:"none"})),n.default.createElement("g",{id:"Сгруппировать_157","data-name":"Сгруппировать 157",transform:"translate(1879.223 -9641.982) rotate(180)"},n.default.createElement("g",{id:"Сгруппировать_145","data-name":"Сгруппировать 145",transform:"translate(1492.199 -10404.029)"},n.default.createElement("path",{id:"Контур_129","data-name":"Контур 129",d:"M6.5,9.677a.912.912,0,0,1-.913-.913V4.738a.913.913,0,1,1,1.826,0V8.764A.912.912,0,0,1,6.5,9.677Z",transform:"translate(-5.585 -3.825)",fill:"#0067b9"})),n.default.createElement("g",{id:"Сгруппировать_146","data-name":"Сгруппировать 146",transform:"translate(1492.016 -10396.144)"},n.default.createElement("circle",{id:"Эллипс_79","data-name":"Эллипс 79",cx:"1.095",cy:"1.095",r:"1.095",fill:"#0067b9"})))))):null),n.default.createElement("td",null,y&&n.default.createElement("a",{target:"_blank",href:y},n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-link",viewBox:"0 0 16 16"},n.default.createElement("path",{d:"M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z",fill:"blue"}),n.default.createElement("path",{d:"M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z",fill:"blue"})))))})))))}},133:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(0);t.default=function(e,t){var a=(0,l.useState)(e),n=a[0],r=a[1];return(0,l.useEffect)((function(){var a=setTimeout((function(){r(e)}),t);return function(){clearTimeout(a)}}),[e]),n}},134:function(e,t,a){"use strict";var l=this&&this.__assign||function(){return(l=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(0));t.default=function(e){var t=e.children,a=e.theme,n=void 0===a?{}:a,c=l(l({},n),{color:n.color||"red",fontSize:n.fontSize||"11px",fontFamily:n.fontFamily||"var(--bs-font-sans-serif)",whiteSpace:n.whiteSpace||"nowrap",position:"relative",bottom:"100%",transform:"translate(-58%, -10px)"});return r.default.createElement("div",{style:c},t)}},61:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.monthMapping=t.churchesMapping=void 0;var l=new Map([["molyavka","Молявковская Михайловская церковь"],["sloveny","Словенинская Петропавловская церковь"],["bobr","Бобрская святителя Николая церковь"],["nizgolovo","Низголовская Иоанно-Предчетинская церковь"],["martinovo","Мартиновская Покрова Пресвятой Богородицы церковь"],["usaya","Усайская Покрова Пресвятой Богородицы церковь"],["hotino","Хотинская Святого Иосифа Обручника церковь"],["uhvala","Ухвальская Успения Пресвятой Богородицы церковь"],["pyshachi","Пышчаская Рождества Пресвятой Богородицы церковь"],["sokolovichi","Сокольская Покрова Пресвятой Богородицы (приписная) церковь"],["ploskoye","Плосковская Покрова Пресвятой Богородицы церковь"],["slobodka","Слободская церковь"],["obchuga","Обчугская Преображения Господня церковь"],["shiyka","Шийковская вмч. Георгия Победоносца цековь"],["plisa","Плисская Вознесения Господня церковь"],["pochaevichy","Почаевичcкая Покрова Пресвятой Богородицы церковь"],["esmony","Эсьмонская церковь"],["hudovo","Худовская Ильинская церковь, с. Худово"],["lisichino","Лисичинская Воздвижения Креста Господня церковь"],["Молявковская","Молявковская Михайловская церковь"],["Молявская","Молявковская Михайловская церковь"],["Словенинская","Словенинская Петропавловская церковь"],["Словенская","Словенинская Петропавловская церковь"],["Бобрская","Бобрская святителя Николая церковь"],["Низголовская","Низголовская Иоанно-Предчетинская церковь"],["Мартиновская","Мартиновская Покрова Пресвятой Богородицы церковь"],["Усайская","Усайская Покрова Пресвятой Богородицы церковь"],["Хотинская","Хотинская Святого Иосифа Обручника церковь"],["Ухвальская","Ухвальская Успения Пресвятой Богородицы церковь"],["Пышчаская","Пышчаская Рождества Пресвятой Богородицы церковь"],["Сокольская","Сокольская Покрова Пресвятой Богородицы (приписная) церковь"],["Плосковская","Плосковская Покрова Пресвятой Богородицы церковь"],["Слободская","Слободская церковь"],["Обчугская","Обчугская Преображения Господня церковь"],["Шийковская","Шийковская вмч. Георгия Победоносца цековь"],["Плисская","Плисская Вознесения Господня церковь"],["Почаевичcкая","Почаевичcкая Покрова Пресвятой Богородицы церковь"],["Эсьмонская","Эсьмонская церковь"],["Худовская","Худовская Ильинская церковь, с. Худово"],["Лисичинская","Лисичинская Воздвижения Креста Господня церковь"]]);t.churchesMapping=l;var n=new Map([["JAN","января"],["FEB","февраля"],["MAR","марта"],["APR","апреля"],["MAY","мая"],["JUN","июня"],["JUL","июля"],["AUG","августа"],["SEP","сентября"],["OCT","октября"],["NOV","ноября"],["DEC","декабря"]]);t.monthMapping=n},62:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0)),r=l(a(33)),c=l(a(47));t.default=function(e){var t=e.value,a=e.note,l=e.dotsWidth,u=void 0===l?7:l;return n.default.createElement(c.default,{placement:"auto",overlay:n.default.createElement(r.default,{id:"tooltip"},a)},n.default.createElement("span",null,n.default.createElement("div",{className:"tooltip-content-wrapper",style:{display:"flex"}},n.default.createElement("div",{className:"tooltip-value-wrapper",dangerouslySetInnerHTML:{__html:t}}),n.default.createElement("svg",{id:"Layer_1","data-name":"Layer 1",style:{width:"".concat(u,"px"),marginLeft:"5px",marginRight:"5px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 29.96 122.88"},n.default.createElement("path",{className:"cls-1",fill:"#212529",d:"M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"})))))}},63:function(e,t,a){"use strict";var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,l,n)}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(a(0)),o=a(0),i=c(a(153)),d=c(a(152)),f=c(a(151));t.default=function(e){var t=e.hit,a=(0,o.useState)(!1),l=a[0],n=a[1],r=(0,u.useRef)(),c=function(){return n(!1)};return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{className:"span-wrap",onClick:function(){return n(!0)}},u.default.createElement("svg",{fill:"#000000",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",width:"10px",height:"10px",viewBox:"0 0 973.1 973.1"},u.default.createElement("g",null,u.default.createElement("path",{d:"M502.29,788.199h-47c-33.1,0-60,26.9-60,60v64.9c0,33.1,26.9,60,60,60h47c33.101,0,60-26.9,60-60v-64.9\r\n                            C562.29,815,535.391,788.199,502.29,788.199z"}),u.default.createElement("path",{d:"M170.89,285.8l86.7,10.8c27.5,3.4,53.6-12.4,63.5-38.3c12.5-32.7,29.9-58.5,52.2-77.3c31.601-26.6,70.9-40,117.9-40\r\n                            c48.7,0,87.5,12.8,116.3,38.3c28.8,25.6,43.1,56.2,43.1,92.1c0,25.8-8.1,49.4-24.3,70.8c-10.5,13.6-42.8,42.2-96.7,85.9\r\n                            c-54,43.7-89.899,83.099-107.899,118.099c-18.4,35.801-24.8,75.5-26.4,115.301c-1.399,34.1,25.8,62.5,60,62.5h49\r\n                            c31.2,0,57-23.9,59.8-54.9c2-22.299,5.7-39.199,11.301-50.699c9.399-19.701,33.699-45.701,72.699-78.1\r\n                            C723.59,477.8,772.79,428.4,795.891,392c23-36.3,34.6-74.8,34.6-115.5c0-73.5-31.3-138-94-193.4c-62.6-55.4-147-83.1-253-83.1\r\n                            c-100.8,0-182.1,27.3-244.1,82c-52.8,46.6-84.9,101.8-96.2,165.5C139.69,266.1,152.39,283.5,170.89,285.8z"})))),u.default.createElement(f.default,{show:l,onHide:c},u.default.createElement(f.default.Header,{closeButton:!0},u.default.createElement(f.default.Title,null,"Что исправить?")),u.default.createElement(f.default.Body,null,u.default.createElement(d.default,{ref:r,id:"form-feedback",onSubmit:function(){return console.log("onSubmit")}},u.default.createElement(d.default.Group,{className:"mb-3",controlId:"email",hidden:!0},u.default.createElement(d.default.Control,{type:"email",value:localStorage.getItem("user")})),u.default.createElement(d.default.Group,{className:"mb-3",controlId:"objectID",hidden:!0},u.default.createElement(d.default.Control,{type:"textarea",value:t.objectID})),u.default.createElement(d.default.Group,{className:"mb-3",controlId:"itemfeedback"},u.default.createElement(d.default.Control,{as:"textarea",rows:4})))),u.default.createElement(f.default.Footer,null,u.default.createElement(i.default,{variant:"secondary",onClick:c},"Закрыть"),u.default.createElement(i.default,{type:"submit",variant:"primary",onClick:function(){if(c(),r.current){var e={};for(var t in r.current){var a=r.current[t];a&&a.value&&(e[a.id]=a.value)}var l="".concat(e.email,"\n\n`").concat(e.objectID,"`\n\n").concat(JSON.stringify(e.itemfeedback));fetch("https://api.telegram.org/bot".concat("1292036998:AAFkWJVt6GuU3-pyreWE-Xa8LMp4y9d0WgE","/sendMessage?chat_id=").concat("162676802","&parse_mode=").concat("Markdown","&disable_web_page_preview=").concat(!0,"&text=").concat(encodeURIComponent(l)))}}},"Отправить"))))}},81:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(13)),r=l(a(0)),c=l(a(86));new FontFace("Monomakh Unicode","url(./MonomakhUnicode.otf)").load().then((function(e){document.fonts.add(e),console.log("Font loaded")}));var u=document.getElementById("root");n.default.render(r.default.createElement(c.default,null),u)},86:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0)),r=l(a(87)),c={apiKey:"AIzaSyCHXKjo_pKln0fawgf3z3JKGOaLdqN8nZw",authDomain:"metric-auth.firebaseapp.com",projectId:"metric-auth",storageBucket:"metric-auth.appspot.com",messagingSenderId:"837219519747",appId:"1:837219519747:web:2ab78fdd885db7a2d9ad36"},u=l(a(98));r.default.initializeApp(c);t.default=function(){var e=n.default.useState(!1),t=e[0],a=e[1];return t?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"login-cmp"},n.default.createElement("button",{className:"btn btn-primary type-table",onClick:function(){var e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),l=new r.default.auth.GoogleAuthProvider,n=r.default.app().auth();n.setPersistence(r.default.auth.Auth.Persistence.SESSION).then((function(){n.signInWithPopup(l).then((function(l){l.additionalUserInfo.isNewUser?(l.user.delete(),a(!1),console.info("There no access!")):(localStorage.setItem("user",l.user.email),a(!0));var n=l.user,r=n.displayName,c=n.email,u=n.photoURL,o="#".concat(c.split("@")[0].replace(/\./g,"")),i=encodeURIComponent("METRICS\n*".concat(r,"*\n").concat(c,"\n[photoURL](").concat(u,") ").concat(e,"x").concat(t,"\n").concat(o));fetch("https://api.telegram.org/bot".concat("1292036998:AAFkWJVt6GuU3-pyreWE-Xa8LMp4y9d0WgE","/sendMessage?chat_id=").concat("162676802","&parse_mode=").concat("Markdown","&disable_web_page_preview=").concat(!0,"&text=").concat(i))})).catch((function(e){console.error(e)}))}))}},"Google"),n.default.createElement("div",{className:"book-title"},"Метрическаѧ кни́га"),n.default.createElement("div",{className:"book-description"},"​длѧ​ записи ​родившихсѧ​, ​бракомъ​ сочета́вшихсѧ ​и҆​ ᲂу҆ме́ршихъ")),n.default.createElement("div",{className:"login-cmp"},n.default.createElement("a",{className:"btn btn-primary type-table",href:"/metrics/map"},"Карта"))):n.default.createElement(u.default,null)}},98:function(e,t,a){"use strict";var l=this&&this.__assign||function(){return(l=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var l,n=0,r=t.length;n<r;n++)!l&&n in t||(l||(l=Array.prototype.slice.call(t,0,n)),l[n]=t[n]);return e.concat(l||Array.prototype.slice.call(t))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r(a(0)),u=r(a(149)),o=r(a(150));a(125);var i=r(a(127)),d=r(a(131)),f=r(a(132)),s=r(a(133)),m=r(a(134)),h=a(73)("1SQITOMPJN","2f1a6c924bc9f33235bb98e570053a79").initIndex("novosady"),p=function(e){var t=[],a=[];return e.forEach((function(e){var l=e.value,n=e.label,r=e.uezd;"np"===r&&t.push({value:l,label:n,uezd:r}),"default"===r&&a.push({value:l,label:n,uezd:r})})),[{label:"Церкви:",options:a},{label:"н.п.",options:t}]},v={display:"flex",alignItems:"center",justifyContent:"space-between"},E={backgroundColor:"#EBECF0",borderRadius:"2em",color:"#172B4D",display:"inline-block",fontSize:12,fontWeight:"normal",lineHeight:"1",minWidth:1,padding:"0.16666666666667em 0.5em",textAlign:"center"},g=function(e){return c.default.createElement("div",{style:v},c.default.createElement("span",null,e.label),c.default.createElement("span",{style:E},e.options.length))};t.default=function(){var e=c.default.useState(!0),t=e[0],a=e[1],r=c.default.useState(""),v=r[0],E=r[1],b=c.default.useState([]),_=b[0],y=b[1],w=c.default.useState([]),k=w[0],N=w[1],M=c.default.useState(),x=M[0],O=M[1],S=c.default.useState(),C=S[0],j=S[1],P=c.default.useState([]),T=(P[0],P[1]),I=c.default.useState([]),H=I[0],A=I[1],F=c.default.useState([]),D=F[0],z=F[1],L=c.default.useState([]),W=L[0],B=L[1],R=c.default.useState("born"),U=R[0],J=R[1],G=c.default.useState([]),V=G[0],Z=G[1],K=(0,s.default)(v,500);c.default.useEffect((function(){var e=[];W.length&&e.push(n([],W.map((function(e){return"church:".concat(e)})),!0)),h.search("",{responseFields:["facets","facets_stats"],facets:["_tags","year"],facetFilters:e}).then((function(e){var t=e.facets,a=e.facets_stats;if(j(a),O(t),t&&t._tags){var l=Object.keys(t._tags||{});A(l.map((function(e){return void 0===e&&(e=""),{key:~e.indexOf(";")?e.split(";")[0]:e,value:e}})))}}))}),[W]),c.default.useEffect((function(){h.search("",{hitsPerPage:0,facets:["church"]}).then((function(e){e.nbHits;var t=e.facets;t&&t.church&&z(Object.keys(t.church).map((function(e){return{key:e,value:t.church[e]}})))}))}),[]),c.default.useEffect((function(){if(K){var e=[],a="";W.length&&e.push(n([],W.map((function(e){return"church:".concat(e)})),!0)),k.length&&e.push(n([],k.map((function(e){return"_tags:".concat(e)})),!0)),_.length&&(a="(year >= ".concat(_[0],") AND (year <= ").concat(_[1],")")),h.search(K,{facets:["year","church","_tags"],typoTolerance:t,facetFilters:e,filters:a}).then((function(e){var t=e.hits,a=(e.nbHits,e.facets),l=e.facets_stats;j(l);var n=a.year;O(a),T(Object.keys(n||{}).map((function(e){return{year:e,state:!0}}))),Z(t);var r=Object.keys(a._tags||{});A(r.map((function(e){return void 0===e&&(e=""),{key:~e.indexOf(";")?e.split(";")[0]:e,value:e}})))}))}}),[_,K,t,k,W]);var X=V.filter((function(e){return"born"===e.type})),q=V.filter((function(e){return"married"===e.type})),Q=V.filter((function(e){return"died"===e.type}));return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"years-facets"},c.default.createElement(o.default,{handleRender:function(e){return c.default.createElement("div",l({},e.props),c.default.createElement(m.default,null,e.props["aria-valuenow"]))},range:!0,min:C&&C.year.min,max:C&&C.year.max,defaultValue:[1800,1920],allowCross:!1,dots:!x||!x.year||Object.keys(x.year).length<15,marks:x&&x.year?Object.keys(x.year).filter((function(e){return Number.isInteger(+e)})).reduce((function(e,t,a,l){return l.length>10&&+t%10!=0&&0!==a&&a!==l.length-1||(e[t]={style:{color:"gray"},label:t}),e}),{}):{},onChangeComplete:function(e){return y(e)}})),c.default.createElement("input",{autoFocus:!0,onInput:function(e){var t=e.target;E(t.value)},onChange:function(e){27==e.which&&(E(""),Z([]))},type:"text",value:v,id:"input"}),c.default.createElement("ul",{className:"nav nav-tabs"},c.default.createElement("li",{className:"nav-item"},c.default.createElement("a",{className:"born"===U?"nav-link active":"nav-link",onClick:function(){J("born")},"aria-current":"page",href:"#"},"О родившихся (",X.length,")")),c.default.createElement("li",{className:"nav-item"},c.default.createElement("a",{className:"married"===U?"nav-link active":"nav-link",onClick:function(){J("married")},"aria-current":"page",href:"#"},"О бракосочетавшихся (",q.length,")")),c.default.createElement("li",{className:"nav-item"},c.default.createElement("a",{className:"died"===U?"nav-link active":"nav-link",onClick:function(){J("died")},"aria-current":"page",href:"#"},"О умершихъ (",Q.length,")")),c.default.createElement("li",{className:"nav-item"},c.default.createElement("div",{className:"form-check form-check-inline form-switch"},c.default.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onChange:function(e){return a(!e.target.checked)}}),c.default.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Точный поиск"))),c.default.createElement("li",{className:"nav-item filters-select-bar"},c.default.createElement(u.default,{placeholder:"Церковь",isMulti:!0,options:p(D.map((function(e){var t=e.key;e.value;return{value:t,label:t,uezd:"default"}}))),formatGroupLabel:g,onChange:function(e){Z([]),B(e.map((function(e){return e.value})))}}),c.default.createElement(u.default,{placeholder:"Нас.пункты",isMulti:!0,options:p(H.map((function(e){var t=e.key;return{value:e.value,label:t,uezd:"np"}}))),formatGroupLabel:g,onChange:function(e){return N(e.map((function(e){return e.value})))}}))),V.length&&"born"===U?c.default.createElement(i.default,{hits:X}):"",V.length&&"married"===U?c.default.createElement(d.default,{hits:q}):"",V.length&&"died"===U?c.default.createElement(f.default,{hits:Q}):"")}}});