function content_load(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `
              <h1>Лабораторна робота №7</h1>
           
                Тема:   
КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. 

            </p>
            <p>
                Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.
.  Реалізація програм засовами мови JAVASCRIPT



            </p>
            <h3>Власний WEB-застосунок</h3>
            <a href ="https://github.com/Kynefa/proj1_2" target="_blank">репозиторій</a> і
            <a href ="https://kynefa.github.io/proj1_2/" target="_blank">живий сайт</a>
             <h3>Сайти завдань:</h3>
             <a href ="https://kynefa.github.io/lab5_lab8/" target="_blank">живі сайти завдань</a>
            <h3>Звіт:</h3>
            <a href ="https://github.com/Kynefa/zvit" target="_blank">репозиторій</a> і
            <a href ="https://kynefa.github.io/zvit/" target="_blank">живий сайт</a>
            `;
            break;
        case 'btn2':
                  content =`<textarea rows="54" cols="80">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    
    input, button {
        margin: 10px;
        padding: 5px;
    }
</style>
</head>
<body>
<h1>ЗАВДАННЯ №1</h1>
<button id="showButton">SHOW ME</button>
<input type="text" id="inputField" placeholder="Enter text here">

<script>

    const button = document.getElementById("showButton");
    const inputField = document.getElementById("inputField");
    button.addEventListener("click", () => {
        const inputValue = inputField.value; 
        console.log(inputValue);
    });
</script> <link rel="stylesheet" href="style.css">
</body>
</html>
</textarea>
<img src="img/Screenshot_45.png" alt="Фото" width="600">`
break;
        case 'btn3':
                  content =`<textarea rows="54" cols="80">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Завдання 3</title>
    <style>
        body {
            background-color: #90EE90;
            font-family: Arial, sans-serif;
        }
        .container {
            padding: 20px;
            text-align: center;
        }
        input {
            padding: 5px;
        }
        button {
            padding: 5px 10px;
            margin-left: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>ЗАВДАННЯ 3</h2>
        <input type="password" id="passwordInput" value="пароль">
        <button id="toggleButton">Приховати</button>
    </div>

    <script>
        const passwordInput = document.getElementById('passwordInput');
        const toggleButton = document.getElementById('toggleButton');

        toggleButton.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleButton.textContent = 'Розкрити';
            } else {
                passwordInput.type = 'password';
                toggleButton.textContent = 'Приховати';
            }
        });
    </script>
</body>
</html>
</textarea>
<img src="img/Screenshot_46.png" alt="Фото" width="600">`;
break;
        case 'btn4':
                  content =`<textarea rows="54" cols="80">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Завдання 5</title>
    <style>
       
        .taskTitle {
            font-size: 20px;
            text-align: center;
            font-weight: bold;
        }
        #place {
            width: 150px;
            height: 300px;
            background-color: green;
            margin: 20px auto;
        }
    </style>
</head>
<body>
    <div class="taskTitle">ЗАВДАННЯ 5</div>
    <div id="place"></div>

    <script>
        const placeDiv = document.getElementById('place');

        window.addEventListener('click', (event) => {
            const clickedInsideDiv = placeDiv.contains(event.target);
            console.log(clickedInsideDiv); 
        });
    </script><link rel="stylesheet" href="style.css">
</body>
</html>

</textarea>
                  <img src="img/Screenshot_47.png" alt="Фото" width="600">`;
break;
        case 'btn5':
                  content =`<textarea rows="54" cols="80">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul id="categories">
      <li class="item">
        <h2>Animals</h2>
        <ul>
          <li>Cat</li>
          <li>Hamster</li>
          <li>Horse</li>
          <li>Parrot</li>
        </ul>
      </li>
      <li class="item">
        <h2>Products</h2>
        <ul>
          <li>Bread</li>
          <li>Prasley</li>
          <li>Cheese</li>
        </ul>
      </li>
      <li class="item">
        <h2>Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </li>
    </ul> <script>
    const categoriesList = document.querySelectorAll(#categories .item);
    console.log(Number of categories: $categoriesList.length});
    categoriesList.forEach((category) => {
      const categoryTitle = category.querySelector('h2').textContent;
      const itemsCount = category.querySelectorAll('ul li').length;
      console.log(Category: $categoryTitle});
      console.log(Elements: $itemsCount});
    });
  </script>
  <link rel="stylesheet" href="style.css">
</body>
</html>
</textarea>
                  <img src="img/Screenshot_48.png" alt="Фото" width="800">`;
break;
        case 'btn6':
                  content =`<textarea rows="54" cols="80">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Form</title>
  <link rel="stylesheet" href="style.css">
  <style>
    body {
      background-color: #90ee90;
      font-family: Arial, sans-serif;
    }
    .login-form {
      max-width: 300px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    .login-form label {
      display: block;
      margin-bottom: 10px;
    }
    .login-form input {
      width: 80%;
      padding: 5px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    .login-form button {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 3px;
      background-color: #28a745;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
    .login-form button:hover {
      background-color: #218838;
    }
  </style>
</head>
<body>
  <form class="login-form">
    <label>
      Email
      <input type="email" name="email" />
    </label>
    <label>
      Password
      <input type="password" name="password" />
    </label>
    <button type="submit">Log in</button>
  </form>
  <script>
    document.querySelector('.login-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const form = event.target;
      const email = form.elements.email.value.trim();
      const password = form.elements.password.value.trim();

      if (!email || !password) {
        alert('All form fields must be filled in');
        return;
      }

      const formData = {
        email: email,
        password: password
      };

      console.log(formData);
      form.reset();
    });
  </script> <link rel="stylesheet" href="style.css">
</body>
</html>

</textarea>
                  <img src="img/Screenshot_49.png" alt="Фото" width="600">`;
break;

        case 'btn7':
                  content =`<textarea rows="50" cols="50">

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head><div class="widget">
    <p>Background color: <span class="color">-</span></p>
    <button type="button" class="change-color">Change color</button>
  </div>
<body><script>
function getRandomHexColor() {
  return #$Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)};
}

const changeColorButton = document.querySelector('.change-color');
const colorDisplay = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {

  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;
  colorDisplay.textContent = newColor;
});</script> 
</body>
</html>

</textarea><br>
<img src="img/Screenshot_50.png" alt="Фото" width="600"><br>
<img src="img/Screenshot_51.png" alt="Фото" width="300">`
break;
        case 'btn8':
                  content =`<textarea rows="50" cols="70">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<div id="controls">
    <input type="number" min="1" max="100" step="1" />
    <button type="button" data-create>Create</button>
    <button type="button" data-destroy>Destroy</button>
    <div id="boxes"></div>
  </div>
<body><script>
      function getRandomHexColor() {
        return #Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)};
      }
      const controls = document.querySelector('#controls');
      const input = controls.querySelector('input');
      const createButton = controls.querySelector('[data-create]');
      const destroyButton = controls.querySelector('[data-destroy]');
      const boxesContainer = document.querySelector('#boxes');
      
      function createBoxes(amount) {
        destroyBoxes();
      
        const elements = [];
        let size = 30;
      
        for (let i = 0; i < amount; i++) {
          const div = document.createElement('div');
        '  div.style.width = size px;
        '  div.style.height = size px;'
          div.style.backgroundColor = getRandomHexColor();
          div.style.margin = '5px';
          elements.push(div);
          size += 10; 
        }
      
        boxesContainer.append(...elements);
      }
      
      function destroyBoxes() {
        boxesContainer.innerHTML = '';
      }
      
      createButton.addEventListener('click', () => {
        const amount = Number(input.value.trim());
        if (amount >= 1 && amount <= 100) {
          createBoxes(amount);
          input.value = ''; 
        } else {
          alert('Please enter a number between 1 and 100.');
        }
      });
      
      destroyButton.addEventListener('click', destroyBoxes);</script> <link rel="stylesheet" href="style.css">
</body>
</html>
</textarea>  
<img src="img/Screenshot_52.png" alt="Фото" width="300">`;
break;
      
 case 'btn9':
                  content =`
Висновок: придбали практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.
 Реалізацію програм засобами мови JAVASCRIPT`
break;            
    }
    const output = document.getElementsByClassName('output')[0];
    output.innerHTML = content;
} 
    