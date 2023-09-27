$(document).ready(function () {
    $('.datepicker').datepicker({
        format: 'yyyy/mm/dd',
        autoclose: false
    });

    const cancelButton = document.getElementById('cancelButton');
    const confirmationButton = document.getElementById('confirmationButton');
    const bookButton = document.getElementById('bookButton');

    cancelButton.addEventListener('click', function () {
        bookButton.setAttribute('class', "btn btn-primary btn-sm disabled")
    });

    confirmationButton.addEventListener('click', function () {
        bookButton.setAttribute('class', "btn btn-primary btn-sm")
    });
});
