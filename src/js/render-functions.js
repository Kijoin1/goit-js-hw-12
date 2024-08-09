import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createListImg(data) {
const galleryList = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

let imgMarkup = data.hits.map((image) => `
<div class='gallery-div'>
<a href= "${image.largeImageURL}">
<img class= "gallery-img" src = "${image.webformatURL}" alt= "${image.tags}"></img>
</a>
<div class="text-div">
<div class="text-item"><h5 class="text-title">Likes</h5><p class="text">${image.likes}</p></div>
<div class="text-item"><h5 class="text-title">Views</h5><p class="text">${image.views}</p></div>
<div class="text-item"><h5 class="text-title">Comments</h5><p class="text">${image.comments}</p></div>
<div class="text-item"><h5 class="text-title">Downloads</h5><p class="text">${image.downloads}</p></div>
</div>
</div>`).join('');

galleryList.insertAdjacentHTML('beforeend', imgMarkup);
lightbox.refresh();
}

export function removeListImg() {
const galleryList = document.querySelector('.gallery');
galleryList.innerHTML = '';
}

export function loading() {
const loading = document.querySelector('.loading-div');
loading.innerHTML = '<span class="loader"></span>';
}

export function removeLoading() {
const loading = document.querySelector('.loading-div');
loading.innerHTML = '';
}