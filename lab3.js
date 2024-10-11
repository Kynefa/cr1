const output = document.getElementsByClassName('output')[0];

function content_load(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `
            <h1>Лабораторна робота №3</h1>
            <p style="padding:5px;">
                Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.

            </p>
            <p>
                Мета: 
⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок
⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX   
            </p>
            <h3>ЛР_3</h3>
            <a href ="https://github.com/Kynefa/proj1" target="_blank">репозиторій</a> і
            <a href ="http://127.0.0.1:5500/index.html" target="_blank">живий сайт</a>
            <h3>Звіт_html:</h3>
            <a href ="https://github.com/Kynefa/zvit" target="_blank">репозиторій</a> і
            <a href ="http://127.0.0.1:5501/index.html" target="_blank">живий сайт</a>
            `;
            break;
        case 'btn2':
            content = `

            
            `;
            break;
        case 'btn3':
            content = `
            
            `;
            break;
        case 'btn4':
            content = `<textarea rows="155" cols="100">
          &lt;!DOCTYPE html&gt;
&lt;html lang="ru"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Фіксована&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;table&gt;
        &lt;tr class="full-row"&gt;
            &lt;th colspan="3"&gt;1&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td class="oneAndThree"&gt;5&lt;/td&gt;
            &lt;td&gt;4&lt;/td&gt;
            &lt;td class="oneAndThree"&gt;2&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr class="full-row"&gt;
            &lt;td colspan="3"&gt;3&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;

&lt;/body&gt;
&lt;/html&gt;

<p>table {
    text-align: center;
    width: 1200px;
    height: 800px;
    border-collapse: collapse;
    border: 1px solid black;
}
th, td {
    border: 1px solid black;
    padding: 10px;
    font-size: 30px;
    border: 1px solid black;
}
.full-row {
    height: 100px;
    background-color: blue;
    text-align: left;
    color: white;
    border: 1px solid black;
}

.oneAndThree{
    background-color: yellow;
    color: black;
    width: 300px;
    border: 1px solid black;
}</p>
            </textarea> `;
            break;
case 'btn5':
            content = `<textarea rows="155" cols="100">
          <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Гумова</title>
    <link rel="stylesheet" href="style2.css">
</head>
<body>
    <table>
        <tr class="full-row top">
            <th colspan="3">1</th>
        </tr>
        <tr class="middle">
            <td class="col-1">5</td>
            <td class="col-2">4</td>
            <td class="col-3">2</td>
        </tr>
        <tr class="full-row bottom">
            <td colspan="3">3</td>
        </tr>
    </table>
</body>
</html>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    min-height: 100vh;
 
}

table {
    width: 100%;
    height: 100vh;
    max-width: 1200px; 
    min-width: 300px;  
    border-collapse: collapse;
    text-align: center;
    border: 1px solid black;
}

th, td {
    border: 1px solid black;
    padding: 10px;
    font-size: 30px;
    border: 1px solid black;
}

.full-row {
    background-color: #f0f0f0;

}

tr.top, tr.bottom {
    height: 10%;
    background-color: blue;
    font-size: 1.2em;
    color: white;
    text-align: left;
   
}

tr.middle {
    height: 80%;
    font-size: 1em;
    color: black;
    border: 1px solid black;
}

.col-1, .col-3 {
    width: 25%;
    background-color: yellow;
    border: 1px solid black;
}

.col-2 {
    width: 50%;
    border: 1px solid black;
}

@media (max-width: 600px) {
    th, td {
        font-size: 0.8em;
        padding: 5px;
    }

    .col-1, .col-3 {
        width: 30%;
    }

    .col-2 {
        width: 40%;
    }
}

@media (max-width: 400px) {
    th, td {
        font-size: 0.6em;
        padding: 5px;
    }

    .col-1, .col-3 {
        width: 35%;
    }

    .col-2 {
        width: 30%;
    }

    table {
        min-width: 250px;
    }
}
</textarea> `; break
        case 'btn6':
            content = `<textarea rows="155" cols="100">
           <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="width: 1000px; height: 750px;">
        <div style="width: 1000px; height: 100px; background-color: yellow; border: 1px solid black; display: flex; align-items: center;">
            <div style="width: 350px; height: 80px; background-color: rgb(255, 255, 255); margin-left: 100px; border: 1px solid black;"></div>
        </div>
        <div style="width: 1000px; height: 450px; display: flex;">
            <div style="width: 250px; height: 450px; background-color: rgb(25, 25, 182); border: 1px solid black;"></div>
            <div style="width: 750px; height: 450px; background-color: rgb(255, 255, 255); border: 1px solid black;  ">
                <div style="width: 550px; height: 50px; background-color: rgb(212, 63, 63); margin: 0 auto 20px; border: 1px solid black; margin-top: 10px;"></div>
                
                <div style="display: flex; justify-content: space-between;">
                    <div style="width: 250px; height: 300px; background-color: rgb(57, 16, 236); border: 1px solid black; margin-left: 100px;"></div>
                    <div style="width: 200px; height: 300px; background-color: rgb(172, 243, 178); border: 1px solid black;margin-right: 100px;"></div>
                </div>
            </div>
        </div>
        <div style="width: 1000px; height: 50px; background-color: yellow; border: 1px solid black;"></div>
    </div>
</body>
</html>
           
             </textarea> `;
            break;
        case 'btn7':
            content = `<textarea rows="155" cols="100">
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
            padding: 0;
        }
    </style>
</head>
<body>
    <div style="width:65%; min-height:600px; border: 1px solid black;">
        <div style="width: 100%; height: 100px; background-color: yellow; position: relative; border: 1px solid black;">
            <div style="width:40%; height: 80px; background-color: rgb(255, 255, 255); position: absolute; top: 50%; left: 0; transform: translateY(-50%); margin-left: 10px; border: 1px solid black;"></div>
        </div>
        <div style="width: 100%; height: 520px; display: flex; border: 1px solid black;">
            <div style="width: 40%; height: 520px; background-color: rgb(25, 25, 182); border: 1px solid black;"></div>
            <div style="width: 75%; height: 520px; background-color: rgb(255, 255, 255); display: flex; flex-direction: column; border: 1px solid black;">
                <div style="width: 90%; height: 50px; background-color: rgb(212, 63, 63); margin: 20px auto; border: 1px solid black;"></div>

                <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                    <div style="width: 45%; height: 385px; background-color: rgb(91, 56, 245); margin-left: 30px; border: 1px solid black;"></div>

                    <div style="width: 35%; height: 385px; background-color: rgb(172, 243, 178); margin-right: 30px; border: 1px solid black;"></div>
                </div>
            </div>
        </div>
        <div style="width: 100%; height: 100px; background-color: yellow; border: 1px solid black;"></div>
    </div>
</body>
</html>
             </textarea> `;
            break;
            case 'btn8':
                content =`<textarea rows="155" cols="100">
                   
                 </textarea> `;
                 case 'btn9':
                    content = `
                        <img src="img/Screenshot_2.png" alt="Скріншот" style="width:100%; height:auto;">
                    `;
                    break;
            case 'btn10':
            content = `<textarea rows="155" cols="100">
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css?v=1.0">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <nav class="navbar">
            <ul class="menu">
                <li><a href="#">Форми навчання</a></li>
                <li><a href="#">Заходи</a></li>
                <li><a href="#">Про академію</a></li>
                <li><a href="#">Контакти</a></li>
                <li class="dropdown long-menu-item">
                    <a href="#" id="city-button">Київ</a>
                    <div class="dropdown-content">
                        <a href="#" onclick="selectCity('Київ')">Київ</a>
                        <a href="#" onclick="selectCity('Одеса')">Одеса</a>
                        <a href="#" onclick="selectCity('Львів')">Львів</a>
                        <a href="#" onclick="selectCity('Харків')">Харків</a>
                        <a href="#" onclick="selectCity('Дніпро')">Дніпро</a>
                        <a href="#" onclick="selectCity('Запоріжжя')">Запоріжжя</a>
                        <a href="#" onclick="selectCity('Вінниця')">Вінниця</a>
                        <a href="#" onclick="selectCity('Полтава')">Полтава</a>
                        <a href="#" onclick="selectCity('Чернігів')">Чернігів</a>
                        <a href="#" onclick="selectCity('Херсон')">Херсон</a>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
    <div id="content">
        <div class="title-container">
            <h1 class="background-text">Для кого </h1>
            <h1 id="uptext">Для кого розроблена програма</h1>
        </div>
        <div class="up-blocks">
            <div class="block">
                <b>
                    <p style="text-align: center;">Школярі та випускники (15-18 років)</p>
                </b>
                <p>отримають першу професію, не відкладаючи на потім свою мрію стати програмістом</p>
                <div class="image-container">
                    <img src="img/Screenshot_1.png" alt="Фото" class="main-image">
                    <div class="image-shadow"></div>
                </div>
            </div>
            <div class="block">
                <b>
                    <div class="image-container">
                        <img src="img/Screenshot_2.png" alt="Фото" class="main-image">
                        <div class="image-shadow"></div>
                    </div>
                    <p style="text-align: center;">Студенти ВНЗ (18-23 роки) </p>
                </b>
                <p> освоять другу спеціальність паралельно з університетьською освітою.</p>
            </div>
            <div class="block">
                <b>
                    <p style="text-align: center;">Представники інших професій (23-55 років)</p>
                </b>
                <p>яких не влаштовує поточна кар'єрна і фінансова перспектива, зможуть перевчитися на розробника ПЗ і
                    отримати затребувану професію.</p>
                <div class="image-container">
                    <img src="img/Screenshot_3.png" alt="Фото" class="main-image">
                    <div class="image-shadow"></div>
                </div>
            </div>
            <div class="block">
                <b>
                    <div class="image-container">
                        <img src="img/Screenshot_4.png" alt="Фото" class="main-image">
                        <div class="image-shadow"></div>
                    </div>
                    <p style="text-align: center;">Всі бажаючі підвищити ІТ-кваліфікацію</p>
                </b>
                <p>систематизують свої знання</p> і отримають робочі навички, затребувані сучасному ІТ.
            </div>
        </div>
        <div class="midl-container">
            <h1 class="background-midltext">проходить навчання </h1>
            <h1 id="midltext">Як проходить навчання</h1>
        </div>
        <div class="img-box">
            <div class="image-container">
                <img src="img/Screenshot_5.png" alt="Фото" class="main-image">
                <div class="image-shadow"></div>
            </div>
            <div class="image-container">
                <img src="img/Screenshot_6.png" alt="Фото" class="main-image">
                <div class="image-shadow"></div>
            </div>
            <div class="image-container">
                <img src="img/Screenshot_7.png" alt="Фото" class="main-image">
                <div class="image-shadow"></div>
            </div>
        </div>
    </div>
    <div class="down-block">
        <div>
            <h1 style="text-align: center;">Партнери академії</h1>
        </div>
        <div class="down-fototext">
            <div class="image-last">
                <div class="image-last-back">
                    <img src="img/Screenshot_8.png" alt="Фото" />
                </div>
            </div>
            <div class="text-container">
                <h4>Luxoft</h4>
                <p><span class="blue-text">Luxoft</span> - глобальна технологічна компанія, одна із лідерів на ринку
                    послуг цифрової трансформації та створення програмних продуктів. Luxoft пропонує індивідуальні
                    ІТ-рішення, які заохочують до змін у бізнесах клієнтів в усьому світі. Luxoft об’єднує понад 1300
                    спеціалістів із 22 країн світу із штаб-квартирою у м. Цуг, Швейцарія. Україна є однією з
                    найпопулярніших локацій в географії Luxoft. Близько 3500 фахівців усіх ключових напрямків
                    зосереджені в офісах Києва, Одеси і Дніпра.</p>
            </div>
        </div>
    </div>
</body>

</html>
               </textarea> `;
            break;
            case 'btn11':
            content = `<textarea rows="155" cols="100">
               font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    margin-left: 150px;
    margin-right: 150px;
}

.menu {
    display: flex;
    align-items: stretch;
    list-style-type: none;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
    row-gap: 10px;
    padding-left: 20px;
    padding-right: 20px;
}

.menu li {
    background-color: #000;
    vertical-align: middle;
}

.long-menu-item a {
    width: 300px;
    text-align: center;
}

.menu a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    display: block;
    transition: background-color 0.3s;
}

.dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #000;
    min-width: 160px;
    z-index: 100;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.menu a:hover {
    background-color: #444;
}

.title-container {
    text-align: center;
    height: 70px;
}

#uptext {
    transform: matrix(1, 0, 0, 1, 0, -80);
    margin-top: 0;
}

.background-text {
    padding-top: 0;
    margin-top: 0;
    font-size: 60px;
    color: rgba(255, 255, 255, 0.568);
    user-select: none;
}

.midl-container {
    text-align: center;
    height: 70px;
}

#midltext {
    z-index: 1;
    transform: matrix(1, 0, 0, 1, 0, -150);

}

.background-midltext {
    padding-top: 10px;
    font-size: 65px;
    color: rgba(255, 255, 255, 0.568);
    z-index: 2;
    transform: matrix(1, 0, 0, 1, 0, -70);
}

h1 {
    font-size: 28px;
}

.up-blocks {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
    background-color: #f0f0f0;
}

.block {
    padding: 20px;
    margin: 10px;
    height: 400px;
    width: 220px;
    box-sizing: border-box;
    background-color: #ffffff;
}

.img-box {
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    justify-content: center;
}

.image-container {
    position: relative;
    display: inline-block;

}

.main-image {
    width: 180px;
    height: 180px;
    clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%);
    position: relative;
    z-index: 1;
}

.image-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 180px;
    height: 180px;
    background-color: blue;
    clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%);
    transform: rotate(-5deg);
}

#content {
    background-color: #f0f0f0;
}

.down-block {
    padding: 30px 30px;
    height: auto;
    background-color: #f0f0f0;
    margin-left: 100px;
    margin-right: 100px;
    min-width: 330PX;
}

.down-fototext {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: stretch;
}

.image-last-back {
    background-color: blue;
    transform: rotate(-6deg) matrix(1, 0, 0, 1, -25, 15) scale(0.8);
}

.image-last>div>img {
    height: 200px;
    display: inline-block;
    /* Зменшує ширину до 50% від ширини батьк ел */
    object-fit: cover;
    clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
    transform: rotate(6deg) matrix(1, 0, 0, 1, 30, -10) scale(1.15);
}

.text-container {
    max-width: 500px;
    text-align: justify;
}

.blue-text {
    color: rgb(48, 177, 219);
}

@media only screen and (max-width: 800px) and (min-width: 601px) {
    body {
        margin-left: 50px;
        margin-right: 50px;
    }

    .down-block {
        margin-left: 20px;
        margin-right: 20px;
    }
}

@media only screen and (max-width: 600px) {
    body {
        margin-left: 10px;
        margin-right: 10px;
    }

    .down-block {
        margin-left: 0;
        margin-right: 0;
    }

    .menu {
        padding-left: 0;
        padding-right: 0;
    }

    .long-menu-item a {
        width: auto;
    }
}

@media only screen and (max-width: 200px) {
    .menu li {
        flex-grow: 1;
    }
}
               </textarea> `;
            break;
            case 'btn12':
            content = `
            Придбали практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясували переваги та недоліки типів макетів веб-сторінок, придбали практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX   

               `;
            break;
        default:
            content = '<p>Виберіть пункт меню, щоб відобразити опис.</p>';
    }

    output.innerHTML = content; 
}