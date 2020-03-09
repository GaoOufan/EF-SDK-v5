(function(){ var _=EF,LT=10,prf;
_.Use("acx/Mouse");
if(!_.Cfg.FRM) _.Cfg.FRM={};
if(!_.Cfg.DBX) _.Cfg.DBX={};
_.Base.Add([
	'form{ box-sizing:border-box; float:left; position:relative; z-index:'+LT+'; overflow:hidden; min-height:2em; }',
	'.FBX{ padding:4px 16px 16px 16px; }',
	'.FRT{ box-sizing:border-box; display:inline-flex; flex-direction:row; height:2em; position:relative; left:-1em; top:-1em; width:calc(100% + 2em); }',
	'.FRT > div{ flex:initial; }',
	'.FRT > span{ flex:auto; padding:0.5em; font-weight:bold; }',
	'.FRT > div > [ctrl="SBT"]{ float:right; }',
	'.FBK{ z-index:1000; top:2em; bottom:0; right:0; left:0; position:absolute; }',
	'form[err] > [ctrl="BTN"]{ font-family:"EF-SDK"; }',
	'form[flc]{ max-height:2em; }'
]);
_.FRM=function(p) {
	var u,f=_.xM("form",p.id||("C"+_.aS()),document.body,p.d,p.s),g=_.xM("div",0,f,0,"FRT"),z,i,a,b=["xcls","xhid"];
	_.xW(f,"err",p.err); f._tt=_.xM("span",0,g); f.btn=_.xM("div",0,g); f.ctrl={};
	if(p.atc) { f.atc=_.xI(p.atc,1); if(!f.atc) return; if(!f.atc.ref) f.atc.ref={}; f.atc.ref[f.id]=f; }
	f.Focus=function(c){
		_.xW(f,"fcs",1); _.xW(f,"off"); if(prf) _.xW(prf,"fcs"); prf=f; _.xC(f,{zIndex:(p.err?1000000:LT++)});
		if(c) _.xP(f,{
			l:Math.max((innerWidth-f.clientWidth)/2+scrollX,0),
			t:Math.max((innerHeight-f.clientHeight)/2+scrollY,0)
		});
	}
	_.mC(f,function(e,s){ if(s==2) f.Focus(); },3);
	f.Close=function(){
		if(p.bc&&!p.bc()) return 1; var c;
		if(f.sv&&f.sv[1]) {
			if(!_.xI(f.sv[0],1)) f.sv[0]=_.DBX({
				atc:f,tit:f.tit+": "+(_.Cfg.DBX.Tit||""),txt:_.Cfg.DBX.Con||"",
				ok:function() { f.sv[1]=0; f.Close(); },cnf:1
			});
			else f.sv[0].Focus(); return 1;
		}
		if(f.ref) for(var i in f.ref) if(f.ref[i].Close()) c=1; if(c) return 1;
		if(f.rblk) f.atc.XBLK(f.rblk); if(f.atc) delete f.atc.ref[f.id];
		_.xX(f); if(_.Rib) _.Rib.XCol(f.rbc); if(p.cls) p.cls();
	}
	f.Hide=function(){ _.xW(f,f.rbc?"off":"flc",1,f.rbc?null:1); }
	f.Block=function(v) {
		if(!v) v={}; if(!f.blk) f.blk=_.xM("div",0,f,0,"FBK SCN");
		return _.CTR({ id:v.id,r:f.blk,c:"DIV",s:{display:"flex",flexDirection:"row"},lf:1,chl:[
			{c:"DIV",html:v.txt||""},{c:"PRG",off:(v.prg?0:1)}
		] });
	}
	f.XBLK=function(e) { _.xX(e); if(!f.blk.children.length) { _.xX(f.blk); f.blk=null; } }
	z=[["D",f.Close],["C",f.Hide]];
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
	//f.Set=function(d) { for(var i in d) f.ctrl[i].Val(d[i]); }
	if(p.blk&&f.atc) f.rblk=f.atc.Block(p.blk); if(p.cnf) f.sv=[0,0];
	f.NS=function() { if(f.sv&&f.ok) f.form.sv[1]=1; }
	if(p.chl) _.CTR(p.chl,f);
	f.Focus(p.p=="C"?1:0); f.ok=1; if(p.onl) _.RC(p.onl.bind(null,f)); return f;
}
_.DBX=function(p){ var f=_.FRM({ id:p.id,atc:p.atc,blk:p.blk||{},err:1,xhid:1,
	drg:1,tit:p.tit,p:"P",cls:function(){ f.atc.Focus(); },chl:[
		{c:"DIV",html:p.txt,lf:1},
		{c:"BTN",n:"V",txt:"P",clk:iA},
		{c:"BTN",n:"X",txt:"N",off:(p.cnl||p.cnf?0:1),clk:iA}
	] });
	return f; function iA(e) {
		f.Close(); e=e.target; var a={V:p.ok,X:p.cnl}; if(a[e.n]) a[e.n]();
	}
}
_.RQ--; })();