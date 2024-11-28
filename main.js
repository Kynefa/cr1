function loadLab(labNumber) {
    const script = document.createElement('script');
    script.src = `lab${labNumber}.js`;
    document.body.appendChild(script);

    clearOutput(labNumber);

    const menu = document.getElementById('lab-menu');

    menu.innerHTML = '';

    if (labNumber === 1) {
        menu.innerHTML = `
            <li><button id="btn1" onclick="showDescription(1)">Опис предметного середовища</button></li>
            <li><button id="btn2" onclick="showDescription(2)">Тема Мета Місце розташування лабораторної роботи</button></li>
            <li><button id="btn3" onclick="showDescription(3)">СТРУКТУРА ДОКУМЕНТА</button></li>
            <li><button id="btn4" onclick="showDescription(4)">HTML код ТАБЛИЦЬ</button></li>
            <li><button id="btn5" onclick="showDescription(5)">HTML код ФОРМИ</button></li>
            <li><button id="btn6" onclick="showDescription(6)">HTML код ЗОБРАЖЕННЯ</button></li>
            <li><button id="btn7" onclick="showDescription(7)">ВИСНОВКИ</button></li>
        `;
    }
    else if (labNumber === 2) {
        menu.innerHTML = `
            <li><button id="btn1" onclick="showDescription(1)">Тема, Мета ЛР2, Місце розташування сайту, звіту</button></li>
            <li><button id="btn2" onclick="showDescription(2)">Способи підключення стилів</button></li>
            <li><button id="btn3" onclick="showDescription(3)">СЕЛЕКТОРИ</button></li>
            <li><button id="btn4" onclick="showDescription(4)">Селектори тегу</button></li>
            <li><button id="btn5" onclick="showDescription(5)">Селектори класу</button></li>
            <li><button id="btn6" onclick="showDescription(6)">Селектори ід</button></li>
            <li><button id="btn7" onclick="showDescription(7)">Інші селектори</button></li>
            <li><button id="btn8" onclick="showDescription(8)">CSS: шрифти Текст Таблиці Фони Контури Списки CSS Просунутий</button></li>
            <li><button id="btn9" onclick="showDescription(9)">Висновки до ЛР№2</button></li>
        `;
    }
    else if (labNumber === 3) {
        menu.innerHTML = `
            <li><button id="btn1" onclick="showDescription(1)">Тема, Мета ЛР3, Місце розташування сайту, звіту</button></li>
            <li><button id="btn2" onclick="showDescription(2)">Завдання№1 Зовнішній вигляд макету</button></li>
            <li><button id="btn3" onclick="showDescription(3)">Завдання №2</button></li>
            <li><button id="btn4" onclick="showDescription(4)">Фіксована таблична верстка</button></li>
            <li><button id="btn5" onclick="showDescription(5)">Гумова таблична верстка</button></li>
            <li><button id="btn6" onclick="showDescription(6)">Фіксована блокова верстка</button></li>
            <li><button id="btn7" onclick="showDescription(7)">Гумова блокова верстка</button></li>
            <li><button id="btn8" onclick="showDescription(8)">Завдання №3 FLEXBOX</button></li>
            <li><button id="btn9" onclick="showDescription(9)">Скріншот сторінки (FLEXBOX)</button></li>
            <li><button id="btn10" onclick="showDescription(10)">HTML код (FLEXBOX)</button></li>
            <li><button id="btn11" onclick="showDescription(11)">CSS код (FLEXBOX)</button></li>
            <li><button id="btn12" onclick="showDescription(12)">Висновки</button></li>
        `;

    }
    else if (labNumber === 4) {
        menu.innerHTML = `
            <li><button id="btn1" onclick="showDescription(1)">Тема, Мета ЛР4, Місце розташування сайту, звіту</button></li>
            <li><button id="btn2" onclick="showDescription(2)">Адаптивні верстки </button></li>
            <li><button id="btn3" onclick="showDescription(3)">Десктопна версія</button></li>
            <li><button id="btn4" onclick="showDescription(4)">Планшетна версія</button></li>
            <li><button id="btn5" onclick="showDescription(5)">Мобільна версія</button></li>
            <li><button id="btn6" onclick="showDescription(6)">Логічні оператори</button></li>
            <li><button id="btn7" onclick="showDescription(7)">Висновки</button></li>
        `;

    }
    else if (labNumber === 5) {
        menu.innerHTML = `
            <li><button id="btn1" onclick="showDescription(1)">Тема, Мета ЛР5, Місце розташування сайту, звіту</button></li>
            <li><button id="btn2" onclick="showDescription(2)">Завдання №1 </button></li>
            <li><button id="btn3" onclick="showDescription(3)">Завдання №2</button></li>
            <li><button id="btn4" onclick="showDescription(4)">Завдання №3</button></li>
            <li><button id="btn5" onclick="showDescription(5)">Завдання №4</button></li>
            <li><button id="btn6" onclick="showDescription(6)">Завдання №5</button></li>
            <li><button id="btn7" onclick="showDescription(7)">Висновки</button></li>
        `;

    }
    const labButtons = document.querySelectorAll('.all_labs button');
    labButtons.forEach(button => {
        button.classList.remove('active');
    });
    labButtons[labNumber - 1].classList.add('active');
}


function clearOutput(labNumber) {
    const output = document.getElementsByClassName('output')[0];
    output.innerHTML = `Ви вибрали лабораторну роботу № ${labNumber}`;
}

function showDescription(buttonIndex) {
    content_load('btn' + buttonIndex);
}