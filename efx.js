(function(){ var _=EF,u;
_.Lang=navigator.language; _.Sfx={}; _.Rsf={}; _.Tmp={}; _.Sys={}; _.Cfg={};
_.CTRL={
DIV:function(f,p) { if(_.xT(p.html)) f.innerHTML=p.html; if(p.chl) f.chl=_.CTR(p.chl,f); },
SBT:function(f,p) { f.className="PNT"; f.innerHTML=p.txt; _.xE(f,"click",function(e) { if(!f.rdo) p.clk(e); }); },
PRG:function(f,p) {
	z='#fff'; _.xS(f,p.w||200); f.bar=_.xM("div",0,f,0,"PRGF"); f.pc=_.xM("div",0,f,0,"PRGT");
	_.xB(f,"val",function(){ return f._v; },function(v){
		f._v=v;
		f.pc.innerHTML=f.bar.style.width=(v*100/f.max).toLocaleString(u,{ maximumFractionDigits:2 })+"%";
	});
	f.max=p.max||100; f.val=0; iA(0);
	function iA(y) {
		if(y==100) y=0;
		f.pc.style.backgroundImage="linear-gradient(135deg,"+z+"0 "+y+"%,"+z+"c "+(y+6)+"%,"+z+"0 "+(y+12)+"%)";
		if(f.clientHeight) setTimeout(iA,20,y+1);
	}
}
};
_.aS=function(l) {
	var b="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",x="";
	while(x.length<(l||12)) x+=b[Math.floor(Math.random()*62)]; return x;
}
_.xB=function(a,b,c,d) {
	Object.defineProperty(a,b,{
		get:(c==1?_.xW.bind(null,a,b,"~"):(c||function(){})),
		set:(d==1?_.xW.bind(null,a,b):(d||function(){})),configurable:true
	});
}
_.xC=function(f,p) { f=_.xI(f); for(var i in p) f.style[i]=p[i]; }
_.xE=function(c,e,f,r) {
	c=_.xI(c); if(_.xT(e)=="A") { for(var i in e) _.xE(c,e[i],f,r); return; }
	if(c&&f) c[(r==-1?"remove":"add")+"EventListener"](e,f,r==-1?null:(r?true:false));
}
_.xP=function(f,v,a) {
	if(!v) return; f=_.xI(f); a=_.xI(a,1);
	if(a&&!v.p) { v.l=a.offsetLeft+(isNaN(v.l)?0:v.l); v.t=a.offsetTop+(isNaN(v.t)?0:v.t); }
	var i,o=f.style,x={l:"left",t:"top",r:"right",b:"bottom"},s={f:"fixed",r:"relative",s:"sticky",x:"static"};
	for(i in x) if(_.xT(v[i])) o[x[i]]=v[i]+(isNaN(v[i])?"":"px"); o.position=(s[v.p]||"absolute");
}
_.xS=function(f,w,h) {
	var o=_.xI(f).style;
	if(w) o.width=w+(isNaN(w)?"":"px");
	if(h) o.height=h+(isNaN(h)?"":"px");
}
_.xV=function(e) {
	var i,g=document.defaultView.getComputedStyle(_.xI(e)),c={static:"x",sticky:"s",relative:"r",fixed:"f"},
	a={l:"left",t:"top",r:"right",b:"bottom",w:"width",h:"height"},b={p:c[g.position]};
	for(i in a) b[i]=g[a[i]].replace(/px/,'')*1; return b;
}
_.xZ=function() {
	x=document.getElementsByTagName('ef_ctrl');
	for(i=0 ; i<x.length ; i++) {
		var a=eval('('+x[i].innerHTML+')'); a.u=x[i];
		_.xW(_.CTR(a),"efc",1); _.xX(x[i]);
	}
}
_.Alert=function(p) {
	if(_.xT(p)=="S") p={tit:p};
	var f=_.xM("div",0,_.PG,0,"ALR"); _.xW(f,"err",p.err);
	_.xM("div",0,f).innerHTML=p.tit||""; _.xM("div",0,f).innerHTML=p.txt||"";
	if(p.err||p.sfx) { /*_.Sfx[p.sfx||p.err].currentTime=0; _.Sfx[p.sfx||p.err].play();*/ }
	setTimeout(_.xX,p.end||3000,f); return f;
}
_.STL=function(p,r) {
	var f=_.xM("style","S"+_.aS(),r||document.head,0,0,r?r.children[0]:u);
	f.Add=function(c) { f.innerText+=(r?'#'+f.id+' ~ ':"")+(c.join?c.join("\n"):c)+"\n"; }
	f.Del=function(v) { var w=iA(); w.splice(v,1); iB(w); }
	f.Get=function(v) { return f.sheet.cssRules[v]; }
	f.Rul=function(c,d) {
		var z=f.sheet.cssRules[c],w=_.xM("div",0,document.body,0,z.style),h=iA(); _.xC(w,d);
		h[c]=z.selectorText+"{"+_.xW(w,"style","~")+"}"; iB(h); _.xX(w);
	}
	if(p) f.Add(p); return f;
	function iA() { return f.innerText.split(/\n/g); }
	function iB(w) { f.innerText=w.join("\n"); }
}
_.CTR=function(p,r){
	var f,i,a=["n","lr","lf","off"],b;
	if(_.xT(p)=="A") { for(i in p) { p[i].r=r; p[i]=_.CTR(p[i]); } return p; } if(!p.c) p.c="DIV";
	if(!p.r) p.r=r; f=_.xM(p.c[0]=='*'?p.c.substr(1):"div",p.id,p.r,p.d,p.s,p.u);
	_.xP(f,p.p); i=f; while(i&&i.nodeName!=="FORM") i=i.parentNode; f.form=i;
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
	a.push("rdo","req","qs","ign"); for(i in a) f[a[i]]=p[a[i]]; if(f.form&&f.n) f.form.ctrl[f.n]=f;
	if(p.ttp) {
		if(_.xT(p.ttp)=="S") p.ttp={ txt:p.ttp }; p.ttp.r=f;
		if(_.TTP) _.RC(iA); else _.Use("acx/TTP",iA);
	}
	b=p.upk; if(b) {
		if(b==1) b={onl:function(e) { a=Object.keys(e.ftc.ftp); e.fn=a[0]; e.src=e.ftc.ftp[a[0]]; }};
		if(_.xT(b)=="Q") b={onl:b}; b.c="FLU"; b.r=f; b.off=1;
		f.ftc=_.CTR(b); _.xE(f,"click",f.ftc.click);
	}
	if(p.c[0]!=='*') {
		_.xW(f,"ctrl",p.c);
		if(!_.CTRL[p.c]) _.Use("ctrl/"+p.c,function(){ _.CTRL[p.c](f,p); });
		else _.CTRL[p.c](f,p);
	}
	return f;
	
	function iA() { if(_.TTP) _.TTP(p.ttp); else setTimeout(iA,50); }
}
_.HTEL=function(i) { i=_.xI(i,1); var j=i?i.innerHTML:""; _.xX(i); return j; }
_.Die=function(m) {
	window.onbeforeunload=null; _.Alert({ txt:m,tit:"",err:1 });
	setTimeout(function() { window.location.href=""; },3000);
}
_.Base=_.STL([
'@font-face{ font-family:"EF-SDK"; src:url("'+_.root+'/ef-sdk.ttf"); }',
'body{ margin:0; padding:0; cursor:default; }',
'ef_ctrl{ display:none; }',
'.FIX{ z-index:1000000; display:contents; }',
'[ctrl]{ box-sizing:border-box; margin:0 0.3em 0.3em 0; }',
'.CON:not([lr]){ align-items:center; }',
'.CON{ display:inline-flex; flex-direction:row; }',
'[ctrl]:not([efc]){ position:relative; float:left; }',
'[lr]{ flex-direction:column; }',
'[lf]:not([efc]){ clear:left; }',
'[off]{ display:none; }',
'[ctrl="PRG"]{ display:flex; }',
'[ctrl="SBT"]{ font-family:"EF-SDK"; float:left; box-sizing:border-box; }',
'.PRGF{ height:100%; }',
'.PRGT{ position:relative; width:100%; text-align:center; bottom:0%; }',
'.ALR{ clear:left; }',
'.TXT{ min-height:1em; cursor:text; }',
'.PNT:not([rdo]){ cursor:pointer; }',
'.PNT[rdo], [ctrl][rdo] > .TXT{ cursor:default; }'
]);
_.SE={ E:{},Add:function(e,p){
	var i=e.SE=_.aS(); _.SE.E[i]=[p||1,e];
	_.xB(e,"se",function(){ return _.SE.E[i][0]; },function(v){ _.SE.E[i][0]=v; });
},Del:function(e) { if(e.SE) delete _.SE.E[e.SE]; } };
window.onscroll=window.onresize=function() { for(var i in _.SE.E) {
	var v=_.SE.E[i];
	_.xP(v[1],{
		l:scrollX+(v[0]==1||v[0]==3?0:(innerWidth-v[1].offsetWidth)),
		t:scrollY+(v[0]==1||v[0]==2?0:(innerHeight-v[1].offsetHeight))
	});
} };
_.SE.Add(_.PG);
_.Init=function(p) {
	var a=[["FRM","FRM"],["DBX","FRM"],["RIB","RIB"]],i;
	for(i in a) _[a[i][0]]=iA.bind(this,i);
	if(p.obu) window.onbeforeunload=function() { return p.obu; }
	HTMLImageElement.prototype.load=HTMLIFrameElement.prototype.load=HTMLAudioElement.prototype.load=HTMLScriptElement.prototype.load;	
	_.xZ(); if(p.f) if(_.xT(p.f)=="Q") _.RC(p.f); else _.Use((p.x||p.f),function() { window[p.f](p.v); });
	function iA(b,p) { _.Use("acx/"+a[b][1],function(){ _[a[b][0]](p); }); }
}
_.RQ--; })();
