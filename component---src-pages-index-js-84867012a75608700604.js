(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(34),i=a.n(n),c=a(7),r=a.n(c),l=a(0),o=a.n(l),s=a(167),m=a.n(s),u=a(153),p=a(4),d=a.n(p),h=(a(172),function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(i()(t)),t.gotoNext=t.gotoNext.bind(i()(t)),t.gotoPrevious=t.gotoPrevious.bind(i()(t)),t.gotoImage=t.gotoImage.bind(i()(t)),t.handleClickImage=t.handleClickImage.bind(i()(t)),t.openLightbox=t.openLightbox.bind(i()(t)),t}r()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.gotoImage=function(e){this.setState({currentImage:e})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.renderGallery=function(){var e=this.props.images;if(e){var t=e.map(function(e,t){return o.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:t},o.a.createElement("a",{className:"image fit thumb",onClick:function(e){return console.log("nothing")}},o.a.createElement("img",{src:e.thumbnail})))});return o.a.createElement("div",{className:"row"},t)}},a.render=function(){return o.a.createElement("div",null,this.renderGallery())},t}(l.Component));h.displayName="Gallery",h.propTypes={images:d.a.array};var g=h,f=a(216),b=a.n(f),E=a(217),y=a.n(E),x=a(218),z=a.n(x),w=a(219),v=a.n(w),I=a(220),k=a.n(I),N=(a(221),a(222),a(223)),L=a.n(N),j=a(224),P=a.n(j),C=a(225),S=a.n(C),O=a(226),A=a.n(O),M=(a(227),a(228),[{id:"1",src:L.a,thumbnail:y.a,caption:"Photo 1",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"2",src:P.a,thumbnail:z.a,caption:"Photo 2",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"3",src:S.a,thumbnail:v.a,caption:"Photo 3",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"4",src:A.a,thumbnail:k.a,caption:"Photo 4",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."}]),G=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(i()(t)),t.gotoNext=t.gotoNext.bind(i()(t)),t.gotoPrevious=t.gotoPrevious.bind(i()(t)),t.openLightbox=t.openLightbox.bind(i()(t)),t.handleClickImage=t.handleClickImage.bind(i()(t)),t}r()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.render=function(){return o.a.createElement(u.a,null,o.a.createElement(m.a,null,o.a.createElement("title",null,"Prywatny Gabinet Psychiatryczny Lek. Med. Małgorzata Synowiec"),o.a.createElement("meta",{name:"description",content:"Site description"})),o.a.createElement("div",{id:"main"},o.a.createElement("section",{id:"one"},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("a",{href:"#",className:"image avatar"},o.a.createElement("img",{src:b.a,alt:"",style:{maxWidth:"370px"}}))),o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"O Mnie",o.a.createElement("br",null))),o.a.createElement("p",{style:{textAlign:"justify"}},"Lekarz specjalista psychiatra. Ukończyłam Wydział Lekarski Akademii Medycznej w Warszawie. Wiedzę i doświadczenie zdobywałam w czasie kształcenia specjalizacyjnego w Klinikach Psychiatrii w Krakowie i Lublinie. Odbyłam kształcenie  w zakresie psychoterapii w Klinice Psychoterapii w Krakowie. Swoją wiedzę pogłębiam uczestnicząc w szkoleniach i konferencjach psychiatrycznych. Od 2000 roku prowadzę gabinet psychiatryczny. ")),o.a.createElement("section",{id:"oneAndHalf"},o.a.createElement("header",{className:"major"},o.a.createElement("h2",null,"Zakres usług",o.a.createElement("br",null))),o.a.createElement("ul",null,o.a.createElement("li",null,"Leczenie zaburzeń depresyjnych"),o.a.createElement("li",null,"Leczneie zaburzeń lękowych"),o.a.createElement("li",null,"Leczenie chorób psychicznych"),o.a.createElement("li",null,"Leczenie zaburzeń snu"),o.a.createElement("li",null,"Leczenie zaburzeń odżywiania"),o.a.createElement("li",null,"Leczenie otępień"),o.a.createElement("li",null,"Leczenie uzależnień"))),o.a.createElement("section",{id:"two"},o.a.createElement(g,{images:M.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description}})})),o.a.createElement("section",{id:"three"},o.a.createElement("h2",null,"Godziny przyjęć"),o.a.createElement("p",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"8u 12u$(small)"},o.a.createElement("iframe",{title:"googleMaps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.8461168384206!2d21.441917315882474!3d50.29480030644883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d6b150ac15397%3A0xb510d89b11a68ceb!2sChopina+16%2FU1%2C+39-300+Mielec%2C+Poland!5e0!3m2!1sen!2sus!4v1556718751958!5m2!1sen!2sus",width:"100%",height:"450",frameborder:"0",style:{border:"0"},allowfullscreen:!0}))))))},t}(o.a.Component);t.default=G},153:function(e,t,a){"use strict";var n=a(7),i=a.n(n),c=a(0),r=a.n(c),l=(a(154),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"icons"}),r.a.createElement("div",{className:"4u 12u$(small)",style:{width:"100%"}},r.a.createElement("ul",{className:"labeled-icons",style:{fontSize:"21px",textAlign:"left",width:"100%",color:"rgba(255,255,255,0.75)"}},r.a.createElement("li",null,r.a.createElement("h3",{className:"icon fa-home"},r.a.createElement("span",{className:"label"},"Address")),"39-300 Mielec",r.a.createElement("br",null),"ul. Chopina 16 lok. U1"),r.a.createElement("li",null,r.a.createElement("h3",{className:"icon fa-mobile"},r.a.createElement("span",{className:"label"},"Phone")),"+48 727 763 047"),r.a.createElement("li",null,r.a.createElement("h3",{className:"icon fa-envelope-o"},r.a.createElement("span",{className:"label"},"Email")),r.a.createElement("a",{href:"#"},"mgsynowiec@gmail.com")))),r.a.createElement("ul",{className:"copyright"})))},t}(r.a.Component)),o=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("header",{id:"header",style:{paddingTop:"75px",paddingBottom:"20px"}},r.a.createElement("div",{className:"inner",style:{textAlign:"center"}},r.a.createElement("h1",{style:{fontSize:"1.50em"}},r.a.createElement("strong",null,"Prywatny Gabinet Psychiatryczny"))),r.a.createElement(l,null))},t}(r.a.Component),s=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",null,r.a.createElement(o,null),e)},t}(r.a.Component);t.a=s},216:function(e,t,a){e.exports=a.p+"static/avatar-44cee71079574b75c7dbdba34858939a.png"},217:function(e,t,a){e.exports=a.p+"static/01-6c866ee91adf8b061eaa83d7d286f64a.jpg"},218:function(e,t,a){e.exports=a.p+"static/02-5a005bd6e50a92ebb852094e87bae405.jpg"},219:function(e,t,a){e.exports=a.p+"static/03-6c07129022e286d50d1da5af14d28045.jpg"},220:function(e,t,a){e.exports=a.p+"static/04-f91f216f6dcccc296c646ccf71110979.jpg"},221:function(e,t,a){e.exports=a.p+"static/05-b9b1fc8ff6a17498e1436ed653764b58.jpg"},222:function(e,t,a){e.exports=a.p+"static/06-46276d05380390ac1bf441cac76b8f54.jpg"},223:function(e,t,a){e.exports=a.p+"static/01-ce87a7b005c8d7be981ccd8137fcba3b.jpg"},224:function(e,t,a){e.exports=a.p+"static/02-6b930b4d9fa8b3049018335dccf73ce1.jpg"},225:function(e,t,a){e.exports=a.p+"static/03-527df6325a53113613522e648f6c2d4c.jpg"},226:function(e,t,a){e.exports=a.p+"static/04-21d06c5d186485c6e486f7745faeb5b9.jpg"},227:function(e,t,a){e.exports=a.p+"static/05-6c7ec15e9ddfe636dbd8a07070266ef5.jpg"},228:function(e,t,a){e.exports=a.p+"static/06-4bc7a84922de28318f2ec45282e1bffe.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-84867012a75608700604.js.map