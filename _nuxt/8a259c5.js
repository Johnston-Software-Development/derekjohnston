(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4],{385:function(t,e,n){"use strict";n.r(e);n(185);var o={props:{id:{type:String,default:"1"},isOpen:{type:Boolean,default:!1},title:{type:String,default:""},variant:{type:String,default:"success"},link:{type:String|Boolean,default:null},localLink:{type:String,default:null}},mounted:function(){this.visible=this.isOpen},data:function(){return{visible:!1}}},l=(n(387),n(39)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"card mx-0 px-0"},[e("div",{staticClass:"card-header bg-success"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-2"}),e("div",{staticClass:"col-8"},[t.localLink?e("router-link",{attrs:{to:t.localLink}},[e("h4",[t._v(t._s(t.title))])]):t.link?e("a",{attrs:{href:t.link}},[e("h4",[t._v(t._s(t.title))])]):e("h4",[t._v(t._s(t.title))])],1),e("div",{staticClass:"col-2 align-right text-white px-0"},[e("b-button",{staticClass:"m-1",class:t.visible?null:"collapsed",attrs:{variant:t.variant,"aria-expanded":t.visible?"true":"false","aria-controls":"collapse-"+t.id},on:{click:function(e){t.visible=!t.visible}}},[t.visible?e("i",{staticClass:"fa fa-chevron-up"}):e("i",{staticClass:"fa fa-chevron-down"})])],1)])]),e("div",{staticClass:"card-body m-0 p-0"},[e("b-collapse",{attrs:{id:"collapse-"+t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t._t("default")],2)],1)])])}),[],!1,null,"e15bff02",null);e.default=component.exports},386:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("85023996",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n(386)},388:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,".collapsed>.when-opened[data-v-e15bff02],:not(.collapsed)>.when-closed[data-v-e15bff02]{display:none}.card[data-v-e15bff02]{margin-top:10px}.p[data-v-e15bff02]{text-indent:2em}",""]),o.locals={},t.exports=o},392:function(t,e,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("2c26b741",content,!0,{sourceMap:!1})},398:function(t,e,n){"use strict";n.r(e);n(24),n(66),n(94),n(17);var o={computed:{currentRouteName:function(){return this.$route.name}},components:{dropdown:n(385).default},data:function(){return{projects:[{id:"5",name:"YHP",address:"https://youville-haussmannpark.com/",about:"Lead Full Stack Developer",quote:"YHP is an experience agency. Not just experiential, and not just branded events. YHP specializes in tapping into human experiences to create lasting brand engagement for its clients. YHP works with brands to plan, execute and capture emotional and memorable moments. Through impossibly on-point experiential campaigns and industry best practices, YHP is strengthening relationships between brands and their customers. Armed with a deep understanding of the emerging arts, culture and the need to share human experiences, YHP builds unique brand experiences and engagement strategies to engage with the mindset and motivations of real people.",responsiblities:["Constantly improving the code base","Deciding if development is possible or not while giving possible alternatives","Assisting with consultation and troubleshooting of technical problems","Helping provide estimations of work","Coachin","Working on multiple projects at the same time","Merging and Deploying projects","Upgrading library dependancies."],techs:["GatsbyJS","NextJS","ReactJS","TypeScript","JavaScript","WordPress","Symfony","PhP","Docker","AWS","ClickUp","TeamWork","Bitbucket","Playfab","SaSS"]},{id:"2",name:"E-Data Now!",address:"./projects/EDataNow",local:!0,image:"https://media-exp1.licdn.com/dms/image/C4D0BAQGKWsYf3h1Brg/company-logo_200_200/0?e=1597881600&v=beta&t=xCDbYKHX1utCfufYIgnG1Cd3EaSAXBXZrsxnM9Wn1ac",about:"At this Audit and Inspection company, working on a large administrative website and 2 supporting monbile apps."},{id:"3",name:"Hackathons",address:"./projects/hackathons",local:!0,image:"https://avatars2.githubusercontent.com/u/41805626?s=200&v=4",about:"Examples of Hackathon projects."},{id:"2",name:"Oiika",address:"https://Oiika.com",image:"https://media-exp1.licdn.com/dms/image/C560BAQE4SjQ4e5b-sg/company-logo_200_200/0?e=1597881600&v=beta&t=i3hWuPgeSdgVqgUBJ9rPgA9Um6ItpRyLqrq5lJAP90Q",about:"Connecting tutors and tutees!"},{id:"1",name:"Who's Jimmy",address:"http://whosjimmy.com/",image:"http://whosjimmy.com/img/JIMMY_CLAWS.jpg",about:"Personal Portfolio of a Skilled Film Machinist, website has been reconstructed, deploy pending client approval."},{id:"0",name:"TBD",address:"./projects/communication",local:!0,image:"/taptalk.png",about:"Communication App(iOS, Andriod, and UWP), Designed for non-verbal or limited verbal people."}]}}},l=(n(403),n(39)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card my-2"},[e("div",{staticClass:"card-header bg-success"},[e("H1",[t._v("Projects")])],1),e("div",{staticClass:"card-body"},[t._m(0),e("div",{staticClass:"row"},t._l(t.projects,(function(n){return e("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 col-xxl-4 my-1"},[e("dropdown",{attrs:{id:n.id,title:n.name,localLink:n.local&&n.address.length>0&&n.address,link:!n.local&&n.address.length>0&&n.address,isOpen:t.currentRouteName.includes("projects")}},[e("div",{staticClass:"card m-0 p-0"},[n.quote?e("div",{staticClass:"card-header text-black"},[t._v('"'+t._s(n.quote)+'"')]):t._e(),n.about?e("div",{staticClass:"card-body"},[e("p",{staticClass:"card-text"},[t._v(t._s(n.about))])]):t._e(),n.details||n.techs?e("div",{staticClass:"card-footer"},[n.details?e("div",{staticClass:"card-text"},[t._v(t._s(n.details))]):t._e(),n.techs&&n.techs.length>0?e("div",{staticClass:"card-text"},[t._v(t._s(n.techs.join(", "))+".")]):t._e()]):t._e()])])],1)})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[this._v("*click on a title to view examples*")])])}],!1,null,"05058676",null);e.default=component.exports;installComponents(component,{Dropdown:n(385).default})},403:function(t,e,n){"use strict";n(392)},404:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,".card-header[data-v-05058676]{background-color:#fff}",""]),o.locals={},t.exports=o}}]);