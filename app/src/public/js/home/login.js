"use strict";

const username = document.querySelector('#username'),
    psword = document.querySelector('#psword'),
    loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', login);

function login() {
    console.log(username.value);
}