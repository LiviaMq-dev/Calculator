const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('.keypad button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const value = button.textContent.trim();

        if (value === '=') {

            if (string === "") return;

            try {
                const result = eval(string);

                if (!Number.isFinite(result)) {
                    input.textContent = "Indefinite";
                    string = "";
                } else {
                    string = result.toString();
                    input.textContent = string;
                }

            } catch {
                input.textContent = "Erro";
                string = "";
            }

        } 
        
        else if (value === 'AC') {
            string = "";
            input.textContent = "0";
        } 
        
        else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.textContent = string || "0";
        } 
        
        else {
            string += value;
            input.textContent = string;
        }

    });
});

