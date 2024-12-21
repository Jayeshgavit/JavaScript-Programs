const fileInput = document.getElementById('file-input');
const image = document.getElementById('image');

// Load Image
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            image.src = e.target.result;
            image.style.filter = 'none';
        };
        reader.readAsDataURL(file);
    }
});

// Apply Filters
function applyFilter(filter) {
    image.style.filter = filter;
}

// Download Image
function downloadImage() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    ctx.filter = getComputedStyle(image).filter;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg');
    link.download = 'filtered-image.jpg';
    link.click();
}
