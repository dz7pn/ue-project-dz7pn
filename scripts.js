$(document).ready(function () {
    $('.datepicker').datepicker({
        format: 'yyyy/mm/dd', // Set your desired date format
        autoclose: false
    });

    // Add event listeners to "Book Now" buttons for each hotel
    $('#book-button-1').click(function () {
        showDatePicker('check-in-1');
    });

    $('#book-button-2').click(function () {
        showDatePicker('check-in-2');
    });

    // Add more event listeners for additional hotels if needed
});
