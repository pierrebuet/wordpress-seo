yoastWebpackJsonp([65],{

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n!function (e, a) {\n  \"object\" == ( false ? \"undefined\" : _typeof(exports)) && \"undefined\" != typeof module ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}, e.ReactIntlLocaleData.ru = a());\n}(undefined, function () {\n  \"use strict\";\n  return [{ locale: \"ru\", pluralRuleFunction: function pluralRuleFunction(e, a) {\n      var t = String(e).split(\".\"),\n          r = t[0],\n          o = !t[1],\n          n = r.slice(-1),\n          l = r.slice(-2);return a ? \"other\" : o && 1 == n && 11 != l ? \"one\" : o && n >= 2 && n <= 4 && (l < 12 || l > 14) ? \"few\" : o && 0 == n || o && n >= 5 && n <= 9 || o && l >= 11 && l <= 14 ? \"many\" : \"other\";\n    }, fields: { year: { displayName: \"год\", relative: { 0: \"в этом году\", 1: \"в следующем году\", \"-1\": \"в прошлом году\" }, relativeTime: { future: { one: \"через {0} год\", few: \"через {0} года\", many: \"через {0} лет\", other: \"через {0} года\" }, past: { one: \"{0} год назад\", few: \"{0} года назад\", many: \"{0} лет назад\", other: \"{0} года назад\" } } }, month: { displayName: \"месяц\", relative: { 0: \"в этом месяце\", 1: \"в следующем месяце\", \"-1\": \"в прошлом месяце\" }, relativeTime: { future: { one: \"через {0} месяц\", few: \"через {0} месяца\", many: \"через {0} месяцев\", other: \"через {0} месяца\" }, past: { one: \"{0} месяц назад\", few: \"{0} месяца назад\", many: \"{0} месяцев назад\", other: \"{0} месяца назад\" } } }, day: { displayName: \"день\", relative: { 0: \"сегодня\", 1: \"завтра\", 2: \"послезавтра\", \"-2\": \"позавчера\", \"-1\": \"вчера\" }, relativeTime: { future: { one: \"через {0} день\", few: \"через {0} дня\", many: \"через {0} дней\", other: \"через {0} дня\" }, past: { one: \"{0} день назад\", few: \"{0} дня назад\", many: \"{0} дней назад\", other: \"{0} дня назад\" } } }, hour: { displayName: \"час\", relative: { 0: \"в этом часе\" }, relativeTime: { future: { one: \"через {0} час\", few: \"через {0} часа\", many: \"через {0} часов\", other: \"через {0} часа\" }, past: { one: \"{0} час назад\", few: \"{0} часа назад\", many: \"{0} часов назад\", other: \"{0} часа назад\" } } }, minute: { displayName: \"минута\", relative: { 0: \"в эту минуту\" }, relativeTime: { future: { one: \"через {0} минуту\", few: \"через {0} минуты\", many: \"через {0} минут\", other: \"через {0} минуты\" }, past: { one: \"{0} минуту назад\", few: \"{0} минуты назад\", many: \"{0} минут назад\", other: \"{0} минуты назад\" } } }, second: { displayName: \"секунда\", relative: { 0: \"сейчас\" }, relativeTime: { future: { one: \"через {0} секунду\", few: \"через {0} секунды\", many: \"через {0} секунд\", other: \"через {0} секунды\" }, past: { one: \"{0} секунду назад\", few: \"{0} секунды назад\", many: \"{0} секунд назад\", other: \"{0} секунды назад\" } } } } }, { locale: \"ru-BY\", parentLocale: \"ru\" }, { locale: \"ru-KG\", parentLocale: \"ru\" }, { locale: \"ru-KZ\", parentLocale: \"ru\" }, { locale: \"ru-MD\", parentLocale: \"ru\" }, { locale: \"ru-UA\", parentLocale: \"ru\" }];\n});\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/joostdevalk/Code/GitHub/wordpress-seo/node_modules/react-intl/locale-data/ru.js\n// module id = 515\n// module chunks = 65\n\n//# sourceURL=webpack:////Users/joostdevalk/Code/GitHub/wordpress-seo/node_modules/react-intl/locale-data/ru.js?");

/***/ })

});