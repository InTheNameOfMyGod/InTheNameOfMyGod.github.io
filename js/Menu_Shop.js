document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
    var modalText = document.getElementById('modal-text');
    var galleryImages = document.querySelectorAll('.produk img');
    var closeBtn = document.getElementById('close-modal');
    var categoryDropdown = document.getElementById('kategoriDropdown');
    var addToCartBtn = document.createElement('button');

    // buat icon keranjang
    var cartIcon = document.createElement('i');
    cartIcon.classList.add('fas', 'fa-shopping-cart');

    addToCartBtn.appendChild(cartIcon);
    addToCartBtn.appendChild(document.createTextNode('Beli'));

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = image.src;

            var nama = image.nextElementSibling.querySelector('span').textContent.trim();

            modalText.innerHTML = `
                <p style="color: black;">Nama Produk: ${nama}</p>
            `;
            modalText.appendChild(addToCartBtn.cloneNode(true));
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalText.removeChild(modalText.lastChild);
    });

    categoryDropdown.addEventListener('change', function () {
        var selectedCategory = categoryDropdown.value;
        window.location.href = selectedCategory;
    });
});
