function loadLab(labNumber) {
    const script = document.createElement('script');
    script.src = `lab${labNumber}.js`;
    document.body.appendChild(script);

    // Оновлюємо меню в залежності від номера лабораторної роботи
    const menu = document.getElementById('lab-menu');

    // Очищення існуючих пунктів меню
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
    } else if (labNumber === 2) {
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
    
    // Додавання активного класу до натиснутої кнопки
    const labButtons = document.querySelectorAll('.all_labs button');
    labButtons.forEach(button => {
        button.classList.remove('active');
    });
    labButtons[labNumber - 1].classList.add('active');
}

function showDescription(buttonId) {
    const output = document.querySelector('.output p');
    output.textContent = `Ви вибрали кнопку з ID: ${buttonId}`; // Змінюйте текст у секції output
    content_load('btn' + buttonId);
}

