(function(){ var _=EF;
_.CTRL.BTN=function(f,p) {
	f.classList.add("PNT");
	var b=["img","clk","txt"],k; if(!p.img) p.img=[]; if(_.xT(p.img)!=="A") p.img=[p.img];
	_.xB(f,"txt",function(){return f.innerText;},function(v){f.innerText=v;});
	_.xE(f,"click",function(e){ if(!f.rdo&&f.clk) f.clk(e); });
	for(k in b) f[b[k]]=p[b[k]]; if(!p.clk&&!p.upk) f.rdo=1;
	f.CI=function(v,i) { if(!_.xT(i)) f.img.push(v); else f.img[i]=v; iA(); }
	f.XI=function(i) { if(!_.xT(i)&&f.img.length) f.img.pop(); else f.img.splice(i,1); iA(); }
	function iA() {
		var i,a=[]; for(i in f.img) a.push('url("'+f.img[i]+'")');
		f.style.backgroundImage=a.join(',');
	}
}
_.RQ--; })();