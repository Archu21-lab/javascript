  //WAP TO DISPLAY MESSAGE ON THE GRADE USING SWITCH CASE. 
   //let grade= 'H';

   //switch (grade){
     //   case 'a': case 'A': console.log("Excellent");
       // break;

        //case 'b' : case 'B': console.log("good");
        //break;

        //case 'c' : case 'C' : console.log("do your best next time..!");
        //break;

        //default : console.log("Enter Valid grade..!")
  // }

  let unit=80;

  if(unit>1 && unit<20){
    console.log("unit=", unit*2);

  }else if (unit>40 && unit<21){
    console.log("unit=", unit*4);
  }else if(unit>60 && unit<41){
    console.log("unit=", unit*6)
  }else if (unit>80 && unit<61){
        console.log("unit=", unit*10)
  }