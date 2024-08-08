/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/MapApp.tsx":
/*!***********************************!*\
  !*** ./src/components/MapApp.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = MapApp;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
__webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
var react_select_1 = __importDefault(__webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js"));
var leaflet_1 = __importDefault(__webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js"));
var react_leaflet_cluster_1 = __importDefault(__webpack_require__(/*! react-leaflet-cluster */ "./node_modules/react-leaflet-cluster/lib/index.js"));
var CloseButton_1 = __importDefault(__webpack_require__(/*! react-bootstrap/CloseButton */ "./node_modules/react-bootstrap/esm/CloseButton.js"));
var Spinner_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Spinner */ "./node_modules/react-bootstrap/esm/Spinner.js"));
var react_draggable_1 = __importDefault(__webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js"));
var Card_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js"));
var OverlayTrigger_1 = __importDefault(__webpack_require__(/*! react-bootstrap/OverlayTrigger */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js"));
var Tooltip_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js"));
var Form_1 = __importDefault(__webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js"));
var DivIcon = leaflet_1.default.DivIcon;
var react_leaflet_1 = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/index.js");
__webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
var useDebounce_1 = __importDefault(__webpack_require__(/*! ./useDebounce */ "./src/components/useDebounce.tsx"));
var icons_1 = __importDefault(__webpack_require__(/*! ./icons */ "./src/components/icons.tsx"));
var useWindowSize_1 = __importDefault(__webpack_require__(/*! ./useWindowSize */ "./src/components/useWindowSize.tsx"));
var applicationID = '1SQITOMPJN', searchOnlyAPIKey = '2f1a6c924bc9f33235bb98e570053a79', index_name_1 = 'revisions', index_name_2 = 'revisionslocations';
var algoliasearch = __webpack_require__(/*! algoliasearch */ "./node_modules/algoliasearch/dist/algoliasearch.umd.js");
var client = algoliasearch(applicationID, searchOnlyAPIKey);
var revisionsAlgoliaIndex = client.initIndex(index_name_1);
var locationsAlgoliaIndex = client.initIndex(index_name_2);
var BoundsToLayer = function (_a) {
    var bounds = _a.bounds, callback = _a.callback;
    var map = (0, react_leaflet_1.useMap)();
    react_1.default.useEffect(function () {
        var ms = setTimeout(function () {
            bounds && map.fitBounds(bounds);
        }, 100);
        return function () {
            ms && clearTimeout(ms);
        };
    }, [bounds]);
    var baselayerchangeHandler = function (e) {
        callback && callback(e, map);
    };
    react_1.default.useEffect(function () {
        map.on("baselayerchange", baselayerchangeHandler);
        return function () {
            map.off("baselayerchange", baselayerchangeHandler);
        };
    }, []);
    return react_1.default.createElement(react_1.default.Fragment, null);
};
var SetHeightOnChange = function (_a) {
    var top = _a.top, height = _a.height;
    var map = (0, react_leaflet_1.useMap)();
    react_1.default.useEffect(function () {
        if (map != null) {
            map.invalidateSize();
        }
    }, [map, top, height]);
    var mapContainer = map.getContainer();
    mapContainer.style.cssText = "top: ".concat(top, ";height: ").concat(height, ";position: relative;");
    return react_1.default.createElement("div", null);
};
function MapApp() {
    var _a = react_1.default.useState([]), currentFamily = _a[0], setCurrentFamily = _a[1];
    var _b = react_1.default.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.default.useState(''), searchTerm = _c[0], setSearchTerm = _c[1];
    var _d = react_1.default.useState(true), isTypoTolerance = _d[0], setIsTypoTolerance = _d[1];
    var _e = react_1.default.useState(false), isShowPanel = _e[0], setIsShowPanel = _e[1];
    var _f = react_1.default.useState([]), hits = _f[0], setHits = _f[1];
    var _g = react_1.default.useState([]), mapHits = _g[0], setMapHits = _g[1];
    var _h = react_1.default.useState([]), placeFilterOptions = _h[0], setPlaceFilterOptions = _h[1];
    var _j = react_1.default.useState(), currentBounds = _j[0], setCurrentBounds = _j[1];
    var _k = react_1.default.useState({}), defaultFacets = _k[0], setDefaultFacets = _k[1];
    var _l = react_1.default.useState({}), facets = _l[0], setFacets = _l[1];
    var _m = react_1.default.useState(0), nbHits = _m[0], setNbHits = _m[1];
    var _o = react_1.default.useState(''), currentType = _o[0], setCurrentType = _o[1];
    var _p = react_1.default.useState(''), uezdFilter = _p[0], setUezdFilter = _p[1];
    var _q = react_1.default.useState(''), ownerFilter = _q[0], setOwnerFilter = _q[1];
    var _r = react_1.default.useState(''), churchFilter = _r[0], setChurchFilter = _r[1];
    var _s = react_1.default.useState(''), placeTerm = _s[0], setPlaceTerm = _s[1];
    var _t = react_1.default.useState(''), currentLocId = _t[0], setCurrentLocId = _t[1];
    var size = (0, useWindowSize_1.default)();
    var debouncedSearchTerm = (0, useDebounce_1.default)(searchTerm, 1000);
    var debouncedPlaceTerm = (0, useDebounce_1.default)(placeTerm, 100);
    react_1.default.useEffect(function () {
        var maxLat = 0;
        var maxLng = 0;
        var minLat = 0;
        var minLlng = 0;
        mapHits && mapHits.length && __spreadArray([], mapHits, true).forEach(function (item) {
            var _geoloc = item._geoloc;
            if (!_geoloc.lat) {
                return;
            }
            var lat = _geoloc.lat, lng = _geoloc.lng;
            if (lat) {
                if (lat > maxLat || !maxLat) {
                    maxLat = lat;
                }
                if (lat < minLat || !minLat) {
                    minLat = lat;
                }
            }
            if (lng) {
                if (lng > maxLng || !maxLng) {
                    maxLng = lng;
                }
                if (lng < minLlng || !minLlng) {
                    minLlng = lng;
                }
            }
        });
        setCurrentBounds([[maxLat, maxLng], [minLat, minLlng]]);
    }, [mapHits, mapHits.length]);
    react_1.default.useEffect(function () {
        // if (debouncedSearchTerm || !isTypoTolerance) {
        setIsLoading(true);
        var facetFilters = [];
        var filters = "";
        if (uezdFilter) {
            facetFilters.push("uezd:".concat(uezdFilter));
        }
        if (ownerFilter) {
            facetFilters.push("owner:".concat(ownerFilter));
        }
        if (churchFilter) {
            facetFilters.push("church:".concat(churchFilter));
        }
        if (currentLocId) {
            facetFilters.push("tag:".concat(currentLocId));
        }
        var selectedFilters = facetFilters.length ? "[".concat(facetFilters.map(function (filter) { return filter.split(':')[1]; }).join('|'), "]") : '';
        var term_filters = "".concat(debouncedSearchTerm).concat(selectedFilters ? ":".concat(selectedFilters) : '');
        gtag('event', 'search', {
            search_term: debouncedSearchTerm,
            selected_filters: selectedFilters,
            nickname: 'userNickName',
            term_filters: term_filters
        });
        var hitsPerPage = 50;
        revisionsAlgoliaIndex.search(debouncedSearchTerm, {
            facets: ['*'],
            typoTolerance: isTypoTolerance,
            facetFilters: facetFilters,
            filters: filters,
            hitsPerPage: debouncedSearchTerm || facetFilters.length ? 1000 : hitsPerPage
        })
            .then(function (_a) {
            var hits = _a.hits, nbHits = _a.nbHits, facets = _a.facets, facets_stats = _a.facets_stats;
            setHits(hits);
            setFacets(facets);
            setNbHits(nbHits);
            setIsLoading(false);
        });
        // }
    }, [debouncedSearchTerm, isTypoTolerance, uezdFilter, ownerFilter, churchFilter, currentLocId]);
    react_1.default.useEffect(function () {
        setIsLoading(true);
        var facetFilters = [];
        var filters = "";
        revisionsAlgoliaIndex.search('', {
            facets: ['*'],
            hitsPerPage: 0,
        })
            .then(function (_a) {
            var hits = _a.hits, nbHits = _a.nbHits, facets = _a.facets, facets_stats = _a.facets_stats;
            setDefaultFacets(facets);
            setFacets(facets);
            setIsLoading(false);
        });
    }, []);
    react_1.default.useEffect(function () {
        setIsLoading(true);
        var facetFilters = [];
        var filters = "";
        if (uezdFilter) {
            facetFilters.push("uezd:".concat(uezdFilter));
        }
        if (currentLocId) {
            facetFilters.push("objectID:".concat(currentLocId));
        }
        if (churchFilter) {
            facetFilters.push("church:".concat(churchFilter));
        }
        if (ownerFilter) {
            facetFilters.push("owner:".concat(ownerFilter));
        }
        if (!currentLocId && debouncedSearchTerm && facets.tag && Object.keys(facets.tag).length) {
            var tags = Object.keys(facets.tag).map(function (tag) { return "objectID:".concat(tag); });
            facetFilters.push(tags);
        }
        locationsAlgoliaIndex.search(currentLocId ? '' : debouncedPlaceTerm, {
            facets: ['*'],
            facetFilters: facetFilters,
            filters: filters
        })
            .then(function (_a) {
            var hits = _a.hits;
            setMapHits(hits);
            setPlaceFilterOptions(hits.map(function (hit) {
                var first = hit.info[0];
                return { label: first.title, value: hit.objectID };
            }));
            setIsLoading(false);
        });
    }, [debouncedPlaceTerm, currentLocId, uezdFilter, ownerFilter, churchFilter, facets.tag]);
    var searchHandler = function (_a) {
        var target = _a.target;
        return setSearchTerm(target.value);
    };
    var keysHandler = function (e) {
        if (e.which == 27) {
            setSearchTerm('');
            setHits([]);
        }
    };
    var scrollToTop = function () {
        document.querySelector('.result-list').scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    var _u = react_1.default.useState(0), rootWith = _u[0], setRootWith = _u[1];
    var _v = react_1.default.useState(0), filterBarHeight = _v[0], setFilterBarHeight = _v[1];
    var _w = react_1.default.useState(0), footerHeight = _w[0], setFooterHeight = _w[1];
    react_1.default.useEffect(function () {
        var resultList = document.querySelector('#result-list > .result-list');
        var filterBar = document.getElementById('filter-bar');
        var root = document.getElementById('root');
        if (filterBar) {
            setFilterBarHeight(filterBar.clientHeight);
        }
        if (resultList) {
            setFooterHeight(resultList.clientHeight);
        }
        if (root) {
            setRootWith(root.clientWidth);
        }
    }, [size]);
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_leaflet_1.MapContainer, { attributionControl: false, id: "map", center: [53.902287, 27.561824], zoom: 11, trackResize: true, scrollWheelZoom: true, zoomControl: false, style: { position: 'relative' } },
            react_1.default.createElement(SetHeightOnChange, { top: "".concat(filterBarHeight, "px"), height: "calc(100vh - ".concat(footerHeight, "px)") }),
            react_1.default.createElement(BoundsToLayer, { bounds: currentBounds, callback: function (e) { } }),
            react_1.default.createElement(react_leaflet_1.LayersControl, { collapsed: rootWith < 600 },
                react_1.default.createElement(react_leaflet_1.LayersControl.BaseLayer, { name: "OSM" },
                    react_1.default.createElement(react_leaflet_1.TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" })),
                react_1.default.createElement(react_leaflet_1.LayersControl.BaseLayer, { checked: true, name: "OSM + \u0420\u041A\u041A\u0410" },
                    react_1.default.createElement(react_leaflet_1.LayerGroup, null,
                        react_1.default.createElement(react_leaflet_1.TileLayer, { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", maxZoom: 10 }),
                        react_1.default.createElement(react_leaflet_1.TileLayer, { url: "https://raw.githubusercontent.com/indexby/storage/rkka_v4_and_2v_jan20/tiles/Z{z}/{y}/{x}.jpg", minZoom: 11, maxZoom: 14 }))),
                react_1.default.createElement(react_leaflet_1.LayersControl.BaseLayer, { name: "\u041F\u0413\u041C" },
                    react_1.default.createElement(react_leaflet_1.TileLayer, { url: "https://raw.githubusercontent.com/indexby/storage/pgm_vekzhg/tiles/Z{z}/{y}/{x}.jpg", maxZoom: 14 })),
                react_1.default.createElement(react_leaflet_1.LayersControl.BaseLayer, { name: "3-\u0432\u0435\u0440\u0441\u0442\u043A\u0430 (1)" },
                    react_1.default.createElement(react_leaflet_1.TileLayer, { url: "https://raw.githubusercontent.com/indexby/storage/3v_jun20/tiles/Z{z}/{y}/{x}.jpg", maxZoom: 13 })),
                react_1.default.createElement(react_leaflet_1.LayersControl.BaseLayer, { name: "3-\u0432\u0435\u0440\u0441\u0442\u043A\u0430 (2)" },
                    react_1.default.createElement(react_leaflet_1.TileLayer, { url: "https://raw.githubusercontent.com/indexby/storage/3v_jan20/tiles/Z{z}/{y}/{x}.jpg", maxZoom: 13 })),
                react_1.default.createElement(react_leaflet_1.LayersControl.BaseLayer, { name: "\u0420\u041A\u041A\u0410" },
                    react_1.default.createElement(react_leaflet_1.TileLayer, { url: "https://raw.githubusercontent.com/indexby/storage/rkka_v4/tiles/Z{z}/{y}/{x}.jpg", maxZoom: 14 })),
                react_1.default.createElement(react_leaflet_1.LayersControl.BaseLayer, { name: "Google" },
                    react_1.default.createElement(react_leaflet_1.TileLayer, { url: 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', maxZoom: 20, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] }))),
            react_1.default.createElement(react_leaflet_cluster_1.default, { chunkedLoading: true }, mapHits.map(function (hit, hitIndex) {
                var _a;
                var _b = hit.info[0], item = _b === void 0 ? '' : _b;
                var _c = (_a = item === null || item === void 0 ? void 0 : item.title) === null || _a === void 0 ? void 0 : _a.split(' '), place = _c.slice(1);
                return ~hit._tags.indexOf('geoloc') ?
                    react_1.default.createElement(react_leaflet_1.Marker, { key: hitIndex, title: "".concat(place.join(' ')), icon: new DivIcon({
                            html: "<b>".concat(place.join(' '), "</b>"),
                            className: 'marker-div-icon'
                        }), position: [hit._geoloc.lat, hit._geoloc.lng] },
                        react_1.default.createElement(react_leaflet_1.Popup, null,
                            react_1.default.createElement("table", { className: "table" },
                                react_1.default.createElement("thead", null,
                                    react_1.default.createElement("tr", null,
                                        react_1.default.createElement("th", null, "\u0413\u043E\u0434"),
                                        react_1.default.createElement("th", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                                        react_1.default.createElement("th", null, "\u0423\u0435\u0437\u0434"),
                                        react_1.default.createElement("th", { title: "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446\\\u0426\u0435\u0440\u043A\u043E\u0432\u044C\\\u041A\u043E\u0441\u0442\u0435\u043B" }, "\u0412\u043B.\\\u0426\u0435\u0440.\\\u041A\u043E\u0441."),
                                        react_1.default.createElement("th", null, "\u0428\u0438\u0444\u0440"),
                                        react_1.default.createElement("th", null, "\u0422\u0438\u043F"))),
                                react_1.default.createElement("tbody", null, hit.info.map(function (hitInfo, index) {
                                    return (react_1.default.createElement("tr", { key: index, className: "white-space-nowrap" },
                                        react_1.default.createElement("td", null, hitInfo.year),
                                        react_1.default.createElement("td", null, hitInfo.title),
                                        react_1.default.createElement("td", null, hitInfo.uezd),
                                        react_1.default.createElement("td", null, hitInfo.church || hitInfo.owner),
                                        react_1.default.createElement("td", null, hitInfo.fod),
                                        react_1.default.createElement("td", null, hitInfo.type)));
                                }))),
                            react_1.default.createElement("footer", null,
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("a", { href: "#", onClick: function () { setCurrentLocId(hit.objectID); setPlaceTerm(''); } }, "\u0421\u043F\u0438\u0441\u043E\u043A")))))
                    : '';
            })),
            (0, react_dom_1.createPortal)(react_1.default.createElement("div", { id: "filter-bar" },
                react_1.default.createElement("div", { className: "input-typo-tolerance" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(Form_1.default.Control, { id: "input-id", placeholder: "\u0424\u0418\u041E", enterKeyHint: 'search', multiple: false, onInput: searchHandler, onChange: keysHandler, type: "text", className: 'input-form-control', value: searchTerm })),
                    react_1.default.createElement("div", { className: "form-check form-check-inline form-switch typo-tolerance" },
                        react_1.default.createElement("input", { className: "form-check-input", type: "checkbox", role: "switch", id: "flexSwitchCheckDefault", checked: !isTypoTolerance, onChange: function (e) { return setIsTypoTolerance(!e.target.checked); } }),
                        react_1.default.createElement("label", { className: "form-check-label", htmlFor: "flexSwitchCheckDefault" }, "\u0422\u043E\u0447\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A"))),
                react_1.default.createElement("div", { className: "uezd-owner" },
                    react_1.default.createElement(react_select_1.default, { className: "select-filter", isClearable: true, options: placeFilterOptions, placeholder: 'Деревня', value: placeFilterOptions.filter(function (_a) {
                            var value = _a.value;
                            return value === currentLocId;
                        }), onInputChange: function (value) {
                            if (value) {
                                setCurrentLocId('');
                                setPlaceTerm(value);
                            }
                        }, onChange: function (e) {
                            setCurrentLocId(e === null || e === void 0 ? void 0 : e.value);
                            setPlaceTerm('');
                        } }),
                    react_1.default.createElement(react_select_1.default, { className: "select-filter", isClearable: true, options: defaultFacets.uezd ? Object.keys(defaultFacets.uezd).map(function (key) { return ({ label: key, value: key }); }) : [], placeholder: 'Уезд', onChange: function (e) { return setUezdFilter(e === null || e === void 0 ? void 0 : e.value); } }))), document.getElementById("filter-bar-anchor")),
            (0, react_dom_1.createPortal)(react_1.default.createElement("div", { className: "result-list" },
                nbHits
                    ? react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("ul", { className: "nav nav-tabs tab-list-of-types ".concat(isShowPanel ? 'active' : ''), onClick: function (event) {
                                if (event.target.closest('.nav-item')) {
                                    if (event.target.classList.contains('active')) {
                                        setIsShowPanel(false);
                                    }
                                    if (!isShowPanel) {
                                        setIsShowPanel(function (prev) { return !prev; });
                                    }
                                }
                                else {
                                    setIsShowPanel(function (prev) { return !prev; });
                                }
                            } },
                            react_1.default.createElement("li", { className: "nav-item all-item" },
                                react_1.default.createElement("div", { className: "panel-arrow-button", dangerouslySetInnerHTML: { __html: (0, icons_1.default)(isShowPanel ? 'arrowUpIcon' : 'arrowDownIcon') } }),
                                react_1.default.createElement("a", { className: "nav-link active", "aria-current": "page", href: "#" },
                                    "\u041D\u0430\u0439\u0434\u0435\u043D\u043E: ",
                                    nbHits))),
                        isShowPanel ? react_1.default.createElement("table", { className: "table table-striped active" },
                            react_1.default.createElement("thead", { className: "desktop-version" },
                                react_1.default.createElement("tr", null,
                                    react_1.default.createElement("th", { title: "\u2116 \u043F\u043E \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0440\u0435\u0432\u0438\u0437\u0438\u0438" }, "\u2116"),
                                    react_1.default.createElement("th", { title: "\u2116 \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0440\u0435\u0432\u0438\u0437\u0438\u0438" }, "\u2116"),
                                    react_1.default.createElement("th", null, "\u0413\u043E\u0434"),
                                    debouncedSearchTerm ? react_1.default.createElement("th", null, "\u041D\u0430\u0439\u0434\u0435\u043D\u043E") : react_1.default.createElement("th", null, "\u0413\u043B\u0430\u0432\u0430 \u0441\u0435\u043C\u044C\u0438"),
                                    react_1.default.createElement("th", null, "\u043D.\u043F."),
                                    !debouncedSearchTerm ? react_1.default.createElement("th", null, "\u0423\u0435\u0437\u0434") : '')),
                            react_1.default.createElement("tbody", { id: "list-of-res" }, hits.map(function (hit, index) {
                                var people = get(hit, '_highlightResult.people', []) || [];
                                var items = people.filter(function (_a) {
                                    var fio = _a.fio;
                                    return fio.matchLevel === 'full';
                                }) || {};
                                var highlightResult = items.map(function (item) { return get(item, 'fio.value', ''); });
                                var renderInfoTooltip = function (props, note) { return (react_1.default.createElement(Tooltip_1.default, __assign({ id: "button-tooltip" }, props), note)); };
                                return (react_1.default.createElement("tr", { key: index },
                                    react_1.default.createElement("td", null, hit.fPrev),
                                    react_1.default.createElement("td", null, hit.fCur),
                                    react_1.default.createElement("td", null,
                                        react_1.default.createElement(OverlayTrigger_1.default, { trigger: ['hover', 'click'], placement: "auto", delay: { show: 250, hide: 400 }, overlay: function (e) { return renderInfoTooltip(e, "".concat(hit.type, ", ").concat(hit.fod)); } },
                                            react_1.default.createElement("span", { className: "item-title-hover-info" }, hit.year))),
                                    react_1.default.createElement("td", null,
                                        react_1.default.createElement("a", { href: "#", className: "head-family", dangerouslySetInnerHTML: { __html: debouncedSearchTerm ? highlightResult.join(', ') : hit.headFamily }, onClick: function () { return setCurrentFamily(function (prev) { return __spreadArray(__spreadArray([], prev, true), [hit], false); }); } })),
                                    debouncedSearchTerm ? react_1.default.createElement("td", null,
                                        react_1.default.createElement(OverlayTrigger_1.default, { trigger: ['hover', 'click'], placement: "auto", delay: { show: 250, hide: 400 }, overlay: function (e) { return renderInfoTooltip(e, "".concat(hit.uezd, " \u0443\u0435\u0437\u0434").concat(hit.owner || hit.church ? ", ".concat(hit.owner || hit.church) : '')); } },
                                            react_1.default.createElement("span", { className: "item-title-hover-info" }, hit.place))) : '',
                                    !debouncedSearchTerm ? react_1.default.createElement("td", { title: hit.owner || hit.church }, hit.place) : '',
                                    !debouncedSearchTerm ? react_1.default.createElement("td", null, hit.uezd) : ''));
                            }))) : null)
                    : react_1.default.createElement("div", { className: "alert alert-info", role: "alert", style: { marginBottom: 0, padding: '9px 0' } },
                        react_1.default.createElement("span", null,
                            "\u041D\u0430\u0439\u0434\u0435\u043D\u043E ",
                            nbHits),
                        react_1.default.createElement("span", { className: "laoding-box" }, isLoading && react_1.default.createElement(Spinner_1.default, { animation: "border", size: "sm" }))),
                isShowPanel ?
                    react_1.default.createElement("div", { className: "scroll-to-top-button", onClick: scrollToTop, onTouchStart: scrollToTop, dangerouslySetInnerHTML: { __html: (0, icons_1.default)('arrowDownIcon') } })
                    : ''), document.getElementById("result-list")),
            (0, react_dom_1.createPortal)(react_1.default.createElement(react_1.default.Fragment, null, currentFamily && currentFamily.length ?
                currentFamily.map(function (family, indexFamily) {
                    return react_1.default.createElement(DraggableCard, { key: indexFamily, family: family, indexFamily: indexFamily, debouncedSearchTerm: debouncedSearchTerm, setCurrentFamily: setCurrentFamily });
                })
                : ''), document.getElementById("info-panel"))));
}
;
var DraggableCard = function (_a) {
    var family = _a.family, indexFamily = _a.indexFamily, debouncedSearchTerm = _a.debouncedSearchTerm, setCurrentFamily = _a.setCurrentFamily;
    var _b = react_1.default.useState(debouncedSearchTerm ? 'fio' : 'origin'), currantTab = _b[0], setCurrantTab = _b[1];
    var pages = {};
    var onCloseHandler = function () {
        setCurrentFamily(function (array) {
            return array.filter(function (item, idx) { return idx !== indexFamily; });
        });
    };
    var renderTooltip = function (props) { return (react_1.default.createElement(Tooltip_1.default, __assign({ id: "button-tooltip" }, props),
        family.type,
        ", ",
        family.fod,
        ", \u043B\u043B. ",
        Object.keys(pages).join(', '))); };
    var renderInfoTooltip = function (props, note) { return (react_1.default.createElement(Tooltip_1.default, __assign({ id: "button-tooltip" }, props), note)); };
    return react_1.default.createElement(react_draggable_1.default, { defaultPosition: { x: 0, y: 0 }, grid: [25, 25], defaultClassName: "draggable-card-item" },
        react_1.default.createElement(Card_1.default, { border: "secondary", style: { maxWidth: '25rem', maxHeight: '90vh', width: 'fit-content' }, className: "famyly-item-card" },
            react_1.default.createElement(Card_1.default.Header, { className: "text-end card-header-item" },
                react_1.default.createElement("ul", { className: "nav nav-tabs card-list-of-types" },
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement("a", { className: "nav-link ".concat(currantTab === 'fio' ? 'active' : ''), href: "#", onClick: function () { return setCurrantTab('fio'); }, onTouchStart: function () { return setCurrantTab('fio'); } }, "\u0424\u0418\u041E")),
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement("a", { className: "nav-link ".concat(currantTab === 'origin' ? 'active' : ''), href: "#", onClick: function () { return setCurrantTab('origin'); }, onTouchStart: function () { return setCurrantTab('origin'); } }, "\u041E\u0440\u0438\u0433."))),
                react_1.default.createElement(CloseButton_1.default, { className: "close-button-card", onClick: onCloseHandler, onTouchStart: onCloseHandler })),
            react_1.default.createElement("ol", { style: { maxHeight: '90vh', overflowY: 'auto' } }, family.people.map(function (person, indexP) {
                var _a;
                var _b, _c, _d;
                Object.assign(pages, (_a = {}, _a[person.page] = true, _a));
                var ageIsNaN = isNaN(+person.aCur);
                var ageIsInteger = Number.isInteger(+person.aCur);
                var yearOfBorn;
                if (!ageIsNaN && ageIsInteger && (+person.aCur > 0)) {
                    yearOfBorn = +family.year - +person.aCur;
                }
                return react_1.default.createElement("li", { key: indexP, className: "card-list-row" },
                    currantTab === 'fio' && debouncedSearchTerm ?
                        react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: (_d = (_c = (_b = family === null || family === void 0 ? void 0 : family._highlightResult) === null || _b === void 0 ? void 0 : _b.people[indexP]) === null || _c === void 0 ? void 0 : _c.fio) === null || _d === void 0 ? void 0 : _d.value } }) :
                        react_1.default.createElement("span", null,
                            person[currantTab],
                            " "),
                    person.aPrev || yearOfBorn ?
                        react_1.default.createElement(OverlayTrigger_1.default, { trigger: ['hover', 'click'], placement: "auto", delay: { show: 250, hide: 400 }, overlay: function (e) { return renderInfoTooltip(e, "".concat(person.aPrev ? "\u0432 ".concat(family.prevYear, ": ").concat(person.aPrev, "; ") : '').concat(yearOfBorn ? "[\u2248".concat(yearOfBorn, " \u0433.\u0440]") : '')); } },
                            react_1.default.createElement("span", null,
                                " (",
                                react_1.default.createElement("a", { href: "#" }, person.aCur ? "".concat(person.aCur, " ").concat(plural(+person.aCur)) : '?'),
                                ")"))
                        :
                            react_1.default.createElement("span", null, person.aCur ? " (".concat(person.aCur, " ").concat(plural(+person.aCur), ")") : ''),
                    person.note ? react_1.default.createElement(OverlayTrigger_1.default, { trigger: ['hover', 'click'], placement: "auto", delay: { show: 250, hide: 400 }, overlay: function (e) { return renderInfoTooltip(e, person.note); } },
                        react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: (0, icons_1.default)('infoIcon') } })) : '');
            })),
            react_1.default.createElement(Card_1.default.Footer, { className: "text-muted text-truncate" },
                react_1.default.createElement("i", null,
                    react_1.default.createElement(OverlayTrigger_1.default, { trigger: ['hover', 'click'], placement: "bottom", delay: { show: 250, hide: 400 }, overlay: renderTooltip },
                        react_1.default.createElement("span", null,
                            "\u2116",
                            family.fCur,
                            ", ",
                            family.year,
                            " \u0433. ",
                            family.place))))));
};
var plural = function (number, titles) {
    if (titles === void 0) { titles = ['год', 'года', 'лет']; }
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};
function get(obj, propPath, defaultValue) {
    return getPropertyByPath(obj, propPath, defaultValue);
}
function getPropertyByPath(obj, propPath, defaultValue) {
    return propPath.split('.').reduce(function (o, p) { return (o && o[p]) || defaultValue; }, obj);
}


/***/ }),

/***/ "./src/components/icons.tsx":
/*!**********************************!*\
  !*** ./src/components/icons.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = getIcon;
var pinIcon = function () {
    return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\">\n        <path d=\"M17 7V5H5v12h2V8.414l10.293 10.293 1.414-1.414L8.414 7H17z\" fill=\"red\"/>\n    </svg>";
};
var circleIcon = function (_a) {
    var iconColor = _a.iconColor;
    return "<svg  xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"15\" height=\"15\" viewBox=\"0 0 24 24\">\n        <circle cx=\"12\" cy=\"12\" r=\"5\" fill=\"".concat(iconColor || 'red', "\" />\n    </svg>");
};
var pilIcon = function (_a) {
    var iconColor = _a.iconColor;
    return "<svg fill=\"#000000\" width=\"15px\" height=\"15px\" viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill=\"".concat(iconColor || 'red', "\" d=\"M5.601 18.621c-1.952 1.953-1.952 5.119 0 7.072l0.708 0.707c1.952 1.951 5.118 1.951 7.071 0l5.656-5.658-7.778-7.778-5.657 5.657zM12.672 25.693c-1.562 1.562-4.095 1.562-5.656 0l-0.707-0.707c-1.562-1.562-1.562-4.096 0-5.658l4.949-4.949 6.364 6.363-4.95 4.951zM25.4 7.308l-0.707-0.707c-1.952-1.953-5.118-1.953-7.071 0l-5.657 5.656 7.778 7.778 5.657-5.656c1.953-1.953 1.953-5.119 0-7.071z\"></path>\n</svg>");
};
var houseIcon = function (_a) {
    var iconColor = _a.iconColor;
    return "<svg version=\"1.0\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n\t width=\"15px\" height=\"15px\" viewBox=\"0 0 64 64\" enable-background=\"new 0 0 64 64\" xml:space=\"preserve\">\n<g>\n\t<path fill=\"#F9EBB2\" d=\"M56,60c0,1.104-0.896,2-2,2H38V47c0-0.553-0.447-1-1-1H27c-0.553,0-1,0.447-1,1v15H10c-1.104,0-2-0.896-2-2\n\t\tV31.411L32.009,7.403L56,31.394V60z\"/>\n\t<polygon fill=\"".concat(iconColor || 'red', "\" points=\"14,6 18,6 18,12.601 14,16.593 \"/>\n\t<rect x=\"28\" y=\"48\" fill=\"#F9EBB2\" width=\"8\" height=\"14\"/>\n\t<path fill=\"").concat(iconColor || 'red', "\" d=\"M61,33c-0.276,0-0.602-0.036-0.782-0.217L32.716,5.281c-0.195-0.195-0.451-0.293-0.707-0.293\n\t\ts-0.512,0.098-0.707,0.293L3.791,32.793C3.61,32.974,3.276,33,3,33c-0.553,0-1-0.447-1-1c0-0.276,0.016-0.622,0.197-0.803\n\t\tL31.035,2.41c0,0,0.373-0.41,0.974-0.41s0.982,0.398,0.982,0.398l28.806,28.805C61.978,31.384,62,31.724,62,32\n\t\tC62,32.552,61.553,33,61,33z\"/>\n\t<g>\n\t\t<path fill=\"").concat(iconColor || 'red', "\" d=\"M63.211,29.789L34.438,1.015c0,0-0.937-1.015-2.43-1.015s-2.376,0.991-2.376,0.991L20,10.604V5\n\t\t\tc0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v13.589L0.783,29.783C0.24,30.326,0,31.172,0,32c0,1.656,1.343,3,3,3\n\t\t\tc0.828,0,1.662-0.251,2.205-0.794L6,33.411V60c0,2.211,1.789,4,4,4h44c2.211,0,4-1.789,4-4V33.394l0.804,0.804\n\t\t\tC59.347,34.739,60.172,35,61,35c1.657,0,3-1.343,3-3C64,31.171,63.754,30.332,63.211,29.789z M14,6h4v6.601l-4,3.992V6z M36,62h-8\n\t\t\tV48h8V62z M56,60c0,1.104-0.896,2-2,2H38V47c0-0.553-0.447-1-1-1H27c-0.553,0-1,0.447-1,1v15H10c-1.104,0-2-0.896-2-2V31.411\n\t\t\tL32.009,7.403L56,31.394V60z M61,33c-0.276,0-0.602-0.036-0.782-0.217L32.716,5.281c-0.195-0.195-0.451-0.293-0.707-0.293\n\t\t\ts-0.512,0.098-0.707,0.293L3.791,32.793C3.61,32.974,3.276,33,3,33c-0.553,0-1-0.447-1-1c0-0.276,0.016-0.622,0.197-0.803\n\t\t\tL31.035,2.41c0,0,0.373-0.41,0.974-0.41s0.982,0.398,0.982,0.398l28.806,28.805C61.978,31.384,62,31.724,62,32\n\t\t\tC62,32.552,61.553,33,61,33z\"/>\n\t\t<path fill=\"").concat(iconColor || 'red', "\" d=\"M23,32h-8c-0.553,0-1,0.447-1,1v8c0,0.553,0.447,1,1,1h8c0.553,0,1-0.447,1-1v-8\n\t\t\tC24,32.447,23.553,32,23,32z M22,40h-6v-6h6V40z\"/>\n\t\t<path fill=\"").concat(iconColor || 'red', "\" d=\"M41,42h8c0.553,0,1-0.447,1-1v-8c0-0.553-0.447-1-1-1h-8c-0.553,0-1,0.447-1,1v8\n\t\t\tC40,41.553,40.447,42,41,42z M42,34h6v6h-6V34z\"/>\n\t</g>\n\t<rect x=\"28\" y=\"48\" fill=\"#506C7F\" width=\"8\" height=\"14\"/>\n\t<g>\n\t\t<rect x=\"16\" y=\"34\" fill=\"#45AAB8\" width=\"6\" height=\"6\"/>\n\t\t<rect x=\"42\" y=\"34\" fill=\"#45AAB8\" width=\"6\" height=\"6\"/>\n\t</g>\n</g>\n</svg>");
};
var schoolIcon = function (_a) {
    var iconColor = _a.iconColor;
    return "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\"  viewBox=\"0 0 478.68 478.68\" xml:space=\"preserve\" width=\"20\" height=\"20\">\n<g id=\"_x32_8._School_2_\">\n\t<g id=\"XMLID_76_\">\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<polygon style=\"fill:#F2D59F;\" points=\"468.68,255.61 468.68,463.15 376.95,463.15 376.95,255.6 468.67,255.6     \"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<polygon style=\"fill:#8ECAC1;\" points=\"416.91,186.8 468.67,255.6 376.95,255.6 376.95,186.8     \"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:#F2D59F;\" d=\"M376.95,255.6v207.55h-91.74v-100.4h-45.87h-45.87v100.4h-91.74V255.6v-68.8L239.34,118      l137.61,68.8V255.6z M261.92,205.41c0-12.47-10.11-22.58-22.58-22.58s-22.58,10.11-22.58,22.58s10.11,22.58,22.58,22.58      S261.92,217.88,261.92,205.41z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<polygon style=\"fill:#FF7124;\" points=\"326.06,15.53 294.99,41.85 326.06,68.17 239.34,68.17 239.34,15.53     \"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<rect x=\"239.34\" y=\"362.75\" style=\"fill:#FF7124;\" width=\"45.87\" height=\"100.4\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<circle style=\"fill:#E6B263;\" cx=\"239.34\" cy=\"205.41\" r=\"22.58\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<rect x=\"193.47\" y=\"362.75\" style=\"fill:#FF7124;\" width=\"45.87\" height=\"100.4\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<polygon style=\"fill:#F2D59F;\" points=\"101.73,255.6 101.73,463.15 10,463.15 10,255.61 10.01,255.6     \"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<polygon style=\"fill:#8ECAC1;\" points=\"101.73,186.8 101.73,255.6 10.01,255.6 61.77,186.8     \"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:".concat(iconColor || 'red', ";\" d=\"M376.95,473.15h-91.74c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.74      c5.522,0,10,4.477,10,10C386.95,468.673,382.473,473.15,376.95,473.15z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M193.47,473.15h-91.74c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.74      c5.522,0,10,4.477,10,10C203.47,468.673,198.992,473.15,193.47,473.15z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M101.729,473.15H10c-5.523,0-10-4.477-10-10V255.61c0-5.523,4.477-10,10-10      c5.522,0,10,4.477,10,10v197.54h81.729c5.522,0,10,4.477,10,10C111.729,468.673,107.252,473.15,101.729,473.15z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M101.729,265.6H10.01c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.72      c5.522,0,10,4.477,10,10C111.729,261.122,107.252,265.6,101.729,265.6z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M468.67,265.6h-91.72c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h91.72      c5.522,0,10,4.477,10,10C478.67,261.122,474.192,265.6,468.67,265.6z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M468.68,473.15H376.95c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h81.729V255.61      c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10v207.54C478.68,468.673,474.202,473.15,468.68,473.15z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M285.21,472.15h-91.74c-4.971,0-9-4.029-9-9v-100.4c0-4.971,4.029-9,9-9h91.74      c4.971,0,9,4.029,9,9v100.4C294.21,468.121,290.181,472.15,285.21,472.15z M202.47,454.15h73.74v-82.4h-73.74V454.15z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M55.87,424.57c-5.522,0-10-4.477-10-10V392.6c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C65.87,420.093,61.393,424.57,55.87,424.57z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M422.81,424.57c-5.522,0-10-4.477-10-10V392.6c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C432.81,420.093,428.332,424.57,422.81,424.57z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M55.87,345.09c-5.522,0-10-4.477-10-10v-21.97c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C65.87,340.613,61.393,345.09,55.87,345.09z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M422.81,345.09c-5.522,0-10-4.477-10-10v-21.97c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.97C432.81,340.613,428.332,345.09,422.81,345.09z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M147.6,394.71c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.96C157.6,390.233,153.122,394.71,147.6,394.71z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M331.08,394.71c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10      v21.96C341.08,390.233,336.603,394.71,331.08,394.71z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M147.6,315.23c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.522,0,10,4.477,10,10      v21.96C157.6,310.753,153.122,315.23,147.6,315.23z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M331.08,315.23c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10      v21.96C341.08,310.753,336.603,315.23,331.08,315.23z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M239.34,315.23c-5.522,0-10-4.477-10-10v-21.96c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10      v21.96C249.34,310.753,244.862,315.23,239.34,315.23z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M468.674,265.607c-2.639,0-5.271-1.039-7.235-3.101c-0.267-0.28-0.527-0.586-0.76-0.895      L411.92,196.8h-34.97c-5.522,0-10-4.477-10-10c0-5.523,4.478-10,10-10h39.96c3.143,0,6.102,1.477,7.991,3.988l51.684,68.698      c3.102,4.005,2.733,9.791-1.014,13.36C473.635,264.691,471.151,265.607,468.674,265.607z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M10.001,265.603c-2.478,0-4.958-0.914-6.892-2.756c-3.769-3.589-4.127-9.413-0.969-13.418      l51.639-68.64c1.89-2.511,4.849-3.988,7.991-3.988h39.96c5.522,0,10,4.477,10,10c0,5.523-4.478,10-10,10H66.76l-48.759,64.811      c-0.232,0.309-0.483,0.604-0.75,0.885C15.284,264.561,12.644,265.603,10.001,265.603z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M239.34,472.15c-4.971,0-9-4.029-9-9v-100.4c0-4.971,4.029-9,9-9s9,4.029,9,9v100.4      C248.34,468.121,244.311,472.15,239.34,472.15z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M376.95,473.15c-5.522,0-10-4.477-10-10V192.98l-127.61-63.8l-127.61,63.8V463.15      c0,5.523-4.478,10-10,10c-5.522,0-10-4.477-10-10V186.8c0-3.788,2.141-7.251,5.528-8.944l137.61-68.8      c2.814-1.407,6.129-1.407,8.943,0l137.61,68.8c3.388,1.694,5.528,5.157,5.528,8.944v276.35      C386.95,468.673,382.473,473.15,376.95,473.15z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M239.34,128c-5.522,0-10-4.477-10-10V68.17c0-5.523,4.478-10,10-10c5.523,0,10,4.477,10,10V118      C249.34,123.523,244.862,128,239.34,128z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M326.06,78.17h-86.72c-5.522,0-10-4.477-10-10V15.53c0-5.523,4.478-10,10-10h86.72      c4.195,0,7.944,2.619,9.389,6.558c1.444,3.939,0.276,8.361-2.925,11.073l-22.063,18.69l22.063,18.69      c3.201,2.712,4.369,7.134,2.925,11.073C334.004,75.551,330.255,78.17,326.06,78.17z M249.34,58.17h49.444l-10.258-8.69      c-2.243-1.9-3.536-4.69-3.536-7.63c0-2.94,1.293-5.73,3.536-7.63l10.258-8.69H249.34V58.17z\"/>\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<path style=\"fill:").concat(iconColor || 'red', ";\" d=\"M239.34,236.99c-17.413,0-31.58-14.167-31.58-31.58s14.167-31.58,31.58-31.58      s31.58,14.167,31.58,31.58S256.753,236.99,239.34,236.99z M239.34,191.83c-7.488,0-13.58,6.092-13.58,13.58      c0,7.488,6.092,13.58,13.58,13.58s13.58-6.092,13.58-13.58C252.92,197.922,246.828,191.83,239.34,191.83z\"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n</g>\n</svg>");
};
var arrowUpIcon = function () {
    return "<svg fill=\"#000000\" height=\"20px\" width=\"20px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 330 330\" xml:space=\"preserve\">\n                <path id=\"XMLID_225_\" d=\"M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z\"/>\n            </svg>";
};
var arrowDownIcon = function () {
    return "<svg fill=\"#000000\" height=\"20px\" width=\"20px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 330 330\" xml:space=\"preserve\">\n            <path id=\"XMLID_224_\" d=\"M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z\"/>\n        </svg>";
};
var infoIcon = function () {
    return "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 25 25\">\n    <g id=\"\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C_186\" data-name=\"\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 186\" transform=\"translate(-376 -747)\">\n        <g id=\"\u042D\u043B\u043B\u0438\u043F\u0441_80\" data-name=\"\u042D\u043B\u043B\u0438\u043F\u0441 80\" transform=\"translate(376 747)\" fill=\"none\" stroke=\"#0067b9\" stroke-width=\"2\">\n            <circle cx=\"10\" cy=\"10\" r=\"10\" stroke=\"none\"/>\n            <circle cx=\"10\" cy=\"10\" r=\"9\" fill=\"none\"/>\n        </g>\n        <g id=\"\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C_157\" data-name=\"\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 157\" transform=\"translate(1879.223 -9641.982) rotate(180)\">\n            <g id=\"\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C_145\" data-name=\"\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 145\" transform=\"translate(1492.199 -10404.029)\">\n                <path id=\"\u041A\u043E\u043D\u0442\u0443\u0440_129\" data-name=\"\u041A\u043E\u043D\u0442\u0443\u0440 129\" d=\"M6.5,9.677a.912.912,0,0,1-.913-.913V4.738a.913.913,0,1,1,1.826,0V8.764A.912.912,0,0,1,6.5,9.677Z\" transform=\"translate(-5.585 -3.825)\" fill=\"#0067b9\"/>\n            </g>\n            <g id=\"\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C_146\" data-name=\"\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 146\" transform=\"translate(1492.016 -10396.144)\">\n                <circle id=\"\u042D\u043B\u043B\u0438\u043F\u0441_79\" data-name=\"\u042D\u043B\u043B\u0438\u043F\u0441 79\" cx=\"1.095\" cy=\"1.095\" r=\"1.095\" fill=\"#0067b9\"/>\n            </g>\n        </g>\n    </g>\n</svg>\n";
};
function getIcon(type) {
    switch (type) {
        case 'house':
            return houseIcon;
        case 'school':
            return schoolIcon;
        case 'post':
            return pilIcon;
        case 'pharmacy':
            return pilIcon;
        case 'post and pharmacy':
            return pilIcon;
        case 'arrowUpIcon':
            return arrowUpIcon();
        case 'infoIcon':
            return infoIcon();
        case 'arrowDownIcon':
            return arrowDownIcon();
        default:
            return circleIcon;
    }
}
;


/***/ }),

/***/ "./src/components/throttle.tsx":
/*!*************************************!*\
  !*** ./src/components/throttle.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = throttle;
function throttle(func, ms) {
    var isThrottled = false;
    var savedArgs;
    var savedThis;
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply(this, arguments); // (1)
        isThrottled = true;
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}


/***/ }),

/***/ "./src/components/useDebounce.tsx":
/*!****************************************!*\
  !*** ./src/components/useDebounce.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = useDebounce;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function useDebounce(value, delay) {
    var _a = (0, react_1.useState)(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    (0, react_1.useEffect)(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value]);
    return debouncedValue;
}


/***/ }),

/***/ "./src/components/useWindowSize.tsx":
/*!******************************************!*\
  !*** ./src/components/useWindowSize.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = useWindowSize;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var throttle_1 = __importDefault(__webpack_require__(/*! ./throttle */ "./src/components/throttle.tsx"));
function useWindowSize(ms) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.default.useState({
        width: undefined,
        height: undefined,
    }), windowSize = _a[0], setWindowSize = _a[1];
    react_1.default.useEffect(function () {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        var throttledHandleResize = (0, throttle_1.default)(handleResize, ms);
        window.addEventListener("resize", throttledHandleResize);
        handleResize();
        return function () { return window.removeEventListener("resize", throttledHandleResize); };
    }, []);
    return windowSize;
}
;


/***/ }),

/***/ "./src/map.tsx":
/*!*********************!*\
  !*** ./src/map.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var client_1 = __importDefault(__webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js"));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var MapApp_1 = __importDefault(__webpack_require__(/*! ./components/MapApp */ "./src/components/MapApp.tsx"));
var root = client_1.default.createRoot(document.getElementById("root"));
root.render(react_1.default.createElement(MapApp_1.default, null));


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23052c65%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27none%27 stroke=%27%23212529%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpath d=%27M2 5L8 11L14 5%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23dee2e6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"map": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmap"] = self["webpackChunkmap"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_algoliasearch_dist_algoliasearch_umd_js-node_modules_react-bootstrap_esm-c2d8c5"], () => (__webpack_require__("./src/map.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=map93dcff18524cbd0d3517.js.map