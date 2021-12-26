"use strict"; var EF={zA:document.currentScript,Crd:{L:navigator.language}};
(function(){
var _=EF,dc=document,a=_.zA.src.split(/\//),px,ing; a.pop(); _.root=a.join('/');
_.go=function(p){
    ing=xM("img",dc.body); ing.src=_.root+"/img/X.gif"; ing.onclick=window.open.bind(null,'browser-update.org'); // onclick on error...
    px=xM("div",dc.body,{position:"fixed",left:"0px",top:"0px",opacity:0.8});
    let x=xM("script",dc.head); x.onload=function(){ _.xX(ing); _.xX(px); _.xX(_.zA); delete _.zA; _.go(p); };
    _.sm(_.root+"/ef.js",function(v) { x.src=v; },function(){ window.location.href=""; },1);
};
_.sm=function(p,k,e,b){
    var z,v,h=new XMLHttpRequest(),m=prg(); h.open("GET",p); if(b) h.responseType='arraybuffer'; h.onerror=e;
    h.onload=function(s) { z=h.status; v=b?URL.createObjectURL(new Blob([h.response])):h.responseText; if(z!==200) return e(z+": "+v); if(k) k(v); };
    h.onprogress=function(e) { m.tx.innerHTML=m.v.style.width=Math.floor(e.loaded*100/e.total)+"%"; }; h.send();
    function err(q) { console.log(q); z=h.status; if(!z||(z>=100&&z<200)||z==504) h.send(); if(e) e(h); }
};
function xM(t,r,c){ t=dc.createElement(t); r.appendChild(t); Object.assign(t.style,c||{}); return t; }
function prg(){
    let m=xM("div",px,{width:"600px",height:"28px",background:"#444",color:"#fff",border:"1px solid #fff",marginBottom:"4px"});
    m.v=xM("div",m,{background:"#ccc",height:"28px",position:"absolute"});
    m.tx=xM("div",m,{width:"100%",fontSize:"24px",mixBlendMode:"exclusion",textAlign:"center",position:"absolute"}); return m;
}
})();
