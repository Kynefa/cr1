const output = document.getElementsByClassName('output')[0]; 

function content_load(buttonId) {
    let content = '';
    
  
    switch (buttonId) {
        case 'btn1':
            content = `
            <h1> Магазин рослин </h1>
            <p style="padding:5px;">   Основою бізнес-логіки є інтерактивна платформа, яка надає користувачам можливість вибору різноманітних рослин, а також пропонує фільтрацію за ціною, типом рослин та іншими параметрами.

Кожен товар на сайті буде представлений зі зображенням і детальним описом, що дозволить покупцям отримати повну інформацію про продукт перед покупкою. Щоб покращити користувацький досвід, буде додано можливість додавати товари до кошика і видаляти їх звідти в будь-який момент. Також користувачі зможуть залишати відгуки про куплені рослини, що сприятиме формуванню довіри до продукції та дозволить іншим покупцям обирати на основі реальних вражень.</p>
       </li>`;
            break;
        case 'btn2':
            content = `Тема: Структура HTML-документа. Вибір предметної галузі. Робота з посиланнями, таблицями, зображеннями, списками в HTML-документі.<br><br>           
Мета: придбати практичні навички роботи  з HTML-документом, таблицями, , зображеннями, посиланнями, списками, формами. Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.<br><br>
ЛР_1:

    <a href ="https://github.com/Kynefa/proj1" target="_blank">репозиторій</a>  і
    <a href ="http://127.0.0.1:5500/index.html" target="_blank">живий сайт</a> <br><br>   

СР_1:
    <a href ="https://github.com/Kynefa/Cp1" target="_blank">репозиторій</a> і
    <a href ="http://127.0.0.1:5502/index.html" target="_blank">живий сайт</a> <br> <br> 
Звіт_html:
    <a href ="https://github.com/Kynefa/zvit" target="_blank">репозиторій</a> і
    <a href ="http://127.0.0.1:5501/index.html" target="_blank">живий сайт</a> <br> <br> 
`;
            break;
        case 'btn3':
            content = `<textarea rows="155" cols="100">
           <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    
</head>
<body>  
   
<header>
        <div class="first">
       <div class="flower">
        <img src="123.png"></img>
    </div>
    <div class="uptext">
        <p><font  face="cursive" size="5">Flora </font></p><br>
    </div>
        </div>
    </header>
    
<div class="options">
    <div class="block">
    <a href="http://127.0.0.1:5500/index.html"style="text-decoration: none; color: rgb(8, 87, 41);">Головна</a></div>
    <div class="block">
        <a class="dropdown menu" style="text-decoration: none; color: rgb(8, 87, 41);" href="#" role="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        Категорія товарів
      </a>
      <ul class="dropdown-menu" aria-labelledby="categoryDropdown">
        <li><a class="dropdown-item" href="cactus.html">Домашні рослини</a></li>
        <li><a class="dropdown-item" href="cactus.html">Кактуси</a></li>
        <li><a class="dropdown-item" href="cactus.html">Бамбук</a></li>
        <li><a class="dropdown-item" href="cactus.html">Бонсай</a></li>
      </ul>
    </div>
    <div class="block">
        <a href="contact.html"style="text-decoration: none; color: rgb(8, 87, 41);">Контакти</a>
    </div>
    <div class="block">
        <a href="https://g.co/kgs/JFPw6Rg"style="text-decoration: none; color: rgb(8, 87, 41);">Про нас</a>
    </div>
    
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="bi bi-person-plus"></i> Зареєструватися
      </button>
     
</div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Форма реєстрації</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Пароль</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">Зареєструватися</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
        </div>
      </div>
    </div>
  </div>
  
<div id="carouselExampleIndicators" class="carousel-slide" data-bs-interval="2500"data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="image.webp" class="d-block w-100" alt="Первое изображение">
        </div>
        <div class="carousel-item">
            <img src="317970_low-maintenance-houseplants_new_960x380_0.webp" class="d-block w-100" alt="Второе изображение">
        </div>
        <div class="carousel-item">
            <img src="34490_1_1097.jpg" class="d-block w-100" alt="Третье изображение">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">До</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Наступний</span>
    </button>
</div>

    
    <div><h3>Найпопулярніші товари:</h3></div>
        <div class="topCharts">
        <div class="card">
            <h4><a href="lavander.html">Лаванда</a></h4>
            <div class="foto">
            <img src="lavander.jpg" alt=""></div>
            <button>Купити</button>
        </div>
        <div class="card">
            
            <h4><a href="cactus.html">Кактус</a></h4>
            <div class="foto">
           <img src="cactus.png" alt=""Кактус></div>
            <button>Купити</button>

        </div>
        <div class="card">
            <h4><a href="bamboo.html">Бамбук</a></h4>
            <div class="foto">
             <img src="bamb.jpg" alt=""></div>
            <button>Купити</button>
        </div>
        <div class="card">
            <h4><a href="cactus.html">Бонсай</a></h4>
            <div class="foto">
            <img src="ficus.jpg" alt=""Кактус></div>
            <button>Купити</button>
        </div>
        </div>
    </div>
    </div>
    <div class="shadow">
        <p style="font-size: 17px;">Ласкаво просимо до нашого сайту, де ви знайдете найкращі види домашніх рослин, які додадуть елегантності та свіжості вашому житлу. Від стильних кактусів до ароматної лаванди, наш асортимент включає різноманіття рослин, які легко доглядати та якісно підходять для будь-якого інтер’єру. Як Замовити?
            Перегляньте наш асортимент, оберіть рослину, яка вам подобається, та оформіть замовлення всього в кілька кліків. Ми гарантуємо швидку доставку та якість кожної рослини. Зробіть свій дім живим і затишним разом з нами!</p>
    </div>
    <div class="newspaper">
        <p><h5 style="text-align: center;">Як вибрати рослину, яка підходить для моєї квартири?</h5><p></p>    
        Усе залежить від того, скільки у вас світла, часу на догляд та простору. Кактуси і сукуленти підійдуть тим, хто шукає невибагливі рослини, тоді як лаванда і бамбук краще підходять для просторих і добре освітлених кімнат. </p>
       <p><h5 style="text-align: center;">Чому Вибрати Рослини?</h5><p></p>
        Рослини не тільки прикрашають ваш простір, але й покращують якість повітря, підвищують настрій та зменшують стрес. Вони створюють затишок і дарують відчуття спокою. Виводячи енергію природи у ваш дім, ви зможете насолоджуватися здоровим та гармонійним середовищем.</p>
        <p> <h5 style="text-align: center;">Як Замовити?</h5><p></p>
        Перегляньте наш асортимент, оберіть рослину, яка вам подобається, та оформіть замовлення всього в кілька кліків. Ми гарантуємо швидку доставку та якість кожної рослини. Зробіть свій дім живим і затишним разом з нами!</p>
        </div>
   
   
    <footer></footer>
</body>
</html></textarea> `;
            break;
        case 'btn4':
            content = `<textarea rows="60" cols="115"><table>
            <tr>
                <th>Модель</th>
                <th>тип</th>
                <th>дальнобойность</th>
                <th>точность</th>
                <th>дополнительное снаряжение</th>
                <th>начало експлоутации</th>
            </tr>
            <tr>
                <td>M4 Carbine</td>
                <td>Карабин</td>
                <td>500-600 метров (эффективная)</td>
                <td>Высокая на коротких и средних дистанциях</td>
                <td>Оптические прицелы, глушитель, подствольный гранатомет M203, лазерные целеуказатели</td>
                <td>1994 год</td>
            </tr>
            <tr>
                <td>M16A4 Rifle</td>
                <td>Автоматическая винтовка</td>
                <td>550 метров (эффективная)</td>
                <td>Высокая на средних и дальних дистанциях</td>
                <td>Оптические прицелы ACOG, лазерные целеуказатели, глушитель</td>
                <td>1997 год</td>
            </tr>
            <tr>
                <td>M249 SAW (Squad Automatic Weapon)</td>
                <td>Легкий пулемет</td>
                <td>800 метров (эффективная)</td>
                <td>Средняя</td>
                <td>Оптический прицел, лазерные целеуказатели, складной сошник</td>
                <td>1984 год</td>
            </tr>
            <tr>
                <td>M2010 Enhanced Sniper Rifle</td>
                <td>Снайперская винтовка</td>
                <td>1200 метров (эффективная)</td>
                <td>Очень высокая</td>
                <td>Оптический прицел, глушитель ,  сошник</td>
                <td>2010 год</td>
            </tr>
            <tr>
                <td>M2010 Enhanced Sniper Rifle</td>
                <td>Снайперская винтовка</td>
                <td>1200 метров (эффективная)</td>
                <td>Очень высокая</td>
                <td>Оптический прицел, глушитель, сошник</td>
                <td>2010 год</td>
            </tr>
        </table></textarea>
        <img src="img/lab1/image.png" alt="" style= "width:1000px;">`;
            break;
        case 'btn5':
            content = `<textarea rows="15" cols="80"><form>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Форма реєстрації</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Пароль</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">Зареєструватися</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
        </div>
      </div>
    </div>
  </div></textarea>`;
            break;
        case 'btn6':
            content = `<textarea rows="1" cols="35"> <img src="lavander.jpg" alt=""></textarea>
            <img src="img/lab1/img.png" alt="" style= "width:1000px;">`;
            break;
        case 'btn7':
            content = `Я придбав практичні навички роботи  з HTML-документом, таблицями, , зображеннями, посиланнями, списками, формами
Створив шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
`;
            break;
        default:
            content = 'Нет информации';
    }


    output.innerHTML = content;
}


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        content_load(event.target.id); 
    });
});