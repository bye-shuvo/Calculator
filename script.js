const click = new Audio("click-47609.mp3");

let show = "";

let buttonpress = () =>{
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click' , (e) => {
            click.play();
            if(e.target.innerHTML == '='){
                show = eval(show);
                document.querySelector('.top').innerText = show ;
                document.querySelector('#display').innerText = show;
            }
            else{
            show = show + e.target.innerHTML;
            document.querySelector('.top').innerText = show ;
            }
        })
    })
}

buttonpress();
 
let ac = () =>{
    click.play();
    document.querySelector("#ac").addEventListener('click', () => {
        document.querySelector(".top").innerHTML = "";
        show = "";
        document.querySelector('#display').innerText = show;
    })
}

ac();

let ans = () => {
    document.querySelectorAll('.opitem')[0].addEventListener('click' ,() => {
        document.querySelector('.top').innerText = show;
        document.querySelector('#display').innerText = show;
    })
}

ans();