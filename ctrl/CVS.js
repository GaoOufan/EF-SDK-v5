(function(){ var _=EF;
_.Base.Add([
	'[ctrl="CVS"]{ position:relative; }',
	'[ctrl="CVS"] > canvas{ width:100%; height:100%; box-sizing:border-box; cursor:crosshair; }',
	'.CVB{ position:absolute; left:0px; top:0px; right:0px; bottom:0px; }'
]);
_.CVS={
ItoR:function(i,w,h) {
	if(!i||i.src=="") return;
	if(!h) h=w; w=(w=="R"?i.width:(w||i.naturalWidth)); h=(h=="R"?i.height:(h||i.naturalHeight));
	var C=uA(w,h); C.ctx.drawImage(i,0,0,w,h); x=C.Raw(); _.xX(C); return x;
},
RtoI:function(d,t,q) {
	if(!d||d.src=="") return; var C=uA(d.width,d.height); C.ctx.putImageData(d,0,0);
	x=C.Val(t,q); _.xX(C); return x;
}
};
_.CTRL.CVS=function(f,p){
	if(!p.d) _.xS(f,p.w||320,p.h||200); var u,z=f.cvs=_.xM("canvas",0,f,0,"FLD"),a=_.xV(f);
	_.xB(f,"w",function(){ return z.width; },function(v){ z.width=v; });
	_.xB(f,"h",function(){ return z.height; },function(v){ z.height=v; });
	f.w=p.w||a.w; f.h=p.h||a.h; f.ctx=z.getContext("2d");
	if(p.ce) _.Use("acx/Mouse",function(){
		_.mC(z,iA.bind(this,1),2);
		_.mT(z,function(e) { f.pd=1; p.ce(f,1,_.mP(e),e); });
		_.mM(z,function(e) { e.preventDefault(); p.ce(f,2,_.mP(e),e); });
		_.mE(z,function(e) { f.pd=0; p.ce(f,0,_.mP(e),e); });
	});
	f.Val=function(q,x) {
		if(q&&!x) { x=q.split('/'); q=x[0]; x=x[1]==""?u:x[1]*=1; }
		return f.val||z.toDataURL(q=="J"?"image/jpeg":"image/png",x);
	}
	f.Raw=function() { return f.ctx.getImageData(0,0,z.width,z.height); }
	function iA(b,e,s){ if(s==2) {
		if(b) { f.lok=_.xM("div",0,f,0,"CVB SCN"); _.mC(f.lok,iA.bind(this,0),2); }
		else _.xX(f.lok);
	} }
}
function uA(w,h) { var C=_.CTR({c:"CVS",d:[w,h],r:document.body}),x; _.xW(C,"off",1); return C; }
_.RQ--; })();