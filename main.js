document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Новый клиент успешно создан!');
        form.reset();
    });
});