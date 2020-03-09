(function(){ var _=EF;
_.Base.Add([
	'.RBX{ z-index:999999; display:flex; flex-direction:column; }',
	'.RBN{ width:0px; opacity:0; transition:width 1s, opacity 1s; flex:auto; display:flex; flex-direction:column; }',
	'.RBN[open]{ width:200px; opacity:1; }',
	'.RBC{ flex:initial; width:50%; font-size:2em; text-align:center; position:relative; left:25%; }',
	'.RBN ul{ display:block; list-style-type:none; }',
	'.RBN ul ul{ padding-left:8px; }',
	'.RBN > ul{ width:calc(100% - 2em); padding:0; flex:auto; overflow-y:auto; }',
	'.RBN li > div{ padding:2px; min-height:calc(1em + 4px); }'
]);
_.RIB=function(p){
	if(!p) p={};
	var f=_.xM("div",0,document.body,[0,"100vh"],"RBX"),g,h; _.xP(f,{l:scrollX,t:scrollY}); _.Rib=f;
	_.CTR({c:"SBT",r:f,txt:"U",clk:iA.bind(this,1),s:{flex:"initial"}});
	_.SE.Add(f);
	//_.SE.Add(function(x,y){ _.xP(f,{l:x,t:y}); });
	f.rib=_.xM("div",0,f,0,"RBN"); _.xP(f,{l:0,t:0});
	_.xE(f.rib,["click","mouseleave"],iA.bind(this,0));
	g=_.xM("div",0,f.rib,0,"RBC");
	if(p.tim&&p.tim!==1) for(var i=0 ; i<4 ; i++) {
		h=_.xM("img",0,g,["100%"],{ zIndex:i+1 });
		_.xP(h,{l:0,p:(i?"":"r")}); h.src=p.tim.replace(/\#/,i).replace(/\*/,"img/");
	}
	f.Bar=_.xM("ul",0,f.rib);
	f.Col=function(q,m,a) {
		if(m&&!m.bx) m.bx=_.xM("ul",0,m);
		var w=_.xM("li",'',m?m.bx:f.Bar); w.txt=_.xM("div",0,w);
		w.txt.innerText=q.tit; w.pnt=m; _.xW(w,"err",a);
		_.xE(w.txt,"click",q.Focus.bind(this,1),1); return w;
	}
	f.XCol=function(q) { _.xX(q&&q.pnt&&!q.pnt.bx.children.length?q.pnt.bx:q); }
	if(p.tim) setInterval(function() {
		h=new Date(); if(p.tim==1) return g.innerHTML=h.toTimeString().substr(0,8);
		h=[h.getHours(),h.getMinutes(),h.getSeconds()];
		g.children[2].style.transform='rotate('+((h[0]%12)*30+(h[1]/2))+'deg)';
		for(var i=0 ; i<2 ; i++) g.children[i*2+1].style.transform='rotate('+(h[i+1]*6)+'deg)';
	},1000);
	if(p.ok) p.ok();
	
	function iA(c) { _.xW(f.rib,"open",c,c); }
}
_.RQ--; })();