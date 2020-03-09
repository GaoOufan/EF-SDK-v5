(function(){ var _=EF,b64="0123456789-abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOPQRSTUVWXYZ";; 
_.Use("acx/ML");
_.Crd={ C:_.aS() }; // part of DB
_.E64=function(s) { return btoa(unescape(encodeURIComponent(s))); },
_.D64=function(s) { return decodeURIComponent(escape(atob(s))); }
_.AD=function(c,n,e,d) {
	var f=_.xM('a',0,document.body);
	_.xW(f,0,{download:n+'.'+e,href:((!c.indexOf('data:')||!c.indexOf('blob:'))?c:('data:'+d+';base64,'+c))});
	f.click(); _.xX(f);
}
function L64(V,P) {
	var d="",i=0,h=0,k,r=0,j;
	if(_.xT(P)) {
		k=b64.indexOf(V[P[0]++]);
		d=0; i=32; while(k>=(h+i) && r<5) { h+=i; i>>=1; r++; } k-=h;
		for(j=r ; j>=0 ; j--) { if(j!==r) k=b64.indexOf(V[P[0]++]); d+=k<<(j*6); }
	}
	else {
		while(V>=(1<<(5+5*i)) && i<10) { h+=(32>>i); i++; }
		for(j=i ; j>=0 ; j--) { k=V>>(j*6); V&=(1<<(j*6))-1; if(j==i) k+=h; d+=b64[k]; }
	}
	return d;
}
function N64(v,a) {
	var d="",i,k,x;
	if(a) {
		d=0; x=v.length; for(i=0 ; i<x ; i++) { k=b64.indexOf(v[i]); d+=k*Math.pow(2,(x-i-1)*6); }
		d-=Math.pow(2,x*6-1);
	}
	else {
		x=1; if(v<0) { x=-1; v=-v; } i=1; k=5; while(v>=Math.pow(2,k)) { i++; k+=6; }
		v=Math.pow(2,k)+(v*x); k-=5; while(k>=0) { x=Math.floor(v/Math.pow(2,k)); d+=b64[x]; v-=x*Math.pow(2,k); k-=6; }
	}
	return d;
}
_.F=function(n) { return new FF(n); }
function FF(v) { var o=this; o.F=v.replace(/\+/g,'_'); o.toString=function () { return o.F.replace(/\_/g,'+'); } }
_.ON=function(V,P) {
	if(!_.xT(P)) {
		var T=_.xT(V);
		if(!T) T="0";
		else if(T=="L") T="5"+_.ON(V.W);
		else if(T=="F") T="6"+V.F;
		else if(T=="D") T="7"+N64(Math.floor(V.getTime()/1000));
		else if(T=="A") { T="1"+L64(V.length); for(var i in V) T+=_.ON(V[i]); }
		else if(T=="S") T="3"+_.E64(V+"").replace(/\n/g,'').replace(/\r/g,'').replace(/\+/g,'_');
		else if(T=="C") T="B"+V.EFON();
		else if(T=="I") T="C"+V.src.replace(/\n/g,'').replace(/\r/g,'').replace(/\+/g,'_').replace(/\;/g,'*');
		else if(T=="N") {
			V=V+""; var e=V.indexOf("e"),i;
			if(e==-1) e=0; else { e=parseInt(V.substr(e+1)); V=V.substr(0,V.indexOf("e")); }
			i=V.indexOf("."); if(i>-1) { e-=V.length-i-1; V=V.replace(/\./g,''); }
			V=parseInt(V); T=(e==0)?"8"+N64(V):"9"+N64(V)+N64(e);
		}
		else if(T=="H") {
			var s=Object.keys(V); T="2"+L64(s.length);
			for(var i in s) T+=_.ON(s[i])+_.ON(V[s[i]]);
		}
		return L64(T.length)+T;
	}
	else {
		if(P=='-') P=[0];
		var L=L64(V,P),T=V[P[0]],O,Q; P[0]++;
		if(T=="0") O=null;
		else if(T=="1") { O=[]; Q=L64(V,P); for(var i=0 ; i<Q ; i++) O.push(_.ON(V,P)); }
		else if(T=="2") { O={}; Q=L64(V,P); for(var i=0 ; i<Q ; i++) O[_.ON(V,P)]=_.ON(V,P); }
		else {
			O=V.substr(P[0],L-1);
			if(T=="5") O=new _.ML(O);
			else if(T=="7") O=new Date(N64(O,1)*1000);
			else if(T=="8") O=N64(O,1);
			else if(T=="9") O=N64(O.substr(0,O.length-1),1)*Math.pow(10,N64(O.substr(-1),1));
			else if(T=="B") O=new Color(O,2);
			else if(T=="C") O=new Image().Set(O.replace(/\_/g,'+').replace(/\*/g,';'));
			else { if(T!=="6") O=_.D64(O.replace(/\_/g,'+')); if(T=="4") O=parseFloat(O); }
			P[0]+=L-1;
		}
		return O;
	}
}
_.RQ--; })();