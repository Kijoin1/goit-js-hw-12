export default function searchImgByValue(value) {
    const URL = "https://pixabay.com/api/"
    const params = new URLSearchParams({
        key: "45153082-ab6ff3a7cbec10f23fcc6c616",
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    
    return fetch(`${URL}?${params}`)
    .then((response) => {
    if (!response.ok) {
        throw new Error(response.status);
    }
        return response.json();
    })
    .catch((error) => {
    console.log(error);
    })
    }