import fetch from "node-fetch";
import { expect } from "chai";
import Ajv from "ajv";
import schema_inputnewproduct from "../schema/reqresSchema.js";

describe("API Test Suite coba", function(){

    //API method Get 
    it("Get all users (collections)", async function() {
        const hasil = await fetch(
            "https://reqres.in/api/collections/users/records?project_id=30643",
            {
                headers: {
                    "x-api-key": "pro_ed81ed9034ba79db27db12e0a551579b29b2d9dcb3b102d726b3fe671f70fa42"
                }
            }
        );
        expect(hasil.status).to.equal(200);

    });

    //req body 
    it("Input new Product", async function(){
        const newPost = {
            data: {
                name: "Smart watch",
                price: 15,
                category: "New",
                in_stock: true
            }
        };

        //API method post
        const hasilpost = await fetch('https://reqres.in/api/collections/products/records?project_id=30643', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "pro_ed81ed9034ba79db27db12e0a551579b29b2d9dcb3b102d726b3fe671f70fa42"
            },
            body: JSON.stringify(newPost)
        });

        expect(hasilpost.status).to.equal(201);

        const body = await hasilpost.json();
        console.log(body);


        // validasi json schema
        const ajv = new Ajv()
        const validate = ajv.compile(schema_inputnewproduct)
        const hasil_validasi = validate(body)

        expect(hasil_validasi, `Schema validation error: ${JSON.stringify(validate.errors)}`).to.be.true;
    });
});