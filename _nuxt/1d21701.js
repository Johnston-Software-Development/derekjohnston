(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{414:function(t,e,c){var content=c(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(54).default)("0e6c0ab6",content,!0,{sourceMap:!1})},430:function(t,e,c){"use strict";c(414)},431:function(t,e,c){var r=c(53)((function(i){return i[1]}));r.push([t.i,"#awards[data-v-2460ccc5],#label[data-v-2460ccc5],#location[data-v-2460ccc5],#summary[data-v-2460ccc5],#volunteer[data-v-2460ccc5],#work[data-v-2460ccc5]{margin-bottom:1em}#subtitle[data-v-2460ccc5]{padding-left:0}.name[data-v-2460ccc5]{color:#000;text-shadow:none}",""]),r.locals={},t.exports=r},445:function(t,e,c){"use strict";c.r(e);c(24),c(5),c(4),c(2),c(1),c(6),c(3),c(7);var r=c(0),l=c(429);function o(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,r)}return c}var d={computed:function(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?o(Object(c),!0).forEach((function(e){Object(r.a)(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}({},Object(l.a)(["resume"]))},n=d,v=(c(430),c(39)),component=Object(v.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t.resume.basics.image.length?e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-6"},[e("h1",{staticClass:"name"},[t._v(t._s(t.resume.basics.name))])])]):e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"name"},[t._v(t._s(t.resume.basics.name))])])]),e("div",{staticClass:"row",attrs:{id:"label"}},[e("div",{staticClass:"col-12"},[t._v(t._s(t.resume.basics.label))])]),e("div",{staticClass:"row",attrs:{id:"basics"}},[e("div",{staticClass:"col-md-4"},[e("a",{attrs:{href:"mailto:"+t.resume.basics.email}},[t._v(t._s(t.resume.basics.email))])]),e("div",{staticClass:"col-md-4"},[t._v(t._s(t.resume.basics.phone))]),e("div",{staticClass:"col-md-4"},[e("a",{attrs:{href:t.resume.basics.url}},[t._v(t._s(t.resume.basics.url))])])]),e("div",{staticClass:"row",attrs:{id:"profiles"}},t._l(t.resume.basics.profiles,(function(c,r){return e("div",{staticClass:"col-md-4"},[e("a",{attrs:{href:c.url}},[t._v(t._s(c.url))])])})),0),e("div",{staticClass:"row",attrs:{id:"location"}},[e("div",{staticClass:"col-md-4"},[t._v(t._s(t.resume.basics.location.address))]),e("div",{staticClass:"col-md-4"},[t._v(t._s(t.resume.basics.location.city))]),e("div",{staticClass:"col-md-4"},[t._v(t._s(t.resume.basics.location.region))])]),e("div",{staticClass:"row",attrs:{id:"summary"}},[e("div",{staticClass:"col-md-12"},[t._v(t._s(t.resume.basics.summary))])]),t.resume.work.length>0?e("div",{staticClass:"row",attrs:{id:"subtitle"}},[t._m(1),t._l(t.resume.work,(function(c,r){return e("div",{staticClass:"col-12",attrs:{id:"work"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 text-left"},[e("h6",[t._v(t._s(c.company))])]),e("div",{staticClass:"col-md-6 text-right"},[e("h6",[t._v(t._s(c.startDate)+" - "+t._s(c.endDate))])]),e("div",{staticClass:"col-md-6 text-left"},[t._v(t._s(c.position))]),e("div",{staticClass:"col-md-6 text-right"},[e("a",{attrs:{href:c.website}},[t._v(t._s(c.website))])]),e("div",{staticClass:"col-12 text-left"},[t._v(t._s(c.summary))]),t._l(c.highlights,(function(c,r){return e("div",{staticClass:"col-md-4"},[t._v(t._s(c))])}))],2)])}))],2):t._e(),t.resume.volunteer.length>0?e("div",{staticClass:"row",attrs:{id:"subtitle"}},[t._m(2),t._l(t.resume.volunteer,(function(c,r){return e("div",{staticClass:"col-12",attrs:{id:"volunteer"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 text-left"},[e("h6",[t._v(t._s(c.organization))])]),e("div",{staticClass:"col-md-6 text-right"},[e("h6",[t._v(t._s(c.startDate)+" - "+t._s(c.endDate))])]),e("div",{staticClass:"col-md-6 text-left"},[t._v(t._s(c.position))]),e("div",{staticClass:"col-md-6 text-right"},[e("a",{attrs:{href:c.website}},[t._v(t._s(c.website))])]),e("div",{staticClass:"col-12 text-left"},[t._v(t._s(c.summary))]),t._l(c.highlights,(function(c,r){return e("div",{staticClass:"col-6"},[t._v(t._s(c))])}))],2)])}))],2):t._e(),t.resume.education.length>0?e("div",{staticClass:"row",attrs:{id:"subtitle"}},[t._m(3),t._l(t.resume.education,(function(c,r){return e("div",{staticClass:"col-12",attrs:{id:"education"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 text-left"},[e("h6",[t._v(t._s(c.institution))])]),e("div",{staticClass:"col-md-6 text-right"},[e("h6",[t._v(t._s(c.startDate)+" - "+t._s(c.endDate))])]),e("div",{staticClass:"col-md-6 text-left"},[t._v(t._s(c.area)+", "+t._s(c.studyType))]),e("div",{staticClass:"col-md-6 text-right"},[t._v(t._s(c.gpa))]),t._l(c.courses,(function(c,r){return e("div",{staticClass:"col-md-4"},[t._v(t._s(c))])}))],2)])}))],2):t._e(),t.resume.awards.length>0?e("div",{staticClass:"row",attrs:{id:"subtitle"}},[t._m(4),t._l(t.resume.awards,(function(c,r){return e("div",{staticClass:"col-md-6",attrs:{id:"awards"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 text-left"},[e("h6",[t._v(t._s(c.title))])]),e("div",{staticClass:"col-md-6 text-right"},[e("h6",[t._v(t._s(c.date))])]),e("div",{staticClass:"col-md-6 text-left"},[t._v(t._s(c.awarder))]),e("div",{staticClass:"col-md-6 text-right"},[t._v(t._s(c.summary))])])])}))],2):t._e(),t.resume.references.length>0?e("div",{staticClass:"row",attrs:{id:"subtitle"}},[t._m(5),t._l(t.resume.interests,(function(c,r){return e("div",{staticClass:"col-3",attrs:{id:"interests"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h6",[t._v(t._s(c.name))]),t._l(c.keywords,(function(c,r){return e("section",[t._v(t._s(c))])}))],2)])])}))],2):t._e(),t.resume.references.length>0?e("div",{staticClass:"row",attrs:{id:"subtitle"}},[t._m(6),t._l(t.resume.references,(function(c,r){return e("div",{staticClass:"col-6",attrs:{id:"reference"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 text-left"},[e("h6",[t._v(t._s(c.name))]),t._v(t._s(c.reference))])])])}))],2):e("div",{staticClass:"row",attrs:{id:"subtitle"}},[e("div",{staticClass:"col-12 text-right",attrs:{id:"subtitle"}},[t._v("references aviable upon request.")])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-3"},[t("img",{attrs:{src:"resume.basics.image"}})])},function(){var t=this._self._c;return t("div",{staticClass:"col-12 text-left",attrs:{id:"subtitle"}},[t("h5",[this._v("Work Experience")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12 text-left",attrs:{id:"subtitle"}},[t("h5",[this._v("Volunteer Experience")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12 text-left",attrs:{id:"subtitle"}},[t("h5",[this._v("Education")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12 text-left",attrs:{id:"subtitle"}},[t("h5",[this._v("Awards")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12 text-left",attrs:{id:"subtitle"}},[t("h5",[this._v("Interests")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12 text-left",attrs:{id:"subtitle"}},[t("h5",[this._v("References")])])}],!1,null,"2460ccc5",null);e.default=component.exports}}]);