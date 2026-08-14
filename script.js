/* =====================================================
   PAGE NAVIGATION
===================================================== */

function goToPage(pageNumber) {

    // Find current page
    const currentPage =
        document.querySelector(".page.active");

    // Find next page
    const nextPage =
        document.getElementById(
            "page" + pageNumber
        );


    // Stop videos on the current page
    stopVideos();


    // Hide current page
    if (currentPage) {

        currentPage.classList.remove("active");

    }


    // Small delay for smooth transition

    setTimeout(() => {

        nextPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 250);

}


/* =====================================================
   STOP VIDEOS WHEN CHANGING PAGE
===================================================== */

function stopVideos() {

    const videos =
        document.querySelectorAll("video");


    videos.forEach(video => {

        video.pause();

    });

}


/* =====================================================
   EXTERNAL VIDEO PLAY BUTTONS
   Opens provided URLs in a new tab when play buttons are clicked
===================================================== */

document.addEventListener('click', function (e) {

    const btn = e.target.closest('.play-button');

    if (!btn) return;

    const url = btn.getAttribute('data-url');

    if (url) {

        // Open the Drive link in a new tab/window securely
        window.open(url, '_blank', 'noopener');

    }

});


/* =====================================================
   MEMORY POPUP
===================================================== */

const memoryPopup =
    document.getElementById(
        "memoryPopup"
    );


const popupContent =
    document.getElementById(
        "popupContent"
    );


/*
    These are the popup contents.

    You can change the title/message later.
*/

const memories = {

    1: {
        image: "assets/Photos/📷 memory1.jpg.jpeg",
        title: "YOUR MEMORY 1 TITLE ❤️",
        text: "WRITE YOUR FULL STORY ABOUT MEMORY 1 HERE."
    },

    2: {
        image: "assets/Photos/📷 memory2.jpg.jpg",
        title: "YOUR MEMORY 2 TITLE ✨",
        text: "WRITE YOUR FULL STORY ABOUT MEMORY 2 HERE."
    },

    3: {
        image: "assets/Photos/📷 memory3.jpg.jpg",
        title: "YOUR MEMORY 3 TITLE ❤️",
        text: "WRITE YOUR FULL STORY ABOUT MEMORY 3 HERE."
    },

    4: {
        image: "assets/Photos/📷 memory4.jpg.jpg",
        title: "YOUR MEMORY 4 TITLE 🌙",
        text: "WRITE YOUR FULL STORY ABOUT MEMORY 4 HERE."
    },

    5: {
        image: "assets/Photos/📷 memory5.jpg.jpg",
        title: "YOUR MEMORY 5 TITLE 🥹",
        text: "WRITE YOUR FULL STORY ABOUT MEMORY 5 HERE."
    },

    6: {
        image: "assets/Photos/📷 memory6.jpg.png",
        title: "YOUR MEMORY 6 TITLE 💕",
        text: "WRITE YOUR FULL STORY ABOUT MEMORY 6 HERE."
    },

    7: {
        image: "assets/Photos/📷 memory7.jpg.jpg",
        title: "YOUR MEMORY 7 TITLE ❤️‍🩹",
        text: "WRITE YOUR FULL STORY ABOUT MEMORY 7 HERE."
    }

};


/* =====================================================
   OPEN MEMORY
===================================================== */

function openMemory(number) {

    const memory =
        memories[number];


    popupContent.innerHTML = `

        <img
            src="${memory.image}"
            alt="${memory.title}"
        >

        <h2 style="margin-top:20px;">
            ${memory.title}
        </h2>

        <p style="
            margin-top:15px;
            color:#bbb;
            line-height:1.8;
        ">
            ${memory.text}
        </p>

    `;


    memoryPopup.classList.add("show");

}


/* =====================================================
   CLOSE MEMORY
===================================================== */

function closeMemory() {

    memoryPopup.classList.remove(
        "show"
    );

}


/* =====================================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
===================================================== */

memoryPopup.addEventListener(
    "click",
    function (event) {

        if (
            event.target === memoryPopup
        ) {

            closeMemory();

        }

    }
);


/* =====================================================
   INITIAL PAGE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        goToInitialPage();

    }
);


function goToInitialPage() {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(
        page => page.classList.remove("active")
    );


    document
        .getElementById("page1")
        .classList.add("active");

}