// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener la imagen del modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Añadir evento de clic a cada imagen de la galería
var images = document.getElementsByClassName("gallery-item");
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera de la imagen del modal, cierra el modal
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
