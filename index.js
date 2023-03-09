/* let Choice = parseInt (prompt('pick a number, any number'));

let Choice2 = parseInt (prompt('one more time'))
  

if (Choice > Choice2) {
    alert('the larger number between ' + Choice + ' and ' + Choice2 + ' is ' + Choice);
    alert();
} else if (Choice2 > Choice) {
    alert('the larger number between ' + Choice + ' and ' + Choice2 + ' is ' + Choice2);
} else {
    alert('Both ' + Choice + ' and ' + Choice + ' are ' + ' equal ')
} */

/* Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is - */

/*let x = parseInt(prompt('Pick a Number'))
let y = parseInt(prompt('Pick another Number'))
let z = parseInt(prompt('Last one I promise'))
let product = x * y * z

if (product > 0) {
    alert("The sign is +")
} else if (product < 0) {
    alert("The sign is -")
} else {
    alert("The product is 0")
} 


Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */


/* let x = parseInt(prompt('Pick a Number'))
let y = parseInt(prompt('Pick another Number'))
let z = parseInt(prompt('Last one I promise'))

if (x>y && x>z) {
  if (y>z) {
     alert(x + "," + y + "," + z);
} else {
    alert(x + "," + z + "," + y);
}
} else if (y>x && y>z) {
   if(x>z) {
   alert(y+ "," + x + "," + z);
} else {alert(y+ "," + z + "," + x);
}

} else if (z>x && z>y)
{
    if (x>y)
    { alert(z+ "," + x + "," + y);
} else {
    alert(z+ "," + y + "," + x);
}
} */

let choice= parseInt(prompt('Pick a number'))
let choice2= parseInt(prompt('Pick another number'))
let choice3= parseInt(prompt('Pick a final number'))

if(choice>choice2 && choice>choice3) {
    if(choice2>choice3){
        alert(choice + ',' + choice2 + ',' + choice3);
    } else {
        alert(choice + ',' + choice3 + ',' +choice);
    } 
}
    else if (choice2>choice && choice2>choice3) {
        if(choice>choice3) {
        alert(choice2 + ',' + choice1 + ',' + choice3);
    } else {
        alert(choice2 + ',' + choice3 + ',' + choice1);
    } 
}
    else if (choice3>choice && choice3>choice2) {
            if(choice>choice2) {
                alert(choice3 + ',' + choice + ',' + choice2);
            } else {
                alert(choice3 + ',' + choice2 + ',' + choice1)
            }
        }
    

