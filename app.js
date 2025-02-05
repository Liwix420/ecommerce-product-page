document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-')) {
        event.preventDefault();
    }
});

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

/* PHOTOS */
const photos = document.querySelectorAll('.img-small');
const mainPhoto = document.querySelector('.img-main img');
const mainPhotoGallery = document.querySelector('.bg .img-main img');
let activePhoto = document.querySelector('.active')

/* p to jest div malego zdjecia */
function ChangePhoto(p) {
    activePhoto.classList.remove('active');
    activePhoto = p;
    activePhoto.classList.add('active');
    mainPhoto.src = activePhoto.querySelector('img').src;
    mainPhotoGallery.src = activePhoto.querySelector('img').src;
}


photos.forEach(photo => {
    photo.addEventListener('click', event => {
        ChangePhoto(photo);
    })
});

const galleryBg = document.querySelector('.bg');

mainPhoto.addEventListener('click', () => {
    console.log(galleryBg);
    galleryBg.style.visibility = 'visible';
})

const xButton = document.querySelector('.x-button');
xButton.addEventListener('click', () => {
    galleryBg.style.visibility = 'hidden';
})

/* CART */
/***********************/
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const countNumber = document.querySelector('.count');
const totalCount = document.querySelector('.count-total');
const totalPrice = document.querySelector('.price-total');
const cartIcon = document.querySelector('.user svg');
const userCart = document.querySelector('.user-cart');

let count = 0;
let price_total = 0;
let count_total = 0;

countNumber.innerHTML = 0;

plus.addEventListener('click', () => {
    count ++;
    countNumber.innerHTML = count;
});

minus.addEventListener('click', () => {
    (count > 0) ? count -- : count = 0;
    countNumber.innerHTML = count;
});

const checkout = document.querySelector('.user-cart .cart');

cartIcon.addEventListener('click', () => {
    if (userCart.style.visibility === 'visible') {
        userCart.style.visibility = 'hidden';
        itemCart.style.visibility = 'hidden';
        checkout.style.visibility = 'hidden';
    } 
    else {
        userCart.style.visibility = 'visible';
        if (count_total > 0) {
            itemCart.style.visibility = 'visible';
            checkout.style.visibility = 'visible';
        }
    } 
});

const itemCart = document.querySelector('.item');
itemCart.style.visibility = 'hidden';

const addCart = document.querySelector('.checkout .cart');
addCart.addEventListener('click', () => {
    count_total += count;
    totalCount.innerHTML = count_total;
    price_total = "$"+count_total*125+".00";
    totalPrice.innerHTML = price_total;
    itemCart.style.display = 'flex';
    if (count > 0){
        if (userCart.style.visibility === 'visible') {
            itemCart.style.visibility = 'visible';
            checkout.style.visibility = 'visible'
        }
        if (count === 1) {
            alert(count+" product added.")
        }
        else {
            alert(count+" products added.")
        }
        
    }
})

const removeCartButton = document.querySelector('.user-cart svg');
removeCartButton.addEventListener('click', () => {
    count_total = 0;
    itemCart.style.visibility = 'hidden'
    checkout.style.visibility = 'hidden';
})