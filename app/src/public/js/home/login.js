"use strict";

const username = document.querySelector('#username'),
    psword = document.querySelector('#psword'),
    loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        username : username.value,
        psword : psword.value
    };

    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req)
    });
}