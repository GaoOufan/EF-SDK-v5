EF.Base.Add([
	'.TTP{ opacity:0; transition:opacity 1s; position:absolute; display:inline-block; z-index:999996; padding:4px; }',
	'.TTP[alr]{ left:4em; }'
]);
EF.TTP=function(p) {
	var _=EF,u,r=_.xI(p.r);
	if(p.alr) { if(!r.tta) { r.tta=iA(); _.xW(r.tta,"alr",1); setTimeout(iC,p.end||3000,"tta"); } }
	else {
		_.xE(r,"mouseenter",iD); _.xE(r,"mouseover",iD);
		_.xE(r,"mouseleave",iC.bind(this,"ttp"));
	}
	function iA(e) {
		var g=_.xM("div",p.id,e?document.body:r.parentNode,p.d||[200],"TTP",e?u:r);
		if(e) _.xP(g,{ l:e.pageX,t:e.pageY });
		g.innerHTML=p.txt; _.xC(g,{opacity:1,display:""}); return g;
	}
	function iB(e) { _.xX(r[e]); delete r[e]; }
	function iC(e) { if(r[e]) { r[e].style.opacity=0; setTimeout(iB,1000,e); } }
	function iD(e) { if(!r.ttp) r.ttp=iA(e); setTimeout(iC,p.end||1000,"ttp"); }
}
EF.RQ--;