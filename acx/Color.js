(function(){ var _=EF; _.Use(["acx/DH","acx/Math"]);
_.Color=function() { var o=this,z=arguments; 
o.set=function(r,g,b,a) { o.r=r; o.g=g; o.b=b; o.a=_.xT(a)?a:1; return o; }
o.setN=function(n) {
	var k=Math.floor; o.r=k(n/16777216); o.g=k((n/65536)&255);
	o.b=k((n/256)&255); o.a=k(n&255); return o;
}
o.setHSL=function(h,s,l,a){
	h*=6; var G=["FXO","RFO","OFX","ORF","XOF","FOR"],M=Math.floor(h),S,L,i;
	if(M>=6) M-=6; L=h-M; S={F:1,O:0,X:L,R:1-L};
	return o.set(iA(S[G[M][0]]),iA(S[G[M][1]]),iA(S[G[M][2]]),a);
	function iA(v) { return v+(0.5-v)*(1-s)+(l>0.5?(((1-v)*(l-0.5))*2):-((v*(0.5-l))*2)); }
}
o.toString=function(y) { return y?o.Hex():o.DOM().outerHTML; }
o.HSL=function() {
	var G=Math.max(o.r,o.g,o.b),M=Math.min(o.r,o.g,o.b),r={}; r.s=G-M; r.l=(G+M)/2;
	if(r.s) r.h=((G==o.r)?((o.g-o.b)/r.s+((o.g<o.b)?6:0)):((G==o.g)?((o.b-o.r)/r.s+2):((o.r-o.g)/r.s+4)))/6;
	return r;
}
o.inv=function(x){ return (o.r+o.g+o.b)<1.5?(x?1:'#fff'):(x?0:'#000'); }
o.Int=function() {
	return (iA(o.r)*16777216)+(iA(o.g)*65536)+(iA(o.b)*256)+iA(_.xT(o.a)?o.a:1);
	function iA(v) { return Math.floor(v*255); }
}
o.CSS=function() { return '#'+_.a0(o.Int(),8,16); }
o.DOM=function(w) {
	var f=_.xM('div',0,0,[w||"10em"],{border:"1px solid #000",background:o.CSS(),color:o.Inv(),textAlign:"center"});
	f.innerText=o.Hex(); return f;
}
o.cpy=function(c) { return o.set(c.r,c.g,c.b,c.a); }
o.clone=function() { return new _.Color(o); }
o.eq=function(c) { var k="rgba"; for(var i=0 ; i<4 ; i++) if(c[k[i]]!==o[k[i]]) return; return 1; }
o.scale=function(s,a) { return new _.Color(o.r*s,o.g*s,o.b*s,o.a*(a?s:1)); }
if(z.length==1) return _.xT(z[0])=="N"?o.setN(z[0]):o.cpy(z[0]);
if(z.length>=3) return o.set(z[0],z[1],z[2],_.xT(z[3])?z[3]:1);
return o; }
_.RQ--; })();
