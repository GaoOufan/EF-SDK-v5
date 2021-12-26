(function(){
var _=EF;
_.GR={
NEQ:function(eX,eS) {
	if(!eS) eS=10; var eN=[],i,eI=new Int32Array(256),eB=new Int32Array(256),eF=new Int32Array(256),eR=new Int32Array(32),
		l=eX.length,eA=30+((eS-1)/3),s=l/(3*eS),v=~~(s/100),a=1024,d=1024,q=16,t,c1,c2,j,p=0,z,m,x,lo,hi,w,f,n,k;
	for(i=0; i<256; i++) { eN[i]=new Float64Array([16,16,16,0]); eF[i]=256; eB[i]=0; }

	for(i=0; i<q; i++) eR[i]=a*(q*q-i*i);
	if(l<1509) { eS=1; t=3; } else t=(l%499)?1497:((l%491)?1473:((l%487)?1461:1509));
	i=0; while(i<s) {
		c1=[]; for(j=0 ; j<3 ; j++) c1[j]=(eX[p+j]&0xff)<<4;
		c2=n=-1; m=z=~(1<<31); for(j=0; j<256; j++) {
			for(x=0,k=0 ; k<3 ; k++) x+=Math.abs(eN[j][k]-c1[k]);
			if(x<z) { z=x; n=j; } w=x-((eB[j])>>12); if(w<m) { m=w; c2=j; } f=(eF[j]>>10); eF[j]-=f; eB[j]+=(f<<10);
		}
		eF[n]+=64; eB[n]-=65536;
		for(j=0 ; j<3 ; j++) eN[c2][j]-=(a*(eN[c2][j]-c1[j]))/1024;
		if(q!==0) {
			lo=Math.abs(c2-q); hi=Math.min(c2+q,256); z=c2+1; k=c2-1; m=1;
			while(z<hi||k>lo) {
				n=eR[m++];
				if(z<hi) { x=eN[z++]; for(j=0 ; j<3 ; j++) x[j]-=(n*(x[j]-c1[j]))/262144; }
				if(k>lo) { x=eN[k--]; for(j=0 ; j<3 ; j++) x[j]-=(n*(x[j]-c1[j]))/262144; }
			}
		}
		p+=t; if(p>=l) p-=l; i++; if(v===0) v=1;
		if(i%v===0) { a-=a/eA; d-=d/30; q=d>>6; if(q<=1) q=0; for(j=0; j<q; j++) eR[j]=a*(((q*q-j*j)*256)/(q*q)); }
	}
	for(i=0; i<256; i++) { for(j=0 ; j<3 ; j++) eN[i][j]>>=4; eN[i][3]=i; }
	z=0; s=0; for(k=0; k<256; k++) {
		p=eN[k]; w=k; v=p[1]; for(j=k+1; j<256; j++) { q=eN[j]; if(q[1]<v) { w=j; v=q[1]; } } q=eN[w];
		if(k!==w) {
			j=q[0]; q[0]=p[0]; p[0]=j; j=q[1]; q[1]=p[1]; p[1]=j;
			j=q[2]; q[2]=p[2]; p[2]=j; j=q[3]; q[3]=p[3]; p[3]=j;
		}
		if(v!==z) { eI[z]=(s+k)>>1; for(j=z+1; j<v; j++) eI[j]=k; z=v; s=k; }
	}
	eI[z]=(s+255)>>1; for(j=z+1; j<256; j++) eI[j]=255;

	m=[]; d=[]; k=0; for(n=0; n<256; n++) d[eN[n][3]]=n;
	for(n=0; n<256; n++) { j=d[n]; for(i=0 ; i<3 ; i++) m[k++]=eN[j][i]; }
	_.GR.PI=[eI,eN]; _.GR.PL=m; return m;
},
IDC:function(b,g,r) {
	var eI=_.GR.PI[0],eN=_.GR.PI[1],a,p,d,y=1000,t=-1,z=eI[g],j=z-1;
	while(z<256||j>=0) {
		if(z<256) {
			p=eN[z]; d=p[1]-g;
			if(d>=y) z=256;
			else {
				z++; if(d<0) d=-d; a=p[0]-b; if(a<0) a=-a; d+=a;
				if(d<y) { a=p[2]-r; if(a<0) a=-a; d+=a; if(d<y) { y=d; t=p[3]; } }
			}
		}
		if(j>=0) {
			p=eN[j]; d=g-p[1];
			if(d>=y) j=-1;
			else {
				j--; if(d<0) d=-d; a=p[0]-b; if(a<0) a=-a; d+=a;
				if(d<y) { a=p[2]-r; if(a<0) a=-a; d+=a; if(d<y) { y=d; t=p[3]; } }
			}
		}
	}
	return t;
},
DataToRGB:function(m) { var l=m.data.length,d=new Uint8Array(l/4*3),i=-1,j=0; while(++i<l) if((i%4)<3) d[j++]=m.data[i]; return d; },
PalRGB:function iK(r,g,b,a) {
	if(_.GR.PI[1]&&!a) return _.GR.IDC(r,g,b);
	var c=b|(g<<8)|(r<<16),p=0,m=16777216,q,d,i,x,eP=_.GR.PL;
	for(i=0,x=0; i<eP.length; x++) {
		q=[r-(eP[i++]&0xff),g-(eP[i++]&0xff),b-(eP[i++]&0xff)];
		d=q[0]*q[0]+q[1]*q[1]+q[2]*q[2]; if((!a||_.GR.eU[x])&&(d<m)) { m=d; p=x; }
	}
	return p;
},
DTH:function(w,h,t,k) {
	var u; if(k==u) k=1;
	var r=(k&16)?-1:1,krn=[
		[[3/8,1,0],[3/8,0,1],[2/8,1,1]],
		[[7/16,1,0],[3/16,-1,1],[5/16,0,1],[1/16,1,1]],
		[
			[8/42,1,0],[4/42,2,0],[2/42,-2,1],[4/42,-1,1],[8/42,0,1],[4/42,1,1],
			[2/42,2,1],[1/42,-2,2],[2/42,-1,2],[4/42,0,2],[2/42,1,2],[1/42,2,2]
		],
		[[1/8,1,0],[1/8,2,0],[1/8,-1,1],[1/8,0,1],[1/8,1,1],[1/8,0,2]]
	],x,y,ds=krn[k],z=0,q,a,c1,c2,e,x1,y1,d,i,n,eD=new Uint8Array(t.length/3);
	k=(!k)?1:k&15; if(!ds) throw 'E001: '+k;
	for(y=0; y<h; y++) {
		for(x=(r==1?0:(w-1)),q=(r==1?w:0); x!==q; x+=r) {
			z=(y*w)+x; a=z*3;
			c1=_.GR.PalRGB(t[a],t[a+1],t[a+2]); if(_.GR.eU) _.GR.eU[c1]=1; eD[z]=c1; c1*=3;
      		c2=[_.GR.PL[c1],_.GR.PL[c1+1],_.GR.PL[c1+2]]; e=[t[a]-c2[0],t[a+1]-c2[1],t[a+2]-c2[2]];
			for(i=(r==1?0:(ds.length-1)),n=(r==1?ds.length:0); i!==n; i+=r) {
				x1=ds[i][1]; y1=ds[i][2];
				if(x1+x>=0 && x1+x<w && y1+y>=0 && y1+y<h) {
					d=ds[i][0]; a=(z+x1+(y1*w))*3;
					t[a]=Math.max(0,Math.min(255,t[a]+e[0]*d));
					t[a+1]=Math.max(0,Math.min(255,t[a+1]+e[1]*d));
					t[a+2]=Math.max(0,Math.min(255,t[a+2]+e[2]*d));
				}
			}
		}
	}
	return eD;
}};
});