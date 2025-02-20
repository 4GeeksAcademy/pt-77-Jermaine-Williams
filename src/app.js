import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
 
 
    const whoArray =["The dog", " My grandma", "The police", "My Cat"]
    const actionArray =["ate", "peed", "Ripped", "broke"]
    const whatArray =["my homework", "my card", "the remote"]
    const whenArray =["before the class", "when I was sleeping","while I was in the shower","during break","while I was praying"]

    let whoIndex = Math.floor(Math.random() * whoArray.length)
    let actionIndex = Math.floor(Math.random() * actionArray.length)
    let whatIndex = Math.floor(Math.random() * whatArray.length)
    let whenIndex = Math.floor(Math.random() * whenArray.length)

    const who = document.querySelector(".who")
    const action = document.querySelector(".action")
    const what = document.querySelector(".what")
    const when = document.querySelector(".when")

    who.innerHTML = whoArray[whoIndex]
    action.innerHTML = actionArray[actionIndex]
    what.innerHTML = whatArray[whatIndex]
    when.innerHTML = whenArray[whenIndex]


    console.log("Hello Rigo from the console!");

  }





