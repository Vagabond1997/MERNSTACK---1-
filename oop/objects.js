

function Person(id=0, name="", address="") {
this.id=id,
this.name=name,
this.address=address


}

function CalculatorV2(num1=0, num2=0) {
	this.num1=0;
	this.num2=num2;
	this.num3=0;
	
	Object.defineProperties(this, {
		"firstNo": {
			get:function () {
				return this.num1;
			},
			set:function (value) {
				this.num1 = value;
			}
		
	},
	
	
		"secondNo": {
			get:function () {
				return this.num2;
			},
			set:function (value) {
				this.num2 = value;
			}
		
	},
	
	
		"thirdNo": {
			get:function () {
				return this.num3;
			}
		}
	
	}
		
	)};