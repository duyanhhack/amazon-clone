const url = 'https://fakestoreapi.com/products';

export var all = []

fetch(url)
    .then(res => res.json())
    .then(json => all = json)
    .catch(err => console.error('error:' + err));