function redireccionar () {
    const curso = document.getElementById('cursoInput').ariaValueMax;

    let link = "";

    if (pais.toLowerCase() === "Colombia") {
        link = "/Colombia/" + encodeURIComponent(curso);
    } else if (pais.toLowerCase() === "Ecuador") {
        link = "/Ecuador/"
    } else {
        alert("Selecione un pais");
        return;
    }

    window.location.href = link;
}


var modal = document.getElementById("myModal");
window.onload = function() {
  modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function acceptPrivacy() {
  modal.style.display = "none";
}
