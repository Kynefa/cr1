function content_load(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `
            <h1>Лабораторна робота №4</h1>
           
                Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.  

            </p>
            <p>
                Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First. 

            </p>
            <h3>ЛР_4:</h3> 
            <a href ="https://github.com/Kynefa/proj1_2" target="_blank">репозиторій</a> 
            <a href ="https://kynefa.github.io/proj1_2/" target="_blank">живий сайт</a>
            <h3>Звіт:</h3>
            <a href ="https://github.com/Kynefa/zvit" target="_blank">репозиторій</a> і
            <a href ="https://kynefa.github.io/zvit/" target="_blank">живий сайт</a>
            `;
            break;

        case 'btn2':
            content = `<textarea rows="20" cols="150">
         Десктопна версія (ширина екрана більше ніж 1024px):
Це версія сайту для великих екранів (моніторів або ноутбуків)


Планшетна версія (ширина екрана від 768px до 1024px):
Планшети мають менші екрани, тому макет потрібно адаптувати, щоб забезпечити читабельність і зручність користування. Блоки можуть бути ширшими, а відступи меншими.
Відступи з боків зменшуються, щоб більше контенту вміщалося на екрані.
Карти товарів розташовані в дві колонки.
Елементи навігації можуть бути більш компактними.


Мобільна версія (ширина екрана до 767px):
Для мобільних пристроїв необхідно спрощувати інтерфейс. Контент повинен розташовуватись вертикально, великі блоки стають меншими, а текст та кнопки – більш читабельними.
Всі блоки розташовані вертикально (одноколонковий макет).
Меню навігації також розташоване вертикально для зручності.
            </textarea>`;
            break;
        case 'btn3':
            content = `<textarea rows="20" cols="150">
                @media (min-width: 1025px) {
   
    .first {
        flex-direction: row;
         margin-left: 100px;
    }

    .top-nav-menu {
        justify-content: flex-end;
    }

    .content {
        max-width: 1200px;
        margin: 0 auto;
    }

    .card {
        width: 22%;
    }

    .topCharts {
        display: flex;
        gap: 15px;
        justify-content: space-around;
    }

    .newspaper {
        text-align: justify;
    }
                </textarea>
                 <img src="img/Screenshot_11.png" alt="Фото" width="900"><br>
                 <img src="img/Screenshot_12.png" alt="Фото" width="900">`;
            break;
        case 'btn4':
            content = `<textarea rows="20" cols="150">
               @media (min-width: 768px) and (max-width: 1024px) {
    body {
        padding: 0 100px; 
    }

    .first {
        flex-direction: column;
        align-items: flex-start;
    }

    .top-nav-menu {
        flex-direction: column;
        gap: 10px;
    }

    .card {
        width: 45%;
    }

    .topCharts {
        display: flex;
        gap: 15px;
        justify-content: space-around;
        flex-wrap: wrap;
    }
              </textarea>
               <img src="img/Screenshot_13.png" alt="Фото" width="900"><br>
                 <img src="img/Screenshot_14.png" alt="Фото" width="900"><br>
                 <img src="img/Screenshot_15.png" alt="Фото" width="900"><br>
                 <img src="img/Screenshot_16.png" alt="Фото" width="900"><br>
                  <img src="img/Screenshot_17.png" alt="Фото" width="900">`;
            break;
        case 'btn5':
            content = `<textarea rows="20" cols="150">
                   @media (max-width: 767px) {
    body {
        padding: 0 80px; /* Відступи зліва та справа встановлені на 80px */
    }

    .first {
        flex-direction: column;
        align-items: flex-start;
    }

    .top-nav-menu {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }

    .card {
        width: 100%;
    }

    .topCharts {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .newspaper {
        text-align: justify;
        padding: 10px;
    }

    .welcome {
        padding: 15px;
        text-align: justify;
    }

    footer {
        display: flex;
        justify-content: space-around;
        padding: 10px;
    }
              </textarea>
               <img src="img/Screenshot_18.png" alt="Фото" width="900"><br>
                 <img src="img/Screenshot_19.png" alt="Фото" width="900"><br>
                 <img src="img/Screenshot_20.png" alt="Фото" width="900"><br>
                 <img src="img/Screenshot_21.png" alt="Фото" width="900"><br>
                  <img src="img/Screenshot_22.png" alt="Фото" width="900"><br>
                  <img src="img/Screenshot_23.png" alt="Фото" width="900"><br>
                  <img src="img/Screenshot_24.png" alt="Фото" width="900"><br>`;
            break;
        case 'btn6':
            content = `
               <p> and — застосування стилів за умови виконання всіх умов.<br>
not — застосування стилів, якщо умова не виконується.<br>
, — застосування стилів, якщо виконується будь-яка з умов.<p>
            <img src="img/Screenshot_25.png" alt="Фото" width="900"> `;
            break;
        case 'btn7':
            content = `
               На цій лабораторній роботі ми навчились використовувати і дізнались про адаптивну верстку, Медіа-запити, Медіа-типи, Медіа-функції, Метатег viewport, Інструменти розробника, Стратегія Mobile First.
             `;
            break;
    }

    const output = document.getElementsByClassName('output')[0];
    output.innerHTML = content;
}