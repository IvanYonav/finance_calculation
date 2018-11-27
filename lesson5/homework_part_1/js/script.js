let menuItem = document.querySelectorAll('.menu-item'),
    wrapperMenu = document.querySelector('.menu'),
    li = document.createElement('li'),
    text = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column');

// меняем местами пункты меню
wrapperMenu.insertBefore(menuItem[2], menuItem[1]);

// добавляем пятый пункт меню
li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
wrapperMenu.appendChild(li);

// Добавляем текст в звголовок
text.textContent = 'Мы продаем только подлинную технику Apple';

// меняем фон
document.body.style.background = 'url(./img/apple_true.jpg)';

// убираем рекламу
column[1].removeChild(adv);

// спрашиваем про эпл
let question = prompt("Ваше отношение к технике Apple"),
    promptWindow = document.querySelector('.prompt');
promptWindow.innerHTML = question;
