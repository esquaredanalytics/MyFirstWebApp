const btn = document.getElementById("newImageBtn");
const img = document.getElementById("photo");
const label = document.getElementById("imageCountLabel");

let imageCount = 0;

btn.addEventListener("click", () => {
  // Add a unique query string to avoid cached images
  img.src = `https://picsum.photos/600/400?random=${Date.now()}`;

  // Update the image count and update the label
  imageCount++;
  label.textContent = `Number of Images Shown: ${imageCount}`;
});

