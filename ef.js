"use strict"; if(!window.EF) window.EF={}; (function(){
var _=window.EF,u; if(!_.root) { console.log("EF v5.2.1"); var a=document.currentScript.src.split(/\//); a.pop(); _.root=a.join('/'); }

_.SVI=[
    [[32,32],0,[["path",{d:"M8,16L15,21 24,6 16,26z"},"BtnSvgC1"]]],
    [[32,32],0,[["path",{d:"M6,6L16,14 26,6 18,16 26,26 16,18 6,26 14,16z"},"BtnSvgC1"]]]
];

_.a0=function(n,s,h) { var a=n.toString(h); while(a.length<s) a="0"+a; return a; };
_.a2=function(a,n,d) {
	return iA(_.aT(a,n,d,_.xT(a[0])=="A"?0:null));
	function iA(b) {
		if(!b.length) return;
		var m=Math.floor(b.length/2),c=b.splice(m,1)[0],t=_.xT(c)=="A"?{t:c[1],v:c[0]}:{v:c};
		if(b.length) { t.b=iA(b.slice(0,m)); t.e=iA(b.slice(m)); } return t;
	}
};
_.a2S=function(w,k) { if(k) return w==k.v?(k.t||k.v):(w<k.v?_.a2S(w,k.b):_.a2S(w,k.e)); };
_.aC=function(a) {
    var i={A:[],H:{}},t=_.xT(a),b=i[t];
    if(b) for(i in a) if(t=='A') b.push(_.aC(a[i])); else b[i]=_.aC(a[i]);
    return b||a;
};
_.aG=function(){
	var M=Math,a=0xffffffff,b=M.rnd(a),c=M.rnd(a); return (_.a0(M.rnd(a),8)+'-'+
    _.a0(b&0xffff,4)+'-'+_.a0(b>>16&0x0f|0x40,2)+_.a0(b>>24&0xff,2)+'-'+
    _.a0(c&0x3f|0x80,2)+_.a0(c>>8&0xff,2)+'-'+_.a0(c>>16&0xffff,4)+
    _.a0(M.rnd(a),8)).toUpperCase();
};
_.aM=function(a,b) { if(a.concat) a.concat(b); else Object.assign(a,b); };
_.aP={
    D:function(p) { p=p.split(/\//g); p.pop(); return p.join('/'); },
    E:function(p) { var m=p.lastIndexOf('.'); return m>-1?p.substr(m+1):""; }
};
_.aS=function(l) { var x=""; while(x.length<(l||12)) x+=_.b64[Math.rnd(62)]; return x; };
_.aT=function(r,f,d,c) {
	return r.sort(function(a,b){
		if(_.xT(c)) { a=a[c]; b=b[c]; } var e=(f==2&&_.xT(a)!=="N")?0:f;
		return (e?a-b:(a<b?-1:(a>b?1:0)))*(d?-1:1);
	});
};
_.aU=function(a) {
    return a?(_.xT(a)=="A"?Uint8ClampedArray.from(a):(a.constructor.name=="Uint8ClampedArray")?Array.from(a):null):null;
};

_.sC=function(n,v,d) {
	if(!document.cookie) return null; var e=_.ON(document.cookie.substr(2),'-'); if(!e) e={};
	if(!_.xT(v)) return e[n]||null;
	e[n]=v; document.cookie="X="+_.ON(e)+"; "+"expires="+(new Date(Date.now()+(d*86400000))).toGMTString();
};
_.sL=function(k,v) {
    if(!_.xT(v) && k[0]!=='~') { k=localStorage.getItem(k); return k?_.ON(k,'-'):null; }
    if(k[0]=='~') localStorage.removeItem(k.substr(1));
    else localStorage.setItem(k,_.ON(v));
};
_.sS=function(k,v) {
	if(!_.xT(v) && k[0]!=='~') { k=sessionStorage.getItem(k); return k?_.ON(k,'-'):null; }
	if(k[0]=='~') sessionStorage.removeItem(k.substr(1));
	else sessionStorage.setItem(k,_.ON(v));
};

_.xB=function(a,b,c,d) {
	Object.defineProperty(a,b,{
	    get:(c==1?_.xW.bind(null,a,b,"~"):(c||function(){})),
	    set:(d==1?_.xW.bind(null,a,b):(d||function(){})),configurable:true
    });
};
_.xC=function(f,p) { f=_.xI(f); for(var i in p) if(i=="csn") f.classList.add(p[i]); else f.style[i]=p[i]; };
_.xE=function(c,e,f,r) {
    c=_.xI(c,1); if(_.xT(e)=="A") { for(var i in e) _.xE(c,e[i],f,r); return; }
    if(c&&f) c[(r==-1?"remove":"add")+"EventListener"](e,f,r==-1?null:(r?true:false));
};
_.xH=function(){ return _.xM("div",0,document.body,[30000,30000],"SCN_BLK"); };
_.xI=function(e,c) { if(e&&e.split) e=document.getElementById(e); return e||(c?e:document.body); };
_.xL=function(f,a){
    _.xC(f,{display:"flex",flexDirection:"row",overflow:"hidden"});
    var A=_.CTR([
        {c:"DIV",d:[0,"100%"],s:{flex:1,overflow:"hidden"}},
        {c:"DIV",d:[0,"100%"],s:{overflowY:"auto"},chl:[{c:"DIV",d:["1em","100%"]},{c:"DIV"}]}
    ],f);
    _.xB(f,"QTY",function(){ return f.pg.children[1].clientHeight; },function(v){ f.pg.scrollTo(0,0); f.pg.children[1].style.height=v+"px"; iA(0,1); });
    f.box=A[0]; f.pg=A[1]; f.$pg=a; f.QTY=0; f.pos=0;
    _.mM(f.box,function(e){ e.preventDefault(); var p=_.mP(e); if(f.lp&&(e.type=="mousemove"?e.buttons:1)) f.pg.scrollBy(0,p[1]-f.lp[1]); f.lp=p; });
    _.xE(f.box,"wheel",function(e){ e.preventDefault(); f.pg.scrollBy(0,e.deltaY); });
    _.xE(f.pg,"scroll",function(e){
        if(f.pg.lk) return; f.pg.lk=1; var n=f.pg.scrollTop,d=n-f.pos,o,i;
        if(d>0) {
            while(f.box.firstChild&&f.box.firstChild.idx<n) _.xX(f.box.firstChild);
            for(i=n+f.box.children.length ; i<f.QTY ; i++) { o=f.$pg(i); o.idx=i; f.box.appendChild(o); if(o.offsetTop>f.clientHeight) { _.xX(o); break; } }
        }
        else { iA(n); while(f.box.lastChild&&f.box.lastChild.offsetTop>f.clientHeight) _.xX(f.box.lastChild); }
        f.pos=n; if(f.$vs) f.$vs(n); f.pg.lk=0;
    });
    function iA(n,c) {
        var d=f.box.firstChild,i=0,o;
        while(i+n<f.QTY) { if(!c&&d&&d.idx==i+n) break; o=f.$pg(n+i); o.idx=n+i; i++; f.box.insertBefore(o,d); if(o.offsetTop>f.clientHeight) break; }
    }
};
_.xM=function(t,i,r,s,c,b) {
    if(t[0]=='*') t=document.createElementNS("http://www.w3.org/2000/svg",t.substr(1));
	else if(!t.indexOf("txt")) t=document.createTextNode(t.substr(4));
	else t=document.createElement(t);
	if(t.nodeName=="IMG") t.ondragstart=function(e) { e.preventDefault(); };
	b=_.xI(b,1); if(b) r=b.parentNode;
    if(i) t.id=i; if(r) _.xI(r).insertBefore(t,b); if(s) _.xS(t,s[0],s[1]);
	if(c) if(_.xT(c)=="S") _.xW(t,"class",c); else _.xC(t,c);
    return t;
};
_.xN=function(t,o) {
    var i,s=document.defaultView.getComputedStyle(o),e,w,f={visibility:"hidden",whiteSpace:"nowrap"},d=[
        "Family","Size","Stretch","Style","VariantCaps","VariantEastAsian","VariantLigatures","VariantNumeric","Weight"
    ];
    for(i in d) f["font"+d[i]]=s["font"+d[i]]; e=_.xM("span",0,document.body,0,f);
    e.innerText=t; w=e.offsetWidth; _.xX(e); return w;
};
_.xO=function(o,e,d) {
    if(!d) d=1; var x=new MutationObserver(e),a={},b={1:"childList",2:"attributes",4:"characterData",8:"subtree"},i=1;
    do { if(d&i) a[b[i]]=true; }while((i<<=1)<16); x.observe(_.xI(o),a);
};
_.xP=function(f,v,a) {
    if(!v) return; f=_.xI(f); a=_.xI(a,1);
    if(a&&!v.p) { v.l=a.offsetLeft+(isNaN(v.l)?0:v.l); v.t=a.offsetTop+(isNaN(v.t)?0:v.t); }
    var i,o=f.style,x={l:"left",t:"top",r:"right",b:"bottom"},s={f:"fixed",r:"relative",s:"sticky",x:"static"};
    for(i in x) if(_.xT(v[i])) o[x[i]]=v[i]+(v[i]===""||isNaN(v[i])?"":"px"); o.position=(s[v.p]||"absolute");
};
_.xS=function(f,w,h) {
    var o=_.xI(f).style;
    if(w) o.width=w+(isNaN(w)?"":"px");
    if(h) o.height=h+(isNaN(h)?"":"px");
};
_.xT=function(e) {
    var d={number:"N",string:"S",boolean:"B",function:"Q"},k=typeof(e);
	if(d[k]) return d[k]=="N"&&isNaN(e)?"S":d[k];
	if(k=="object"&&e) {
		d={ Array:"A",ML:"L",Color:"C",Date:"D",FF:"F",HTMLImageElement:"I",Image:"I",Object:"H",Promise:"R" };
		k=e.constructor.name; return d[k]||e.ctor||"O";
	}
    return null;
};
_.xU=function(e,o) {
    e=_.xI(e); o=_.xI(o); var w=[0,0]; while(e&&e!==o) { w[0]+=e.offsetLeft; w[1]+=e.offsetTop; e=e.parentNode; }
    return w;
};
_.xV=function(e) {
	var i,g=document.defaultView.getComputedStyle(_.xI(e)),c={static:"x",sticky:"s",relative:"r",fixed:"f"},
	a={l:"left",t:"top",r:"right",b:"bottom",w:"width",h:"height"},b={p:c[g.position]};
	for(i in a) b[i]=g[a[i]].replace(/px/,'')*1; return b;
};
_.xW=function(c,n,v,s) {
    var i; if(_.xT(c)=="A") { for(i in c) _.xW(c[i],n,v,s); return; }
    c=_.xI(c,1); if(!c) return;
    if(_.xT(v)!=="H") return s?_.xW(c,n,_.xW(c,n,"~")?0:v):c[(v?(v=="~"?"get":"set"):"remove")+"Attribute"](n,v);
    for(i in v) _.xW(c,i,v[i]);
};
_.xX=function(e) {
	var i,b=["ttp","tta"],f=["HTML","BODY","HEAD"]; e=_.xI(e,1); if(!e||f.indexOf(e.nodeName)>-1) return; f=e.form;
    if(_.SE) _.SE.Del(e); if(e.dispose) e.dispose(); if(f&&f.ctrl[e.name]) delete f.ctrl[e.name];
    for(i in b) if(e[b[i]]) _.xX(e[b[i]]); if(e.ee) for(i in e.ee) _.xX(e.ee[i]); e.remove(e);
};
_.xZ=function(o) {
    var x=(_.xI(o,1)||document).getElementsByTagName('ef_ctrl'),a;
    while(x.length) { try { a=eval('('+x[0].innerHTML+')'); a.u=x[0]; a=_.CTR(a); } catch(e){
        a=_.CTR({c:"DIV",u:x[0],html:"!!!",s:"err"}); console.log(e);
    } _.xW(a,"efc",1); _.xX(x[0]); }
};

_.mC=function(h,f,b){
	if(!b) b=0; h.mh=[0,0,0];
	_.mT(h,function(e) { if(b&2) e.preventDefault(); h.mh[0]=Date.now(); h.mh[1]++; });
	_.mE(h,function(c,e) {
	    if(b&2) e.preventDefault();
		if((b&1)&&(!e.target||e.target.id!==h.id)) return;
		if(h.mh[0]+600<Date.now()) { if(h.mh[2]) clearTimeout(h.mh[2]); return iA(e,c,1); }
		if(h.mh[2]) { clearTimeout(h.mh[2]); h.mh[2]=0; }
		h.mh[2]=setTimeout(iA,220,e,c);
	});
	function iA(e,c,a) { a=a?0:h.mh[1]; h.mh=[0,0,0]; f(e,a,c); }
};
_.mD=function(e,t){
	_.xB(t||e,"drg",_.xW.bind(this,e,"drg","~"),_.xW.bind(this,e,"drg")); if(!t) t=e;
	_.mT(e,function(f){
		if(!_.xW(e,"drg","~")) return; f.preventDefault();
		eC(e,t); _.mM(e.dvp[0],function(g){
			g.preventDefault(); var o=_.mP(g),v=eB(e.dvp[2],o);
			if(v) _.xP(t,{l:e.dvp[1].l+v[0],t:e.dvp[1].t+v[1],p:e.dvp[1].p});
			else e.dvp[2]=o;
		});
	});
};
_.mE=function(h,c) { _.xE(h,["mouseup","touchend","touchcancel"],c.bind(this,0)); _.xE(h,"mouseout",c.bind(this,1)); };
_.mM=function(h,c) { _.xE(h,["mousemove","touchmove"],c); };
_.mP=function(e) { var z=e.changedTouches,b=(e.currentTarget||e.target).getBoundingClientRect(); z=z?z[0]:e; return [z.pageX-b.x-window.scrollX,z.pageY-b.y-window.scrollY]; };
_.mR=function(e,z) {
    e.rx=[0,0,0,0,0];
	_.xB(e,"rsx",function(){ return e.rx[0]; },function(v) {
		e.rx[0]=v;
		for(var i=1 ; i<5 ; i++) {
			if(i<=v) { if(!e.rx[i]) e.rx[i]=iA(i); }
			else { _.xX(e.rx[i]); e.rx[i]=0; }
		}
	});
	e.rsx=z||0;
	function iA(x) {
		var f=_.xM("div",0,e); _.xW(f,"rx",x);
		_.mT(f,function(h){
			h.preventDefault(); eC(f,e); _.mM(f.dvp[0],function(g){
				g.preventDefault(); var o=_.mP(g),v=eB(f.dvp[2],o);
				if(v) {
					_.xP(e,{l:f.dvp[1].l+v[0]*((x%2)^1),t:f.dvp[1].t+v[1]*(x<3?0:1),p:f.dvp[1].p});
					_.xS(e,f.dvp[1].w+v[0]*(x%2?1:-1),f.dvp[1].h+v[1]*(x<3?1:-1));
					if(e.$rsx) e.$rsx();
				}
				else f.dvp[2]=o;
			});
		});
		return f;
	}
};
_.mT=function(h,c) { _.xE(h,["mousedown","touchstart"],c); };
_.mX=function(e,z,w,c) {
    e.rx=[0,0,c];
	_.xB(e,"rsx",function(){ return e.rx[0]; },function(v) {
	    if(v<0||v>2) v=0; e.rx[0]=v;
		if(v) { if(!e.rx[1]) e.rx[1]=iA(); _.xW(e.rx[1],"rx",4+v); } else { _.xX(e.rx[1]); e.rx[1]=0; }
	});
	e.rsx=z||0;
	function iA() {
		var f=_.xM("div",0,e),b=e.parentNode;
		_.mT(f,function(h){
			h.preventDefault(); eC(f,e); _.mM(f.dvp[0],function(g){
				g.preventDefault(); var o=_.mP(g),v=eB(f.dvp[2],o),a,x,d;
				if(v) {
				    x=e.rx[0]; d=[x==1?f.dvp[1].w+v[0]:null,x==2?f.dvp[1].h+v[1]:null];
				    if(e.rx[2]) {
				        if(x==1) d[0]=((d[0]*100)/b.clientWidth)+"%";
				        else if(x==2) d[1]=((d[1]*100)/b.clientHeight)+"%";
				    }
				    if(w) _.xC(e,{minWidth:d[0],maxWidth:d[0],minHeight:d[1],maxHeight:d[1]});
				    else _.xS(e,d[0],d[1]);
				    if(e.$rsx) e.$rsx();
				}
				else f.dvp[2]=o;
			});
		});
		return f;
	}
};

_.aM(_,{RQ:0,RR:[[],[],0,0],Lang:navigator.language,Sfx:{},Tmp:{},Data:{},Sys:{LT:10},b64:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"});

_.E64=function(s) { return btoa(encodeURIComponent(s)); };
_.D64=function(s) { return decodeURIComponent(atob(s)); };
_.DL=function(c,n,e,d) {
	var f=_.xM('a',0,document.body);
	_.xW(f,0,{download:n+'.'+e,href:((!c.indexOf('data:')||!c.indexOf('blob:'))?c:('data:'+d+';base64,'+c))});
	f.click(); _.xX(f);
};
_.F=function(n){
    return new FF(n);
    function FF(v) { var o=this; o.F=v.replace(/\+/g,'_'); o.toString=function () { return o.F.replace(/\_/g,'+'); } }
};
_.ML=function(q) { return new ML(q); function ML(v) {
	var o=this; o.W=v;
	o.toString=function() {
		if(_.DB) return _.DB.ML(o.W); // this function shall bring Promise before the actual response.
		// Yet better: Files processed in the server shall be downloaded "clean"
		var t=_.xT(o.W),n,k,i; if(t=="S") return o.W; if(o.W[_.Lang]) return o.W[_.Lang];
		n=_.Lang.split(/\-/g); k=Object.keys(o.W); i=k.indexOf(n[0]); return o.W[k[i>-1?i:0]]||"";
	};
} };
_.ON=function(V,P) {
    var i,e,T,L,O,Q;
	if(!_.xT(P)) {
		T=_.xT(V);
		if(!T) T="0";
		else if(T=="L") T="5"+_.ON(V.W);
		else if(T=="F") T="6"+V.F;
		else if(T=="D") T="7"+N64(Math.floor(V.getTime()/1000));
		else if(T=="A") { T="1"+L64(V.length); for(i in V) T+=_.ON(V[i]); }
		else if(T=="S") T="3"+_.E64(V+"").replace(/\n/g,'').replace(/\r/g,'').replace(/\+/g,'_');
		else if(T=="C") T="B"+V.EFON();
		else if(T=="I") T="C"+V.src.replace(/\n/g,'').replace(/\r/g,'').replace(/\+/g,'_').replace(/\;/g,'*');
		else if(T=="N") {
			V=V+""; e=V.indexOf("e");
			if(e==-1) e=0; else { e=parseInt(V.substr(e+1)); V=V.substr(0,V.indexOf("e")); }
			i=V.indexOf("."); if(i>-1) { e-=V.length-i-1; V=V.replace(/\./g,''); }
			V=parseInt(V); T=!e?"8"+N64(V):"9"+N64(V)+N64(e);
		}
		else if(T=="H") {
			e=Object.keys(V); T="2"+L64(e.length);
			for(i in e) T+=_.ON(e[i])+_.ON(V[e[i]]);
		}
		return L64(T.length)+T;
	}
	else {
		if(P=='-') P=[0]; T=V[P[0]]; L=L64(V,P); P[0]++;
		if(T=="0") O=null;
		else if(T=="1") { O=[]; Q=L64(V,P); for(i=0 ; i<Q ; i++) O.push(_.ON(V,P)); }
		else if(T=="2") { O={}; Q=L64(V,P); for(i=0 ; i<Q ; i++) O[_.ON(V,P)]=_.ON(V,P); }
		else {
			O=V.substr(P[0],L-1);
			if(T=="5") O=new _.ML(O);
			else if(T=="7") O=new Date(N64(O,1)*1000);
			else if(T=="8") O=N64(O,1);
			else if(T=="9") O=N64(O.substr(0,O.length-1),1)*Math.pow(10,N64(O.substr(-1),1));
			else if(T=="B") O=new _.Color(O);
			else if(T=="C") O=new Image().Set(O.replace(/\_/g,'+').replace(/\*/g,';'));
			else { if(T!=="6") O=_.D64(O.replace(/\_/g,'+')); if(T=="4") O=parseFloat(O); }
			P[0]+=L-1;
		}
		return O;
	}
	
	function L64(V,P) {
    	var d="",i=0,h=0,k,r=0,j;
    	if(_.xT(P)) {
	    	k=_.b64.indexOf(V[P[0]++]);
	    	d=0; i=32; while(k>=(h+i) && r<5) { h+=i; i>>=1; r++; } k-=h;
	    	for(j=r ; j>=0 ; j--) { if(j!==r) k=_.b64.indexOf(V[P[0]++]); d+=k<<(j*6); }
	    }
	    else {
	    	while(V>=(1<<(5+5*i)) && i<10) { h+=(32>>i); i++; }
	    	for(j=i ; j>=0 ; j--) { k=V>>(j*6); V&=(1<<(j*6))-1; if(j==i) k+=h; d+=_.b64[k]; }
	    }
    	return d;
    }
    function N64(v,a) {
	    var d="",i,k,x;
    	if(a) {
	    	d=0; x=v.length; for(i=0 ; i<x ; i++) { k=_.b64.indexOf(v[i]); d+=k*Math.pow(2,(x-i-1)*6); }
	    	d-=Math.pow(2,x*6-1);
	    }
	    else {
	    	x=1; if(v<0) { x=-1; v=-v; } i=1; k=5; while(v>=Math.pow(2,k)) { i++; k+=6; }
	    	v=Math.pow(2,k)+(v*x); k-=5; while(k>=0) { x=Math.floor(v/Math.pow(2,k)); d+=_.b64[x]; v-=x*Math.pow(2,k); k-=6; }
    	}
    	return d;
    }
};
_.CVS={
    ItoR:function(i,w,h) {
    	if(!h) h=w; w=(w=="R"?i.width:(w||i.naturalWidth)); h=(h=="R"?i.height:(h||i.naturalHeight));
    	var C=eD(w,h),x; C.ctx.drawImage(i,0,0,w,h); x=C.Raw(); _.xX(C); return x;
    },
    RtoI:function(d,t,q) {
    	if(!d||d.src==="") return; var C=eD(d.width,d.height),x;
    	C.ctx.putImageData(d,0,0); x=C.Val(t,q); _.xX(C); return x;
    }
};
_.Num={
    S:function(v,f,m) {
	    var o={}; if(m) { o.style='currency'; o.currency=m; } else _.Num.F(o,f);
	    return v.toLocaleString(_.Lang,o);
    },
    F:function(o,f) { if(_.xT(f)=="N") o.minimumFractionDigits=o.maximumFractionDigits=f; return o; },
    M:function(v) {
	    var x=" kMGTPEYZ",i=0;
	    while(i<x.length&&v>=Math.pow(1024,i)) i++; if(i) i--;
	    return _.Num.T(v/Math.pow(1024,i),0.01,0)+" "+x[i]+"B";
    },
    T:function(v,x,m,h) {
        var a=m||0; v=(x&&((v-a)%x))?Math.round((v-a)/x)*x+a:v;
	    if(_.xT(m)&&v<m) v=m; if(_.xT(h)&&v>h) v=m+Math.floor((h-a)/x)*x;
        return v;
    },
    N:function(v) { if(_.xT(v)=="S") v=parseFloat(v.replace(/[^(0-9\-e).]/g,'')); return isNaN(v)?0:v; }
};
_.GR={
NEQ:function(eX,eS) {
	if(!eS) eS=10; var eN=[],i,eI=new Int32Array(256),eB=new Int32Array(256),eF=new Int32Array(256),eR=new Int32Array(32),
		l=eX.length,eA=30+((eS-1)/3),s=l/(3*eS),v=~~(s/100),a=1024,d=1024,q=16,t,c1,c2,j,p=0,z,m,x,lo,hi,w,f,n,k;
	for(i=0; i<256; i++) { eN[i]=new Float64Array([16,16,16,0]); eF[i]=256; eB[i]=0; }

	for(i=0; i<q; i++) eR[i]=a*(q*q-i*i);
	if(l<1509) { eS=1; t=3; } else t=(l%499)?1497:((l%491)?1473:((l%487)?1461:1509));
	i=0; while(i<s) {
		c1=[]; for(j=0 ; j<3 ; j++) c1[j]=(eX[p+j]&0xff)<<4;
		c2=n=-1; m=z=~(1<<31); for(j=0; j<256; j++) {
			for(x=0,k=0 ; k<3 ; k++) x+=Math.abs(eN[j][k]-c1[k]);
			if(x<z) { z=x; n=j; } w=x-((eB[j])>>12); if(w<m) { m=w; c2=j; } f=(eF[j]>>10); eF[j]-=f; eB[j]+=(f<<10);
		}
		eF[n]+=64; eB[n]-=65536;
		for(j=0 ; j<3 ; j++) eN[c2][j]-=(a*(eN[c2][j]-c1[j]))/1024;
		if(q!==0) {
			lo=Math.abs(c2-q); hi=Math.min(c2+q,256); z=c2+1; k=c2-1; m=1;
			while(z<hi||k>lo) {
				n=eR[m++];
				if(z<hi) { x=eN[z++]; for(j=0 ; j<3 ; j++) x[j]-=(n*(x[j]-c1[j]))/262144; }
				if(k>lo) { x=eN[k--]; for(j=0 ; j<3 ; j++) x[j]-=(n*(x[j]-c1[j]))/262144; }
			}
		}
		p+=t; if(p>=l) p-=l; i++; if(v===0) v=1;
		if(i%v===0) { a-=a/eA; d-=d/30; q=d>>6; if(q<=1) q=0; for(j=0; j<q; j++) eR[j]=a*(((q*q-j*j)*256)/(q*q)); }
	}
	for(i=0; i<256; i++) { for(j=0 ; j<3 ; j++) eN[i][j]>>=4; eN[i][3]=i; }
	z=0; s=0; for(k=0; k<256; k++) {
		p=eN[k]; w=k; v=p[1]; for(j=k+1; j<256; j++) { q=eN[j]; if(q[1]<v) { w=j; v=q[1]; } } q=eN[w];
		if(k!==w) {
			j=q[0]; q[0]=p[0]; p[0]=j; j=q[1]; q[1]=p[1]; p[1]=j;
			j=q[2]; q[2]=p[2]; p[2]=j; j=q[3]; q[3]=p[3]; p[3]=j;
		}
		if(v!==z) { eI[z]=(s+k)>>1; for(j=z+1; j<v; j++) eI[j]=k; z=v; s=k; }
	}
	eI[z]=(s+255)>>1; for(j=z+1; j<256; j++) eI[j]=255;

	m=[]; d=[]; k=0; for(n=0; n<256; n++) d[eN[n][3]]=n;
	for(n=0; n<256; n++) { j=d[n]; for(i=0 ; i<3 ; i++) m[k++]=eN[j][i]; }
	_.GR.PI=[eI,eN]; _.GR.PL=m; return m;
},
IDC:function(b,g,r) {
	var eI=_.GR.PI[0],eN=_.GR.PI[1],a,p,d,y=1000,t=-1,z=eI[g],j=z-1;
	while(z<256||j>=0) {
		if(z<256) {
			p=eN[z]; d=p[1]-g;
			if(d>=y) z=256;
			else {
				z++; if(d<0) d=-d; a=p[0]-b; if(a<0) a=-a; d+=a;
				if(d<y) { a=p[2]-r; if(a<0) a=-a; d+=a; if(d<y) { y=d; t=p[3]; } }
			}
		}
		if(j>=0) {
			p=eN[j]; d=g-p[1];
			if(d>=y) j=-1;
			else {
				j--; if(d<0) d=-d; a=p[0]-b; if(a<0) a=-a; d+=a;
				if(d<y) { a=p[2]-r; if(a<0) a=-a; d+=a; if(d<y) { y=d; t=p[3]; } }
			}
		}
	}
	return t;
},
DataToRGB:function(m) { var l=m.data.length,d=new Uint8Array(l/4*3),i=-1,j=0; while(++i<l) if((i%4)<3) d[j++]=m.data[i]; return d; },
PalRGB:function iK(r,g,b,a) {
	if(_.GR.PI[1]&&!a) return _.GR.IDC(r,g,b);
	var c=b|(g<<8)|(r<<16),p=0,m=16777216,q,d,i,x,eP=_.GR.PL;
	for(i=0,x=0; i<eP.length; x++) {
		q=[r-(eP[i++]&0xff),g-(eP[i++]&0xff),b-(eP[i++]&0xff)];
		d=q[0]*q[0]+q[1]*q[1]+q[2]*q[2]; if((!a||_.GR.eU[x])&&(d<m)) { m=d; p=x; }
	}
	return p;
},
DTH:function(w,h,t,k) {
	var u; if(k==u) k=1;
	var r=(k&16)?-1:1,krn=[
		[[3/8,1,0],[3/8,0,1],[2/8,1,1]],
		[[7/16,1,0],[3/16,-1,1],[5/16,0,1],[1/16,1,1]],
		[
			[8/42,1,0],[4/42,2,0],[2/42,-2,1],[4/42,-1,1],[8/42,0,1],[4/42,1,1],
			[2/42,2,1],[1/42,-2,2],[2/42,-1,2],[4/42,0,2],[2/42,1,2],[1/42,2,2]
		],
		[[1/8,1,0],[1/8,2,0],[1/8,-1,1],[1/8,0,1],[1/8,1,1],[1/8,0,2]]
	],x,y,ds=krn[k],z=0,q,a,c1,c2,e,x1,y1,d,i,n,eD=new Uint8Array(t.length/3);
	k=(!k)?1:k&15; if(!ds) throw 'E001: '+k;
	for(y=0; y<h; y++) {
		for(x=(r==1?0:(w-1)),q=(r==1?w:0); x!==q; x+=r) {
			z=(y*w)+x; a=z*3;
			c1=_.GR.PalRGB(t[a],t[a+1],t[a+2]); if(_.GR.eU) _.GR.eU[c1]=1; eD[z]=c1; c1*=3;
      		c2=[_.GR.PL[c1],_.GR.PL[c1+1],_.GR.PL[c1+2]]; e=[t[a]-c2[0],t[a+1]-c2[1],t[a+2]-c2[2]];
			for(i=(r==1?0:(ds.length-1)),n=(r==1?ds.length:0); i!==n; i+=r) {
				x1=ds[i][1]; y1=ds[i][2];
				if(x1+x>=0 && x1+x<w && y1+y>=0 && y1+y<h) {
					d=ds[i][0]; a=(z+x1+(y1*w))*3;
					t[a]=Math.max(0,Math.min(255,t[a]+e[0]*d));
					t[a+1]=Math.max(0,Math.min(255,t[a+1]+e[1]*d));
					t[a+2]=Math.max(0,Math.min(255,t[a+2]+e[2]*d));
				}
			}
		}
	}
	return eD;
}};

(function() {
    var M=Math;
    M.clamp=function(v,a,z) { return M.max(a,M.min(z,v)); };
    M.MD=function(n,m) { return ((n%m)+m)%m; };
    M.r0=function(v) { return v<0?M.ceil(v):M.floor(v); };
    M.d2r=function(d) { return d*M.PI*2; };
    M.r2d=function(r) { return r/(2*M.PI); };
    M.CtrP=function(B,E,Z) { return M.V2(-B.x/2+2*Z.x-E.x/2,-B.y/2+2*Z.y-E.y/2); };
    M.V2=function(x,y){ return new V2(x,y); };
    M.rnd=function(n) { return M.floor(M.random()*n); };
    function V2(x,y) { var O=this;
        O.set=function(v) { if(_.xT(v)=="N") v={x:v,y:v}; O.x=v.x; O.y=v.y; return O; };
        O.add=function(v,n) { if(_.xT(v)=="N") v={x:v,y:v}; v={x:O.x+v.x,y:O.y+v.y}; return n?M.V2(v):O.set(v); };
        O.sub=function(v,n) { if(_.xT(v)=="N") v={x:v,y:v}; v={x:O.x-v.x,y:O.y-v.y}; return n?M.V2(v):O.set(v); };
        O.mul=function(v,n) { if(_.xT(v)=="N") v={x:v,y:v}; v={x:O.x*v.x,y:O.y*v.y}; return n?M.V2(v):O.set(v); };
        O.div=function(v,n) { if(_.xT(v)=="N") v={x:v,y:v}; v={x:O.x/v.x,y:O.y/v.y}; return n?M.V2(v):O.set(v); };
        O.min=function(v,n) { v={x:M.min(O.x,v.x),y:M.min(O.y,v.y)}; return n?M.V2(v):O.set(v); };
        O.max=function(v,n) { v={x:M.max(O.x,v.x),y:M.max(O.y,v.y)}; return n?M.V2(v):O.set(v); };
        O.clamp=function(a,z,n) { if(_.xT(z)=="N") z=M.V2(z,z); a=a.max(z.min(O)); return n?a:O.set(a); };
        O.clpL=function(a,z,n) { var l=O.len(); return O.div(l||1,n).mul(M.max(a,M.min(z,l))); };
        O.floor=function(n) { var v={x:M.floor(O.x),y:M.floor(O.y)}; return n?M.V2(v):O.set(v); };
        O.ceil=function(n) { var v={x:M.ceil(O.x),y:M.ceil(O.y)}; return n?M.V2(v):O.set(v); };
        O.round=function(n) { var v={x:M.round(O.x),y:M.round(O.y)}; return n?M.V2(v):O.set(v); };
        O.r0=function(n) { var v={x:M.r0(O.x),y:M.r0(O.y)}; return n?M.V2(v):O.set(v); };
        O.dot=function(v) { return O.x*v.x+O.y*v.y; };
        O.cross=function(v) { return O.x*v.y-O.y*v.x; };
        O.lenQ=function() { return O.x*O.x+O.y*O.y; };
        O.len=function () { return M.sqrt(O.x*O.x+O.y*O.y); };
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
        O.rotV=function(v,a,n) {
            var c=M.cos(a),s=M.sin(a),x=O.x-v.x,y=O.y-v.y;
	        v={x:x*c-y*s+v.x,y:x*s+y*c+v.y}; return n?M.V2(v):O.set(v);
        };
        O.nml=function(){ return M.V2(O.y,-O.x); };
        O.rnd=function(){ return O.set({x:M.random(),y:M.random()}); };
        O.itc=function(P,B,E,N){ var a=B.sub(P,1),b=N.sub(E,1); return E.add(b.mul(a.cross(N.sub(P,1))/a.cross(b))); };
        O.toString=function() { return O.x+","+O.y; };
        if(!x||_.xT(x)=="N") { O.x=x||0; O.y=_.xT(y)?y:x; } else O.set(x);
    }
})();

_.GIF=function(p) {
	var R=new _.Bin(),eP,eT=0,u,fc; _.GR.eU=[];
	if(p.d==u) p.d=0; if(p.rp==u) p.rp=-1; if(p.dsp==u) p.dsp=-1;
	for(fc=0 ; fc<p.frm.length ; fc++) {
		p.frm[fc].w=p.frm[fc].m.width;
		p.frm[fc].h=p.frm[fc].m.height;
		if(!p.frm[fc].x) p.frm[fc].x=0;
		if(!p.frm[fc].y) p.frm[fc].y=0;
		p.frm[fc].m=_.GR.DataToRGB(p.frm[fc].m);
		if(!p.w||p.frm[fc].x+p.frm[fc].w>p.w) p.w=p.frm[fc].x+p.frm[fc].w;
		if(!p.h||p.frm[fc].y+p.frm[fc].h>p.h) p.h=p.frm[fc].y+p.frm[fc].h;
	}
	R.WD("GIF89a");
	for(fc=0 ; fc<p.frm.length ; fc++) {
		var m=p.frm[fc].m,d=p.frm[fc].d,r=p.frm[fc].r,w=p.frm[fc].w,h=p.frm[fc].h,q,c=0,i,j,k,eD;
		if(p.pt&&p.pt.slice) _.GR.PL=eP=p.pt; if(!eP) { eP=_.GR.NEQ(m,p.qs); }
		if(p.dt) eD=_.GR.DTH(w,h,m,p.dt&15,p.dt);
		else {
			k=0; q=m.length/3; eD=new Uint8Array(q);
			for(j=0; j<q; j++) { i=_.GR.PalRGB(m[k++]&255,m[k++]&255,m[k++]&255); _.GR.eU[i]=1; eD[j]=i; }
		}
		if(p.tr!==u) eT=_.GR.PalRGB((p.tr&0xFF0000)>>16,(p.tr&0xFF00)>>8,p.tr&255,1);
		if(p.pt==1) p.pt=eP; if(!fc) {
			R.WD(p.w,2); R.WD(p.h,2); R.WD(247); R.WD(0,2); iT();
			if(p.rp>=0) { R.WD(0x0bff21,3); R.WD('NETSCAPE2.0'); R.WD(259,2); R.WD(p.rp,2); R.WD(0); }
		}
		R.WD(0x04f921,3); if(p.tr==u) { i=0; j=0; } else { i=1; j=2; } if(p.dsp>=0) j=p.dsp&7; j<<=2;
		R.WD(0|j|0|i); R.WD(d?d:p.d,2); R.WD(eT); R.WD(0x2c00,2);
		R.WD(p.frm[fc].x,2); R.WD(p.frm[fc].y,2); R.WD(w,2); R.WD(h,2); R.WD((!fc||p.pt)?0:135);
		if(fc&&!p.pt) iT(); iE(eD);
	}
	R.WD(59); if(!p.f&&!p.z) return R.GD(); R.FL(p.z,p.f,"gif","image/gif");

	function iE(m) {
		var ca,cb=0,aa=0,fe=258,cf,gi=9,cc=256,ec=257,mx=511,f=5003,hb=new Int32Array(f),nb=9,ct=new Int32Array(f),
			rm=m.length,cp=0,ac=new Uint8Array(256),c,i,e=jN(),d,a=f,g=0;

		R.WD(8); while(f<65536) { ++g; f*=2; } g=8-g; jX(a); jO(cc);
		OL: while((c=jN())!==-1) {
			f=(c<<12)+e; i=(c<<g)^e; if(hb[i]==f) { e=ct[i]; continue; }
			if(hb[i]>=0) {
				d=a-i; if(i===0) d=1;
				do { if((i-=d)<0) i+=a; if(hb[i]==f) { e=ct[i]; continue OL; } } while(hb[i]>=0);
			}
			jO(e); e=c; if(fe<4096) { ct[i]=fe++; hb[i]=f; } else { jX(5003); fe=cc+2; cf=1; jO(cc); }
		}
		jO(e); jO(ec); R.WD(0);

		function jH(b) { ac[aa++]=b; if(aa>=254) jL(); }
		function jX(b) { for(var i=0; i<b;++i) hb[i]=-1; }
		function jL() { if(aa>0) { R.WD(aa); R.WB(ac,0,0,aa); aa=0; } }
		function jN() { if(rm===0) return -1; --rm; return m[cp++]&255; }
		function jO(b) {
			ca&=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535][cb];
			if(cb>0) ca|=(b<<cb); else ca=b; cb+=nb; while(cb>=8) { jH(ca&255); ca>>=8; cb-=8; }
			if(fe>mx||cf)
				if(cf) { nb=gi; mx=(1<<nb)-1; cf=0; }
				else { ++nb; if(nb==12) mx=4096; else mx=(1<<nb)-1; }
			if(b==ec) { while(cb>0) { jH(ca&255); ca>>=8; cb-=8; } jL(); }
		}
	}
	function iT() { R.WD(eP); for(var i=eP.length; i<768; i++) R.WD(0); }
};
_.PDF=function(o,u,f,iC) {
if(!o) o='p'; if(!u) u='mm'; if(!f) f='a4'; if(iC&&!_.PDF.zpipe) iC=0; // _.PDF.zpipe will be used for compression. The technique is used in WOFF as well. 
var O=this,ver='1.0',tc='0 g',dc='0 G',pg=0,eG=[],eN=2,eO,eF={},fnm={},af,lw=0.200025,
pf={ a3:[841.89,1190.55],a4:[595.28,841.89],a5:[420.94,595.28],ltr:[612,792],lgl:[612,1008] },
ph,pw,lci=0,lji=0,tmp,eI={},
f2=function(n){return n.toFixed(2);},f3=function(n){return n.toFixed(3);},
p2=function(v){var n=(v).toFixed(0);return(v<10)?'0'+n:n;},
px=function(v){var n=(v).toFixed(0);return(n.length<10)?(new Array(11-n.length).join('0')+n):n;},
iO=function(s) { eG[pg].push(s); },
iE=function(t,g) {
	var i,l,s=g.s,b,o,x,y=0,c,w,z=g.o; if(!g) g={}; if(!s) s='Unicode';
	if((g.a||z)&&eF[af].md&&eF[af].md[s]&&eF[af].md[s].encoding) {
		b=eF[af].md[s].encoding;
		if(!z&&eF[af].ec) z=eF[af].ec;
		if(!z&&b.codePages) z=b.codePages[0];
		if(_.xT(z=='S')) z=b[z];
		if(z) {
			y=0; x=[]; for(i=0,l=t.length; i<l; i++) {
				c=z[t.charCodeAt(i)]; x.push((c)?String.fromCharCode(c):t[i]);
				if(x[i].charCodeAt(0)>>8) y=1;
			}
			t=x.join('');
		}
	}
	i=t.length; while(!y && i!==0) { if(t.charCodeAt(i-1)>>8) y=1; i--; }
	if(!y) return t; x=g.n?[]:[254,255];
	for(i=0,l=t.length; i<l; i++) {
		c=t.charCodeAt(i);
		w=c>>8; if(w>>8) throw new Error("Character at position "+i.toString(10)+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");
		x.push(w); x.push(c-(w<<8));
	}
	return String.fromCharCode.apply(null,x).replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
},
iF=function(n,s) {
	if(!n) n=eF[af].fn; if(!s) s=eF[af].fs;
	if(!fnm[n]||!fnm[n][s]) throw new Error("Unable to look up font label for font '"+n+"', '"+s+"'. Refer to GF() for available fonts.");
	return fnm[n][s];
},k={pt:1,mm:72/25.4,cm:72/2.54,in:72}[u];

if(!k) throw('Invalid unit: '+u); if(!pf[f]) throw('Invalid format: '+f); ph=pf[f][1]/k; pw=pf[f][0]/k;
if(o=='p') { if(pw>ph) { tmp=pw; pw=ph; ph=tmp; } }
else if(o=='l') { if(ph>pw) { tmp=pw; pw=ph; ph=tmp; } }
else throw('Invalid orientation: '+o);

O.inf={title:'',subject:'',author:'',keywords:'',creator:''};
O.fs=16;
O.AP=function() {
	pg++; eO=1; eG[pg]=[]; iO(f2(lw*k)+' w'); iO(dc);
	if(lci!==0) iO(lci.toString(10)+' J');
	if(lji!==0) iO(lji.toString(10)+' j');
};
O.TX=function(t,x,y,g) {
	var z=O.xT(t),q,s,i;
	if(z=='L') { t=t.toString(); z='S'; }
	if(z=='S' && t.match(/[\n\r]/)) t=t.split(/\r\n|\r|\n/g);
	if(!g) g={}; if(!g.n) g.n=1; if(!g.a) g.a=1;
	if(z=='S') s=iE(t,g);
	else if(z=="A") { q=t.concat(); for(i=q.length-1; i!==-1; i--) q[i]=iE(q[i],g); s=q.join(") Tj\nT* ("); }
	else throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');
	iO('BT\n/'+af+' '+O.fs+' Tf\n'+O.fs+' TL\n'+tc+'\n'+f2(x * k)+' '+f2((ph-y)*k)+' Td\n('+s+') Tj\nET');
	return this;
};
O.line=function(x1,y1,x2,y2) { iO(f2(x1*k)+' '+f2((ph-y1)*k)+' m '+f2(x2*k)+' '+f2((ph-y2)*k)+' l S'); return this; };
O.DL=function(n,x,y,s,q) {
	var i,l,t,x2,y2,x3,y3,x4,y4; s=(!s)?[1,1]:s;
	iO(f3(x*k)+' '+f3((ph-y)*k)+' m '); l=n.length;
	x4=x; y4=y; for(i=0; i<l; i++) {
		t=n[i]; if(t.length==2) { x4=t[0]*s[0]+x4; y4=t[1]*s[1]+y4; iO(f3(x4*k)+' '+f3((ph- y4)*k)+' l'); }
		else {
			x2=t[0]*s[0]+x4; y2=t[1]*s[1]+y4; x3=t[2]*s[0]+x4; y3=t[3]*s[1]+y4; x4=t[4]*s[0]+x4; y4=t[5]*s[1]+y4;
			iO(f3(x2*k)+' '+f3((ph-y2)*k)+' '+f3(x3*k)+' '+f3((ph-y3)*k)+' '+f3(x4*k)+' '+f3((ph-y4)*k)+' c');
		}
	}
	iO(q); return this;
};
O.DR=function(x,y,w,h,s) { iO([f2(x*k),f2((ph-y)*k),f2(w*k),f2(-h*k),'re',s].join(' ')); return this; };
O.DG=function(x1,y1,x2,y2,x3,y3,s) { O.DL([[x2-x1,y2-y1],[x3-x2,y3-y2],[x1-x3,y1-y3]],x1,y1,[1,1],s); return this; };
O.roundedRect=function(x,y,w,h,rx,ry,s) {
	var a=4/3*(Math.SQRT2-1);
	O.DL([
		[(w-2*rx),0],[(rx*a),0,rx,ry-(ry*a),rx,ry],
		[0,(h-2*ry)],[0,(ry*a),-(rx*a),ry,-rx,ry],
		[(-w+2*rx),0],[-(rx*a),0,-rx,-(ry*a),-rx,-ry],
		[0,(-h+2*ry)],[0,-(ry*a),(rx*a),-ry,rx,-ry]
	],x+rx,y,[1,1],s); return this;
};
O.DA=function(x,y,rx,ry,s) {
	var lx=4/3*(Math.SQRT2-1)*rx,ly=4/3*(Math.SQRT2-1)*ry;
	iO([
		f2((x+rx)*k),f2((ph-y)*k),'m',f2((x+rx)*k),f2((ph-(y-ly))*k),
		f2((x+lx)*k),f2((ph-(y-ry))*k),f2(x*k),f2((ph-(y-ry))*k),'c'
	].join(' '));
	iO([f2((x-lx)*k),f2((ph-(y-ry))*k),f2((x-rx)*k),f2((ph-(y-ly))*k),f2((x-rx)*k),f2((ph-y)*k),'c'].join(' '));
	iO([f2((x-rx)*k),f2((ph-(y+ly))*k),f2((x-lx)*k),f2((ph-(y+ry))*k),f2(x*k),f2((ph-(y+ry))*k),'c'].join(' '));
	iO([f2((x+lx)*k),f2((ph-(y+ry))*k),f2((x+rx)*k),f2((ph-(y+ly))*k),f2((x+rx)*k),f2((ph-y)*k),'c',s].join(' '));
	return this;
};
O.SF=function(n,s) { af=iF(n,s); return this; };
O.SL=function(s) { af=iF(null,s); return this; };
O.GF=function () {
	// TODO: iterate over fonts array or return copy of fnm instead in case more are ever added.
	var l={},n,s,t;
	for(n in fnm) if(fnm.hasOwnProperty(n)) { l[n]=t=[]; for(s in fnm[n]) if(fnm[n].hasOwnProperty(s)) t.push(s); }
	return l;
};
O.SW=function(w) { iO(f2(w*k)+' w'); return this; };
O.SC=function(a,b,c,d) {
	var v,e=(_.xT(a)=='S')?1:0,t=_.xT(d);
	if(_.xT(b)===""||(t===""&&a==b==c)) v=(e)?(a+' G'):(f2(a/255)+' G');
	else if(t==="") v=(e)?[a,b,c,'RG'].join(' '):[f2(a/255),f2(b/255),f2(c/255),'RG'].join(' ');
	else v=(e)?[a,b,c,d,'K'].join(' '):[f2(a),f2(b),f2(c),f2(d),'K'].join(' ');
	iO(v); return this;
};
O.SB=function(a,b,c,d) {
	var v,e=(_.xT(a)=='S')?1:0,t=_.xT(d);
	if(_.xT(b)===""||(t===""&&a==b==c)) v=(e)?(a+' g'):(f2(a/255)+' g');
	else if(t==="") v=(e)?[a,b,c,'rg'].join(' '):[f2(a/255),f2(b/255),f2(c/255),'rg'].join(' ');
	else v =(e)?[a,b,c,d,'k'].join(' '):[f2(a),f2(b),f2(c),f2(d),'k'].join(' ');
	iO(v); return this;
};
O.TC=function(a,b,c) {
	tc=((a==b&&a==c)||(_.xT(b)===''))?(f3(a/255)+' g'):([f3(a/255),f3(b/255),f3(c/255),'rg'].join(' '));
	return this;
};
O.SP=function(s) { lci=s; iO(s.toString(10)+' J'); return this; };
O.SJ=function(s) { lji=s; iO(s.toString(10)+' j'); return this; };
O.GD=function(q,r,x,m) {
	var n,p,a,i,d,t,v,dt=new _.Bin(),kd,eC=[],eL=0,ofx=[]; iR('%PDF-1.3'); 
	for(n=1; n<=pg; n++) {
		iB(); iR('<</Type /Page'); iR('/Parent 1 0 R'); iR('/Resources 2 0 R');
		iR('/Contents '+(eN+1)+' 0 R>>'); iR('endobj');
		p=eG[n].join('\n'); iB(); if(iC) {
			a=[]; for(i=0; i<p.length;++i) a[i]=p.charCodeAt(i);
			t=_.PDF.adler32cs.from(p); d=new _.PDF.Deflater(6); // _.PDF.adler32cs shall be used for compression as well (or deflation??!)
			d.append(new Uint8Array(a)); p=d.flush();
			a=[new Uint8Array([120,156]),new Uint8Array(p),new Uint8Array([t&255,(t>>8)&255,(t>>16)&255,(t>>24)&255])];
			p=''; for(i in a) if(p.hasOwnProperty(i)) p+=String.fromCharCode.apply(null,a[i]);
			iR('<</Length '+p.length+' /Filter [/FlateDecode]>>');
		}
		else iR('<</Length '+p.length+'>>');
		iS(p); iR('endobj');
	}
	ofx[1]=eL; iR('1 0 obj'); iR('<</Type /Pages'); kd='/Kids [';
	for(i=0; i<pg; i++) kd+=(3+2*i)+' 0 R ';
	iR(kd+']'); iR('/Count '+pg); iR('/MediaBox [0 0 '+f2(pw*k)+' '+f2(ph*k)+']'); iR('>>'); iR('endobj');
	for(n in eF) if(eF.hasOwnProperty(n)) {
		v=eF[n]; v.eN=iB(); iR('<</BaseFont/'+v.pn+'/Type/Font');
		if(_.xT(v.ec=='S')) iR('/Encoding/'+v.ec); iR('/Subtype/Type1>>'); iR('endobj');
	}
	for(var w in eI) {
		v=eI[w]; iB(); eI[w].n=eN; iR('<</Type /XObject'); iR('/Subtype /Image');
		iR('/Width '+v.w); iR('/Height '+v.h);
		if(v.cs=='Indexed') iR('/ColorSpace [/Indexed /DeviceRGB '+(v.pal.length/3-1)+' '+(eN+1)+' 0 R]');
		else { iR('/ColorSpace /'+v.cs); if(v.cs=='DeviceCMYK') iR('/Decode [1 0 1 0 1 0 1 0]'); }
		iR('/BitsPerComponent '+v.bpc); if('f' in v) iR('/Filter /'+v.f);
		if('dp' in v) iR('/DecodeParms <<'+v.dp+'>>');
		if('trns' in v && _.xT(v.trns)=="A") {
			t=''; for(i=0; i<v.trns.length; i++) { t+=(v[t][i]+' '+v.trns[i]+' '); iR('/Mask ['+t+']'); }
		}
		if('smask' in v) iR('/SMask '+(eN+1)+' 0 R');
		iR('/Length '+v.data.length+'>>'); iS(v.data); iR('endobj');
	}
	ofx[2]=eL; iR('2 0 obj'); 
	iR('<<'); iR('/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]'); iR('/Font <<');
	for(v in eF) if (eF.hasOwnProperty(v)) iR('/'+v+' '+eF[v].eN+' 0 R');
	iR('>>'); iR('/XObject <<'); for(i in eI) iR('/I'+eI[i].i+' '+eI[i].n+' 0 R'); 
	iR('>>'); iR('>>'); iR('endobj');
	iB(); iR('<<'); iR('/Producer(EF-PDF v.'+ver+')');
	if(O.inf.title) iR('/Title ('+iE(O.inf.title)+')');
	if(O.inf.subject) iR('/Subject ('+iE(O.inf.subject)+')');
	if(O.inf.author) iR('/Author ('+iE(O.inf.author)+')');
	if(O.inf.keywords) iR('/Keywords ('+iE(O.inf.keywords)+')');
	if(O.inf.creator) iR('/Creator ('+iE(O.inf.creator)+')');
	d=new Date(); iR('/CreationDate (D:'+[
		d.getFullYear(),p2(d.getMonth()+1),p2(d.getDate()),
		p2(d.getHours()),p2(d.getMinutes()),p2(d.getSeconds())
	].join('')+')');
	iR('>>'); iR('endobj'); iB(); iR('<<'); 
	iR('/Type /Catalog'); iR('/Pages 1 0 R');
	// TODO: Add zoom and layout modes
	iR('/OpenAction [3 0 R /FitH null]'); iR('/PageLayout /OneColumn');
	iR('>>'); iR('endobj');
	v=eL; iR('xref'); iR('0 '+(eN+1)); iR('0000000000 65535 f ');
	for(i=1; i<=eN; i++) iR(px(ofx[i])+' 00000 n ');
	iR('trailer'); iR('<<'); iR('/Size '+(eN+1)); iR('/Root '+eN+' 0 R'); iR('/Info '+(eN-1)+' 0 R');
	iR('>>'); iR('startxref'); iR(v); iR('%%EOF'); dt.WD(eC.join('\n'));

	return dt.FL(q,r,x,m);

	function iS(s) { iR('stream'); iR(s); iR('endstream'); }
	function iR(s) { eC.push(s); eL+=s.length+1; }
	function iB() { ofx[++eN]=eL; iR(eN+' 0 obj'); return eN; }
};
O.AI=function(e,x,y,w,h,q) {
	var a=_.CVS.RtoI(e,"J",q),d=Object.keys(eI).length,
		v={ w:e.width,h:e.height,cs:'DeviceRGB',bpc:8,f:'DCTDecode',i:d,data:atob(a.substr(a.indexOf('base64,')+7)) };
	eI[d]=v; if(!w&&!h) { w=-96; h=-96; }
	if(w<0) w=(-1)*v.w*72/w/k; if(h<0) h=(-1)*v.h*72/h/k; if(w===0) w=h*v.w/v.h; if(h===0) h=w*v.h/v.w;
	iO('q '+f2(w*k)+' 0 0 '+f2(h*k)+' '+f2(x*k)+' '+f2((ph-(y+h))*k)+' cm /I'+v.i+' Do Q');
	return this;
};
function I() {
	var n,d,t,s,i,j,a,b=[["Helvetica",0,1,2,3],["Times",8,1,4,5],["Courier",0,1,2,3]],l=Object.keys(eF).length+1;
	for(j=0 ; j<b.length ; j++)
		for(i=1; i<b[j].length; i++,l++) {
			t=b[j][0]; n=t.toLowerCase(); d='F'+l; a=nB(b[j][i]); s=nA(b[j][i]);
			eF[d]={ id:d,pn:t+a,fn:n,fs:s,ec:'StandardEncoding',md:{} };
			if(!fnm[n]) fnm[n]={}; fnm[n][s]=d; if(!fnm[t]) fnm[t]={}; fnm[t][a]=d;
		}
	function nA(z) { if(z&8) z-=8; if(z&2) z+=2; return (z&&nB(z).toLowerCase())||"normal"; }
	function nB(z) { return (z?"-":"")+(z&1?"Bold":"")+(z&2?"Oblique":"")+(z&4?"Italic":"")+(z&8?"Roman":""); }
}
I(); af='F1'; O.AP(); return O;
};
_.ICO=function(q,r,v,p) {
	var t=_.xT(q)=="I"?_.CVS.ItoR(q):q.ctx.getImageData(0,0,q.width,q.height),s=new _.Bin([0,0,1,0]),a,b,c,d,e,f,h=1,i=0,j=_.GR.DataToRGB(t),g=_.GR.NEQ(j,p||10);
	s.WD(1,2); a=t.width; b=t.height; a=(a>b?a:b); s.WD(a); s.WD(a); j=_.GR.DTH(a,a,j,v); c=j.length/3; 
	if(c<16) { c=16; s.WD(16); } else { c=256; s.WD(0); }
	s.WD(0); s.WD([1,0],2); s.WD(c==16?(40+(4*c)+(a*a/2)+(a*a/8)):(40+(4*c)+a*a+(a*a/8)),4); s.WD(22,4);
	s.WD([40,a,2*a],4); s.WD(1,2); s.WD(c==16?4:8,2); s.WD(0,4); s.WD(c==16?(a*a/2)+(a*a/8):a*a+(a*a/8),4); s.WD([0,0,0,0],4);
	for(f=0 ; f<c ; f++) s.WD([g[f*3+2],g[f*3+1],g[f*3],0]);
	for(e=a*(a-1) ; e>=0 ; e-=a) for(f=0 ; f<a ; f++) s.WD((c==16?(j[e+f]<<4):j[e+f])+(c==256?0:j[e+(++f)]));
	for(e=a*(a-1)*4 ; e>=0 ; e-=a*4) 
		for(f=0 ; f<a*4 ; f+=32) { g=0; for(h=0 ; h<32 ; h+=4) if(t.data[e+f+h+3]<0.5) g+=1<<((28-h)/4); s.WD(g); }
	s.FL(q,r,"image/x-icon","ico");
};
_.Bin=function(dt,md) {
	var o=this,f=16384,unf;
	o.XX=function() { o.d=[new Uint8Array(f)]; o.p=0; o.o=0; };
	o.WD=function(r,s,e) {
	    var g=r,i; if(r.join||r.split) { for(i in r) o.WD(r.join?r[i]:r.charCodeAt(i),s,e); return; }
	    // solve case -128 (-0x80)
	    if(!s) { g=g.toString(16); s=Math.ceil(g.length/2); if(r<0&&g[1]<8&&g.length%2) s--; } if(r<0) r+=Math.pow(2,8*s);
	    for(i=(e?s-1:0); i!==(e?-1:s); i+=(e?-1:1)) {
	        o.d[o.p][o.o++]=Math.floor(r/Math.pow(2,i*8))&255; if(o.o==f) { o.d[++o.p]=new Uint8Array(f); o.o=0; }
	    }
	};
	o.WB=function(a,e,f,l) { o.WD(a.slice(f||0,l),0,e); };
	o.GD=function(t) { var q=o.RD(); return URL.createObjectURL(new Blob([q],{type:t})); };
	o.FL=function(q,r,x,m) {
		if(md=="E") { m=m||"text/plain"; x=x||"ef"; }
		if(!r) _.DL(o.GD(m),q,x);
		else if(_.xT(r)=="Q") r(o.GD(m),q);
	};
	o.RD=function() {
		var q=new Uint8Array(o.p*f+o.o),b,i,j=0,m;
		for(b in o.d) { m=o.d[b]; for(i=0 ; i<(o.d.length?f:o.o) ; i++) q[j++]=m[i]; }
		return q;
	};
	o.RB=function(a,i,q,e) {
	    var j,n,r=0,b; if(q<0) { n=1; q=-q; } b=e?(q-1)*8:0;
	    for(j=0 ; j<q ; j++,b+=e?-8:8) r+=((a[i++]||0)<<b); return r-(n?r&(1<<(q*8-1)):0);
	};
	o.RT=function(a,i,q) { var r="",j; for(j=0 ; j<q ; j++) r+=String.fromCharCode(a[i+j]); return r; };
	o.AV=function(a,f,v,s,e){
	    var i,g=v,n,w; if(v<0) { n=1; g=-g; } if(!s) { s=1; w=g; while((w>>=8)) s++; }
	    if(n) g+=1<<(s*8-1); for(i=(e?s:0); i!==(e?0:s); i+=(e?-1:1)) a[f+i]=(g>>(i*8))&255;
	};
	/*o.B128={
        E:function(d){ var a=[],c; do { c=d&0x7f; d>>=7; if(a.length<5) a.push(c+(d?128:0)); } while(d); return a.reverse(); },
        D:function(a,i){
            var n=0,j=0,x=i.join?i:[i||0];
            while(j<5) { if((!j&&a[x[0]]==128)||n&0xfe000000) throw("B128-E1"); n=(n<<7)|(a[x[0]]&127); if(!(a[x[0]++]&128)) return n; j++; }
            throw("B128-E2");
        }
    };
    o.B256={
        E:function(d){ return d<253?[d]:(d<506?[255,d-253]:(d<762?[254,d-506]:[253,d/256,d&255])); },
        D:function(a,i){
            var x=i.join?i:[i||0],c=a[x[0]++];
            return c<253?c:(c==253?a[x[0]++]*256+a[x[0]++]:a[x[0]++]+(256-c)*253);
        }
    };*/
	o.XX(); if(dt) o.WD(md=="E"?_.ON(dt):(md=="B"?EFON(dt):dt),0,md=="N"?1:0);
		
	function EFON(V) {
		var T=_.xT(V),q=[],i;
		if(!T) q.push(0);
		else if(T=="L") { q.push(5); q=q.concat(EFON(V.W)); }
		else if(T=="F") { q.push(6); q=q.concat(BS(V.F)); }
		else if(T=="D") { q.push(7); q=q.concat(iB(Math.floor(V.getTime()/1000))); }
		else if(T=="A") { q.push(1); q.push(iA(V.length)); for(i in V) q=q.concat(EFON(V[i])); }
		else if(T=="H") {
			q.push(2); var s=Object.keys(V); q=q.concat(iA(s.length));
			for(i in s) q=q.concat(EFON(s[i])).concat(EFON(V[s[i]]));
		}
		else if(T=="S") { q.push(3); q=q.concat(BS(V)); }
		else if(T=="C") { q.push(11); q=q.concat(V.V); }
		else if(T=="I") { q.push(12); q=q.concat(BS(V.src)); }
		else if(T=="N") {
			if(Math.floor(V)==V) { q.push(8); q=q.concat(iB(V)); }
			else { q.push(9); var e=new Float64Array([V]),c=new Uint8Array(e.buffer); for(i in c) q.push(c[i]); }
		}
		return iA(q.length).concat(q);
	}
	function BS(n) {  var c=atob(_.E64(n)),q=[]; for(var i in c) q.push(c.codePointAt(i)); return q; }
	function iA(n) {
		var d=[],i=0,h=0,k,j;
		while(n>=Math.pow(2,7+7*i) && i<7) { h+=Math.pow(2,7-i); i++; }
		for(j=i ; j>=0 ; j--) { k=Math.floor(n/Math.pow(2,j*8)); n=n%Math.pow(2,j*8); if(j==i) k+=h; d.push(k); }
		return d;
	}
	function iB(n) {
		var d=[],i=0,h=0,k,j; if(n<0) { j=1; n=-n; }
		while(n>=Math.pow(2,6+7*i)) { h+=Math.pow(2,7-i); i++; }
		if(j) h+=Math.pow(2,6-i);
		for(j=i ; j>=0 ; j--) { k=Math.floor(n/Math.pow(2,j*8)); n=n%Math.pow(2,j*8); if(j==i) k+=h; d.push(k); }
		return d;
	}
};
_.ReadBin=function(V,P) {
	if(!P) { V=new Uint8Array(V); P=[0]; }
	var O,L=iB(V,P),T=V[P[0]++],Q,i;
	if(T===0) O=null;
	else if(T==1) { O=[]; Q=iB(V,P); for(i=0 ; i<Q ; i++) O.push(_.ReadBin(V,P)); }
	else if(T==2) { O={}; Q=iB(V,P); for(i=0 ; i<Q ; i++) O[_.ReadBin(V,P)]=_.ReadBin(V,P); }
	else {
		O=V.slice(P[0],P[0]+L-1);
		if(T==5) O=_.L(_.ReadBin(O));
		else if(T==7) O=new Date(iC(O)*1000);
		else if(T==8) O=iC(O);
		else if(T==9) { O=new Uint8Array(O); O=new Float64Array(O.buffer); O=O[0]; }
		else if(T==11) O=new _.Color(O);
		else if(T==12) { T=new Image(); T.src=_.D64(btoa(iA(O))); }
		else if(T!==6) O=_.D64(btoa(iA(O)));
		else O=_.F(_.D64(btoa(iA(O))));
		P[0]+=L-1;
	}
	return O;
	function iA(n) { var d=""; for(var i in n) d+=String.fromCharCode(n[i]); return d; }
	function iB(n,P) {
		var d=0,i=128,h=0,k=n[P[0]++],r=0,j;
		while(k>=(h+i) && r<7) { h+=i; i/=2; r++; } k-=h;
		for(j=r ; j>=0 ; j--) { if(j!==r) k=n[P[0]++]; d+=k*Math.pow(2,j*8); }
		return d;
	}
	function iC(n) {
		var d=0,i=0,h=0,k=n[0],j;
		while(k>=(h+Math.pow(2,7-i))) { h+=Math.pow(2,7-i); i++; } k-=h; h=0;
		if(k>=Math.pow(2,6-i)) { k-=Math.pow(2,6-i); h=1; }
		for(j=0 ; j<=i ; j++) { if(j>0) k=n[j]; d+=k*Math.pow(2,(i-j)*8); }
		if(h) d=-d; return d;
	}
};
_.Color=function(q,a) { return new Color(q); function Color(e) {
	var o=this,t,i,j; o.alp=a;
    o.Val=function(v) {
        t=_.xT(v);
        if(t=="S") {
	        if(v[0]=="#") {
	            i=v.length; v=parseInt("0x"+v).substr(1);
                j={C9:[24,8,255],C7:[16,8,255],C5:[12,4,15,17],C4:[8,4,15,17]}; j=j["C"+i]; o.V=[];
                do { o.V.push((Math.floor(v/Math.pow(2,j[0]))&j[2])*(j[3]||1)); j[0]-=j[1]; }while(j[0]>=0);
	        }
	        else { v=_.ON(v,1); o.alp=v[1]; v=v[0]; t="N"; }
	    }
	    if(t=="N") o.V=o.alp?[Math.floor(v/16777216),(v>>16)&0xff,(v>>8)&0xff,v&0xff]:[(v>>16)&0xff,(v>>8)&0xff,v&0xff,255];
	    else if(t=="H") {
	        if(v.r||v.g||v.b) o.V=[v.r||0,v.g||0,v.b||0];
	        else if(v.h||v.s||v.l) {
		        var G=["FXO","RFO","OFX","ORF","XOF","FOR"],M=Math.floor(v.h),H=[],S,L;
		        if(M>=6) M-=6; L=Math.floor((v.h-M)*255); S={F:255,O:0,X:L,R:255-L};
		        for(i=0 ; i<3 ; i++) {
			        H.push(S[G[M][i]]); H[i]+=Math.floor(((128-H[i])*(255-v.s))/255);
			        if(v.l>128) H[i]+=Math.floor(((255-H[i])*(v.l-128))/127);
			        else H[i]-=Math.floor((H[i]*(128-v.l))/128);
		        }
		        o.V=H;
	        }
	        o.V.push(_.xT(v.a)?v.a:255);
	    }
	    else if(t=="A") o.V=_.aC(v);
	    else if(t=="C") o.V=_.aC(v.V);
	    if(!o.V) o.V=[0,0,0]; if(o.V.length<4) o.V.push(255);
    };
	o.toString=function() { return o.DOM().outerHTML; };
	o.HSL=function() {
		var c=o.V,G,M,H=[],i; for(i=0 ; i<3 ; i++) c[i]=Math.floor(c[i]);
		G=Math.max(c[0],c[1],c[2]); M=Math.min(c[0],c[1],c[2]); H=[0,G-M,Math.floor((G+M)/2)];
		if(H[1]>0) H[0]=(G==c[0])?((c[1]-c[2])/H[1]+((c[1]<c[2])?6:0)):((G==c[1])?((c[2]-c[0])/H[1]+2):((c[0]-c[1])/H[1]+4));
		return H;
	};
	o.REV=function(x) { var v=o.V; return (v[0]+v[1]*2+v[2])<384?(x?255:'#fff'):(x?0:'#000'); };
	o.CSS=function() { return "#"+_.a0(o.Int(),o.alp?8:6,16); };
	o.DOM=function(w) {
		var f=_.xM('div',0,0,[w||"10em"],{ border:"1px dashed #000",background:o.CSS(),color:o.REV(),textAlign:"center" });
		f.innerText=o.CSS(); return f;
	};
	o.Int=function() { return o.alp?(o.V[0]*16777216)+(o.V[1]<<16)+(o.V[2]<<8)+o.V[3]:(o.V[0]<<16)+(o.V[1]<<8)+o.V[2]; };
	o.Cpy=function() { return new _.Color(o.V,o.alp); };
	o.EFON=function() { return _.ON([o.Int(),(o.alp?1:0)]); };
	o.EQ=function(c) { for(var i=0 ; i<4 ; i++) if(c.V[i]!==o.V[i]) return; return 1; };
	o.Val(e); return o;
} };
_.TTP=function(p) {
	var r=_.xI(p.r);
	if(p.alr) { if(!r.tta) { r.tta=iA(); _.xW(r.tta,"alr",1); setTimeout(iC,p.end||3000,"tta"); } }
	else _.xE(r,["mouseenter","mouseover"],iD);
	function iA(e) {
		var g=_.xM("div",p.id,e?document.body:r.parentNode,p.d||[200],"TTP",e?u:r);
		if(e) _.xP(g,{ l:e.pageX,t:e.pageY });
		g.innerHTML=p.txt; _.xC(g,{opacity:1,display:""}); return g;
	}
	function iB(e) { _.xX(r[e]); delete r[e]; }
	function iC(e) { if(r[e]) { r[e].style.opacity=0; setTimeout(iB,1000,e); } }
	function iD(e) { if(!r.ttp) r.ttp=iA(e); setTimeout(iC,p.end||1000,"ttp"); }
};
_.RIB=function(p){
	if(!p) p={}; var f=_.xM("div",0,document.body,[0,"100vh"],"RBX"),g,h,i,x,y,o;
	_.xP(f,{l:window.scrollX,t:window.scrollY}); _.Rib=f; _.SE.Add(f);
	_.CTR({c:"SBT",r:f,txt:"\ue014",clk:iA.bind(this,1),s:{flex:"initial"}});
	f.rib=_.xM("div",0,f,0,"RBN"); _.xP(f,{l:0,t:0});
	_.xE(f.rib,["click","mouseleave"],iA.bind(this,0));
    if(p.clk) _.xW(_.xM("object",0,_.xM("div",0,f.rib,["100%"],"RBC"),[100,100]),0,{data:(p.clk+".svg")});
	f.Bar=_.xM("ul",0,f.rib);
	f.Col=function(q,m,a) {
		if(m&&!m.bx) m.bx=_.xM("ul",0,m);
		var w=_.xM("li",'',m?m.bx:f.Bar); w.txt=_.xM("div",0,w);
		w.txt.innerText=q.tit; w.pnt=m; _.xW(w,"err",a);
		_.xE(w.txt,"click",q.Focus.bind(this,1),1); return w;
	};
	f.XCol=function(q) { _.xX(q&&q.pnt&&!q.pnt.bx.children.length?q.pnt.bx:q); };
	function iA(c) { _.xW(f.rib,"open",c,c); }
};
_.FRM=function(p) {
	var u,f=_.xM("form",p.id||("C"+_.aS()),document.body,p.d,p.s),g=_.xM("div",0,f,0,"FRT"),z,i,a,b=["xcls","xhid"];
	_.xW(f,"err",p.err); f._tt=_.xM("span",0,g); f.btn=_.xM("div",0,g); f.ctrl={};
	if(p.atc) { f.atc=_.xI(p.atc,1); if(!f.atc) return; if(!f.atc.ref) f.atc.ref={}; f.atc.ref[f.id]=f; }
	f.Focus=function(c){
		_.xW(f,"fcs",1); _.xW(f,"off"); if(_.Sys.prf) _.xW(_.Sys.prf,"fcs"); _.Sys.prf=f; _.xC(f,{zIndex:(p.err?1000000:0)+_.Sys.LT++});
		if(c) _.xP(f,{
			l:Math.max((window.innerWidth-f.clientWidth)/2+window.scrollX,0),
			t:Math.max((window.innerHeight-f.clientHeight)/2+window.scrollY,0)
		});
	};
	_.mC(f,function(e,s){ if(s==2) f.Focus(); });
	f.Close=function(){
		if(p.bc&&!p.bc()) return 1; var c;
		if(f.sv&&f.sv[1]) {
			if(!f.sv[0].parentNode) f.sv[0]=_.DBX({
				atc:f,tit:f.tit+": "+(_.Cfg.DBX.Tit||""),txt:_.Cfg.DBX.Con||"",
				ok:function() { f.sv[1]=0; _.xW(f,"sv"); f.Close(); },cnf:1
			});
			else f.sv[0].Focus(); return 1;
		}
		if(f.ref) for(var i in f.ref) if(f.ref[i].Close()) c=1; if(c) return 1;
		if(f.rblk) f.atc.XBLK(f.rblk); if(f.atc) delete f.atc.ref[f.id];
		_.xX(f); if(_.Rib) _.Rib.XCol(f.rbc); if(p.cls) p.cls();
	};
	f.Hide=function(){ _.xW(f,f.rbc?"off":"flc",1,f.rbc?null:1); };
	f.Block=function(v) {
		if(!v) v={}; if(!f.blk) f.blk=_.xM("div",0,f,0,"FBK SCN");
		return _.CTR({ id:v.id,r:f.blk,c:"DIV",s:{display:"flex",flexDirection:"row"},lf:1,chl:[
			{c:"DIV",html:v.txt||""},{c:"PRG",off:(v.prg?0:1)}
		] });
	};
	f.XBLK=function(e) { _.xX(e); if(!f.blk.children.length) { _.xX(f.blk); f.blk=null; } };
	f.Val=function(v) {
	    if(!v) v=Object.keys(f.ctrl); var t=_.xT(v),e,j,r,k,q,w;
	    if(t=="A") {
	        r={};
	        for(j in v) {
	            q=v[j].split(/\?/g); k=q[0]; q=q[1]; e=f.ctrl[k];
	            if(!e||e.off||!e.Val) continue; if(!q) q=e.qs;
	            if(e.validity&&!e.validity.valid) return iA(e,"X");
	            w=e.Val(null,q); if(e.req&&(!_.xT(w)||w==="")) return iA(e,"E");
	            r[k]=w;
	        }
	        return r;
	    }
	    else if(t=="H") for(j in v) f.ctrl[j].Val(v[j]);
	};
	z=[["\ue000",f.Close],["\ue003",f.Hide]];
	for(i=0 ; i<z.length ; i++) {
		a=_.CTR({ c:"SBT",r:f.btn,txt:z[i][0],clk:z[i][1] });
		_.xB(f,b[i],u,_.xW.bind(this,a,"off"));
	}
	_.mD(f._tt,f); _.mR(f,p.rsx?2:0);
	_.xB(f,"tit",function(){ return f._tt.innerHTML; },function(v){
		if(f.rbc) f.rbc.txt.innerHTML=v||""; f._tt.innerHTML=v||"";
	});
	b.push("tit","drg"); for(i in b) f[b[i]]=p[b[i]];
	
	if(p.p&&p.p!=="C") {
		if(f.atc&&p.p=="P") p.p={l:_.Cfg.FRM.P||32,t:_.Cfg.FRM.P||32};
		_.xP(f,p.p,f.atc);
	}
	if(_.Rib&&!p.xico) f.rbc=_.Rib.Col(f,f.atc?f.atc.rbc:0,p.err);
	if(p.blk&&f.atc) f.rblk=f.atc.Block(p.blk); if(p.cnf) f.sv=[0,0];
	f.NS=function() { if(f.sv&&f.ok) { f.form.sv[1]=1; _.xW(f,"sv",1); } };
	if(p.chl) _.CTR(p.chl,f); f.Focus(p.p=="C"?1:0); _.RC(function(){ if(p.onl) p.onl(f); f.ok=1; }); return f;
	
	function iA(e,m) {
	    var v={ E:{ EN:"Missing",ZH:"漏添" },X:{ EN:"Wrong input",ZH:"输入有误" } };
	    m=e.err||v[m]; if(m) _.TTP({r:e,alr:1,txt:m});
	}
};
_.DBX=function(p){
    var f=_.FRM({ id:p.id,atc:p.atc,blk:p.blk||{},err:1,xhid:1,
	drg:1,tit:p.tit,p:"P",cls:function(){ f.atc.Focus(); },chl:[
		{c:"DIV",html:p.txt,lf:1},
		{c:"BTN",svg:_.SVI[0],clk:iA.bind(this,p.ok)},
		{c:"BTN",svg:_.SVI[1],off:(p.cnl||p.cnf?0:1),clk:iA.bind(this,p.cnl),lf:1}
	] });
	return f; function iA(e) { f.Close(); if(e) e(); }
};
_.SM=function(p) {
	if(_.xT(p)=="S") p={ p:p }; var o,h=new XMLHttpRequest(),v,m="GET",i;
	if(!p.prg) o=p.frm?p.frm.Block({prg:1}):(_.CTR?_.CTR({c:"PRG",r:_.PG,lf:1}):_.xM("div",0,_.PG));
	if(_.xT(p.pmt)) p.p+='?EFD='+_.ON({C:_.Crd||{},L:_.Lang,V:p.pmt});
	if(p.p.length>2000) { v=p.p.split(/\?/); m="POST"; p.p=v[0]; v=v[1]; }
	h.open(m,p.p); if(!p.hdr) p.hdr={}; if(m=="POST") p.hdr["Content-type"]="application/x-www-form-urlencoded; charset=utf-8";
	if(p.hdr) for(i in p.hdr) h.setRequestHeader(i,p.hdr[i]); if(p.bin) h.responseType='arraybuffer';
	h.onload=function(s) {
		var x=p.bin?h.response:h.responseText,c;
		if(h.status!==200) return iA();
		if(p.bin) x=window.URL.createObjectURL(new Blob([x]));
		if(p.frm) p.frm.XBLK(o); else _.xX(o);
		if(p.cbk) p.cbk(x); else { x=_.ON(x,'-'); c=new Function('V',x[0]); c(x[1]); }
	};
	h.onprogress=function(e) {
		if(p.prg) return p.prg(h,e); var w=p.frm?o.children[1]:o; w.max=e.total;
		if(_.xT(w.val)) w.val=e.loaded; else w.innerHTML=e.loaded;
	};
	h.onerror=iA; h.send(v);
	
	function iA() {
		var x=p.bin?h.response:h.responseText,a; if(!x) x=p.p+" => "+h.status; _.xX(o);
		try { x=(p.bin?(new TextDecoder()).decode(x):x); } catch(e){ }
		if((h.status>=100&&h.status<200)||h.status==504) { _.Alert({tit:"",txt:x,err:1}); return h.send(v); } if(p.err) p.err(h);
	}
};
_.Alert=function(p) {
	if(_.xT(p)=="S") p={tit:p};
	var f=_.xM("div",0,_.PG,0,"ALR"); _.xW(f,"err",p.err);
	_.xM("div",0,f).innerHTML=p.tit||""; _.xM("div",0,f).innerHTML=p.txt||"";
	if(p.err||p.sfx) { /*_.Sfx[p.sfx||p.err].currentTime=0; _.Sfx[p.sfx||p.err].play();*/ }
	setTimeout(_.xX,p.end||3000,f); return f;
};
_.STL=function(p,r) {
    var f=_.xM("style",0,r||document.head,0,0,r?r.children[0]:u); if(r&&r.id==="") r.id="S"+_.aS();
	f.kh={};
	f.Add=function(c,k) {
	    var t=_.xT(c),i;
	    if(t=="S") { if(!k) k=_.aS(); f.kh[k]=f.sheet.cssRules.length; f.textContent+=(r?'#'+r.id+' ':"")+c+"\n"; }
	    else if(t=="A") for(i in c) f.Add(c[i]); else for(i in c) f.Add(c[i],i);
	};
	f.Del=function(v) {
	    var w=iA(),t=_.xT(v),i=(t=="S"?f.kh[v]:v),j; if(!t) return;
	    if(t=="S") i=f.kh[v]; else { i=v; for(j in f.kh) if(f.kh[j]==i) { v=j; break; } }
	    delete f.kh[v]; for(j in f.kh) if(f.kh[j]>i) f.kh[j]--; w.splice(v,1); iB(w);
	};
	f.Get=function(v) { if(_.xT(v)=="S") v=f.kh[v]; return _.xT(v)?f.sheet.cssRules[v]:null; };
	f.Rul=function(c,d) {
	    if(_.xT(c)=="S") c=f.kh[c];
		var z=f.sheet.cssRules[c],w=_.xM("div",0,document.body,0,iC(z)),h=iA(); _.xC(w,d);
		h[c]=z.selectorText+"{"+_.xW(w,"style","~")+"}"; iB(h); _.xX(w);
	};
	if(p) f.Add(p); return f;
	function iA() { return f.textContent.split(/\n/g); }
	function iB(w) { f.textContent=w.join("\n"); }
	function iC(z) { var c={},i; for(i=0 ; i<z.style.length ; i++) c[z[i]]=z[z[i]]; return c; }
};
_.RC=function(f) {
    if(f) _.RR[_.RR[2]].push(f); if(_.RR[3]) return; _.RR[3]=1; iA();
    function iA() {
        if(_.RQ||_.RR[2]) return setTimeout(iA,50); _.RR[3]=0;
        _.RR[2]=1; var a; while((a=_.RR[0].pop())) a(); _.RR[0]=_.RR[1]; _.RR[1]=[]; _.RR[2]=0;
    }
};
_.Use=function(s,c) {
	var i,x; if(_.xT(s)=="A") { for(i in s) _.Use(s[i]); return _.RC(c); }
	s=s[0]=='*'?s.substr(1):(_.root+"/"+s);
	x=document.getElementsByTagName("script"); for(i in x) if(x[i].itd==s) return _.RC(c);
	_.RQ++; x=_.xM("script",0,document.head); x.itd=s; x.load(s+".js",function(){ _.RQ--; }); _.RC(c);
};
_.CSS=function(f,c) {
	var y,i; if(_.xT(f)=="A") { for(i in f) _.CSS(f[i]); return _.RC(c); }
	f=f[0]=='*'?f.substr(1):(_.root+"/"+f);
	_.RQ++; y=_.xM("link",0,document.head); y.onload=function() { _.RQ--; _.RC(c); };
	y.onerror=_.CSS.bind(this,f,c); _.xW(y,0,{ type:"text/css",rel:"Stylesheet",href:f+".css" });
};
_.Die=function(m) {
	window.onbeforeunload=null; _.Alert({ txt:m,tit:"",err:1 });
	setTimeout(function() { window.location.href=""; },3000);
};
_.CTR=function(p,r,c){
	var f,i,a=["lr","lf","off","err"],b;
	if(_.xT(p)=="A") { for(i in p) { p[i].r=r; p[i]=_.CTR(p[i]); } return p; } if(!p.c) p.c="DIV";
	if(!p.r) p.r=r; f=_.xM(p.c[0]=='*'?p.c.substr(1):"div",p.id,p.r,p.d,p.s,p.u);
	_.xP(f,p.p); i=f; while(i&&i.nodeName!=="FORM") i=i.parentNode; f.form=i; f.name=p.n; f.ee={};
	for(i in a) _.xB(f,a[i],1,1);
	_.xB(f,"rdo",1,function(v) {
		_.xW(f,"rdo",v);
		if(v&&f.req) { f.req=0; f._rq=1; }
		if(!v&&f._rq) f.req=1;
		if(f.$rdo) f.$rdo(v);
	});
	_.xB(f,"req",1,function(v){
		if(f.rdo) { f._rq=v; if(v) return; }
		_.xW(f,"req",v); if(f.$req) f.$req(v);
	});
	if(p.ttp) {
		if(_.xT(p.ttp)=="S") p.ttp={ txt:p.ttp }; p.ttp.r=f;
		if(_.TTP) _.RC(iA); else _.Use("acx/TTP",iA);
	}
	_.xB(f,"upk",1,function(v){
	    _.xW(f,"upk",v?1:0);
	    if(!v&&f.ftc) { delete f.clk; _.xX(f.ftc); }
	    if(v&&!f.ftc) {
	        if(v==1) v={onl:function(e) { a=Object.keys(e.ftp); f.fn=a[0]; f.Val(e.ftp[a[0]]); e.flu.value=null; }};
	        if(_.xT(v)=="Q") v={onl:v}; v.c="FLU"; v.r=f; v.off=1; f.ftc=_.CTR(v); f.clk=function() { f.ftc.flu.click(); };
	    }
	    if(f.$upk) f.$upk(v);
	});
	if(f.form&&p.n) f.form.ctrl[p.n]=f;
	f.fw=function(e){ if(f.form&&!f.form.ok) setTimeout(f.fw,30,e); else if(e) e(); };
	a.push("rdo","req","qs","upk"); for(i in a) f[a[i]]=p[a[i]];
	if(p.c[0]!=='*') {
		_.xW(f,"ctrl",p.c);
		if(!_.CTRL[p.c]) _.Use("ctrl/"+p.c,function(){ _.CTRL[p.c](f,p); });
		else _.CTRL[p.c](f,p);
	}
	if(c) _.RC(c);
	if(p.csn) {
	    if(_.xT(p.csn)=="S") p.csn=p.csn.split(/ /g);
	    for(i in p.csn) f.classList.add(p.csn[i]);
	} return f;
	
	function iA() { if(_.TTP) _.TTP(p.ttp); else setTimeout(iA,50); }
};
_.HTEL=function(i) { i=_.xI(i,1); var j=i?i.innerHTML:""; _.xX(i); return j; };
_.TTF=function(F) {
    var o=this,p=new _.Bin(); o.crt=iD(); o.em=2048; o.glyph={"32":[[[0,0],[1,0],[1,1]]]}; o.cfg=0;
    o.ver=[1,0,1,0]; o.atr=["copyright ©EF-SDK 高欧凡 2020","EF-SDK","Reg.","Auto.","EF-SDK (www.efsdk.com)",""];
    o.Out=function(m) {
        var d=new _.Bin(),a=[],b,c,h,e,f,g,i,j,k,t="OS/2,cmap,glyf,head,hhea,hmtx,loca,maxp,name,post".split(/\,/g),
            adr=[],mp=0,mc=0,mop=0,moc=0,moo=0,mor=0,gm={},lb=[],z=[],sc=[],gf=o.glyph,gk=Object.keys(gf),gl=gk.length;
        for(i in t) z.push(new _.Bin()); d.WD([1,0,10,128,3,32],2,1);
        for(i in gf) {
            a.push(i*1);
            if(_.xT(gf[i])=="A") {
                e=32767; c=[0,o.cfg&1?[0,0,o.em,o.em]:[e,e,-e,-e],[],[],[]]; e=0; g=null; if(gf[i].length>mc) mc=gf[i].length;
                for(j in gf[i]) {
                    k=gf[i][j]; e+=k.length; c[2].push(e-1);
                    for(f in k) {
                        b=Math.V2(k[f][0],k[f][1]);
                        if(!(o.cfg&1)) {
                            if(b.x<c[1][0]) c[1][0]=b.x; if(b.y<c[1][1]) c[1][1]=b.y;
                            if(b.x>c[1][2]) c[1][2]=b.x; if(b.y>c[1][3]) c[1][3]=b.y;
                        }
                        c[3].push(g?b.sub(g,1):b); g=b; c[4].push(k[f][2]?0:1);
                    }
                }
                lb.push(Math.floor((o.em-(c[1][2]-c[1][0]))/2)); /* left bearing*/ if(e>mp) mp=e; gm[i]=c;
            }
            else {
                // compound
            }
        }
        a=_.aT(a,1); b=[a[0],a[0]]; for(i=1 ; i<a.length ; i++) if(a[i]==b[1]+1) b[1]++; else { sc.push(b); b=[a[i],a[i]]; } sc.push(b);
        a=z[0]; b=o.em; a.WD([
            2,b,400,5,4,b/2,b/2,0,0,b/2,b/2,0,b/2,b/16,15*b/32,0,[0,1024,0,0,0],[0,1,8192,0,0,0,0,0],25958,13600,64,32,
            sc[sc.length-1][1],b,0,0,b,0,[0,1],[0,0],0,b,0,32,0
        ],2,1);
        a=z[1]; c=sc.length+1; a.WD([0,2,0,3,[0,20],3,1,[0,20]],2,1);
        e=Math.pow(2,Math.floor(Math.log2(c))); a.WD([4,(9+gl+4*c)*2,0,c*2,2*e,Math.log2(e),2*(c-e)],2,1);
        for(j=0 ; j<2 ; j++) { for(i in sc) a.WD(sc[i][1-j],2,1); a.WD(65535,2,1); if(!j) a.WD(0,2,1); }
        f=0; for(i in sc) { a.WD(f-sc[i][0],2,1); f+=(sc[i][1]-sc[i][0])+1; } a.WD(1,2,1);
        c+=gl+1; for(i=0 ; i<c ; i++) a.WD(0,2); a=z[2]; for(i in gk) { h=gm[gk[i]]; adr.push(a.RD().length);
            if(h[0]) { } // compound
            else {
                a.WD([h[2].length,h[1],h[2],0],2,1); a.WD(h[4]);
                for(c in h[3]) a.WD(h[3][c].x,2,1); for(c in h[3]) a.WD(h[3][c].y,2,1);
            }
        }
        adr.push(a.RD().length);
        a=z[3]; a.WD([o.ver,0,0,24335,15605,0,b],2,1); a.WD([0,o.crt,0,iD()],4,1); a.WD([0,0,b,b,0,6,2,1,0],2,1);
        z[4].WD([1,0,b,0,0,b,0,0,b,1,0,0,0,0,0,0,0,1],2,1); z[5].WD([b,lb],2,1);
        z[6].WD(adr,4,1); z[7].WD([1,0,adr.length-1,mp,mc,mop,moc,2,0,0,0,0,0,0,moo,mor],2,1);
        a=z[8]; j=o.atr; f=[]; e=new _.Bin();
        c=[j[0],j[1],j[1]+" "+j[2],j[1]+" "+j[2],j[1]+" "+j[2],o.ver.join('.'),j[1],"EF-SDK","EF-SDK (www.efsdk.com)",j[3],"",j[4],j[5],"",_.b64,""];
        for(j=0 ; j<2 ; j++) for(i in c) { e.WD(c[i],j?2:1,1); f.push(e.RD().length); }
        a.WD([0,32,390],2,1); for(j=0 ; j<2 ; j++) for(i=0 ; i<c.length ; i++) {
            b=j*16+i; a.WD([j?3:1,j,j?1033:0,i<14?i:(i==14?19:256),f[b]-(i||j?f[b-1]:0),i||j?f[b-1]:0],2,1);
        }
        a.WD(e.RD()); z[9].WD([196608,0,0,1,0,0,0,0],4,1);
        b="3470516289"; a=172; c=0; for(i in b) { e=b[i]; t[e]=iZ(t[e],z[e].RD()); t[e][2]=a; a+=t[e][4].length; c+=t[e][1]; }
        p.AV(t[3][4],7,0xb1b0afba-c,4,1); for(i in t) { d.WD(t[i][0]); for(j=1 ; j<4 ; j++) d.WD(t[i][j],4,1); }
        for(i in b) d.WD(t[b[i]][4]); return m=="URL"?d.GD("application/octet-stream"):(m=="FL"?d.FL(o.atr[1],null,"ttf","application/octet-stream"):d);
    };
    if(_.xT(F)=="S") iC(); else if(F&&p.RB(F,0,4,1)==65536) iB(); return o;
    
    function iA(a) { var i,w; for(i=0,w=0 ; i<a.length ; i+=4) w+=p.RB(a,i,4,1); return w&0xffffffff; }
    function iB() {
        var n=p.RB(F,4,2,1),x=12,z={},i;
        for(i=0 ; i<n ; i++,x+=16) z[p.RT(F,x,4)]=[p.RB(F,x+8,4,1),p.RB(F,x+12,4,1)];
        
        
        x=z.head[0]; o.em=p.RB(F,x+18,2,1); o.crt=p.RB(x+24,4);
        // read glyphs data
        
        
    }
    function iC() {
        var x=0,v,d=F.split(/\#/g),h=d[0],c,i,q,j,k,n,t,b={}; for(i in _.b64) b[_.b64[i]]=i*1;
        while(x<h.length) {
            v=b[h[x++]]; if(v>31) v=(v-32)*64+b[h[x++]]; v*=64;
            v=o.glyph[(v+b[h[x++]])+""]=[]; n=0; c=b[h[x++]]+1; if(c>32) { n=1; c-=32; }
            if(n) { /* compound glyph */ }
            else for(i=0 ; i<c ; i++) {
                v.push([]); q=b[h[x++]]+3; n=[];
                for(j=0 ; j<q ; j+=6) { t=b[h[x++]]; for(k=0 ; k<6 ; k++) n.push(t&(1<<k)); }
                for(j=0 ; j<q ; j++) v[i].push([b[h[x++]]*64+b[h[x++]]-1024,b[h[x++]]*64+b[h[x++]]-1024,n[j]?1:0]);
            }
        }
        if(d.length>1) o.cfg=b[d[1][0]];
    }
    function iD() { return Math.floor((Date.now()-(new Date(1904,1,1)).getTime())/1000); }
    function iZ(t,a) { var b=Array.from(a); while(b.length%4) b.push(0); return [t,iA(b),0,a.length,b]; }
};
_.Go=function(p) {
delete _.Go; _.aM(_.Cfg,p.cfg); var O,j,F=["IFrame","Audio","Script"];
O=new _.TTF("K0017i9w0J0x0J0x0I0x0s0x0r0w0r0v0r0v0s0v0I0v0J0pGGGGaqOADrpzRqDzdmPwcn1rmnwmyrIk6v_hVAjk6EvmyE-rmFcwcBozdACzRBdADBRBpCDAOHex7G-rdGolkBhimv_fFqKimlDlkl1rdkNx7poAOqaBpK011j2a99k0J0l0J0l0I0l0t0z0t0z0H0k0H0j0H0j0I0j0J0k0J0A0J0AJIJB0I0B0s0AJriA0r0k0r0jirij0s0j0I0j0J0j2a99s0B0t0B0t0A0t0l0H0l0H0z0s0z0r0z0r0A0r0B0s0B0I0B0IJAJJ0A0J0k0IJjiI0j0s0j0rijir0k0r0A0r0B0K020jiia8j0I0j0J0k0J0I0J0IJIJJ0I0J0k0IJjiI0j0k0j0jijij0k0j0I0j0J0k0J0l0J0l0I0l0l0H0l0H0H0k0H0j0H0K0307i9k0J0l0J0l0I0l0k0l0j0k0j0j0j0j0k0j0I0j0J0K04100w0I0k0w0w0k000I0I0w0w0I0k0K05100k0I0k0k0w0w000w0I0w0k0I0w0K06000s0I0s0k0E0w0K07000A0I0A0k0o0w0K084xGGGGGGsGALtqA4sLzlqxwTrStUtur3wJrpzWs4ABvhAXywy6A8v7BtsGzgrXyBrgzlqBA4rlALuNDEyZBYz1BXz3BVCVzvCAv0CAuYCzuVBtqxx5prx2pqw-pqsvp5q5sXq3sZq2t1omxdrgAGrXBq7i9jiIJk0JqkJIJsJAJtqA0sJzis0yBrizijiHiiBI07i9IJIJJqI0IJHiAJziA0yBziziyBA0ziAJHiIJI0Jq7i9IJjiI0iBHijiziriyBs0zisJA0tqAJsJIJkJJqk07i9jijiiBk0jikJrisJs0tqsJsJtqs0sJrikJjik0iBK093400m0K0m0o0i0o0o0i0u0o0q0o0q0K0700C0K0I0K0K0I0K0y0I0y0I0C0C0C0C0y0A0y0A0I010C0I0C0E0I0E0I0I0700A0u0C0w0K0w0K0u0C0m0K0m0I0k0A0k0A0m0I0u0K0a3400m0K0m0o0i0o0o0i0u0o0q0o0q0K0700A0I0C0K0K0K0K0I0C0A0K0A0I0y0A0y0A0A0I0I0700C0w0I0w0K0u0K0k0I0k0I0o0C0o0C0k0A0k0A0u010C0u0C0q0I0q0I0u0K0b17i9j0w0j0x0k0x0I0x0J0x0J0w0J0v0I0v0k0v0j0v07i9w0J0x0J0x0I0x0k0x0j0w0j0v0j0v0k0v0I0v0J0K0c07i9j0w0j0x0k0x0I0x0J0x0J0w0J0v0I0v0k0v0j0v0K0d17i9jiIJk0JqkJIJIJkJJqk0IJjiI0iBHijijiHiiBI07i9IJIJJqI0IJHikJjik0iBjijiiBk0jikJHiIJI0JqK0e38gik0K0E0K0K0E0K0k0K0i0I0i0k0i0i0i0i0k0i0I0i0K0ciw0m0I0k0I0k0G0k0m0k0k0m0k0q0k0q0q0C0q0C0k0G0k0I0k0I0m0I0D0D0I010s0o0s0k0y0k0y0o0xGGGGGGuGyLvqy5uLxltSwlunvav0u3whucxxutxOvJxXw-wQxDvFy8uGxgtWwBtgxlsBy5tlyLvjAjxHzrxLzqxOzozVxZzNvrzNvozMvlz5sVwFsewCsdwzsdu1s5sCucsAufszujrHwHtgyGtWzqK0f0byi2nisJo0tqoJsJvKlIH6IsHzJlIsIVJlIsIVHzwVjzwaj0vijinirimBs0K0g1400i0A0C0A0C0E0K0w0C0o0C0s0i0s0400k0y0k0u0E0u0E0t0H0w0E0z0E0y0K0h1nilFk2m0J0n0J0n0I0n0y0n0y0n0y0n0v0q0v0q0v0q0v0uJuJv0q0v0q0v0q0v0k0v0j0u0j0t0j0t0k0t0q0t0t0q0t0litil0y0l0I0l0J0nilFk2G0J0H0J0H0I0H0y0H0y0H0y0GJtiC0t0C0t0C0t0z0t0z0q0z0q0z0q0z0k0z0j0y0j0x0j0x0k0x0q0xiuJC0v0F0v0F0y0F0I0F0J0K0i1HiBalGa99k0x0l0x0l0w0l0o0l0o0l0o0l0l0o0l0o0l0o0l0E0l0E0l0E0l0H0l0H0o0H0o0H0o0H0w0H0w0H0w0H0z0E0z0E0z0E0z0o0z0o0z0o0z0l0z0l0w0l0v0k0v0j0v0j0w0jiAJo0B0E0B0IJAJJ0w0J0o0IJjiE0j0o0j0jijij0o0j0w0j0x0400u0s0u0E0q0E0w0K0C0E0y0E0y0s0K0j210E0K0K0E0G0A0A0G010y0E0E0y0s0m0m0s000k0q0i0i0q0k0K0k430k0K0i0I0k0G0I0G0K0I0I0K030k0E0i0C0k0A0I0A0K0C0I0E030k0y0i0w0k0u0I0u0K0w0I0y030k0s0i0q0k0o0I0o0K0q0I0s030k0m0i0k0k0i0I0i0K0k0I0m0K0l110G0K0G0i0K0i0K0K0400G0w0A0C0A0y0i0y0i0u0A0u0A0q0K0m000i0K0w0i0K0K0K0n000w0K0i0i0K0i0K0o2500m0K0i0G0i0m0m0i0G0i0K0m0K0G0G0K010m0G0G0G0G0m0m0m010o0y0E0y0E0u0o0u0K0p3500m0K0i0G0i0m0m0i0G0i0K0m0K0G0G0K010m0G0G0G0G0m0m0m010o0y0E0y0E0u0o0u010u0E0y0E0y0o0u0o0K0q510C0K0C0C0K0C0K0K010C0A0C0s0K0s0K0A010A0A0A0s0s0s0s0A010C0q0K0q0K0i0C0i010A0q0A0i0s0i0s0q010q0q0q0i0i0i0i0q0K0r510i0A0i0s0q0s0q0A010i0K0i0C0q0C0q0K010A0A0A0s0s0s0s0A010C0q0K0q0K0i0C0i010A0q0A0i0s0i0s0q010q0q0q0i0i0i0i0q0K0s510C0A0C0s0K0s0K0A010i0K0i0C0q0C0q0K010A0A0A0s0s0s0s0A010C0K0K0K0K0C0C0C010A0K0A0C0s0C0s0K010K0q0K0i0C0i0C0q0K0t510i0A0i0s0q0s0q0A010i0K0i0C0q0C0q0K010A0A0A0s0s0s0s0A010C0K0K0K0K0C0C0C010A0K0A0C0s0C0s0K010q0q0q0i0i0i0i0q0K0u2900i0K0i0I0k0I0k0k0i0k0i0i0o0i0o0k0m0k0m0I0o0I0o0K09A0s0m0s0E0s0G0u0G0E0G0G0G0G0E0G0m0E0m0E0u0u0u0u0m010u0E0u0w0E0w0E0E0K0v1xGGGGGGyPICzpHOyCHcv3Ezw0AkxqwbBLvOG5vRHPzRJ7D_FSGTCiJoywH8xFGEx8HvwEImxvITCoLAH2IuH5IsH8IqLeEBJJzbJHz8JGz5Hju0BJtOBGtOBDtOw3utu6zKu5zNu4zQs_FkxpIPydJp7i9xqxqyRw0xquBlqiBk0haiBiBhak0iBlquBxqw0yRK0w2700i0o0o0i0o0m0G0m0G0K0E0I0C0K0C0q0o0q0o0u09A0y0w0y0I0y0K0w0K0q0K0o0K0o0I0o0w0q0w0q0B0w0B0w0w010q0I0w0I0w0D0q0D0K0x210m0A0i0w0m0s0q0w010w0A0s0w0w0s0A0w010G0A0C0w0G0s0K0w0K0y2f2BAwsIVxlIswVHzlDl0Gol0v6HzuGIsvzIVwsJlwVIsIVksISjuI0j0k0j0j9juj6ksv6IsvzJl5G2w0q0u0q0u0o0u0m0w0m0y0m0y0o0y0q000u0A0w0s0y0A0K0z1xGGGGGGjYw_kYx3k_w3lpoisBlxA2jyEVpxJ5v_EVCtA2IssBGtlpDIk_vYkYuYjYv0iYv3j0w3jEE-rXIlr-Ims1InAJKxGuDHGwDEGyDBLhv-GyopGwomGuojAJhts1jDr-jErXjFjEn0j0vYiYwY7i9DDFOEpFbDOEopOmopblCoomdnCmQodnDCdFDCQGpK0A1xGGGGGGlmoMm7pqmMoFqQjRx4keDhkZGoqpJdv_GoBBDhH1x4HMqQI9mMDmm7CBlmDfkBDUlfEFp-K5xdJLxfJLxhJLEsIOI8CzI9CyIaCwLkv-IapuI9psI8prEsjcxhifxfifxdifp-hVlfnmkBo7byi2m0L0n0L0n0K0n0F0s0F0t0F0t0E0t0D0s0D0m0D0liDil0E0l0K0l0L0K0B1xGGGGGGGFDeFUCAFfDlB9IbuSHLoCGZlxBtiMvOlIqdoYkOvekdBxj-FsoXG4pJGSp6HEouH1nICpi2v7iev5iev4ienPi_j-pdjZpejYpggFvLjLCnjMCojNCqnqIKuEJKuFJKuHJKBZK8GMEEHqDTbyi2z0E0z0F0A0F0F0F0F0K0F0L0G0L0H0L0H0K0H0E0GJDiG0D0A0D0z0D0K0C310i0K0i0i0m0i0m0K0500s0K0m0G0s0C0s0E0K0E0I0G0K0I0s0I0500s0A0m0w0s0s0s0u0K0u0I0w0K0y0s0y0500s0q0m0m0s0i0s0k0K0k0I0m0K0o0s0o0#1");
_.Base=_.STL([
'@font-face{ font-family:"EF-SDK"; src:url("'+O.Out("URL")+'"); }',
'body{ margin:0; padding:0; cursor:default; }',
'ef_ctrl{ display:none; }',
'.SCN_BLK{ z-index:1000001; position:absolute; left:0; top:0; }',
'.FIX{ z-index:1000000; }',
'.TXT::selection, .TXT::-moz-selection{ background:var(--sys-sel-bg); color:var(--sys-sel-fr); }',
'[ctrl]{ box-sizing:border-box; margin:0 0.3em 0.3em 0; }',
'[ctrl][req] > div:nth-of-type(1)::before{ content:"\ue010"; font-family:"EF-SDK"; color:var(--err-fr); }',
'.TXT:not(:valid):not([contenteditable]){ outline:var(--err-fr); color:var(--err-fr); }',
'.CON:not([lr]){ align-items:center; }',
'.CON{ display:inline-flex; flex-direction:row; }',
'[drg]{ cursor:all-scroll; }',
'[rsx]{ position:relative; }',
'[rx]{ position:absolute; font-family:"EF-SDK"; }',
'@media (any-hover:none) and (pointer:coarse){ [rx]{ font-size:60px; } }',
'[rx="1"]{ cursor:se-resize; right:0; bottom:0; }',
'[rx="2"]{ cursor:sw-resize; left:0; bottom:0; }',
'[rx="3"]{ cursor:ne-resize; right:0; top:0; }',
'[rx="4"]{ cursor:nw-resize; left:0; top:0; }',
'[rx="1"]::after{ content:"\ue01a"; }',
'[rx="2"]::after{ content:"\ue01b"; }',
'[rx="3"]::after{ content:"\ue01c"; }',
'[rx="4"]::after{ content:"\ue01d"; }',
'[rx="5"]{ cursor:col-resize; right:0; width:0.25em; top:0; bottom:0; }',
'[rx="6"]{ cursor:row-resize; bottom:0; height:0.25em; left:0; right:0; }',
'[ctrl]:not([efc]){ position:relative; float:left; }',
'[lr]{ flex-direction:column; }',
'[ctrl]:not([lf]):not([efc]){ clear:left; }',
'[off]{ display:none !important; }',
'[ctrl="PRG"]{ display:flex; overflow:hidden; }',
'[ctrl="SBT"]{ font-family:"EF-SDK"; float:left; text-align:center; }',
'.PRGF{ height:100%; }',
'.PRGT{ position:absolute; width:100%; text-align:center; bottom:0%; }',
'.TXT{ min-height:1em; cursor:text; overflow:hidden; text-overflow:ellipsis; }',
'.FLD{ box-sizing:border-box; }',
'.BtnSvgC1{ fill:var(--sys-c1); stroke:var(--sys-c2); }',
'.PNT:not([rdo]){ cursor:pointer; }',
'.PNT[rdo], [ctrl][rdo] > .TXT{ cursor:default; }',
'textarea, [contenteditable]{ tab-size:4; -o-tab-size:4; -moz-tab-size:4; }',
'[ctrl="CAL"] > .FLD, [ctrl="NUM"] > input{ text-align:right; }',
'[ctrl="CHK"]{ padding:4px; }',
'[ctrl="CVS"] > canvas{ width:100%; height:100%; box-sizing:border-box; cursor:crosshair; }',
'.CVB{ position:absolute; left:0; top:0; right:0; bottom:0; }',
'[ctrl="TAR"] > div:nth-of-type(2):not([off]){ display:flex; align-items:center; }',
'[ctrl="TAR"] [ctrl]{ margin-bottom:0; }',
'[ctrl="TRK"]{ display:inline-flex; flex-direction:row; margin:0 4px 4px 0; }',
'.TRK{ flex:auto; height:2em; box-sizing:border-box; background-image:var(--ctrl-trk); }',
'.TRK > div{ text-align:right; padding:0.5em 0 0.5em 0; background-image:var(--ctrl-trk-fill); color:var(--sys-c2); }',
'.TRL[sel] > div{ background:var(--sys-sel-bg); color:var(--sys-sel-fr); }',
'.DT_C1{ fill:var(--sys-c4); stroke:var(--sys-c4); }',
'.DT_C2{ fill:var(--sys-c1); stroke:var(--sys-c1); }',
'.DT_C3{ fill:var(--sys-c5); stroke:var(--sys-c5); }',
'.DT_BOX{ border:var(--ctrl-tre-iconbox-border); background:var(--sys-c7); width:1em; height:1em; }',
'.TRL[sel] > div .DT_C1{ fill:var(--sys-c7); stroke:var(--sys-c7); }',
'.TRL[sel] > div .DT_C2{ fill:var(--sys-c8); stroke:var(--sys-c8); }',
'.TRL[sel] > div .DT_C3{ fill:var(--sys-c9); stroke:var(--sys-c9); }',
'.TRL[sel] > div .DT_BOX{ border:var(--ctrl-tre-iconbox-border-sel); background:var(--sys-c4); }',
'.TRI{ font-size:1em; font-family:"EF-SDK"; padding-right:2px; cursor:pointer; }',
'.TRB{ padding:0.5em 0.5em 0.5em 2em; border-left:1px dashed #000; position:relative; left:0.5em; }',
'.TRB[clp]{ display:none; }',
'.TRV{ padding:0.5em; overflow:auto; }',
'.TRV, .TRB{ margin:0; box-sizing:border-box; }',
'.TRL{ display:grid; }',
'.TRV, .TRL{ list-style-type:none; }',
'.TRL > div > img{ margin-right:4px; display:inline; }',
'.TRM, .TRL > div > div{ display:inline-block; vertical-align:top; }',
'.TRM{ font-weight:bold; margin-right:1em; box-sizing:border-box; white-space:normal; }',
'.TRV:not([kv]) .TRM{ display:none; }',
'.TRL > div, .TRZ{ white-space:nowrap; }',
'[ctrl="TRE"][wrp] .TRZ, [ctrl="TRE"][wrp] .TRL > div{ white-space:normal; }',
'form{ box-sizing:border-box; float:left; position:relative; overflow:hidden; min-height:2em; min-width:8em; }',
'form[flc]{ max-height:2em; }',
'form[err] .BtnSvgC1{ fill:var(--err-bg); stroke:var(--err-fr); filter:brightness(75%); }',
'.FBX{ padding:4px 16px 16px 16px; }',
'.FRT{ box-sizing:border-box; display:flex; flex-direction:row; height:2em; position:relative; left:-1em; top:-1em; width:calc(100% + 2em); }',
'.FRT > span{ padding:0.5em; font-weight:bold; flex:1; }',
'.FRT > div > [ctrl="SBT"]{ float:right; }',
'.FBK{ z-index:1000; top:2em; bottom:0; right:0; left:0; position:absolute; }',
'.RBX{ z-index:999999; display:flex; flex-direction:column; }',
'.RBN{ width:0; opacity:0; transition:width 1s, opacity 1s; flex:auto; display:flex; flex-direction:column; }',
'.RBN[open]{ width:16em; opacity:1; }',
'.RBN ul{ display:block; list-style-type:none; }',
'.RBN ul ul{ padding-left:8px; }',
'.RBN > ul{ width:calc(100% - 2em); padding:0; flex:auto; overflow-y:auto; }',
'.RBN li > div{ padding:2px; min-height:calc(1em + 4px); }',
'.RBC{ text-align:center; }',
'.RBC svg{ display:inline-block; }',
'.TTP{ opacity:0; transition:opacity 1s; position:absolute; display:inline-block; z-index:999996; padding:4px; }',
'.TTP[alr]{ left:4em; }',
'[ctrl="CMB"] .FLD{ display:flex; flex-direction:row; }',
'[ctrl="CMB"] > div:nth-child(2) > div:nth-of-type(1){ flex:auto; align-items:center; display:grid; }',
'.CMB_REC{ align-items:center; display:flex; }',
'[ctrl="CMB"] [ctrl="SBT"]{ float:right; flex:initial; }',
'.CMB_FLX{ display:flex; flex-direction:column; overflow:auto; }',
'[ctrl="CMB"] img, .CMB_FLX img{ margin-right:4px; }',
'.IMG_BOX{ overflow:auto; }',
'[ctrl="IMG"]:not([alg="S"]) .IMG_BOX{ width:100%; height:100%; }',
'img[efc]{ position:absolute; left:0px; top:0px; }',
'img[efc="FD"]{ opacity:0; transition:opacity 1s; }',
'img[efc="TW"]{ transform:rotate(3600deg) scale(0,0); transition:transform 1s; }',
'img[efc="RS"]{ left:100%; transition:left 1s; }',
'.CPK{ text-align:center; display:inline-grid; }',
'.RSF_CPK, .RSF_CPK_CVS > canvas{ display:inline-block; border-radius:50%; }',
'.RSF_CPK_SEL{ border-radius:10px; }',
'table{ border-collapse:collapse; position:relative; font-size:1em; }',
'th, td[th]{ position:sticky; position:-webkit-sticky; }',
'th{ z-index:2; }',
'th[th]{ z-index:3; }',
'tr:first-child th{ top:0; text-align:center; }',
'[ctrl="TBL"]{ display:flex; flex-direction:column; }',
'[ctrl="TBL"] > div{ flex:auto; overflow:auto; }',
'.TBL_THC > div:first-child{ display:inline-block; }',
'.TBL_THC > div:nth-child(2){ float:right; }',
'.TBL_SEP{ text-align:center; }',
'[ctrl="CAM"]{ overflow:hidden; }',
'[ctrl="CAM"] video{ background:#000; width:100%; height:100%; }',
'[ctrl="SPL"]{ display:inline-flex; flex-direction:row; }',
'[ctrl="SPL"][vt]{ flex-direction:column; }',
'[ctrl="SPL"] > div:first-child{ flex:initial; position:relative; }',
'[ctrl="SPL"] > div:nth-child(2){ flex:1; }',
'[ctrl="SPL"] > div{ overflow:auto; }'
]);
_.Crd={C:_.aS()}; _.PG=_.CTR({c:"DIV",r:document.body,s:"FIX",p:{l:0,r:0,t:0}}); O=HTMLImageElement.prototype;
O.toString=function() { return this.outerHTML; };
O.load=function(a,c,e) {
	var f=this; f.onload=c; f.onerror=f.load.bind(this,a,c);
	if(a===""||!a.indexOf("data:")||window.origin=="null") f.src=a; else _.SM({
		p:a,bin:1,cbk:function(q) { f.src=q; },err:e,hdr:{'Cache-Control':'no-cache'}
	});
};
for(j in F) window["HTML"+F[j]+"Element"].prototype.load=O.load;
if(_.xT(p)!=="H") p={ f:p }; document.title=p.tit||"";
_.xW(_.xM("meta",0,document.head),0,{ name:"viewport",content:"width=device-width, initial-scale=1.0" });
_.xW(_.xM("link",0,document.head),0,{ rel:"shortcut icon",type:"image/ico",href:(p.ico?p.ico.replace(/\*/g,_.root+"/"):"ef")+".ico" });
window.onerror=function(m,a,l,c) { if(_.Cfg.debug==1) _.Alert({tit:a+" "+l+":"+c,txt:m,err:1}); };

// position fixed for mobile - workaround (still not working on safari...!!!)
_.SE={
        E:{},
        Add:function(e,p) {
	        var i=e.SE=_.aS(); _.SE.E[i]=[p||1,e];
	        _.xB(e,"se",function(){ return _.SE.E[i][0]; },function(v){ _.SE.E[i][0]=v; });
        },
        Del:function(e) { if(e.SE) delete _.SE.E[e.SE]; }
    };
window.onscroll=window.onresize=function() { 
        var i,v; for(i in _.SE.E) {
	        v=_.SE.E[i];
	        _.xP(v[1],{
		        l:window.scrollX+(v[0]==1||v[0]==3?0:(window.innerWidth-v[1].offsetWidth)),
		        t:window.scrollY+(v[0]==1||v[0]==2?0:(window.innerHeight-v[1].offsetHeight))
	        });
        }
    };
_.SE.Add(_.PG);
// ----------------------------------------

_.CSS(p.css||"*ef",function() {
	if(p.obu) window.onbeforeunload=function() { return p.obu; };
	_.xZ(); if(p.f) if(_.xT(p.f)=="Q") _.RC(p.f); else _.Use('*'+(p.ext||p.f),function() { window[p.f](p.v); });
}); };
_.SVG={
ITM:function(p,r){
    var c=p[2],f;
    if(c) {
        if(c.fill) c.fill=iA(c.fill); if(c.stroke) c.stroke=iA(c.stroke);
        if(c.alg=="C") { delete c.alg; c.textAnchor="middle"; c.dominantBaseline="middle"; }
    }
    f=_.xM('*'+p[0],0,r,p[3],p[2]); _.xW(f,0,p[1]); return f;
    function iA(e) { return _.xT(e)=="A"?iB(e):e; }
    function iB(e) {
        var a=e[1]||{},b,i; a.id=_.aS(); b=_.SVG.ITM([(e[0]=="R"?"radial":"linear")+"Gradient",a],r);
	    for(i in e[2]) _.SVG.ITM(["stop",{offset:(e[2][i].o+"%")},e[2][i].x||{stopColor:e[2][i].c}],b);
	    return "url(#"+b.id+")";
    }
},
Draw:function(p,x) {
    if(!x) x={}; if(!x.a) x.a={}; var f,i,a=_.xT(p);
    if(a=="N") { f=_.xM("*svg",0,x.r,x.d,0,x.u); _.xW(_.xM("*use",0,f),"href","#C"+p); }
    else if(a=="A") {
        f=_.xM("*svg",0,x.r,x.d,p[1],x.u); a=p[2]||[]; for(i in a) _.SVG.ITM(a[i],f);
        x.a.viewBox="0 0 "+p[0][0]+" "+p[0][1];
    }
    else f=p;
    if(x.s) _.xC(f,x.s); _.xW(f,0,x.a); return f;
}
};
_.TEX=function(p,f,z) {
    var r=new Promise(iA.bind(null,_.Lang,0)); z=_.xI(z,1); r.then(z?function(v){ z.innerHTML=v; _.xZ(z); if(f) f(z); }:f); return r;
    function iA(m,c,v,x) { _.SM({p:p.replace(/\$/,m),cbk:v,err:iB.bind(null,c,v,x)}); }
    function iB(c,v,x,h) { if(h.status==404) {
        if(!c) { c=_.Lang.split(/\-/g); iA(c[0],1,v,x); c=0; }
        else if(c==1) if(_.Cfg.Lng&&_.Lang!==_.Cfg.Lng) iA(_.Cfg.Lng,2,v,x); else c++; 
        if(c==2) { console.log(h); _.Alert({tit:h.status,txt:h.statusText,err:1}); x(""); }
    }}
};

function eB(a,b) { return b&&a?[b[0]-a[0],b[1]-a[1]]:null; }
function eC(e,a) {
	if(!e.dvp) e.dvp=[_.xH(),_.xV(a),0];
	if(e.dvp[1].p=="x") e.dvp[1].p="r"; _.xP(e.dvp[0],{l:0,t:0});
	_.mE(e.dvp[0],function(x,v){ if(v.target===e.dvp[0]) { _.xX(e.dvp[0]); delete e.dvp; } });
}
function eD(w,h) { return _.CTR({c:"CVS",d:[w,h],off:1,r:document.body}); }

_.Rsf={
CPK:function(p,r) {
    if(!_.Sys.cpk) _.Sys.cpk=new Array(20); if(r.mf) return r.mf.Focus();
    _.FRM({
		id:p.id+"_SEL",txt:p.txt||"",p:p.p,atc:r.form,blk:p.blk,drg:1,
		onl:function(e){ r.mf=e; e.ok=0; iN(); e.val=p.val.Cpy(); e.ok=1; iV(); },cls:function() {
			delete r.mf; if(p.cls) p.cls(r);
		},chl:[
		    {c:"DIV",s:{ display:"inline-block",verticalAlign:"top" },chl:[
		        {c:"CVS",n:"HSB",d:[200,200],s:"RSF_CPK_CVS",ce:iA},
		        {c:"CVS",n:"IM",d:[200,40],s:"RSF_CPK_SEL"}
		    ] },
		    {c:"DIV",n:"TX",lf:1,s:{ display:"inline-block" }},
		    {c:"DIV",n:"RC"},
		    {c:"SBT",txt:"\ue00f",clk:p.ok.bind(this,r),p:{r:0,b:0}}
		]
	});
	
	function iA(c,o,z) {
		if(!o||!c.pd) return;
		var v=c.ctx.getImageData(z[0],z[1],1,1).data;
		if(v[3]) { v[3]=r.mf.val.V[3]; r.mf.val=new _.Color(_.aU(v),p.alp); iV(1); }
	}
	function iB(e) { iV(2,e.name); }
	function iC(e,c,x) { e=e.target; if(x||!e||c) return; _.Sys.cpk[iE(e)]=r.mf.val.Cpy(); e.style.background=r.mf.val.CSS(); }
	function iD(e) {
		e=iE(e); if(!_.Sys.cpk[e]) return;
		r.mf.val=_.Sys.cpk[e].Cpy(); iV(); p.ok(r);
	}
	function iE(e) { return parseInt(e.name.substr(1)); }
	function iN() {
		var i,x=[],b=[
			'#f00','#0f0','#00f','linear-gradient(45deg,#f00,#0f0,#00f)',
			'#888','linear-gradient(45deg,#fff,#000)','#fff'
		],k="RGBHSLA";
		for(i=0 ; i<(p.alp?7:6) ; i++) _.CTR([
		    {c:"DIV",d:["2em","2em"],p:{t:"0.5em",p:"r"},s:{ background:b[i] },csn:"RSF_CPK" },
			{c:"TRK",n:k[i],min:0,max:255,stp:1,lbl:"X: ",d:[200],chng:iB,lf:1}
		],r.mf.ctrl.TX);
		for(i=0 ; i<20 ; i++) x.push({
			c:"DIV",n:"R"+i,d:["2em","2em"],clk:iD,mc:iC,csn:"RSF_CPK",
			s:{ background:(_.Sys.cpk[i]?_.Sys.cpk[i].CSS():"#fff") },lf:(i==10?0:1)
		});
		_.CTR(x,r.mf.ctrl.RC);
	}
	function iV(c,a) {
	    if(!r.mf.ok) return; r.mf.ok=0;
		var d={},i,k=r.mf.val,h=k.HSL(),w,x,y,s,z,u,m,G=["FXO","RFO","OFX","ORF","XOF","FOR"],Z;
		if(c==1) d={H:h[0]*256/6,S:h[1],R:k.V[0],G:k.V[1],B:k.V[2]};
		else if(c==2) {
			i="RGB".indexOf(a);
			if(i>-1) { k.V[i]=r.mf.ctrl[a].Val(); h=k.HSL(); d={H:h[0]*256/6,S:h[1],L:h[2]}; }
			else if(a=='A') k.V[3]=r.mf.ctrl.A.Val();
			else {
				c=r.mf.Val(("HSL"+(p.alp?"A":"")).split(''));
				k=r.mf.val=new _.Color({h:c.H*6/256,s:c.S,l:c.L,a:c.A},p.alp);
				d={R:k.V[0],G:k.V[1],B:k.V[2]};
			}
		}
		else d={H:h[0]*256/6,S:h[1],L:h[2],R:k.V[0],G:k.V[1],B:k.V[2],A:k.V[3]};
		for(i in d) if(r.mf.ctrl[i]) r.mf.ctrl[i].Val(Math.floor(d[i])); r.mf.ok=1;

		w=r.mf.ctrl.HSB.ctx;
		if(c!==1) {
			m=w.createImageData(200,200); k=r.mf.val.HSL();
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
		iY(r.mf.ctrl.IM.ctx,200,40,r.mf.val.CSS());
	}
	function iY(c,x,y,b) {
		var i,j; for(i=0 ; i<(x||256) ; i+=8) for(j=0 ; j<(y||16) ; j+=8) {
			c.fillStyle=((i%16&&j%16===0)||(i%16===0&&j%16))?'#fff':'#000'; c.fillRect(i,j,8,8);
		}
		if(b) { c.fillStyle=b; c.fillRect(0,0,x,y); }
	}
},
CAL:function(p,r) {
	var T; if(r.mf) return r.mf.Focus();
	r.mf=_.FRM({
	    id:p.id,cb:[['P',OK]],txt:p.lbl||"&nbsp;",drg:1,
	    p:{l:r.offsetLeft,t:r.offsetTop+r.offsetHeight+4},atc:r.form,
	    cls:function() { delete r.mf; if(p.cls) p.cls(r); },chl:[
		    ["TBL",{ n:"T0",off:(!p.tp||p.tp=='D'?0:1),matt:1,celh:1,s:{
		    	display:"inline-block",overflow:"unset",marginRight:"8px"
		    },clk:i3,cbr:[
		    	["STR",{ s:{ fontFamily:'EF-SDK' },cb:[
			    	['E',i4.bind(this,-1,0)],
			    	['H',i4.bind(this,0,-1)],
			    	['G',i4.bind(this,0,1)],
			    	['F',i4.bind(this,1,0)],
			    	['I',i4.bind(this,0,0)]
		    	] }],
		    	["TXT",{ n:"E0",d:[80],alg:"C" }]
	    	],col:[
		    	{ txt:_.L({EN:"Sun",ZH:"星期日"}) },
		    	{ txt:_.L({EN:"Mon",ZH:"星期一"}) },
		    	{ txt:_.L({EN:"Tue",ZH:"星期二"}) },
		    	{ txt:_.L({EN:"Wed",ZH:"星期三"}) },
		    	{ txt:_.L({EN:"Thu",ZH:"星期四"}) },
		    	{ txt:_.L({EN:"Fri",ZH:"星期五"}) },
		    	{ txt:_.L({EN:"Sat",ZH:"星期六"}) }
		    ] }],
	    	(!p.tp||p.tp=='T')?["DIV",{ s:{ display:"inline-block",verticalAlign:"top" },chl:[
		    	["NUM",{ n:"E1",lbl:_.L({EN:"Hours:",ZH:"小时："}),min:0,max:23,val:(r.val?r.val.getHours():0) },1],
		    	["NUM",{ n:"E2",lbl:_.L({EN:"Minutes:",ZH:"分钟："}),min:0,max:59,val:(r.val?r.val.getMinutes():0) },1],
		    	["NUM",{ n:"E3",lbl:_.L({EN:"Seconds:",ZH:"秒："}),min:0,max:59,val:(r.val?r.val.getSeconds():0) }]
		    ] }]:[""]
	] });
	T=r.mf.ctrl.T0; for(var i=0 ; i<6 ; i++) T.Add(['','','','','','','']);
	if(!p.tp||p.tp=='D') i4();

	function OK() {
		if(!r.mf.selc) _.Alert({
			tit:_.L({EN:"Error",ZH:"错误"}),
			txt:_.L({EN:"Please select date in the table!",ZH:"请在日历上选日期！"}),
			err:1,end:3000
		});
		var v=_.VL(r.mf),h=r.mf.SelMon||[0,0,0];
		r.Val([h[0],h[1],h[2],v.E1,v.E2,v.E3]); r.mf.Close();
	}
	function i2() {
		r.mf.ctrl.E0.Val(r.mf.SelMon[0]+"/"+r.mf.SelMon[1]);
		var y=r.mf.SelMon[0],m=[31,y%400===0||(y%100&&y%4===0)?29:28,31,30,31,30,31,31,30,31,30,31],o=new Date(r.mf.SelMon[0],r.mf.SelMon[1]-1,1),w=o.getDay();
		if(r.mf.selc) { _.xW(r.mf.selc,"selected"); delete r.mf.selc; }

		var tr=0,tc=0,v;
		while(tc<w) {
			v=T.tb.rows[tr].cells[tc]; i22(v,'.'); v.className="CLC CLX"; tc++; if(tc>6) { tr++; tc-=7; }
		}
		for(var i=1 ; i<=m[r.mf.SelMon[1]-1] ; i++) {
			v=T.tb.rows[tr].cells[tc];
			i22(v,i); i5(i,v.d,tc===0||tc==6?1:0); tc++; if(tc>6) { tr++; tc-=7; }
			if(i==r.mf.SelMon[2]) { _.xW(v,"selected",1); r.mf.selc=v; }
		}
		while(tr<6) {
			v=T.tb.rows[tr].cells[tc]; i22(v,'.'); v.className="CLC CLX"; tc++; if(tc>6) { tr++; tc-=7; }
		}
	}
	function i22(e,g) {
		if(e.d&&e.d.ttp) delete e.d.ttp; // EVT??!!
		if(!e.d) e.d=_.xM("div","",e); e.d.innerHTML=g; e.val=(g=='.'?null:g);
	}
	function i3(e) {
		var v=e.val; if(!v) return;
		if(r.mf.selc) { _.xW(r.mf.selc,"selected"); r.mf.selc=null; }
		_.xW(e,"selected",1); r.mf.selc=e; r.mf.SelMon[2]=r.mf.selc.val;
	}
	function i4(y,m) {
		if(!y&&!m) { var o=r.val||new Date(); r.mf.SelMon=[o.getFullYear(),o.getMonth()+1,o.getDate()]; }
		else {
			r.mf.SelMon[1]+=m;
			if(r.mf.SelMon[1]>12) { r.mf.SelMon[1]-=12; y++; }
			else if(r.mf.SelMon[1]<1) { r.mf.SelMon[1]+=12; y--; }
			r.mf.SelMon[0]+=y;
		}
		i2();
	}
	function i5(d,e,f) {
		var m=r.mf.SelMon[1]+"_"+d,h=_.Ext.Hol||{ UV:{
			"1_1":[_.L({EN:"New year",ZH:"新年" }),1],
			"5_1":[_.L({EN:"Labor day",ZH:"劳动节" }),1]
		}},v=[];
		for(var i in h) if(h[i][m]) { v.push(h[i][m][0]); if(!f&&h[i][m][1]) f=1; }
		if(v.length) _.TTP({ txt:v.join('<br>') },e); e.parentNode.className="CLC"+(f?" CLH":"");
	}
} // This form cannot be complete without TBL!
};
_.CTRL={
DIV:function(f,p) {
    if(_.xT(p.html)) f.innerHTML=p.html; if(p.mc) _.mC(f,p.mc); if(p.clk) f.clk=p.clk; if(p.pg) _.xL(f,p.pg);
    _.xE(f,"click",function(e) { if(f.clk&&!f.rdo) f.clk(f); }); if(p.chl) f.chl=_.CTR(p.chl,f);
},
SBT:function(f,p) {
    f.className="PNT"; _.xE(f,"click",function() { if(!f.rdo&&f.clk) f.clk(f); });
    _.xB(f,"txt",function(){ return f.textContent; },function(v){ f.textContent=v; }); f.txt=p.txt||"";
    _.xB(f,"img",0,function(v){
        var i,x; if(f._img) _.xX(f._img); i=""; if(v) {
	        v=v[0]=="*"?v.substr(1):("img/"+v); x=_.aP.E(v); 
	        if(x=="svg") { x=_.xM("object",0,f); _.xW(x,"data",v); f._img=x; }
	        else i="url('"+v+"')";
	    }
	    f.style.backgroundImage=i;
    });
	_.xB(f,"ff",function(){ return f.style.fontFamily; },function(v){ f.style.fontFamily=v; });
	f.clk=p.clk; if(!f.clk) f.rdo=1; if(p.img) f.img=p.img; if(p.ff) f.ff=p.ff;
},
PRG:function(f,p) {
	_.xS(f,p.w||200); f.bar=_.xM("div",0,f,0,"PRGF"); f.pc=_.xM("div",0,f,[0,"100%"],"PRGT");
	_.xB(f,"val",function(){ return f._v; },function(v){
		f._v=v; if(f._m) f.pc.innerText=f.bar.style.width=(v*100/f._m).toLocaleString(u,{ maximumFractionDigits:2 })+"%";
		else f.pc.innerText=" ";
	});
	_.xB(f,"max",function(){ return f._m; },function(v){ f._m=v; f.val=f._v; });
	f.max=p.max; f.val=0; iA(0);

	function iA(y) {
		if(y==100) y=0;
		f.pc.style.backgroundImage="linear-gradient(135deg,#fff0 "+y+"%,#fffc "+(y+6)+"%,#fff0 "+(y+12)+"%)";
		if(f.parentNode) setTimeout(iA,20,y+1);
	}
},
BTN:function(f,p) {
	f.className="PNT"; var i,x; f._txt=_.xM("div",0,f,0,"B_LBL");
	_.xB(f,"txt",function(){ return f._txt.textContent; },function(v){ f._txt.textContent=v; });
	_.xB(f,"img",0,function(v){
	    if(f._img) _.xX(f._img); i=""; if(v) {
	        v=v[0]=="*"?v.substr(1):("img/"+v); x=_.aP.E(v); 
	        if(x=="svg") { x=_.xM("object",0,f); _.xW(x,"data",v); f._img=x; }
	        else i="url('"+v+"')";
	    }
	    f.style.backgroundImage=i;
	});
	_.xE(f,"click",function(e){ if(!f.rdo&&f.clk) f.clk(f); });
	f.img=p.img; f.txt=p.txt; if(!f.clk) if(p.clk) f.clk=p.clk; else f.rdo=1;
},
SBS:function(f,p) {
    f.opt={}; f.lbl=_.xM("div",0,f); f.classList.add("CON"); f.lbl.innerHTML=p.lbl||""; var i,g=f.fld=_.xM("div",0,f,0,"SBS");
    f.Add=function(c) {
        var a=f.opt[c.k]=_.CTR({c:"SBT",r:g,txt:c.txt,ff:c.ff||p.ff,img:c.img,svg:c.svg,ttp:c.ttp,clk:f.Val.bind(null,c.k),lf:(c.lr?0:1)});
        a.val=c.k; a.clkx=c.clk;
    };
	f.Del=function(k) { if(!k) k=f.val; if(!k) return; _.xX(f.opt[k]); delete f.opt[k]; if(k==f.val) delete f.val; };
    f.Val=function(k) {
        if(k) {
            if(f.val) _.xW(f.opt[f.val],"sel");
            if(f.opt[k]&&!f.opt[k].rdo) {
                f.val=k; _.xW(f.opt[k],"sel",1);
                if(f.opt[k].clkx) f.fw(f.opt[k].clkx.bind(this,f));
                if(f.chng) f.fw(f.chng.bind(this,f));
            }
            else f.val=null;
        }
        else return f.val;
    };
	for(i in p.opt) f.Add(p.opt[i]); f.Val(p.val); f.chng=p.chng;
},
CHK:function(f,p) {
	if(!p.src) { p.src=[_.xT(p.lbl)?p.lbl:""]; delete p.lbl; }
	f.cb=[]; f.stl=_.STL(['label{}'],f);
	_.xB(f,"lw",function(){ return f._lw; },function(v){
		f._lw=v; f.stl.Rul(0,{ width:(v?v+"px":""),display:(v?"inline-":"")+"block" });
	});
	f.lw=p.lw||0;
	if(p.lbl) { f.lbl=_.xM("span",0,f,0,{ display:"block" }); f.lbl.innerHTML=p.lbl; }
	f.Add=function(v) {
		var g=_.xM("label",0,f,0),h=_.xM("input",0,g); h.type="checkbox";
		g.txt=_.xM("span",0,g); g.txt.innerHTML=v; g.chk=h; g.val=Math.pow(2,f.cb.length); f.cb.push(g);
		_.xE(h,"change",function(e){ if(f.form) f.form.NS(); if(p.chng) f.fw(p.chng.bind(this,f,e.target.parentNode)); });
	};
	if(p.src) for(var i in p.src) f.Add(p.src[i]);
	
	f.Val=function(v) {
		var c=0,i,t=_.xT(v); for(i in f.cb)
			if(t) f.cb[i].chk.checked=(v&f.cb[i].val)?true:false;
			else if(f.cb[i].chk.checked) c+=f.cb[i].val;
		return c;
	};
	f.Del=function(v) {
		var i,c=1; for(i=0 ; i<f.cb.length ; i++)
			if(v&f.cb[i].val) { _.xX(f.cb[i]); f.cb.splice(i,1); i--; c*=2; }
			else f.cb[i].val/=c;
	};
	f.Val(p.val);
	
	_.xB(f,"rdo",u,function(v){
		for(var i in f.cb) f.cb[i].chk.disabled=(v&f.cb[i].val)?true:false;
	});
	f.rdo=p.rdo||0;
},
CVS:function(f,p) {
	if(!p.d) _.xS(f,p.w||320,p.h||200); var u,z=f.cvs=_.xM("canvas",0,f,0,"FLD"),a=_.xV(f);
	_.xB(f,"w",function(){ return z.width; },function(v){ z.width=v; });
	_.xB(f,"h",function(){ return z.height; },function(v){ z.height=v; });
	_.mR(f,p.rsx); f.w=p.w||a.w; f.h=p.h||a.h; f.ctx=z.getContext("2d"); if(p.mb) f.ctx.MB=new MB(f.ctx);
	f.$rdo=function(v) { if(v) iB(); else _.xX(f.lok); };
	if(p.ce) {
		_.mC(z,iA.bind(this,1),2);
		_.mT(z,function(e) { f.pd=1; p.ce(f,1,_.mP(e),e); });
		_.mM(z,function(e) { e.preventDefault(); p.ce(f,2,_.mP(e),e); });
		_.mE(z,function(c,e) { f.pd=0; p.ce(f,c?3:0,_.mP(e),e); });
	}
	f.Val=function(q,x) {
		if(q&&!x) { x=q.split('/'); q=x[0]; x=x[1]===""?u:x[1]*=1; }
		return f.val||z.toDataURL(q=="J"?"image/jpeg":"image/png",x);
	};
	f.Raw=function() { return f.ctx.getImageData(0,0,z.width,z.height); };
	function iA(b,e,s,c){ if(!c) p.ce(f,10+s,_.mP(e),e); if(s==3) {
	    if(b) { iB(); _.mC(f.lok,iA.bind(null,0),2); } else _.xX(f.lok);
	} }
	function iB() { f.lok=_.xM("div",0,f,0,"CVB SCN"); }
function MB(O) { var T=Math,M=this;
M.cO=function(v,k) {
	if(k) M.pvCO=O.globalCompositeOperation; k={
		O:'source-over',I:'source-in',U:'source-out',A:'source-atop',DO:'destination-over',
		DI:'destination-in',DU:'destination-out',DA:'destination-atop',L:'lighter',C:'copy',
		X:'xor',M:'multiply',V:'overlay',D:'color-dodge',B:'color-burn',
		F:'soft-light',R:'difference',H:'hue',S:'saturation',N:'luminosity' };
	if(k[v]) O.globalCompositeOperation=k[v];
};
M.cR=function(){ if(M.pvCO) M.cO(M.pvCO,1); };
M.dA=function(a,f,p,rx,ry,t,b,e,n) { if(a) O.beginPath(); O.ellipse(p.x,p.y,rx,ry,t||0,b||0,e||Math.PI*2,n); M.dX(f); };
M.dD=function(v,f,a,b) {
	M.dM(a?v[0].add(a,1):v[0],b?0:1); for(var i=1 ; i<v.length ; i++) M.dL(a?v[i].add(a,1):v[i]); M.dX(f);
};
M.dH=function(s,c,b,o) {
    var d=[O.getLineDash(),O.lineDashOffset,O.strokeStyle],j=o||0; O.setLineDash(s);
    for(var i in c) { O.lineDashOffset=j; M.pC(c[i]); b(); j+=s[i]; }
    O.setLineDash(d[0]); O.lineDashOffset=d[1]; M.pC(d[2]);
};
M.dL=function(p,a,b) {
	if(b) O.bezierCurveTo(a.x,a.y,b.x,b.y,p.x,p.y);
	else if(a) O.quadraticCurveTo(a.x,a.y,p.x,p.y);
	else if(p) O.lineTo(p.x,p.y);
};
M.dM=function(p,t) { if(t) O.beginPath(); O.moveTo(p.x,p.y); };
M.dR=function(p,s,a) {
	O.beginPath(); if(!p) p=T.V2(0,0); if(!s) s=T.V2(O.canvas.width,O.canvas.height);
	O.rect(p.x,p.y,s.w,s.h); M.dX(a||1);
};
M.dwl=function(n,t,q){ _.DL(O.canvas.Val(t,q),n,t=="J"?"jpg":"png"); };
M.dX=function(c){ if(!c) c=0; if(c%3==2) O.closePath(); if(c%3) O.stroke(); if(c>2) O.fill(); };
M.gI=function(p,s) {
	if(!p) p=T.V2(0,0); if(!s) s=T.V2(O.canvas.width,O.canvas.height);
	return O.getImageData(p.x,p.y,p.x,p.y);
};
M.pC=function(a,b) { if(a) O.strokeStyle=_.xT(a)=="C"?a.CSS():a; if(b) O.fillStyle=_.xT(b)=="C"?b.CSS():b; };
M.pI=function(d,p) { if(!p) p=T.V2(0,0); O.putImageData(d,p.x,p.y); };
M.pL=function(){
	var z=arguments,i,g=O.createLinearGradient(z[0].x,z[0].y,z[1].x,z[1].y);
	for(i=2 ; i<z.length ; i++) g.addColorStop(z[i][0],_.xT(z[i][1])=="C"?z[i][1].CSS():z[i][1]);
	return g;
};
M.pR=function(){
	var z=arguments,i,g=O.createRadialGradient(z[0].x,z[0].y,z[1],z[2].x,z[2].y,z[3]);
	for(i=4 ; i<z.length ; i++) g.addColorStop(z[i][0],_.xT(z[i][1])=="C"?z[i][1].CSS():z[i][1]);
	return g;
};
M.xX=function(p,s) {
	if(!p) p=T.V2(0,0); if(!s) s=T.V2(O.canvas.width,O.canvas.height);
	O.clearRect(p.x,p.y,s.x,s.y);
};
}
},
FLU:function(f,p) {
	f.classList.add("CON");
	var g,a={mul:"multiple",ext:"accept"};
	if(p.lbl) { f.lbl=_.xM("div",0,f,0,{flex:"auto"}); f.lbl.innerText=p.lbl; }
	f.flu=g=_.xM("input",0,f,[p.w],{flex:"initial"}); g.type="file"; g.className="PNT"; 
	g.ondrop=function(e) {
		if(f.rdo) return; e.preventDefault(); e.stopPropagation();
		g.files=e.dataTransfer.files; if(g.files.length) f.ftp={}; iA(0);
	};
	g.ondragover=function(e) { if(f.rdo) return; e.preventDefault(); };
	f.$rdo=_.xW.bind(this,g,"readonly");
	for(var i in a) { _.xB(f,i,_.xW.bind(null,g,a[i],"~"),_.xW.bind(null,g,a[i])); f[i]=p[i]; }
	
	f.Res=function(d) { return atob(d.substr(d.indexOf('base64,')+7)); };
	f.EFON=function(k) { return _.ON(_.D64(f.ftp[k].substr(f.ftp[k].indexOf('base64,')+7)),'-'); };
	f.Val=function(v) { if(!v) return f.ftp; /*f.ftp=v;*/ };
	_.xE(g,"change",function(){ if(!f.rdo) { if(g.files.length) f.ftp={}; iA(0); } });
	
	function iA(i) {
		var s=g.files[i].name,q=f.ftp[s]=new FileReader();
		q.onloadstart=p.go; q.onerror=iA.bind(null,i);
		q.onload=function() {
			f.ftp[s]=q.result; if(p.bin) f.ftp[s]=new Uint8Array(f.ftp[s]); else if(p.dec) f.ftp[s]=f.Res(f.ftp[s]);
			if(p.dec=="E") f.ftp[s]=_.ON(f.ftp[s],'-');
			if(i<g.files.length-1) iA(i+1); else { if(p.onl) p.onl(f); if(f.form) f.form.NS(); }
		};
		f.ftp[s]["readAs"+(p.bin?"ArrayBuffer":"DataURL")](g.files[i]);
	}
},
NUM:function(f,p) {
	f.lbl=_.xM("div",0,f); f.lbl.innerHTML=p.lbl||"";
	var u,g=f.fld=_.xM("input",0,f,0,"TXT FLD"),a=["w","stp","min","max","fix","mrk","mod"],i;
	f.classList.add("CON"); g.type="text";
	_.xB(f,"w",0,function(v){
		var b=["initial","auto"];
		_.xS(f.fld,v||"unset"); f.lbl.style.flex=b[v?1:0]; f.fld.style.flex=b[v?0:1];
	});
	f.Val=function(v,w) {
		var t=_.xT(v); if(!t) return w=="V"?f.val:_.Num.T(f.val,f.stp,f.min,f.max);
		if(f._m=="H"&&t=="S") { v=parseInt(v.substr(2),16); if(isNaN(v)) v=0; }
		else v=_.Num.N(v); f.val=v; v=_.Num.T(v,f.stp,f.min,f.max);
		if(f._m=="C"||f._m=="S") v=_.Num.S(v,f.fix,f._m=="C"?p.mrk:u);
		else if(f._m=="M") v=_.Num.M(v); // style='unit' yet not 100% supported
		else if(f._m=="B") v=v.toLocaleString(_.Lang,_.Num.F({ style:'percent' },f.fix));
		else if(f._m=="H") v="0x"+v.toString(16);
		f.fld.value=v+(f._m=="C"||!f.mrk?"":" "+f.mrk); if(f.form) f.form.NS(); if(p.chng) f.fw(p.chng.bind(this,f,v));
	};
	_.xE(g,"focus",function() { if(f.rdo) this.blur(); else this.value=f._m=="H"?"0x"+f.val.toString(16):f.val; });
	_.xE(g,"blur",function() { f.Val(this.value); });
	_.xE(g,"click",function(){ if(!f.rdo&&f.clk) f.clk(f); });
	_.xB(f,"mod",function(){ return f._m; },function(v){
		f._m=v; if(v=="C"&&!f.fix) f.fix=2; if(v=="B") f.mrk="%";
		if(v=="M") { delete f.mrk; f.min=0; } f.Val(f.val);
	});
	if(p.clk) f.clk=p.clk; for(i in a) f[a[i]]=p[a[i]]; f.Val(p.val||0);
},
TXT:function(f,p) {
	var z,i,t={p:"password",t:"tel",e:"email",u:"url"},a={pat:"pattern",plc:"placeholder"},c=["w","alg","len","chng"];
	f.lbl=_.xM("div",0,f); f.lbl.innerHTML=p.lbl||""; f.classList.add("CON");
	z=f.fld=_.xM("input",0,f,0,"TXT FLD");
	_.xB(f,"len",function(){ return z.maxLength; },function(v){ if(v&&!f.len) f.rdo=0; z.maxLength=v||0; if(!v) f.rdo=1; });
	f.$rdo=function(v){ if(!v&&!f.len) f.rdo=1; };
	_.xB(f,"alg",function(){ return f.fld.style.textAlign; },function(v){
		var d={r:"right",c:"center",j:"justify"};
		f.fld.style.textAlign=d[v]||"left";
	});
	for(i in a) { _.xB(f,i,_.xW.bind(this,z,a[i],'~'),_.xW.bind(this,z,a[i])); f[i]=p[i]; }
	_.xB(f,"w",0,function(v){
		var b=["initial","auto"];
		_.xS(f.fld,v||"unset"); f.lbl.style.flex=b[v?1:0]; f.fld.style.flex=b[v?0:1];
	});
	z.type=t[p.tp]||"text";
	_.xE(z,"focus",function() { if(f.rdo||!f.len) this.blur(); });
	_.xE(z,"keydown",function(e) {
		var kc=e.keyCode; if(kc==229 || kc===0) kc=e.charCode;
		if(p.enter && kc==13) { e.preventDefault(); p.enter(f); }
	});
	_.xE(z,"change",f.fw.bind(this,f.chng)); if(p.mul) _.xW(f,p.tp=="e"?"multiple":"ML",1);
	_.xE(z,"click",function(){ if(!f.rdo&&f.clk) f.clk(f); }); // ML!!!
	f.Val=function(v) { if(!_.xT(v)) return z.value; z.value=v; if(f.form) f.form.NS(); };
	if(p.clk) f.clk=p.clk; for(i in c) f[c[i]]=p[c[i]]; f.Val(p.val);
},
TAR:function(f,p) {
	var z,i,a=["wrp","bar","len","plc","na","chng"]; f.lr=1;
	if(!p.d) _.xS(f,500,150);
	f.lbl=_.xM("div",0,f); f.lbl.innerHTML=p.lbl||""; f.classList.add("CON");
	z=f.fld=_.xM("textarea",0,f,["100%","100%"],"TXT FLD");
	_.xC(z,{ flex:"initial" }); z.style.resize="none"; _.mR(f,p.rsx);
	_.xB(f,"len",function(){ return f.fld.maxLength; },function(v){
	    if(v&&!f.len) f.rdo=0; f.fld.maxLength=v||0; if(!v) f.rdo=1; iB();
	});
	f.$rdo=function(v) { if(f.bar) f._bar.off=v; };
	_.xB(f,"plc",_.xW.bind(this,z,"placeholder",'~'),_.xW.bind(this,z,"placeholder"));
	_.xB(f,"wrp",function(){ return _.xW(z,"wrap","~")=="off"?0:1; },function(v){
		var b={S:"soft",H:"hard"}; _.xW(f.fld,"wrap",b[v]||"off");
	});
	_.xB(f,"na",0,function(v) {
		var b=["complete","correct","capitalize","spellcheck"];
		for(var j=0 ; j<4 ; j++) _.xW(f.fld,(j<3?"auto":"")+b[j],j<3?(v?"on":"off"):(v?"true":"false"));
	});
	_.xB(f,"bar",function(){ return f._bar?1:0; },function(v){
		if(v&&!f._bar) { f._bar=_.CTR({c:"DIV",off:f.rdo,chl:[
			{c:"SBT",txt:"\ue015",clk:function(){ f.fld.focus(); iA(); }},
			{c:"SBT",txt:"\ue020",lf:1,clk:function(){ f.wrp=f.wrp?0:"S"; }},
			{c:"SBT",txt:"\ue021",lf:1,clk:function(){
				f.fld.focus(); var x=f._bar.childNodes[3].Val(),q=z.selectionStart,w=""; 
				if(x==="") return; while(_.xN(w+x,z)<z.offsetWidth-20) w+=x;
		        z.value=z.value.substr(0,q)+"\n"+w+"\n"+z.value.substr(q);
		        w=w.length+2; z.setSelectionRange(q+w,q+w);
			}},
			{c:"TXT",len:1,lf:1,w:20,val:"-"},
			{c:"DIV",lf:1,html:""}
		]},f); iB(); }
		else if(!v) { _.xX(f._bar); delete f._bar; }
	});
	_.xE(z,"focus",function() { if(f.rdo||!f.len) this.blur(); });
	_.xE(z,"keydown",function(e) {
		var kc=e.keyCode; if(kc==229||kc===0) kc=e.charCode;
		if(kc==9) { e.preventDefault(); iA(); }
	});
	_.xE(z,"change",function(){ if(f.chng) f.fw(f.chng.bind(this,f)); }); if(p.mul) _.xW(f,"ML",1);
	_.xE(z,"click",function(){ if(!f.rdo&&f.clk) f.clk(f); });
	_.xE(z,"input",iB);
	f.Val=function(v) { if(!_.xT(v)) return z.value; z.value=v; iB(); if(f.form) f.form.NS(); };
	if(p.clk) f.clk=p.clk; for(i in a) f[a[i]]=p[a[i]]; f.Val(p.val);
	
	function iA() {
		var q=z.selectionStart;
		z.value=z.value.substr(0,q)+"\t"+z.value.substr(q);
		z.setSelectionRange(q+1,q+1);
	}
	function iB(){ if(f._bar) f._bar.chl[4].innerHTML=f.fld.value.length+"/"+f.len; }
},
TRE:function(f,p) {
	var z=f.tre=_.xM("ul",0,f,["100%","100%"],"TRV"),j; f.classList.add("FLD");
	_.mR(f,p.rsx?1:0); f.stl=_.STL(['.TRV[kv] .TRM{}'],f); _.xB(f,"wrp",1,1);
	_.xB(f,"kv",_.xW.bind(this,f.tre,"kv","~"),function(v){
		_.xW(f.tre,"kv",v); f.stl.Rul(0,{width:v+"em"});
	});
	if(p.ahi==1) f.ahi=_.Cfg.TRE.ahi; f.kv=_.xT(p.kv)?p.kv:_.Cfg.TRE.kv; f.xs=p.xs;
	
	f.Add=function(c,d,a) {
		if(!c) return; var o,m,g,i;
		if(_.xT(c)=="A") { for(i in c) f.Add(c[i],d,a); return; }
		o=f.Exists(d)||f.Sel; if(!o&&z.children.length) o=z.children[0];
		while(o) { m=_.xT(o.val); if(m!=="A"&&m!=="H") o=o.hd; else break; }
		if(o) {
			if(_.xT(c.k)) g=f.Exists(o,c.k); if(g&&a) return;
			if(!g) {
				if(m=="A") c.k=o.bs?o.bs.children.length:0;
				else if(!_.xT(c.k)) c.k=_.aS();
				if(!o.bs) o.bs=_.xM("ul",0,o,0,"TRB");
			}
		}
		if(!g) {
			g=_.xM("li",0,o?o.bs:z,0,"TRL"); g.hd=o; m=_.xM("div",0,g);
			g.ico=_.xM("div",0,m,["1em","1em"],"TRI"); g.ico.innerHTML="\ue018";
			if(_.xT(c.k)) g.ke=_.xM("span",0,m,0,"TRM");
			_.xB(g,"key",function(){ return this._k; },function(v){ this._k=v; if(g.ke) g.ke.innerHTML=v; });
			if(o) g.key=c.k; g.txt=_.xM("div",0,m,0,"TRZ");
			_.xB(g,"clp",function() { return _.xW(g.bs,"clp","~"); },function(v){
				if(g.bs) { _.xW(g.bs,"clp",v); g.ico.innerHTML=v?"\ue019":"\ue018"; }
			});
			g.xs=c.xs; _.xE(g.ico,"click",function() { g.clp=g.clp?0:1; });
			_.xE(g.txt,"click",iS.bind(this,g)); if(g.ke) _.xE(g.ke,"click",iS.bind(this,g));
		}
		m=_.xT(c.v);
		if(!c.x&&(m=="A"||m=="H")) { c.x=[]; for(i in c.v) c.x.push({ v:c.v[i],k:i }); c.v=(m=="A"?[]:{}); }
		if(c.i) { if(!g.cic) g.cic=_.xM("img",0,g.ico.parentNode,0,0,g.ico); g.cic.src=c.i; }
		else if(f.ahi) { if(g.cic) _.xX(g.cic); g.cic=_.SVG.Draw(f.ahi[m=="A"?0:(m=="H"?1:2)],{u:g.ico}); }
        _.xE(g.cic,"click",iS.bind(this,g));
		g.dt=c.d; m={A:"[]",H:"{}"}[m]; g.txt.innerHTML=_.xT(c.c)?c.c:(m||c.v); g.val=c.v;
		if(c.x) { f.Add(c.x,g,a); if(g.bs&&!p.xsel&&!c.xsel) g.clp=1; }
		if(f.form) f.form.NS(); return g;
	};
	f.Path=function(o) {
		var s=""; if(!o) o=f.Sel||z.children[0];
		while(o) { s=o.key+(s===""?"":".")+s; o=o.hd; }
		return s;
	};
	f.Exists=function(o,k) {
		if(_.xT(o)=="S") {
			var i,q=o.split(/\./); o=z.children[0];
			for(i=0 ; o&&i<q.length ; i++) if(q[i]!=="") o=iA(o,q[i]);
		}
		return _.xT(k)?iA(o,k):o;
	};
	f.Select=function(k) { iS(f.Exists(k)); };
	f.CMP=function(a,b) { return (f.Path(a)==f.Path(b)); };
	f.ChKey=function(o,k,c) { o=f.Exists(o)||f.Sel; if(o&&o.hd) return iC(o,k,c); };
	f.Move=function(a,b,c,d) {
		a=f.Exists(a)||f.Sel; b=f.Exists(b)||f.Sel; if(!a||!b||f.CMP(a,b)||!a.hd) return 1;
		if(!b.hd) c=1; var t=[_.xT(a.hd.val),_.xT(c?b.val:b.hd.val)],w;
		if(c&&t[1]!=="A"&&t[1]!=="H") return 2;
		if(t[0]=="A") iB(a); else if(!d&&t[1]=="H"&&iA(c?b:b.hd,a.key)) return 3;
		if(c) if(!b.bs) iD(b,1); w=a.hd; a.hd=(c?b:b.hd);
		if(c) b.bs.appendChild(a); else b.hd.bs.insertBefore(a,b);
		if(t[1]=="A") if(c) a.key=b.bs.children.length; else iB(b,1);
		else iC(a,t[0]=="A"?_.aS():a.key,d);
		if(!w.bs.children.length) iD(w); if(f.form) f.form.NS();
	};
	f.Del=function(o,c) {
		o=f.Exists(o)||f.Sel; if(!o) return;
		if(o.bs&&c) { var i,a=o.bs.children; while(a.length) f.Move(a[0],o,0,1); }
		if(o.hd&&_.xT(o.hd.val)=="A") iB(o);
		if(o.hd&&o.hd.bs.children.length==1) iD(o.hd); else _.xX(o);
		if(f.Sel&&!f.Sel.parentNode) f.Sel=null; if(f.form) f.form.NS();
	};
	f.Clean=function(o) {
		o=f.Exists(o)||f.Sel; if(!o||!o.bs) return;
		var i,x=o.bs.children; for(i=0 ; i<x.length ; i++) f.Del(x[i]);
	};
	f.Val=function(v) { if(!v) return iE(); f.Del(""); f.Add({v:v}); };
	f.Add(p.src);
	
	function iA(o,q) {
		var t=_.xT(o.val),a,j; if((t!=="A"&&t!=="H")||!o.bs) return;
		a=o.bs.children;
		if(t=="A") return a[(q*1)];
		else for(j=0 ; j<a.length ; j++) if(a[j].key==q) return a[j];
	}
	function iB(a,d) { while(a) { a.key+=(d?1:-1); a=a.nextSibling; } }
	function iC(o,k,c) { while(iA(o.hd,k)) if(c) k=_.aS(); else return 1; o.key=k; }
	function iD(o,d) {
		if(d) { o.bs=_.xM("ul","",o,0,"TRB"); o.clp=1; }
		else { o.clp=0; _.xX(o.bs); delete o.bs; }
	}
	function iE(o) {
		if(!o) o=z.children[0]; if(!o) return;
		var v,s,t=_.xT(o.val),i;
		if(o.bs) {
			s=o.bs.children;
			for(i=0 ; i<s.length ; i++)
				if(t=="A") { if(!v) v=[]; v.push(iE(s[i])); }
				else { if(!v) v={}; v[s[i].key]=iE(s[i]); }
			return v;
		}
		return o.val;
	}
	function iS(o) {
		if(!o||o.xs||f.xs) return;
		if(f.Sel) { _.xW(f.Sel,"sel"); if(f.CMP(f.Sel,o)) o=null; }
		f.Sel=o; if(o) { _.xW(o,"sel",1); if(p.chng) f.fw(p.chng.bind(null,f)); }
	}
},
TRK:function(f,p) {
	var g=_.xM("div",0,f,0,"TRK"),x=["w","min","max","stp"],i;
	f.classList.add("CON"); f.lbl=_.xM("div",0,f,0,{flex:"initial"},g); f.lbl.innerHTML=p.lbl||"";
	f.pos=_.xM('div',0,g,[0,"1em"]); _.xE(f.pos,"blur",iA);
	f.Val=function(v) {
		if(!_.xT(v)) return f.val; f.val=_.Num.T(v,f.stp,f.min,f.max);
		_.xS(f.pos,((f.val-f.min)*100/(f.max-f.min))+"%"); f.pos.innerHTML=f.val;
		if(f.form) f.form.NS(); if(p.chng) f.fw(p.chng.bind(this,f));
	};
	_.xB(f,"w",0,function(v){
		var b=["initial","auto"];
		_.xS(g,v||"unset"); f.lbl.style.flex=b[v?1:0]; g.style.flex=b[v?0:1];
	});
	_.xB(f,"min",function(){ return g.min; },function(v){ g.min=v; f.Val(f.val); });
	_.xB(f,"max",function(){ return g.max; },function(v){ g.max=v; f.Val(f.val); });
	_.xB(f,"stp",function(){ return g.stp; },function(v){ g.stp=v; f.Val(f.val); });
	_.mM(g,function(e) {
		if(!f.rdo&&(e.buttons==1||e.type=="touchmove")) { e.preventDefault(); iB(e,1); }
	},true);
	_.mC(g,iB,3); f.trk=g; for(i in x) f[x[i]]=p[x[i]]; f.Val(p.val||(f.min+(f.max-f.min)/2));
	
	function iA() { _.xW(f.pos,"contenteditable"); f.Val(_.Num.N(f.pos.innerHTML)); }
	function iB(e,a) {
		if(f.rdo) return;
		if(a==1) f.Val(f.min+(f.max-f.min)*(_.mP(e)[0]/g.offsetWidth));
		else if(a==2) {
		    _.xW(f.pos,"contenteditable",true); f.pos.focus();
		    document.getSelection().collapse(f.pos,1);
		}
	}
},
CMB:function(f,p) {
	f.classList.add("CON"); f.lbl=_.xM("div",0,f); f.lbl.innerHTML=p.lbl||""; f.opt={};
	f.fld=_.xM("div",0,f,0,"FLD");
	var a=["w","srt","add","del","icd","ics","dh","chng"],g=_.xM("div",0,f.fld),i;
	_.xB(f,"w",0,function(v){
		var b=["initial","auto"]; _.xS(f.fld,v||"unset");
		f.lbl.style.flex=b[v?1:0]; f.fld.style.flex=b[v?0:1];
	});
	_.xB(f,"icd",function(){ return f._icd; },function(v) {
	    f._icd=v; var t=f.flx.childNodes,j; for(j=0 ; j<t.length ; j++) _.xS(t[j],v);
	    if(f.sel) _.xS(f.sel,v);
	});
	_.xB(f,"ics",function(){ return f._ics; },function(v) {
	    f._ics=v; var t=f.flx.childNodes,j; for(j=0 ; j<t.length ; j++) _.xC(t[j],v);
	    if(f.sel) _.xC(f.sel,v);
	});
	f.Add=function(d){
	    if(_.xT(d)=="A") { for(var k in d) f.Add(d[k]); return; }
	    if(f.opt[d.k]) f.Del(d.k); var x=f.opt[d.k]=_.xM("div",0,f.flx,0,"CMB_REC PNT");
	    if(d.ico) { x.ico=_.xM("img",0,x,f.icd,f.ics); x.ico.src=d.ico; }
	    x.txt=_.xM("span",0,x,0,d.txs); x.txt.textContent=d.txt||d.val||d.k;
	    x.val=d.val||d.k; x.k=d.k; _.xE(x,"click",f.Val.bind(this,x,0)); if(f.srt) iC(x);
	};
	f.Del=function(k) {
		if(!k) k=f.sel; if(_.xT(k)=="S") k=f.opt[k]; if(!k) return;
		delete f.opt[k.k]; if(f.sel===k) delete f.sel; _.xX(k);
	};
	f.Clean=function() {
	    var t=f.flx.childNodes; while(t.length) _.xX(t[0]); f.opt={};
	    if(f.sel) { _.xX(f.sel); delete f.sel; }
	};
	_.xB(f,"srt",function(){ return f._srt; },function(v){
	    f._srt=v; var q=[],j,t=f.flx.childNodes;
	    if(v) for(j=0 ; j<t.length ; j++) q.push(t[j]); for(j in q) iC(q[j]);
	});
	f.bar=_.CTR([
		{c:"SBT",txt:"\ue016",clk:iA},
		{c:"SBT",txt:"\ue00b",clk:iB},
		{c:"SBT",txt:"\ue00d",clk:function() { f.Del(); if(_.xT(f.del)=="Q") f.del(f); }}
	],f.fld);
	_.xB(f,"add",0,function(v){ f.bar[1].off=v?0:1; f.bar[1].clk=!v||_.xT(v)=="Q"?v:iB.bind(this,v); });
	_.xB(f,"del",0,function(v){ f.bar[2].off=v?0:1; });
	f.flx=_.xM("div",0,0,0,"CMB_FLX FLD");
	_.xB(f,"dh",function(){ return f._dh; },function(v){ f._dh=v||200; _.xS(f.flx,0,f._dh); });
	
	f.Val=function(k,q) {
	    var t=_.xT(k),j; if(!t) {
	        if(q=="v") {
	            t=f.flx.childNodes; q={};
	            for(j=0 ; j<t.length ; j++) q[t[j].k]=t[j].val;
	            t=f.sel; if(t) q[t.k]=t.val;
	        }
	        else if(q=="a") {
	            t=f.flx.childNodes; q={};
	            for(j=0 ; j<t.length ; j++) q[t[j].k]=[t[j].ico?t[j].ico.src:"",t[j].val,t[j].textContent];
	            t=f.sel; if(t) q[t.k]=[t.ico.src,t.val,t.textContent];
	        }
	        else { t=f.sel; q=t?(q=="k"?t.k:(q=="t"?t.textContent:(q=="s"?t:(_.xT(t.val)?t.val:t.k)))):null; }
	        return q;
	    }
	    if(t=="S") k=f.opt[k]; if(!k) return; if(f.sel) { iC(f.sel); delete f.sel; }
	    g.appendChild(k); f.sel=k; _.xX(f.ee.blk); if(f.chng) f.fw(f.chng.bind(this,f)); if(f.form) f.form.NS();
	};
	for(i in a) f[a[i]]=p[a[i]]; f.Add(p.opt||[]); if(!p.val&&p.req) p.val=p.opt[0].k; f.Val(p.val);
	
	function iA() {
	    if(f.rdo) return; _.xS(f.flx,f.offsetWidth); var c=_.xU(f),b=f.offsetHeight;
	    f.ee.blk=_.xH(); _.xE(f.ee.blk,"click",function(){ _.xX(f.ee.blk); }); f.ee.blk.appendChild(f.flx);
	    if(c[1]+b+f.dh<(document.body.scrollTop+window.innerHeight)) c[1]+=b;
	    else c[1]-=f.dh; _.xP(f.flx,{l:c[0],t:c[1]});
	}
	function iB(v) {
		if(f.adf) return; if(v.t) v.t.n="val";
		f.adf=_.FRM({ atc:f.form,p:"C",xhid:1,drg:1,cls:function(){ delete f.adf; },tit:_.ML({
		    EN:"Add item",
		    ZH:"添加项"
		}),chl:[
		    { c:"TXT",n:"k",lbl:_.ML({ EN:"Key: ",ZH:"钥匙：" }),len:32,d:[300],off:v.f&1||v.f&2,val:(v.f&1?_.aS():"") },
		    { c:"DIV",html:_.ML({ EN:"Icon: ",ZH:"图标：" }) },
		    { c:"IMG",n:"ico",d:f.icd||[32,32],alg:"S",qs:"UriI",upk:1,off:v.f&4,algb:4,lf:1 },
		    v.t||{ c:"TXT",n:"val",lbl:_.ML({ EN:"Value: ",ZH:"值：" }),len:32,d:[300] },
		    { c:"TXT",n:"txt",lbl:_.ML({ EN:"Caption: ",ZH:"标签：" }),len:32,d:[300],off:v.f&8 },
		    { c:"SBT",txt:"\ue00f",p:{r:0,b:0},clk:function(){
		        v=f.adf.Val(); if(!v) return;
		        f.Add({k:v.k,ico:v.ico,val:v.val,txt:v.txt}); f.adf.Close();
		    } }
		] });
	}
	function iC(x) {
	    var s=f.srt||"X",r=(s[1]=="D"?1:0),b={K:"k",S:"textContent",V:"val"},t=f.flx.childNodes,v,j;
	    s=s[0]; if(b[s]) for(j in t) {
            v=t[j][b[s]]; if((r&&x[b[s]]>v)||(!r&&x[b[s]]<v)) return f.flx.insertBefore(x,t[j]);
	    }
	    f.flx.appendChild(x);
	}
},
IMG:function(f,p) {
    var i,a=["zm","alg","chng","algb","onl","efc"],g=_.xM("div",0,f,0,"IMG_BOX FLD"),t,z;
    f.img=_.xM("img",0,g); _.mR(f,p.rsx);
    _.xB(f,"alg",1,function(v){ _.xW(f,"alg",v); iA(); });
    _.xB(f,"zm",function(){ return f._zm; },function(v){ f._zm=v||100; iA(); });
    _.xE(g,"click",function(){ if(!f.rdo&&f.clk) f.clk(f); });
    _.xB(f,"onl",function(){ return f._onl; },function(v){ f._onl=v?v.bind(this,f):v; });
    f.Val=function(v,q) {
        t=_.xT(v);
        if(t) {
            if(t=="I") v=_.CVS.ItoR(v);
            if(v.constructor.name=="ImageData") v=_.CVS.RtoI(v);
            f.img.load(v,function() { if(f._onl) f._onl(f); iB(); }); if(v==="") iB();
        }
        else {
            if(f.img.src==="") return null;
            if(q=="Img") return f.img;
            if(q=="Raw"||q=="RawI") return _.CVS.ItoR(f.img,q=="Raw"?0:"R");
            if(q=="Uri"||q=="UriI") return _.CVS.RtoI(_.CVS.ItoR(f.img,q=="Uri"?0:"R"));
            if(q=="B64") {
                v=f.img.src.indexOf('data:')?f.Val(null,"Uri"):f.img.src;
                return v.substr(f.img.src.indexOf('base64,')+7);
            }
            return f.img.src;
        }
    };
    f.bar=_.CTR({c:"DIV",u:g,p:{},chl:[
        {c:"SBT",txt:"\ue00d",clk:function(){ f.Val(""); }},
        {c:"SBT",txt:"\ue026",lf:1,clk:function(){ f.bar.childNodes[3].off=0; f.bar.childNodes[4].off=1; }},
        {c:"SBT",txt:"\ue01f",lf:1,clk:function(){ f.bar.childNodes[3].off=1; f.bar.childNodes[4].off=f.bar.childNodes[4].off?0:1; }},
        {c:"CMB",d:[120],lf:1,opt:[
            {k:"X",txt:_.ML({EN:"Natural"})},
            {k:"S",txt:_.ML({EN:"Fit to box"})},
            {k:"W",txt:_.ML({EN:"Fit to width"})},
            {k:"H",txt:_.ML({EN:"Fit to height"})}
        ],off:1,chng:function(e){ f.alg=e.Val(); f.bar.childNodes[3].off=1; }},
        {c:"TRK",min:-100,max:100,d:[200],lf:1,off:1,chng:function(e){ f.zm=Math.pow(1.05,e.Val())*100; }}
    ]});
    f.$upk=function(v) { f.bar.childNodes[0].off=v?0:1; };
    _.xB(f,"algb",function(){ return f._algb; },function(v){
        f._algb=v;
        f.bar.childNodes[1].off=v&1?0:1;
        f.bar.childNodes[2].off=v&2?0:1;
        f.bar.childNodes[0].off=v&4?1:0;
    });
    if(p.clk) f.clk=p.clk; for(i in a) f[a[i]]=p[a[i]]; f.Val(p.val);
    if(f.efc) {
        g.style.display="none"; t=f.efc[0]; f.efc[0]=0; f.efc[1]=new Array(f.efc[1]);
        for(i=0 ; i<f.efc[1].length ; i++) {
            f.efc[1][i]=z=new Image(); _.xW(z,"efc",f.efc[2]);
            f.appendChild(z); z.load(t.replace(/\$/,i),iD);
        }
    }
    
    function iA() {
        var tw={S:"100%",W:f.zm+"%"},th={S:"100%",H:f.zm+"%"};
        _.xS(f.img,tw[f.alg]||"unset",th[f.alg]||"unset");
    }
    function iB() { if(f.chng) f.fw(f.chng.bind(null,f)); if(f.form) f.form.NS(); }
    function iC(r) {
        var m=f.efc[2],v=f.efc[1].length,w=f.efc[1][r%v],q={
            FD:["opacity",1,0],RS:["left","0%","100%"],TW:["transform","rotate(0deg) scale(1,1)","rotate(3600deg) scale(0,0)"]
        };
        w.style.zIndex=r; w.style[q[m][0]]=q[m][1];
        setTimeout(function() { if(r) f.efc[1][(r-1)%v].style[q[m][0]]=q[m][2]; setTimeout(iC,f.efc[3]*1000,r+1); },f.efc[4]*1000);
    }
    function iD() { f.efc[0]++; if(f.efc[0]==f.efc[1].length) iC(0); }
},
CPK:function(f,p) {
    var a=["w","chng","alp"],i;
    f.lbl=_.xM("div",0,f); f.lbl.innerHTML=p.lbl||""; f.classList.add("CON");
    f.fld=_.xM("div",0,f,[0,"2em"],"FLD CPK PNT");
    _.xB(f,"w",0,function(v){
		var b=["initial","auto"]; _.xS(f.fld,v||"12em");
		f.lbl.style.flex=b[v?1:0]; f.fld.style.flex=b[v?0:1];
	});
	_.xB(f,"alp",function(){ return f._a; },function(v){ f._a=v; if(!v&&f.val) { f.val.V[3]=255; f.Val(f.val); } });
	_.xE(f,"click",function() {
	    if(f.rdo) return; _.Rsf.CPK({
		    id:f.id||("C"+_.aS()),txt:f.lbl.textContent,p:"C",val:f.val,alp:f.alp,ok:function() { f.Val(f.mf.val); f.mf.Close(); }
	    },f);
	});
	f.Val=function(v) {
		if(!v) return f.val; f.val=new _.Color(v,f._a); if(f.form) f.form.NS(); f.fld.innerText=f.val.CSS();
		_.xC(f.fld,{ backgroundColor:f.val.CSS(),color:f.val.REV() }); if(f.chng) f.fw(f.chng.bind(this,f));
	};
	for(i in a) f[a[i]]=p[a[i]]; f.Val(p.val||0xffffffff);
},
CAM:function(f,p) {
	var x=[[3840,2160],[1920,1080],[1600,1200],[1280,720],[800,600],[640,480],[640,360],[352,288],[320,240],[176,144],[160,120]],
	g=f.vid=_.xM('video',0,f),l=["fm","aut","ctr","aud","snp","ok","err"],i; f.classList.add("FLD"); f.vp={};
	_.xB(f,"vd",0,function(z) { f._vd=z||6; f.vp.width=x[f._vd-1][0]; f.vp.height=x[f._vd-1][1]; f.Stop(); iB(); });
	_.xB(f,"fm",0,function(v){
	    f._fm=v; if(v) f.vp.facingMode=(v=="F")?"user":{exact:"environment"}; else delete f.vp.facingMode;
	    f.Stop(); iB();
	});
	_.xB(f,"aud",0,function(v){ f._aud=v?true:false; f.Stop(); iB(); }); // maybe can toggle it during runtime?! To check at home.
	_.xB(f,"aut",function(){ return g.autoplay; },function(v){ g.autoplay=v?true:false; });
	_.xB(f,"ctr",function(){ return g.controls; },function(v){ g.controls=v?true:false; });
	_.xB(f,"snp",0,function(v){ f._snp=v; if(v) f.classList.add("PNT"); else f.classList.remove("PNT"); });
	_.mR(f,p.rsx); f.Play=f.vid.play; f.Pause=f.vid.pause;
	
	f.Snap=function() { if(g.videoWidth) return _.CVS.ItoR(g,g.videoWidth,g.videoHeight); };
	f.Stop=function() {
		if(!g.str||!f.ready) return; g.str.getTracks().forEach(function (t) { t.stop(); });
		if("srcObject" in g) g.srcObject=null; else g.src=null;
	};
	f.Run=function() { navigator.mediaDevices.getUserMedia({ video:f.vp,audio:f._aud }).then(iX).catch(iE); };
	_.xE(f,"click",function() { if(f._snp&&!f.rdo) f._snp(f.Snap()); });
	f.vd=p.vd||6; for(i in l) f[l[i]]=p[l[i]]; f.ready=1; f.Run();
	
	function iB() { if(f.ready) if(g.str&&g.str.active) setTimeout(iB,200); else f.Run(); }
	function iX(e) {
		g.str=e;
		_.Alert(_.ML({ EN:"Webcam opened ",ZH:"视线头开了" })+g.videoWidth+"x"+g.videoHeight);
		if("srcObject" in g) g.srcObject=e; else g.src=window.URL.createObjectURL(e); g.play(); if(f.ok) f.ok();
	}
	function iE(e) {
		if(!f._vd||(e&&e.name!=="OverconstrainedError")) { _.Alert({ tit:e.name,txt:e.message,err:1 }); if(f.err) f.err(); }
		else f.vd=f._vd<x.length?f._vd+1:0;
	}
},
CAL:function(f,p) {
    f.lbl=_.xM("div",0,f); f.lbl.innerHTML=p.lbl||""; f.classList.add("CON");
    f.fld=_.xM("div",0,f,["12em","2em"],"FLD PNT");
    _.xE(f,"click",function() { if(!f.rdo) _.Rsf.CAL({ id:f.id||("C"+_.aS()),txt:f.lbl.textContent,tp:f._tp },f); });
    _.xB(f,"tp",function(){ return f._tp; },function(v){ f._tp=v; iA(); });
	f.Val=function(v) {
		var x=_.xT(v); if(!x) return f.val;
		if(x=="N") v=new Date(v);
		else if(x=="A") v=new Date(v[0],v[1]-1,v[2]||1,v[3]||0,v[4]||0,v[5]||0,v[6]||0);
		else if(x!=="D") return; f.val=v;
		iA(); if(f.chng) f.chng();
	};
	f.Val(p.val||new Date()); f.chng=p.chng;
	function iA() {
	    var v=f.val,t=f._tp||"",w="to";
	    if(t===""||t[0]=="L") { w+="Locale"; t=t[1]||""; }
	    w+=(t=="T"?"Time":(t=="D"?"Date":""))+"String";
	    f.fld.innerHTML=v[w]();
	}
}, // cannot assure stability of Rsf.CAL without first completting TBL
TBL:function(f,p) {
	f.classList.add("FLD"); var i;
	_.xB(f,"clok",1,function(v){
	    _.xW(f,"clok",v); if(!v) v=0; var j,r,o=f.tb.rows,c;
	    for(r=0 ; r<f.col.cells.length ; r++){
	        c=f.col.cells[r]; _.xW(c,"th",r<v?1:0);
	        for(j=0 ; j<o.length ; j++) _.xW(o[j].cells[r],"th",r<v?1:0);
	        if(r>=v) f.stl.Del("C"+c.uid);
	    }
	    iB(f.col.cells[0]);
	});
	
	f._tc=_.xM("div",0,f); f.tbl=_.xM("table",0,f._tc); f.th=_.xM("thead",0,f.tbl); f.tb=_.xM("tbody",0,f.tbl);
	
	f._tit=_.xM("th",0,_.xM("tr",0,f.th)); _.xB(f,"tit",function(){ return f._tit.textContent; },function(v){
	    f._tit.textContent=v; f._tit.style.display=_.xT(v)?"":"none";
	    f._bar.style.top=f._tit.offsetHeight+"px"; iA();
	});
	f._bar=_.xM("th",0,_.xM("tr",0,f.th)); f.tbx={};

	f.Del=function(k) {
	    var t=_.xT(k),j,o; if(t=="A") { for(j in k) f.Del(k[j]); return; }
	    if(t=="S") { o=f.Exists(k); t="O"; } else if(t=="O") { o=k; k=o.cells[f.rk].val; }
	    if(t=="O") { if(o&&o.nodeName=="TR") {
	        if(f.selm=="S"&&f.sel===o) f.sel=null;
	        else if(f.selm=="M"&&f.sel[k]) delete f.sel[k];
	        _.xX(o);
	    } }
	    else if(!t) {
	        if(f.selm=="S"&&f.sel) f.Del(f.sel);
	        else if(f.selm=="M") for(j in f.sel) f.Del(f.sel[j]);
	    }
	};
	f.Clean=function() { var r=f.tb.rows; while(r.length) f.Del(r[0]); };
	f.Tool=function(c,k){
	    if(_.xT(c)!=="H") return;
	    if(k) f.tbx[k]=_.CTR(c,f._bar); else for(var j in c) f.Tool(c[j],j); iA();
	};
	f.xTool=function(k) { if(f.tbx[k]) { _.xX(f.tbx[k]); delete f.tbx[k]; iA(); } };
	_.xB(f,"bar",function(){ return f._bar.style.display=="none"?0:1; },function(v){ f._bar.style.display=v?"":"none"; iA(); });
	
	f.col=_.xM("tr",0,f.th);
	_.xB(f,"selm",1,function(v){ f.Sel(null,"X"); _.xW(f,"selm",v); f.sel=(v=="M"?{}:null); });
	f.Col=function(d,x) {
	    if(_.xT(x)=="N") x=f.col.cells[x];
	    var o=_.xM("th",0,f.col,0,"TBL_THC",x),l=f.col.cells.length,c=x?x.cellIndex:l,b=["txt","alg","w","h","an"],g,s,j,t=f.tb.rows;
	    o.uid=_.aS(); _.xW([f._tit,f._bar],"colspan",l); o._txt=_.xM("div",0,o); o._bar=_.xM("div",0,o);
	    _.xB(o,"txt",function(){ return o._txt.innerHTML; },function(v){ o._txt.innerHTML=_.xT(v)?v:""; });
	    _.xB(o,"alg",0,function(v){
	        o._txt.style.textAlign=(v=="R"?"right":(v=="C"?"center":"left"));
	        // This align shall go to all cells - use STL
	    });
	    _.xB(o,"w",function(){ return o.offsetWidth; },function(v){
	        _.xC(o,{minWidth:(v?v+"px":""),maxWidth:(v?v+"px":"")});
	    });
	    _.xB(o,"h",function(){ return ""; },function(v){
	        // toggle visibility (h=1 = hidden)
	    });
	    o.xC=function(z) {
	        var n=o.cellIndex;
			if(!f.stl.Get("C"+o.uid)) f.stl.Add(" tr td:nth-child("+(n+1)+"), #"+f.id+" tr:nth-child(3) th:nth-child("+(n+1)+"){}","C"+o.uid);
			f.stl.Rul("C"+o.uid,z);
	    };
		if(d.s) o.xC(d.s); o.$rsx=function(){ iB(this.nextSibling); }; _.mX(o,d.rsx,1); for(j in b) o[b[j]]=d[b[j]];
	    for(j=0 ; j<t.length ; j++)
	        if(!t[j].xsel) iD(_.xM("td",0,t[j],0,0,x?t[j].cells[c-1]:null),d.src?d.src[j]:null);
	        else _.xW(t[j].cells[0],"colspan",l);
	    iA(); if(c<=(f.clok||0)) if(x) f.clok=f.clok*1; else { _.xW(o,"th",c<=(f.clok||0)?1:0); iB(o); }
	};
	f.Add=function(d) {
	    var j,o,r,v;
	    if(_.xT(d)=="A") {
			v=f.rk>-1?(_.xT(d[f.rk])=="H")?d[f.rk].val||d[f.rk].txt:d[f.rk]:null;
	        r=(_.xT(v)&&f.Exists(v))||_.xM("tr",0,f.tb); for(j in d) {
	            o=r.cells[j]; if(!o) { o=_.xM("td",0,r); if((j*1)<(f.clok||0)) _.xW(o,"th",1); }
	            iD(o,d[j],v);
	        }
	    }
	    else {
	        r=f.Exists(d.k,1)||_.xM("tr",0,f.tb,0,d.s); r.className=d.csn||"TBL_SEP"; r.xsel=1; _.xW(r,"xsel",1);
	        r.k=d.k; o=_.xM("td",0,r); _.xW(o,"colspan",f.col.cells.length); o.textContent=d.txt||"";
	    }
	};
	f.Exists=function(k,n) { if(f.rk>-1) {
	    //
	} };
	f.Sel=function(e,b) {
	    var m=f.selm,t; if(_.xT(e)=="S") e=f.Exists(e); t=e?e.nodeName:e;
	    if(t!=="TD"&&t!=="TR") e=null; if(t=="TD"&&m!=="C") e=e.parentNode; if(e&&e.xsel) e=null;
	    if(m=="S"||m=="C") { if(f.sel) _.xW(f.sel,"sel"); if(e) _.xW(e,"sel",1); f.sel=e; }
	    else if(m=="M") {
	        var k=e?e.cells[f.rk].val:"",j;
	        if(b) for(j=0 ; j<f.tb.rows.length ; j++) {
	            e=f.tb.rows[j]; k=e.cells[f.rk].val;
	            if(b=="A") { _.xW(e,"sel",1); f.sel[k]=e; }
	            else if(b=="X") { _.xW(e,"sel"); delete f.sel[k]; }
	            else if(b=="R") iC(e,k);
	        }
	        else iC(e,k);
	    }
	    if(f.chng) f.chng(f);
	};
	if(p.tbx&&!_.xT(p.bar)) p.bar=1;
	f.stl=_.STL(['table thead tr:last-child th{ top:'+(f._tit.offsetHeight+f._bar.offsetHeight)+'px; }'],f);
	f.stl.Add(p.stl); _.mR(f,p.rsx); _.xE(f.tb,"click",function(e){ f.Sel(e.target); }); f.rk=_.xT(p.rk)=="N"?p.rk:-1;
	_.aM(f,{tit:p.tit,clok:p.clok,selm:p.selm,bar:p.bar,chng:p.chng});
	for(i in p.col) f.Col(p.col[i]); if(f.rk>-1) f.kbt={}; for(i in p.src) f.Add(p.src[i]); f.Tool(p.tbx);
	
	function iA() { f.stl.Rul(0,{top:(f._tit.offsetHeight+f._bar.offsetHeight)+"px"}); }
	function iB(e) {
	    var s=e?e.previousSibling:e; while(e&&e.cellIndex<(f.clok||0)) {
	        e.xC({left:(s?s.offsetLeft+s.offsetWidth:0)+"px"}); s=e; e=e.nextSibling;
	    }
	}
	function iC(e,k) { _.xW(e,"sel",1,1); if(f.sel[k]) delete f.sel[k]; else f.sel[k]=e; }
	function iD(g,d,k) {
	    var n=[g.rowIndex,g.cellIndex],c=f.col.cells[n[1]],t=_.xT(d); if(t!=="H") d={val:d}; if(c.an&&!d.val) d.val=_.aS();
		
		if(d.h) g.style.display="none"; // if d.h not been set??!
		
	    if(d.r) _.xW(g,"rowspan",d.r); if(d.c) _.xW(g,"colspan",d.c);
		if(d.s) _.xC(g,d.s); if(!_.xT(d.txt)) d.txt=_.xT(d.val)?d.val:"";
	    
	    if(f.rk>-1) { /* f.kbt */ }
	    
	    g.innerHTML=d.txt; g.val=d.val||d.txt;
	}
}, // yet incomplete...
SPL:function(f,p) {
    var a=["vt","wr"],i;
    f.wing=_.CTR(p.chl,f); _.mX(f.wing[0],0,0,1);
    _.xB(f,"vt",1,function(v){ _.xW(f,"vt",v); f.wing[0].rsx=v?2:1; iA(); });
    _.xB(f,"wr",1,function(v){ _.xW(f,"wr",v); iA(); });
    _.mR(f,p.rsx); for(i in a) f[a[i]]=p[a[i]]; if(p.$rsx) f.$rsx=p.$rsx.bind(this,f);
    if(p.$wrsx) f.wing[0].$rsx=p.$wrsx.bind(this,f);
    function iA() { _.xS(f.wing[0],f.vt?"unset":(f.wr+"%"),f.vt?(f.wr+"%"):"unset"); }
},
IFR:function(f,p) {
	var h=_.xM('iframe',0,f,["100%","100%"],{border:"none"}); _.xP(h,{l:0,t:0}); f.con=h; _.mR(f,p.rsx);
	f.doc=h.contentDocument; f.win=h.contentWindow; if(p.onl) _.xE(h,"load",p.onl.bind(this,f));
	f.Val=function(v) { if(v) h.src=v; else return f.doc.innerHTML; }; f.Val(p.src);
}
};
_.Cfg={TRE:{kv:4,ahi:[
[[16,16],"DT_BOX",[
    ["path",{d:"M6,4L12,4 9,7 3,7z"},"DT_C1"],
    ["path",{d:"M3,7L9,7 9,11 3,11z"},"DT_C2"],
    ["path",{d:"M9,7L12,4 12,8 9,11z"},"DT_C3"]
]],
[[16,16],"DT_BOX",[["path",{d:"M4,3L11,3M4,6L11,6M4,9L11,9M4,12L11,12"},"DT_C3"]]],
[[16,16],"DT_BOX",[
    ["path",{d:"M6,2L9,2 9,5 6,5z"},"DT_C3"],
    ["path",{d:"M2,10L5,10 5,13 2,13z"},"DT_C3"],
    ["path",{d:"M10,10L13,10 13,13 10,13z"},"DT_C3"],
    ["path",{d:"M8,5L8,7 12,7 12,10 11,10 11,8 4,8 4,10 3,10 3,7 7,7 7,5z"},"DT_C1"],
]]
]},FRM:{},DBX:{}};
})();
