(function(){ var _=EF;
_.SVG=function(F){
    var O=this,M=Math,V=M.V2,C=_.Color,I={},E=F.svg; O.ctrl=F;
    O.arcWH=function(p,w,h,s,e) {
	    let rx=w/2,ry=h/2,sf=0,c=p.add(V(rx,ry),1),beg=c.rotE(rx,ry,M.d2r(s),1),end=c.rotE(rx,ry,M.d2r(s+e),1);
	    return "M"+beg.fix(4)+"A"+V(rx,ry).fix(4)+",0,"+(e>0.5?1:0)+",0,"+end.fix(4);
    };
    O.thinArrow=function(l,h,w) {
        let v=h.sub(l,1).nor(),n=v.nml().nor(),c=h.sub(v.mul(w/2,1),1);
        return "M"+l.fix(4)+"L"+h.fix(4)+"L"+c.add(n.mul(w/2,1),1).fix(4)+"L"+c.sub(n.mul(w/2,1),1).fix(4)+"L"+h.fix(4);
    };
    O.star=function(c,e,b,q,r){
        if(!q) q=5; r=r?M.d2r(r):0; var v,d="M"+c.add(V(e,0),1).rot(c,r).fix(4);
        for(v=0 ; v<q ; v++) {
            d+="L"+c.add(V(b,0),1).rot(c,M.d2r((v+0.5)/q)+r).fix(4);
            d+=v<(q-1)?"L"+c.add(V(e,0),1).rot(c,M.d2r((v+1)/q)+r).fix(4):"Z";
        }
        return d;
    };
    O.neon=function(d,c,w,l,n){
        // d = path (string or array of [command,point|value])
        // c = color (EF.Color)
        // w = Width of neon strip (light)
        // l = light decay width (the total width of the path)
        // n = gradient count
        
        var i,z=l-w,g={ tp:'*g',atr:{
            stroke:c.css(),fill:'none',"stroke-linecap":"round",
            "stroke-linejoin":"round"
        },chl:[] };
        n=z/n;
        for(i=0 ; i<=z ; i+=n) g.chl.push({ tp:'*path',atr:{
            d:d,"stroke-width":(l-i).toFixed(4),
            "stroke-opacity":0.25+0.75*(1-M.pow(i/z,2))
        } });
        return g;
    };
    O.dragIt=function(c,e,p,g){
        if(c==1) {
            if(I.opr) return; I.opr="drag";
            I.beg=p; I.elm=e; I.tr=_.xA(e,"transform","~")||"";
        }
        else if(c==2) {
            if(I.opr!=="drag") return;
            _.xA(I.elm,"transform",I.tr+" translate("+(g?p.grid(g,1):p).sub(I.beg,1)+")");
        }
        else if(!c) {
            if(I.opr!=="drag") return;
            delete I.opr; delete I.beg; delete I.elm; delete I.tr;
        }
    };
};
})();