const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            // Perform calculation when '=' is clicked
            display.textContent = eval(display.textContent);
        } else if (button.textContent === 'C') {
            // Clear the display
            display.textContent = '0';
        } else {
            // Append clicked button text to display
            if (display.textContent === '0') {
                display.textContent = button.textContent;
            } else {
                display.textContent += button.textContent;
            }
        }
    });
});
