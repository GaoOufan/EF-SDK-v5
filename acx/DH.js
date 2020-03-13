(function(){ var _=EF;
_.a0=function(n,s,h) { var a=""; while(a.length<s) a+="0"; return (a+n.toString(h)).slice(s); }
_.aA=function(v) { if(v.split) v=eval('['+v+']'); return v; }
_.aC=function(a) {
	var i={A:[],H:{}},t=_.xT(a),b=i[t];
	if(b) for(i in a) if(t=='A') b.push(_.xH(a[i])); else b[i]=_.xH(a[i]);
	return b||a;
}
_.aG=function(){
	var b=_.aR(0xffffffff),c=_.aR(0xffffffff); return (_.a0(_.aR(0xffffffff),8)+'-'+
	_.a0(b&0xffff,4)+'-'+_.a0(b>>16&0x0f|0x40,2)+_.a0(b>>24&0xff,2)+'-'+
	_.a0(c&0x3f|0x80,2)+_.a0(c>>8&0xff,2)+'-'+_.a0(c>>16&0xffff,4)+
	_.a0(_.aR(0xffffffff),8)).toUpperCase();
}
_.aR=function(n) { return Math.floor(Math.random()*n); }
_.aT=function(r,f,d,c) {
	return r.sort(function(a,b){ if(c!==unf) a=a[c]; b=b[c]; if(f==2&&_.xT(a)!=="N") f=0;
	return (f?a-b:(a<b?-1:(a>b?1:0)))*(d?-1:1); });
}
_.RQ--; })();
