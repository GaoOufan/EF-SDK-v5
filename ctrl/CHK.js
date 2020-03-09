EF.Base.Add('[ctrl="CHK"]{ padding:4px; }');
EF.CTRL.CHK=function(f,p) {
	var _=EF,u; if(!p.src) { p.src=[_.xT(p.lbl)?p.lbl:""]; delete p.lbl; }
	f.cb=[]; f.stl=_.STL(['label{}'],f);
	_.xB(f,"lw",function(){ return f._lw; },function(v){
		f._lw=v; f.stl.Rul(0,{ width:(v?v+"px":""),display:(v?"inline-":"")+"block" });
	});
	f.lw=p.lw||0;
	if(p.lbl) { f.lbl=_.xM("span",0,f,0,{ display:"block" }); f.lbl.innerHTML=p.lbl; }
	f.Add=function(v) {
		var g=_.xM("label",0,f,0),h=_.xM("input",0,g); h.type="checkbox";
		g.txt=_.xM("span",0,g); g.txt.innerHTML=v; g.chk=h; g.val=Math.pow(2,f.cb.length); f.cb.push(g);
		_.xE(h,"change",function(e){ if(f.form) f.form.NS(); if(p.chng) p.chng(f,e.target.parentNode); });
	}
	if(p.src) for(var i in p.src) f.Add(p.src[i]);
	
	f.Val=function(v) {
		var c=0,i,t=_.xT(v); for(i in f.cb)
			if(t) f.cb[i].chk.checked=(v&f.cb[i].val)?true:false;
			else if(f.cb[i].chk.checked) c+=f.cb[i].val;
		return c;
	}
	f.Del=function(v) {
		var i,c=1; for(i=0 ; i<f.cb.length ; i++)
			if(v&f.cb[i].val) { _.xX(f.cb[i]); f.cb.splice(i,1); i--; c*=2; }
			else f.cb[i].val/=c;
	}
	f.Val(p.val);
	
	_.xB(f,"rdo",u,function(v){
		for(var i in f.cb) f.cb[i].chk.disabled=(v&f.cb[i].val)?true:false;
	});
	f.rdo=p.rdo||0;
}
EF.RQ--;