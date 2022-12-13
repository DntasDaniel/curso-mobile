function abrirMenu(){
    let barraMenuAberto = document.getElementById('barra-menu')

    if(barraMenuAberto.style.width == "0px"){
        barraMenuAberto.style.width = "250px";
    }else{
        barraMenuAberto.style.width = "0px";
    }
}