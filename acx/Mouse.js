(function(){ var _=EF;
_.Base.Add([
	'[drg]{ cursor:all-scroll; }',
	'[rsx]{ position:relative; }',
	'[rx]{ position:absolute; font-family:"EF-SDK"; font-size:8px; }',
	'[rx="1"]{ cursor:se-resize; right:0px; bottom:0px; }',
	'[rx="2"]{ cursor:sw-resize; left:0px; bottom:0px; }',
	'[rx="3"]{ cursor:ne-resize; right:0px; top:0px; }',
	'[rx="4"]{ cursor:nw-resize; left:0px; top:0px; }',
	'[rx="1"]::after{ content:"Z"; }',
	'[rx="2"]::after{ content:"d"; }',
	'[rx="3"]::after{ content:"e"; }',
	'[rx="4"]::after{ content:"f"; }'
]);
_.mC=function(h,f,b){
	if(!b) b=0; h.mh=[0,0,0];
	_.mT(h,function(e) { if(b&2) e.preventDefault(); h.mh[0]=Date.now(); });
	_.mE(h,function(e) {
		if(b&2) e.preventDefault();
		if((b&1)&&(!e.target||e.target.id!==h.id)) return;
		if(h.mh[0]+600<Date.now()) { if(h.mh[2]) clearTimeout(h.mh[2]); return iA(e,1); }
		h.mh[1]++; if(h.mh[2]) { clearTimeout(h.mh[2]); h.mh[2]=0; }
		h.mh[2]=setTimeout(iA,220,e);
	});
	function iA(e,a) { f(e,a?0:h.mh[1]); h.mh=[0,0,0]; }
}
_.mD=function(e,t){
	_.xB(t||e,"drg",_.xW.bind(this,e,"drg","~"),_.xW.bind(this,e,"drg")); if(!t) t=e;
	_.mT(e,function(f){
		if(!_.xW(e,"drg","~")) return; f.preventDefault();
		uA(e,t); _.mM(e.dvp[0],function(g){
			g.preventDefault(); var o=_.mP(g),v=uB(e.dvp[2],o);
			if(v) _.xP(t,{l:e.dvp[1].l+v[0],t:e.dvp[1].t+v[1],p:e.dvp[1].p});
			else e.dvp[2]=o;
		});
	});
}
_.mE=function(h,c) { _.xE(h,["mouseup","touchend","mouseout","touchcancel"],c); }
_.mM=function(h,c) { _.xE(h,["mousemove","touchmove"],c); }
_.mP=function(e) {
	var g=e.target,z=e.changedTouches,b; if(z) b=g.getBoundingClientRect();
	return z?[z[0].pageX-b.x,z[0].pageY-b.y]:[e.layerX-g.offsetLeft,e.layerY-g.offsetTop];
}
_.mR=function(e,z) {
	_.xB(e,"rsx",function(){ return e.rx[0]; },function(v) {
		if(!e.rx) e.rx=[v,0,0,0,0];
		for(var i=1 ; i<5 ; i++) {
			if(i<=v) { if(!e.rx[i]) e.rx[i]=iA(i); }
			else { _.xX(e.rx[i]); e.rx[i]=0; }
		}
	});
	e.rsx=z||0;
	function iA(x) {
		var f=_.xM("div",0,e); _.xW(f,"rx",x);
		_.mT(f,function(h){
			h.preventDefault(); uA(f,e); _.mM(f.dvp[0],function(g){
				g.preventDefault(); var o=_.mP(g),v=uB(f.dvp[2],o);
				if(v) {
					_.xP(e,{l:f.dvp[1].l+v[0]*((x%2)^1),t:f.dvp[1].t+v[1]*(x<3?0:1),p:f.dvp[1].p});
					_.xS(e,f.dvp[1].w+v[0]*(x%2?1:-1),f.dvp[1].h+v[1]*(x<3?1:-1));
				}
				else f.dvp[2]=o;
			});
		});
		return f;
	}
}
_.mT=function(h,c) { _.xE(h,["mousedown","touchstart"],c); }

function uA(e,a) {
	e.dvp=[_.xM("div",0,document.body,["100%","100%"],{zIndex:1000000}),_.xV(a),0];
	if(e.dvp[1].p=="x") e.dvp[1].p="r"; _.xP(e.dvp[0],{p:"f",l:0,t:0});
	_.mE(e.dvp[0],function(){ _.xX(e.dvp[0]); delete e.dvp; });
}
function uB(a,b) { return b&&a?[b[0]-a[0],b[1]-a[1]]:null; }
_.RQ--; })();