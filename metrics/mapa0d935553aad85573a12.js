!function(e){function t(t){for(var a,r,i=t[0],l=t[1],d=t[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={2:0},c=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var s=l;c.push([130,0,4]),n()}({130:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(12)),c=a(n(0)),r=n(131),i=document.getElementById("root");o.default.render(c.default.createElement(r.PageInfoMap,null),i)},131:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageInfoMap=void 0;var o=a(n(0)),c=n(132);t.PageInfoMap=function(){var e=o.default.useState("y"),t=(e[0],e[1]);return o.default.useEffect((function(){var e=new URL(window.location.href).searchParams.get("m");e&&t(e)}),[]),o.default.createElement(c.LeafletInfoMap,null)}},132:function(e,t,n){"use strict";var a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,o=0,c=t.length;o<c;o++)!a&&o in t||(a||(a=Array.prototype.slice.call(t,0,o)),a[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LeafletInfoMap=void 0;var c=o(n(0)),r=o(n(71));n(133),n(135),n(136),n(138),n(139),n(141),n(142);var i=r.default.tileLayer,l=r.default.map,d=r.default.MarkerClusterGroup,s=r.default.marker,u=r.default.DivIcon,f="1292036998:AAFkWJVt6GuU3-pyreWE-Xa8LMp4y9d0WgE",p=o(n(64)),m=n(60),v={apiKey:"AIzaSyCHXKjo_pKln0fawgf3z3JKGOaLdqN8nZw",authDomain:"metric-auth.firebaseapp.com",projectId:"metric-auth",storageBucket:"metric-auth.appspot.com",messagingSenderId:"837219519747",appId:"1:837219519747:web:2ab78fdd885db7a2d9ad36"},h=p.default.initializeApp(v).analytics(),g=(0,m.getNickName)();(g&&~g.indexOf("shappoff")||"localhost"===location.hostname)&&h.setAnalyticsCollectionEnabled(!1);var b={born:"Рождения",married:"Браки",died:"Умершие"},y=n(70)("1SQITOMPJN","2f1a6c924bc9f33235bb98e570053a79"),_=l(document.getElementById("map"),{zoomControl:!1});t.LeafletInfoMap=function(){var e=c.default.useState([]),t=e[0],n=e[1],o=c.default.useState([]),l=o[0],p=o[1],v=c.default.useState({}),g=v[0],k=v[1],E=c.default.useState(),w=E[0],C=E[1],L=c.default.useState([]),x=L[0],M=L[1],O=c.default.useState(),T=O[0],j=O[1],I=c.default.useState(new d({chunkedLoading:!0,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,animate:!0,maxClusterRadius:20,removeOutsideVisibleBounds:!0}))[0],P=new d({spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,animate:!0,maxClusterRadius:20,removeOutsideVisibleBounds:!0});return c.default.useEffect((function(){var e=(0,m.getNickName)();h.logEvent("page_view",{page:"Map Page",nickname:e,page_view_data:"Map Page: ".concat(e)}),document.querySelector(".leaflet-bottom.leaflet-right").innerHTML="",_.setView([54.339248,29.39981],8);var t=r.default.layerGroup();i("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:10}).addTo(t),i("https://raw.githubusercontent.com/shappoff/storage/rkka_v4_and_2v_jan20/tiles/Z{z}/{y}/{x}.jpg",{minZoom:11,maxZoom:14}).addTo(t);var n=i("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:14}),a=i("https://raw.githubusercontent.com/shappoff/storage/rkka_v4_and_2v_jan20/tiles/Z{z}/{y}/{x}.jpg",{maxZoom:14}),o=(r.default.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),r.default.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}));t.addTo(_);var c={"Смешанная карта":t,"РККА, Верстовка":a,"Современная карта":n,"Гугл Спутник":o},l={"Церкви":P,"Деревни":I};r.default.control.layers(c,l,{position:"topleft",collapsed:!0}).addTo(_),r.default.control.zoom({position:"bottomleft"}).addTo(_)}),[]),c.default.useEffect((function(){var e=y.initIndex("metricslocations"),t=[];T&&t.push(["tag_churches:".concat(T)]),e.search("",{filters:"_tags:no_geoloc",facetFilters:t}).then((function(e){var t=e.hits;p(t)}))}),[T]),c.default.useEffect((function(){var e=y.initIndex("metricslocations"),t=[];if(T&&t.push(["tag_churches:".concat(T)]),x.length){var o=[];x.forEach((function(e){o.push("tagid:".concat(e))})),t.push(a([],o,!0))}e.search("",{facets:["*"],filters:"_tags:geoloc",facetFilters:t}).then((function(e){var t=e.hits,a=e.facets;n(t),k(a)}))}),[T,x]),c.default.useEffect((function(){if(w){var e=r.default.control({position:"topleft"});return y.initIndex("metrics").search("",{facets:["_tags"],hitsPerPage:0,facetFilters:[[w?"_tags:".concat(w):""]]}).then((function(t){var n=t.facets;M(Object.keys(n._tags)),e.onAdd=function(t){var n=r.default.DomUtil.create("div","relations-reset-button"),a=document.createElement("span"),o=w.split(";")[0];a.innerHTML="Родственные связи: ".concat(o);var c=document.createElement("button");return c.innerText="X",c.addEventListener("click",(function(){C(""),M([]),t.removeControl(e)})),n.appendChild(a),n.appendChild(c),n},e.addTo(_)})),function(){_.removeControl(e)}}}),[w]),c.default.useEffect((function(){if(t&&(!t||t.length))return t.forEach((function(e){var t=e.title,n=e._geoloc,a=e.stats,o=e.short,c=e.uezd,i=e.volost,l=e.owner,d=e.type,p=e.mentions,m=void 0===p?[]:p,v=e.tagid,h=[];for(var g in a)a[g],h.push({year:g,count:a[g]});if(n&&n.lat){var b=n.lat,y=n.lng,k=s([b,y],{title:"".concat(d?"".concat(d," "):"").concat(t).concat(l?", ".concat(l," общество"):"").concat(i?", ".concat(i," волость"):"").concat(c?", ".concat(c," уезд"):""),icon:new u({html:"church"===d?"☦":"<b>".concat(o,"</b>"),className:"marker-".concat("church"===d?"church-":"","div-icon")})}),E=document.createElement("div"),w=document.createElement("b");w.innerHTML="<div>".concat(d," ").concat(t,"</div>"),E.appendChild(w);var L=document.createElement("div");L.innerText="".concat(l?"".concat(l," общество"):"").concat(i?", ".concat(i," волость"):"").concat(c?", ".concat(c," уезд"):""),E.appendChild(L);var x={},M={},O=[],T=[];for(var j in m)for(var P in M[j]||(M[j]=j),m[j])x[P]||(x[P]=P);for(var j in M)O.push("".concat(j," церковь;<br>"));for(var P in x)T.push(P);var S=document.createElement("div");S.innerHTML="<p>Упоминания:<br>".concat(O.join(""),"</p><p>Годы:<br>").concat(T.join("; "),"</p>"),E.appendChild(S);var z=document.createElement("div");z.innerText="сменить координаты",z.setAttribute("title","Сменить или уточнить геолокацию"),z.classList.add("indicate-button"),z.addEventListener("click",(function(){var e=document.getElementById("map");r.default.DomUtil.addClass(e,"crosshair-cursor-enabled");var n=function(a){var o=a.latlng,i=o.lat,l=o.lng,d="change: ".concat(c,";\n`").concat(t,"`;\n`").concat(i,", ").concat(l,"`\n[ordaOfBy](https://orda.of.by/.map/?").concat(i,",").concat(l,"&m=1v/14,wig/13,wig_v2/14,wig250/14,rkka/14,rkka_v2/14,rkka250/14,rkka2km/12,3v/13,3v_tmp56/13,3v_tmp71/13,kdwr/13,nem25/14,2v/13,polv/13,austr/13)");fetch("https://api.telegram.org/bot".concat(f,"/sendMessage?chat_id=").concat("162676802","&parse_mode=").concat("Markdown","&disable_web_page_preview=").concat(!0,"&text=").concat(encodeURIComponent(d))).then((function(){r.default.DomUtil.removeClass(e,"crosshair-cursor-enabled"),_.off("click",n),alert("Координаты отправлены!")}))};setTimeout((function(){_.on("click",n),k.closePopup()}))})),E.appendChild(z);var A=document.createElement("div");A.innerText="Родственные связи",A.setAttribute("title","Посмотреть родственные связи"),A.classList.add("indicate-button"),A.addEventListener("click",(function(){C(v),k.closePopup()})),E.appendChild(A),k.bindPopup(E),I.addLayer(k)}})),(T||x.length)&&setTimeout((function(){return _.fitBounds(I.getBounds())}),500),function(){I.clearLayers()}}),[t]),c.default.useEffect((function(){return y.initIndex("metricschurches").search("",{facets:["*"]}).then((function(e){var t=e.hits;!t||t&&!t.length||(t.forEach((function(e){var t=e.title,n=e._geoloc,a=e.stat,o=e.uezd,c=e.np,i=e.notIndexed,l=[];if(n&&n.lat){var d=n.lat,p=n.lng,m=s([d,p],{title:"".concat(c?"".concat(c):"").concat(t?", ".concat(t):""),icon:new u({html:"☦",className:"marker-church-div-icon"})}),v=document.createElement("div"),h=document.createElement("b");h.innerText="".concat(c),v.appendChild(h);var g=document.createElement("b");g.innerHTML="<div>".concat(t,"</div>"),v.appendChild(g);var y=[];for(var k in a)b[k]&&y.push("<div>".concat(b[k]," - ").concat(a[k],"</div>"));l.push("<p>".concat(y.join(""),"</p>"));var E=[];a&&a.fods&&E.push("<div>ФОД (год):</div>".concat(Object.keys(a.fods).map((function(e){return'<span style="white-space: nowrap">'.concat(e,": ").concat(a.fods[e],"</span>")})).join("; "))),l.push("<p>".concat(E.join(""),"</p>"));var w=document.createElement("div");if(w.innerHTML="".concat(l.join("")),v.appendChild(w),i&&i.length){var C=document.createElement("p");C.innerHTML="Оцифрованы, но не проиндексированы:<br>".concat(i.join(",<br>")),v.appendChild(C)}var L=document.createElement("div");L.innerText="сменить координаты",L.setAttribute("title","Сменить или уточнить геолокацию"),L.classList.add("indicate-button"),L.addEventListener("click",(function(){var e=document.getElementById("map");r.default.DomUtil.addClass(e,"crosshair-cursor-enabled");var n=function(a){var c=a.latlng,i=c.lat,l=c.lng,d="change: ".concat(o,";\n`").concat(t,"`;\n`").concat(i,", ").concat(l,"`\n[ordaOfBy](https://orda.of.by/.map/?").concat(i,",").concat(l,"&m=1v/14,wig/13,wig_v2/14,wig250/14,rkka/14,rkka_v2/14,rkka250/14,rkka2km/12,3v/13,3v_tmp56/13,3v_tmp71/13,kdwr/13,nem25/14,2v/13,polv/13,austr/13)");fetch("https://api.telegram.org/bot".concat(f,"/sendMessage?chat_id=").concat("162676802","&parse_mode=").concat("Markdown","&disable_web_page_preview=").concat(!0,"&text=").concat(encodeURIComponent(d))).then((function(){r.default.DomUtil.removeClass(e,"crosshair-cursor-enabled"),_.off("click",n),alert("Координаты отправлены!")}))};setTimeout((function(){_.on("click",n),m.closePopup()}))})),v.appendChild(L),m.bindPopup(v,{minWidth:500}),P.addLayer(m)}})),_.addLayer(P),_.fitBounds(P.getBounds()))})),function(){_.removeLayer(P)}}),[]),c.default.useEffect((function(){var e,t=r.default.control.search({layer:I,propertyLoc:"np",collapsed:!0,textPlaceholder:"Найти селение",autoCollapse:!0,zoom:13,filterData:function(e,t){var n=Object.keys(t).filter((function(t){return~t.toLowerCase().indexOf(e.toLowerCase())})),a={};return n.forEach((function(e){var n;Object.assign(a,((n={})[e]=t[e],n))})),a}});if(g&&g.tag_churches){var n=Object.keys(g.tag_churches).sort().map((function(e){return{label:e,value:e}})),o={label:"Все",value:"all"};e=r.default.control.select({position:"topleft",multi:!1,iconMain:"☦",id:"church-select-dropdown",selectedDefault:T?n.find((function(e){return e.value===T})).value:o.value,items:a([o],n,!0),onSelect:function(e){j("all"===e?"":e)}})}return t.on("search:expanded",(function(){_.hasLayer(I)||_.addLayer(I)})),_.addControl(t),e&&_.addControl(e),T||_.removeLayer(I),function(){_.removeControl(t),e&&_.removeControl(e)}}),[g.tag_churches]),c.default.useEffect((function(){var e={};l.sort((function(e,t){return e.title<t.title?-1:1})).forEach((function(t){t.tag_churches.forEach((function(n){e[n]?e[n].push("".concat(t.type?"".concat(t.type," "):"").concat(t.title)):e[n]=["".concat(t.type?"".concat(t.type," "):"").concat(t.title)]}))}));var t=r.default.control();return t.onAdd=function(e){return this._div=r.default.DomUtil.create("div","info-not-found-villages"),this.update(),this._div},t.update=function(t){var n=document.createElement("details"),a=document.createElement("summary");a.classList.add("root"),a.innerHTML="Список не найденных на карте селений",T&&n.setAttribute("open",null),n.appendChild(a);var o=document.createElement("ul");o.classList.add("churches-list"),Object.keys(e).sort().forEach((function(t){var n=document.createElement("li"),a=document.createElement("details"),c=document.createElement("summary");a.classList.add("church"),c.classList.add("church"),c.innerHTML="".concat(t," церковь"),T===t&&a.setAttribute("open",null),a.appendChild(c);var i=document.createElement("ul");i.setAttribute("style","max-height: 300px;overflow-y: scroll;");var l=function(n){var a=document.createElement("li"),o=document.createElement("details"),c=document.createElement("summary");o.classList.add("np"),c.classList.add("np"),c.setAttribute("value",e[t][n]),c.innerHTML="".concat(e[t][n]),o.appendChild(c);var l=document.createElement("div"),d=document.createElement("span");d.innerHTML="указать координаты",d.classList.add("indicate-button"),d.setAttribute("title","Указать геолокацию этого н.п."),d.addEventListener("click",(function(){a.classList.add("selected-for-coords");var o=document.getElementById("map");r.default.DomUtil.addClass(o,"crosshair-cursor-enabled");var c=function(i){a.classList.remove("selected-for-coords");var l=i.latlng,d=l.lat,s=l.lng,u="new: `".concat(e[t][n],"`;\n`").concat(d,", ").concat(s,"`\n[ordaOfBy](https://orda.of.by/.map/?").concat(d,",").concat(s,"&m=1v/14,wig/13,wig_v2/14,wig250/14,rkka/14,rkka_v2/14,rkka250/14,rkka2km/12,3v/13,3v_tmp56/13,3v_tmp71/13,kdwr/13,nem25/14,2v/13,polv/13,austr/13)");fetch("https://api.telegram.org/bot".concat(f,"/sendMessage?chat_id=").concat("162676802","&parse_mode=").concat("Markdown","&disable_web_page_preview=").concat(!0,"&text=").concat(encodeURIComponent(u))).then((function(){r.default.DomUtil.removeClass(o,"crosshair-cursor-enabled"),_.off("click",c),a.remove(),alert("Координаты отправлены!")}))};setTimeout((function(){_.on("click",c)}))})),l.appendChild(d),o.appendChild(l),a.appendChild(o),i.appendChild(a)};for(var d in e[t])l(d);a.appendChild(i),n.appendChild(a),o.appendChild(n)})),n.appendChild(o),this._div.appendChild(n)},t.addTo(_),function(){_.removeControl(t)}}),[l,T]),null}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNickName=void 0;t.getNickName=function(e){var t="",n=((t=e||localStorage.getItem("user"))?t.split("@"):[])[0];return n||"anonymous"}}});