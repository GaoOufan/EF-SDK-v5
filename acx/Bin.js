(function(){ var _=EF;
_.Use("acx/EFON");
_.Bin=function(dt,md) {
	var o=this,f=16384,unf;
	o.XX=function() { o.d=[new Uint8Array(f)]; o.p=0; o.o=0; }
	o.WD=function(r,s) {
		if(!s) { s=1; var w=r; while((w>>=8)) s++; }
		for(var i=0; i<s; i++) {
			o.d[o.p][o.o++]=(r>>(i*8))&0xff; if(o.o==f) { o.d[++o.p]=new Uint8Array(f); o.o=0; }
		}
	}
	o.WB=function(a,f,l) { for(var x=l||a.length,i=f||0; i<x; i++) o.WD(a[i]); }
	o.WU=function(s) { for(var i=0; i<s.length; i++) o.WD(s.charCodeAt(i)); }
	o.GD=function(t) { var q=o.RD(); o.XX(); return URL.createObjectURL(new Blob([q],{type:t})); }
	o.FL=function(q,r,x,m) {
		if(md=="E") { m=m||"text/plain"; x=x||"ef"; }
		if(!r) _.AD(o.GD(m),q,x);
		else if(_.xT(r)=="Q") r(o.GD(m),q);
	}
	o.RD=function() {
		var q=new Uint8Array(o.p*f+o.o),b,i,j=0,m;
		while(o.d.length>0) { m=o.d.shift(); for(i=0 ; i<(o.d.length?f:o.o) ; i++) q[j++]=m[i]; }
		return q;
	}
	o.XX();
	if(dt)
		if(!md) o.WB(dt); 
		else if(md=="T") o.WU(dt);
		else if(md=="E") o.WU(_.ON(dt));
		else if(md=="B") o.WB(EFON(dt));
	function EFON(V) {
		var T=_.xT(V),q=[];
		if(!T) q.push(0);
		else if(T=="L") { q.push(5); q=q.concat(EFON(V.W)); }
		else if(T=="F") { q.push(6); q=q.concat(BS(V.F)); }
		else if(T=="D") { q.push(7); q=q.concat(Num(Math.floor(V.getTime()/1000))); }
		else if(T=="A") { q.push(1); q.push(Len(V.length)); for(var i in V) q=q.concat(EFON(V[i])); }
		else if(T=="H") {
			q.push(2); var s=Object.keys(V); q=q.concat(Len(s.length));
			for(var i in s) q=q.concat(EFON(s[i])).concat(EFON(V[s[i]]));
		}
		else if(T=="S") { q.push(3); q=q.concat(BS(V)); }
		else if(T=="C") { q.push(11); q=q.concat(V.V); }
		else if(T=="I") { q.push(12); q=q.concat(BS(V.src)); }
		else if(T=="N") {
			if(Math.floor(V)==V) { q.push(8); q=q.concat(Num(V)); }
			else { q.push(9); var e=new Float64Array([V]),c=new Uint8Array(e.buffer); for(var i in c) q.push(c[i]); }
		}
		return Len(q.length).concat(q);
	}
	function BS(n) { var c=atob(_.E64(n)),q=[]; for(var i in c) q.push(c.codePointAt(i)); return q; }
	function Len(n) {
		var d=[],i=0,h=0,k,j;
		while(n>=Math.pow(2,7+7*i) && i<7) { h+=Math.pow(2,7-i); i++; }
		for(j=i ; j>=0 ; j--) { k=Math.floor(n/Math.pow(2,j*8)); n=n%Math.pow(2,j*8); if(j==i) k+=h; d.push(k); }
		return d;
	}
	function Num(n) {
		var d=[],i=0,h=0,k,j; if(n<0) { j=1; n=-n; }
		while(n>=Math.pow(2,6+7*i)) { h+=Math.pow(2,7-i); i++; }
		if(j) h+=Math.pow(2,6-i);
		for(j=i ; j>=0 ; j--) { k=Math.floor(n/Math.pow(2,j*8)); n=n%Math.pow(2,j*8); if(j==i) k+=h; d.push(k); }
		return d;
	}
}
_.ReadBin=function(V,P) {
	if(!P) { V=new Uint8Array(V); P=[0]; }
	var O,L=Len(V,P),T=V[P[0]++],Q;
	if(T==0) O=null;
	else if(T==1) { O=[]; Q=Len(V,P); for(var i=0 ; i<Q ; i++) O.push(_.ReadBin(V,P)); }
	else if(T==2) { O={}; Q=Len(V,P); for(var i=0 ; i<Q ; i++) O[_.ReadBin(V,P)]=_.ReadBin(V,P); }
	else {
		O=V.slice(P[0],P[0]+L-1);
		if(T==5) O=_.L(_.ReadBin(O));
		else if(T==7) O=new Date(Num(O)*1000);
		else if(T==8) O=Num(O);
		else if(T==9) { O=new Uint8Array(O); O=new Float64Array(O.buffer); O=O[0]; }
		else if(T==11) O=new Color(O);
		else if(T==12) { T=new Image(); T.src=_.D64(btoa(iA(O))); }
		else if(T!==6) O=_.D64(btoa(iA(O)));
		else O=_.F(_.D64(btoa(iA(O))));
		P[0]+=L-1;
	}
	return O;
	function iA(n) { var d=""; for(var i in n) d+=String.fromCharCode(n[i]); return d; }
	function Len(n,P) {
		var d=0,i=128,h=0,k=n[P[0]++],r=0,j;
		while(k>=(h+i) && r<7) { h+=i; i/=2; r++; } k-=h;
		for(j=r ; j>=0 ; j--) { if(j!==r) k=n[P[0]++]; d+=k*Math.pow(2,j*8); }
		return d;
	}
	function Num(n) {
		var d=0,i=0,h=0,k=n[0],j;
		while(k>=(h+Math.pow(2,7-i))) { h+=Math.pow(2,7-i); i++; } k-=h; h=0;
		if(k>=Math.pow(2,6-i)) { k-=Math.pow(2,6-i); h=1; }
		for(j=0 ; j<=i ; j++) { if(j>0) k=n[j]; d+=k*Math.pow(2,(i-j)*8); }
		if(h) d=-d; return d;
	}
}
_.RQ--; })();