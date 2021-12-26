(function(){
var _=EF; _.use("*/ext/GR");
_.ICO=function(q,r,v,p) {
	var t=_.aT(q)=="I"?_.CVS.ItoR(q):q.ctx.getImageData(0,0,q.width,q.height),s=new _.Bin([0,0,1,0]),a,b,c,d,e,f,h=1,i=0,j=_.GR.DataToRGB(t),g=_.GR.NEQ(j,p||10);
	s.WD(1,2); a=t.width; b=t.height; a=(a>b?a:b); s.WD(a); s.WD(a); j=_.GR.DTH(a,a,j,v); c=j.length/3; 
	if(c<16) { c=16; s.WD(16); } else { c=256; s.WD(0); }
	s.WD(0); s.WD([1,0],2); s.WD(c==16?(40+(4*c)+(a*a/2)+(a*a/8)):(40+(4*c)+a*a+(a*a/8)),4); s.WD(22,4);
	s.WD([40,a,2*a],4); s.WD(1,2); s.WD(c==16?4:8,2); s.WD(0,4); s.WD(c==16?(a*a/2)+(a*a/8):a*a+(a*a/8),4); s.WD([0,0,0,0],4);
	for(f=0 ; f<c ; f++) s.WD([g[f*3+2],g[f*3+1],g[f*3],0]);
	for(e=a*(a-1) ; e>=0 ; e-=a) for(f=0 ; f<a ; f++) s.WD((c==16?(j[e+f]<<4):j[e+f])+(c==256?0:j[e+(++f)]));
	for(e=a*(a-1)*4 ; e>=0 ; e-=a*4) 
		for(f=0 ; f<a*4 ; f+=32) { g=0; for(h=0 ; h<32 ; h+=4) if(t.data[e+f+h+3]<0.5) g+=1<<((28-h)/4); s.WD(g); }
	s.FL(q,r,"image/x-icon","ico");
};
})();