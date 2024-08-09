import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import searchImgByValue from './js/pixabay-api.js'
import {createListImg, removeListImg, loading, removeLoading} from './js/render-functions.js'

const input = document.querySelector('#search')
const button = document.querySelector('[data-start]')

checkButton()

document.addEventListener('input', checkButton)
document.addEventListener('submit', searchImg)

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

let value = input.value

loading()

return searchImgByValue(value)
.then((data)=> {
    if (data.hits.length === 0) {
        throw new Error('No images found');
    }else{
        return createListImg(data) 
    }
})
.catch(()=> {
    return iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
    color: 'red',
    image: '/src/img/cat_error.jpg',
    imageWidth: 60,
    position: 'topRight'
})}).finally(removeLoading())
}