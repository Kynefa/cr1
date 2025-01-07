function content_load(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `
            <h1>Лабораторна робота №5</h1>
           
                Тема: ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. 
ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT


            </p>
            <p>
                Мета: придбати практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT

            </p>
            <h3>Власний WEB-застосунок</h3>
            <a href ="https://github.com/Kynefa/proj1_2" target="_blank">репозиторій</a> і
            <a href ="https://kynefa.github.io/proj1_2/" target="_blank">живий сайт</a>
            <h3>Сайти завдань:</h3>
             <a href ="https://kynefa.github.io/lab5_lab8/" target="_blank">живі сайти завдань</a>
            <h3>Звіт:</h3>
            <a href ="https://github.com/Kynefa/zvit" target="_blank">репозиторій</a> і
            <a href ="http://127.0.0.1:5501/index.html" target="_blank">живий сайт</a>
            `;
            break;
            case 'btn2':
                content = `<textarea rows="54" cols="80">
            &lt;!DOCTYPE html&gt;
            &lt;html lang="en"&gt;
            &lt;head&gt;
                &lt;meta charset="UTF-8"&gt;
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                &lt;title&gt;Document&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;script&gt;
                function makeTransaction(quantity, pricePerDroid) {
                    const totalPrice = quantity * pricePerDroid;
                    return \`You ordered \${quantity} droids worth \${totalPrice} credits!\`;
                  }
                  console.log(makeTransaction(5, 1000)); 
                  console.log(makeTransaction(3, 800));  
                &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
                </textarea> 
                <img src="img/Screenshot_28.png" alt="Фото" width="900">`
                break;
                case 'btn3':
               content = `<textarea rows="54" cols="80">
             <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
    function checkForSpam(message) {
        const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
          return true;
        }
        return false;
      }
      console.log(checkForSpam("SPAM message"));
       </script>
</body>
</html>
                </textarea>;
                 <img src="img/Screenshot_29.png" alt="Фото" width="900">`  
                break;

                case 'btn4':
                content = `<textarea rows="54" cols="80">
             <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Масив</title>
</head>      
<body>
      <script>
             function filterArray(numbers, value) {
        let filteredArray = [];
      
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] > value) {
            filteredArray.push(numbers[i]);
          }
        }
        return filteredArray;
      }
      console.log(filterArray([1, 2, 3, 5, 7, 9], 4));
      </script>
</body>
</html>
                </textarea>
                 <img src="img/Screenshot_31.png" alt="Фото" width="900">`  
                break;
                ;case 'btn5':
                content = `<textarea rows="84" cols="80">
             <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
     function createArray(size) {
        const array = [];
        for (let i = 0; i < size; i++) {
          array.push(Math.floor(Math.random() * 100)); // Додаємо випадкове число від 0 до 99
        }
        return array;
      }
      
      function findMaxEvenElement(array) {
        return array.filter((num) => num % 2 === 0).reduce((max, num) => Math.max(max, num), -Infinity);
      }
      
      function findMinEvenIndexElement(array) {
        return array
          .filter((_, index) => index % 2 === 0)
          .reduce((min, num) => Math.min(min, num), Infinity);
      }
      
      function swapElements(array, maxEven, minEvenIndex) {
        const newArray = [...array];
        const maxIndex = array.indexOf(maxEven);
        const minIndex = array.indexOf(minEvenIndex);
      
        [newArray[maxIndex], newArray[minIndex]] = [newArray[minIndex], newArray[maxIndex]];
      
        return newArray;
      }
      
      function insertionSort(array) {
        const sortedArray = [...array];
        for (let i = 1; i < sortedArray.length; i++) {
          let current = sortedArray[i];
          let j = i - 1;
      
          while (j >= 0 && sortedArray[j] > current) {
            sortedArray[j + 1] = sortedArray[j];
            j--;
          }
      
          sortedArray[j + 1] = current;
        }
        return sortedArray;
      }
      
      function main() {
        const size = parseInt(prompt("Введіть кількість елементів масиву:"), 10);
        const array = createArray(size);
      
        console.log("Вхідний масив:", array);
      
        const maxEven = findMaxEvenElement(array);
        const minEvenIndex = findMinEvenIndexElement(array);
      
        console.log("Максимальний серед парних елементів:", maxEven);
        console.log("Мінімальний серед елементів з парними індексами:", minEvenIndex);
      
        const swappedArray = swapElements(array, maxEven, minEvenIndex);
        console.log("Масив після заміни елементів:", swappedArray);
      
        const sortedArray = insertionSort(swappedArray);
        console.log("Відсортований масив:", sortedArray);
      }
      
      main();</script>
</body>
</html>
                </textarea>;
                 <img src="img/Screenshot_32.png" alt="Фото" width="900">`  
                break;
                case 'btn6':
               content = `<textarea rows="84" cols="80">
             <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Форма реєстрації</h2>
<form id="registrationForm">
    <label>Ім'я*: <input type="text" id="name" required></label>
    <span class="error" id="nameError"></span><br>
    <label>Вік*: <input type="text" id="age" required></label>
    <span class="error" id="ageError"></span><br>
    <label>Дата народження (DD.MM.YYYY): <input type="text" id="birthDate"></label>
    <span class="error" id="birthDateError"></span><br>
    <label>Пароль*: <input type="password" id="password" required></label>
    <span class="error" id="passwordError"></span><br>
    <label>Повторіть пароль*: <input type="password" id="confirmPassword" required></label>
    <span class="error" id="confirmPasswordError"></span><br>
    <button type="submit">Реєстрація</button>
</form>

<script>
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    let isValid = true;

    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    const name = document.getElementById("name").value.trim();
    if (!name) {
        document.getElementById("nameError").textContent = "Поле є обов'язковим.";
        isValid = false;
    }

    const age = document.getElementById("age").value.trim();
    if (!age || !/^\d+$/.test(age)) {
        document.getElementById("ageError").textContent = "Введіть ціле число.";
        isValid = false;
    }
    const birthDate = document.getElementById("birthDate").value.trim();
    if (birthDate && !/^\d{2}\.\d{2}\.\d{4}$/.test(birthDate)) {
        document.getElementById("birthDateError").textContent = "Формат дати має бути DD.MM.YYYY.";
        isValid = false;
    }
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!password) {
        document.getElementById("passwordError").textContent = "Поле є обов'язковим.";
        isValid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Паролі не співпадають.";
        isValid = false;
    }

    if (isValid) {
        alert("Форма відправлена!");
    }
});
</script>
</body>
</html>
                </textarea>;
                 <img src="img/Screenshot_33.png" alt="Фото" width="900"><br>
                <img src="img/Screenshot_30.png" alt="Фото" width="900"><br>
                <img src="img/Screenshot_34.png" alt="Фото" width="900"><br>
                <img src="img/Screenshot_35.png" alt="Фото" width="900"><br>
                <img src="img/Screenshot_36.png" alt="Фото" width="900"><br>
                <img src="img/Screenshot_37.png" alt="Фото" width="900">`  
                break;
                case 'btn7':
                content = `
             Висновки: придбали практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT
                `;
                break;
    }
        const output = document.getElementsByClassName('output')[0];
        output.innerHTML = content;
}