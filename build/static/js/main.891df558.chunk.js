(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},33:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),i=a.n(r),s=(a(33),a(4)),c=a(5),l=a(7),u=a(6),m=a(8),h=a(61),p=a(25),d=a(62),g=function(){return o.a.createElement("div",{className:"ui top fixed menu"},o.a.createElement("div",{className:"item"},o.a.createElement("img",{alt:"logo",className:"ui image mini",src:"pokeball.png"})),o.a.createElement(d.a,{to:"/",className:"item",activeClassName:"active",exact:!0},"Pokedex"),o.a.createElement(d.a,{to:"/pokebank",className:"item",activeClassName:"active"},"Pokebank"),o.a.createElement(d.a,{to:"/kanto-map",className:"item",activeClassName:"active"},"Kanto Fly map"),o.a.createElement(d.a,{to:"/useful-links",className:"item",activeClassName:"active"},"Links"))},k=a(2),f=a.n(k),v=a(9),b=a(13),y=a.n(b),E=y.a.create({baseURL:"http://192.168.2.116:3200/api/v1"}),C=(a(58),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onMouseEnter=function(){a.setState({isOverlayShown:!0})},a.onMouseLeave=function(){a.setState({isOverlayShown:!1})},a.onContextMenu=function(e,t,n,o){e.preventDefault(),a.props.onAnchorClick(t,n,o)},a.state={isOverlayShown:!1,note:a.props.pkmn.note||"",avatar:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a.props.pkmn.entry,".png")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.pkmn,n=t.onAnchorClick;return o.a.createElement("div",{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,className:"bank-item "+(a.isCaught?"isCaught":a.isNotCatchable?"isNotCatchable isNotCaught":"isNotCaught")},o.a.createElement("div",{className:"bank-card"},o.a.createElement("img",{onClick:function(){return n(a._id,a.nbCaught+1,a.isCaught)},onContextMenu:function(t){return e.onContextMenu(t,a._id,a.nbCaught-1,a.isCaught)},className:"tiny ui image",alt:a.pokemon.name,src:this.state.avatar}),a.nbCaught>1?o.a.createElement("a",{className:"ui red circular label"},a.nbCaught):""))}}]),t}(o.a.Component));a(59);function N(e){return e.length>0?e[0].toUpperCase()+e.slice(1):e}var w=[{name:"January",short:"Jan"},{name:"February",short:"Feb"},{name:"Mars",short:"Mar"},{name:"April",short:"Apr"},{name:"Mai",short:"Mai"},{name:"June",short:"Jun"},{name:"July",short:"Jul"},{name:"August",short:"Aug"},{name:"September",short:"Sep"},{name:"October",short:"Oct"},{name:"November",short:"Nov"},{name:"December",short:"Dec"}];var D={normal:"#a8a877",fight:"#c03027",flying:"#a78ff0",poison:"#9f409f",ground:"#e0c068",rock:"#b7a039",bug:"#a7b820",ghost:"#705898",fire:"#f08031",water:"#688ff0",grass:"#78c74f",electric:"#f8d030",psychic:"#f85887",ice:"#97d8d8",dragon:"#7038f8"},x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onNoteClick=function(){a.toggleNotes()},a.toggleNotes=function(){a.setState({isShown:!a.state.isShown})},a.onFormSubmit=function(e){e.preventDefault(),a.toggleNotes(),a.props.onNoteSubmit(a.props.pkmn._id,a.state.note.trim())},a.onInputChange=function(e){a.setState({note:e.target.value})},a.state={isShown:!1,note:a.props.pkmn.note||"",avatar:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a.props.pkmn.entry,".png")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getInput",value:function(){return this.state.isShown?o.a.createElement("form",{className:"ui form mini",onSubmit:this.onFormSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",null,"Note:"),o.a.createElement("input",{className:"input-height",type:"text",value:this.state.note,onChange:this.onInputChange,onBlur:this.onFormSubmit}))):o.a.createElement("div",{className:"ui form mini"},o.a.createElement("div",{className:"field",onClick:this.onNoteClick},o.a.createElement("label",null,"Note:"),o.a.createElement("i",{className:"meta"},this.props.pkmn.note||"write about pokemon...")))}},{key:"render",value:function(){var e=this.props,a=e.pkmn,n=e.onAnchorClick;return o.a.createElement("div",{className:"column "+(a.isCaught?"isCaught":"")+(a.isNotCatchable?"isNotCatchable":"")},o.a.createElement("div",{className:"ui fluid card"},o.a.createElement("div",{className:"content"},o.a.createElement("img",{className:"left floated tiny ui image",alt:a.pokemon.name,src:this.state.avatar}),o.a.createElement("div",{className:"header"},"#",a.entry," ",N(a.pokemon.name)),o.a.createElement("div",{className:"meta"},a.pokemon.meta),t.getTypes(a.pokemon.types),o.a.createElement("div",{className:"description min-height"},a.pokemon.about),o.a.createElement("div",null,this.getInput())),o.a.createElement("div",{className:"extra content"},o.a.createElement("div",{className:"ui label"},o.a.createElement("a",{onClick:function(){return n(a._id,a.nbCaught-1,a.isCaught)},className:"minus-button"},o.a.createElement("i",{className:"minus icon"})),"Caught: ",a.nbCaught,o.a.createElement("a",{onClick:function(){return n(a._id,a.nbCaught+1,a.isCaught)},className:"detail"},o.a.createElement("i",{className:"plus icon"})))),o.a.createElement("div",{className:"extra content"},"Registred first: ",o.a.createElement("strong",null,function(e){if(null===e)return"";var t=new Date(e),a=t.getDate(),n=t.getMonth(),o=t.getFullYear();return"".concat(w[n].short," ").concat(a," ").concat(o)}(a.registrationDate)))))}}],[{key:"getTypes",value:function(e){return e.map(function(e){return o.a.createElement("a",{className:"item",key:e},o.a.createElement("div",{style:{backgroundColor:D[e],color:"white"},className:"ui horizontal label"},e))})}}]),t}(o.a.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onInputChange=function(e){a.setState({isChecked:e.target.checked})},a.onSearchChange=function(e){a.setState({search:e.target.value.toLowerCase()})},a.onFilterClick=function(e,t){a.setState({listType:t})},a.state={isChecked:!1,listType:a.props.listType,search:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getList",value:function(){var e=this,t=this.props.pokemons.filter(function(t){return""===e.state.search||t.pokemon.name.toLowerCase().includes(e.state.search)});return"list"===this.state.listType?t.map(function(t){return o.a.createElement(C,{key:t._id,onNoteSubmit:e.props.onNoteSubmit,onAnchorClick:e.props.onAnchorClick,region:e.props.region,pkmn:t})}):(t=(t=t.filter(function(t){return!e.state.isChecked||!t.isCaught})).filter(function(t){return!e.state.isChecked||!t.isNotCatchable})).map(function(t){return o.a.createElement(x,{key:t._id,onNoteSubmit:e.props.onNoteSubmit,onAnchorClick:e.props.onAnchorClick,region:e.props.region,pkmn:t})})}},{key:"getNotCaught",value:function(){var e=o.a.createElement("div",{className:"not-caught"},o.a.createElement("input",{type:"checkbox",id:"not-caught-checkbox",checked:this.state.isChecked,onChange:this.onInputChange}),o.a.createElement("label",{htmlFor:"not-caught-checkbox"},"Not Caught only (",t.filterUnCaught(this.props.pokemons),")"));return"card"===this.state.listType&&"pokedex"===this.props.parent?e:""}},{key:"render",value:function(){var e=this,a="list"===this.state.listType?"active":"",n="card"===this.state.listType?"active":"",r="list"===this.state.listType?"centered":"three column",i=t.calculateCaught(this.props.pokemons),s=this.props,c=s.region,l=s.totalEntry,u=s.pokemons,m=s.totalCaught;return o.a.createElement("div",{className:"pokemon-list"},o.a.createElement("h2",{className:"ui header"},N(c),l?o.a.createElement("span",{className:"float-right"},"Total"):"",o.a.createElement("div",{className:"sub header"},i," / ",u.length,l?o.a.createElement("span",{className:"float-right"},m," / ",l):"")),o.a.createElement("form",{className:"ui form"},o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"ui small basic icon buttons float-right"},o.a.createElement("button",{className:"ui button "+a,type:"button",onClick:function(t){return e.onFilterClick(t,"list")}},o.a.createElement("i",{className:"list icon"})),o.a.createElement("button",{className:"ui button "+n,type:"button",onClick:function(t){return e.onFilterClick(t,"card")}},o.a.createElement("i",{className:"address card icon"})))),o.a.createElement("div",{className:"field"},o.a.createElement("label",null,"Search"),o.a.createElement("input",{type:"text",value:this.state.search,onChange:this.onSearchChange}))),this.getNotCaught(),o.a.createElement("div",{className:"ui grid "+r},this.getList()))}}],[{key:"filterCaught",value:function(e){return e.filter(function(e){return e.isCaught})}},{key:"filterUnCaught",value:function(e){return e.filter(function(e){return!e.isCaught}).filter(function(e){return!e.isNotCatchable}).length}},{key:"calculateCaught",value:function(e){return t.filterCaught(e).length}}]),t}(o.a.Component);function O(e,t,a){for(var n=0;n<e.length;n+=1)if(e[n][t]===a)return n;return-1}var j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isLoading:!1,pokemons:[]},a.componentDidMount=function(){a.fetchDataFromDb("kanto")},a.toggleLoading=function(){a.setState({isLoading:!a.state.isLoading})},a.onAnchorClick=function(){var e=Object(v.a)(f.a.mark(function e(t,n,o){var r,i,s,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=(r=n<=-1?-1:n)>0,s=-1===r,c=1===r&&!1===o?new Date:0===r?null:void 0,a.saveDateInDb(t,r,i,s,c);case 5:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.onNoteSubmit=function(){var e=Object(v.a)(f.a.mark(function e(t,n){var o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.patch("/pokemon/".concat(t),{note:n});case 2:o=e.sent,a.replaceInArray(t,o.data.pokemon);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onMenuClick=function(e){t.removeClass(e),a.fetchDataFromDb(e.target.dataset.pkdx)},a.saveDateInDb=function(){var e=Object(v.a)(f.a.mark(function e(t,n,o,r,i){var s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.patch("/pokemon/".concat(t),{nbCaught:n,isCaught:o,isNotCatchable:r,registrationDate:i});case 2:s=e.sent,a.replaceInArray(t,s.data.pokemon);case 4:case"end":return e.stop()}},e,this)}));return function(t,a,n,o,r){return e.apply(this,arguments)}}(),a.fetchDataFromDb=function(){var e=Object(v.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.toggleLoading(),e.next=3,E.get("/pokemon?region=".concat(t.toLowerCase()));case 3:n=e.sent,a.setState({pokemons:n.data.pokemons,region:n.data.region,isLoading:!1});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"replaceInArray",value:function(e,t){var a=O(this.state.pokemons,"_id",e);if(a>-1){var n=this.state.pokemons;n.splice(a,1,t),this.setState({pokemons:n})}}},{key:"renderContent",value:function(){return 0===this.state.pokemons.length&&this.state.isLoading?o.a.createElement("div",null,o.a.createElement("p",null,"Loading"),o.a.createElement("div",{className:"ui active centered inline loader"})):this.state.pokemons.length>0?o.a.createElement(S,{onNoteSubmit:this.onNoteSubmit,onInputChange:this.onInputChange,onAnchorClick:this.onAnchorClick,region:this.state.region,pokemons:this.state.pokemons,parent:"pokedex",listType:"card"}):0!==this.state.pokemons.length||this.state.isLoading?void 0:o.a.createElement("div",null,"No pokemon found. :( ")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"ui four item menu regions"},o.a.createElement("a",{onClick:this.onMenuClick,"data-pkdx":"kanto",className:"item active"},"Kanto"),o.a.createElement("a",{onClick:this.onMenuClick,"data-pkdx":"Johto",className:"item"},"Johto"),o.a.createElement("a",{onClick:this.onMenuClick,"data-pkdx":"Hoenn",className:"item"},"Hoenn"),o.a.createElement("a",{onClick:this.onMenuClick,"data-pkdx":"Sinnoh",className:"item"},"Sinnoh")),this.renderContent())}}],[{key:"removeClass",value:function(e){var t=document.querySelector(".regions").querySelectorAll(".active");[].forEach.call(t,function(e){e.classList.remove("active")}),e.target.classList.add("active")}}]),t}(o.a.Component),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isLoading:!1,totalEntry:0,totalCaught:0,pokemons:[]},a.componentDidMount=function(){a.fetchDataFromDb("kanto"),a.fetchAmountFromDb()},a.toggleLoading=function(){a.setState({isLoading:!a.state.isLoading})},a.onAnchorClick=function(){var e=Object(v.a)(f.a.mark(function e(t,n,o){var r,i,s,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t,n,o),i=(r=n<=0?0:n)>0,s=-1===r,c=1===r&&!1===o?new Date:0===r?null:void 0,a.saveDateInDb(t,r,i,s,c);case 6:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.onNoteSubmit=function(){var e=Object(v.a)(f.a.mark(function e(t,n){var o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.patch("/bank/".concat(t),{note:n});case 2:o=e.sent,a.replaceInArray(t,o.data.pokemon);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onMenuClick=function(e){t.removeClass(e),a.fetchDataFromDb(e.target.dataset.pkdx)},a.saveDateInDb=function(){var e=Object(v.a)(f.a.mark(function e(t,n,o,r,i){var s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.patch("/bank/".concat(t),{nbCaught:n,isCaught:o,isNotCatchable:r,registrationDate:i});case 2:s=e.sent,a.replaceInArray(t,s.data.pokemon),a.setState({totalCaught:s.data.totalCaught});case 5:case"end":return e.stop()}},e,this)}));return function(t,a,n,o,r){return e.apply(this,arguments)}}(),a.fetchDataFromDb=function(){var e=Object(v.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.toggleLoading(),e.next=3,E.get("/bank?region=".concat(t.toLowerCase()));case 3:n=e.sent,a.setState({pokemons:n.data.pokemons,region:n.data.region,isLoading:!1});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.fetchAmountFromDb=Object(v.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/bank/count");case 2:t=e.sent,a.setState({totalEntry:t.data.totalEntry,totalCaught:t.data.totalCaught});case 4:case"end":return e.stop()}},e,this)})),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"replaceInArray",value:function(e,t){var a=O(this.state.pokemons,"_id",e);if(a>-1){var n=this.state.pokemons;n.splice(a,1,t),this.setState({pokemons:n})}}},{key:"renderContent",value:function(){return 0===this.state.pokemons.length&&this.state.isLoading?o.a.createElement("div",null,o.a.createElement("p",null,"Loading"),o.a.createElement("div",{className:"ui active centered inline loader"})):this.state.pokemons.length>0?o.a.createElement(S,{onNoteSubmit:this.onNoteSubmit,onInputChange:this.onInputChange,onAnchorClick:this.onAnchorClick,totalEntry:this.state.totalEntry,totalCaught:this.state.totalCaught,region:this.state.region,pokemons:this.state.pokemons,parent:"pokebank",listType:"list"}):0!==this.state.pokemons.length||this.state.isLoading?void 0:o.a.createElement("div",null,"No pokemon found. :( ")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"ui four item menu regions"},o.a.createElement("a",{onClick:this.onMenuClick,"data-pkdx":"kanto",className:"item active"},"Kanto"),o.a.createElement("a",{onClick:this.onMenuClick,"data-pkdx":"Johto",className:"item"},"Johto"),o.a.createElement("a",{onClick:this.onMenuClick,"data-pkdx":"Hoenn",className:"item"},"Hoenn"),o.a.createElement("a",{onClick:this.onMenuClick,"data-pkdx":"Sinnoh",className:"item"},"Sinnoh")),this.renderContent())}}],[{key:"removeClass",value:function(e){var t=document.querySelector(".regions").querySelectorAll(".active");[].forEach.call(t,function(e){e.classList.remove("active")}),e.target.classList.add("active")}}]),t}(o.a.Component),A=y.a.create({baseURL:"https://pokeapi.co/api/v2/"}),I=a(16),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=Object(v.a)(f.a.mark(function e(){var t,n,o,r,i,s,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(I.a)({},a.state.data),n=a.props.pokemon.url.split("/"),t.entry=n[n.length-2],t.region=a.props.region,(o=Object(I.a)({},t.pokemon)).avatar="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.entry,".png"),e.next=8,A.get("/pokemon-species/".concat(t.entry));case 8:return r=e.sent,o.about=r.data.flavor_text_entries.filter(function(e){return"fr"===e.language.name})[0].flavor_text,o.meta=r.data.genera.filter(function(e){return"fr"===e.language.name})[0].genus,o.name=r.data.names.filter(function(e){return"fr"===e.language.name})[0].name,e.next=14,A.get("/pokemon/".concat(t.entry));case 14:for(i=e.sent,s=[],c=0;c<i.data.types.length;c++)s.push(i.data.types[c].type.name);o.types=s,t.pokemon=o,a.setState({data:t}),E.post(a.props.destination,a.state.data).then(function(){a.setState({done:!0})});case 21:case"end":return e.stop()}},e,this)})),a.state={done:!1,data:{entry:"",pokemon:{name:"",avatar:"",about:"",meta:"",types:[]},region:"",isCaught:!1,nbCaught:0,registrationDate:null}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getRender",value:function(){return this.state.done?o.a.createElement("div",{className:"ui card"},o.a.createElement("div",{className:"ui label green"},"Done: Yes")):o.a.createElement("div",{className:"ui card"},o.a.createElement("div",{className:"ui label red"},"Done: No"))}},{key:"render",value:function(){return o.a.createElement("div",null,this.getRender())}}]),t}(o.a.Component),M=function(e){var t=e.region,a=e.pokemons,n=e.destination,r=a.map(function(e){return o.a.createElement(_,{region:t,destination:n,key:e.entry,pokemon:e})});return o.a.createElement("div",{className:"pokemon-list"},o.a.createElement("h2",{className:"ui header"},"Fetching data for the ",N(t)," region..."),o.a.createElement("div",{className:"ui cards"},r))},q={kanto:1,johto:2,hoenn:3,sinnoh:4},F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isChecked:!1,generation:"",region:"",isLoading:!1,pokemons:[]},a.onCheckboxChange=function(e){a.setState({isChecked:e.target.checked})},a.onInputChange=function(e){a.setState({generation:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.setState({isLoading:!0}),a.fetchPokedex()},a.fetchPokedex=Object(v.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/generation/".concat(q[a.state.generation.toLowerCase()]));case 2:t=e.sent,a.setState({pokemons:t.data.pokemon_species,region:t.data.main_region.name,isLoading:!1});case 4:case"end":return e.stop()}},e,this)})),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderContent",value:function(){return 0===this.state.pokemons.length&&this.state.isLoading?o.a.createElement("div",{className:"ui segment"},o.a.createElement("p",null,"Loading"),o.a.createElement("div",{className:"ui active centered inline loader"})):this.state.pokemons.length>0?o.a.createElement(M,{region:this.state.region,destination:this.state.isChecked?"/bank":"/pokemon",pokemons:this.state.pokemons}):o.a.createElement("div",null,o.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"gen"},"Select region"),o.a.createElement("div",{className:"ui icon input"},o.a.createElement("input",{id:"gen",type:"text",placeholder:"Region",value:this.state.generation,onChange:this.onInputChange})))),o.a.createElement("div",{className:"not-caught"},o.a.createElement("input",{type:"checkbox",id:"checkbox-bank",checked:this.state.isChecked,onChange:this.onCheckboxChange}),o.a.createElement("label",{htmlFor:"checkbox-bank"},"Add region to bank")))}},{key:"render",value:function(){return o.a.createElement("div",null,this.renderContent())}}]),t}(o.a.Component),P=function(){return o.a.createElement("div",null,o.a.createElement("h2",{className:"ui header"},"Kanto",o.a.createElement("div",{className:"sub header"},"Trainer fly map")),o.a.createElement("div",{className:"img-zoom-container"},o.a.createElement("img",{id:"image-map",className:"full-width",alt:"Kanto-map",src:"./kanto.png"})))},T=[{header:"Every Mithycal:",url:"https://www.youtube.com/watch?v=YlX2VwgmaUE"},{header:"Get a PokeBank ready miew",url:"https://www.reddit.com/r/pokemon/comments/5q4meg/how_to_trick_pokebank_into_thinking_your_gen_1/"},{header:"Get 8f (change dresser ID;OD)",url:"https://www.youtube.com/watch?v=H8AgGp5cqPI&feature=youtu.be"},{header:"Speed Run pokemon red/blue",url:"https://www.youtube.com/watch?v=XAXGQ8oywxM"},{header:"Old man glitch tainer name red/blue",url:"https://glitchcity.info/wiki/Old_man_glitch"},{header:"Pokemon index number (glitch)",url:"https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_index_number_%28Generation_I%29"},{header:"Catch pokemon lvl 1 to instant 100 red/blue",url:"https://www.ocf.berkeley.edu/~jdonald/pokemon/level100.html"},{header:"Pokemon Exchange process",url:"https://www.thonky.com/pokemon/trade-from-red-to-gold"},{header:"Pokemon Ranger delete save (forum)",url:"https://projectpokemon.org/home/forums/topic/40247-pokemon-ranger-manaphy-egg-reset/"},{header:"3ds save backup tool",url:"https://projectpokemon.org/home/forums/topic/11330-a-tool-to-backup-hgss-saves/"},{header:"3ds install homebrew",url:"https://www.generation-game.com/tuto-hack-3ds-comment-installer-homebrew-launcher/"}];var J=function(){return o.a.createElement("div",null,T.map(function(e){return o.a.createElement("div",{className:"ui list",key:e.header},o.a.createElement("div",{className:"item"},o.a.createElement("div",{className:"header"},e.header),o.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank"},e.url)))}))},R=[{name:"Random Item",quantity:1,isDone:!0},{name:"Random Item",quantity:1,isDone:!0},{name:"X Special",quantity:255,isDone:!0},{name:"Random Item",quantity:1,isDone:!0}],H=[{name:"Mew",lvl:"any",hp:"any",isDone:!0},{name:"Pidgey",lvl:"any",hp:"233",isDone:!0},{name:"Parasect",lvl:"any",hp:"any",isDone:!0},{name:"Onix",lvl:"any",hp:"any",isDone:!0},{name:"Tentacool",lvl:"any",hp:"any",isDone:!0},{name:"Arbok",lvl:"any",hp:"any",isDone:!0}],B=[{name:"8F",quantity:1,isDone:!0},{name:"Any item",quantity:89,isDone:!0},{name:"Dire Hit",quantity:58,isDone:!0},{name:"Iron",quantity:37,isDone:!0},{name:"X Accuracy",quantity:119,isDone:!0},{name:"Water Stone",quantity:62,isDone:!0},{name:"Burn Heal",quantity:50,isDone:!0},{name:"Pokeball",quantity:43,isDone:!0},{name:"Antidote",quantity:43,isDone:!0},{name:"Protein",quantity:62,isDone:!0},{name:"PP Up",quantity:60,isDone:!0},{name:"Ice Heal",quantity:50,isDone:!1},{name:"Lemonade",quantity:133,isDone:!1},{name:"Great Ball",quantity:50,isDone:!0},{name:"Fresh Water",quantity:34,isDone:!1},{name:"TM 01",quantity:"Any",isDone:!0}];function U(e){return e.map(function(e,t){return o.a.createElement("div",{className:"ui list",key:t},o.a.createElement("div",{className:"ui segment "+(e.isDone?"done":"")},o.a.createElement("div",{className:"ui item"},o.a.createElement("div",{className:"header"},e.name),e.quantity)))})}var G=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"ui segment"},o.a.createElement("h2",{className:"ui header"},"8F",o.a.createElement("div",{className:"sub header"},"Bag setup")),U(R)),o.a.createElement("div",{className:"ui segment"},o.a.createElement("h2",{className:"ui header"},"Team",o.a.createElement("div",{className:"sub header"},"Team setup")),H.map(function(e,t){return o.a.createElement("div",{className:"ui list",key:t},o.a.createElement("div",{className:"ui segment "+(e.isDone?"done":"")},o.a.createElement("div",{className:"item"},o.a.createElement("div",{className:"header"},e.name),o.a.createElement("div",{className:"ui list",key:e.lvl},o.a.createElement("div",{className:"item"},"Level: ",e.lvl),o.a.createElement("div",{className:"item"},"Current hp: ",e.hp)))))})),o.a.createElement("div",{className:"ui segment"},o.a.createElement("h2",{className:"ui header"},"Bag setup",o.a.createElement("div",{className:"sub header"},"before executing")),U(B)))},K=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement("div",{className:"hero-image"}),o.a.createElement("div",{className:"ui container main"},o.a.createElement(p.a,{path:"/",component:j,exact:!0}),o.a.createElement(p.a,{path:"/pokebank",component:L}),o.a.createElement(p.a,{path:"/add-entry",component:F}),o.a.createElement(p.a,{path:"/kanto-map",component:P}),o.a.createElement(p.a,{path:"/useful-links",component:J}),o.a.createElement(p.a,{path:"/mew-glitch-list",component:G}))))}}]),t}(o.a.Component);i.a.render(o.a.createElement(K,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.891df558.chunk.js.map