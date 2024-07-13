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