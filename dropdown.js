document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  // Змінні
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input--hidden');

  // Клік по кнопці: відкрити/закрити дропдаун
    dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
    });

  // Обрати елемент зі списку. Запам'ятати обране значення. Закрити дропдаун
    dropDownListItems.forEach(function (listitem) {
    listitem.addEventListener('click', function (event) {
        event.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
    });
    });

  // Клік ззовні дропдауна закриває дропдаун
    document.addEventListener('click', function (event) {
    if (event.target !== dropDownBtn) {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
    }
    });

  // 'Tab' або 'Esc' закривають дропдаун
    document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab' || event.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
    }
    });
});
