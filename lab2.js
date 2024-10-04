const output = document.getElementsByClassName('output')[0];

function content_load(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `
            <h1>Лабораторна робота №2</h1>
            <p style="padding:5px;">
                Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.

Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів

            </p>
            <p>
                Мета: придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. 
                Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
            </p>
            <h3>ЛР_1:</h3>
            <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_laba_1.git" target="_blank">репозиторій</a> і
            <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_laba_1" target="_blank">живий сайт</a>
            <h3>СР_1:</h3>
            <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_sr1.git" target="_blank">репозиторій</a> і
            <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_sr1" target="_blank">живий сайт</a>
            <h3>Звіт_html:</h3>
            <a href ="https://github.com/OleksiiAnokhin2023/IS-31_Anokhin_report_html.git" target="_blank">репозиторій</a> і
            <a href ="https://oleksiianokhin2023.github.io/IS-31_Anokhin_report_html" target="_blank">живий сайт</a>
            `;
            break;
        case 'btn2':
            content = `
            <h2>Способи підключення стилів</h2>
            <p>
                Є кілька способів підключення CSS-стилів до HTML-документа:
                <ul>
                    <li>Вбудовані стилі: за допомогою атрибута <code>style</code> у HTML-елементах.<a class="dropdown menu" style="text-decoration: none; color: rgb(8, 87, 41);" href="#" role="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false"></li>
                    <li>Внутрішні стилі: всередині <code>&lt;style&gt;</code> у заголовку HTML-документа.</li>
                    <li>Зовнішні стилі: через атрибут <code>link</code> у заголовку для підключення CSS-файлу.</li>
                </ul>
            </p>
            `;
            break;
        case 'btn3':
            content = `
            <h2>Селектори в CSS</h2>
            <p>
                CSS-селектори дозволяють вибирати елементи HTML для стилізації. Основні типи селекторів:
                <ul>
                    <li><strong>Тегові селектори:</strong> Вибирають усі елементи певного тегу.</li>
                    <li><strong>Класові селектори:</strong> Вибирають елементи з певним класом.</li>
                    <li><strong>Ідентифікаторні селектори:</strong> Вибирають єдиний елемент з унікальним ID.</li>
                </ul>
            </p>
            `;
            break;
        case 'btn4':
            content = `
            <h2>Селектори тегу</h2>
            <p>
               <code>img{
    display: block;<br>
    width:  100%;<br>
    height: 70%;<br>
    border-radius: 1px;<br>
}<br
header <br>
h3</code><br>
            </p>
            `;
            break;
        case 'btn5':
            content = `
            <h2>Селектори класу</h2>
            <p>
                .foto{
    height: 300px;
    margin: auto;
    margin: 10px;
   
}<br>
.first{ 
    margin-left: 100px;
}<br>
.flower{
   
    height: 130px;
    width: 100px;
    margin-left: -100PX;

}<br>
    .uptext{
    margin-top: -100px;
    margin-left: -20px;
    color: rgb(41, 124, 9);
}<br>
    .options{
    margin-left: 150px;
    margin-right: 150px;
    height: 30px;
    background-color: rgb(180, 2250, 150);
    display: flex;
    
}<br>

.block{
    padding: 3px;
margin-inline: 100px;    
margin-left: 80px;
font-size: large;
}<br>
 

.carousel-slide{
    margin-left: 150px;
    margin-right: 150px;
    
}<br>
.carousel-item{
    height: 500px;
}</code>
            </p>
            `;
            break;
        case 'btn6':
            content = `
            <h2>Селектори ID</h2>
            <p>
                 #registerButton {<br>
    background-color: #0077ff; <br>
    color: white; <br>
}
    
            </p>
            `;
            break;
        case 'btn7':
            content = `
            <h2>Інші селектори</h2>
            <p>
                Існують також комбіновані селектори, псевдокласи, псевдоелементи та інші, які дозволяють більш точно вибирати елементи.
            </p>
            `;
            break;
            case 'btn8':
                content =`
                    <p>
                        font-size: 17px;<br>
                        margin-left: 150px;<br>
                        margin-right: 150px;<br>
                        display: flex;<br>
                        background-color:green;<br>
                        .card{<br>
                            width: 250px;<br>
                            height: 400px;<br>
                            margin-top:  100px;<br>
                            border-radius: 25px;<br>
                            text-align: center;<br>
                            margin: auto;<br>
                            padding: 1px;<br>
                        }<br>
                        display: flex;<br>
                        font-size: large;<br>
                        .shadow{<br>
                            margin-left: 180px;<br>
                            margin-right: 140px;<br>
                            margin-top: 25px;<br>
                            width: 1210px;<br>
                            height: 200px;<br>
                            padding: 50px;<br>
                            background-color: rgb(162, 255, 173);<br>
                            box-shadow: 20px 20px rgb(2, 213, 255);<br>
                        }<br>
                        &lt;div class="block"&gt;<br>
                            &lt;a class="dropdown menu" style="text-decoration: none; color: rgb(8, 87, 41);" href="#" role="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false"&gt;<br>
                                Категорія товарів<br>
                            &lt;/a&gt;<br>
                            &lt;ul class="dropdown-menu" aria-labelledby="categoryDropdown"&gt;<br>
                                &lt;li&gt;&lt;a class="dropdown-item" href="cactus.html"&gt;Домашні рослини&lt;/a&gt;&lt;/li&gt;<br>
                                &lt;li&gt;&lt;a class="dropdown-item" href="cactus.html"&gt;Кактуси&lt;/a&gt;&lt;/li&gt;<br>
                                &lt;li&gt;&lt;a class="dropdown-item" href="cactus.html"&gt;Бамбук&lt;/a&gt;&lt;/li&gt;<br>
                                &lt;li&gt;&lt;a class="dropdown-item" href="cactus.html"&gt;Бонсай&lt;/a&gt;&lt;/li&gt;<br>
                            &lt;/ul&gt;<br>
                        &lt;/div&gt;<br>
                    </p>
                `;
            break;
        case 'btn9':
            content = `
            <h2>Висновки до ЛР№2</h2>
            <p>
                В лабораторній роботі №2 придбали практичні навички роботи з селекторами, ідентифікаторами, списками, 
                 різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами,
                  оформлили текстові елементи.
.
            </p>
            `;
            break;
        default:
            content = '<p>Виберіть пункт меню, щоб відобразити опис.</p>';
    }

    output.innerHTML = content; // Встановлюємо HTML контент в секцію output
}