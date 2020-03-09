(function(){ var _=EF;
_.Use("ctrl/CVS");
_.CTRL.BTN=function(f,p) {
	f.className="PNT";
	var b=["img","rdo","clk","txt"],k; if(!p.img) p.img=[]; if(_.xT(p.img)!=="A") p.img=[p.img];
	_.xB(f,"rdo",1,function(v){_.xW(f,"rdo",v); iA();});
	_.xB(f,"txt",function(){return f.innerText;},function(v){f.innerText=v;});
	_.xE(f,"click",function(e){ if(!f.rdo&&f.clk) f.clk(e); });
	for(k in b) f[b[k]]=p[b[k]]; if(!p.clk&&!p.upk) f.rdo=1;
	f.CI=function(v,i) { if(!_.xT(i)) f.img.push(v); else f.img[i]=v; iA(); }
	f.XI=function(i) { if(!_.xT(i)&&f.img.length) f.img.pop(); else f.img.splice(i,1); iA(); }
	function iA() {
		f.imc=f.img.length; var i,a=new Array(f.imc),g;
		for(i in f.img) { g=_.xM("img"); g.load(f.img[i].replace(/\*/,'img/'),iB.bind(this,g,a,i)); }
	}
	function iB(g,a,x){
		var i,j,y; if(f.rdo) {
			y=_.CVS.ItoR(g); for(i=0 ; i<y.data.length ; i+=4) {
				j=Math.floor((y.data[i]+y.data[i+1]+y.data[i+2])/3);
				y.data[i]=y.data[i+1]=y.data[i+2]=j;
			}
		}
		a[x]='url('+(y?_.CVS.RtoI(y):g.src)+')'; f.imc--;
		if(!f.imc) f.style.backgroundImage=a.join(',');
	}
}
_.RQ--; })();