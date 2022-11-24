let counter = 0; // counter is the variable;
function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
    if (counter % 10 == 0) {
        alert(`the count is ${counter}`);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
})