const {kalkulator} = require("./rumus.js");
const readline = require ("readline");

const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Input angka pertama
inputUser.question("Masukkan angka pertama: ", (angka1) => {
    // Input angka kedua
    inputUser.question("Masukkan angka kedua: ", (angka2) => {
        // Input operator
        inputUser.question("Masukkan operator (+, -, *, /): ", (operator) => {

            // function kalkulator nilainya disimpan pada variabel hasil
            const hasil = kalkulator(
                parseFloat(angka1),
                parseFloat(angka2),
                operator
            );
            //print variabel hasil
            console.log(`Hasil: ${hasil}`);
            inputUser.close();
        });
    });
});