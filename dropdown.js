// Клік по кнопці: відкрити/закрити дропдаун
document.querySelector('.dropdown__button').addEventListener('click', function () {
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
});

// Обрати елемент зі списку. Запам'ятати обране значення. Закрити дропдаун
document.querySelectorAll('.dropdown__list-item').forEach(function (listitem) {
    listitem.addEventListener('click', function () {
        document.querySelector('.dropdown__button').innerText = this.innerText;
        document.querySelector('.dropdown__button').focus();
        document.querySelector('.dropdown__input--hidden').value = this.dataset.value;

    });

})