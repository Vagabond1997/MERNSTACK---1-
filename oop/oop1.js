/*
var Person = function(pid=-1,name="NA",address="NA"){
  //pid=0;   // class vitra define vayeko varirable lai instance variable vaninxa
  this.pid=pid;
  this.name=name;
  this.address=address;

};

*/


 var Calculator = function(num1=0,num2=0) {
	 this.num1=num1;
	 this.num2=num2;
	 this.num3=0;
	 this.opr=null;
	 
	  this.calculate = function(opr) {
		  if(opr=='+')
		 this.num3=this.num1+this.num2;
	 else if(opr==='-')
		 this.num3=this.num1-this.num2;
	  else if(opr==='*')
		 this.num3=this.num1*this.num2;
	  else if(opr==='/')
		 this.num3=this.num1/this.num2;
	  else if(opr==='%')
		 this.num3=this.num1%this.num2;
	  else if(opr==='pow')
		 this.num3=this.num1**this.num2;
	 else if(opr==='sqrt')
		 this.num3=Math.sqrt(this.num1);
	 else 
		 this.num3="NA";
		 
	 }
	
 }
 
 var CalculatorV2 = function(num1=0,num2=0) {
	 this.num1=num1;
	 this.num2=num2;
	 this.num3=0;
	 
	 
	 // setting individual values etter 
	 //set1 is a reference in parameter we pass num1 and the value set to num1 in mathi ko paramter
	 this.setNum1=function(num1) {
		 this.num1=num1;
		 
	 }
	 
	 this.setNum2=function(num2) {
		 this.num2=num2;
	 }
	 
	 this.opr=null;
	 
	 
	 
	  this.calculate = function(opr) {
		  if(opr=='+')
		 this.num3=this.num1+this.num2;
	 else if(opr==='-')
		 this.num3=this.num1-this.num2;
	  else if(opr==='*')
		 this.num3=this.num1*this.num2;
	  else if(opr==='/')
		 this.num3=this.num1/this.num2;
	  else if(opr==='%')
		 this.num3=this.num1%this.num2;
	  else if(opr==='pow')
		 this.num3=this.num1**this.num2;
	 else if(opr==='sqrt')
		 this.num3=Math.sqrt(this.num1);
	 else 
		 this.num3="NA";
		 
	 }
 
  //this.to string reference used as a anonymous function 
	 this.toString=function() {
		var  str1 = "<h2>Num1 :"+this.num1+"</h2>";
		str1 = str1+"<h2>Num2 :"+this.num2+"</h2>";
		 return(str1);
	 }
 
 }