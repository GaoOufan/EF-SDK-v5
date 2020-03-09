(function(){ var _=EF;
_.Use(["ctrl/NUM","acx/Mouse"]);
_.Base.Add([
	'[ctrl="TRK"]{ display:inline-flex; flex-direction:row; margin:0 4px 4px 0; }',
	'.TRK{ flex:auto; height:2em; box-sizing:border-box; }',
	'.TRK > div{ text-align:right; padding:0.5em 0 0.5em 0; }'
]);
_.CTRL.TRK=function(f,p) {
	var g=_.xM("div",0,f,0,"TRK");
	f.lbl=_.xM("div",0,f,0,{flex:"initial"},g); f.lbl.innerHTML=p.lbl||"";
	f.pos=_.xM('div',0,g,[0,"1em"]); _.xE(f.pos,"blur",iA);
	f.Val=function(v) {
		if(!_.xT(v)) return f.val; f.val=_.Num.T(v,f.stp,f.min,f.max);
		_.xS(f.pos,((f.val-f.min)*100/(f.max-f.min))+"%"); f.pos.innerHTML=f.val;
		if(f.form) f.form.NS(); if(p.chng) p.chng();
	}
	_.xB(f,"min",function(){ return g.min; },function(v){ g.min=v; f.Val(f.val); });
	_.xB(f,"max",function(){ return g.max; },function(v){ g.max=v; f.Val(f.val); });
	_.xB(f,"stp",function(){ return g.stp; },function(v){ g.stp=v; f.Val(f.val); });
	_.mM(g,function(e) {
		if(!f.rdo&&(e.buttons==1||e.type=="touchmove")) { e.preventDefault(); iB(e,1); }
	},true);
	_.mC(g,iB,3); f.trk=g; f.stp=p.stp; f.min=p.min; f.max=p.max;
	f.Val(p.val||(f.min+(f.max-f.min)/2));
	
	function iA() { _.xW(f.pos,"contenteditable"); f.Val(_.Num.N(f.pos.innerHTML)); }
	function iB(e,a) {
		if(f.rdo) return;
		if(a==1) f.Val(f.min+(f.max-f.min)*(_.mP(e)[0]/g.offsetWidth));
		else if(a==2) { _.xW(f.pos,"contenteditable",true); f.pos.focus(); getSelection().collapse(f.pos,1); }
	}
}
_.RQ--; })();