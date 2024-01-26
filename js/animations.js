const bar = document.querySelector(".container__bar");

setTimeout(() => {
    bar.style.setProperty("--progress", "75%");
}, 300);