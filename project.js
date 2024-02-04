const accesskey = "ZNHfwGdFP5dDSSZZw5KqpKrduzLaR96x3ZL4-B_nCTE";
const srchform = document.getElementById("search_form");
const srchbox = document.getElementById("search_box");
const search_result = document.getElementById("images");
const show_more_btn = document.getElementById("more_image");

let keyword = "";
let page = 1;

async function search_images() {
    keyword = srchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results; // Corrected property name

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const image_link = document.createElement("a");
        image_link.href = result.links.html;
        image_link.target = "_blank";
        image_link.appendChild(image);
        search_result.appendChild(image_link);
    });
}

srchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    search_images();
});
