/**
 * Created by LEONARDO TI on 05/04/2017.
 */
console.log("hello from external script");
var age = prompt('How old are you?');
var ageParser = parseInt(age);



switch (true){
    case (ageParser >= 18):
        console.log("You are authorized switch");
    break;
    case (ageParser < 18):
        console.log("You are not authorized switch");
    break;
    default:
        console.log("default function");
    break;
}

