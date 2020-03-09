(function(){ var _=EF;
_.Use("acx/Mouse");
_.Base.Add([
	'.TRI{ font-size:1em; font-family:"EF-SDK"; padding-right:2px; cursor:pointer; }',
	'.TRB{ padding:0.5em 0.5em 0.5em 2em; border-left:1px dashed #000; position:relative; left:0.5em; }',
	'.TRB[clp]{ display:none; }',
	'.TRV{ padding:0.5em; overflow:auto; }',
	'.TRV, .TRB{ margin:0px; box-sizing:border-box; }',
	'.TRL{ display:grid; }',
	'.TRV, .TRL{ list-style-type:none; }',
	'.TRL > div > img{ margin-right:4px; display:inline; }',
	'.TRM, .TRL > div > div{ display:inline-block; vertical-align:top; }',
	'.TRM{ font-weight:bold; margin-right:1em; box-sizing:border-box; white-space:normal; }',
	'.TRV:not([kv]) .TRM{ display:none; }',
	'.TRZ{ white-space:nowrap; }',
	'.TRL > div{ white-space:nowrap; }',
	'[ctrl="TRE"][wrp] .TRZ, [ctrl="TRE"][wrp] .TRL > div{ white-space:normal; }'
]);
if(!_.Cfg.TRE) _.Cfg.TRE={};
_.CTRL.TRE=function(f,p) {
	var z=f.tre=_.xM("ul",0,f,["100%","100%"],"TRV"),j; f.className="FLD";
	_.mR(f,p.rsx?1:0); f.stl=_.STL(['.TRV[kv] .TRM{}'],f); _.xB(f,"wrp",1,1);
	_.xB(f,"kv",_.xW.bind(this,f.tre,"kv","~"),function(v){
		_.xW(f.tre,"kv",v); f.stl.Rul(0,{width:v+"em"});
	});
	f.ahi=p.ahi==1?_.Cfg.TRE.ahi:p.ahi; f.kv=_.xT(p.kv)?p.kv:(_.Cfg.TRE.kv||4); f.xs=p.xs;
	
	f.Add=function(c,d,a) {
		if(!c) return; var o,m,g,i;
		if(_.xT(c)=="A") { for(i in c) f.Add(c[i],d,a); return; }
		o=f.Exists(d)||f.Sel; if(!o&&z.children.length) o=z.children[0];
		while(o) { m=_.xT(o.val); if(m!=="A"&&m!=="H") o=o.hd; else break; }
		if(o) {
			if(_.xT(c.k)) g=f.Exists(o,c.k); if(g&&a) return;
			if(!g) {
				if(m=="A") c.k=o.bs?o.bs.children.length:0;
				else if(!_.xT(c.k)) c.k=_.aS();
				if(!o.bs) o.bs=_.xM("ul",0,o,0,"TRB");
			}
		}
		if(!g) {
			g=_.xM("li",0,o?o.bs:z,0,"TRL"); g.hd=o; m=_.xM("div",0,g);
			g.ico=_.xM("div",0,m,["1em","1em"],"TRI"); g.ico.innerHTML="X";
			if(_.xT(c.k)) g.ke=_.xM("span",0,m,0,"TRM");
			_.xB(g,"key",function(){ return this._k; },function(v){ this._k=v; if(g.ke) g.ke.innerHTML=v; });
			if(o) g.key=c.k; g.txt=_.xM("div",0,m,0,"TRZ");
			_.xB(g,"clp",function() { return _.xW(g.bs,"clp","~"); },function(v){
				if(g.bs) { _.xW(g.bs,"clp",v); g.ico.innerHTML=v?"Y":"X"; }
			});
			g.xs=c.xs; _.xE(g.ico,"click",function() { g.clp=g.clp?0:1; });
			_.xE(g.txt,"click",iS.bind(this,g));
			if(g.ke) _.xE(g.ke,"click",iS.bind(this,g));
		}
		m=_.xT(c.v);
		if(!c.x&&(m=="A"||m=="H")) { c.x=[]; for(i in c.v) c.x.push({ v:c.v[i],k:i }); c.v=(m=="A"?[]:{}); }
		if(c.i||f.ahi) {
			if(!c.i) c.i=(f.ahi[m=="A"?0:(m=="H"?1:2)]||"").replace(/\*/,'img/');
			if(!g.cic) {
				g.cic=_.xM("img",0,g.ico.parentNode,0,0,g.ico);
				_.xE(g.cic,"click",iS.bind(this,g));
			}
			g.cic.src=c.i;
		}
		g.dt=c.d; m={A:"[]",H:"{}"}[m]; g.txt.innerHTML=_.xT(c.c)?c.c:(m||c.v); g.val=c.v;
		if(c.x) { f.Add(c.x,g,a); if(g.bs&&!p.xsel&&!c.xsel) g.clp=1; }
		if(f.form) f.form.NS(); return g;
	}
	f.Path=function(o) {
		var s=""; if(!o) o=f.Sel||z.children[0];
		while(o) { s=o.key+(s==""?"":".")+s; o=o.hd; }
		return s;
	}
	f.Exists=function(o,k) {
		if(_.xT(o)=="S") {
			var i,q=o.split(/\./); o=z.children[0];
			for(i=0 ; o&&i<q.length ; i++) if(q[i]!=="") o=iA(o,q[i]);
		}
		return _.xT(k)?iA(o,k):o;
	}
	f.Select=function(k) { iS(f.Exists(k)); }
	f.CMP=function(a,b) { return (f.Path(a)==f.Path(b)); }
	f.ChangeKey=function(o,k,c) { o=f.Exists(o)||f.Sel; if(o&&o.hd) return iC(o,k,c); }
	f.Move=function(a,b,c,d) {
		a=f.Exists(a)||f.Sel; b=f.Exists(b)||f.Sel; if(!a||!b||f.CMP(a,b)||!a.hd) return 1;
		if(!b.hd) c=1; var t=[_.xT(a.hd.val),_.xT(c?b.val:b.hd.val)],w;
		if(c&&t[1]!=="A"&&t[1]!=="H") return 2;
		if(t[0]=="A") iB(a); else if(!d&&t[1]=="H"&&iA(c?b:b.hd,a.key)) return 3;
		if(c) if(!b.bs) iD(b,1); w=a.hd; a.hd=(c?b:b.hd); 
		if(t[1]=="A") { a.key=c?b.bs.children.length:b.key; if(!c) iB(b,1); }
		else iC(a,t[0]=="A"?_.aS():a.key,d);
		if(c) b.bs.appendChild(a); else b.hd.bs.insertBefore(a,b);
		if(!w.bs.children.length) iD(w); if(f.form) f.form.NS();
	}
	f.Del=function(o,c) {
		o=f.Exists(o)||f.Sel; if(!o) return;
		if(o.bs&&c) { var i,a=o.bs.children; while(a.length) f.Move(a[0],o,0,1); }
		if(o.hd&&_.xT(o.hd.val)=="A") iB(o);
		if(o.hd&&o.hd.bs.children.length==1) iD(o.hd); else _.xX(o);
		if(f.Sel&&!f.Sel.parentNode) f.Sel=null; if(f.form) f.form.NS();
	}
	f.Clean=function(o) {
		o=f.Exists(o)||f.Sel; if(!o||!o.bs) return;
		var i,x=o.bs.children; for(i=0 ; i<x.length ; i++) f.Del(x[i]);
	}
	f.Val=function(v) { if(!v) return iE(); f.Del(""); f.Add({v:v}); }
	f.Add(p.src);
	
	function iA(o,q) {
		var t=_.xT(o.val),a,j; if((t!=="A"&&t!=="H")||!o.bs) return;
		a=o.bs.children;
		if(t=="A") return a[(q*1)];
		else for(j=0 ; j<a.length ; j++) if(a[j].key==q) return a[j];
	}
	function iB(a,d) { while(a) { a.key+=(d?1:-1); a=a.nextSibling; } }
	function iC(o,k,c) { while(iA(o.hd,k)) if(c) k=_.aS(); else return 1; o.key=k; }
	function iD(o,d) {
		if(d) { o.bs=_.xM("ul","",o,0,"TRB"); o.clp=1; }
		else { o.clp=0; _.xX(o.bs); delete o.bs; }
	}
	function iE(o) {
		if(!o) o=z.children[0]; if(!o) return;
		var v,s,t=_.xT(o.val),i;
		if(o.bs) {
			s=o.bs.children;
			for(i=0 ; i<s.length ; i++)
				if(t=="A") { if(!v) v=[]; v.push(iE(s[i])); }
				else { if(!v) v={}; v[s[i].key]=iE(s[i]); }
			return v;
		}
		return o.val;
	}
	function iS(o) {
		if(f.xs) return;
		if(f.Sel) { _.xW(f.Sel,"sel"); if(o&&f.CMP(f.Sel,o)) o=f.Sel=null; }
		if(!o||o.xs) return; f.Sel=o; _.xW(o,"sel",1); if(p.chng) p.chng(f);
	}
}
_.RQ--; })();