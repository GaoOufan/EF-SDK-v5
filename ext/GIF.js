(function(){
var _=EF; _.use("*/ext/GR");
_.GIF=function(p) {
	var R=new _.Bin(),eP,eT=0,u,fc; _.GR.eU=[];
	if(p.d==u) p.d=0; if(p.rp==u) p.rp=-1; if(p.dsp==u) p.dsp=-1;
	for(fc=0 ; fc<p.frm.length ; fc++) {
		p.frm[fc].w=p.frm[fc].m.width;
		p.frm[fc].h=p.frm[fc].m.height;
		if(!p.frm[fc].x) p.frm[fc].x=0;
		if(!p.frm[fc].y) p.frm[fc].y=0;
		p.frm[fc].m=_.GR.DataToRGB(p.frm[fc].m);
		if(!p.w||p.frm[fc].x+p.frm[fc].w>p.w) p.w=p.frm[fc].x+p.frm[fc].w;
		if(!p.h||p.frm[fc].y+p.frm[fc].h>p.h) p.h=p.frm[fc].y+p.frm[fc].h;
	}
	R.WD("GIF89a");
	for(fc=0 ; fc<p.frm.length ; fc++) {
		var m=p.frm[fc].m,d=p.frm[fc].d,r=p.frm[fc].r,w=p.frm[fc].w,h=p.frm[fc].h,q,c=0,i,j,k,eD;
		if(p.pt&&p.pt.slice) _.GR.PL=eP=p.pt; if(!eP) { eP=_.GR.NEQ(m,p.qs); }
		if(p.dt) eD=_.GR.DTH(w,h,m,p.dt&15,p.dt);
		else {
			k=0; q=m.length/3; eD=new Uint8Array(q);
			for(j=0; j<q; j++) { i=_.GR.PalRGB(m[k++]&255,m[k++]&255,m[k++]&255); _.GR.eU[i]=1; eD[j]=i; }
		}
		if(p.tr!==u) eT=_.GR.PalRGB((p.tr&0xff0000)>>16,(p.tr&0xff00)>>8,p.tr&255,1);
		if(p.pt==1) p.pt=eP; if(!fc) {
			R.WD(p.w,2); R.WD(p.h,2); R.WD(247); R.WD(0,2); iT();
			if(p.rp>=0) { R.WD(0x0bff21,3); R.WD('NETSCAPE2.0'); R.WD(259,2); R.WD(p.rp,2); R.WD(0); }
		}
		R.WD(0x04f921,3); if(p.tr==u) { i=0; j=0; } else { i=1; j=2; } if(p.dsp>=0) j=p.dsp&7; j<<=2;
		R.WD(0|j|0|i); R.WD(d?d:p.d,2); R.WD(eT); R.WD(0x2c00,2);
		R.WD(p.frm[fc].x,2); R.WD(p.frm[fc].y,2); R.WD(w,2); R.WD(h,2); R.WD((!fc||p.pt)?0:135);
		if(fc&&!p.pt) iT(); iE(eD);
	}
	R.WD(59); if(!p.f&&!p.z) return R.url(); R.FL(p.z,p.f,"gif","image/gif");

	function iE(m) {
		var ca,cb=0,aa=0,fe=258,cf,gi=9,cc=256,ec=257,mx=511,f=5003,hb=new Int32Array(f),nb=9,ct=new Int32Array(f),
			rm=m.length,cp=0,ac=new Uint8Array(256),c,i,e=jN(),d,a=f,g=0;

		R.WD(8); while(f<65536) { ++g; f*=2; } g=8-g; jX(a); jO(cc);
		OL: while((c=jN())!==-1) {
			f=(c<<12)+e; i=(c<<g)^e; if(hb[i]==f) { e=ct[i]; continue; }
			if(hb[i]>=0) {
				d=a-i; if(i===0) d=1;
				do { if((i-=d)<0) i+=a; if(hb[i]==f) { e=ct[i]; continue OL; } } while(hb[i]>=0);
			}
			jO(e); e=c; if(fe<4096) { ct[i]=fe++; hb[i]=f; } else { jX(5003); fe=cc+2; cf=1; jO(cc); }
		}
		jO(e); jO(ec); R.WD(0);

		function jH(b) { ac[aa++]=b; if(aa>=254) jL(); }
		function jX(b) { for(var i=0; i<b;++i) hb[i]=-1; }
		function jL() { if(aa>0) { R.WD(aa); R.WB(ac,0,0,aa); aa=0; } }
		function jN() { if(rm===0) return -1; --rm; return m[cp++]&255; }
		function jO(b) {
			ca&=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535][cb];
			if(cb>0) ca|=(b<<cb); else ca=b; cb+=nb; while(cb>=8) { jH(ca&255); ca>>=8; cb-=8; }
			if(fe>mx||cf)
				if(cf) { nb=gi; mx=(1<<nb)-1; cf=0; }
				else { ++nb; if(nb==12) mx=4096; else mx=(1<<nb)-1; }
			if(b==ec) { while(cb>0) { jH(ca&255); ca>>=8; cb-=8; } jL(); }
		}
	}
	function iT() { R.WD(eP); for(var i=eP.length; i<768; i++) R.WD(0); }
};
});