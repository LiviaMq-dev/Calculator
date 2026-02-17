let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {

        let value = e.target.innerHTML;

        if (value === '=') {

            if (string === "") return;

            try {
                let result = eval(string);

                if (isNaN(result) || result === Infinity || result === -Infinity) {
                    input.value = "Indefinite";
                    string = "";
                } else {
                    string = result.toString();
                    input.value = string;
                }

            } catch {
                input.value = "Erro";
                string = "";
            }

        } 
        
        else if (value === 'AC') {
            string = "";
            input.value = "";
        } 
        
        else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
        
        else {
            string += value;
            input.value = string;
        }

    });
});

let lastTouchEnd = 0;

document.addEventListener('touchend', function (event) {
    let now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

