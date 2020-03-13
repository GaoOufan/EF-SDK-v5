(function(){ var _=EF,M=Math,C;
Object.assign(M,{
V2:function(x,y) { this.x=x||0; this.y=y||0; },
d2r:function(d) { return d*M.PI/180; },
r2d:function(r) { return r*180/M.PI; },
arv2:function(a) { for(var i in a) a[i]=new M.V2(a[i][0],a[i][1]); return a; }
});
C=M.V2.prototype;
_.xB(C,"w",function() { return this.x; },function(v) { this.x=v; });
_.xB(C,"h",function() { return this.y; },function(v) { this.y=v; });
Object.assign(C,{
set:function(x,y){ this.x=x; this.y=y; return this; },
setS:function(s) { this.x=s; this.y=s; return this; },
clone:function() { return new this.constructor(this.x,this.y); },
cpy:function(v) { this.x=v.x; this.y=v.y; return this; },
add:function(v) { this.x+=v.x; this.y+=v.y; return this; },
addS:function(s) { this.x+=s; this.y+=s; return this; },
addV:function(a,b) { this.x=a.x+b.x; this.y=a.y+b.y; return this; },
addSV:function(v,s) { this.x+=v.x*s; this.y+=v.y*s; return this; },
sub:function(v,w) { this.x-=v.x; this.y-=v.y; return this; },
subS:function(s) { this.x-=s; this.y-=s; return this; },
subV:function(a,b) { this.x=a.x-b.x; this.y=a.y-b.y; return this; },
mul:function(v) { this.x*=v.x; this.y*=v.y; return this; },
mulS:function(s) { this.x*=s; this.y*=s; return this; },
div:function(v) { this.x/=v.x; this.y/=v.y; return this; },
divS:function(s) { this.x/=s; this.y/=s; return this; },
min:function(v) { this.x=M.min(this.x,v.x); this.y=M.min(this.y,v.y); return this; },
max:function(v) { this.x=M.max(this.x,v.x); this.y=M.max(this.y,v.y); return this; },
clamp:function(a,z) {
	this.x=M.max(a.x,M.min(z.x,this.x));
	this.y=M.max(a.y,M.min(z.y,this.y));
	return this;
},
clpS:function(a,z) {
	this.x=M.max(a,M.min(z,this.x));
	this.y=M.max(a,M.min(z,this.y));
	return this;
},
clpL:function(a,z) { var l=this.len(); return this.divS(l||1).mulS(M.max(a,M.min(z,l))); },
floor:function() {
	this.x=M.floor(this.x);
	this.y=M.floor(this.y);
	return this;
},
ceil:function() {
	this.x=M.ceil(this.x);
	this.y=M.ceil(this.y);
	return this;
},
round:function() {
	this.x=M.round(this.x);
	this.y=M.round(this.y);
	return this;
},
r0:function() {
	this.x=this.x<0?M.ceil(this.x):M.floor(this.x);
	this.y=this.y<0?M.ceil(this.y):M.floor(this.y);
	return this;
},
neg:function() { this.x=-this.x; this.y=-this.y; return this; },
dot:function(v) { return this.x*v.x+this.y*v.y; },
cross:function(v) { return this.x*v.y-this.y*v.x; },
lenQ:function() { return this.x*this.x+this.y*this.y; },
len: function () { return M.sqrt(this.x*this.x+this.y*this.y); },
mLen:function() { return M.abs(this.x)+M.abs(this.y); },
nor:function() { return this.divS(this.len()||1); },
angle:function() { return M.atan2(-this.y,-this.x)+M.PI; },
dis:function(v) { return M.sqrt(this.disQ(v)); },
disQ:function(v) { var dx=this.x-v.x,dy=this.y-v.y; return dx*dx+dy*dy; },
mDis:function(v) { return M.abs(this.x-v.x)+M.abs(this.y-v.y); },
setL:function(l) { return this.nor().mulS(l); },
lerp:function(v,a) { this.x+=(v.x-this.x)*a; this.y+=(v.y-this.y)*a; return this; },
lerpV:function(a,b,h) { return this.subV(b,a).mulS(h).add(a); },
eq:function(v) { return ((v.x==this.x)&&(v.y==this.y)); },
setA:function(a,o) { if(!o) o=0; this.x=a[o]; this.y=a[o+1]; return this; },
arr:function(a,o) { if(!a) a=[]; if(!o) o=0; a[o]=this.x; a[o+1]=this.y; return a; },
rot:function(n,a) {
	var c=M.cos(a),s=M.sin(a),x=this.x-n.x,y=this.y-n.y;
	this.x=x*c-y*s+n.x; this.y=x*s+y*c+n.y; return this;
},
nml:function(){ return new M.V2(this.y,-this.x); }
});
EF.RQ--; })();