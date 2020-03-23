(function(){ var _=EF;
_.CTRL.TXT=function(f,p) {
	var z,i,t={p:"password",t:"tel",e:"email",u:"url"},a={pat:"pattern",plc:"placeholder"};
	f.lbl=_.xM("div",0,f); f.lbl.innerHTML=p.lbl||"";
	z=f.fld=_.xM("input",0,f,0,"TXT FLD"); f.classList.add("CON");
	_.xB(f,"len",function(){ return z.maxLength; },function(v){ z.maxLength=v||0; if(!v) f.rdo=1; });
	f.$rdo=function(v){ if(!v&&!f.len) f.rdo=1; }
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
		var kc=e.keyCode; if(kc==229 || kc==0) kc=e.charCode;
		if(p.enter && kc==13) { e.preventDefault(); p.enter(f); }
	});
	_.xE(z,"change",p.chng); _.xE(z,"click",p.clk);
	if(p.mul) _.xW(f,p.tp=="e"?"multiple":"ML",1);
	f.Val=function(v) { if(!_.xT(v)) return z.value; z.value=v; if(f.form) f.form.NS(); }
	f.w=p.w; f.alg=p.alg; f.len=p.len; f.Val(p.val);
}
_.RQ--; })();