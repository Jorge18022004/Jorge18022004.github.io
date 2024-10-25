function showDescription() {
    document.getElementById('description').style.display = 'block';
}

function toggleDescription() {
    const description = document.getElementById('description');
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}

function highlightPrice() {
    const price = document.getElementById('price');
    price.style.fontSize = '36px';
    price.style.color = 'red';
}