(this["webpackJsonpfa-app"]=this["webpackJsonpfa-app"]||[]).push([[3],{16:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));var r=function(t){localStorage.setItem("token",t)},c=function(){return localStorage.getItem("token")}},24:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),c=Object(r.createContext)(null)},31:function(t,e,n){"use strict";e.a={main:{$colorWhite:"#f8f8f8",$colorRed:"#e6756B",$colorLightGreen:"#c4c88f",$colorGreen:"#8b8974",$colorLightOrange:"#fae1d2",$colorYellow:"#F9d893",$colorGrey:"#777",$colorLightGrey:"#aaa",$borderRadius:"0.5rem",$fontFamily:"'Varela Round', 'cwTeXYen'",weatherCardBackgroundColor:"#eee",weatherCardColor:"#666",weatherCardHighLight:"#555"},dark:{weatherCardBackgroundColor:"#666",weatherCardColor:"#ddd",weatherCardHighLight:"#fff"}}},35:function(t,e,n){t.exports=n(47)},46:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),o=n(32),a=n.n(o),u=n(21),i=n.n(u),l=n(10),f=n(26),d=n(14),h=n(15),s=n(1),m=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7)]).then(n.bind(null,98))})),p=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,96))})),b=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9),n.e(8)]).then(n.bind(null,95))})),j=Object(r.lazy)((function(){return n.e(12).then(n.bind(null,99))})),O=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(11),n.e(10)]).then(n.bind(null,97))})),y=Object(r.lazy)((function(){return n.e(13).then(n.bind(null,100))})),g=function(){return c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(h.a,null,c.a.createElement(s.a,{exact:!0,path:"/",component:m}),c.a.createElement(s.a,{path:"/find-activity",component:p}),c.a.createElement(s.a,{path:"/activity/:id",component:b}),c.a.createElement(s.a,{path:"/new-activity",component:j}),c.a.createElement(s.a,{path:"/login-page",component:O}),c.a.createElement(s.a,{path:"/profile-page",component:y})))},w=(n(46),n(28)),S=n(31),E=n(24),v=n(16),k=n(7),C=function(){var t=Object(r.useState)([]),e=Object(d.a)(t,2),n=e[0],o=e[1],a=Object(r.useCallback)(Object(f.a)(i.a.mark((function t(){var e,n,r,c,a,u,f;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([Object(k.c)(),Object(k.d)(),Object(k.e)(),Object(k.b)(),Object(k.a)()]);case 2:e=t.sent,n=Object(d.a)(e,5),r=n[0],c=n[1],a=n[2],u=n[3],f=n[4],o([].concat(Object(l.a)(r),Object(l.a)(c),Object(l.a)(a),Object(l.a)(u),Object(l.a)(f)));case 10:case"end":return t.stop()}}),t)}))),[]);Object(r.useEffect)((function(){a()}),[a]);var u=Object(r.useMemo)((function(){return n.filter((function(t){return""!==t.imageUrl})).map((function(t,e){return t.id=e,t}))})),s=Object(r.useState)(null),m=Object(d.a)(s,2),p=m[0],b=m[1];return Object(r.useEffect)((function(){null!==Object(v.a)()&&Object(k.f)().then((function(t){1===t.ok&&b(t.data)}))}),[]),c.a.createElement(E.a.Provider,{value:{user:p,setUser:b,modifiedData:u}},c.a.createElement(w.a,{theme:S.a.main},c.a.createElement(h.a,null,c.a.createElement(g,null))))};a.a.render(c.a.createElement(C,null),document.getElementById("root"))},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return f})),n.d(e,"h",(function(){return d})),n.d(e,"f",(function(){return h}));var r=n(16),c=function(){return fetch("".concat("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")).then((function(t){return t.json()})).then((function(t){return t}))},o=function(){return fetch("".concat("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=4")).then((function(t){return t.json()})).then((function(t){return t}))},a=function(){return fetch("".concat("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=8")).then((function(t){return t.json()})).then((function(t){return t}))},u=function(){return fetch("".concat("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1")).then((function(t){return t.json()})).then((function(t){return t}))},i=function(){return fetch("".concat("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=7")).then((function(t){return t.json()})).then((function(t){return t}))},l="https://student-json-api.lidemy.me",f=function(t,e){return fetch("".concat(l,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:e})}).then((function(t){return t.json()}))},d=function(t,e,n){return fetch("".concat(l,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:t,username:e,password:n})}).then((function(t){return t.json()}))},h=function(){var t=Object(r.a)();return fetch("".concat(l,"/me"),{headers:{authorization:"Bearer ".concat(t)}}).then((function(t){return t.json()}))}}},[[35,4,5]]]);
//# sourceMappingURL=main.eee9dbaa.chunk.js.map