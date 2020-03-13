CanvasRenderingContext2D.prototype.elec=function(V,C,W,E,s) {
	C.setHSL(C.HSL().h,1,0.5); var o=this; o.cO("L",1),i,h=C.HSL(),t,e;
	h=new EF.Color().setHSL(h.h,1,0.9); t=C.clone(); t.a=0;
	for(i=0 ; i<V.length-1 ; i++) {
		var Pa=V[i].clone(),Pb=V[i+1].clone(),Va=Pb.clone().sub(Pa),Vb=Va.nml().nor(),rp=[
			Vb.clone().mulS(-W/2-E).add(Pa),Vb.clone().mulS(W/2+E).add(Pa),
			Vb.clone().mulS(W/2+E).add(Pb),Vb.clone().mulS(-W/2-E).add(Pb)
		];
		e=(1-(W/(2*E+W)))/2; if(s) for(var j=0 ; j<4 ; j++) rp[j].add(s);
		o.fillStyle=o.pL(
			rp[0],rp[1],[0,t],[e,C],[e,h],
			[0.5,new EF.Color(1,1,1)],[1-e,h],[1-e,C],[1,t]
		);
		o.dD(rp,3);
	}
	o.cR();
}
EF.RQ--;