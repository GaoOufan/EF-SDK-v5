EF.ML=function(v) {
	var _=EF,o=this; o.W=v;
	o.toString=function() {
		if(_.DB) return _.DB.ML(o.W); // this function shall bring Promise before the actual response.
		// Yet better: Files processed in the server shall be downloaded "clean"
		var t=_.xT(o.W),n,k,i; if(t=="S") return o.W; if(o.W[_.Lang]) return o.W[_.Lang];
		n=_.Lang.split(/\-/g); k=Object.keys(o.W); i=k.indexOf(n[0]); return o.W[k[i>-1?i:0]]||"";
	}
}
EF.RQ--;