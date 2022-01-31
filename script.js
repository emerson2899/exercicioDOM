function verde() {
    document.querySelector('#nome').classList.remove('azul');
    document.querySelector('#nome').classList.remove('vermelho');
    document.querySelector('#nome').classList.add('verde');
    document.querySelector('#butverd').classList.add('verde');
    document.querySelector('#butvermelho').classList.remove('vermelho');
    document.querySelector('#butazul').classList.remove('azul');

} 
function vermelho(){
    document.querySelector('#nome').classList.remove('azul');
    document.querySelector('#nome').classList.remove('verde');
    document.querySelector('#nome').classList.add('vermelho');
    document.querySelector('#butvermelho').classList.add('vermelho');
    document.querySelector('#butazul').classList.remove('azul');
    document.querySelector('#butverd').classList.remove('verde');

}

function azul(){
    document.querySelector('#nome').classList.remove('verde');
    document.querySelector('#nome').classList.remove('vermelho');
    document.querySelector('#nome').classList.add('azul');
    document.querySelector('#butazul').classList.add('azul');
    document.querySelector('#butverd').classList.remove('verde');
    document.querySelector('#butvermelho').classList.remove('vermelho');


}