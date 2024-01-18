const nav = document.querySelector('.data-nav');
const navToggles = document.querySelectorAll('.data-nav-toggle');



toggleBtn .onClick = function () {

}


// wishlist button toggle
const whishlistBtns = document.querySelectorAll('.data-whish-btn');
for(let i = 0; i<whishlistBtns.length; i++) {
  whishlistBtns(i).addEventListener('.click', function() {
    toggleElem(this);
  })
}