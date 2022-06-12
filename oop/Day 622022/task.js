function myfun(){
    var choice = Number(document.getElementById("choices").value);
    console.log(choice);
    switch(choice){
        case "Add Element": 
        var arr1 = new Array();
        document.getElementById arr1.concat(7);
        console.log(arr1);
                  break; 

        case "Remove Index":  document.write(arr1.splice(3,1));
                   break; 
        case "3":  
        break;

        default : alert("not a valid input");

    }
}   


