let menuItem = document.querySelectorAll('.menu-item'),
    wrapperMenu = document.querySelector('.menu'),
    body = document.getElementsByClassName('body'),
    div = document.createElement('div'),
    text = document.getElementById('title'),
    adv = document.querySelector('.adv');

// меняем местами пункты меню
wrapperMenu.appendChild(menuItem[1]);
wrapperMenu.appendChild(menuItem[3]);

// добавляем пятый пункт меню
div.classList.add('menu-item');
div.innerHTML = 'Пятый пункт';
wrapperMenu.appendChild(div);

// Добавляем текст в звголовок
text.textContent = 'Мы продаем только подлинную технику Apple';

// меняем фон
document.body.style.background = 'url(./img/apple_true.jpg)';

// убираем рекламу
adv.style.display = 'none';

// спрашиваем про эпл
let question = prompt("Ваше отношение к технике Apple"),
    promptWindow = document.querySelector('.prompt');
promptWindow.innerHTML = question;
