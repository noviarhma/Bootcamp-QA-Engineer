//Create function kalkulator dengan 3 paramenter
function kalkulator(angka1, angka2, operator) {
    //Create condition untuk parameter operator
    switch (operator) {
        case '+':
            return angka1 + angka2;
            break;
        case '-':
            return angka1 - angka2;
            break;
        case '*':
            return angka1 * angka2;
            break;
        case '/':
            return angka1 / angka2;
            break;
        default:
            return("Perhitungan tidak dapat dilakukan");
    }
}

//Ekspor function kalkulator
module.exports = {kalkulator};