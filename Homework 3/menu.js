const {kalkulator} = require("./rumus.js");
const readline = require ("readline");

const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Input angka pertama
inputUser.question("Masukkan angke pertama: ", (angka1) => {
    //Input angka kedua
    inputUser.question("Masukkan angka kedua: ", (angka2) => {
        //Input operator
        inputUser.question("Masukkan operator (+, --, *, /): ", (operator) => {

            //Function kalkulator nilainya disimpan pada variable hasil
            const hasil = kalkulator(
                parseFloat(angka1),
                parseFloat(angka2),
                operator
            );
            //Print variabel hasil
            console.log(`Hasil: ${hasil}`);
            inputUser.close();
        });
    });
});