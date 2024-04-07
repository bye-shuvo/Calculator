const click = new Audio("");

let n = document.querySelectorAll(".numitem")[0].innerText;
n = Number.parseInt(n);

let sign = document.querySelectorAll(".opitem")[2].innerText;
sign = Number.parseInt(sign);

let buttonpress = () =>{

    let nine = document.querySelector("#nine");
    nine.addEventListener('click', () => {
        document.querySelector(".top").append("9");
    })
    let eight = document.querySelector("#eight");
    eight.addEventListener('click', () => {
        document.querySelector(".top").append("8");
        return 9;
    })
    let seven = document.querySelector("#seven");
    seven.addEventListener('click', () => {
        document.querySelector(".top").append("7");
    })
    let  six = document.querySelector("#six");
    six.addEventListener('click', () => {
        document.querySelector(".top").append("6");
    })
    let five= document.querySelector("#five");
    five.addEventListener('click', () => {
        document.querySelector(".top").append("5");
    })
    let four = document.querySelector("#four");
    four.addEventListener('click', () => {
        document.querySelector(".top").append("4");
    })
    let three = document.querySelector("#three");
    three.addEventListener('click', () => {
        document.querySelector(".top").append("3");
    })
    let two = document.querySelector("#two");
    two.addEventListener('click', () => {
        document.querySelector(".top").append("2");
    })
    let one = document.querySelector("#one");
    one.addEventListener('click', () => {
        document.querySelector(".top").append("1");
    })
    let zero = document.querySelector("#zero");
    zero.addEventListener('click', () => {
        document.querySelector(".top").append("0");
    })
    let dot = document.querySelector("#dot");
    dot.addEventListener('click', () => {
        document.querySelector(".top").append(".");
    })
}

let optionpress = () => {
    document.getElementsByClassName('opitem')[2].addEventListener('click',() => {
        document.querySelector(".top").append("+");
    })
    document.getElementsByClassName('opitem')[3].addEventListener('click',() => {
        document.querySelector(".top").append("-");
    })
    document.getElementsByClassName('opitem')[4].addEventListener('click',() => {
        document.querySelector(".top").append("×");
    })
    document.getElementsByClassName('opitem')[5].addEventListener('click',() => {
        document.querySelector(".top").append("/");
    })
}
 
let ac = () =>{
    document.querySelector("#ac").addEventListener('click', () => {
        document.querySelector(".top").innerText = "";
    })
}

let calculation = () => {
     document.querySelectorAll(".opitem")[6].addEventListener('click', () => {
        let cal = n + sign + n;
        document.getElementsByClassName("top")[0].append(cal);
     })
}
calculation();
optionpress();
buttonpress();
ac();