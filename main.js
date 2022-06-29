function navigate() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


function ubahBg(nama_file){
    let path = `images/${nama_file}`
    document.body.style.backgroundImage = `url(${path})`
}