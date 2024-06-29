const search = document.querySelector(".search");
const btn = document.getElementById('btn');
const s_btn = document.getElementById('s-btn');
const s_results = document.querySelector('.s-results');
const body = document.getElementById("body");
const result_container = document.querySelector(".results");

let keyword = '';
let page = 1;
let results;

async function searchImages() {
    keyword = search.value;
    const url = 'https://api.unsplash.com/search/photos?page=';

    const response = await fetch(url + page + '&query=' + keyword + '&client_id=4ZHOKNdoLrvMH8JiVF_8Dxqhbd2XZnPXbCbqYDG3rAQ');
    const data = await response.json();

    console.log(search.value);

     results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        s_results.appendChild(imagelink);
    })
}

btn.addEventListener("click", (e) => {
    s_results.innerHTML="";
    e.preventDefault();
    page = 1;
    body.style.height = "auto";
    result_container.style.display = "flex";
    searchImages();
});

s_btn.addEventListener("click", (e) => {
    e.preventDefault();
    page++;
    searchImages();
});