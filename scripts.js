$(document).ready(function () {
    $('.datepicker').datepicker({
        format: 'yyyy/mm/dd',
        autoclose: false
    });

    const cancelButton = document.getElementById('cancelButton');
    const confirmationButton = document.getElementById('confirmationButton');
    const bookButton = document.getElementById('bookButton');
    const clearButton = document.getElementById('clearButton');
    const flexRadioDefault1 = document.getElementById('flexRadioDefault1');
    const flexRadioDefault2 = document.getElementById('flexRadioDefault2');
    const flexRadioDefault3 = document.getElementById('flexRadioDefault3');

    cancelButton.addEventListener('click', function () {
        bookButton.setAttribute('class', "btn btn-primary btn-sm disabled")
    });

    confirmationButton.addEventListener('click', function () {
        bookButton.setAttribute('class', "btn btn-primary btn-sm")
    });

    clearButton.addEventListener('click', function () {
        flexRadioDefault1.checked = false;
        flexRadioDefault2.checked = false;
        flexRadioDefault3.checked = false;
    });
});
