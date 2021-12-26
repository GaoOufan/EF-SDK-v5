(function(){ var _=EF;
_.MB=function(C) {
    var T=Math,M=this,O=C.ctx; M.ctrl=C;
    M.bct=function(d,p,c,s){
        if(!d) d=C.raw(); let k=[[p.x,p.y,(p.y*d.width+p.x)*4]],w,z,i,t=d.data,a;
        return _.Long(C,function(){
            if(!k.length) return 1;
            p=k.shift(); z=p[2]; if(!w) w=[t[z],t[z+1],t[z+2],t[z+3]];
		    a=4; for(i=0 ; i<4 ; i++)
	            if(i<3&&Math.abs(t[z+i]-w[i])>s) { a=0; break; }
	            else if(t[z+i]==c.$ef.val[i]) a--;
	        if(!a) return; for(i=0 ; i<4 ; i++) t[z+i]=c.$ef.val[i];
		    if(p[0]>0) k.push([p[0]-1,p[1],z-4]);
		    if(p[0]<d.width-1) k.push([p[0]+1,p[1],z+4]);
		    if(p[1]>0) k.push([p[0],p[1]-1,z-4*d.width]);
		    if(p[1]<d.height-1) k.push([p[0],p[1]+1,z+4*d.width]);
        },function(v) { M.pI(d); });
    };
    M.cO=function(v,k) {
	    if(k) O.save(); k={
		    O:'source-over',I:'source-in',U:'source-out',A:'source-atop',DO:'destination-over',
		    DI:'destination-in',DU:'destination-out',DA:'destination-atop',L:'lighter',C:'copy',
		    X:'xor',M:'multiply',V:'overlay',D:'color-dodge',B:'color-burn',
		    F:'soft-light',R:'difference',H:'hue',S:'saturation',N:'luminosity' };
	    if(k[v]) O.globalCompositeOperation=k[v];
    };
    M.dA=function(a,f,p,rx,ry,t,b,e,n) { if(a) O.beginPath(); O.ellipse(p.x,p.y,rx,ry,t||0,b||0,e||Math.PI*2,n); M.dX(f); };
    M.dD=function(v,f,a,b) {
        let n,i,c=[];
        for(i=0 ; i<v.length ; i++) {
            if(!i) M.dM(iA(v[i]),b);
            else if(v[i].join&&v[i][2]) {
                if(!v[++i][2]) M.dL(iA(v[i-2]),iA(v[i-1]));
                else if(!v[++i][2]) M.dL(iA(v[i-3]),iA(v[i-2]),iA(v[i-1]));
                i--;
            }
            else M.dL(iA(v[i]));
        }
        M.dX(f);
        function iA(z) { let w=z.join?Math.V2(z[0],z[1]):z; if(a) w=w.add(a,1); return w; }
    };
    M.dH=function(s,c,b,o) {
        var d=[O.getLineDash(),O.lineDashOffset,O.strokeStyle],j=o||0; O.setLineDash(s);
        for(var i in c) { O.lineDashOffset=j; M.pC(c[i]); b(); j+=s[i]; }
        O.setLineDash(d[0]); O.lineDashOffset=d[1]; M.pC(d[2]);
    };
    M.dL=function(p,a,b) {
	    if(b) O.bezierCurveTo(a.x,a.y,b.x,b.y,p.x,p.y);
	    else if(a) O.quadraticCurveTo(a.x,a.y,p.x,p.y);
	    else if(p) O.lineTo(p.x,p.y);
    };
    M.dM=function(p,t) { if(t) O.beginPath(); O.moveTo(p.x,p.y); };
    M.dR=function(p,s,a) {
	    O.beginPath(); if(!p) p=T.V2(); if(!s) s=T.V2(O.canvas.width,O.canvas.height);
	    O.rect(p.x,p.y,s.x,s.y); M.dX(a||1);
    };
    M.dT=function(t,p,b,f){
        t+=""; if(_.aT(b)=="V2") {
            p=p.add(b.sub(_.xN(t,O.font),1).div(2).floor(),1); b=undefined;
            
            console.log(p.x+","+p.y);
        }
        else if(!b) b=undefined;
        if(f) O.fillText(t,p.x,p.y,b); if(!f||f==2) O.strokeText(t,p.x,p.y,b);
    };
    M.dwl=function(n,t,q){ _.aD(O.canvas.Val(t,q),n,t=="J"?"jpg":"png"); };
    M.dX=function(c){ if(!c) c=0; if(c%3==2) O.closePath(); if(c%3) O.stroke(); if(c>2) O.fill(); };
    M.gI=function(p,s) {
	    if(!p) p=T.V2(0,0); if(!s) s=T.V2(O.canvas.width,O.canvas.height);
	    return O.getImageData(p.x,p.y,s.x,s.y);
    };
    M.pC=function(a,b) { if(a) O.strokeStyle=_.aT(a)=="C"?a.CSS():a; if(b) O.fillStyle=_.aT(b)=="C"?b.CSS():b; };
    M.pI=function(d,p) { if(!p) p=T.V2(0,0); O.putImageData(d,p.x,p.y); };
    M.pL=function(){
	    var z=arguments,i,g=O.createLinearGradient(z[0].x,z[0].y,z[1].x,z[1].y);
	    for(i=2 ; i<z.length ; i++) g.addColorStop(z[i][0],_.aT(z[i][1])=="C"?z[i][1].CSS():z[i][1]);
	    return g;
    };
    M.pR=function(){
	    var z=arguments,i,g=O.createRadialGradient(z[0].x,z[0].y,z[1],z[2].x,z[2].y,z[3]);
	    for(i=4 ; i<z.length ; i++) g.addColorStop(z[i][0],_.aT(z[i][1])=="C"?z[i][1].CSS():z[i][1]);
	    return g;
    };
    M.xX=function(p,s) {
	    if(!p) p=T.V2(0,0); if(!s) s=T.V2(O.canvas.width,O.canvas.height);
	    O.clearRect(p.x,p.y,s.x,s.y);
    };
    M.rvmix=function(d,G) {
        if(!d) d=C.Raw(); var g=Math.V3(G.HSL()),y=0; G=Math.V3(G.V);
        return _.Long(C,function() {
            let i=0,t=d.data,P,T,m,c; while(y<t.length&&i++<100000) {
                P=_.Color([t[y],t[y+1],t[y+2]]); T=Math.V3(P.HSL()).sub(g);
                T=Math.clamp(Math.floor(Math.max(Math.abs(T.y),Math.abs(T.x)*255)),0,255);
                c=1-T/255; m=Math.V3(P.V).sub(G.mul(c,1)).div(1-c).floor().clamp(0,255);
	            t[y]=m.x; t[y+1]=m.y; t[y+2]=m.z; t[y+3]=T; y+=4;
            }
        },function(){ M.pI(d); });
    },
    M.neon=function(V,C,W,E,b,f,s) {
	    let hsl=C.HSL(),i;
	    O.save(); O.lineCap="round"; O.lineJoin="round";
	    for(i=E ; i>=0 ; i--) { M.pC(EF.Color({h:hsl[0],s:hsl[1],l:Math.floor(((E-i)/E)*hsl[2])})); O.lineWidth=i*2+W; M.dD(V,f||1,s,b); } // outer
	    for(i=W ; i>0 ; i-=2) { M.pC(EF.Color({h:hsl[0],s:hsl[1],l:Math.floor(((W-i)/W)*(255-hsl[2])+hsl[2])})); O.lineWidth=i; M.dD(V,f||1,s,b); } // inner
	    O.restore();
    }
};
})();