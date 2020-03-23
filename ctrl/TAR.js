(function(){ var _=EF; _.Use('acx/Mouse');
_.Base.Add([
	'[ctrl="TAR"] > textarea{ font-size:1em; tab-size:4; -o-tab-size:4; -moz-tab-size:4; }',
	'[ctrl="TAR"] > div:nth-of-type(2):not([off]){ display:flex; align-items:center; }',
	'[ctrl="TAR"] [ctrl]{ margin-bottom:0; }'
]);
_.CTRL.TAR=function(f,p) {
	var z,i,a=["wrp","bar","len","plc","na"]; f.lr=1;
	if(!p.d) _.xS(f,500,150);
	f.lbl=_.xM("div",0,f); f.lbl.innerHTML=p.lbl||""; 
	z=f.fld=_.xM("textarea",0,f,["100%","100%"],"TXT FLD");
	f.classList.add("CON"); _.xC(z,{ flex:"initial" }); z.style.resize="none"; _.mR(f,p.rsx);
	_.xB(f,"len",function(){ return f.fld.maxLength; },function(v){ f.fld.maxLength=v||0; if(!v) f.rdo=1; iB(); });
	f.$rdo=function(v) { if(f.bar) f._bar.off=v; }
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
			{c:"SBT",txt:"V",clk:function(){ iA(); f.fld.focus(); }},
			{c:"SBT",txt:"c",clk:function(){ f.wrp=f.wrp?0:"S"; }},
			{c:"SBT",txt:"g",clk:function(){
				// line type to be picked from combo, in the next control.
				
			}},
			{c:"TXT",len:1,w:20,val:"-"},
			{c:"DIV",html:""}
		]},f); iB(); }
		else if(!v) { _.xX(f._bar); delete f._bar; }
	});
	_.xE(z,"focus",function() { if(f.rdo||!f.len) this.blur(); });
	_.xE(z,"keydown",function(e) {
		var kc=e.keyCode; if(kc==229||kc==0) kc=e.charCode;
		if(kc==9) { e.preventDefault(); iA(); }
	});
	_.xE(z,"change",p.chng); _.xE(z,"click",p.clk); if(p.mul) _.xW(f,"ML",1);
	_.xE(z,"input",iB);
	f.Val=function(v) { if(!_.xT(v)) return z.value; z.value=v; iB(); if(f.form) f.form.NS(); }
	for(i in a) f[a[i]]=p[a[i]]; f.Val(p.val);
	
	function iA() {
		var q=z.selectionStart;
		z.value=z.value.substr(0,q)+"\t"+z.value.substr(q);
		z.setSelectionRange(q+1,q+1);
	}
	function iB(){ if(f._bar) f._bar.chl[4].innerHTML=f.fld.value.length+"/"+f.len; }
}
_.RQ--; })();