(function(){
var _=EF; _.DB=new EFDB();
function EFDB(){
    var DB=this; DB.FTL={};
    DB.cmd=function(cod,pmt,frm,cbk){ _.sm({
        p:_.root+"/cgi-bin/cmd.cgi",
        bin:1,frm:frm,pmt:{C:cod,P:pmt},ok:function(x){
            if(_.aT(x)=="A")
                if(x.length==3&&x[0]=="$fldErr$") frm.$fctrl[x[1]].err(x[2]);
                else if(x[0]=="$RL$") { } # Relogin marker!
            if(cbk) cbk(x);
        }
    }); };
    DB.frm=function(id,bh,dt,v) {
        if(!bh) bh={};
        if(!DB.FTL[id]) return DB.cmd("Ib7tfg5",{I:id},bh.atc,function(x){
            if(x.fnc) for(let j in x.fnc) x.fnc[j]=new Function(...x.fnc[j]);
            DB.FTL[id]=rsv(x); DB.frm(id,dt,bh,v);
        });
        let i,f=_.frm(_.aM(bh,DB.FTL[id]));
        for(i in bh.ctc) _.aM(f.$fctrl[i],bh.ctc[i]); f.val=dt||{}; return f;
    };

    function rsv(x,m) {
        let i,t; if(!m) m=x; for(i in x) {
            if(x===m&&i=="fnc") continue; t=_.aT(x[i]);
            if(t=="H"||t=="A") rsv(x[i],m);
            else if(t=="Z"&&x[i].c=='F') x[i]=m.fnc[x[i].d[0]].bind(null,...x[i].d[1]);
        }
        return x;
    }
}
})();