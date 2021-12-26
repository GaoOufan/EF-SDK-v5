"use strict"; if(!window.EF) window.EF={}; (function(){
var _=window.EF,RQ=[0,[],0];

_.a0=function(n,s,h){ var a=n.toString(h); while(a.length<s) a="0"+a; return a; };
_.aC=function(a){ let i,s={H:{},A:[]},r=s[_.aT(a)]; if(r) for(i in a) r[i]=_.aC(a[i]); return r||a; };
_.aD=function(c,n,e,d){
    var f=_.xM({tp:'a',r:document.body,atr:{ download:n+'.'+e,href:((!c.indexOf('data:')||!c.indexOf('blob:'))?c:('data:'+d+';base64,'+c)) }});
	f.click(); f.xX();
};
_.aM=function(a,b,x){
    if(b) if(a.concat) a=a.concat(b); if(!x) x=[]; if(x.split) x=x.split(/,/g);
    for(let i in b) if(x.indexOf(i)==-1) a[i]=b[i]; return a;
};
_.aP={
    d:function(p) { p=p.split(/\//g); p.pop(); return p.join('/'); },
    e:function(p) { var m=p.lastIndexOf('.'); return m>-1?p.slice(m+1):""; },
    f:function(p) {
        p=p.split(/\//g); p=p.pop(); let i=p.lastIndexOf('.');
        return i>-1?p.slice(0,i):p;
    }
};
_.aR=function(l,n){ var x=""; while(x.length<(l||12)) x+=_.b64[Math.rnd(n||36)]; return x; };
_.aT=function(e,s){
    if(s) { var v=_.aT(e); return (v&&s.indexOf(v)>-1); }
    var d={number:"N",string:"S",symbol:"X",boolean:"B",function:"Q"},k=typeof(e);
	if(d[k]) return k=="bigint"?"N":(d[k]=="N"&&isNaN(e)?"S":d[k]);
	if(k=="object"&&e) {
		d={ RegExp:"R",Array:"A",Date:"D",HTMLImageElement:"I",Image:"I",Object:"H" };
		k=e.constructor.name; return d[k]||e._obt||k||"O";
	}
};
_.aU=function(a){
    return a?(_.aT(a)=="A"?Uint8ClampedArray.from(a):(a.constructor.name=="Uint8ClampedArray")?Array.from(a):null):null;
};
_.aX=function(e,r) { if(r.split) r=r.split(','); if(r.join) for(let i of r) delete e[i]; };

_.sC=function(n,v,d){
	if(!document.cookie) return null; var e=new _.Bin(document.cookie.slice(2),"PX"); if(!e) e={};
	if(!_.aT(v)) return e[n]||null;
	e[n]=v; document.cookie="X="+new _.Bin(e,"PK").B64()+"; "+"expires="+(new Date(Date.now()+(d*86400000))).toGMTString();
};
_.sL=function(k,v){
    if(!_.aT(v) && k[0]!=='~') { k=localStorage.getItem(k); return k?new _.Bin(k,"PX"):null; }
    if(k[0]=='~') localStorage.removeItem(k.slice(1));
    else localStorage.setItem(k,new _.Bin(v,"PK").B64());
};
_.sS=function(k,v){
	if(!_.aT(v) && k[0]!=='~') { k=sessionStorage.getItem(k); return k?new _.Bin(k,"PX"):null; }
	if(k[0]=='~') sessionStorage.removeItem(k.slice(1));
	else sessionStorage.setItem(k,new _.Bin(v,"PK").B64());
};

_.xA=function(c,n,v,s){
    var i; if(_.aT(c)=="A") { for(i in c) _.xA(c[i],n,v,s); return; } c=_.xI(c); if(!c) return;
    if(_.aT(n)!=="H") return s?_.xA(c,n,_.xA(c,n,"~")?0:v):c[(v?(v=="~"?"get":"set"):"remove")+"Attribute"](n,v);
    for(i in n) _.xA(c,i,n[i]);
};
_.xB=function(f,d) {
    let i,a,h=d.bh||0,P=d.prp||{}; f._obt="E";
    if(!f.$elm) f.$elm={}; a=f.$ef; if(!a) a=f.$ef={}; if(!a.$xX) a.$xX={};
    
    if(h&1) f.load=function(a) {
	    if(_.aT(a)=="S") a={p:a}; if(!a.atr) a.atr="innerHTML"; let t=_.aT(a.p);
	    if(t=="E"||t=="I"||t=="ImageData") {
	        a.atr="src"; a.p=t=="ImageData"?_.CVS.RtoI(a.p):a.p.src;
	    }
	    if(a.p[0]=='*') a.p=_.root+a.p.slice(1);
        if(a.atr=="src") {
            if(!a.bin) a.bin=1;
            if(a.ok) f.onload=a.ok.bind(null,f);
            if(a.err) f.onerror=a.err.bind(null,f);
        }
	    if(!a.p.indexOf("data:")||!a.p.indexOf('blob:')||(window.origin=="null"&&a.atr=="src")) f[a.atr]=a.p;
	    else _.sm({ p:a.p,bin:a.bin,buf:a.buf,ok:function(x){
	        if(a.inp) x=a.inp(x); f[a.atr]=x; if(a.atr!=="src"&&a.ok) a.ok();
	    },err:a.err,prg:a.prg });
	};
	if(d.load) f.load(d.load);
	if(h&2) P.off=["P",function(v){
        if(v=='~') v=f.off?0:1;
        let s=f.style; if(v&&!_.aT(f.$ef.$off)) f.$ef.$off=s.display;
        s.display=(v?"none":f.$ef.$off); if(!v) delete f.$ef.$off;
        f.$ef.off=v;
    }];
    if(h&4) P.ttp=["P",function(v){
	    if(v) { if(!f.$ef.$ttp) _.xE(f,"pointerenter",iA); }
	    else { _.xE(f,"pointerenter",iA,-1); delete f.$ef.$ttp; } f.$ef.ttp=v;
	}];
    if(h&8) f.err=function(v){ if(v) iA(0,v); else iB('err'); };
    if(h&16) f.fw=function(e,x){ if(e) if(f.form&&!f.form.$ef.$ok) setTimeout(f.fw,30,e,x); else e(f,x); };
    if(h&32) P.lf="A#";
    if(h&64) P.rdo=["A#",function(v){
		_.xA(f,"rdo",v);
		if(v&&f.req) { f.req=0; f._rq=1; }
		if(!v&&f._rq) f.req=1; if(f.$rdo) f.$rdo(v);
	}];
	if(h&128) P.req=["A#",function(v){
		if(f.rdo) { f._rq=v; if(v) return; }
		_.xA(f,"req",v); if(f.$req) f.$req(v);
	}];
	if(h&256) P.vrf=['P',function(v){
	    if(v&&!f.$ef.vrf) f.$ef.vrf=_.xM({ tp:"$sbt",txt:"\ue01b",r:f,clk:iC });
	    else if(!v&&f.$ef.vrf) { _.xX(f.$ef.vrf.nextSibling); _.xX(f.$ef.vrf); delete f.$ef.vrf; }
	}];
	if(d.chl) _.xM(d.chl,f);
	if(d.shd) {
	    i=f.$elm.$$=f.attachShadow({mode:'open'});
	    i.$ef={$$:f}; i.$elm={}; _.xM(d.shd,i);
	}
	if(d.tp=="img") f.ondragstart=function(e) { e.preventDefault(); };
	if(d.fnc) f.$fnc=d.fnc;
	if(d.css) {
	    a=d.css; let t=_.aT(a),k;
	    if(t=="H") { k=a._k||"stl"; delete a._k; f[k]=_.STL(a,f); }
	    else if(t=="A") { t=_.xI(a[0],f); if(t) t[a[3]||"stl"].add(a[1],a[2]||f.id); }
	}
	if(d.stl) _.aM(f.style,d.stl); _.xS(f,d.d); _.xS(f,d.p);
	if(d.xR) for(i in d.xR) _.xR(f,i,_.aM({},d.xR[i]));
	if(d.xO) { a=_.aT(d.xO)=="A"?d.xO:[d.xO,1]; _.xO(f,a[0],a[1]); }
	if(d.evt) _.xE(f,d.evt); if(d.atr) _.xA(f,d.atr);
	if(d.upl) {
	    i=d.upl==1?f:_.xI(d.upl,f);
	    _.xP(i,"upl",[_.xA.bind(f,"upl","~"),function(v){
	        _.xA(f,"upl",v?1:0); if(v) delete f.clk; let i=this;
	        if(i.ftc) {
	            _.xE(f,'click',iA,-1); _.xE(f,"drop",iB,-1);
	            _.xE(f,["dragenter","dragexit","dragover"],iC,-1); _.xX(i.ftc); delete i.ftc;
	        }
	        if(v) {
	            if(_.aT(v)=="Q") v={onl:v}; if(v.onl) v.onl=v.onl.bind(null,f);
	            if(v==1) { v={
	                dec:"U",ext:"png,jpg,jpeg,gif,webp,svg".split(/\,/g),
	                onl:function(e) { i.val=e.ftp[0].val; e.ftp=[]; }
	            }; }
	            v.tp="$upl"; i.ftc=_.xM(v); _.xC(f,"ef-cur-btn",1); _.xE(f,'click',iA);
	           _.xE(f,"drop",iB); _.xE(f,["dragenter","dragexit","dragover"],iC);
	        }
	        if(f.$upl) f.$upl(v);
	        function iA() { if(!f.rdo) i.ftc.upl.click(); }
	        function iB(e) { iC(e); i.ftc.ondrop(e); }
	        function iC(e) { e.preventDefault(); e.stopPropagation(); }
	    }]);
	}
	if(d.mD) {
	    if(_.aT(d.mD)!=="H") d.mD={drg:d.mD};
	    _.mD(f,d.mD.elm,d.mD.grid); f.drg=d.mD.drg;
	}
	if(_.aT(d.rsx)) _.mR(f,d.rsx); if(d.mC) _.mC(f,d.mC.cbk,d.mC.lim,d.mC.wt);
	_.xP(f,P); _.aM(f,d.def||{});
	
	function iA(e,v) {
        if(e) e.stopPropagation(); let m=e?'ttp':'err',g,t,u=_.xV(f),z=0; iB(m);
        g=f.$ef.$xX[m]=_.xM({
            tp:"div",r:document.body,d:[20],
            atr:{class:"ef-ttp",err:(e?0:1)},stl:{opacity:1},html:v||f.ttp
	    });
	    if(u.y-g.offsetHeight<0) z++; if(u.x+g.offsetWidth>window.innerWidth) z+=2;
	    _.xS(g,{l:u.x-(z&2?g.offsetWidth:0)+window.scrollX,t:u.y+(z&1?f.offsetHeight:-g.offsetHeight)+window.scrollY});
	    _.xA(g,"pos",z);
	    g.$ef.tt=setTimeout(function() { g.style.opacity=0; g.$ef.tt=setTimeout(iB,1000,m); },e?_.Cfg.TTP.end:3000);
	}
	function iB(m) { var g=f.$ef.$xX[m]; if(g) clearTimeout(g.$ef.tt); _.xX(g); delete f.$ef.$xX[m]; }
	function iC(z) {
	    z.$ef.$val=f.val; f.val=undefined; z.clk=iD; f.err(_.Dic.EF[20]);
	    _.xM({ tp:"$sbt",txt:"\ue00d",r:f,clk:iE });
	}
	function iD(z) {
	    if(f.val!==z.$ef.$val) { iE(z.nextSibling); return f.err(_.Dic[0]); }
	    f.rdo=1; z.off=1; z.$ef.$lok=1;
	}
	function iE(x) {
	    let z=x.previousSibling; _.xX(x); delete z.$ef.$val;
	    f.rdo=0; z.off=0; z.clk=iC; z.$ef.$lok=0;
	}
};
_.xC=function(e,c,o){
    let t=_.aT(c),d=e.classList,i;
    if(t=="H") for(i in c) _.xC(e,i,_.aT(c[i])?c[i]:o);
    else if(t=="A") for(i of c) _.xC(e,i,1);
    else { i=d.contains(c); if(o=="~") return i; d.toggle(c,o?true:false); }
};
_.xE=function(c,e,f,r){
    c=_.xI(c); if(!c||!e) return; let t=_.aT(e),i;
    if(t=="H") { for(i in e) _.xE(c,i,e[i],r); return; }
    if(t=="A") { for(i of e) _.xE(c,i,f,r); return; }
    if(f) c[(r==-1?"remove":"add")+"EventListener"](e,f,r==-1?undefined:(r?true:false));
};
_.xI=function(e,f){
    let i,a,x; if(f&&f.split) f=_.xI(f); if(e)
    if(f&&e.split&&(e[0]=='>'||e[0]=='<')) {
        a=e.split(/\|/g); e=a.shift(); i=e[0]; x=e.slice(-1);
        if(x=='+'||x=='-') e=e.slice(0,-1); else x=0; e=e.slice(1).split(/\./g);
        if(i=='<') { i=e.shift()*1; if(!i||isNaN(i)) i=1; while(i&&f) { f=f.parentNode; i--; } i='>'; }
        if(i=='>') { for(i of e) { f=isNaN(i*1)?f.$elm[i]:f.children[i]; if(!f) break; } }
        e=f; if(e&&x) e=(x=='+'?e.nextSibling:e.previousSibling); while(a.length&&!e) e=_.xI(a.shift(),f);
    }
    else e=e.split?document.getElementById(e):e; return e;
};
_.xK=function(f,b){
    if(!f.$ef) f.$ef={};
    if(!b) { _.xE(f,"keydown",f.$ef.kbde,-1); delete f.$ef.kbde; return; }
    if(!f.$ef.kbd) f.$ef.kbd=b; else _.aM(f.$ef.kbd,b);
    if(!f.$ef.kbde) {
        f.$ef.kbde=function(e) {
            var k=e.keyCode; if(k==229||!k) k=e.charCode;
	        if(b[k]) b[k](); else if(b['$'+k]) { e.preventDefault(); b['$'+k](); }
        };
        _.xE(f,"keydown",f.$ef.kbde);
    }
};
_.xL=function(n,p){ customElements.define("ef-"+n,class extends HTMLElement{
    constructor(){ super(); _.xB(this,(_.aT(p)=="Q")?p(this):p); }});
};
_.xM=function(d,r){
    let f=_.aT(d),i,a,B,X; if(!f) return;
    if(f=="A") { f=[]; for(i of d) if(i) { i.r=r; f.push(_.xM(i)); } return f; }

    if(d.ctrl) for(i of ['r','bf','n','d','p','id']) if(!d[i]) d[i]=d.ctrl[i];
    
    d.r=_.xI(d.r||r); B=_.xI(d.bf,d.r); if(B) d.r=B.parentNode;
    if(d.n&&d.r&&d.r.$elm&&d.r.$elm[d.n]) throw _.Dic.EF[6]+d.n;
    
    if(d.tp[0]=='*') f=document.createElementNS("http://www.w3.org/2000/svg",d.tp.slice(1));
    else if(d.tp=="txt") f=document.createTextNode(d.html||d.txt);
    else {
        a=d.tp; if(a[0]=='$') {
            i=a.slice(1);
            if(_.Elm[i]) { a='ef-'+i; X=_.Elm[i]; }
            else if(_.CC[i]) return _.CC[i](d);
            else { f=_.xM({tp:"$prg",r:d.r,bf:B}); _.use("*/ctrl/"+i,function(){
                d.bf=f; try { i=_.CC[i](d); } catch(e){ } _.xX(f);
            },f); return f; }
        }
        f=document.createElement(a); if(X) _.xB(f,_.aT(X)=="Q"?X(f):X);
    }
    if(_.aT(d.html)) f.innerHTML=d.html; if(d.id) f.id=d.id;
    if(!f.$ef) f.$ef={}; f.$ef.$name=d.n;
	if(d.r) { a=d.r.$elm; if(d.n) if(a) a[d.n]=f; d.r.insertBefore(f,B); }
	if(d.csn) _.xC(f,d.csn,1); a=d.ctrl; if(a) {
	    if(a.tp&&a.tp[0]=='$') { f.ctrl=a.tp.slice(1); _.xC(f,"ef-cc-"+f.ctrl,1); }
        f.$relPrp=function(x){
            delete f.$relPrp;
            for(i of ["lr","lf","rdo","req","qs","vrf","off","ttp","typ",...x]) f[i]=a[i];
        };
        if(a.csn) _.xC(f,a.csn,1); _.aM(d,a.cc||{});
	}
	if(a||X) {
	    _.xC(f,"ef-ctrl",1); if(a) d.fk=a.fk;
	    i=f; while(i&&i.nodeName!=="FORM") i=i.parentNode||(i.$ef&&i.$ef.$xR?i.$ef.$xR.con:0);
        if(i&&i!==f&&!f.form) f.form=i;
        if(d.fk) {
            i=i.$fctrl; if(i[d.fk]) throw _.Dic.EF[5]+d.fk;
            i[d.fk]=f; _.xP(f,"fk",{once:d.fk});
        }
	}
	_.xB(f,d);
	if(X) _.aM(f,d,'r,bf,n,ctrl,fk,html,id,csn,d,p,atr,prp,bh,chl,shd,tp,css,stl,xR,xO,evt,mD,mC,fnc,act');
	return f;
};
_.xN=function(t,o){
    var n=_.aT(o=="S")?o=_.xM({tp:"div",r:document.body,stl:{font:o}}):0,e,
        s=document.defaultView.getComputedStyle(o),f={
            visibility:"hidden",whiteSpace:"nowrap"
        },d=[
            "Family","Size","Stretch","Style","VariantCaps",
            "VariantEastAsian","VariantLigatures","VariantNumeric","Weight"
        ];
    if(n) n.xX(); for(e of d) f["font"+e]=s["font"+e];
    e=_.xM({tp:"span",r:document.body,stl:f}); e.innerText=t;
    n=Math.V2(e.offsetWidth,e.offsetHeight); e.xX(); return n;
};
_.xO=function(o,e,d){
    if(!d) d=1; var x=new MutationObserver(e),a={},i=1,j;
    for(j of ["childList","attributes","characterData","subtree"]) { if(d&i) a[j]=true; i*=2; }
    x.observe(_.xI(o),a); return x;
};
_.xP=function(a,b,z){
    let x,n,c,d,t=_.aT(z),q; if(!z) { for(x in b) _.xP(a,x,b[x]); return; }
	if(t=="H") {
		if(_.aT(z.once)) z={value:z.once,writable:false};
		else { c=z.get; d=z.set; }
	}
	else if(t=="Q") z={get:z};
	else if(t=="A") { c=z[0]; d=z[1]; x=z[2]; z={}; }
	else if(t=="S") { c=d=z; if(z[0]=='@') { c='P'; q=1; } z={}; }
	if(c) { if(c.split) c=iD(); z.get=c; }
	if(d) { if(d.split) d=iB(d.split(/ /g)); z.set=d; }
	if(!z.xconf) z.configurable=true; Object.defineProperty(a,b,z);
	if(_.aT(x)) a[b]=x; // old way!!
	
	function iA(m) {
	    if(m[0]=='!') { n=1; m=m.slice(1); }
	    let k,v=m.split(/\=/g),h,e=a,r,y; m=v[0]; h=m.split(/\:/g);
        r='e='+(h[1]?'_.xI("'+h[0]+'",f);':'f;');
	    if(h[1]) { e=_.xI(h[0],a); m=h[1]; } h=m; if(h==='') h=b; v=v[1];
	    if(m[1]=='#') {
	        k=m[0]; h=m.slice(2); if(h==='') h=b;
	        if(k=='L') {
	            y=e.$ef.$lbl={r:e.parentNode,b:e.nextSibling,h:(h==b?0:_.xI(h,a))};
	            r+=`if(!_.aT(v)||v==="") _.xX(e); else { h=e.$ef.$lbl;
if(!e.parentNode) { h.r.insertBefore(e,h.b||h.r.firstChild); }
e.innerHTML=`+iC(v)+`; if(h.h) f.w=f.w; }`;
	            if(y.h) _.xP(a,{
	                w:['P',function(v){
					    a.$ef.w=v; var x=["initial","auto"]; _.xS(y.h,[v||"unset"]);
					    e.style.flex=x[v?1:0]; y.h.style.flex=x[v?0:1];
				    }],lr:'A#'
				});
	        }
	        else if(k=="A"||k=="C"||k=="E") {
	            r+='_.x'+k+'(e,"'+h+'",'+iC(v)+');'; if(k=="E") m='P';
	        }
	        else if(k=="S") r+='e.style.'+h+'='+iC(v)+';';
	    }
	    else r+='e.'+h+'='+iC(v)+';';
	    if(m=="P") { if(h=="P") h=b; r+='e.$ef.'+h+'=v;'; } return r;
	}
	function iB(m) {
	    let i,r='let _=EF,f=this,e,h;'; if(q) {
	        r+='f.$ef.'+b+'=v;'; m[0]=m[0].slice(1); }
	    for(i of m) r+=iA(i); if(n) r+='delete f.'+b+'; _.xP(f,"'+b+'",{once:v});';
		return (new Function('v',r)).bind(a);
	}
	function iC(v) {
	    let r; if(q) if(v) 
	        if(v[1]=='$') { if(v[0]=="C") r='f.$fnc.'+v+'(f)'; }
	        else r='`'+v.replace(/\$\{/g,'${f.$ef.')+'`';
	    else r='f.$ef.'+b; else r='v'; return r;
	}
	function iD(){
	    let h,e=a,k,r;
	    if(c[0]=='!') { n=1; c=c.slice(1); } h=c.split(/\:/g);
	    if(h[1]) { e=_.xI(h[0],a); c=h[1]; } h=c; if(h==="") h=b;
	    if(c[1]=='#') {
	        k=c[0]; h=c.slice(2); if(h==="") h=b;
			if(k=="L") r='e.parentNode?e.innerHTML:""';
			else if(k=="S") r='e.style[h]';
			else if(k=="A"||k=="C") r=_['x'+k].bind(null,e,h,"~");
			else if(k=="E") c='P';
		}
		else r='e[h]';
		if(c=="P") { if(h=="P") h=b; r='e.$ef[h]'; }
		return r.split?(new Function('e','h','return '+r+';')).bind(a,e,h):r;
	}
};
_.xR=function(f,p,d){
    f=_.xI(f); var op,e=[]; d.con=_.xI(d.con,f)||f; e.$ef={};
    _.xP(f,p,['P',function(v){ if(_.aT(v)=="A") iA(0,v,f[p].length); }]);
    e.push=function(){ let n=iA(f[p].length,Array.from(arguments),0); return n.add; };
    e.pop=function(){ let n=iA(f[p].length-1,[],1); return n.del[0]; };
    e.unshift=function(){ let n=iA(0,Array.from(arguments),0); return n.add; };
    e.shift=function(){ let n=iA(0,[],1); return n.del[0]; };
    e.splice=function(){
        var g=Array.from(arguments); g[0]=parseInt(g[0]); g[1]=parseInt(g[1]);
        if(!isNaN(g[0])&&g[0]>=0&&!isNaN(g[1])&&g[1]>=0) return iA(g[0],g.slice(2),g[1]);
    };
    e.sort=function(e){
        var i;
        // e = comparison function
    };
    e.reverse=function(){
        var i;
        //
    };
    e.add=function(a,i){ let t=_.aT(a),n; if(!t) return; n=iA(_.aT(i)?i:f[p].length,t=="A"?a:[a],0); return n.add; };
	e.del=function(q,i){ if(q=="X") { q=f[p].length; i=0; } let n=iA(_.aT(i)?i:f[p].length-q,[],q||1); return n.del; };
    _.xP(e,{
        pg:['P',function(v){
            v=parseInt(v); e.$ef.pg=!v||isNaN(v)?Infinity:v;
            iD(); iG();
        }],
        ofx:['P',function(v){
            v=parseInt(v); if(isNaN(v)) return; let m=f[p]?f[p].length-e.$ef.pg:0;
            if(v>m) v=m; if(v<0) v=0; m=e.$ef.ofx; e.$ef.ofx=v; iE(m); if(d.$ofx) d.$ofx(m);
        }]
    });
    f.$ef[p]=new Proxy(e,{ set:function(t,i,v){
        let z=isNaN(i);
        if(!z) { if(!op) v=iB(v,i*1); if(!v) return true; v.$ef.$idx=i*1; v.$ef.$xR=t; }
        t[i]=v; if(!z&&d.set) d.set(f,v,i); return true;
    } });
    f[p].pg=d.pg; f[p].ofx=d.ofx||0; f[p].con=d.con; f[p]=d.dt||[];

    function iA(b,a,r){
        op=1; var c=d.con.children,i,j,z=[],y=[],l,g,al=f[p].length,m=al-b-r; if(m<0) r+=m;
        for(i of a) { j=iB(i,b+z.length); if(j) z.push(j); } l=z.length; g=Math.abs(l-r);
        if(l>r) for(i=0,j=al-1 ; i<m ; i++,j--) f[p][j+g]=f[p][j];
        m=l>r?l:r; for(i=0,j=b-f[p].ofx ; i<m ; i++,b++,j++) {
            if(i<l&&j<f[p].pg) d.con.insertBefore(j<0?f[p][c[0]?c[0].$ef.$idx-1:f[p].ofx-1]:z[i],j<0?c[0]:c[j]);
            if(i<r) { if(d.del) d.del(f,f[p][b],b); y.push(f[p][b]); f[p][b].remove(); }
            if(i>=l) f[p][b]=f[p][b+g]; if(i<l) { f[p][b]=z[i]; if(d.add) d.add(f,z[i],b); }
        }
        if(r>l) { while(b<al) { f[p][b]=f[p][b+g]; b++; } f[p].length-=g; iG(); }
        else if(g) iD(); if(d.end) d.end(); op=0; return {add:z,del:y};
    }
    function iB(v,i){
        if(d.inp) v=d.inp(f,v,i); if(_.aT(v)!=="H") v={txt:(v||"")};
        if(d.lim&&!d.lim(f,v,i)) return;
        var x=f[p][i]; if(op||!x) {
            x=_.aT(d.tpl)=="Q"?d.tpl(f,i):_.aM({},d.tpl); x=_.xM(x);
        }
        _.aM(x,v); return x;
    }
	function iD(){ let c=d.con; while(c.children.length>f[p].pg) c.lastChild.remove(); }
    function iE(o){
        let c=d.con.children,b=f[p].ofx,j;
        if(b>o) { for(j=o ; j<b&&c.length ; j++) c[0].remove(); iG(); }
        // Jump if too far
        if(b<o) { while(--o>=b) d.con.insertBefore(f[p][o],c[0]); iD(); }
    }
    function iG(){
        let c=d.con,x=f[p].ofx+c.children.length;
        while(c.children.length<f[p].pg&&f[p][x]) c.appendChild(f[p][x++]);
    }
};
_.xS=function(f,a,b){
    f=_.xI(f); if(!a||!f) return; f=f.style;
    if(a.join) {
        if(a[0]) f.width=a[0]+(isNaN(a[0])?"":"em");
        if(a[1]) f.height=a[1]+(isNaN(a[1])?"":"em");
    }
    else {
        b=_.xI(b); let i,x={l:"left",t:"top",r:"right",b:"bottom"},s={f:"fixed",r:"relative",s:"sticky",x:"static"};
        if(b&&!a.p) { a.l=b.offsetLeft+(isNaN(a.l)?0:a.l); a.t=b.offsetTop+(isNaN(a.t)?0:a.t); }
        for(i in x) if(_.aT(a[i])) f[x[i]]=a[i]+(a[i]===""||isNaN(a[i])?"":"px"); f.position=(s[a.p]||"absolute");
    }
};
_.xV=function(e,c){
    if(!c) c=Math.V2(); return c.add(_.xI(e).getBoundingClientRect()).round(1);
};
_.xX=function(e,r){
	let t,i,f,p; e=_.xI(e,r);
	if(!e||["HTML","BODY","HEAD"].indexOf(e.nodeName)>-1) return;
	if(e.nodeName=="FORM"&&e.close) return e.close(); if(e.dispose) e.dispose();
    p=e.parentNode; if(e.$ef) {
        _.SE.del(e,1); if(e.$ef.$name&&p&&p.$elm) delete p.$elm[e.$ef.$name];
        f=e.form; if(f&&f.$fctrl) delete f.$fctrl[e.$ef.fk];
        if(e.$ef.$xR&&e.$ef.$xR.con===p) {
            e.$ef.$xR.splice(e.$ef.$idx,1); _.aX(e.$ef,'$xR,$idx');
        }
        for(i in e.$ef.$xX) _.xX(e.$ef.$xX[i]);
    }
    if(e.src&&!e.src.indexOf('blob:')) URL.revokeObjectURL(e.src); e.remove();
};
_.xZ=function(o){
    var x=(_.xI(o)||document).getElementsByTagName('ef-ctrl'),a;
    while(x.length) {
        try { a=eval('('+x[0].innerHTML+')'); a.bf=x[0]; a=_.xM(a); } catch(e){
            a=_.xM({tp:"div",bf:x[0],txt:"!!!",csn:"err"}); console.log(e);
        }
        _.xA(a,"xtrl",1); _.xX(x[0]);
    }
};

(function(){
_.mC=function(h,f,b,z){
	h.$ef.$mh=[0,0,0,0,0];
	_.xE(h,"pointerdown",function(e) {
	    if(b&&!b(e,h)) return;
	    if(z) h.$ef.$mh[3]=e; h.$ef.$mh[0]=Date.now(); iA(); h.$ef.$mh[2]=0;
	});
	_.xE(h,["pointerup","pointerout"],function(e) {
	    let m=h.$ef.$mh,c=(e.type[7]=="o"?1:0);
	    if(!m[0]||(b&&!b(e,h))||m[4]+10>Date.now()) return;
	    if(c) {
	        iA(); if((m[0]+600)<Date.now()) f(e);
	        else if(m[1]) f(m[3]||e,m[1]||0,c); h.$ef.$mh=[0,0,0,0,0];
	    }
	    else if((m[0]+600)<Date.now()) { f(e); h.$ef.$mh=[0,0,0,0,0]; }
	    else {
	        m[1]++; if(!z) f(e,m[1]||0,c);
	        m[2]=setTimeout(function() {
	            if(z) f(m[3]||e,m[1],c); h.$ef.$mh=[0,0,0,0,0];
	        },180);
	    }
	    m[4]=Date.now();
	});
	function iA() { if(h.$ef.$mh[2]) clearTimeout(h.$ef.$mh[2]); }
};
_.mD=function(f,o,m){
    if(!o) o=f; let d=f.$ef.i$drg={},z=iZ.bind(null,f,d,iB);
	_.xP(f,"drg",['C#ef-cur-drg',function(v) { _.xC(o,'ef-cur-drg',v); _.xE(o,"pointerdown",z,v?0:-1); }]);
	function iB(e){
	    e.preventDefault(); if(!d.p) { if(d.s.p=="x") d.s.p="r"; d.p=_.mP(e); return; }
	    let v=_.mP(e).sub(d.p).add(Math.V2(d.s.l,d.s.t)).max(0);
	    if(m) v=iC(v); _.xS(f,{l:v.x,t:v.y,p:d.s.p}); if(f.$drg) f.$drg();
	}
	function iC(v){ v.x-=v.x%m; v.y-=v.y%m; return v; }
};
_.mP=function(e){
    var t=e.currentTarget||e.target,b=t.getBoundingClientRect();
    return Math.V2(e.pageX-b.x-window.scrollX,e.pageY-b.y-window.scrollY);
};
_.mR=function(f,z,s){
    let d=f.$ef.i$rsx={spl:s||0,r:(s?f.parentNode:0)};
	_.xP(f,"rsx",{
	    get:function(){ return d.rx; },
		set:function(v){
			let r=f.$rsx; if(isNaN(v)||v<0||v>(d.spl?2:3)) v=0; d.rx=v;
			if(v) {
				if(!r) r=f.$rsx=_.xM({tp:"div",r:f,csn:"ef-rsx",evt:{pointerdown:iZ.bind(null,f,d,iB)}});
				_.xA(r,d.spl?"spl":"rx",v);
			}
			else { _.xX(r); delete f.$rsx; }
	    }
	});
	f.rsx=z||0;
	function iB(e){
		e.preventDefault(); if(!d.p) { d.p=_.mP(e); return; } let v=_.mP(e).sub(d.p),b,m="px";
		v=[d.rx&1?d.s.w+v.x:null,d.rx&2?d.s.h+v.y:null];
		if(d.spl) {
			if(d.spl&4) {
			    m="%";
				if(d.rx==1) v[0]=((v[0]*100)/d.r.clientWidth);
				else if(d.rx==2) v[1]=((v[1]*100)/d.r.clientHeight);
			}
			if(d.spl&2) { b=f.style; b.minWidth=b.maxWidth=v[0]+m; b.minHeight=b.maxHeight=v[1]+m; }
			else _.xS(f,[v[0]+m,v[1]+m]);
		}
		else _.xS(f,[v[0]+m,v[1]+m]);
		if(f.onrsx) f.onrsx(f);
	}
};
function iZ(f,d,c,e){
	e.preventDefault();
	let i,g=document.defaultView.getComputedStyle(f),
	    w={static:"x",sticky:"s",relative:"r",fixed:"f"},
	    a={l:"left",t:"top",r:"right",b:"bottom",w:"width",h:"height"},
	    b={p:w[g.position]};
	for(i in a) b[i]=g[a[i]].replace(/px/,'')*1; d.s=b;
	if(!d.blk) d.blk=_.xM({tp:"ef-blk",r:document.body,evt:{
	    pointermove:c,pointerup:iA,pointerout:iA }});
	function iA(){ _.xX(d.blk); delete d.blk; delete d.p; }
}
})();

_.AVL=function(d){
	var o=this,t=_.aT(d); if(t=="Q") d={alg:d}; else if(t!=="H") d={v:d};
	if(!d.alg) d.alg=function(a,b){ return a<b?-1:(a>b?1:0); };
	o.add=function(v){
		let i,n; if(_.aT(v)=="A") { for(i of v) o.add(i); return; }
		n={ v:v }; n.del=iX.bind(n); if(!o.root) o.root=n; else o.root=iW(o.root,n);
	};
	o.get=function(v,n){ return iD(v,o.root,n?1:0); };
	o.plot=function(a,n) {
	    if(!n) n=o.root; let h=[];
	    // 
	};
	if(d&&_.aT(d.v)) o.add(d.v);
	function iD(v,n,k) {
	    let h=n?d.alg(v,n.v):0;
	    if(k==1) k=n;
	    else if(k) { if(!n) return k; if(Math.abs(h)<Math.abs(d.alg(v,k.v))) k=n; }
	    return h?iD(v,h<0?n.b:n.e,k):n;
	}
	function iC(n) { return iH(n.b)-iH(n.e); }
	function iH(n) { return n?Math.max(iH(n.b),iH(n.e))+1:-1; }
	function iW(r,n) {
		if(!r) return n;
		if(d.alg(n.v,r.v)<0) {
		    r.b=iW(r.b,n); if(r.b&&iC(r)>1) r=d.alg(n.v,r.b.v)<0?iL(r):iE(r);
		}
		else {
		    r.e=iW(r.e,n); if(r.e&&iC(r)<-1) r=d.alg(n.v,r.e.v)<0?iB(r):iR(r);
		}
		return r;
	}
	function iL(n) { let m=n.b; n.b=m.e; m.e=n; return m; }
	function iR(n) { let m=n.e; n.e=m.b; m.b=n; return m; }
	function iE(n) { n.b=iR(n.b); return iL(n); }
	function iB(n) { n.e=iL(n.e); return iR(n); }
	function iX(n) { /* delete node */ }
};
_.CVS={
    ItoR:function(i,w,h) {
        let C,v=i.nodeName=="SVG"; if(!h) h=w;
    	w=(w=="R"?(v?i.clientWidth:i.width):(w||(v?_.xA(i,"width","~")*1:i.naturalWidth)));
    	h=(h=="R"?(v?i.clientHeight:i.height):(h||(v?_.xA(i,"height","~")*1:i.naturalHeight)));
    	C=_.xM({tp:"$cvs",w:w,h:h}); C.ctx.drawImage(i,0,0,w,h); return C.raw();
    },
    RtoI:function(d,t,q) {
    	if(!d||d.src==="") return; var C=_.xM({tp:"$cvs",w:d.width,h:d.height,qs:q});
    	C.ctx.putImageData(d,0,0); return C.get(t,q);
    },
    SVG:function(v,c,e) {
        if(!v.indexOf("data:image/svg")) v=decodeURIComponent(v.slice(19));
        if(!v.indexOf('<svg ')) return c(_.CVS.SVGx(v,2));
        let o=_.xM({tp:"embed",r:document.body,bh:1,load:{
            p:v,atr:"src",buf:1,inp:function(x){ return x.url('image/svg+xml'); },
            ok:function(x){ x=o.getSVGDocument(); if(x) c(x.rootElement); o.xX(); },
            err:function(){ o.xX(); e(); }
        }});
    },
    SVGx:function(a,b){
        if(b) { a=_.xM({tp:"div",html:a}).children[0]; _.xA(a,"style"); }
	    for(let i of a.children)
	        if(i.nodeName.toLowerCase()=="script"||_.xA(i,"hlp","~")) i.remove();
	        else { _.xA(i,"xmlns"); _.CVS.SVGx(i); }
	    return b==1?a.outerHTML:(b==2?a:0);
    }
};
_.Num={
    S:function(v,f,m) {
	    var o={}; if(m) { o.style='currency'; o.currency=m; } else _.Num.F(o,f);
	    return v.toLocaleString(_.Crd.L,o);
    },
    F:function(o,f) { if(_.aT(f)=="N") o.minimumFractionDigits=o.maximumFractionDigits=f; return o; },
    M:function(v) {
	    var x=" kMGTPEZY",i=0;
	    while(i<x.length&&v>=Math.pow(1024,i)) i++; if(i) i--;
	    return _.Num.T(v/Math.pow(1024,i),0.01,0)+" "+x[i]+"B";
    },
    T:function(v,x,m,h) {
        var a=m||0; if(x) v=(x&&((v-a)%x))?Math.round((v-a)/x)*x+a:v;
	    if(_.aT(m)&&v<m) v=m; if(_.aT(h)&&v>h) v=x?m+Math.floor((h-a)/x)*x:h;
	    x+=""; a=x.indexOf('.'); return a>-1?v.toFixed(x.length-a)*1:v;
    },
    N:function(v) {
        let t=_.aT(v); if(t=="M") { v=v+""; t="S"; }
        if(t=="S") v=parseFloat(v.replace(/[^(0-9\-e).]/g,'')); return isNaN(v)?0:v;
    }
};
_.Bin=function(dt,md){
	var o=this,f=16384,unf; o._obt="F";
	o.XX=function() { o.d=[new Uint8Array(f)]; o.p=0; o.o=0; };
	o.WD=function(r,s,e) {
	    let i,n; if(r.join) { for(i of r) o.WD(i,s,e); return; }
		if(r.split) return o.WD(iE(r)); n=r<0?-r:r;
	    if(!s) { s=1; for(i=256 ; i<=n&&s<8 ; i*=256) s++; } if(r<0) r+=Math.pow(2,8*s);
	    for(i=(e?s-1:0); i!==(e?-1:s); i+=(e?-1:1)) {
	        o.d[o.p][o.o++]=Math.floor(r/Math.pow(2,i*8))%256; if(o.o==f) { o.d[++o.p]=new Uint8Array(f); o.o=0; }
	    }
	};
	o.WB=function(a,e,b,l) { o.WD(a.slice(b||0,l),0,e); };
	o.FL=function(q,r,x,m) {
	    let i=o.url();
	    if(!r) _.aD(i,q,x,m||"application/octet-stream");
	    else if(_.aT(r)=="Q") r(i,q); URL.revokeObjectURL(i);
	};
	o.RD=function() {
		var q=new Uint8Array(o.p*f+o.o),b,i,j=0,m;
		for(b of o.d) for(i of b) q[j++]=i;
		return q;
	};
	o.RB=function(i,q,e) {
	    var j,n,r=0,b; i=[Math.floor(i/f),i%f]; if(q<0) { n=1; q=-q; } b=e?(q-1)*8:0;
	    for(j=0 ; j<q ; j++,b+=e?-8:8) {
	        r+=Math.pow(2,b)*(o.d[i[0]][i[1]]||0); i[1]++;
	        if(i[1]==f) { i[0]++; i[1]=0; }
	    }
	    return r-(n?Math.pow(2,q*8-1):0);
	};
	o.RA=function(a,b) {
	    var q=new Uint8Array(b),i=Math.floor(a/f),j=a%f;
		for(a=0 ; a<b ; a++) { q[a]=o.d[i][j]; j++; if(j==f) { i++; j=0; } }
		return q;
	};
	o.RT=function(i,q) { return iD(o.RA(i||0,q||o.len())); };
	o.AV=function(t,v,s,e){
	    var i,g=v,n,w; if(v<0) { n=1; g=-g; } if(!s) { s=1; for(i=256 ; i<=v&&s<8 ; i*=256) s++; }
	    if(n) g+=1<<(s*8-1); for(i=(e?s:0); i!==(e?0:s); i+=(e?-1:1)) { o.d[Math.floor((t+i)/f)][(t+i)%f]=Math.floor(g/Math.pow(2,i*8))%256; }
	};
	o.blob=function(t,n) { let i=new Blob([o.RD()],t); i.name=n; return i; };
	o.url=function(t,n) { return URL.createObjectURL(o.blob({type:t},n)); };
	o.url64=function(t) { return "data:"+(t||"application/octet-stream")+";base64,"+o.B64(); };
	o.len=function() { return o.p*f+o.o; };
	o.B64=function() { return i6(o.RD(),1); };
	o.XX(); if(dt) {
	    if(md=="PK") { o.WD(0); iP(dt); }
	    else o.WD(md=="B64"||(md=="PX"&&dt.split)?i6(dt):dt,0,md=="N"?1:0);
	    if(md=="PX"&&!o.RB(0,1)) return iX([1]);
	}
	
	function i6(t,e) {
	    return e?btoa(String.fromCharCode(...t)):atob(t.replace(/\_/g,'+')).split("").map(function(c) { return c.charCodeAt(0); });
	}
	function iD(t) { return (new TextDecoder()).decode(t); }
	function iE(t) { return (new TextEncoder("utf-8")).encode(t); }
	function iL(v) { let x=[]; while(v) { x.push(v&255); v=Math.floor(v/256); } return x; }
	function iP(d) {
	    let t=_.aT(d),i,n; 
	    if(!t) o.WD(0); 
	    else if(t=="A") { n=iL(d.length); o.WD(8+n.length); if(n.length) o.WD(n); for(i of d) iP(i); }
        else if(t=="H") {
            n=iL(Object.keys(d).length); o.WD(16+n.length); if(n.length) o.WD(n); 
            for(i in d) { iP(i); iP(d[i]); }
        }
        else if(t=="S") { d=iE(d); n=iL(d.length); o.WD(32+n.length); if(n.length) o.WD([n,d]); }
        else if(t=="N") {
            t=0; if(d<0) { t=8; d=-d; }
            if(d==Infinity) o.WD(80+t);
            else {
                d=(d+"").split(/e/g); i=d[1]||0; d=d[0].split(/\./g);
                i-=(d[1]||"").length; d=d.join('');
                if(i<-127) o.WD(48+t); else if(i>127) o.WD(80+t); else {
                    d=((d*1)+'').split(''); n="";
                    while(d.length) { n=d.pop()*1; if(n) break; i++; }
                    d=d.join('')+n; n=iL(d*1); o.WD([(i?64:48)+t+n.length,n]);
                    if(i) o.WD(128+i);
                }
            }
        }
        else if(t=="D") { d=d.getTime(); t=96; if(d<0) { t=104; d=-d; } n=iL(d); o.WD([t+n.length,n]); }
        else if(t=="I") {
            d=d.src.indexOf("data:")?_.CVS.RtoI(_.CVS.ItoR(d)):d.src;
            i=d.indexOf(","); d=[d.slice(0,i),d.slice(i+1)];
            if(d[0].indexOf(";base64")>-1) d[1]=i6(d[1]);
            n=iL(d[1].length); o.WD([112+n.length,n,d[1]]);
        }
        else if(t=="F") { d=d.RD(); n=iL(d.length); o.WD(120+n.length); if(n.length) o.WD([n,d]); }
        else if(t=="L") {
            if(d.R=="N") { n=iL(d.V); if(!n.length) n=[0]; o.WD([164+n.length,n]); }
            else if(d.R=="R") { o.WD(167); iP(d.V); }
            else { o.WD(128+Object.keys(d.V).length); for(i in d.V) { iP(i); iP(d.V[i]); } }
        }
        else if(t=="C") {
            n=0; let V=d.val; for(i=0 ; !n&&i<4 ; i++) if(V[i]%17) n=1;
            if(!n) o.WD([144,Math.floor(V[0]/17)*4096+Math.floor(V[1]/17)*256+Math.floor(V[2]/17)*16+Math.floor(V[3]/17)]);
            else {
                if(V[0]%4===0&&V[1]%8===0&&V[2]%8===0) { t=1; n=(V[0]/4)*1024+(V[1]/8)*32+(V[2]/8); }
                else if(V[0]%8===0&&V[1]%4===0&&V[2]%8===0) { t=2; n=(V[0]/8)*2048+(V[1]/4)*32+(V[2]/8); }
                else if(V[0]%8===0&&V[1]%8===0&&V[2]%4===0) { t=3; n=(V[0]/8)*2048+(V[1]/8)*64+(V[2]/4); }
                else { t=4; n=V[0]*65536+V[1]*256+V[2]; }
                if(d.alp) t+=4; o.WD([144+t,n]); if(d.alp) o.WD(V[3]);
            }
        }
        else if(t=="Z") { o.WD(172); iP(d.c); iP(d.d); }
        else if(t=="B") o.WD(160+(d?1:0));
        else if(t=="V2") { o.WD(162); iP(d.x); iP(d.y); }
        else if(t=="V3") { o.WD(163); iP(d.x); iP(d.y); iP(d.z); }
        else if(d.Bin) { o.WD(255); d.Bin(o); }
        else o.WD(0);
	}
	function iX(p) {
	    let r,i,n=0,t,d=o.RB(p[0],1); p[0]++; if(!d) return; t=d>>4;
	    if(t<8) { i=d%8; if(i) { n=o.RB(p[0],i); p[0]+=i; } }
	    else i=d%16;
	    if(!t) { r=[]; for(i=0 ; i<n ; i++) r.push(iX(p)); }
	    else if(t==1) { r={}; for(i=0 ; i<n ; i++) { t=iX(p); r[t]=iX(p); } }
	    else if(t==2) { r=n?iD(o.RA(p[0],n)):""; p[0]+=n; }
	    else if(t==3||t==4) {
	        r=d&8?-n:n;
	        if(t==4) { i=o.RB(p[0],1); p[0]++; r*=Math.pow(10,i-128); }
	    }
	    else if(t==5) r=d&8?-Infinity:Infinity;
	    else if(t==6) r=new Date(d&8?-n:n);
	    else if(t==7) {
	        if(d&8) {
	            // Bin Data file (Blob)
	            // r=o.RA(p[0],n); p[0]+=n;
	        }
	        else {
	            r=new Image(); i=new _.Bin(o.RA(p[0],n)); p[0]+=n;
	            n=i.RT(0,4).toLowerCase()=="<svg"?'image/svg+xml':null;
	            r.src=i.url(n);
	        }
	    }
	    else if(t==8) { r=new _.ML({}); for(n=0 ; n<i ; n++) r.V[iX(p)]=iX(p); }
	    else if(t==9) {
	        t=(!i||i%4)?2:3; n=o.RB(p[0],t); p[0]+=t;
	        if(!i) r=new _.Color(Math.floor(n/4096)*285212672+(Math.floor(n/256)%16)*1114112+(Math.floor(n/16)%16)*4352+(n%16)*17,1);
	        else {
	            if(i%4==1) n=Math.floor(n/1024)*262144+(Math.floor(n/32)%32)*2048+(n%32)*8;
	            if(i%4==2) n=Math.floor(n/2048)*524288+(Math.floor(n/32)%64)*1024+(n%32)*8;
	            if(i%4==3) n=Math.floor(n/2048)*524288+(Math.floor(n/64)%32)*2048+(n%64)*4;
	            if(i>4) { n*=256; n+=o.RB(p[0],1); p[0]++; }
	            r=new _.Color(n,i>4);
	        }
	    }
	    else if(t==10) {
	        if(i<2) r=i?true:false;
	        else if(i==2) r=Math.V2(iX(p),iX(p));
	        else if(i==3) r=Math.V3(iX(p),iX(p),iX(p));
	        else if(i<12) {
	            n=i>7?i-4:i; if(n<3) { r=new _.ML(o.RB(p[0],n),i>7?0:"N"); p[0]+=n; r.R="N"; }
	            else { r=new _.ML(iX(p),i>7?0:"R"); r.R="R"; }
	            if(i>7) r.E=iX(p);
	        }
	        else if(i==12) r=new _.GOP(iX(p),iX(p));
	    }
	    else if(d==255) {
	        n=o.RB(p[0],1); p[0]++; t=iX(p); n=new Array(n); for(i in n) n[i]=iX(p);
	        r=new _.Itc[t](); _.Itc[t].prototype.constructor.apply(r,n);
	    }
	    return r;
	}
};
_.Color=function(e,a){
	let o=this,t,i,j; o._obt="C"; o.$ef={}; o.alp=a;
	_.xP(o,"val",['P',function(v) {
	    t=_.aT(v); let V;
        if(t=="S") {
            j=window.EF.xM({tp:"div",r:document.body,stl:{color:v}});
            i=window.getComputedStyle(j).color.slice(4); j.xX();
            V=i.slice(0,i.length-1).split(/\,/g); for(j in V) V[j]=parseInt(V[j]);
	    }
	    if(t=="N") V=o.alp?[Math.floor(v/16777216),(v>>16)&0xff,(v>>8)&0xff,v&0xff]:[(v>>16)&0xff,(v>>8)&0xff,v&0xff,255];
	    else if(t=="H") {
	        if(v.r||v.g||v.b) V=[v.r||0,v.g||0,v.b||0];
	        else if(v.h||v.s||v.l) {
		        var M=Math.floor(v.h%6),G=["FXO","RFO","OFX","ORF","XOF","FOR"][M],H=[],S,L=v.h-M;
		        S={F:255,O:0,X:Math.floor(L*255),R:Math.floor((1-L)*255)};
		        for(i in G) {
			        H.push(S[G[i]]); H[i]+=Math.floor(((128-H[i])*(255-v.s))/255);
			        if(v.l>128) H[i]+=Math.floor(((255-H[i])*(v.l-128))/127);
			        else H[i]-=Math.floor((H[i]*(128-v.l))/128);
		        }
		        V=H;
	        }
	        if(_.aT(v.a)) V.push(v.a);
	    }
	    else if(t=="A") V=_.aC(v);
	    else if(t=="C") V=_.aC(v.val);
	    if(!V) V=[0,0,0]; if(V.length<4) V.push(255);
	    if(V[3]<255) if(!_.aT(o.alp)) o.alp=1; else if(o.alp===0) V[3]=255; o.$ef.val=V;
	}]);
	o.toString=function() { return o.dom().outerHTML; };
	o.hsl=function() {
		var c=o.val,G,M,H=[],i; for(i=0 ; i<3 ; i++) c[i]=Math.floor(c[i]);
		G=Math.max(c[0],c[1],c[2]); M=Math.min(c[0],c[1],c[2]); H=[0,G-M,Math.floor((G+M)/2)];
		if(H[1]>0) H[0]=(G==c[0])?((c[1]-c[2])/H[1]+((c[1]<c[2])?6:0)):((G==c[1])?((c[2]-c[0])/H[1]+2):((c[0]-c[1])/H[1]+4));
		return H;
	};
	o.rev=function(x) { var v=o.val; return (v[0]+v[1]*2+v[2])<384?(x?255:'#fff'):(x?0:'#000'); };
	o.css=function() {
	    return o.alp?"rgba("+o.val.slice(0,3).join(',')+","+(o.val[3]/255).toFixed(3)+")":o.hex();
	};
	o.hex=function(){ return "#"+_.a0(o.int(),o.alp?8:6,16); };
	o.dom=function(w) { return _.xM({
		tp:'div',d:[w||10],html:o.hex(),
		stl:{ border:"1px dashed #000",background:o.css(),color:o.rev(),textAlign:"center" }
	}); };
	o.int=function() { let V=o.val; return o.alp?(V[0]*16777216)+(V[1]<<16)+(V[2]<<8)+V[3]:(V[0]<<16)+(V[1]<<8)+V[2]; };
	o.cpy=function() { return new _.Color(o.val,o.alp); };
	o.eq=function(c) { for(var i=0 ; i<4 ; i++) if(c.$ef.val[i]!==o.$ef.val[i]) return; return 1; };
	o.val=e; return o;
};
_.sm=function(p){ return new Promise((rs,rj)=>{
	if(_.aT(p)=="S") p={ p:p }; if(!p.hdr) p.hdr={};
	var o,h=new XMLHttpRequest(),v,m=p.post?"POST":"GET",i,z; if(p.buf) p.bin=1;
	if(!p.prg) o=p.frm?p.frm.block({prg:1}):_.xM({tp:"$prg",r:_.PG});
	if(_.aT(p.pmt)) { v=new Blob([new _.Bin({C:_.Crd,V:p.pmt},"PK").RD()]); m="EFOBJ"; }
	else if(p.p.length>2000) {
	    v=p.p.split(/\?/); m="POST"; p.p=v[0]; v=v[1];
	    p.hdr["Content-type"]="multipart/form-data; charset=utf-8"; 
	}
	h.open(m,p.p); if(p.bin) h.responseType='arraybuffer';
	if(p.hdr) for(i in p.hdr) h.setRequestHeader(i,p.hdr[i]);
	h.onload=function() {
	    if(z) clearTimeout(z); if(h.status<200||h.status>399) return iA();
	    let x,c=h.getAllResponseHeaders(); // better to do all lc()
		if(iD(c,"efon-object")) x=_.Bin(new Uint8Array(h.response),"PX");
		else if(p.bin) {
		    if(_.aT(p.bin)!=="H") p.bin={}; x=new _.Bin(new Uint8Array(h.response));
		    if(!p.buf) x=x.url(p.bin.tp,p.bin.fn);
		}
		else x=h.responseText;
		if(p.frm) p.frm.xBlk(o); else _.xX(o);
		if(iD(c,"efon-action")) { c=new Function('V',x[0]); return rs(c(x[1])); }
		rs(p.ok?p.ok(x):0);
	};
	h.upload.onprogress=h.onprogress=function(e) {
	    iC(); if(_.aT(p.prg)=="Q") return p.prg(h,e);
	    var w=p.prg||(p.frm?o.children[1]:o); w.max=e.total; w.val=e.loaded;
	};
	h.onerror=iA; try { h.send(v); } catch(e) { iA(e); }
	
	function iA(e) {
		let x=p.bin?h.response:h.responseText,a=h.status;
		if(x) try { x=(p.bin?new TextDecoder().decode(x):x); } catch(z){ x="&lt;ERROR&gt;"; }
		else { x=p.p+" >> [empty]"; }
		if(a>=100&&a<200||!a) {
		    _.alert({tit:a,txt:x,err:1,end:(a?0:500)});
		    h.open(m,p.p); iC(); return h.send(v);
		}
		if(p.frm) p.frm.xBlk(o); else o.xX();
		rj(p.err?p.err(h,x):_.alert({tit:a,txt:x,err:1}));
	}
	function iB() { h.abort(); iA(); }
	function iC() { if(z) clearTimeout(z); z=setTimeout(iB,60000); }
	function iD(c,e) { if(c.indexOf(e)>-1) return h.getResponseHeader(e); }
}); };
_.STL=function(p,r){
    var f=_.xM({ tp:"style",r:r||document.head,bf:(r?r.firstChild:r) }),x;
    if(r&&r.id==="") r.id="S"+_.aR(); f.$ef.$aa=[]; f.kh={}; x=(r?'#'+r.id:"");
	f.add=function(c,k,z) {
	    if(!c) return; let t=_.aT(c),i,o;
	    if(t=="S") iA(c,k,z);
	    else if(t=="A") for(i of c) iA(c,0,z);
	    else for(i in c) iA(c[i],i,z);
	    iC();
	};
	f.get=function(k) { return iB(f.kh[k]); };
	f.del=function(k) { if(k) {
	    k=f.$ef.$aa.findIndex(a=>{a===f.kh[k]});
	    if(k>-1) { f.$ef.$aa.splice(k,1); iC(); }
	} };
	f.rul=function(k,s) {
	    if(_.aT(k)=="S") k=f.kh[k]; else k=f.$ef.$aa[k];
	    if(!k) return; f.kh[k[2]][1]=iD(_.aM(iB(k[1]),s)); iC();
	};
	f.add(p); return f;
	
	function iA(v,k,d) { var b=0,e,z; while(e!==-1){
	    e=v.indexOf('{',b); if(e==-1) break; z=[v.slice(b,e),{}]; b=e+1;
	    e=v.indexOf('}',b); if(e==-1) break; z[1]=v.slice(b,e); b=e+1;
	    if(_.aT(d)) f.$ef.$aa.splice(d++,0,z); else f.$ef.$aa.push(z);
	    if(k) { z.push(k); f.kh[k]=z; }
	}}
	function iB(v) {
	    var e=_.xM({tp:"div",atr:{style:v}}),i; v={};
	    for(i of e.style) v[i]=e.style[i]; return v;
	}
	function iC() {
	    var i,v="";
	    for(i of f.$ef.$aa) v+=i[0].replace(/\$\$/g,x)+"{ "+i[1]+" }\n";
	    f.innerHTML=v;
	}
	function iD(v) { return _.xA(_.xM({tp:"div",stl:v}),"style","~"); }
};
_.rc=function(f){
    if(f) { RQ[1].push(f); if(!RQ[2]) { RQ[2]=1; iA(); } }
    function iA() {
        if(RQ[0]) return setTimeout(iA,1000); 
        var a=RQ[1].pop(); if(a) a(); if(RQ[1].length) iA(); else RQ[2]=0;
    }
};
_.die=function(m){
	window.onbeforeunload=null; _.alert({ txt:m,tit:"",err:1 });
	setTimeout(function() { window.location.href=""; },3000);
};
_.SE={
    E:{},
    add:function(e) { e.$ef.$SE=_.aR(); _.SE.E[e.$ef.$SE]=e; return e; },
    del:function(e,m) {
        if(e.$ef.$SE) { delete _.SE.E[e.$ef.$SE]; delete e.$ef.$SE; }
    }
};
_.WW=function(d){
    d.cod=new _.Bin('var Q; onmessage=function(_){ Q=_; let max=1,val=0;setInterval(function(){ postMessage(["P",max,val,'+(d.pgv||'Q')+']); },500);setTimeout(function(){ postMessage(["Pc"]); },3100);\n'+d.cod+'\npostMessage(["Px"]);close();}');
    var g,w=new Worker(d.cod.url64());
    w.onmessage=function(v){
        let t=_.aT(v.data);
        if(t=="A") {
            if(v.data[0]=="P"&&g) { if(g.isCtrl) { g.max=v.data[2]; g.val=v.data[1]; } else g(v.data[1],v.data[2],v.data[3]); return; }
            if(v.data[0]=="Pc") {
                if(!d.prg&&!_.Sys.WWP) _.Sys.WWP=_.alert({tit:"",txt:"",end:"X"});
                g=d.prg||_.CTR({c:"PRG",r:(d.prg?_.PG:_.Sys.WWP),d:["100%"],max:v.data[2],val:v.data[1]});
                _.Sys.WWP.ef_pgc=1; return;
            }
            if(v.data[0]=="Px") { _.xX(g); _.Sys.WWP.ef_pgc--; if(!_.Sys.WWP.ef_pgc) _.xX(_.Sys.WWP); return; }
        }
        if(d.cbk) d.cbk(v);
    };
    w.onerror=function(v) { v.preventDefault(); _.alert({tit:v.lineno+":"+v.colno+"@"+v.filename,txt:v.message+"<br>"+v.stack,err:1}); if(d.err) d.err(v); };
    w.postMessage(d.init); return w;
};
_.Long=function(c,x,f){
    let o=_.xM({tp:"$sbt",r:c,txt:"\ue000",clk:function(){ c.stop=1; }}); return new Promise(iC=>{
        iA();
        function iA() {
            let t=Date.now(); while(!c.stop) { if(x()) return iB(1); if(t+500<Date.now()) break; }
            if(c.stop) return iB(2); if(f) f(0); setTimeout(iA,30);
        }
        function iB(n) { c.stop=0; o.xX(); if(f) f(n); iC(); }
    });
};
_.ML=function(v){
	var o=this; o._obt="L"; o.V=v;
	o.toString=function(){
		let l=_.Crd.Lang; if(l&&o.V[l]) return o.V[l]; // Picking language based on language picker (if been given). Yet to be picked as near as possible if missing...
		for(let i of navigator.languages) if(o.V[i]) return o.V[i];
		l=Object.keys(o.V); return l.length?o.V[l[0]]:"";
	};
};
_.GOP=function(c,d) { var o=this; o._obt="Z"; o.c=c; o.d=d; };
_.use=function(s,c,p){
    if(_.aT(s)=="A") { for(let i of s) _.use(i); return _.rc(c); } let x,L={prg:p},T;
    if(s[1]=='#') {
        x=s[0]; L.p=s.slice(2);
        if(x=="C") { L.p+=".css"; T="style"; L.atr="textContent"; }
        else if(x=="I") L.bin=1;
    }
    else { L.p=s+".js"; T="script"; L.atr="src"; }
    if(_.Cache.indexOf(L.p)>-1) return _.rc(c);
    RQ[0]++; _.Cache.push(L.p); L.ok=function(){ RQ[0]--; _.rc(c); };
	if(T) _.xM({tp:T,r:document.head,bh:1,load:L});
	else _.sm({p:L.p,bin:L.bin,ok:L.ok,prg:L.prg});
};
_.dict=function(c,l){
    RQ[0]++;
    _.sm({p:_.root+"/cgi-bin/dict.cgi?C="+(l?"L":"C")+"&S="+c,bin:1,ok:function(x){
        _.Dic[c]=x; RQ[0]--;
    }});
};
_.newTab=function(a,f){ _.xM({tp:"a",atr:{href:a,target:(f?0:"_blank")}}).click(); };
_.go=function(p){
    delete _.go; _.aM(_.Cfg,p.cfg); _.xC(document.body,"ef-cur-def",1); let i,j;

_.Base=_.STL(`@font-face{ font-family:EF-SDK; src:url("`+_.root+`/efsdk.ttf"); }
html, body { overscroll-behavior:contain; }
body{ margin:0; padding:0; }
.ef-ctrl{ box-sizing:border-box; margin:0 0.3em 0.3em 0; display:block; }
ef-prg{ overflow:hidden; background:#fff; }
.ef-prg-bar{ height:100%; background:#0f0; }
.ef-prg-pc{ position:absolute; width:100%; text-align:center; bottom:0%; }
ef-div[sp]{ display:inline-block; }
ef-ctrl{ display:none; }
ef-blk{ touch-action:none; z-index:999999; position:absolute; left:0; top:0; width:10000vw; height:10000vh; }
.ef-blk{ padding:16px; }
.ef-cur-btn:not([rdo]){ cursor:pointer; }
.ef-ctrl:not([rdo]) .ef-cur-txt{ cursor:text; }
.ef-ctrl:not([rdo]) .ef-cur-crx{ cursor:crosshair; }
.ef-ctrl[rdo], .ef-cur-def{ cursor:default; }
.ef-cur-drg{ cursor:all-scroll; }
div[rx], div[spl]{ position:absolute; font-family:EF-SDK; font-size:1em; }
div[rx]{ right:0; bottom:0; }
div[rx]::after{ content:"\ue01a"; }
div[rx="1"]{ cursor:e-resize; }
div[rx="2"]{ cursor:s-resize; }
div[rx="3"]{ cursor:se-resize; }
div[spl="1"]{ right:0; width:0.25em; top:0; bottom:0; cursor:col-resize; }
div[spl="2"]{ bottom:0; height:0.25em; left:0; right:0; cursor:row-resize; }
.ef-alert{ width:100vw; padding:0.5em; background:#ff0; display:inline-block; }
.ef-alert[err]{ background:#f00; color:#fff; }
.ef-alr-tit{ font-size:2em; }
.ef-ttp{ opacity:0; transition:opacity 1s; position:absolute; display:inline-block; z-index:999998; padding:4px; }
.ef-ttp::after{ content:""; position:absolute; border-style:solid; }
.ef-rib{ overflow:auto; width:16em; }
.ef-rib-col{ text-align:center; width:100%; }
form{ touch-action:manipulation; box-sizing:border-box; float:left; position:relative; overflow:hidden; min-height:2em; min-width:8em; background:#ccc; }
form[flc]{ max-height:2em; }
.ef-frm-bar{ box-sizing:border-box; display:flex; flex-direction:row; height:2em; position:relative; left:-1em; top:-1em; width:calc(100% + 2em); z-index:1000; background:#444; }
form[err] > .ef-frm-tit{ background:#f00; color:#fcc; }
form[err] .ef-cc-btn{ font-family:EF-SDK; }
.ef-frm-tit{ touch-action:none; padding:0.5em; font-weight:bold; flex:1; color:#ccc; }
.ef-frm-bar .ef-cc-sbt{ float:right !important; }
.ef-frm-blk{ z-index:1000; top:2em; bottom:0; right:0; left:0; position:absolute; }
input{ font-size:1em; }
.ef-ctrl:not([lr])[req]::before, .ef-ctrl[lr][req] .ef-lbl::before{ content:"\ue010"; font-family:EF-SDK; }
.ef-ctrl:not([ani]){ position:relative; float:left; }
.ef-cont[lr]{ flex-direction:column; }
.ef-ctrl:not([ani]):not([lf]){ clear:left; }
.ef-cont{ display:flex; flex-direction:row; }
.ef-cont:not([lr]){ align-items:center; }
.ef-field{ box-sizing:border-box; background:#fff; }
.ef-ctrl[xtrl]{ float:none; }
.ef-text{ min-height:1em; overflow:hidden; text-overflow:ellipsis; }
.ef-text:not(:valid):not(.ef-cod-fld){ outline:#f00; color:#f00; }
textarea, div[contenteditable]{ tab-size:4; -o-tab-size:4; -moz-tab-size:4; }
.ef-tre-item[sel] > div{ background:#444; color:#fff; }
.ef-tre-icon{ font-size:1em; font-family:EF-SDK; padding-right:2px; cursor:pointer; }
.ef-tre-box{ padding:0.5em 0.5em 0.5em 2em; border-left:1px dashed #000; position:relative; left:0.5em; }
.ef-tre-box[clp]{ display:none; }
.ef-tre-space{ padding:0.5em; overflow:auto; }
.ef-tre-space, .ef-tre-box{ margin:0; box-sizing:border-box; }
.ef-tre-item{ display:grid; }
.ef-tre-space, .ef-tre-item{ list-style-type:none; }
.ef-tre-item > div, .ef-tre-lbl{ white-space:nowrap; }
.ef-cc-tre[wrp] .ef-tre-lbl, .ef-cc-tre[wrp] .ef-tre-item > div{ white-space:normal; }
.ef-ddl-fld{ display:flex; flex-direction:row; }
.ef-ddl-sel{ flex:auto; }
.ef-ddl-rec{ margin:0; align-items:center; display:flex; width:100%; flex:none; }
.ef-ddl-fld > .ef-cc-sbt{ flex:initial; }
.ef-ddl-flx{ display:flex; flex-direction:column; overflow:auto; }
.ef-img-box, .ef-cc-cvs > div{ overflow:auto; }
.ef-cc-img:not([alg="S"]) .ef-img-box{ width:100%; height:100%; }
img[ani]{ position:absolute; left:0px; top:0px; }
img[ani="FD"]{ opacity:0; transition:opacity 1s; }
img[ani="TW"]{ transform:rotate(3600deg) scale(0,0); transition:transform 1s; }
img[ani="RS"]{ left:100%; transition:left 1s; }
.ef-cpk-fld{ text-align:center; padding:1px; }
.ef-rsf-cpk-btn, .ef-rsf-cpk-cvs{ border-radius:50%; }
.ef-rsf-cpk-btn, .ef-rsf-cpk-cvs > div, .ef-rsf-cpk-sel > div{ overflow:hidden; }
.ef-rsf-cpk-sel, .ef-rsf-cpk-sel > div{ border-radius:10px; }
table{ border-collapse:collapse; position:relative; font-size:1em; }
.ef-tbl-colh{ top:0px; }
.ef-tbl-colh, .ef-tbl-rowh{ position:sticky; position:-webkit-sticky; }
th, td{ padding:0 4px 0 4px; overflow:hidden; text-overflow:ellipsis; }
.ef-tbl-rowh{ z-index:2; }
.ef-tbl-colh{ z-index:3; }
.ef-tbl-tit{ text-align:center; }
.ef-cc-tbl{ display:flex; flex-direction:column; }
.ef-tbl-con{ flex:auto; overflow:auto; }
.ef-tbl-colh > .ef-cc-sbt{ float:right; }
.ef-tbl-sep{ text-align:center; }
.ef-cc-spl{ display:flex; flex-direction:row; }
.ef-cc-spl[vt]{ flex-direction:column; }
.ef-cc-spl > div:first-child{ flex:initial; position:relative; }
.ef-cc-spl > div:nth-child(2){ flex:1; }
.ef-cc-spl > div{ overflow:auto; }
.ef-cc-tab{ display:flex; flex-direction:column; }
.ef-cc-tab[vt]{ flex-direction:row; }
.ef-tab-pgl{ display:inline-flex; flex-direction:row; }
.ef-cc-tab[vt] .ef-tab-pgl{ flex-direction:column; }
.ef-cc-tab[vt] .ef-tab-pgt{ padding:1em; width:0px; word-wrap:break-word; white-space: pre-wrap; }
.ef-tab-pgc, .ef-tab-pgt{ box-sizing:border-box; }
.ef-tab-pgc{ flex:auto; padding:0.5em; overflow:hidden; position:relative; }
.ef-cc-tab[aw] .ef-tab-pgt{ flex:auto; }
.ef-cc-sbt{ font-family:EF-SDK; float:left; text-align:center; width:1.33em; height:1.33em; background:#000; color:#fff; }
.ef-cc-cal > .ef-field, .ef-cc-num > input{ text-align:right; }
.ef-cc-chk{ padding:4px; }
.ef-cc-cvs > .ef-cur.crx{ touch-action:none; }
.ef-cc-cvs{
    background-size:2em 2em;
    background-image:
        linear-gradient(to right, #444 1em, #000 1em),
        linear-gradient(to bottom, #444 1em, #000 1em);
    background-blend-mode:difference;
}
.ef-cvs-blk{ position:absolute; left:0; top:0; right:0; bottom:0; touch-action:manipulation; }
.ef-tar-bar:not([off]){ display:flex; align-items:center; }
.ef-cc-tar .ef-ctrl{ margin-bottom:0; }
.ef-cc-trk{ display:inline-flex; flex-direction:row; margin:0 4px 4px 0; }
.ef-trk{ flex:auto; height:2em; box-sizing:border-box; background:#fff; }
.ef-trk-fill{ text-align:right; padding:0.5em 0 0.5em 0; background:#ccc; color:#000; }
.ef-cc-ifr iframe{ width:100%; height:100%; }
.ef-cc-cam{ overflow:hidden; }
.ef-cc-cam video{ background:#000; width:100%; height:100%; }`);

    _.PG=_.SE.add(_.xM({tp:"div",r:document.body,p:{l:0,t:0},stl:{maxWidth:'100%',zIndex:1000000}}));
    HTMLElement.prototype.xX=function(){ _.xX(this); };
    if(_.aT(p)!=="H") p={f:p}; document.title=p.tit||"";
    window.onerror=function(m,a,l,c) { if(_.Cfg.debug==1) _.alert({tit:a+" "+l+":"+c,txt:m,err:1}); };
    window.onscroll=window.onresize=function() {
        // issue that scrollX and scrollY are NOT updating on mobile device!!
        for(let i in _.SE.E) _.SE.E[i].style.transform="translate("+window.scrollX+"px,"+window.scrollY+"px)";
    };
    if(p.css) { if(_.aT(p.css)!=="A") p.css=[p.css]; for(i of p.css) if(i) _.use("C#"+i); }
    _.dict("EF"); if(p.dic) _.dict(p.dic,1);
    _.xM({tp:"meta",r:document.head,atr:{ name:"viewport",content:"width=device-width, initial-scale=1.0" }});
    _.ICO=_.xM({tp:"link",r:document.head,atr:{
        rel:"shortcut icon",type:"image/ico",href:(p.ico?p.ico.replace(/\*/g,_.root):"ef")+".ico"
    }});
    if(p.obu) window.onbeforeunload=function(e){ return p.obu; }; _.xZ();
    if(p.f) if(_.aT(p.f)=="Q") _.rc(p.f); else _.use(p.ext||p.f,function() { window[p.f](p.v); });
};

_.rib=function(){
	_.xM({tp:"$sbt",r:document.body,txt:"\ue014",p:{l:0,t:0},clk:function(){
		for(let f of document.forms) f.hide(); //f.style.position="unset";
	}});
};
_.dbx=function(p){
    var f,i; _.aM(p,{err:1,xhid:1,xcls:1,xico:0,bc:null,p:"P",cls:function(){ if(f.$ef.$atc) f.$ef.$atc.focus(); },chl:[
        {tp:"$div",n:"msg",fk:"msg"},
		{tp:"$btn",txt:"\ue00f",clk:iA.bind(this,p.ok)},
		{tp:"$btn",txt:"\ue00d",off:(p.cnl?0:1),clk:iA.bind(this,p.cnl),lf:1}
    ]});
    if(!p.blk) p.blk=1; if(p.cnl==1) p.cnl=function(){}; f=_.frm(p); delete f.sv; _.xP(f,{ msg:'>msg:txt' });
    for(i of ['ok','cnl','msg']) f[i]=p[i]; return f; function iA(c) { f.close(); if(_.aT(c)=="Q") c(); }
};
_.frm=function(p){
    var f=_.xI(p.id),i,rf,h,o;
    if(p.atc) {
        o=_.xI(p.atc); if(!o) return; rf=o.$ef.$ref; if(!rf) rf=o.$ef.$ref={};
        if(!f) f=rf[p.id];
    }
    if(f) return f.focus();
    f=_.xM({
        tp:"form",r:p.r||document.body,csn:p.csn,id:p.id||("F"+_.aR()),d:p.d,atr:{err:p.err},
        rsx:3,mC:{cbk:function(e,s){ if(s==2) f.focus(); }},chl:[
            {tp:"$div",n:"bar",csn:"ef-frm-bar",chl:[
                {tp:"div",n:"tit",csn:"ef-frm-tit",prp:{txt:['innerText',function(v){
                    this.innerText=v; 
                    if(h.$atc&&rf[f.id].$ef.$rbc) rf[f.id].$ef.$rbc.txt=v;
                }]}},
                {tp:"div",n:"btn",chl:[
                    {tp:"$sbt",n:"cls",txt:"\ue000"},
                    {tp:"$sbt",n:"hid",txt:"\ue003"},
                    {tp:"$sbt",n:"bar",txt:"\ue014",off:1,clk:iB}
                ]}
            ]}
        ],prp:{
            tit:'>bar.tit:txt',xcls:'>bar.btn.cls:off',xhid:'>bar.btn.hid:off',xbar:'>bar:off',
            sv:[function(){ return this.$ef.sv&&this.$ef.sv[1]?1:0; },function(v){
                let h=this.$ef; if(!h.$ok||!h.sv) return;
                h.sv[1]=v; _.xC(_.xI(">bar.tit",f),"ef-frm-sv",v?1:0);
            }],
            val:[
                function(){
                    let r={},c=this.$fctrl,j;
                    for(j in c) if(!iD(c[j])) try { r[j]=iA(c[j]); } catch(e){ return c[j].err(e); }
                    return r;
                },
                function(v){
                    if(_.aT(v)=="S") _.sm({p:v,frm:f,bin:1,ok:function(x){ f.val=x; }});
                    else if(v) { let c=this.$fctrl,j; for(j of Object.getOwnPropertyNames(v)) if(c[j]) c[j].val=v[j]; }
                }
            ]
        }
    });
    h=f.$ef; f.$fctrl={}; h.$bb=_.xI(">bar.btn",f).$elm;
    h.$bb.cls.clk=f.close=function(z){
		if(f.bc&&!f.bc()) return 1; let c,s=h.sv,j;
		if(z!==1&&s&&s[1]) {
			if(!s[0].parentNode) s[0]=_.dbx({
				atc:f,tit:f.tit+": "+_.Dic.EF[11],txt:_.Dic.EF[10],
				ok:function() { f.sv=0; f.close(); },cnl:1
			});
			else s[0].focus(); return 1;
		}
		s=h.$ref; if(s) for(j in s) if(s[j].close()) return 1;
		j=h.$atc; if(j) {
		    s=h.$rblk; if(s) j.xBlk(s); if(h.$rbc) h.$rbc.xX();
		    delete j.$ef.$ref[f.id]; if(h.key) delete j.mdi[h.key];
		    if(!Object.keys(j.$ef.$ref).length) j.$ef.$bb.bar.off=1;
		}
		f.remove(); if(f.cls) f.cls(f);
	};
    f.focus=function(c){
        if(!f.parentNode) document.body.appendChild(f);
        _.xA(f,{ fcs:1 }); if(_.Sys.prf) _.xA(_.Sys.prf,"fcs"); _.Sys.prf=f; f.style.zIndex=(p.$e?1000000:0)+_.Sys.LT++;
		if(c) _.xS(f,{
			l:Math.max((window.innerWidth-f.clientWidth)/2+window.scrollX,0),
			t:Math.max((window.innerHeight-f.clientHeight)/2+window.scrollY,0)
		});
		else {
		    // Scroll to the form, so the form is in the center.
		    
		}
    };
    h.$bb.hid.clk=f.hide=function(){
        if(!h.$bb.hid.off) if(p.atc) f.remove(); else _.xA(f,"flc",1,1);
    };
    f.block=function(v) {
		if(!v) v={}; if(!h.$blk) h.$blk=_.xM({tp:"div",r:f,csn:["ef-frm-blk","ef-blk"]});
		return _.xM({r:h.$blk,tp:"div",bh:32,stl:{display:"flex",flexDirection:"row"},lf:1,chl:[
			{tp:"$div",txt:v.txt||""},{tp:"$prg",off:(v.prg?0:1)}
		],prp:{ txt:'>0:txt',val:'>1:val',max:'>1:max' } });
	};
	f.xBlk=function(e) {
	    e.xX(); let o=h.$blk;
	    if(!o.children.length) { o.xX(); h.$blk=0; }
	};
	f.get=function(a){
	    let c,r={},j; if(!a) a=[];
	    for(j of a) { c=f.$fctrl[j]; if(c&&!c.off) try { r[j]=iA(c); } catch(e){ return c.err(e); } }
	    return r;
	};
	f.send=function(d) {
	    let b=f.block(d.blk||{txt:"...",prg:1}),m=d.fld?f.get(d.fld):f.val; if(!m) return; if(d.dat) _.aM(d.dat,m);
	    _.sm({p:d.cgi,frm:f,bin:(d.res=="Bin"?1:0),buf:(d.res=="Buf"?1:0),pmt:d.dat||m,
	        ok:function(x){ if(d.end) f.close(); if(d.ok) d.ok(x,f); if(!d.end) f.xBlk(b); },
	        err:function(){ f.xBlk(b); }
	    });
	};
	if(p.mdi) { f.mdi={}; f.open=function(p){
	    if(_.aT(p)=="Q") p=p();
	    if(p) {
	        let fm=f.mdi[p.key];
	        if(!p.key) throw _.Dic.EF[9]; if(fm) fm.focus(); else {
	            fm=f.mdi[p.key]=_.frm(_.aM(p,{atc:f})); fm.$ef.key=p.key;
	            _.xP(fm,"key",['P',function(k){
	                if(f.mdi[k]) throw "E---";
	                f.mdi[k]=fm; delete f.mdi[fm.$ef.key]; fm.$ef.key=k;
	            }]);
	            return fm;
	        }
	    }
	}; }
    if(p.atc){ h.$atc=o; rf[f.id]=f; o.$ef.$bb.bar.off=0; }
    if(p.p&&p.p!=="C") { if(h.$atc&&p.p=="P") p.p={l:_.Cfg.FRM.Pl||32,t:_.Cfg.FRM.Pt||32}; _.xS(f,p.p,h.$atc); }
    _.mD(f,_.xI(">bar.tit",f)); _.xM(p.chl,f);
    for(i of ['tit','drg','bc','cls','xcls','xhid','xbar','val','rsx']) f[i]=p[i];
	if(p.blk&&h.$atc) h.$rblk=h.$atc.block(p.blk); if(p.cnf) h.sv=[0,0];
    f.focus(p.p=="C"?1:0); _.rc(function(){ h.$ok=1; if(p.onl) p.onl(f); }); return f;
    function iA(c) {
        if(c.validity&&!c.validity.valid) throw _.Dic.EF[2];
        else {
            let r=c.qs&&c.get?c.get(c.qs):c.val;
            if(c.req&&(!_.aT(r)||r==="")) throw _.Dic.EF[3];
            if(c.vrf&&!c.vrf.$ef.$lok) throw _.Dic.EF[1];
            return r;
        }
    }
    function iB(){
        if(h.$rib) return;
        h.$rib=_.xM({tp:"div",r:f,csn:["ef-frm-blk","ef-blk"],chl:[
            {tp:"$sbt",txt:"\ue000",p:{r:0,t:0},clk:function(){
                for(let i in h.$ref) delete h.$ref[i].$ef.$rbc;
                h.$rib.xX(); delete h.$rib;
            }},
            {tp:"$div",d:[20,"100%"],csn:"ef-rib"}
        ]});
        for(let i in h.$ref) {
            let x=_.xM({
                tp:"$div",clk:iC,r:h.$rib.children[1],txt:h.$ref[i].tit,
                csn:["ef-cur-btn","ef-rib-col"]
            });
            _.xA(x,"err",_.xA(h.$ref[i],"err","~"));
            x.$ef.$frm=h.$ref[i]; h.$ref[i].$ef.$rbc=x;
        }
    }
    function iC(x){ x.$ef.$frm.focus(); }
    function iD(c) { while(c&&c!==f) { if(c.off) return 1; c=c.parentNode; } }
};
_.alert=function(p){
    if(_.aT(p)=="S") p={tit:p};
	var f=_.xM({
	    tp:"div",r:_.PG,csn:iB(),
	    prp:{ err:'A#',tit:'>tit:txt',txt:'>txt:txt' },
	    chl:[
	        {tp:"$div",n:"tit",csn:'ef-alr-tit'},{tp:"$div",n:"txt"},
	        {tp:"$sbt",txt:"\ue000",clk:iA,p:{r:0},lf:1}
	    ]
	}),i;
	if(p.err||p.sfx) { /*_.Sfx[p.sfx||p.err].currentTime=0; _.Sfx[p.sfx||p.err].play();*/ }
	if(p.end) setTimeout(_.xX,p.end,f);
	for(i of ['err','tit','txt']) f[i]=p[i]; return f;
	function iA(){ f.xX(); }
	function iB() {
	    var t=_.aT(p.csn),v=["ef-alert"]; if(t) _.aM(v,t=="A"?p.csn:[p.csn]);
	    return v;
	}
};

(function(){
    var M=Math;
    M.clamp=function(v,a,z) { return M.max(a,M.min(z,v)); };
    M.MD=function(n,m) { return ((n%m)+m)%m; };
    M.r0=function(v) { return v<0?M.ceil(v):M.floor(v); };
    M.d2r=function(d) { return d*M.PI*2; };
    M.r2d=function(r) { return r/(2*M.PI); };
    M.CtrP=function(B,E,Z) { return M.V2(-B.x/2+2*Z.x-E.x/2,-B.y/2+2*Z.y-E.y/2); };
    M.V2=function(x,y){ return new V2(x,y); };
    M.V3=function(x,y,z){ return new V3(x,y,z); };
    M.rnd=function(n) { var v; do { v=M.random(); } while(v==1); return M.floor(v*n); };
    function V2(x,y) { var O=this;
        O._obt="V2";
        O.set=function(v) { if(_.aT(v)=="N") v={x:v,y:v}; O.x=v.x; O.y=v.y; return O; };
        O.add=function(v,n) { if(_.aT(v)=="N") v={x:v,y:v}; v={x:O.x+v.x,y:O.y+v.y}; return n?M.V2(v):O.set(v); };
        O.sub=function(v,n) { if(_.aT(v)=="N") v={x:v,y:v}; v={x:O.x-v.x,y:O.y-v.y}; return n?M.V2(v):O.set(v); };
        O.mul=function(v,n) { if(_.aT(v)=="N") v={x:v,y:v}; v={x:O.x*v.x,y:O.y*v.y}; return n?M.V2(v):O.set(v); };
        O.div=function(v,n) { if(_.aT(v)=="N") v={x:v,y:v}; v={x:O.x/v.x,y:O.y/v.y}; return n?M.V2(v):O.set(v); };
        O.min=function(v,n) {
            if(_.aT(v)=="N") v=M.V2(v);
            v={x:M.min(O.x,v.x),y:M.min(O.y,v.y)}; return n?M.V2(v):O.set(v);
        };
        O.max=function(v,n) {
            if(_.aT(v)=="N") v=M.V2(v);
            v={x:M.max(O.x,v.x),y:M.max(O.y,v.y)}; return n?M.V2(v):O.set(v);
        };
        O.clamp=function(a,z,n) { a=a.max(z.min(O)); return n?a:O.set(a); };
        O.clpL=function(a,z,n) { var l=O.len(); return O.div(l||1,n).mul(M.max(a,M.min(z,l))); };
        O.floor=function(n) { var v={x:M.floor(O.x),y:M.floor(O.y)}; return n?M.V2(v):O.set(v); };
        O.ceil=function(n) { var v={x:M.ceil(O.x),y:M.ceil(O.y)}; return n?M.V2(v):O.set(v); };
        O.round=function(n) { var v={x:M.round(O.x),y:M.round(O.y)}; return n?M.V2(v):O.set(v); };
        O.r0=function(n) { var v={x:M.r0(O.x),y:M.r0(O.y)}; return n?M.V2(v):O.set(v); };
        O.dot=function(v) { return O.x*v.x+O.y*v.y; };
        O.cross=function(v) { return O.x*v.y-O.y*v.x; };
        O.lenQ=function() { return O.x*O.x+O.y*O.y; };
        O.len=function () { return M.sqrt(O.lenQ()); };
        O.mLen=function() { return M.abs(O.x)+M.abs(O.y); };
        O.nor=function(n) { return O.div(O.len()||1,n); };
        O.angle=function() { return M.atan2(-O.y,-O.x)+M.PI; };
        O.dis=function(v) { return M.sqrt(O.disQ(v)); };
        O.disQ=function(v) { var w=O.sub(v,1); w=w.mul(w); return w.x+w.y; };
        O.mDis=function(v) { return M.abs(O.x-v.x)+M.abs(O.y-v.y); };
        O.setL=function(l,n) { return O.nor(n).mul(l); };
        O.lerp=function(v,a,n) { return O.add(v.sub(O,1).mul(a),n); };
        O.lerpV=function(a,b,h) { return O.set(a.lerp(b,h,1)); };
        O.eq=function(v) { return ((v.x==O.x)&&(v.y==O.y)); };
        O.rot=function(c,a,n) { a=M.V2(M.cos(a),M.sin(a)).mul(O.dis(c)).add(c); return n?a:O.set(a); };
        O.rotE=function(x,y,a,n) { return O.add(M.V2(x*M.cos(a),y*M.sin(a)),n); };
        O.rotV=function(v,a,n) {
            var c=M.cos(a),s=M.sin(a),x=O.x-v.x,y=O.y-v.y;
	        v={x:x*c-y*s+v.x,y:x*s+y*c+v.y}; return n?M.V2(v):O.set(v);
        };
        O.nml=function(){ return M.V2(O.y,-O.x); };
        O.rnd=function(a){ return O.set({x:(a?M.rnd(a):M.random()),y:(a?M.rnd(a):M.random())}); };
        O.itc=function(P,B,E,N){
            var a=B.sub(P,1),b=N.sub(E,1);
            return P.add(a.mul(E.sub(P,1).cross(b)/a.cross(b)),1);
        };
        O.toString=function() { return O.x+","+O.y; };
        O.bb=function(v) {
            console.log("Not implemented!"); // !!!
        };
        O.fix=function(n){ return (O.x.toFixed(n)*1)+","+(O.y.toFixed(n)*1); };
        O.grid=function(v,n) { let a=M.V2(_.Num.T(O.x,v),_.Num.T(O.y,v)); return n?a:O.set(a); };
        O.box=function(v) {
            var i,c=M.V2(),b=M.V2(Infinity),e=M.V2(-Infinity);
            for(i of v) { c.add(i); b.min(i); e.max(i); }
            return { ctr:c.div(v.length),box:e.sub(b) };
        };
        O.segs=function(a,s){
            let b=M.V2(O),v=a.sub(O,1).div(s); a=[];
            while(s--) a.push(M.V2(b.add(v))); return a;
        };
        if(!x||_.aT(x)=="N") { O.x=x||0; O.y=_.aT(y)?y:O.x; } else O.set(x);
    }
    function V3(x,y,z) { var O=this;
        O._obt="V3";
        O.set=function(v) { if(_.aT(v)=="N") v={x:v,y:v,z:v}; O.x=v.x; O.y=v.y; O.z=v.z; return O; };
        O.add=function(v,n) { if(_.aT(v)=="N") v={x:v,y:v,z:v}; v={x:O.x+v.x,y:O.y+v.y,z:O.z+v.z}; return n?M.V3(v):O.set(v); };
        O.sub=function(v,n) { if(_.aT(v)=="N") v={x:v,y:v,z:v}; v={x:O.x-v.x,y:O.y-v.y,z:O.z-v.z}; return n?M.V3(v):O.set(v); };
        O.mul=function(v,n) { if(_.aT(v)=="N") v={x:v,y:v,z:v}; v={x:O.x*v.x,y:O.y*v.y,z:O.z*v.z}; return n?M.V3(v):O.set(v); };
        O.div=function(v,n) { if(_.aT(v)=="N") v={x:v,y:v,z:v}; v={x:O.x/v.x,y:O.y/v.y,z:O.z/v.z}; return n?M.V3(v):O.set(v); };
        O.min=function(v,n) { v={x:M.min(O.x,v.x),y:M.min(O.y,v.y),z:M.min(O.z,v.z)}; return n?M.V3(v):O.set(v); };
        O.max=function(v,n) { v={x:M.max(O.x,v.x),y:M.max(O.y,v.y),z:M.max(O.z,v.z)}; return n?M.V3(v):O.set(v); };
        O.clamp=function(a,z,n) { if(_.aT(a)=="N") a=M.V3(a); if(_.aT(z)=="N") z=M.V3(z); a=a.max(z.min(O)); return n?a:O.set(a); };
        O.dot=function(v) { return O.x*v.x+O.y*v.y+O.z*v.z; };
        O.nor=function(n) { return O.div(O.len()||1,n); };
        O.lenQ=function() { return O.x*O.x+O.y*O.y+O.z*O.z; };
        O.len=function () { return M.sqrt(O.lenQ()); };
        O.mLen=function() { return M.abs(O.x)+M.abs(O.y)+M.abs(O.z); };
        O.clpL=function(a,z,n) { var l=O.len(); return O.div(l||1,n).mul(M.max(a,M.min(z,l))); };
        O.floor=function(n) { var v={x:M.floor(O.x),y:M.floor(O.y),z:M.floor(O.z)}; return n?M.V3(v):O.set(v); };
        O.ceil=function(n) { var v={x:M.ceil(O.x),y:M.ceil(O.y),z:M.ceil(O.z)}; return n?M.V3(v):O.set(v); };
        O.round=function(n) { var v={x:M.round(O.x),y:M.round(O.y),z:M.round(O.z)}; return n?M.V3(v):O.set(v); };
        O.r0=function(n) { var v={x:M.r0(O.x),y:M.r0(O.y),z:M.r0(O.z)}; return n?M.V3(v):O.set(v); };
        O.lerp=function(v,a,n) { return O.add(v.sub(O,1).mul(a),n); };
        O.lerpV=function(a,b,h) { return O.set(a.lerp(b,h,1)); };
        O.rnd=function(){ return O.set({x:M.random(),y:M.random(),z:M.random()}); };
        O.cross=function(a,b) { if(!b) { b=a; a=O; } return M.V3(a.y*b.z-a.z*b.y,a.z*b.x-a.x*b.z,a.x*b.y-a.y*b.x); };
        O.prjV=function(v) { var d=v.lenQ(); return d?v.mul(O.dot(v)/d,1):M.V3(); };
        O.prjP=function(a,n) { return O.sub(O.prjV(a),n); };
        O.rfl=function(a,n) { return O.sub(a.mul(2*O.dot(a),1),n); };
        O.angle=function(v) { var d=M.sqrt(O.lenQ()*v.lenQ()); return d?M.acos(M.clamp(O.dot(v)/d,-1,1)):M.PI/2; };
        O.dis=function(v) { return M.sqrt(O.disQ(v)); };
        O.disQ=function(v) { var w=O.sub(v,1); w=w.mul(w); return w.x+w.y+w.z; };
        O.mDis=function(v) { return M.abs(O.x-v.x)+M.abs(O.y-v.y)+M.abs(O.z-v.z); };
        O.setL=function(l,n) { return O.nor(n).mul(l); };
        O.eq=function(v) { return ((v.x==O.x)&&(v.y==O.y)&&(v.z==O.z)); };
        O.toString=function() { return O.x+","+O.y+","+O.z; };
        let t=_.aT(x); if(t=="A") { O.z=x[2]; O.y=x[1]; O.x=x[0]; }
        else if(!x||t=="N") { O.x=x||0; O.y=_.aT(y)?y:x; O.z=_.aT(z)?z:x; } else O.set(x);
    }
})();
if(!_.root) _.root=_.aP.d(document.currentScript.src);
_.b64="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
_.aM(_,{Cache:[],Sfx:{},Tmp:{},Data:{},Itc:{},Sys:{LT:10},EFC:{},Crd:{C:_.aR()},Dic:{}});
_.Rsf={
cpk:function(p,r) {
    if(!_.Sys.cpk) _.Sys.cpk=_.sL("ef-cpk")||new Array(20);
    if(r.mf) return r.mf.focus();
    _.frm({
		tit:p.tit||"",p:p.p||{},atc:r.form,blk:p.blk,drg:1,onl:function(e){
		    r.mf=e; e.$ef.lok=1;
		    var i,x=[],b=[
			    '#f00','#0f0','#00f','linear-gradient(45deg,#f00,#0f0,#00f)',
			    '#888','linear-gradient(45deg,#fff,#000)','#fff'
		    ],k="RGBHSLA";
		    for(i=0 ; i<(p.alp?7:6) ; i++) _.xM([
		        {tp:"$div",d:[2,2],stl:{ background:b[i] },csn:"ef-rsf-cpk-btn" },
			    {tp:"$trk",fk:k[i],min:0,max:255,stp:1,lbl:k[i]+": ",d:[25],chng:iB,lf:1}
		    ],e.$fctrl.TX);
		    _.xM({tp:"$num",fk:"HX",mod:"H",r:e.$fctrl.TX,w:8,fix:(p.alp?8:6),min:0,max:(p.alp?0xffffffff:16777215),stp:1,chng:iG});
		    for(i=0 ; i<20 ; i++) x.push({
			    tp:"$div",fk:"R"+i,d:[2,2],clk:iD,mC:{cbk:iC},csn:"ef-rsf-cpk-btn",
			    stl:{ background:(_.Sys.cpk[i]?_.Sys.cpk[i].css():"#fff") },lf:(i==10?0:1)
		    });
		    _.xM(x,e.$fctrl.RC); e.$ef.val=p.val.cpy(); e.$ef.lok=0; iV();
		},cls:function() { if(p.cls) p.cls(r); delete r.mf; },chl:[
		    {tp:"$div",stl:{ display:"inline-block",verticalAlign:"top" },chl:[
		        {tp:"$cvs",fk:"HSB",w:200,h:200,csn:"ef-rsf-cpk-cvs",ce:iA},
		        {tp:"$cvs",fk:"IM",w:200,h:30,csn:"ef-rsf-cpk-sel"}
		    ] },
		    {tp:"$div",fk:"TX",lf:1,stl:{ display:"inline-block" }},
		    {tp:"$div",fk:"RC"},
		    {tp:"$sbt",txt:"\ue00f",clk:function() { p.ok(r); r.mf.close(); },p:{r:0,b:0}}
		]
	});
	function iA(c,o,z) {
		if(!c.pd) return; z=c.cvp(z); var v=c.ctx.getImageData(z.x,z.y,1,1).data;
		if(v[3]) { v[3]=r.mf.$ef.val.val[3]; r.mf.$ef.val=new _.Color(_.aU(v),p.alp); iV(1); }
	}
	function iB(e) { iV(2,e.fk); }
	function iC(e,c,x) {
	    e=e.target; if(x||!e||c) return; _.Sys.cpk[iE(e)]=r.mf.$ef.val.cpy();
	    e.style.background=r.mf.$ef.val.css(); if(_.Cfg.SYS.cpk) _.sL("ef-cpk",_.Sys.cpk);
	}
	function iD(e) {
		e=iE(e); if(!_.Sys.cpk[e]) return;
		r.mf.$ef.val=_.Sys.cpk[e].cpy(); iV(); p.ok(r); r.mf.close(); 
	}
	function iE(e) { return parseInt(e.fk.slice(1)); }
	function iG(e){
	    if(!r.mf||r.mf.$ef.lok) return;
	    r.mf.$ef.val=new _.Color(e.val,p.alp); iV(3);
	}
	function iV(c,a) {
	    if(!r.mf||r.mf.$ef.lok) return; r.mf.$ef.lok=1;
		var d={},i,k=r.mf.$ef.val,h=k.hsl(),w,x,y,s,z,u,m,G=["FXO","RFO","OFX","ORF","XOF","FOR"],Z,V=k.val;
		if(c==1) d={H:h[0]*256/6,S:h[1],R:V[0],G:V[1],B:V[2]};
		else if(c==2) {
			i="RGB".indexOf(a);
			if(i>-1) { k.$ef.val[i]=r.mf.$fctrl[a].val; h=k.hsl(); d={H:h[0]*256/6,S:h[1],L:h[2]}; }
			else if(a=='A') k.$ef.val[3]=r.mf.$fctrl.A.val;
			else {
				c=r.mf.get(("HSL"+(p.alp?"A":"")).split(''));
				k=r.mf.$ef.val=new _.Color({h:c.H*6/256,s:c.S,l:c.L,a:c.A},p.alp);
				V=k.val; d={R:V[0],G:V[1],B:V[2]};
			}
		}
		else d={H:h[0]*256/6,S:h[1],L:h[2],R:V[0],G:V[1],B:V[2],A:V[3]};
		if(c!==3) r.mf.$fctrl.HX.val=k.int();
		for(i in d) if(r.mf.$fctrl[i]) r.mf.$fctrl[i].val=Math.floor(d[i]);

		w=r.mf.$fctrl.HSB.ctx;
		if(c!==1) {
			m=w.createImageData(200,200); k=r.mf.$ef.val.hsl();
			for(s=1 ; s<101 ; s++) {
				h=12*s; z=h/6;
				for(u=0 ; u<h ; u++) {
					d=(u%z)*100/z; x={ F:100,O:0,X:d,R:100-d };
					y=(Math.floor(100-Math.cos(u*Math.PI*2/h)*s)*200+Math.floor(100+Math.sin(u*Math.PI*2/h)*s))*4;
					for(i=0 ; i<3 ; i++) {
						Z=x[G[Math.floor(u/z)][i]]; Z+=((50-Z)*(101-s)/100);
						m.data[y+i]=Math.floor(k[2]<128?(Z*k[2]/50):(256-((256-k[2])*(2-Z/50))));
					}
					m.data[y+3]=255;
				}
			}
			w.putImageData(m,0,0);
		}
		iY(r.mf.$fctrl.IM.ctx,200,40,r.mf.$ef.val.css()); r.mf.$ef.lok=0;
	}
	function iY(c,x,y,b) {
		c.clearRect(0,0,x,y); if(b) { c.fillStyle=b; c.fillRect(0,0,x,y); }
	}
},
cal:function(p,r) {
	if(r.mf) return r.mf.focus();
	let T,A={H:"Hours",M:"Minutes",S:"Seconds",D:"Date"};
	_.frm({ tit:p.tit,drg:1,p:p.p||{},atc:r.form,blk:p.blk,onl:function(e){
	    r.mf=e; e.$ef.val=p.val||new Date(); T=e.$fctrl.D;
	    for(let i=0 ; i<6 ; i++) T.src.push(['','','','','','','']); iD(); iC();
	},
	cls:function() { if(p.cls) p.cls(r); delete r.mf; },chl:[
	    {tp:"$tbl",fk:"D",off:p.mod&&p.mod!=='D',selm:"C",matt:1,chng:iA,bar:[
	        {tp:"$sbt",txt:"\ue004",clk:iB.bind(this,-1,0)},
	        {tp:"$sbt",txt:"\ue007",clk:iB.bind(this,0,-1),lf:1},
	        {tp:"$txt",d:[6],fk:"MY",alg:"c",lf:1,clk:iE },
	        {tp:"$sbt",txt:"\ue006",clk:iB.bind(this,0,1),lf:1},
	        {tp:"$sbt",txt:"\ue005",clk:iB.bind(this,1,0),lf:1},
	        {tp:"$sbt",txt:"\ue008",clk:iB.bind(this,"N"),lf:1}
	    ],col:iG()},
	    {tp:"$div",off:p.mod&&p.mod!=="T",chl:[
	        {tp:"$num",fk:"H",w:2,min:0,max:23,stp:1,chng:iA},
	        {tp:"$num",fk:"M",w:2,lbl:":",min:0,max:59,stp:1,chng:iA,lf:1},
	        {tp:"$num",fk:"S",w:2,lbl:":",min:0,max:59,stp:1,chng:iA,lf:1}
	    ]},
		{tp:"$sbt",txt:"\ue00f",clk:function() { p.ok(r); r.mf.close(); },p:{r:0,b:0}}
	] });

    function iA(e) { let d=r.mf.$ef.val; if(!r.mf.$ef.lok) d["set"+A[e.fk]](e.val); }
    function iB(y,m) {
        let d;
        if(y=="N") { d=r.mf.$ef.val=new Date(); iD(); }
        else {
            d=r.mf.$ef.val; y=d.getFullYear()+y;
            if(m) { m=d.getMonth()+m; if(m<0) { y--; m+=12; } else if(m>11) { y++; m-=12; } d.setMonth(m); }
            d.setFullYear(y);
        }
        iC();
    }
    function iC() {
        r.mf.$ef.lok=1;
        let i,d=r.mf.$ef.val,y=d.getFullYear(),m=[31,y%400===0||(y%100&&y%4===0)?29:28,31,30,31,30,31,31,30,31,30,31],
        a=m[d.getMonth()],x=d.getDate()-1,w=d.getDay(),tr=0,tc=0;
        r.mf.$fctrl.MY.val=d.toLocaleDateString(undefined,{ year:'numeric',month:'short' });
        w-=(x%7); if(w<0) w+=7;
        for(i=0 ; i<w ; i++) T.src[tr].col[tc++]={txt:'',val:null,xsel:1};
        for(i=0 ; i<a ; i++) {
            T.src[tr].col[tc]={txt:(i+1),val:(i+1),xsel:0};
            if(x==i) T.src[tr].col[tc].sel=1;
            tc++; if(tc>6) { tr++; tc=0; }
        }
        while(tr<6) { while(tc<7) T.src[tr].col[tc++]={txt:'',val:null,xsel:1}; tr++; tc=0; }
        r.mf.$ef.lok=0;
    }
    function iD() {
        let v=r.mf.$ef.val;
        r.mf.val={ H:v.getHours(),M:v.getMinutes(),S:v.getSeconds() };
    }
    function iE() {
        let z=r.mf.$ef.$chd; if(!z) z=r.mf.$ef.$chd=_.frm({
            atc:r.mf,xico:1,xhid:1,blk:1,drg:1,p:{l:32,t:32},onl:function(f){
                let d=r.mf.$ef.val;
                f.val={Y:d.getFullYear(),M:d.getMonth()+1};
            },cls:function(){ delete r.mf.$ef.$chd; },
            chl:[
                {tp:"$num",w:4,fk:"Y",stp:1,lbl:_.Dic.EF[13]},
                {tp:"$num",w:2,fk:"M",min:1,max:12,stp:1,lbl:_.Dic.EF[14],lf:1},
                {tp:"$sbt",txt:"\ue00f",lf:1,clk:function(){
                    let d=r.mf.$ef.val,v=z.val; if(!v) return;
                    d.setFullYear(v.Y); d.setMonth(v.M-1); z.close(); iC();
                }}
            ]
        });
    }
    function iG(){ let W=[],i,b=new Date(3e8); for(i=0 ; i<7 ; i++) {
	    W.push({txt:new Intl.DateTimeFormat(navigator.language,{weekday:'short'}).format(b)});
	    b.setDate(b.getDate()+1);
	} return W; }
},
mlg:function(p,r) {
    if(r.mf) return r.mf.focus();
    _.frm({ tit:p.tit,drg:1,p:p.p||{},atc:r.form,blk:p.blk,cnf:1,onl:function(f){
        r.mf=f; f.$ef.val=p.val; let i,t=f.$fctrl.V;
        if(p.val) for(i in p.val.V) t.src.push([i,p.val.V[i]]);
    },cls:function(){ if(p.cls) p.cls(r); delete r.mf; },chl:[
        {tp:'$tbl',fk:'V',selm:"M",bar:[
            {tp:'$sbt',txt:'\ue00b',lf:1,clk:function(){ r.mf.$fctrl.V.src.push(['...','...']); }},
            {tp:'$sbt',txt:'\ue00d',lf:1,clk:function(){ r.mf.$fctrl.V.del(); }},
            {tp:'$sbt',txt:'\ue00e',lf:1,clk:function(f){
                let h={},i,n;
                for(i of r.mf.$fctrl.V.src) {
                    n=i.col[0].val; if(h[n]) return f.err(_.Dic.EF[19]+" "+n);
                    h[n]=i.col[1].val;
                }
                r.mf.$ef.val=new _.ML(h); p.ok(r); r.mf.close(1);
            }}
        ],col:[
            {edt:{tp:'$txt',w:5,len:7}},
            {edt:{tp:(p.tar?"$tar":"$txt"),len:p.len||(p.tar?200:20),d:(p.d||(p.tar?[30,5]:[30])),w:p.w}}
        ]}
    ] });
}
};
_.Elm={
div:function(f){ return {bh:511,prp:{
    txt:['innerText',function(v) {
        let t=_.aT(v); if(t=="Q") return v(); if(t) this.innerText=v;
    }],
    clk:['P',function(v) {
        if(v&&!f.$ef.clk) _.xE(f,'click',iA);
        else if(!v&&f.$ef.clk) _.xE(f,'click',iA,-1); f.$ef.clk=v;
    }],sp:'A#'
}}; function iA(e) { if(!f.rdo) f.$ef.clk(f,e); } },
prg:{
    bh:50,fnc:{
        C$1:function(f){ return f.max?_.Num.S(f.val*100/f.max,2)+"%":""; }
    },def:{ val:0,w:20 },chl:[
        {tp:"div",n:"bar",csn:'ef-prg-bar'},
        {tp:"div",n:"pc",d:[0,"100%"],csn:'ef-prg-pc'}
    ],prp:{
        val:'@>bar:S#width=C$1 >pc:innerText=C$1',
        max:'@A# val=${val}',w:'@S#width=${w}em'
    }
}
};
_.CC={
btn:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:511,upl:1,csn:"ef-cur-btn",prp:{
        clk:['P',function(v) { f.$ef.clk=v; f.rdo=v||f.upl||p.xevt?0:1; _.xE(f,'click',iA,v?0:-1); }],
        txt:[function(){ return f.textContent; },function(v){ if(!_.aT(v)) v=""; f.textContent=v; }],
        img:['P',function(v){
            if(v) v="url("+(v[0]=='*'?v.slice(1):"img/"+v)+")";
            f.$ef.img=f.style.backgroundImage=v;
        }],
        ff:[function(){ return f.style.fontFamily; },function(v){ f.style.fontFamily=v||""; }]
    }});
    f.$upl=function(v){ f.rdo=v||f.$ef.clk?0:1; };
    f.$rdo=function(v){ _.xC(f,"ef-cur-btn",v?0:1); };
    f.$relPrp(['upl','clk','txt','img','ff']); return f;
    function iA(e) { if(!p.xevt) e.stopPropagation(); if(!f.rdo) f.$ef.clk(f,e); }
},
sbt:function(p){ return _.CC.btn(p); },
sbs:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:511,csn:"ef-cont",chl:[
        {tp:"div",n:"lbl"},{tp:"div",n:"fld"}
    ],prp:{
        lbl:'>lbl:L#',val:['P',function(k){
            let z=f.get(f.$ef.val); if(z) _.xA(z,"sel");
            z=_.aT(k)?f.get(k):null; f.$ef.val=z?k:null;
            _.xA(z,"sel",1); f.fw(f.chng);
	    }],
    },xR:{src:{
        con:'>fld',inp:function(o,v){ v.lf=v.lr?0:1; return v; },
        lim:function(o,v){ return _.aT(v)=="H"&&_.aT(v.val)?1:0; },
        tpl:function(){ return {tp:"$sbt",ff:f.ff,xevt:1}; }
    }}});
    f.$rdo=function(v){ _.xE(f.$elm.fld,'click',iA,v?-1:0); };
    f.get=function(k) { return f.src.find(e=>e.val==k); };
    f.$relPrp(['ff','src','val','chng','lbl',"rdo"]); return f;
    function iA(e){ e.stopPropagation(); let z=e.target; if(!z||z.ctrl!=="sbt"||z.rdo) return; f.val=z.val; }
},
chk:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:62,css:{lw:'$$ .ef-chk-rec{}'},prp:{
        lw:['P',function(v){
            f.$ef.lw=v||0;
            f.stl.rul('lw',{ width:(v?v+"em":""),display:(v?"inline-":"")+"block" });
        }],
	    val:[iB.bind(null,'chk'),iC.bind(null,'chk')],
	    rdo:[iB.bind(null,'rdo'),iC.bind(null,'rdo')]
    },xR:{src:{
        lim:function(o,v,i){ return i>31?0:1; },
        inp:function(o,v) { return _.aT(v)=="H"?v:{txt:v}; },
        tpl:{
            tp:"div",csn:"ef-chk-rec",
            prp:{
                txt:'>lbl:L#',chk:'>0:sel',rdo:'>0:rdo',
                ff:'>0:ff',ico:'>0:innerText',lf:['P',function(v){
                    this.$ef.lf=v; this.style.display=(v?"inline-":"")+"block";
                }],
                con:['P',function(v){
                    if(this.$ef.con) return; v.r=this; this.$ef.con=_.xM(v);
                }]
            },
			chl:[
				{tp:"div",stl:{display:"inline-block"},csn:["ef-chk-box","ef-cur-btn"],prp:{
					sel:['A#',function(v){
						_.xA(this,"sel",v); if(f.form) f.form.sv=1; f.fw(f.chng,this.parentNode);
					}],ff:'S#fontFamily',rdo:'A#'
				},evt:{click:function(){ let o=this; if(!o.rdo) o.sel=o.sel?0:1; }}},
				{tp:"span",n:"lbl"}
			]
        },
        set:function(o,v,i) { v.val=Math.pow(2,i); }
    }}});
	f.$relPrp(['lw','rdo','src','val','chng']); return f;
	function iB(e) { let c=0,i; for(i of f.src) if(i[e]) c+=i.val; return c; }
	function iC(e,v) { if(!v) v=0; for(let i of f.src) i[e]=v&i.val; }
},
tgb:function(p){ return _.CC.chk(p); },
cvs:function(p){
    if(!p.w) p.w=320; if(!p.h) p.h=200; if(!p.d) p.d=[p.w+"px",p.h+"px"];
    var f=_.xM({tp:'div',ctrl:p,bh:511,rsx:0,chl:[
        { tp:"div",n:'con',d:["100%","100%"],chl:[
            { tp:(p.svg?'*svg':'canvas'),n:"cvs",atr:(p.svg?{
                xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",
                version:"1.1",baseProfile:"full",preserveAspectRatio:"xMinYMin meet"
            }:0),r:f,csn:'ef-cur-crx',mC:{cbk:iA,wt:1} }
        ] }
    ],prp:{
        w:['>con.cvs:A#width',function(v){
            _.xA(z,"width",v); if(f.h) f.zm=f.zm;
            if(p.svg&&f.h) _.xA(z,"viewBox","0 0 "+v+" "+f.h);
        }],
        h:['>con.cvs:A#height',function(v){
            _.xA(z,"height",v); f.zm=f.zm;
            if(p.svg) _.xA(z,"viewBox","0 0 "+f.w+" "+v);
        }],
        mb:['P',function(v){
            if(v&&!f.mb) {
                if(p.svg) 
                    if(_.SVG) { f.ctx.MB=new _.SVG(f); f.$ef.mb=1; }
                    else _.use("*/ext/MB/SVG",function(){ f.mb=1; });
                else if(_.MB) { f.ctx.MB=new _.MB(f); f.$ef.mb=1; }
                else _.use("*/ext/MB/2D",function(){ f.mb=1; });
            }
            else if(!v&&f.mb) delete f.ctx.MB;
        }],
        zm:['P',function(v){
            if(!v) v=1; f.$ef.zm=v; _.xS(z,[(f.w*v)+"px",(f.h*v)+"px"]);
        }],
        val:[
            function(){ return f.get(f.qs); },
            function(v){
                if(p.svg) if(v) _.CVS.SVG(v,iD,iE); else iE();
                else {
                    let t=_.aT(v); if(t=="S") return _.xM({tp:'img',bh:1,load:{p:v,atr:'src',ok:function(x){ f.val=x; }}});
                    if(t=="I") v=_.CVS.ItoR(v); if(v) f.ctx.putImageData(v,0,0);
                }
            }
        ],
        ce:['P',function(v){
            f.$ef.ce=v; let a="pointer";
            _.xE(z,[a+"down",a+"move",a+"up",a+"out"],iC,v?0:-1);
        }]
    }}),z=_.xI('>con.cvs',f);
    if(p.svg) f.ctx=z; else { f.cvs=z; f.ctx=z.getContext("2d"); }
    f.$rdo=function(v) { if(v) iB(); else _.xX(f.lok); };
	f.get=function(q,x) {
	    let a; if(p.svg) {
		    a=_.CVS.SVGx(f.ctx.outerHTML,1);
		    return q=="R"?a:"data:image/svg+xml,"+encodeURIComponent(a);
		}
		a={J:"image/jpeg",W:"image/webp"};
		if(q&&!x) { x=q.split('/'); q=x[0]; x=x[1]===""?undefined:x[1]*=1; }
		return q=="R"?f.raw():z.toDataURL(a[q]||"image/png",x);
	};
	f.raw=function() {
	    return p.svg?_.CVS.ItoR(f.ctx):f.ctx.getImageData(0,0,z.width,z.height);
	};
	f.cvp=function(v) { return v.div(f.zm,1); };
	f.$relPrp(['w','h','zm','ce','mb','rsx','chng','val']); return f;
	function iA(e,s){ if(f.ce) { f.ce(f,10+(s||0),_.mP(e),e); if(s==3) iB(); } }
	function iB(){
	    if(!f.lok) f.lok=_.xM({tp:"div",r:f,csn:['ef-cvs-blk','ef-blk'],
	        mC:{cbk:function(w,e){ if(e==3) { f.lok.xX(); delete f.lok; } }}});
	}
	function iC(e){
	    e.preventDefault(); let t={u:0,d:1,m:2,o:3}[e.type[7]];
	    if(t!==2) f.pd=e.pressure||t==1?1:0; if(f.ce) f.ce(f,t,_.mP(e),e);
	}
	function iD(x){
        let i,a={width:"w",height:"h"}; z.innerHTML=x.innerHTML;
        for(i of x.attributes)
            if(a[i.name]) f[a[i.name]]=i.value;
            else _.xA(z,i.name,i.value);
        f.zm=f.zm; if(f.form) f.form.sv=1; f.fw(f.chng);
    }
	function iE() { z.innerHTML=""; }
},
upl:function(p){
    var g=_.xM({ tp:"input",atr:{type:"file"},evt:{change:iA} }),
	f=_.xM({tp:"div",ctrl:p,bh:511,chl:[
	    { tp:"$div",n:"lbl" },
		{ tp:"$sbt",lf:1,n:"upl",txt:"\ue017",clk:function(){ g.click(); } },
		{ tp:"$sbt",lf:1,n:"rem",txt:"\ue00d",clk:iC },
		{ tp:"div",n:"ftp",xR:{
			ftp:{
				tpl:{ tp:"$div",chl:[
					{ tp:"input",atr:{type:"checkbox"},n:"chk" },
					{ tp:"span",n:"lbl" },
					{ tp:"div",n:"err",csn:"ef-upl-err" }
				],prp:{
				    chk:'>chk:checked',lbl:'>lbl:innerHTML',err:'>err:innerHTML'
				} },
				del:function(z,a){ delete f.$ef.val[a.rfc.name]; },
				add:function(z,a){ if(!f.mul) { a.$elm.chk.style.display="none"; a.chk=1; } }
			}
		} }
	],prp:{
	    lbl:'>lbl:txt',val:['P'],ftp:'>ftp:ftp',
	    mul:['P',function(v){
	        f.$ef.mul=v; if(!v) while(f.ftp.length>1) f.ftp.pop();
	        if(f.ftp[0]) f.ftp[0].$elm.chk.style.display=v?"":"none";
	    }],
	    ext:['P',function(v){ f.$ef.ext=_.aT(v)=="S"?v.toLowerCase().split(/\,/g):v; }]
	}}); f.upl=g; f.$ef.val={};
	f.$rdo=function(v) { f.$elm.upl.rdo=v; f.$elm.rem.rdo=v; };
	f.ondrop=function(e) {
		if(f.rdo) return; e.preventDefault(); e.stopPropagation();
		g.files=e.dataTransfer.files; if(g.files.length) iA();
	};
	f.ondragover=function(e) { if(f.rdo) return; e.preventDefault(); };
	f.$relPrp(['onl','lbl','rdo','mul','ext','lim','dec','go']); return f;
	
	function iA() {
	    if(f.$ef.$opr) return; f.$ef.$opr=g.files.length;
		for(let i of g.files) { iB(i); if(!f.mul&&f.ftp.length) break; }
	}
	function iB(i) {
		let s=i.name,q=new FileReader(),r,v; if(!f.mul&&f.ftp.length) f.ftp.shift();
		if(f.val[s]) return iD(_.Dic[15]);
		else if(f.ext&&iE(i)) return iD(_.Dic[16]+f.ext.join(','));
		else if(f.lim&&i.size>f.lim) return iD(_.Dic[17]+_.Num.M(f.lim));
		r=f.ftp.push({ lbl:s+" ("+_.Num.M(i.size)+")",rfc:i })[0];
		q.onloadstart=f.go?f.go.bind(null,f,i,r):f.go;
		q.onerror=function(e){ r.xX(); console.log(e); iD(); };
		q.onload=function() {
			v=new Uint8Array(q.result);
            if(f.dec=="E") v=_.Bin(v,"PX");
            else if(f.dec) { v=new _.Bin(v); if(f.dec=="U") v=v.url(i.type); }
			r.val=f.$ef.val[s]=v; iD();
		};
		q.readAsArrayBuffer(i);
	}
	function iC() { for(var i=0 ; i<f.ftp.length ; i++) if(f.ftp[i].chk) f.ftp[i--].xX(); f.fw(f.chng); }
	function iD(x) { if(x) _.alert({tit:_.Dic[18],txt:x,err:1}); f.$ef.$opr--; if(!f.$ef.$opr) {
	    g.files=undefined; f.fw(f.chng);
	    if(f.onl) f.onl(f); if(f.form) f.form.sv=1;
	} }
	function iE(i) {
	    var t=i.type.split(/\//g),a=f.ext;
	    if(a.indexOf(_.aP.e(i.name).toLowerCase())==-1&&a.indexOf('*'+t[0])==-1) return 1;
	}
},
num:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:510,csn:'ef-cont',prp:{
	    lbl:'>lbl:L#>fld',val:[
	        function(){ return f.qs=="V"?f.$ef.val:_.Num.T(f.$ef.val,f.stp,f.min,f.max); },
	        function(v){
	            if(!v) v=0; let t=_.aT(v),k=1; if(t=="Q") return v();
	            if(f.mod=="H") { v*=1; if(isNaN(v)) v=0; } else v=_.Num.N(v);
	            if(v==f.$ef.val) k=0; f.$ef.val=v; v=f.val;
		        if(f.mod=="C"||f.mod=="S") v=_.Num.S(v,f.fix,f.mod=="C"?f.mrk:undefined);
		        else if(f.mod=="M") v=_.Num.M(v); // style='unit' yet not 100% supported
		        else if(f.mod=="B") v=v.toLocaleString(navigator.language,_.Num.F({
		            style:'percent' },f.fix));
		        else if(f.mod=="H") v=iB(v);
		        g.value=v+(f.mod=="C"||!f.mrk?"":" "+f.mrk);
		        if(k) { if(f.form) f.form.sv=1; f.fw(f.chng); }
	        }
	    ],
	    mod:['P',function(v){
		    f.$ef.mod=v; if(v=="C"&&!f.fix) f.fix=2;
		    if(v=="M") { f.mrk=null; f.min=0; } f.val=f.$ef.val;
	    }]
    },chl:[
        {tp:"div",n:'lbl',csn:"ef-lbl"},
        {tp:"input",n:"fld",atr:{type:'text',class:"ef-text ef-cur-txt ef-field"},evt:{
            focus:function() {
                if(f.rdo) this.blur();
                else g.value=f.mod=="H"?iB(f.val):f.$ef.val;
            },
            blur:function() { f.val=this.value; },
            click:function(){ if(!f.rdo&&f.clk) f.clk(f); }
        }}
    ]}),g=f.$elm.fld,i,a=['stp','min','max','fix','mrk'];
    for(i of a) _.xP(f,i,['P',iA.bind(null,i)]);
    f.$rdo=function(v) { _.xC(g,"ef-cur-txt",v?0:1); };
	f.$relPrp(["lbl","w","mod","chng","val","clk",...a]); return f;
	function iA(r,v) { f.$ef[r]=v; f.val=f.$ef.val; }
	function iB(v){ return "0x"+(f.fix?_.a0(v,f.fix,16):v.toString(16)); }
},
txt:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:510,csn:'ef-cont',chl:[
        {tp:"div",n:"lbl",csn:"ef-lbl"},
        {tp:"input",n:"fld",csn:["ef-text","ef-cur-txt","ef-field"],evt:{
            focus:function(){ if(f.rdo||!f.len||f.mul) z.blur(); },
            blur:function() { if(!f.mul) f.val=z.value; },
            click:function(){
                if(f.clk) f.clk(f); if(f.mul&&!f.rdo) _.Rsf.mlg({
		            tit:f.lbl,val:f.val,ok:function() { f.val=f.mf.$ef.val; },
		            len:p.len,d:p.d,w:p.w,p:"C",blk:1
	            },f);
            },
            input:function(){ if(f.inp) f.inp(z.value,f); }
        }}
    ],prp:{
        lbl:'>lbl:L#>fld',
	    len:['>fld:maxLength',function(v){ z.maxLength=v||0; }],
	    alg:[
	        function(){ let d={right:"r",center:"c",justify:"j"}; return d[z.style.textAlign]; },
	        function(v){ let d={r:"right",c:"center",j:"justify"}; z.style.textAlign=d[v]||"left"; }
	    ],
	    val:['P',function(v) {
	        let t=_.aT(v); if(t=="Q") return v(); if(!t) v=f.mul?new _.ML({}):"";
	        if(f.mul||v!==f.val) {
	            z.value=v; f.$ef.val=v; if(f.form) f.form.sv=1; f.fw(f.chng);
	        }
	    }],
	    mod:[
	        function(){ let t={password:"p",tel:"t",email:"e",url:"u"}; return t[z.type]; },
	        function(v){ let t={p:"password",t:"tel",e:"email",u:"url"},a=f.mul; f.mul=0; z.type=t[v]||"text"; f.mul=a; }
	    ],
	    mul:['P',function(v){ f.$ef.mul=v; _.xA(f,"ML",v); }],
	    pat:'A#pattern',plc:'A#placeholder',
	    etr:['P',function(v){ f.$ef.etr=v; _.xK(z,v?{$13:iA}:0); }],
	    clk:['P',function(v){ f.$ef.clk=v; _.xC(z,"ef-cur-btn",v); }]
    }}),z=f.$elm.fld;
	f.$rdo=function(v){ _.xC(z,"ef-cur-txt",v?0:1); };
	f.$relPrp([
	    "mul","inp","w","alg","len","chng","etr","clk","mod",
	    "pat","plc","lbl","val"
	]); return f;
	function iA(){ f.val=z.value; f.$ef.etr(f); }
},
tar:function(p){
    if(!p.d) p.d=[50,15]; var f=_.xM({tp:"div",ctrl:p,bh:511,atr:{lr:1},csn:'ef-cont',rsx:0,chl:[
        { tp:"div",n:"lbl",csn:"ef-lbl" },
        { tp:"textarea",n:"fld",d:["100%","100%"],csn:["ef-text","ef-cur-txt","ef-field"],
            stl:{flex:"initial",resize:"none",overflow:"auto"},
            evt:{
                focus:function() { if(f.rdo||!f.len||f.mul) this.blur(); },
                change:function(){ if(f.form) f.form.sv=1; f.fw(f.chng); },
                click:function(){
                    if(f.clk) f.clk(f); if(f.mul&!f.rdo) _.Rsf.mlg({
		                tit:f.lbl,val:f.val,ok:function() { f.val=f.mf.$ef.val; },
		                tar:1,len:p.len,d:p.d,w:p.w,p:"C",blk:1
	                },f);
                },
                input:iB
            }
        }
    ],prp:{
        lbl:'>lbl:L#',mul:'A#ML',plc:'A#placeholder',wrp:[
            function(){ let b={soft:"S",hard:"H"}; return b[_.xA(z,"wrap","~")]; },
            function(v){ let b={S:"soft",H:"hard"}; _.xA(z,"wrap",b[v]||"off"); }
        ],
        len:[function(){ return z.maxLength; },function(v){ f.rdo=v?0:1; z.maxLength=v||0; iB(); }],
        na:['P',function(v){
		    f.$ef.na=v; var b=["complete","correct","capitalize","spellcheck"];
		    for(var j=0 ; j<4 ; j++) _.xA(z,(j<3?"auto":"")+b[j],j<3?(v?"on":"off"):(v?"true":"false"));
	    }],
	    bar:['P',function(v){
		    if(v&&!f.$ef.bar) { f.$ef.bar=_.xM({tp:"$div",off:f.rdo,s:"ef-tar-bar",chl:[
			    {tp:"$sbt",txt:"\ue015",clk:function(){ z.focus(); iA(); }},
			    {tp:"$sbt",txt:"\ue020",lf:1,clk:function(){ f.wrp=f.wrp?0:"S"; }},
			    {tp:"$sbt",txt:"\ue021",lf:1,clk:function(){
				    z.focus(); var x=f.$ef.bar.children[3].val,q=z.selectionStart,w=""; 
				    if(x==="") return; while(_.xN(w+x,z)<z.offsetWidth-20) w+=x;
		            f.val=z.value.slice(0,q)+"\n"+w+"\n"+z.value.slice(q);
		            w=w.length+2; z.setSelectionRange(q+w,q+w);
			    }},
			    {tp:"$txt",len:1,lf:1,w:2,val:"-"},
			    {tp:"$div",lf:1,txt:""}
		    ]},f); iB(); }
		    else if(!v) { _.xX(f.$ef.bar); delete f.$ef.bar; }
	    }],
	    val:[function(){ return f.mul?f.$ef.val:z.value; },function(v){
	        let t=_.aT(v); if(t=="Q") return v(); if(!t) v=f.mul?new _.ML({}):"";
	        if(v!==f.val) { z.value=f.$ef.val=v; iB(); if(f.form) f.form.sv=1; f.fw(f.chng); }
	    }]
    }}),z=f.$elm.fld;
	f.$rdo=function(v) { if(f.bar) f.bar.off=v; _.xC(z,"ef-cur-txt",v?0:1); }; _.xK(z,{$9:iA});
	f.$relPrp(["mul","wrp","bar","len","plc","na","lbl","chng","clk","val","rsx","rdo"]); return f;
	
	function iA() {
	    if(_.aT(f.val)!=="S") return;
		let q=z.selectionStart;
		f.val=z.value.slice(0,q)+"\t"+z.value.slice(q);
		z.setSelectionRange(q+1,q+1);
	}
	function iB(){ if(f.bar) f.bar.children[4].txt=z.value.length+"/"+f.len; }
},
tre:function(p){
    if(_.aT(p.tpl)!=="A") p.tpl=p.tpl?[p.tpl]:[];
    var f=_.xM({ tp:"div",ctrl:p,bh:510,csn:'ef-field',css:{ kx:'$$ .ef-tre-space .ef-tre-key{}' },rsx:0,chl:[
        { tp:"ul",n:"tre",d:["100%","100%"],csn:"ef-tre-space",evt:{
            click:function(e) {
                let z=e.target;
                if(z&&z.$ef&&z.$ef.$name=="ico") { z=z.parentNode.parentNode; z.clp=z.clp?0:1; }
                else { while(z&&z.nodeName!=="LI") z=z.parentNode; if(z) z.sel=1; }
            }
        } }
    ]});
    iZ(f,f.$elm.tre);
    _.xP(f,{
        wrp:'A#',
        sel:['P',function(v){ if(v) v=f.get(v); if(v) v.sel=1; f.$ef.sel=v; }],
        bar:['P',function(v){
            /*
            Make bar with the following buttons:
            * Collapse all (0xe027)
            * Open all (0xe028)
            * Move node (0xe029) Will take selected and ask to place in a new location. Button will change to "cancel" once operation begin.
            - Buttons shall be toggelable programmatically!
            */
            if(!v) { _.xX(f.$ef.bar); delete f.$ef.bar; }
            else if(!f.$ef.bar) f.$ef.bar=_.xM({tp:"$sbs"});
        }]
    });
    f.get=function(t){ let s=f,i; if(t){
        if(t.split) t=t.split(/\./g);
        for(i of t) { s=isNaN(i*1)?iA(s,i):s.src[i]; if(!s) break; }
    } return s; };
    f.move=function(b,e,x) {
        if(b&&b.split) b=f.get(b); if(e&&e.split) e=f.get(e); if(!b||!e) return;
        let o=b.hd.src.splice(b.$ef.$idx*1,1); if(x) e.src.push(o[0]); else e.hd.src.splice(e.$ef.$idx*1,0,o[0]);
    };
    f.$relPrp(['wrp','kv','xs','src','sel','chng','rsx']); return f;
    function iA(o,k) { if(o.src) for(let i in o.src) if(o.src[i].key==k) return o.src[i]; }
    function iZ(el,c) { _.xR(el,"src",{
        con:c,inp:p.inp,
        del:function(z,a,i){ if(f.$ef.sel===a) delete f.$ef.sel; },
        tpl:{tp:"li",csn:'ef-tre-item',chl:[{tp:"div",chl:[
            {tp:"$div",n:"ico",d:[1,1],csn:"ef-tre-icon",txt:'\ue018'},...p.tpl
        ]}],prp:_.aM({
            txt:[
                function(){ let z=this.$ef.txt; if(z) return z.txt; },
                function(v) {
                    let z=this,m=z.$ef;
                    if(!_.aT(v)||v==="") { _.xX(m.txt); delete m.txt; }
                    else {
                        if(!m.txt) m.txt=_.xM({tp:"$div",n:"txt",lf:1,r:z.children[0],bf:'>1',csn:"ef-tre-lbl"});
                        m.txt.txt=v;
                    }
                }
            ],
            clp:['P',function(v){
                let z=this,m=z.$ef; m.clp=m.$bs?v:0; if(m.$bs) {
                    _.xA(m.$bs,"clp",v); _.xI('>0.ico',z).txt=v?"\ue019":"\ue018";
                }
            }],
            src:['P',function(v){
                let z=this,m=z.$ef;
                if(_.aT(v)=="A") {
                    if(!m.$bs) {
                        m.$bs=_.xM({tp:"ul",r:z,csn:'ef-tre-box'});
                        iZ(m.$bs); m.src=m.$bs.$ef.src;
                    }
                    m.$bs.src=v; z.clp=1;
                }
                else if(!v) { _.xX(m.$bs); delete m.$bs; }
            }],
            sel:['A#',function(v){
                let z=this,m=f.$ef; if(z.xs||f.xs) return;
                if(m.sel) _.xA(m.sel,"sel");
                if(m.sel===z) delete m.sel;
                else { _.xA(z,"sel",1); m.sel=z; }
                while(z.hd&&z.hd.clp) { z.hd.clp=0; z=z.hd; }
		        f.fw(f.chng);
            }],
            path:function(){
                let z=this,n=[z.key];
                while(z.hd) { z=z.hd; n.unshift(z.key||z.$ef.$idx); }
                return n.join('.');
            }
        },p.dp)},
        set:function(z,a,i) { a.hd=el.parentNode; }
    }); }
},
spl:function(p){
    p.chl[0].n="wingA"; p.chl[1].n="wingB"; var f=_.xM({tp:"div",ctrl:p,bh:510,rsx:0,prp:{
        vt:[function(){ return f.$ef.$mX?"A":_.xA(f,"vt","~"); },function(v){
            if(f.$ef.$mX) { _.xE(window,"resize",f.$ef.$mX,-1); delete f.$ef.$mX; }
            if(v=="A") {
                f.$ef.$mX=function() { iB(window.innerWidth>window.innerHeight?0:1); };
                _.xE(window,"resize",f.$ef.$mX); f.$ef.$mX();
            }
            else iB(v?1:0);
        }],
        wr:['A#',function(v){ _.xA(f,"wr",v); iA(); }],
        onrsx:'>wingA:onrsx'
    },chl:p.chl}),z=f.$elm.wingA; _.mR(z,1,4);
    f.$relPrp(['vt','wr','rsx','onrsx']); return f;
    function iA() { let i=z.rsx-1; _.xS(z,[i?"unset":(f.wr+"%"),i?(f.wr+"%"):"unset"]); }
    function iB(v) { _.xA(f,"vt",v); z.rsx=v+1; iA(); }
},
img:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:254,csn:'ef-field',rsx:0,prp:{
        bar:['P',function(v){ if(!v) { _.xX(f.bar); f.$ef.bar=0; } else if(!f.bar) iE(); }],
        alg:['P',function(v){
            if(f.bar) f.bar.children[3].val=v; else { f.$ef.alg=v; iA(); }
        }],
        algb:['P',function(v){ f.$ef.algb=v; iG(); }],
        zm:['P',function(v){ if(f.bar) f.bar.children[4].val=v; else { f.$ef.zm=v||0; iA(); } }],
        val:[function(){ return f.get(f.qs); },function(v){
            if(v) {
                if(_.aT(v)=="S"&&!v.indexOf('<svg ')) v='data:image/svg+xml,'+encodeURIComponent(v);
                f.img.load({p:v,atr:"src",ok:function(){ if(f.onl) f.onl(f); iB(); }});
            }
            else { f.img.src=""; iB(); }
        }],
        ani:['P',function(v){
            let t,j,m; if(v) {
                if(f.$ef.ani||_.aT(v)!=="A") return;
                f.children[0].style.display="none"; t=v[0]; v[0]=0; v[1]=new Array(v[1]);
                for(j=0 ; j<v[1].length ; j++) {
                    v[1][j]=_.xM({tp:"img",r:f,atr:{ani:v[2]},bh:1,load:{p:t.replace(/\$/,j),bin:1,atr:"src",ok:iD}});
                }
                f.$ef.ani=v;
            } else {
                // move back to normal mode!
            }
        }]
    },chl:[{tp:"div",n:"box",csn:"ef-img-box",upl:'<',chl:[{tp:"img",n:"img",bh:1}]}]});
    f.img=_.xI('>box.img',f); f.$upl=iG;
    f.get=function(q) {
        let m=f.img; if(m.src==="") return null; if(q=="Img") return m;
        if(q=="Raw"||q=="RawI") return _.CVS.ItoR(m,q=="Raw"?0:"R");
        if(q=="Uri"||q=="UriI") return _.CVS.RtoI(_.CVS.ItoR(m,q=="Uri"?0:"R"));
        if(q=="B64"||q=="B64I") { q=m.src.indexOf('data:')?f.get("Uri"+(q[3]?"I":"")):m.src; return q.slice(q.indexOf('base64,')+7); }
        return m.src;
    };
    f.$relPrp(["bar","zm","algb","alg","onl","chng","ani","clk","val","rsx","upl"]); return f; 
    function iA(e) {
        let z=Math.pow(1.05,f.zm)*100,tw={S:"100%",W:z+"%"},th={S:"100%",H:z+"%"};
        _.xS(f.img,[tw[f.alg]||"unset",th[f.alg]||"unset"]); f.$elm.box.style.overflow=f.alg=="S"?"hidden":"";
    }
    function iB() { f.fw(f.chng); if(f.form) f.form.sv=1; }
    function iC(r) {
        var m=f.$ef.ani[2],v=f.$ef.ani[1].length,w=f.$ef.ani[1][r%v],q={
            FD:["opacity",1,0],RS:["left","0%","100%"],TW:["transform","rotate(0deg) scale(1,1)","rotate(3600deg) scale(0,0)"]
        };
        w.style.zIndex=r; w.style[q[m][0]]=q[m][1];
        setTimeout(function() { if(r) f.$ef.ani[1][(r-1)%v].style[q[m][0]]=q[m][2]; setTimeout(iC,f.$ef.ani[3]*1000,r+1); },f.$ef.ani[4]*1000);
    }
    function iD() { f.$ef.ani[0]++; if(f.$ef.ani[0]==f.$ef.ani[1].length) iC(0); }
    function iE() {
        f.$ef.bar=_.xM({tp:"div",r:f,p:{r:0,t:0},chl:[
            {tp:"$sbt",txt:"\ue00d",clk:function(x){ f.val=""; }},
            {tp:"$sbt",txt:"\ue026",lf:1,clk:function(x){ _.xI('<.3',x).off='~'; _.xI('<.4',x).off=1; }},
            {tp:"$sbt",txt:"\ue01f",lf:1,clk:function(x){ _.xI('<.4',x).off='~'; _.xI('<.3',x).off=1; }},
            {tp:"$sbs",lf:1,src:[
                {val:"X",txt:"\ue02a"},
                {val:"S",txt:"\ue02b"},
                {val:"W",txt:"\ue02c"},
                {val:"H",txt:"\ue02d"}
            ],off:1,chng:function(e){ f.$ef.alg=e.val; iA(); iG(); }},
            {tp:"$trk",min:-100,max:100,stp:1,d:[20],lf:1,off:1,chng:function(e){ f.$ef.zm=e.val; iA(); }}
        ]});
        iG();
    }
    function iG() {
        if(f.bar) {
            let v=f.algb,a=f.alg,m=f.bar.children;
            m[1].off=v&1?0:1; m[2].off=v&2?(a=="S"||a=="X"?1:0):1; m[0].off=(v&4||f.upl)?0:1;
        }
    }
},
tab:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:510,rsx:0,chl:[{tp:"div",n:"pg",csn:'ef-tab-pgl',evt:{click:iA}},{tp:"ef-slot"}],prp:{
        vt:'A#',aw:'A#',
        sel:['P',function(v){
            let t=_.aT(v); if(!t) if(f.sel) f.sel.sel=0; else f.appendChild(f.opg);
            if(t=="N") f.src[v].sel=1;
            else if(t=="S"&&f.$ef.$map[v]) f.$ef.$map[v].sel=1;
        }],
        val:function(){ var z=[],i; for(i of f.src) z.push(i.val); return z; },
        opg:['P',function(v){ f.$ef.opg=_.xM({tp:"div",csn:"ef-tab-pgc",chl:v||[]}); }]
    },xR:{
        src:{
            con:'>0',
            inp:function(z,v,i){ if(_.aT(v)!=="H") v={txt:v}; if(!v.pg) v.pg=[]; return v; },
            del:function(z,a,i){ if(a.sel) a.sel=0; },
            tpl:{tp:"div",n:"pgt",csn:"ef-tab-pgt",prp:{
                txt:'innerHTML',pg:['P',function(v){
                    if(this.$ef.pg) return; let z=this.$ef.pg=_.xM({tp:"div",csn:"ef-tab-pgc"});
                    z.$ef.$xR=f.src; z.$ef.pgh=this; _.xM(v,z);
                }],
                key:['P',function(v){
                    if(this.$ef.key||_.aT(v)!=="S") return;
                    this.$ef.key=v; f.$ef.$map[v]=this;
                }],
                sel:['A#',function(v){
                    if(f.sel) { _.xA(f.sel,"sel"); _.xX(f.sel.pg); } else if(v) _.xX(f.opg);
                    _.xA(this,"sel",v); f.$ef.sel=v?this:v; f.insertBefore(v?this.pg:f.opg,f.children[1]);
                    f.fw(f.chng);
                }],
                val:function(){ var z={},e=this.$ef.pg.$elm,i; for(i in e) z[i]=e[i].val; return z; }
            }},
        }
    }});
    f.$ef.$map={}; f.$relPrp(['vt','aw','opg','src','chng','sel','rsx']); return f;
    
    function iA(e) {
        if(f.rdo) return; let o=e.target;
        while(o&&o.$ef&&o.$ef.$name!=="pgt") o=o.parentNode; if(!o) return; o.sel=1;
    }
},
rdb:function(p){
    // 
}, // TODO
lst:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:511,rsx:0,prp:{
        val:['P',function(v){
            if(f.rdo) return;
            // select!
        }],
        bar:['P',function(v){
            v=f.$ef.bar=_.Num.T(v,1,0,32); let a=f.$elm.bar; a.off=v?0:1; a=a.$elm;
            a.B1.off=v&1?0:1; a.B2.off=v&2?0:1; a.B3.off=v&4?0:1; a.B4.off=v&8?0:1;
            a.C1.off=(v&16)&&f.pg<Infinity?0:1;
        }],
        pg:['>con:pg',function(v){ f.$elm.bar.$elm.C1.off=f.bar&16&&f.pg<Infinity?0:1; }],
        ofx:['>con:ofx',function(v){
            if(f.$ef.$lok||f.pg==Infinity) return; f.$ef.$lok=1;
            f.$elm.con.ofx=f.$elm.ofc.val=v; f.$ef.$lok=0;
        }]
    },chl:[{tp:"div",n:"bar",csn:"ef-stl-bar",chl:[
        {tp:"$sbt",n:"B1",txt:"\ue00b"}, // add item using built-in or custom form
        {tp:"$sbt",n:"B2",txt:"\ue013",lf:1}, // edit using built-in or custom form
        {tp:"$sbt",n:"B3",txt:"\ue00d",lf:1,clk:function(){ if(f.val) f.val.xX(); f.$ef.val=null; }},
        {tp:"$sbt",n:"B4",txt:"\ue002",lf:1,clk:_.dbx.bind(null,{msg:_.Dic.EF[12],ok:function(){ f.src=[]; }})},
        {tp:"div",n:"C1",csn:"ef-stl-ofx",chl:[
            {tp:"$sbt",txt:"\ue004",clk:iC.bind(null,0)},
            {tp:"$sbt",txt:"\ue007",lf:1,clk:iC.bind(null,'-')},
            {tp:"$num",n:"OfC",min:0,stp:1,w:[4],lf:1,chng:iA},
            {tp:"$div",txt:"/",lf:1},
            {tp:"$num",n:"PgC",stp:1,w:[4],rdo:1,lf:1},
            {tp:"$sbt",txt:"\ue006",lf:1,clk:iC.bind('+')},
            {tp:"$sbt",txt:"\ue005",lf:1,clk:iC.bind(null,'X')}
        ],lf:1}
    ]},{tp:p.base||"ul",n:"con",csn:"ef-lst-con",evt:{click:function(e){
        // select!
    }}}],xR:{
        src:{
            con:'>con',
            tpl:p.tpl||{tp:"li"},
            inp:p.inp,add:p.add,del:p.del,end:iB,set:p.set
        }
    }});
    f.$ef.elm={
        ofc:_.xI('>bar.C1.OfC',f),
        pgc:_.xI('>bar.C1.PgC',f),
        con:f.$elm.con
    };
    f.$relPrp(['pg','ofx','val','bar','rsx']); return f;
    
    function iA(e) { f.ofx=e.val; }
    function iB() {
        if(f.pg<Infinity) {
            f.$ef.elm.ofc.max=f.$ef.elm.pgc.val=f.src.length;
            f.$ef.elm.ofc.max-=f.pg;
        }
        if(p.end) p.end();
    }
    function iC(e) {
        if(e=='-') f.ofx-=f.pg;
        else if(e=='+') f.ofx+=f.pg;
        else if(e=='X') f.ofx=f.src.length-f.pg;
        else f.ofx=e;
    }
},
vid:function(p){
    //
}, // TODO
trk:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:510,csn:'ef-cont',chl:[
        {tp:"div",n:"lbl",csn:"ef-lbl"},
        {tp:"div",n:"trk",csn:'ef-trk',mC:{cbk:iB,wt:1,lim:function(e){
            e.preventDefault(); return 1;
        }},stl:{ padding:"0 8px 0 8px" },chl:[
            {tp:"div",n:"pos",d:[0,1],csn:'ef-trk-fill',evt:{blur:function() {
                _.xA(z,"contenteditable"); f.val=_.Num.N(z.innerHTML);
                f.$ef.$edt=0;
            }}}
        ]}
    ],prp:{
        lbl:'>lbl:L#>trk',
        val:['P',function(v){
            let t=_.aT(v); if(t=="Q") return v();
            if(!t) v=f.min+(f.max-f.min)/2; f.$ef.val=_.Num.T(v,f.stp,f.min,f.max);
		    _.xS(z,[((f.$ef.val-f.min)*100/(f.max-f.min))+"%"]);
		    z.innerHTML=f.$ef.val; if(f.form) f.form.sv=1; f.fw(f.chng);
        }]
    }}),C=f.$elm.trk,z=C.$elm.pos,a=['min','max','stp'],i;
    _.xE(C,"pointermove",function(e) {
        if(!f.rdo&&(e.buttons==1||e.type=="touchmove")&&!f.$ef.$edt) {
            e.preventDefault(); iB(e,1);
        }
    },true);
    for(i of a) _.xP(f,i,['P',iA.bind(null,i)]);
    f.$relPrp(a.concat(["w","lbl","chng","val"])); return f;
    function iA(r,v) { f.$ef[r]=v; f.val=f.$ef.val; }
	function iB(e,a) {
		if(f.rdo||f.$ef.$edt) return;
		if(a==1) f.val=f.min+(f.max-f.min)*((_.mP(e).x-8)/(C.offsetWidth-16));
		else if(a==2) {
		    _.xA(z,"contenteditable",true); z.focus();
		    document.getSelection().collapse(z,1); f.$ef.$edt=1;
		}
	}
},
ddl:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:511,csn:'ef-cont',chl:[
        {tp:"div",n:"lbl"},
        {tp:"div",n:"fld",csn:['ef-ddl-fld','ef-field'],chl:[
            {tp:"div",n:"con",csn:'ef-ddl-sel'},
            {tp:"$sbt",n:"btn",txt:"\ue016",clk:function(){
                let W=window,c=_.xV(g,Math.V2(W.scrollX,W.scrollY)),a=f.$ef.$xX,b=g.offsetHeight,q,h=a.blk,i,x;
                if(!h) h=a.blk=_.xM({ tp:"ef-blk",r:document.body,chl:[{
                    tp:"div",n:"flx",csn:["ef-ddl-flx","ef-field","ef-cur-btn"],evt:{ click:function(e){
                        let x=e.target,n; while(x) {
                            n=x.parentNode;
                            if(n===h.$elm.flx) { f.val=x.key; _.xX(a.blk); delete a.blk; break; }
                            x=n;
                        }
                    }}
                }],evt:{click:function(){ h.xX(); delete a.blk; }} }); x=h.$elm.flx;
                for(i of f.src) if(i!==f.sel) x.appendChild(i);
                _.xS(x,[g.offsetWidth+"px"]);
                x.style.maxHeight=f.dh+"em"; q=x.offsetHeight;
                if(c.y+b+q>window.innerHeight) c.y-=q;
                else c.y+=b; _.xS(x,{l:c.x,t:c.y});
            }}
        ]}
    ],prp:{
        dh:['P',function(v){ v=Math.round(v); if(!v||isNaN(v)||v<0) v=16; f.$ef.dh=v; }],
	    lbl:'>lbl:L#>fld',
	    bar:['P',function(v){
	        if(!v) v=""; f.$ef.bar=v; let q=0,w={A:1,X:2,E:4},i;
	        for(i of v) q+=w[i]||0; iB(q);
	    }],
	    val:['P',function(v){
	        var t=_.aT(v); if(t=="S") v=f.src.find(e=>e.key==v);
	        if(!v) v=f.src[0];
	        if(v&&v===f.sel) return; f.sel=v; f.src.ofx=v?v.$ef.$idx:0;
	        f.$ef.val=v?v.key:""; f.fw(f.chng); if(f.form) f.form.sv=1;
	    }],
	    srt:['P',function(v) { f.$ef.srt=v; f.src.sort(v); }] // later this will be kept internally in xR
    },xR:{
        src:{
            pg:1,con:'>fld.con',lim:p.lim,inp:function(z,v,i){
                if(f.inp) v=f.inp(z,v,i); let t=_.aT(v),a; if(t!=="H") v={key:v};
                a=v.key; t=_.aT(a); if((t=="S"&&a=="")||!t) throw _.Dic.EF[4]+" "+a;
                if(!v.txt&&!p.tpl) v.txt=a+''; return v;
            },
            add:function(z,a,i){ if(f.add) f.add(z,a,i); },
            del:function(z,a,i){
                let c; if(f.del) f.del(z,a,i);
                if(a.key===f.val) { if(f.req) for(c of f.src) if(c) break; f.val=c; }
            },
            $ofx:function(){ if(!f) return; f.sel=f.src[f.src.ofx]; f.$ef.val=f.sel?f.sel.key:""; },
            tpl:{
                tp:"div",csn:"ef-ddl-rec",prp:p.prp||{ txt:'>lbl:txt' },
                chl:p.tpl||[{tp:"$div",n:"lbl",stl:p.ls,lf:1}]
            }
        }
    }}),g=f.$elm.fld;
    f.$rdo=function(v) { g.$elm.btn.off=v; if(v) iB(0); else f.bar=f.bar; };
    f.$relPrp(["w","lbl","dh","inp","edt","$add","$del","bar","src","srt","chng","val","rdo"]); return f;
    function iA(m){
        if(m&&!f.sel) return; let b=f.$ef.$xX,a,v,i; if(b.$adf) return b.$adf.focus();
        a=[{tp:"$txt",fk:"key",req:1,lbl:_.Dic.EF[7],rdo:m,len:32,d:[32] }].concat(
            f.edt||[{tp:"$txt",fk:"txt",lbl:_.Dic.EF[8],len:32,d:[32] }]);
        a.push({tp:"$sbt",txt:"\ue00f",clk:function(z){ v=b.$adf.val; if(v) {
            if(m) _.aM(f.sel,v); else { f.src.push(v); f.val=v.key; } b.$adf.close();
        }}});
        b.$adf=_.frm({
            tit:"",p:"C",drg:1,blk:m,onl:function(z){ if(m) z.val=f.sel; },
            cls:function(){ delete b.$adf; },xico:1,xhid:1,chl:a
        });
    }
	function iB(b) {
	    if(b&1) { if(!g.$elm.add) _.xM({tp:"$sbt",n:"add",r:g,bf:g.$elm.btn,txt:"\ue00b",clk:iA.bind(null,0)}); }
	    else _.xX(g.$elm.add); 
	    if(b&2) { if(!g.$elm.del) _.xM({tp:"$sbt",n:"del",r:g,bf:g.$elm.btn,txt:"\ue00d",clk:function(){ f.sel.xX(); }}); }
	    else _.xX(g.$elm.del);
	    if(b&4) { if(!g.$elm.edt) _.xM({tp:"$sbt",n:"edt",r:g,bf:g.$elm.btn,txt:"\ue013",clk:iA.bind(null,1)}); }
	    else _.xX(g.$elm.edt);
	}
},
ifr:function(p){
    var f=_.xM({
        tp:"div",ctrl:p,bh:511,rsx:0,prp:{src:'>con:src'},
        chl:[{
            tp:"iframe",n:"con",stl:{border:"none"},
            evt:{
                load:function(e){ if(f.onl) f.onl(e,f); },
                error:function(e){
                    _.alert({tit:'',txt:e,err:1,end:1000});
                    if(f.err) f.err(e,f);
                }
            }
        }]
    }),h=f.$elm.con;
    f.doc=h.contentDocument; f.win=h.contentWindow;
    f.$relPrp(['onl','err','src','rsx']); return f;
},
cam:function(p){
    var x=[[3840,2160],[1920,1080],[1600,1200],[1280,720],[800,600],[640,480],[640,360],[352,288],[320,240],[176,144],[160,120]],
    f=_.xM({tp:"div",ctrl:p,bh:510,csn:'ef-field',rsx:0,evt:{click:function(e) { if(this.$ef.snp&&!this.rdo) this.$ef.snp(this.snap()); }},chl:[
		{tp:"video",n:"vid"}
	],prp:{
		vd:['P',function(v){ this.$ef.vd=v||6; iB(); }],
		fm:['P',function(v){ this.$ef.fm=v; iB(); }],
		aud:['P',function(v){ this.$ef.aud=v?true:false; iB(); }], // maybe can toggle it during runtime?! To check at home.
		aut:[function(){ return g.autoplay; },function(v){ g.autoplay=v?true:false; }],
		ctr:[function(){ return g.controls; },function(v){ g.controls=v?true:false; }],
		snp:['P',function(v){ this.$ef.snp=v; _.xC(this,"ef-cur-btn",v); }]
	}}),g=f.$elm.vid;
	f.data=function() {
	    let d=(f.vd||6)-1,m=f.fm,o={width:x[d][0],height:x[d][1]};
	    if(m) o.facingMode=(m=="F"?"user":{exact:"environment"}); return o;
	};
	f.snap=function() { if(g.videoWidth) return _.CVS.ItoR(g,g.videoWidth,g.videoHeight); };
	f.stop=function() {
		if(!g.str||!f.ready) return; g.str.getTracks().forEach(function (t) { t.stop(); });
		if("srcObject" in g) g.srcObject=null; else g.src=null;
	};
	f.run=function() {
	    if(g.str&&g.str.active) return setTimeout(f.run,200);
	    navigator.mediaDevices.getUserMedia({ video:f.data(),audio:f.aud }).then(function(e) {
		    g.str=g.srcObject=e; g.play(); if(f.ok) f.ok();
	    }).catch(function(e) { _.alert({ tit:e.name,txt:e.message+"<br>"+JSON.stringify(f.data()),err:1 }); if(f.err) f.err(); });
	};
	f.play=g.play; f.pause=g.pause;
	f.$relPrp(['vd','fm',"aut","ctr","aud","snp","ok","err",'rsx']); f.run(); f.ready=1; return f;
	
	function iB() { if(f.ready) { f.stop(); f.run(); } }
},
cpk:function(p){
	var f=_.xM({tp:"div",ctrl:p,bh:510,csn:'ef-cont',chl:[
	    {tp:"div",n:"lbl",csn:"ef-lbl"},
	    {tp:"div",n:"fld",d:[6],csn:["ef-field","ef-cpk-fld"]}
	],evt:{
	    click:function(){
	        if(!f.rdo) _.Rsf.cpk({
		        tit:f.lbl,p:"C",val:f.val,alp:f.alp,blk:1,ok:function() { f.val=f.mf.$ef.val; }
	        },f);
	    }
	},prp:{
	    lbl:'>lbl:L#',
	    alp:['P',function(v){ f.$ef.alp=v; if(!v&&f.val) { f.val.V[3]=255; f.val=f.val; } }],
	    val:['P',function(v){
	        if(!_.aT(v)) v=0xffffff; f.$ef.val=new _.Color(v,f.alp||0);
	        if(f.form) f.form.sv=1; f.$elm.fld.innerText=f.val.hex();
	        _.aM(f.$elm.fld.style,{backgroundColor:f.val.css(),color:f.val.rev()}); f.fw(f.chng);
	    }]
	}}),i;
	f.$rdo=function(v){ _.xC(f.$elm.fld,"ef-cur-btn",v?0:1); };
	f.$relPrp(["lbl","chng","alp","val"]); return f;
},
cal:function(p){
    var f=_.xM({tp:"div",ctrl:p,bh:510,csn:"ef-cont",chl:[
        {tp:"div",n:"lbl",csn:"ef-lbl"},
        {tp:"div",n:"fld",d:[12],csn:["ef-field","ef-cur-btn"],evt:{
            click:function() { if(!f.rdo) _.Rsf.cal({
                tit:f.lbl,mod:f.mod,p:"C",val:f.val,ok:function() { f.val=f.mf.$ef.val; }
            },f); }
        }}
    ],prp:{
        lbl:'>lbl:L#',
        mod:['P',function(v){ f.$ef.mod=v||""; f.val=f.val; }],
        val:['P',function(v){
            let t=_.aT(v),a={D:"Date",T:"Time"},w={};
            if(t=="N") v=new Date(v);
            else if(t=="A") v=new Date(v[0],v[1]-1,v[2]||1,v[3]||0,v[4]||0,v[5]||0,v[6]||0);
            else if(t!=="D") v=new Date(); f.$ef.val=v;
            if(f.mod=="T") w={hour:'2-digit',minute:'2-digit',second:'2-digit'};
            f.$elm.fld.innerHTML=v["toLocale"+(a[f.mod]||"")+"String"]([],w); f.fw(f.chng);
        }]
    }});
    f.$rdo=function(v){ _.xC(f.$elm.fld,"ef-cur-btn",v?0:1); };
    f.$relPrp(["lbl","mod","chng","val"]); return f;
},
tbl:function(p){
	var f=_.xM({tp:"div",ctrl:p,bh:511,csn:'ef-field',css:{ rh:'$$.ef-tbl-colr th{}' },rsx:0,chl:[
	    {tp:"div",n:"con",csn:'ef-tbl-con',chl:[
	        {tp:"table",n:"tbl",chl:[
	            {tp:"thead",n:"th",chl:[{tp:"tr",n:"col",csn:'ef-tbl-colr'}]},
	            {tp:"tbody",n:"tb",mC:{wt:1,lim:function(e,h){
	                var x=e.target.nodeName;
	                if(x=="TD"||x=="TR") e.preventDefault(); return 1;
	            },cbk:function(e,c){
	                if(f.rdo) return; let s,o=e.target,t,m=f.$ef.$edt;
	                if(c==1) {
	                    s=f.selm; if(m) t=m[0].parentNode; if(s) {
	                        s=(s=="C"?"TD":"TR"); if(t===o) t=0;
	                        while(o&&o.nodeName!==s) { o=o.parentNode; if(t===o) t=0; }
	                        if(o) {
	                            if(m) if(t) m[2].click(); else return;
	                            m=f.$ef.$shk;
	                            if(f.selm=="M"&&e.shiftKey&&m) { while(o!==m) {
	                                if(o.sel!==m.sel) o.sel=m.sel;
	                                o=(o.$ef.$idx>m.$ef.$idx)?
	                                    o.previousSibling:o.nextSibling;
	                            } return; }
	                            o.sel=1; if(f.selm=="M") f.$ef.$shk=o;
	                        }
	                    }
	                }
	                else if(c==2) {
	                    while(o&&o.nodeName!=="TD") o=o.parentNode;
	                    t=f.col[o.addr[1]]; let ev=t.edt; if(!ev) return;
	                    if(_.aT(ev)=="Q") ev=ev(f);
	                    if(m) if(m[0].parentNode===o) return; else m[2].click();
	                    if(t.tpl) o.children[0].off=1; else o.txt="";
	                    s=_.aT(o.val)?o.val:(t.cap?o.html:o.txt);
	                    m=f.$ef.$edt=_.xM([
	                        _.aM({val:s},ev),{tp:"$sbt",txt:"\ue00d",clk:iC.bind(null,o,t,s)},
	                        {tp:"$sbt",lf:1,txt:"\ue00f",clk:function(){ iC(o,t,m[0].val); }}
	                    ],o);
	                }
	            }}}
	        ]}
	    ]}
	],prp:{
	    keyc:{once:p.keyc},matt:'A#',
	    tit:[function(){ let z=f.$ef.tit; if(z) return z.innerHTML; },function(v){
	        let t=_.aT(v),z=f.$ef.tit; if(t=="Q") return v();
	        if(t)
	            if(!z) z=f.$ef.tit=_.xM({tp:"div",n:"tit",bf:'>con',r:f,csn:'ef-tbl-tit',html:v});
	            else z.innerHTML=v;
	        if(!t||v===""&&z) { _.xX(z); delete f.$ef.tit; }
	    }],
	    bar:['P',function(v){
	        if(_.aT(v)!=="A") return;
	        let z=f.$ef.$bar; if(v&&!z) {
	            z=f.$ef.$bar=_.xM({ tp:"div",n:"bar",bf:'>con',r:f,csn:'ef-tbl-bar',chl:v });
	            z.add=function(w){ let q=f.$ef.bar; if(!w.n||q.findIndex(e=>e.n==w.n)>-1) return; _.xM(_.aM({r:z.children[0]},w)); q.push(w); };
	            z.del=function(k){ let q=f.$ef.bar,i; _.xX('>'+k,z); i=q.findIndex(e=>e.n==k); if(i>-1) q.splice(i,1); };
	        }
	        else if(!v&&z) { _.xX(z); delete f.$ef.bar; }
	    }],
	    lok:['P',function(v){
	        if(!v) v=0; let j,l=Math.max(v,f.lok||0); f.$ef.lok=v;
	        for(j=0 ; j<l&&j<f.col.length ; j++) iA(j); iB(l);
	    }],
	    selm:['P',function(v){ let k=f.$ef.selm; f.sel=null; f.$ef.selm=v; f.$ef.sel=(v=="M"?[]:null); }],
	    sel:['P',function(v){
	        let s=f.selm,j; if(!s) return;
	        if(_.aT(v)=="S") v=f.src.find(e=>e.col[f.keyc].val);
	        if(s=="M") { while(f.$ef.sel.length) f.$ef.sel[0].sel=0; for(j of v||[]) j.sel=1; }
	        else { if(f.sel) f.sel.sel=0; if(v) v.sel=1; }
	    }],
	    pg:[function(){ return f.src.pg; },function(v){
	        f.src.pg=v;
	        // more control... (for ofx)
	    }],
	    ofx:[function(){ return f.src.ofx; },function(v){ f.src.ofx=v; }],
	    val:[function(){ return f.get(f.qs); },function(v){ if(_.aT(v)!=="A") return; f.src=v; }]
	},xR:{
	    col:{
	        con:">con.tbl.th.col",add:iW,del:iX,end:iB.bind(null,null),
	        inp:function(o,v){ if(_.aT(v)!=="H") v={txt:v}; return v; },
	        tpl:function(z,i){
	            let r="R"+_.aR(); return {
	                tp:"th",id:r,atr:{cid:r},csn:'ef-tbl-colh',chl:[{tp:"div",n:"lbl"}],
	                css:{_k:"i_stl",cr:'th[cid="'+r+'"], td[cid="'+r+'"]{}'},
	                prp:{
	                    txt:'>lbl:L#',inp:'!P',edt:'!P',cap:'!P',tpl:'!P',prp:'!P',
	                    stl:[
	                        function(){ return this.i_stl.get('cr'); },
	                        function(v){ this.i_stl.rul('cr',v||{}); }
                          ],
	                    w:['P',function(v){
	                        let o=this,s=o.style;
	                        o.$ef.w=s.minWidth=s.maxWidth=v; iB();
	                    }],
	                    srt:['P',function(v){
	                        /*
	                        if(v) {
	                            if(!o._srt) o._srt=_.CTR({c:"SBT",txt:(v=="A"?"\ue009":"\ue00a"),lf:1,clk:f.Sort.bind(null,c-1)},o._bar);
	                            o._srt.dir=v; f.Sort(c-1);
	                        }
	                        else if(o._srt) { _.xX(o._srt); delete o._srt; }
	                        */
	                    }]
	                }
	            };
	        }
	    },
	    src:{
	        con:">con.tbl.tb",del:function(z,a,x){
	            let s=f.selm;
	            if(s=="M") delete f.sel[a.$ef.sel];
	            else if(f.sel===a) f.$ef.sel=null;
	        },
	        inp:function(o,v){
	            if(f.inp) v=f.inp(v);
	            if(_.aT(v)=="A") v={col:v};
	            if(v.sep) v.col=[{ txt:v.txt,cs:f.col.length }];
	            return v;
	        },
	        tpl:{tp:"tr",prp:{
	            stl:[function(){ return this.style; },function(v){ _.aM(this.style,v); }],
	            sep:['C#ef-tbl-sep',function(v){
	                _.xC(this,'ef-tbl-sep',v);
	                if(v&&this.col[0]) { this.col[0].colSpan=f.col.length; this.col[0].rowSpan=1; }
	            }],
	            sel:['A#',function(v){
	                let s=f.selm,o=this; if(f.rdo||!s||s=="C"||o.xsel) return;
	                if(s=="S") { if(f.sel&&f.sel!==o) _.xA(f.sel,"sel"); f.$ef.sel=v?o:null; }
	                else if(o.sel) { v=0; f.$ef.sel.splice(f.$ef.sel.indexOf(o),1); }
	                else f.$ef.sel.push(o);
	                _.xA(o,"sel",v); f.fw(f.chng,o);
	            }],xsel:'A#',
	            h:['P',function(v){ let o=this,s=o.style; o.$ef.h=s.minHeight=s.maxHeight=v; }]
	        },xR:{
	            col:{
	                add:function(z,a,x){ if(a.parentNode.sep) { a.colSpan=f.col.length; a.rowSpan=1; } },
	                del:function(z,a,x){ if(f.selm=="C"&&f.sel==a) f.$ef.sel=null; },
	                inp:function(o,v,x){
	                    let t=f.col[x],n; if(t.inp) v=t.inp(f,v,x);
	                    if(_.aT(v)!=="H") { n=v; v={val:n}; if(t.cap) v.html=t.cap(n); else v.txt=n; }
	                    return v;
	                },
	                tpl:function(z,x) { return {
	                    tp:"td",atr:{cid:f.col[x].id},csn:{"ef-tbl-rowh":((x*1)<f.$ef.lok)&&!z.sep},
	                    chl:(f.col[x].tpl?[f.col[x].tpl]:[]),prp:_.aM({
							txt:'innerText',html:'innerHTML',xsel:'A#',
							sel:['P',function(v){
								let o=this; if(f.rdo||f.selm!=="C"||o.xsel) return;
								if(f.sel&&f.sel!==o) _.xA(f.sel,"sel");
								f.$ef.sel=v?o:null; _.xA(o,"sel",v); f.fw(f.chng,o);
							}],
							addr:[function(){ return [z.$ef.$idx,this.$ef.$idx]; }],
							span:[
							    function(){ return [this.rowSpan,this.colSpan]; },
							    function(v) { iD(this,v); }
							]
						},f.col[x].prp||{})
	                }; }
	            }
	        }}
	    }
	}});
	f.get=function(q) {
	    let t=_.aT(q),r,c,x,m,h,v=[];
	    if(t=="S") { t=q.split(/\|/g); x=iE(t[1]||"",f.src); for(r of x) {
	        m=iE(t[0]||"",r.col); h=[]; for(c=0 ; c<m.length ; c++) h.push(m[c].val); v.push(h);
	    }}
	    else if(!t&&f.sel) v=f.selm=="C"?f.sel.val:(f.selm=="S"&&f.keyc?f.sel.col[f.keyc].val:null);
	    return v;
	};
	f.del=function(q) {
	    if(q) {}
	    else if(f.selm=="M") for(let i of f.sel) i.xX();
	    else if(f.selm=="S"&&f.sel) f.sel.xX();
	};
	f.$relPrp(["inp","tit","selm","bar","rsx","col","lok","src","chng","sel","pg","ofx","matt"]); return f;
	
	function iA(j){ for(let k of f.src) if(!k.sep) _.xC(k.col[j],"ef-tbl-rowh",j<f.$ef.lok?1:0); }
    function iB(l){
        if(!f) return;
	    let x=0,j,v=f.$ef.lok||0; if(!l) l=v;
	    for(j=0 ; j<l&&j<f.col.length ; j++) {
	        f.col[j].style.zIndex=j<v?4:"";
	        f.col[j].i_stl.rul('cr',{left:(j<v?x+"px":"")});
	        if(j<v) x+=f.col[j].offsetWidth;
	    }
	}
	function iC(o,t,v){
	    if(t.tpl) { o.children[0].off=0; for(let j of f.$ef.$edt||[]) _.xX(j); }
	    o.val=v; if(t.cap) o.html=t.cap(v); else o.txt=v; if(t.edv) t.edv(o,f); delete f.$ef.$edt;
	}
	function iD(c,s){
	    if(!_.xI(">con.tbl.tb",f).$ef.$done) return setTimeout(iD,100,c,s);
	    if(c.parentNode.sep) return;
	    s=_.aT(s)=="N"?Math.V2(1,s):Math.V2(s[0],s[1]);
	    let w=Math.V2(c.rowSpan,c.colSpan),x,y,a=c.addr,m=w.max(s,1);
	    for(x=0 ; x<m.x&&x<f.src.length ; x++)
	        for(y=0 ; y<m.y&&y<f.col.length ; y++)
	            if(y||x) f.src[a[0]+x].col[a[1]+y].style.display=(x<s.x&&y<s.y)?"none":"";
	    c.rowSpan=s.x; c.colSpan=s.y;
	}
	function iE(s,a){
	    if(s==="") return a; s=s.split(/ /g); let n=[],i=0,x=0,b,e,j=0;
	    while(i<s.length) {
	        if(s[i]=="X") x=1;
	        else if(s[i]=="R") {
	            b=s[i+1]*1; e=s[i+2]*1;
	            if(x) { while(j<b) n.push(a[j++]); j=e+1; }
	            else for(j=b ; j<=e ; j++) n.push(a[j]);
	            i+=2;
	        }
	        else {
	            b=s[i]*1;
	            if(x) { while(j<b) n.push(a[j++]); j++; }
	            else { n.push(a[b]); j=b+1; }
	        }
	        i++;
	    }
	    if(x) while(j<a.length) n.push(a[j++]); return n;
	}
    function iW(z,a,x){
        let j,c=x*1; for(j of f.src)
            if(j.sep) j.col[0].colSpan=f.col.length;
            else j.col.splice(c,0,f.col[c].def||{});
        for(j=c ; j<f.lok+1 ; j++) iA(j);
    }
    function iX(z,a,x){
        let j,c=x*1; for(j of f.src)
            if(j.sep) j.col[0].colSpan=f.col.length-1;
            else j.col.splice(x,1);
        for(j=c ; j<f.lok ; j++) iA(j);
    }
}
};
_.Cfg={ TTP:{end:500},FRM:{},DBX:{},SYS:{cpk:1} };
})();
