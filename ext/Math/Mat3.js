(function(){ var _=EF,M=Math; _.use("*/ext/Math/V2");
M.V2.prototype.applyMatrix3=function(m) {
	var x=this.x,y=this.y,e=m.elm;
	this.x=e[0]*x+e[3]*y+e[6];
	this.y=e[1]*x+e[4]*y+e[7];
	return this;
};
M.Mat3=function() { this.elm=[1,0,0,0,1,0,0,0,1]; }
Object.assign(M.Mat3.prototype,{
set:function() { var e=this.elm,i; for(i=0 ; i<9 ; i++) e[i]=arguments[i]; return this; },
identity:function() { this.set(1,0,0,0,1,0,0,0,1); return this; },
clone:function() { return new M.Mat3.fromArray(this.elm); },
copy:function(m) { var e=this.elm,a=m.elm,i; for(i in a) e[i]=a[i]; return this; },
multiply:function(m) { return this.multiplyMatrices(this,m); },
premultiply:function(m) { return this.multiplyMatrices(m,this); },
multiplyMatrices:function(a,b) {
	var m=a.elm,n=b.elm,e=this.elm;
	e[0]=m[0]*n[0]+m[3]*n[1]+m[6]*n[2];
	e[3]=m[0]*n[3]+m[3]*n[4]+m[6]*n[5];
	e[6]=m[0]*n[6]+m[3]*n[7]+m[6]*n[8];
	e[1]=m[1]*n[0]+m[4]*n[1]+m[7]*n[2];
	e[4]=m[1]*n[3]+m[4]*n[4]+m[7]*n[5];
	e[7]=m[1]*n[6]+m[4]*n[7]+m[7]*n[8];
	e[2]=m[2]*n[0]+m[5]*n[1]+m[8]*n[2];
	e[5]=m[2]*n[3]+m[5]*n[4]+m[8]*n[5];
	e[8]=m[2]*n[6]+m[5]*n[7]+m[8]*n[8];
	return this;
},
multiplyScalar:function(s) { var e=this.elm,i; for(i in e) e[i]*=s; return this; },
determinant:function () {
	var t=this.elm,a=t[0],b=t[1],c=t[2],d=t[3],e=t[4],f=t[5],g=t[6],h=t[7],i=t[8];
	return a*e*i-a*f*h-b*d*i+b*f*g+c*d*h-c*e*g;
},
invert:function(m,t) {
	m=m.elm; var n=this.elm,
		a=m[8]*m[4]-m[5]*m[7],b=m[5]*m[6]-m[8]*m[3],
		c=m[7]*m[3]-m[4]*m[6],d=m[0]*a+m[1]*b+m[2]*c,v=1/d;
	if(!d) return this.set(0,0,0,0,0,0,0,0,0);
	n[0]=a*v; n[1]=(m[2]*m[7]-m[8]*m[1])*v; n[2]=(m[5]*m[1]-m[2]*m[4])*v;
	n[3]=b*v; n[4]=(m[8]*m[0]-m[2]*m[6])*v; n[5]=(m[2]*m[3]-m[5]*m[0])*v;
	n[6]=c*v; n[7]=(m[1]*m[6]-m[7]*m[0])*v; n[8]=(m[4]*m[0]-m[1]*m[3])*v;
	return this;
},
transpose:function() {
	var t,m=this.elm;
	t=m[1]; m[1]=m[3]; m[3]=t;
	t=m[2]; m[2]=m[6]; m[6]=t;
	t=m[5]; m[5]=m[7]; m[7]=t;
	return this;
},
transposeIntoArray:function(r) {
	var q=[0,3,6,1,4,7,2,5,8],i; for(i in r) r[i]=this.elm[q[i]]; return this;
},
setUvTransform:function(tx,ty,sx,sy,r,cx,cy) {
	var c=M.cos(r),s=M.sin(r); this.set(
		sx*c,sx*s,-sx*(c*cx+s*cy)+cx+tx,
		-sy*s,sy*c,-sy*(-s*cx+c*cy)+cy+ty,
		0,0,1
	);
	return this;
},
scale:function(x,y) {
	var t=this.elm;
	t[0]*=x; t[3]*=x; t[6]*=x; t[1]*=y; t[4]*=y; t[7]*=y;
	return this;
},
rotate:function(h) {
	var c=M.cos(h),s=M.sin(h),t=this.elm;
	t[0]=c*t[0]+s*t[1]; t[3]=c*t[3]+s*t[4]; t[6]=c*t[6]+s*t[7];
	t[1]=-s*t[0]+c*t[1]; t[4]=-s*t[3]+c*t[4]; t[7]=-s*t[6]+c*t[7];
	return this;
},
translate:function(x,y) {
	var t=this.elm;
	t[0]+=x*t[2]; t[3]+=x*t[5]; t[6]+=x*t[8];
	t[1]+=y*t[2]; t[4]+=y*t[5]; t[7]+=y*t[8];
	return this;
},
equals:function(m) {
	m=m.elm; for(var i in m) if(this.elm[i]!==m[i]) return false;
	return true;
},
fromArray:function(a,o) {
	if(!o) o=0; for(var i=0; i<9; i++) this.elm[i]=a[i+o]; return this;
},
toArray:function(a,o) {
	if(!a) a=[]; if(!o) o=0; var t=this.elm,i;
	for(i=0 ; i<9 ; i++) a[o+i]=t[i]; return a;
}
});
})();