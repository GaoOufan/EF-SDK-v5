var EF={RQ:0}; (function(){ var _=EF,X=document.currentScript.src.split(/\//); X.pop(); _.root=X.join('/');
_.xI=function(e,c) { if(_.xT(e)=="S") e=document.getElementById(e); return e&&e.parentNode?e:(c?null:document.body); }
_.xM=function(t,i,r,s,c,b) {
	if(t[0]=='*') t=document.createElementNS("http://www.w3.org/2000/svg",t.substr(1));
	else t=document.createElement(t);
	if(t.nodeName=="IMG") t.ondragstart=function(e) { e.preventDefault(); }
	b=_.xI(b,1); if(b) r=b.parentNode;
	if(i) t.id=i; if(r) _.xI(r).insertBefore(t,b); if(s) _.xS(t,s[0],s[1]);
	if(c) if(_.xT(c)=="S") _.xW(t,"class",c); else _.xC(t,c);
	return t;
}
_.xT=function(e) {
	var d={number:"N",string:"S",boolean:"B",function:"Q"},k=typeof(e);
	if(d[k]) return d[k]=="N"&&isNaN(e)?"S":d[k];
	if(k=="object"&&e) {
		d={ Array:"A",ML:"L",Date:"D",FF:"F",Color:"C",HTMLImageElement:"I",Image:"I",Object:"H",Promise:"R" };
		k=e.constructor.name; return d[k]||"O";
	}
	return null;
}
_.xW=function(c,n,v,s) {
	c=_.xI(c,1); if(!c) return;
	if(_.xT(v)!=="H") return s?_.xW(c,n,_.xW(c,n,"~")?0:v):c[(v?(v=="~"?"get":"set"):"remove")+"Attribute"](n,v);
	for(var i in v) _.xW(c,i,v[i]);
}
_.xX=function(e) {
	e=_.xI(e,1); if(!e||e.parentNode.nodeName=="HTML") return; if(_.SE) _.SE.Del(e);
	if(e.dispose) e.dispose(); if(e.form&&e.form.ctrl[e.name]) delete f.ctrl[e.name];
	var i,b=["ttp","tta"]; for(i in b) if(e[b[i]]) { _.xX(e[b[i]]); delete e[b[i]]; }
	e.parentNode.removeChild(e);
}
_.SM=function(p) {
	if(_.xT(p)=="S") p={ p:p }; var o,h=new XMLHttpRequest(),v,m="GET",i;
	if(!p.prg) o=p.frm?p.frm.Block({prg:1}):(_.CTR?_.CTR({c:"PRG",r:_.PG,lf:1}):_.xM("div",0,_.PG));
	if(_.xT(p.pmt)) p.p+='?EFD='+_.ON({C:_.Crd||{},L:_.Lang,V:p.pmt});
	if(p.p.length>2000) { v=p.p.split(/\?/); m="POST"; p.p=v[0]; v=v[1]; }
	h.open(m,p.p); if(!p.hdr) p.hdr={};
	if(m=="POST") p.hdr["Content-type"]="application/x-www-form-urlencoded; charset=utf-8";
	if(p.hdr) for(i in p.hdr) h.setRequestHeader(i,p.hdr[i]);
	if(p.bin) h.responseType='arraybuffer';
	h.onload=function(s) {
		var x=p.bin?h.response:h.responseText,c;
		if(h.status!==200) return iA();
		if(p.bin) x=window.URL.createObjectURL(new Blob([x]));
		if(p.frm) p.frm.XBLK(o); else _.xX(o);
		if(p.cbk) p.cbk(x); else { x=_.ON(x,'-'); c=new Function('V',x[0]); c(x[1]); }
	}
	h.onprogress=function(e) {
		if(p.prg) return p.prg(h,e); var w=p.frm?o.children[1]:o; w.max=e.total;
		if(_.xT(w.val)) w.val=e.loaded; else w.innerHTML=e.loaded;
	}
	h.onerror=p.err||iA; h.send(v);
	
	function iA() {
		var x=p.bin?h.response:h.responseText,a; if(!x) x=p.p+" => "+h.status;
		x=(p.bin?(new TextDecoder()).decode(x):x); _.xX(o);
		if(_.Alert) _.Alert({tit:"",txt:x,alr:1});
		else { a=_.xM("div",0,"1"); a.innerHTML=x; setTimeout(_.xX,3000,a); }
	}
}
_.RC=function(f) { if(f) if(_.RQ) setTimeout(_.RC,50,f); else f(); }
_.Use=function(s,c) {
	var i,x; if(_.xT(s)=="A") { for(i in s) _.Use(s[i]); return _.RC(c); }
	if(s[0]!=='*') s=_.root+"/"+s;
	x=document.getElementsByTagName("script"); for(i in x) if(x[i].itd==s) return _.RC(c);
	_.RQ++; x=_.xM("script",0,document.head); x.itd=s; x.load(s+".js"); _.RC(c);
}
_.CSS=function(f,c) {
	var y,i; if(_.xT(f)=="A") { for(i in f) _.CSS(f[i]); return _.RC(c); }
	if(f[0]!=='*') f=_.root+"/"+f;
	_.RQ++; y=_.xM("link",0,document.head); y.onload=function() { _.RQ--; _.RC(c); }
	y.onerror=_.CSS.bind(this,f,c); _.xW(y,0,{ type:"text/css",rel:"Stylesheet",href:f+".css" });
}
_.Go=function(p) {
	_.PG=_.xM("div",0,document.body,0,'FIX');
	if(_.xT(p)!=="H") p={ f:p }; document.title=p.tit||"";
	_.xW(_.xM("link",0,document.head),0,{ rel:"shortcut icon",type:"image/ico",href:((p.ico||"ef")+".ico") });
	HTMLScriptElement.prototype.load=function(a,c) {
		var f=this; f.onload=c; f.onerror=f.load.bind(this,a,c);
		if(window.origin=="null") f.src=a; else _.SM({
			p:a,bin:1,cbk:function(q) { f.src=q; },err:f.onerror,hdr:{'Cache-Control':'no-cache'}
		});
	}
	return _.CSS(p.css||"ef",_.Use.bind(null,"efx",function() { _.Init(p); }));
}
})();