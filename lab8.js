function content_load(buttonId) {
    let content = '';

    switch (buttonId) {
        case 'btn1':
            content = `
              <h1>Лабораторна робота №8</h1>
           
               Тема: WEB-СХОВИЩЕ. WEB STORAGE API. МОДУЛЬНОСТЬ  КОДУ. СТВОРЕННЯ МОДАЛЬНОГО ВІКНА. ДЕЛЕГУВАННЯ ПОДІЙ.

            </p>
            <p>
               Мета: придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.



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
                  content =`<textarea rows="54" cols="80">
                  
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Галерея</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css">
</head>
<body>
  <h1>Моя галерея</h1>
  <ul class="gallery"></ul>

  <h2>JavaScript код:</h2>
  <pre><code>
const images = [
    {
      preview: 'https://media.istockphoto.com/id/157373207/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B1%D0%B0%D0%BB%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D1%96-%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%96-%D0%BD%D0%B0-%D0%B3%D0%B0%D0%BB%D1%8C%D0%BA%D0%BE%D0%B2%D0%BE%D0%BC%D1%83-%D0%BF%D0%BB%D1%8F%D0%B6%D1%96-%D0%BF%D1%96%D0%B4-%D1%87%D0%B0%D1%81-%D0%B7%D0%B0%D1%85%D0%BE%D0%B4%D1%83-%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg?s=612x612&w=0&k=20&c=7GZMPjEM4PoQvqahIGvmAT3HvaYJQAMHepuSzW7QL7o=',  
      original: 'https://media.istockphoto.com/id/157373207/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B1%D0%B0%D0%BB%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D1%96-%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%96-%D0%BD%D0%B0-%D0%B3%D0%B0%D0%BB%D1%8C%D0%BA%D0%BE%D0%B2%D0%BE%D0%BC%D1%83-%D0%BF%D0%BB%D1%8F%D0%B6%D1%96-%D0%BF%D1%96%D0%B4-%D1%87%D0%B0%D1%81-%D0%B7%D0%B0%D1%85%D0%BE%D0%B4%D1%83-%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg?s=612x612&w=0&k=20&c=7GZMPjEM4PoQvqahIGvmAT3HvaYJQAMHepuSzW7QL7o=', 
      description: 'Опис зображення 1',
    },
    {
      preview: 'https://s0.tchkcdn.com/g-49bK-ihki_h_sf4gLEKMHQ/17/261234/660x480/f/0/05d_2a99744_dyka_pryroda_bilka_ta_tulpan.jpg',
      original: 'https://s0.tchkcdn.com/g-49bK-ihki_h_sf4gLEKMHQ/17/261234/660x480/f/0/05d_2a99744_dyka_pryroda_bilka_ta_tulpan.jpg',
      description: 'Опис зображення 2',
    },
    {
      preview: 'https://hochu.ua/static/content/thumbs/780x468/d/08/cad6o4---c5x3x50px50p--834cb720f76193acdff471c5962db08d.jpg',
      original: 'https://hochu.ua/static/content/thumbs/780x468/d/08/cad6o4---c5x3x50px50p--834cb720f76193acdff471c5962db08d.jpg',
      description: 'Опис зображення 3',
    },
    {
      preview: 'https://www.purina.ru/sites/default/files/styles/ttt_image_510/public/2021-01/Yorkshire%20Terrier2.jpg?itok=gPlIljOh',
      original: 'https://www.purina.ru/sites/default/files/styles/ttt_image_510/public/2021-01/Yorkshire%20Terrier2.jpg?itok=gPlIljOh',
      description: 'Опис зображення 4',
    },
    {
      preview: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg',
      original: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg',
      description: 'Опис зображення 5',
    },
    {
      preview: 'https://cdn-us0.puzzlegarage.com/img/puzzle/10/4016_preview.v1.jpg',
      original: 'https://cdn-us0.puzzlegarage.com/img/puzzle/10/4016_preview.v1.jpg',
      description: 'Опис зображення 6',
    },
];
  
const galleryContainer = document.querySelector('.gallery');

images.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const image = document.createElement('img');
  image.src = preview;
  image.alt = description;
  image.dataset.original = original;

  galleryItem.appendChild(image);
  galleryContainer.appendChild(galleryItem);
});

galleryContainer.addEventListener('click', (event) => {
  const clickedImage = event.target;
  if (clickedImage.tagName === 'IMG') {
    const largeImageURL = clickedImage.dataset.original;
    console.log(largeImageURL); // Виведення посилання 

    const instance = basicLightbox.create(
      <img src="{largeImageURL}" alt="{clickedImage.alt}">
    );
    instance.show();
  }
});
  </code></pre>
  
  <script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>
  <script src="js/gallery.js"></script>
</body>
</html>

});
CSS:
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

h1 {
  text-align: center;
  margin-top: 20px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
  list-style: none;
  margin: 0;
}

.gallery__item img {
  width: 100%;
  height: 400px; 
  object-fit: cover; 
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
}

.gallery__item img:hover {
  transform: scale(1.05);
}

.basicLightbox__placeholder img {
  max-width: 100%; 
  max-height: 600px; 
  transform: scale(1.5)
}

</textarea><br>Результат виконання<br>
<img src="img/Screenshot_53.png" alt="Фото" width="800"><br>
<img src="img/Screenshot_54.png" alt="Фото" width="800">`
break;
      
        case 'btn3': 
        content =`<textarea rows="24" cols="70">
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feedback Form</title>
  <link rel="stylesheet" href="2-form.css">
</head>
<body>
  <div class="container">
  <form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
  </div>
  <script src="2-form.js"></script>
  <div class="notification" id="notification" style="display: none;">
    <p id="notification-text"></p>
  </div>
</body>
</html>  

<pre> <code>
const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    form.email.value = formData.email;
    form.message.value = formData.message;
  }
});

form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields.');
    return;
  }

  if (!emailPattern.test(formData.email)) {
    alert('Please enter a valid Gmail address.');
    return;
  }
  console.log('Form Data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
});

---------------------
Css

body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 320px;
  }
  
  .feedback-form label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
  }
  
  .feedback-form input[type="email"],
  .feedback-form textarea {
    width: 95%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    resize: none;
  }
  
  .feedback-form input[type="email"]:focus,
  .feedback-form textarea:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
  
  .feedback-form button {
    display: block;
    width: 95%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .feedback-form button:hover {
    background-color: #0056b3;
  }
  .notification {
    background-color: #f44336; 
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    display: none; 
  }
  
  .notification.show {
    display: block; 
  }
    </pre> </code>Результат виконання<br>
                  </textarea>
     <img src="img/Screenshot_56.png" alt="Фото" width="600"><br>
    <img src="img/Screenshot_57.png" alt="Фото" width="600">`;
            break;
            case 'btn4':
                content =`
Висновок: придбали практичні навички роботи створення модального вікна; повторили процес створення макету, зокрема створення макету галереї довільних зображень; закріпили навички роботи з делегуванням подій.`
break;            
} 
  const output = document.getElementsByClassName('output')[0];
  output.innerHTML = content;

}