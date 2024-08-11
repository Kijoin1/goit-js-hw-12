import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import createHTTPRequest from './js/pixabay-api.js'
import {createListImg, removeListImg, loading, removeLoading, ButtonMethods} from './js/render-functions.js'

const form = document.querySelector('.result-receiver')
const input = document.querySelector('#search')
const button = document.querySelector('[data-start]')
const buttonLoad = document.querySelector('.load-button')
// const elementImg = document.querySelector('.gallery-div')

let value = '';
let totalHits = 0;
let currentPage = 1;
let totalHitsToLoad = 0;

const loadMoreButton = new ButtonMethods(buttonLoad, 'is-hidden');
loadMoreButton.hide();

checkButton()

document.addEventListener('input', checkButton)
document.addEventListener('submit', searchImg)
buttonLoad.addEventListener('click', loadMore)



// function

function checkButton() {
if (input.value.trim().length === 0){
button.setAttribute('disabled', '');
} else {
button.removeAttribute('disabled');
}
}


function searchImg(e) {
e.preventDefault();
removeListImg();

loading()

value = input.value

const params = {
    params: {
    key: "45153082-ab6ff3a7cbec10f23fcc6c616",
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
    maxPage: 0,
    }
}



createHTTPRequest(params)
.then((data)=> {
    totalHits = data.totalHits
    if (data.hits.length === 0) {
        loadMoreButton.hide()
        loadMoreButton.disable()
        throw new Error('No images found');
    }else{
        loadMoreButton.show()
        loadMoreButton.enable()
        createListImg(data)
    }
})
.catch(()=>{
 iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
    color: 'red',
    image: '/src/img/cat_error.jpg',
    imageWidth: 60,
    position: 'topRight'
})
})
.finally(() => {
if (currentPage * 15 >= totalHits) {
    loadMoreButton.disable()
    loadMoreButton.hide()
}
removeLoading()
form.reset()
})
currentPage = 1
}

function loadMore(){

loading()

const params = {
    params: {
    key: "45153082-ab6ff3a7cbec10f23fcc6c616",
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
    }
}

createHTTPRequest(params)
.then((data)=>{
    console.log(data)
    totalHits = data.totalHits
removeLoading()

try {
    createListImg(data)
if (currentPage * 15 >= totalHits) {
    throw new Error('No images found');
}
    loadMoreButton.show()
    loadMoreButton.enable()
    currentPage += 1
}catch (error) {
    loadMoreButton.disable()
    loadMoreButton.hide()
    iziToast.error({
    message: "We're sorry, but you've reached the end of search results.",
})}
})
}
