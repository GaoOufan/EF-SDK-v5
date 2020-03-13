(function(){ var _=EF; _.Use(["ext/Math/V2","acx/Color"]);
_.MB2D={
Add:function(f,c) { if(_.xT(f)!=="A") f=[f]; for(var i in f) f[i]="ext/MB/2D/"+f[i]; _.Use(f,c); }
};
Object.assign(CanvasRenderingContext2D.prototype,{
cO:function(v,k) {
	if(k) this.pvCO=this.globalCompositeOperation; // keep in mem, for a case we need to restore via cR.
	a={
		O:'source-over',I:'source-in',U:'source-out',A:'source-atop',DO:'destination-over',
		DI:'destination-in',DU:'destination-out',DA:'destination-atop',L:'lighter',C:'copy',
		X:'xor',M:'multiply',V:'overlay',D:'color-dodge',B:'color-burn',
		F:'soft-light',R:'difference',H:'hue',S:'saturation',N:'luminosity'
	};
	if(a[v]) this.globalCompositeOperation=a[v];
},
cR:function(){ if(this.pvCO) this.cO(this.pvCO,1); },
ctrl:function(){
	var o=this.canvas; while(o&&!o.ctrl) o=o.parentNode; return o;
},
dA:this.ellipse,
dD:function(v,f,a) {
	this.dM(a?v[0].clone().add(a):v[0],1);
	for(var i=1 ; i<v.length ; i++) this.dL(a?v[i].clone().add(a):v[i]);
	this.dX(f);
},
dL:function(p,a,b){
	var l=arguments.length;
	if(l==1) this.lineTo(p.x,p.y);
	else if(l==2) this.quadraticCurve(p.x,p.y,a.x,a.y);
	else this.cubicBezireCurve(p.x,p.y,a.x,a.y,b.x,b.y);
},
dM:function(p,t) { if(t) this.beginPath(); this.moveTo(p.x,p.y); },
dR:function(p,s){
	this.beginPath();
	if(!arguments.length) { p=new Math.V2(0,0); s=new Math.V2(this.canvas.width,this.canvas.height); }
	this.rect(p.x,p.y,s.w,s.h);
},
dwl:function(n,t,q){
	var c=this.ctrl();
	if(c) EF.AD(c.Val(t,q),n,t=="J"?"jpg":"png");
},
dX:function(c){ if(c%3==2) this.closePath(); if(c%3) this.stroke(); if(c>2) this.fill(); },
gI:function(p,s) {
	if(!p) p=new Math.V2(0,0); if(!s) s=new Math.V2(this.canvas.width,this.canvas.height);
	return this.getImageData(p.x,p.y,p.w,p.h);
},
pC:function(a,b) { if(a) this.strokeStyle=a; if(b) this.fillStyle=b; },
pI:function(d,p) { if(!p) p=new Math.V2(0,0); this.putImageData(d,p.x,p.y); },
pL:function(){
	var z=arguments,i,g=this.createLinearGradient(z[0].x,z[0].y,z[1].x,z[1].y);
	for(i=2 ; i<z.length ; i++) g.addColorStop(z[i][0],z[i][1].CSS());
	return g;
},
pR:function(){
	var z=arguments,i,g=this.createRadialGradient(z[0].x,z[0].y,z[1],z[2].x,z[2].y,z[3]);
	for(i=4 ; i<z.length ; i++) g.addColorStop(z[i][0],z[i][1].CSS());
	return g;
},
xX:function(p,s) {
	if(!arguments.length) { p=new Math.V2(0,0); s=new Math.V2(this.canvas.width,this.canvas.height); }
	this.clearRect(p.x,p.y,s.w,s.h);
}
});
_.RQ--; })();