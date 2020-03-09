EF.Color=function(v,h) {
	var _=EF,o=this,t=_.xT(v); if(!h) h=0;
	if(t=="N") v=(t=="N"?[v>>16,(v>>8)&0xff,v&0xff]:_.aA(v));
	while(v.length<4) v.push(255);
	
	if(h<2) o.V=v; else {
		var d=[0,0,0,0,0],i; for(i in d) d[i]=b64.indexOf(v[i]);
		o.V=[d[0]*4+(d[1]>>4),(d[1]&15)*16+(d[2]>>2),(d[2]&3)*64+d[3],d[4]*4];
	}
	if(h==1) {
		if(t=="N") o.V[0]*=6/256;
		var c=o.V,G=["FXO","RFO","OFX","ORF","XOF","FOR"],M=Math.floor(c[0]),H=[],S,L,i;
		if(M>=6) M-=6; L=Math.floor((c[0]-M)*255); S={ F:255,O:0,X:L,R:255-L };
		for(i=0 ; i<3 ; i++) {
			H.push(S[G[M][i]]); H[i]+=Math.floor(((128-H[i])*(255-c[1]))/255);
			if(c[2]>128) H[i]+=Math.floor(((255-H[i])*(c[2]-128))/127);
			else H[i]-=Math.floor((H[i]*(128-c[2]))/128);
		}
		o.V=H; if(c.length>3) o.V.push(c[3]);
	}
	o.toString=function(y) { return y?o.V.join(','):o.DOM().outerHTML; }
	o.HSL=function() {
		var c=o.V,G,M,H=[],i; for(i=0 ; i<3 ; i++) c[i]=Math.floor(c[i]);
		G=Math.max(c[0],c[1],c[2]); M=Math.min(c[0],c[1],c[2]); H=[0,G-M,Math.floor((G+M)/2)];
		if(H[1]>0) H[0]=(G==c[0])?((c[1]-c[2])/H[1]+((c[1]<c[2])?6:0)):((G==c[1])?((c[2]-c[0])/H[1]+2):((c[0]-c[1])/H[1]+4));
		return H;
	}
	o.REV=function(x) { var v=o.V; return (v[0]+v[1]+v[2])<384?(x?255:'#fff'):(x?0:'#000'); }
	o.CSS=function() {
		var v=o.V; if(v[3]==255) {
			var w='#',a="0123456789abcdef",i,k=(v[0]%17||v[1]%17||v[2]%17)?1:0;
			for(i=0 ; i<3 ; i++) w+=a[Math.floor(v[i]/16)]+(k?a[v[i]%16]:""); return w;
		}
		else return 'rgba('+[v[0],v[1],v[2],(v[3]/255).toFixed(3)].join(',')+')';
	}
	o.DOM=function(w) {
		var f=_.xM('div',0,0,[w||"10em"],{ border:"1px solid #000",background:o.CSS(),color:o.REV(),textAlign:"center" });
		f.innerText=o.toString(1); return f;
	}
	o.Int=function() { return o.V?(o.V[0]<<16)+(o.V[1]<<8)+o.V[2]:0; }
	o.cpy=function() { return new _.Color(o.V); }
	o.EFON=function() { var c=o.V; return b64[c[0]>>2]+b64[(c[0]&3)*16+(c[1]>>4)]+b64[(c[1]&15)*4+(c[2]>>6)]+b64[c[2]&63]+b64[c[3]>>2]; }
	o.EQ=function(c) { for(var i=0 ; i<4 ; i++) if(c.V[i]!==o.V[i]) return; return 1; }
}
EF.RQ--;