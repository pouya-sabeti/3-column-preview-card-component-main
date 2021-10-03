function kataStatus(betaKata){
    var a = false;
    var b = false;
    var c = false;
    var d = false;
    var sunV = 0;
  var sunR = 0;
    if(betaKata.issue != 0){  a = false; return "Beta Status:Waiting for issues to be resolved";} else{a= true}
    
      if(betaKata.vote.length < 5){ b = false; return "Beta Status:Testing & feedback needed";} else{ b = true; }
   if(betaKata.rank.length < 8){ c = false; return "Beta Status:Ranking feedback needed";} else{ c = true; }
    if(betaKata.example == false && betaKata.random == true){d = false; return "Beta Status:Example testcases needed";}
      if(betaKata.example == true && betaKata.random == false){d = false; return "Beta Status:Random testcases needed" ;}
    if(betaKata.example == false && betaKata.random == false){d = false; return "Beta Status:Example and random testcases needed";}
  if(betaKata.example == true && betaKata.random == true){d=true}
  if(a == true && b == true && c == true && d == true){
   for (let i = 0; i < betaKata.vote.length; i++) {
        sunV += betaKata.vote[i] ;
        
    }
    for (let i = 0; i < betaKata.rank.length; i++) {
        sunR += betaKata.rank[i] ;
      
    }
    sunR = Math.round(sunR / betaKata.rank.length); 
    return "Kata approved. vote scores:"+sunV+", rank:"+sunR+"kyu";
  }
  }

   