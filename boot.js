"use strict"; var EF={zA:document.currentScript,Lang:navigator.language};
(function(){
var _=EF,dc=document,a=_.zA.src.split(/\//),px; a.pop(); _.root=a.join('/');
_.Run=function(f) { px=xM("div",dc.body,{position:"fixed",left:"0px",top:"0px",opacity:0.8}); if(f) f(); };
_.Go=function(p){ if(!px) _.Run(); _.SM(_.root+"/ef.js",function(v) { var x=xM("script",dc.head); x.onload=function(){ _.xX(px); _.xX(_.zA); delete _.zA; _.Go(p); }; x.src=v; },function(){ window.location.href=""; },1); };
_.SM=function(p,k,e,b){
    var z,v,h=new XMLHttpRequest(),m=PG(); h.open("GET",p); h.setRequestHeader("Cache-Control","max-age=604800"); if(b) h.responseType='arraybuffer'; h.onerror=e;
    h.onload=function(s) { z=h.status; v=b?URL.createObjectURL(new Blob([h.response])):h.responseText; if(z!==200) return e(z+": "+v); if(k) k(v); };
    h.onprogress=function(e) { m.tx.innerHTML=m.v.style.width=Math.floor(e.loaded*100/e.total)+"%"; }; h.send();
    function err(q) { console.log(q); z=h.status; if((z>=100&&z<200)||z==504) h.send(); if(e) e(h); }
};
_.TEX=function(p,f) {
    var r=new Promise(iA.bind(null,_.Lang,0)); r.then(f); return r;
    function iA(m,c,v,x) { _.SM(p.replace(/\$/,m),v,iB.bind(null,c,v,x)); }
    function iB(c,v,x,h) { h=h.split(/\:/); if(h[0]*1==404) {
        if(!c) { c=_.Lang.split(/\-/g); iA(c[0],1,v,x); }
        else if(c==1) if(_.Cfg.Lng&&_.Lang!==_.Cfg.Lng) iA(_.Cfg.Lng,2,v,x); else x("");
    }}
};
function xM(t,r,c) { t=dc.createElement(t); r.appendChild(t); Object.assign(t.style,c||{}); return t; }
function PG() {
    var m=xM("div",px,{width:"600px",height:"28px",background:"#444",color:"#fff",border:"1px solid #fff",marginBottom:"4px"});
    m.v=xM("div",m,{background:"#ccc",height:"28px",position:"absolute"});
    m.tx=xM("div",m,{width:"100%",fontSize:"24px",mixBlendMode:"exclusion",textAlign:"center",position:"absolute"}); return m;
}
})();