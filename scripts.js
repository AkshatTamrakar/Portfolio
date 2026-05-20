let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    })
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000)

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = window.offsetTop - 150;
        let height = window.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })
}

document.querySelectorAll('.progress div').forEach(bar => {
    bar.style.width = bar.style.width;
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Java Popup
const javaBtn = document.querySelector("#open-java-popup");
if (javaBtn) {
    javaBtn.addEventListener("click", function () {
        document.querySelector("#java-popup").classList.add("active");
    });
}

// Android Popup
const androidBtn = document.querySelector("#open-android-popup");
if (androidBtn) {
    androidBtn.addEventListener("click", function () {
        document.querySelector("#android-popup").classList.add("active");
    });
}

// Game Popup
const gameBtn = document.querySelector("#open-game-popup");
if (gameBtn) {
    gameBtn.addEventListener("click", function () {
        document.querySelector("#game-popup").classList.add("active");
    });
}


// Open popup
// document.querySelectorAll(".open-project").forEach(btn => {
//   btn.addEventListener("click", () => {
//     const project = btn.getAttribute("data-project");
//     document.getElementById(project + "-popup").classList.add("active");
//   });
// });

document.querySelectorAll(".open-project").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault(); // 🔥 important for mobile
        const id = btn.dataset.project + "-popup";
        const popup = document.getElementById(id);

        if (popup) {
            popup.classList.add("active");
            document.body.classList.add("popup-open");
        }
    });
});

// Close popup
// document.querySelectorAll(".popup .close-btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     btn.parentElement.classList.remove("active");
//   });
// });

document.querySelectorAll(".popup .close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const popup = btn.closest(".popup");
        popup.classList.remove("active");
        document.body.classList.remove("popup-open");
    });
});

document.querySelectorAll(".popup").forEach(popup => {
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("active");
            document.body.classList.remove("popup-open");
        }
    });
});

const boxes = document.querySelectorAll(".projects-container .box");

boxes.forEach(box => {
    const video = box.querySelector(".project-video");

    if (video) {
        box.addEventListener("mouseenter", () => {
            video.style.opacity = "1";
            video.play();
        });

        box.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
            video.style.opacity = "0";
        });
    }
});
