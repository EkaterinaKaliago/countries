(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={link:"CountryInfo_link__33RcY",countryInfo:"CountryInfo_countryInfo__2BZvL",countryInfoTitle:"CountryInfo_countryInfoTitle__hX028",countryInfoFlag:"CountryInfo_countryInfoFlag__grtbS",flexWrap:"CountryInfo_flexWrap__2sp6r",flexColumn:"CountryInfo_flexColumn__JRV9p"}},,,,,,,function(e,t,n){e.exports={link:"InfoCardLineItem_link__1Y1UE",countryInfoFlex:"InfoCardLineItem_countryInfoFlex__2DND4",countryInfoDesc:"InfoCardLineItem_countryInfoDesc__23vdI"}},function(e,t,n){e.exports={main:"HomePage_main__1ri2P",title:"HomePage_title__3J7RG",countries:"HomePage_countries__2AOu0"}},,,,,function(e,t,n){e.exports={link:"InfoCard_link__1vvu_",countryInfoWrap:"InfoCard_countryInfoWrap__1Rvh8",countryInfoTitle:"InfoCard_countryInfoTitle__1MSQH"}},,,,,function(e,t,n){e.exports={link:"CountryList_link__2X_07",country:"CountryList_country__2WyDj",countryWrap:"CountryList_countryWrap__EkK8Z",countryTitle:"CountryList_countryTitle__26js8"}},function(e,t,n){e.exports={link:"CountryItem_link__9NBTX",countryItem:"CountryItem_countryItem__CaZwU"}},,,function(e,t,n){e.exports={searchInput:"SearchInput_searchInput__2APvB"}},function(e,t,n){e.exports=n(46)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),c=n.n(o),l=(n(38),n(4)),u=n(5),i=n(7),s=n(6),m=n(8),p=(n(39),n(40),n(13)),f=n(11),y=n(14),h=n.n(y),g=n(16),v=function(e){return fetch("https://restcountries.eu/rest/v2/name/"+e)},_=n(28),E=n.n(_),b=n(29),d=n.n(b),I=n(17),j=n.n(I),C=function(e){return r.a.createElement("div",{className:j.a.countryInfoFlex},r.a.createElement("p",{className:j.a.countryInfoText},e.title),r.a.createElement("p",{className:j.a.countryInfoDesc},e.value))},O=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{title:e.country.name,value:r.a.createElement(p.b,{className:d.a.link,to:"/info/"+e.country.name.toLowerCase()},"more info")}),r.a.createElement(C,{title:"Capital",value:e.country.capital}),r.a.createElement(C,{title:"Population",value:e.country.population}),r.a.createElement(C,{title:"Language",value:e.country.languages.map((function(e){return e.name})).join(", ")}),r.a.createElement(C,{title:"Currency",value:e.country.currencies.map((function(e){return e.name})).join(", ")}))},x=function(e){return e.countries.map((function(e,t){return r.a.createElement("div",{key:t,className:E.a.countryWrap},r.a.createElement(O,{country:e}))}))},k=n(32),w=n.n(k),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{className:w.a.searchInput,type:"text",name:"country",placeholder:"Enter country name",value:this.props.value,onChange:this.props.onChanged,autoComplete:"off"})}}]),t}(a.Component),L=n(18),T=n.n(L),W=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={countries:[],searchText:""},n.onChanged=function(){var e=Object(g.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setState({searchText:t.target.value}),!(t.target.value.length<2)){e.next=4;break}return n.setState({countries:[]}),e.abrupt("return");case 4:return e.next=6,v(n.state.searchText);case 6:if(200!==(a=e.sent).status){e.next=15;break}return e.next=10,a.json();case 10:r=e.sent,console.log(r),n.setState({countries:r}),e.next=16;break;case 15:console.log("error");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:T.a.main},r.a.createElement("h1",{className:T.a.title},"Search for a country"),r.a.createElement(N,{value:this.state.searchText,onChanged:this.onChanged}),r.a.createElement("div",{className:T.a.countries},r.a.createElement(x,{countries:this.state.countries})))}}]),t}(a.Component),S=n(10),P=n.n(S),R=n(23),D=n.n(R),F=function(e){return r.a.createElement("div",{className:D.a.countryInfoWrap},r.a.createElement("p",{className:D.a.countryInfoTitle},e.title),e.children)};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var B=r.a.createElement("path",{d:"M.35 8.252L6.143.385c.677-.92 2.222-.02 1.535.914-1.669 2.265-3.337 4.53-5.004 6.796h31.824c1.146 0 1.146 1.809 0 1.809H2.674L7.678 16.7c.688.934-.856 1.834-1.535.914L.35 9.746c-.467-.343-.467-1.152 0-1.493z"}),H=function(e){var t=e.svgRef,n=e.title,a=A(e,["svgRef","title"]);return r.a.createElement("svg",M({viewBox:"0 0 36 18",ref:t},a),n?r.a.createElement("title",null,n):null,B)},z=r.a.forwardRef((function(e,t){return r.a.createElement(H,M({svgRef:t},e))})),J=(n.p,n(19)),G=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:P.a.countryInfo},r.a.createElement(p.b,{className:P.a.link,to:"/"},r.a.createElement(z,null),"back"),r.a.createElement("p",{className:P.a.countryInfoTitle},this.props.country.name),r.a.createElement("div",{className:P.a.flexWrap},r.a.createElement("div",{className:P.a.flexColumn},r.a.createElement(F,{title:"General info"},r.a.createElement(C,{title:"Capital",value:this.props.country.capital}),r.a.createElement(C,{title:"Population",value:this.props.country.population}),r.a.createElement(C,{title:"Language",value:this.props.country.languages.map((function(e){return e.name})).join(", ")}),r.a.createElement(C,{title:"Currency",value:this.props.country.currencies.map((function(e){return e.name})).join(", ")})),r.a.createElement(F,{title:"Geography"},r.a.createElement(C,{title:"Region",value:this.props.country.region}),r.a.createElement(C,{title:"Subregion",value:this.props.country.subregion}),r.a.createElement(C,{title:"Lat/Lng",value:this.props.country.latlng.join("/")}),r.a.createElement(C,{title:"Area",value:this.props.country.area})),r.a.createElement(F,{title:"Other info"},r.a.createElement(C,{title:"International calling code",value:this.props.country.callingCodes}),r.a.createElement(C,{title:"Timezone",value:this.props.country.timezones.join(", ")}),r.a.createElement(C,{title:"Land borders",value:this.props.country.languages.map((function(e){return e.name})).join(", ")}),r.a.createElement(C,{title:"Top level domain",value:this.props.country.topLevelDomain}))),r.a.createElement("div",{className:P.a.flexColumn},r.a.createElement("img",{src:this.props.country.flag,alt:this.props.country.name,className:P.a.countryInfoFlag}),r.a.createElement(J.c,null,r.a.createElement("div",null,r.a.createElement(J.b,{state:{center:[this.props.country.latlng[0],this.props.country.latlng[1]],zoom:4},width:"400px"},r.a.createElement(J.a,{geometry:[[this.props.country.latlng[0],this.props.country.latlng[1]],this.props.country.area],options:{draggable:!1,fillColor:"rgba(156,156,156,0.47)",strokeColor:"#787878",strokeOpacity:.8,strokeWidth:3}})))))))}}]),t}(a.Component),X=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={country:null,warningMessage:null},n.componentDidMount=Object(g.a)(h.a.mark((function e(){var t,a,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.countryName,e.next=3,v(t);case 3:if(200!==(a=e.sent).status){e.next=12;break}return e.next=7,a.json();case 7:r=e.sent,o=r.pop(),n.setState({country:o}),e.next=15;break;case 12:return console.log("error"),n.setState({warningMessage:"Not found"}),e.abrupt("return");case 15:case"end":return e.stop()}}),e)}))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.warningMessage?r.a.createElement("h1",null,this.state.warningMessage):null==this.state.country?r.a.createElement("h1",null,"Loading..."):r.a.createElement("main",{className:P.a.main},r.a.createElement(G,{country:this.state.country}))}}]),t}(a.Component),Z=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",exact:!0,component:W}),r.a.createElement(f.a,{path:"/info/:countryName",component:X}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.06942799.chunk.js.map