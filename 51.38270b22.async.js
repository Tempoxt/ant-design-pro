(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{FVlm:function(p,l,a){p.exports={numberInfo:"antd-pro-pages-dashboard-analysis-components-number-info-index-numberInfo",suffix:"antd-pro-pages-dashboard-analysis-components-number-info-index-suffix",numberInfoTitle:"antd-pro-pages-dashboard-analysis-components-number-info-index-numberInfoTitle",numberInfoSubTitle:"antd-pro-pages-dashboard-analysis-components-number-info-index-numberInfoSubTitle",numberInfoValue:"antd-pro-pages-dashboard-analysis-components-number-info-index-numberInfoValue",subTotal:"antd-pro-pages-dashboard-analysis-components-number-info-index-subTotal",anticon:"antd-pro-pages-dashboard-analysis-components-number-info-index-anticon",numberInfolight:"antd-pro-pages-dashboard-analysis-components-number-info-index-numberInfolight"}},Hq6x:function(p,l,a){"use strict";var M=a("0Owb"),h=a("jrin"),D=a("PpiC"),d=a("ek7X"),T=a("0NbB"),y=a("q1tI"),_=a.n(y),E=a("TSYQ"),i=a.n(E),c=a("FVlm"),e=a.n(c),u=function(n){var P=n.theme,s=n.title,m=n.subTitle,b=n.total,f=n.subTotal,t=n.status,o=n.suffix,r=n.gap,O=Object(D.a)(n,["theme","title","subTitle","total","subTotal","status","suffix","gap"]);return _.a.createElement("div",Object(M.a)({className:i()(e.a.numberInfo,Object(h.a)({},e.a["numberInfo".concat(P)],P))},O),s&&_.a.createElement("div",{className:e.a.numberInfoTitle,title:typeof s=="string"?s:""},s),m&&_.a.createElement("div",{className:e.a.numberInfoSubTitle,title:typeof m=="string"?m:""},m),_.a.createElement("div",{className:e.a.numberInfoValue,style:r?{marginTop:r}:{}},_.a.createElement("span",null,b,o&&_.a.createElement("em",{className:e.a.suffix},o)),(t||f)&&_.a.createElement("span",{className:e.a.subTotal},f,t&&t==="up"?_.a.createElement(d.a,null):_.a.createElement(T.a,null))))};l.a=u},vvVX:function(p,l,a){"use strict";a.r(l);var M=a("IzEo"),h=a("bx4M"),D=a("Znn+"),d=a("ZTPi"),T=a("14J3"),y=a("BMrR"),_=a("jCWc"),E=a("kPKH"),i=a("9kvl"),c=a("q1tI"),e=a.n(c),u=a("ucLW"),R=a("Hq6x"),n=a("UXoT"),P=a.n(n),s=function(t){var o=t.data,r=t.currentTabKey;return e.a.createElement(y.a,{gutter:8,style:{width:138,margin:"8px 0"},type:"flex"},e.a.createElement(E.a,{span:12},e.a.createElement(R.a,{title:o.name,subTitle:e.a.createElement(i.a,{id:"dashboardandanalysis.analysis.conversion-rate",defaultMessage:"Conversion Rate"}),gap:2,total:"".concat(o.cvr*100,"%"),theme:r!==o.name?"light":void 0})),e.a.createElement(E.a,{span:12,style:{paddingTop:36}},e.a.createElement(u.g,{animate:!1,inner:.55,tooltip:!1,margin:[0,0,0,0],percent:o.cvr*100,height:64})))},m=d.a.TabPane,b=function(t){var o=t.activeKey,r=t.loading,O=t.offlineData,v=t.offlineChartData,I=t.handleTabChange;return e.a.createElement(h.a,{loading:r,className:P.a.offlineCard,bordered:!1,style:{marginTop:32}},e.a.createElement(d.a,{activeKey:o,onChange:I},O.map(function(U){return e.a.createElement(m,{tab:e.a.createElement(s,{data:U,currentTabKey:o}),key:U.name},e.a.createElement("div",{style:{padding:"0 24px"}},e.a.createElement(u.h,{height:400,data:v,titleMap:{y1:Object(i.d)({id:"dashboardandanalysis.analysis.traffic"}),y2:Object(i.d)({id:"dashboardandanalysis.analysis.payments"})}})))})))};l.default=b}}]);