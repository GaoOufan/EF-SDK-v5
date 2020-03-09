(function(){ var _=EF;
_.Use("acx/EFON");
_.CTRL.FLU=function(f,p) {
	f.className="CON"; 
	var g,a={mul:"multiple",rdo:"readonly",ext:"accept"};
	if(p.lbl) { f.lbl=_.xM("div",0,f,0,{flex:"auto"}); f.lbl.innerText=p.lbl; }
	f.flu=g=_.xM("input",0,f,[p.w],{flex:"initial"}); g.type="file"; g.className="PNT"; 
	g.ondrop=function(e) {
		if(f.rdo) return;
		e.preventDefault(); g.files=e.dataTransfer.files;
		if(p.run) g.Blob({ p:p.run.p,onl:p.run.f,go:p.run.go });
	}
	g.ondragover=function(e) { if(f.rdo) return; e.preventDefault(); }
	for(var i in a) { _.xB(f,i,_.xW.bind(this,g,a[i],"~"),_.xW.bind(this,g,a[i])); f[i]=p[i]; }
	
	f.Res=function(d) { return atob(d.substr(d.indexOf('base64,')+7)); }
	f.EFON=function(k) { return _.ON(_.a6.D(f.ftp[k].substr(f.ftp[k].indexOf('base64,')+7)),'-'); }
	f.Val=function(v) { if(!v) return f.ftp; f.ftp=v; }
	_.xE(g,"change",function(){ if(!f.rdo) { if(g.files.length) f.ftp={}; iA(0); } });
	
	function iA(i) {
		var s=g.files[i].name,q=f.ftp[s]=new FileReader();
		q.onloadstart=p.go; q.onerror=iA.bind(this,i);
		q.onload=function() {
			f.ftp[s]=q.result; if(p.dec&&!p.bin) f.ftp[s]=f.Res(f.ftp[s]); if(p.dec=="E") f.ftp[s]=_.ON(f.ftp[s],'-');
			if(i<g.files.length-1) iA(i+1);
			else { if(p.onl) p.onl(f); if(f.form) f.form.NS(); }
		};
		f.ftp[s]["readAs"+(p.bin?"ArrayBuffer":"DataURL")](g.files[i]);
	}
}
_.RQ--; })();