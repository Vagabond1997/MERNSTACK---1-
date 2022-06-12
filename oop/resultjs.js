//global variable  
const PM = 40;
// in the below function we are receiving value  as a parameter.
var process1 = function(sid,sub1,sub2,sub3){
  var total = sub1+sub2+sub3;
  var avg = total/3;
  var result ="FAIL";
  if(sub1>=PM && sub2>=PM && sub3>=PM){
      result="PASS";
  }
  obj1 = { 
      total:total,
      avg:avg,
      result:result,
  };
  return obj1;
}
// in the below function we are receiving object as a parameter.
var process2 = function(obj1){
   var total = obj1.sub1+obj1.sub2+obj1.sub3;
   var avg = total/3;
   var result ="FAIL";
   if(obj1.sub1>=PM && obj1.sub2>=PM && obj1.sub3>=PM){
       result="PASS";
   };
    obj1.total=total;
    obj1.average=avg;
    obj1.result=result;
    //obj1.total = total;
    //obj1.average = avg;
    //obj1.result = result;
   return obj1;
}

