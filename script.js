function generate() {
    let dictionary = "";
    const lowercaseCb = document.getElementById("lowercaseCb");
    const uppercaseCb = document.getElementById("uppercaseCb");
    const digitsCb = document.getElementById("digitsCb");
    const specialsCb = document.getElementById("specialsCb");
    const length = document.querySelector('input[type="range"]').value;

    if (lowercaseCb.checked) dictionary += "qwertyuiopasdfghjklzxcvbnm";
    if (uppercaseCb.checked) dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
    if (digitsCb.checked) dictionary += "1234567890";
    if (specialsCb.checked) dictionary += "!@#$%^&*()_+-={}[];<>:";

    if (length < 1 || dictionary.length === 0) return;

    let password = "";
    for (let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * dictionary.length);
        password += dictionary[pos];
    }

    document.querySelector('input[type="text"]').value = password;
}

const elements = [...document.querySelectorAll('input[type="checkbox"], button.generate')];
elements.forEach(elem => elem.addEventListener("click", generate));

document.querySelector('input[type="range"]').addEventListener("input", e => {
    document.querySelector("div.range span").innerHTML = e.target.value;
    generate();
});

document.querySelector("div.password button").addEventListener("click", () => {
    const pass = document.querySelector('input[type="text"]').value;
    navigator.clipboard.writeText(pass).then(() => {
        const copyButton = document.querySelector("div.password button");
        copyButton.innerHTML = "copied!";
        setTimeout(() => {
            copyButton.innerHTML = "copy";
        }, 1000);
    });
});

generate();
