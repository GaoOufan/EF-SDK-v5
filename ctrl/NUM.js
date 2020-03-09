(function(){ var _=EF;
_.Base.Add('[ctrl="NUM"] > input{ text-align:right; }');
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
N:function(v) {
	if(_.xT(v)=="S") { v=parseFloat(v.replace(/[^(0-9\-e).]/g,'')); if(isNaN(v)) v=0; }
	return v;
}};
_.CTRL.NUM=function(f,p) {
	var u,g=f.fld=_.xM("input",0,f,[p.lbl?p.w:"100%"],"TXT FLD"),a=["stp","min","max","fix","mrk","mod"],i;
	f.className="CON"; _.xW(g,0,{ type:"text" }); _.xC(g,{ flex:(p.w?"initial":"auto") });
	if(p.lbl) { f.lbl=_.xM("div",0,f,0,{ flex:(p.d&&!p.w?"initial":"auto") },g); f.lbl.innerHTML=p.lbl; }
	f.Val=function(v,w) {
		var t=_.xT(v); if(!t) return w=="V"?f.val:_.Num.T(f.val,f.stp,f.min,f.max);
		v=_.Num.N(v); f.val=v; v=_.Num.T(v,f.stp,f.min,f.max);
		if(f._m=="C"||f._m=="S") v=_.Num.S(v,f.fix,f._m=="C"?p.mrk:u);
		else if(f._m=="M") v=_.Num.M(v); // style='unit' yet not 100% supported
		else if(f._m=="B") v=v.toLocaleString(_.Lang,_.Num.F({ style:'percent' },f.fix));
		f.fld.value=v+(!f._m=="C"&&f.mrk?" "+f.mrk:""); if(f.form) f.form.NS(); if(p.chng) p.chng(f);
	}
	_.xE(g,"focus",function() { if(f.rdo) this.blur(); else this.value=f.val; });
	_.xE(g,"blur",function() { f.Val(this.value); });
	_.xE(g,"click",p.clk);
	_.xB(f,"mod",function(){ return f._m; },function(v){
		f._m=v; if(v=="C"&&!f.fix) f.fix=2; if(v=="B") f.mrk="%";
		if(v=="M") { delete f.mrk; f.min=0; } f.Val(f.val);
	});
	for(i in a) f[a[i]]=p[a[i]]; f.Val(p.val||0);
}
_.RQ--; })();