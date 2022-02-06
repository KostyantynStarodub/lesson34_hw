let a = document.getElementById("selector")
let paragraph = document.getElementById("par")
a.addEventListener("change", function(){
    let option = a.value
    if (option == "primo") {
        paragraph.innerHTML = `<div class="box">
                                    <img class="img1" src="./img/el_primo.png" alt="">
                                    <h1>Эль Примо</h1>
                                    <p>Эль Примо обрушивает на врагов град ударов. Его Супер, удар локтем в прыжке, наносит урон всем, кто оказался рядом!</p>
                                    <div class="ancher">
                                        <a href="">В бой!</a>
                                    </div>
                                </div>`
    } else if (option == "poko") {
        paragraph.innerHTML = `<div class="box">
                                    <img class="img1" src="./img/poko.png" alt="">
                                    <h1>Поко</h1>
                                    <p>Поко атакует врагов разрушительной звуковой волной. Его Супер исцеляет его самого и товарищей по команде!</p>
                                    <div class="ancher">
                                        <a href="">В бой!</a>
                                    </div>
                                </div>`
    } else if (option == "barley") {
        paragraph.innerHTML = `<div class="box">
                                    <img class="img1" src="./img/barley.png" alt="">
                                    <h1>Барли</h1>
                                    <p>Барли атакует, швыряя во врага бутылку; урон наносится брызгами. Его Супер — шквал бутылок, наполненных зажигательной смесью!</p>
                                    <div class="ancher">
                                        <a href="">В бой!</a>
                                    </div>
                                </div>`
    } else if (option == "rose") {
        paragraph.innerHTML = `<div class="box">
                                    <img class="img1" src="./img/rose.png" alt="">
                                    <h1>Роза</h1>
                                    <p>Эта боксёрша-ботаник крепко стоит на ногах и не боится ближнего боя! Супер оплетает её прочной и стопроцентно веганской бронёй.</p>
                                    <div class="ancher">
                                        <a href="">В бой!</a>
                                    </div>
                                </div>`
    } else {
        paragraph.innerHTML = ""
    }
})