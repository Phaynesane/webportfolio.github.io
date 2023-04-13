
function zoomImage(img) {
    // Create zoomed-in image
    var zoomedImg = document.createElement("img");
    zoomedImg.src = img.src;
    // Create zoomed-in container
    var zoomedContainer = document.createElement("div");
    zoomedContainer.classList.add("zoomed");
    zoomedContainer.appendChild(zoomedImg);
    // Add zoomed-in container to body
    document.body.appendChild(zoomedContainer);
    // Remove zoomed-in container on click
    zoomedContainer.addEventListener("click", function() {
      document.body.removeChild(zoomedContainer);
    });
  }