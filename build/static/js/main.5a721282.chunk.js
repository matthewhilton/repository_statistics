(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=(a(16),a(1)),l=a(2),s=a(4),u=a(3),h=a(6),m=a(5),p=(a(17),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.linkto;return r.a.createElement("div",null,r.a.createElement("span",{id:"navbarContainer"},r.a.createElement("h1",null," ",t," "),r.a.createElement("a",{href:a},r.a.createElement("button",{className:"whiteButton"}," View Source on Github "))))}}]),t}(n.Component)),b=(a(18),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.props.callback(this.state.value),this.setState({value:""}),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("b",{className:"search"}," Search Repositories "),r.a.createElement("p",null," use format owner/repositoryname"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("h2",null," ",this.state.ownerName," "))}}]),t}(r.a.Component)),d=(a(19),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"repositoryinfo"},r.a.createElement("div",null,r.a.createElement("img",{ref:"img",src:this.props.imageUrl})),r.a.createElement("div",null,r.a.createElement("b",null," Owner: "),r.a.createElement("h2",null," ",this.props.owner," ")),r.a.createElement("div",null,r.a.createElement("b",null," Name: "),r.a.createElement("h2",null," ",this.props.name," ")),r.a.createElement("div",null,r.a.createElement("b",null," Favourite day to commit: "),r.a.createElement("h2",null," ",this.props.most_day," ")))}}]),t}(n.Component)),f=a(9),v=a.n(f),y=(a(24),a(25),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={labels:this.props.datalabels,series:this.props.dataseries};return r.a.createElement("div",{id:"repositoryGraph"},r.a.createElement(v.a,{data:e,options:{low:0,showArea:!0,axisY:{labelInterpolationFnc:function(e,t){return t%2===0?e:null}}},type:"Line"}))}}]),t}(n.Component)),E=(a(26),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.message;return""!=e?r.a.createElement("div",null,r.a.createElement("b",{className:"error"}," Error: ",e)):r.a.createElement("div",null)}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.callback(this.props.tryit)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleClick}," ",this.props.tryit," "))}}]),t}(n.Component),j=(a(27),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={repositoryOwner:"null_owner",repositoryName:"null_repository",repositoryImageURL:"https://github.com/identicons/github.png",favouriteDay:"null_day",datalabels:["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],dataseries:[[12,15,7,5,10,20,30]],error:""},a.fetchStatistics=a.fetchStatistics.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"fetchStatistics",value:function(e){var t=this;fetch("https://api.github.com/repos/"+e).then(function(e){return e.json()}).then(function(e){void 0==e.message?(t.setState({error:"",repositoryImageURL:e.owner.avatar_url,repositoryName:e.name,repositoryOwner:e.owner.login}),fetch("https://api.github.com/repos/"+t.state.repositoryOwner+"/"+t.state.repositoryName+"/stats/commit_activity").then(function(e){return e.json()}).then(function(e){for(var a=[0,0,0,0,0,0,0],n=0;n<e.length;n++)for(var r=e[n].days,i=0;i<7;i++){var o=r[i];a[i]+=o}for(i=0;i<a.length;i++)a[i]=Math.round(a[i]/e.length);for(var c=0,l=0;l<7;l++)a[l]>a[c]&&(c=l);var s=t.state.datalabels[c];t.setState({dataseries:[a],favouriteDay:s})},function(e){console.log("an error occurred"),console.log(e)})):(console.log(e.message),t.setState({error:e.message}))},function(e){console.log("an error occurred"),console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{title:"Github Repository Statistics",linkto:"https://github.com/unxpctederr/repository_statistics"}),r.a.createElement("div",{id:"appContainer"},r.a.createElement("div",{id:"topbar"},r.a.createElement(b,{callback:this.fetchStatistics}),r.a.createElement(E,{message:this.state.error}),r.a.createElement("b",null," Try: "),r.a.createElement("div",{className:"flex"},r.a.createElement(O,{tryit:"nodejs/node",callback:this.fetchStatistics}),r.a.createElement(O,{tryit:"atom/atom",callback:this.fetchStatistics}),r.a.createElement(O,{tryit:"apple/swift",callback:this.fetchStatistics}),r.a.createElement(O,{tryit:"angular/angular",callback:this.fetchStatistics}),r.a.createElement(O,{tryit:"python/cpython",callback:this.fetchStatistics}))),r.a.createElement("div",{id:"mainpage"},r.a.createElement(d,{imageUrl:this.state.repositoryImageURL,name:this.state.repositoryName,owner:this.state.repositoryOwner,most_day:this.state.favouriteDay}),r.a.createElement(y,{datalabels:this.state.datalabels,dataseries:this.state.dataseries}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.5a721282.chunk.js.map