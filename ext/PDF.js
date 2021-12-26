(function(){
var _=EF;
_.PDF=function(o,u,f,iC) {
if(!o) o='p'; if(!u) u='mm'; if(!f) f='a4'; if(iC&&!_.PDF.zpipe) iC=0; // _.PDF.zpipe will be used for compression. The technique is used in WOFF as well. 
var O=this,ver='1.0',tc='0 g',dc='0 G',pg=0,eG=[],eN=2,eO,eF={},fnm={},af,lw=0.200025,
pf={ a3:[841.89,1190.55],a4:[595.28,841.89],a5:[420.94,595.28],ltr:[612,792],lgl:[612,1008] },
ph,pw,lci=0,lji=0,tmp,eI={},
f2=function(n){return n.toFixed(2);},f3=function(n){return n.toFixed(3);},
p2=function(v){var n=(v).toFixed(0);return(v<10)?'0'+n:n;},
px=function(v){var n=(v).toFixed(0);return(n.length<10)?(new Array(11-n.length).join('0')+n):n;},
iO=function(s) { eG[pg].push(s); },
iE=function(t,g) {
	var i,l,s=g.s,b,o,x,y=0,c,w,z=g.o; if(!g) g={}; if(!s) s='Unicode';
	if((g.a||z)&&eF[af].md&&eF[af].md[s]&&eF[af].md[s].encoding) {
		b=eF[af].md[s].encoding;
		if(!z&&eF[af].ec) z=eF[af].ec;
		if(!z&&b.codePages) z=b.codePages[0];
		if(_.aT(z=='S')) z=b[z];
		if(z) {
			y=0; x=[]; for(i=0,l=t.length; i<l; i++) {
				c=z[t.charCodeAt(i)]; x.push((c)?String.fromCharCode(c):t[i]);
				if(x[i].charCodeAt(0)>>8) y=1;
			}
			t=x.join('');
		}
	}
	i=t.length; while(!y && i!==0) { if(t.charCodeAt(i-1)>>8) y=1; i--; }
	if(!y) return t; x=g.n?[]:[254,255];
	for(i=0,l=t.length; i<l; i++) {
		c=t.charCodeAt(i);
		w=c>>8; if(w>>8) throw new Error("Character at position "+i.toString(10)+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");
		x.push(w); x.push(c-(w<<8));
	}
	return String.fromCharCode(...x).replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
},
iF=function(n,s) {
	if(!n) n=eF[af].fn; if(!s) s=eF[af].fs;
	if(!fnm[n]||!fnm[n][s]) throw new Error("Unable to look up font label for font '"+n+"', '"+s+"'. Refer to GF() for available fonts.");
	return fnm[n][s];
},k={pt:1,mm:72/25.4,cm:72/2.54,in:72}[u];

if(!k) throw('Invalid unit: '+u); if(!pf[f]) throw('Invalid format: '+f); ph=pf[f][1]/k; pw=pf[f][0]/k;
if(o=='p') { if(pw>ph) { tmp=pw; pw=ph; ph=tmp; } }
else if(o=='l') { if(ph>pw) { tmp=pw; pw=ph; ph=tmp; } }
else throw('Invalid orientation: '+o);

O.inf={title:'',subject:'',author:'',keywords:'',creator:''};
O.fs=16;
O.AP=function() {
	pg++; eO=1; eG[pg]=[]; iO(f2(lw*k)+' w'); iO(dc);
	if(lci!==0) iO(lci.toString(10)+' J');
	if(lji!==0) iO(lji.toString(10)+' j');
};
O.TX=function(t,x,y,g) {
	var z=O.aT(t),q,s,i;
	if(z=='L') { t=t.toString(); z='S'; }
	if(z=='S' && t.match(/[\n\r]/)) t=t.split(/\r\n|\r|\n/g);
	if(!g) g={}; if(!g.n) g.n=1; if(!g.a) g.a=1;
	if(z=='S') s=iE(t,g);
	else if(z=="A") { q=t.concat(); for(i=q.length-1; i!==-1; i--) q[i]=iE(q[i],g); s=q.join(") Tj\nT* ("); }
	else throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');
	iO('BT\n/'+af+' '+O.fs+' Tf\n'+O.fs+' TL\n'+tc+'\n'+f2(x * k)+' '+f2((ph-y)*k)+' Td\n('+s+') Tj\nET');
	return this;
};
O.line=function(x1,y1,x2,y2) { iO(f2(x1*k)+' '+f2((ph-y1)*k)+' m '+f2(x2*k)+' '+f2((ph-y2)*k)+' l S'); return this; };
O.DL=function(n,x,y,s,q) {
	var i,l,t,x2,y2,x3,y3,x4,y4; s=(!s)?[1,1]:s;
	iO(f3(x*k)+' '+f3((ph-y)*k)+' m '); l=n.length;
	x4=x; y4=y; for(i=0; i<l; i++) {
		t=n[i]; if(t.length==2) { x4=t[0]*s[0]+x4; y4=t[1]*s[1]+y4; iO(f3(x4*k)+' '+f3((ph- y4)*k)+' l'); }
		else {
			x2=t[0]*s[0]+x4; y2=t[1]*s[1]+y4; x3=t[2]*s[0]+x4; y3=t[3]*s[1]+y4; x4=t[4]*s[0]+x4; y4=t[5]*s[1]+y4;
			iO(f3(x2*k)+' '+f3((ph-y2)*k)+' '+f3(x3*k)+' '+f3((ph-y3)*k)+' '+f3(x4*k)+' '+f3((ph-y4)*k)+' c');
		}
	}
	iO(q); return this;
};
O.DR=function(x,y,w,h,s) { iO([f2(x*k),f2((ph-y)*k),f2(w*k),f2(-h*k),'re',s].join(' ')); return this; };
O.DG=function(x1,y1,x2,y2,x3,y3,s) { O.DL([[x2-x1,y2-y1],[x3-x2,y3-y2],[x1-x3,y1-y3]],x1,y1,[1,1],s); return this; };
O.roundedRect=function(x,y,w,h,rx,ry,s) {
	var a=4/3*(Math.SQRT2-1);
	O.DL([
		[(w-2*rx),0],[(rx*a),0,rx,ry-(ry*a),rx,ry],
		[0,(h-2*ry)],[0,(ry*a),-(rx*a),ry,-rx,ry],
		[(-w+2*rx),0],[-(rx*a),0,-rx,-(ry*a),-rx,-ry],
		[0,(-h+2*ry)],[0,-(ry*a),(rx*a),-ry,rx,-ry]
	],x+rx,y,[1,1],s); return this;
};
O.DA=function(x,y,rx,ry,s) {
	var lx=4/3*(Math.SQRT2-1)*rx,ly=4/3*(Math.SQRT2-1)*ry;
	iO([
		f2((x+rx)*k),f2((ph-y)*k),'m',f2((x+rx)*k),f2((ph-(y-ly))*k),
		f2((x+lx)*k),f2((ph-(y-ry))*k),f2(x*k),f2((ph-(y-ry))*k),'c'
	].join(' '));
	iO([f2((x-lx)*k),f2((ph-(y-ry))*k),f2((x-rx)*k),f2((ph-(y-ly))*k),f2((x-rx)*k),f2((ph-y)*k),'c'].join(' '));
	iO([f2((x-rx)*k),f2((ph-(y+ly))*k),f2((x-lx)*k),f2((ph-(y+ry))*k),f2(x*k),f2((ph-(y+ry))*k),'c'].join(' '));
	iO([f2((x+lx)*k),f2((ph-(y+ry))*k),f2((x+rx)*k),f2((ph-(y+ly))*k),f2((x+rx)*k),f2((ph-y)*k),'c',s].join(' '));
	return this;
};
O.SF=function(n,s) { af=iF(n,s); return this; };
O.SL=function(s) { af=iF(null,s); return this; };
O.GF=function () {
	// TODO: iterate over fonts array or return copy of fnm instead in case more are ever added.
	var l={},n,s,t;
	for(n in fnm) if(fnm.hasOwnProperty(n)) { l[n]=t=[]; for(s in fnm[n]) if(fnm[n].hasOwnProperty(s)) t.push(s); }
	return l;
};
O.SW=function(w) { iO(f2(w*k)+' w'); return this; };
O.SC=function(a,b,c,d) {
	var v,e=(_.aT(a)=='S')?1:0,t=_.aT(d);
	if(_.aT(b)===""||(t===""&&a==b==c)) v=(e)?(a+' G'):(f2(a/255)+' G');
	else if(t==="") v=(e)?[a,b,c,'RG'].join(' '):[f2(a/255),f2(b/255),f2(c/255),'RG'].join(' ');
	else v=(e)?[a,b,c,d,'K'].join(' '):[f2(a),f2(b),f2(c),f2(d),'K'].join(' ');
	iO(v); return this;
};
O.SB=function(a,b,c,d) {
	var v,e=(_.aT(a)=='S')?1:0,t=_.aT(d);
	if(_.aT(b)===""||(t===""&&a==b==c)) v=(e)?(a+' g'):(f2(a/255)+' g');
	else if(t==="") v=(e)?[a,b,c,'rg'].join(' '):[f2(a/255),f2(b/255),f2(c/255),'rg'].join(' ');
	else v =(e)?[a,b,c,d,'k'].join(' '):[f2(a),f2(b),f2(c),f2(d),'k'].join(' ');
	iO(v); return this;
};
O.TC=function(a,b,c) {
	tc=((a==b&&a==c)||(_.aT(b)===''))?(f3(a/255)+' g'):([f3(a/255),f3(b/255),f3(c/255),'rg'].join(' '));
	return this;
};
O.SP=function(s) { lci=s; iO(s.toString(10)+' J'); return this; };
O.SJ=function(s) { lji=s; iO(s.toString(10)+' j'); return this; };
O.GD=function(q,r,x,m) {
	var n,p,a,i,d,t,v,dt=new _.Bin(),kd,eC=[],eL=0,ofx=[]; iR('%PDF-1.3'); 
	for(n=1; n<=pg; n++) {
		iB(); iR('<</Type /Page'); iR('/Parent 1 0 R'); iR('/Resources 2 0 R');
		iR('/Contents '+(eN+1)+' 0 R>>'); iR('endobj');
		p=eG[n].join('\n'); iB(); if(iC) {
			a=[]; for(i=0; i<p.length;++i) a[i]=p.charCodeAt(i);
			t=_.PDF.adler32cs.from(p); d=new _.PDF.Deflater(6); // _.PDF.adler32cs shall be used for compression as well (or deflation??!)
			d.append(new Uint8Array(a)); p=d.flush();
			a=[new Uint8Array([120,156]),new Uint8Array(p),new Uint8Array([t&255,(t>>8)&255,(t>>16)&255,(t>>24)&255])];
			p=''; for(i in a) if(p.hasOwnProperty(i)) p+=String.fromCharCode(...a[i]);
			iR('<</Length '+p.length+' /Filter [/FlateDecode]>>');
		}
		else iR('<</Length '+p.length+'>>');
		iS(p); iR('endobj');
	}
	ofx[1]=eL; iR('1 0 obj'); iR('<</Type /Pages'); kd='/Kids [';
	for(i=0; i<pg; i++) kd+=(3+2*i)+' 0 R ';
	iR(kd+']'); iR('/Count '+pg); iR('/MediaBox [0 0 '+f2(pw*k)+' '+f2(ph*k)+']'); iR('>>'); iR('endobj');
	for(n in eF) if(eF.hasOwnProperty(n)) {
		v=eF[n]; v.eN=iB(); iR('<</BaseFont/'+v.pn+'/Type/Font');
		if(_.aT(v.ec=='S')) iR('/Encoding/'+v.ec); iR('/Subtype/Type1>>'); iR('endobj');
	}
	for(var w in eI) {
		v=eI[w]; iB(); eI[w].n=eN; iR('<</Type /XObject'); iR('/Subtype /Image');
		iR('/Width '+v.w); iR('/Height '+v.h);
		if(v.cs=='Indexed') iR('/ColorSpace [/Indexed /DeviceRGB '+(v.pal.length/3-1)+' '+(eN+1)+' 0 R]');
		else { iR('/ColorSpace /'+v.cs); if(v.cs=='DeviceCMYK') iR('/Decode [1 0 1 0 1 0 1 0]'); }
		iR('/BitsPerComponent '+v.bpc); if('f' in v) iR('/Filter /'+v.f);
		if('dp' in v) iR('/DecodeParms <<'+v.dp+'>>');
		if('trns' in v && _.aT(v.trns)=="A") {
			t=''; for(i=0; i<v.trns.length; i++) { t+=(v[t][i]+' '+v.trns[i]+' '); iR('/Mask ['+t+']'); }
		}
		if('smask' in v) iR('/SMask '+(eN+1)+' 0 R');
		iR('/Length '+v.data.length+'>>'); iS(v.data); iR('endobj');
	}
	ofx[2]=eL; iR('2 0 obj'); 
	iR('<<'); iR('/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]'); iR('/Font <<');
	for(v in eF) if (eF.hasOwnProperty(v)) iR('/'+v+' '+eF[v].eN+' 0 R');
	iR('>>'); iR('/XObject <<'); for(i in eI) iR('/I'+eI[i].i+' '+eI[i].n+' 0 R'); 
	iR('>>'); iR('>>'); iR('endobj');
	iB(); iR('<<'); iR('/Producer(EF-PDF v.'+ver+')');
	if(O.inf.title) iR('/Title ('+iE(O.inf.title)+')');
	if(O.inf.subject) iR('/Subject ('+iE(O.inf.subject)+')');
	if(O.inf.author) iR('/Author ('+iE(O.inf.author)+')');
	if(O.inf.keywords) iR('/Keywords ('+iE(O.inf.keywords)+')');
	if(O.inf.creator) iR('/Creator ('+iE(O.inf.creator)+')');
	d=new Date(); iR('/CreationDate (D:'+[
		d.getFullYear(),p2(d.getMonth()+1),p2(d.getDate()),
		p2(d.getHours()),p2(d.getMinutes()),p2(d.getSeconds())
	].join('')+')');
	iR('>>'); iR('endobj'); iB(); iR('<<'); 
	iR('/Type /Catalog'); iR('/Pages 1 0 R');
	// TODO: Add zoom and layout modes
	iR('/OpenAction [3 0 R /FitH null]'); iR('/PageLayout /OneColumn');
	iR('>>'); iR('endobj');
	v=eL; iR('xref'); iR('0 '+(eN+1)); iR('0000000000 65535 f ');
	for(i=1; i<=eN; i++) iR(px(ofx[i])+' 00000 n ');
	iR('trailer'); iR('<<'); iR('/Size '+(eN+1)); iR('/Root '+eN+' 0 R'); iR('/Info '+(eN-1)+' 0 R');
	iR('>>'); iR('startxref'); iR(v); iR('%%EOF'); dt.WD(eC.join('\n'));

	return dt.FL(q,r,x,m);

	function iS(s) { iR('stream'); iR(s); iR('endstream'); }
	function iR(s) { eC.push(s); eL+=s.length+1; }
	function iB() { ofx[++eN]=eL; iR(eN+' 0 obj'); return eN; }
};
O.AI=function(e,x,y,w,h,q) {
	var a=_.CVS.RtoI(e,"J",q),d=Object.keys(eI).length,
		v={ w:e.width,h:e.height,cs:'DeviceRGB',bpc:8,f:'DCTDecode',i:d,data:atob(a.slice(a.indexOf('base64,')+7)) };
	eI[d]=v; if(!w&&!h) { w=-96; h=-96; }
	if(w<0) w=(-1)*v.w*72/w/k; if(h<0) h=(-1)*v.h*72/h/k; if(w===0) w=h*v.w/v.h; if(h===0) h=w*v.h/v.w;
	iO('q '+f2(w*k)+' 0 0 '+f2(h*k)+' '+f2(x*k)+' '+f2((ph-(y+h))*k)+' cm /I'+v.i+' Do Q');
	return this;
};
function go() {
	var n,d,t,s,i,j,a,b=[["Helvetica",0,1,2,3],["Times",8,1,4,5],["Courier",0,1,2,3]],l=Object.keys(eF).length+1;
	for(j=0 ; j<b.length ; j++)
		for(i=1; i<b[j].length; i++,l++) {
			t=b[j][0]; n=t.toLowerCase(); d='F'+l; a=nB(b[j][i]); s=nA(b[j][i]);
			eF[d]={ id:d,pn:t+a,fn:n,fs:s,ec:'StandardEncoding',md:{} };
			if(!fnm[n]) fnm[n]={}; fnm[n][s]=d; if(!fnm[t]) fnm[t]={}; fnm[t][a]=d;
		}
	function nA(z) { if(z&8) z-=8; if(z&2) z+=2; return (z&&nB(z).toLowerCase())||"normal"; }
	function nB(z) { return (z?"-":"")+(z&1?"Bold":"")+(z&2?"Oblique":"")+(z&4?"Italic":"")+(z&8?"Roman":""); }
}
go(); af='F1'; O.AP(); return O;
};
});