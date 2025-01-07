function content_load(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `
              <h1>Лабораторна робота №6</h1>
           
                Тема:   ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ.


            </p>
            <p>
                Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки.
. Реалізація програм засовами мови JAVASCRIPT


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
<body>
    <script>
    function createProduct(obj, callback) {
        const product = { ...obj, id: Date.now().toString() };
        callback(product);
    }
    
    function logProduct(product) {
        console.log('Product:', product);
    }
    
    function logTotalPrice(product) {
        const totalPrice = product.price * product.quantity;
        console.log('Total Price:', totalPrice);
    }
    
    const product = { name: 'Laptop', price: 1000, quantity: 3 };
    
    createProduct(product, logProduct);
    createProduct(product, logTotalPrice);
    </script>
</body>
</html> </textarea>; <img src="img/Screenshot_39.png" alt="Фото" width="900">`
 break;
 case 'btn3':
      content =`<textarea rows="54" cols="80">
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

const medicineEntries = Object.entries(medicines);
const currentDate = new Date();
const validMedicines = medicineEntries
    .filter(([name, expiryDate]) => expiryDate > currentDate)
    .sort((a, b) => a[1] - b[1])  
    .map(([name, expiryDate]) => name);  

console.log(validMedicines);

    </script>
</body>
</html></textarea>;<img src="img/Screenshot_40.png" alt="Фото" width="900">`
break;
case 'btn4':
      content =`<textarea rows="54" cols="80">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const applyDiscountAndAddId = (products) => {
    return products.map((product, index) => ({
        ...product,
        id: Date.now().toString() + index,
        price: product.price * 0.8 
    }));
};
const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];
const updatedFruits = applyDiscountAndAddId(fruits);
console.log(updatedFruits);

    </script>
</body>
</html></textarea>;<img src="img/Screenshot_41.png" alt="Фото" width="900">`
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
    <script>
        class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const client = new Client('user123', 'user@example.com');
console.log(client.login); // Виведе: user123
console.log(client.email); // Виведе: user@example.com

client.login = 'newUser456';
client.email = 'new@example.com';
console.log(client.login); 
console.log(client.email); 

    </script>
</body>
</html></textarea>;<img src="img/Screenshot_42.png" alt="Фото" width="900">`
break;
case 'btn6':
      content =`<textarea rows="54" cols="80">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        const getTagCounts = (tweets) => {
    return tweets
        .flatMap(tweet => tweet.tags)  
        .reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1;    
            return acc;
        }, {});   
};

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tagCounts = getTagCounts(tweets);
console.log(tagCounts);    

    </script>
</body>
</html></textarea>;<img src="img/Screenshot_43.png" alt="Фото" width="900">`
break;
case 'btn7':
      content =`<textarea rows="54" cols="80">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
const checkBrackets = (str) => {
  const stack = [];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (const char of str) {// Проходимо через кожен символ у рядку
    if (Object.values(brackets).includes(char)) {// Якщо символ є відкритою дужкою, додаємо його у стек
      stack.push(char);
    }                                      
    else if (Object.keys(brackets).includes(char)) {// Якщо символ є закритою дужкою, перевіряємо відповідність
      if (stack.length === 0 || stack.pop() !== brackets[char]) {
        return false;
      }
    }  
  }
  return stack.length === 0;
};

const validCode = "function someFn() { if (true) { console.log('Hello, world!'); } }";
const invalidCode = "function someFn() { if (true) { console.log('Hello, world!'); }";

console.log(checkBrackets(validCode)); 
console.log(checkBrackets(invalidCode)); 

    </script>
</body>
</html></textarea>;<img src="img/Screenshot_44.png" alt="Фото" width="900">`
break;
case 'btn8':
      content =`
Висновки: придбали практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізували програми засобами мови JAVASCRIPT
`;
                break;
    }
        const output = document.getElementsByClassName('output')[0];
        output.innerHTML = content;
}