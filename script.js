function InteractiveSideBar() {  
  const screenWidth = window.innerWidth;
  if (screenWidth <= 700) {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');    
    if (sidebar.style.left === '-300px' || sidebar.style.left === '') {
      sidebar.style.left = '0';
      overlay.style.display = 'block';
    }  
    if (sidebar.style.left === '0px'){
      const elementOverlay = document.querySelector('.overlay');   
      elementOverlay.addEventListener('click', ()=>{
        sidebar.style.left = '-300px';
        overlay.style.display = 'none';     
      });          
    }
  }
}
/* Aquí agregamos el event listener una sola vez cuando se carga el documento */
const elementToChangeLogoHome = document.querySelector('.logo-home');
elementToChangeLogoHome.addEventListener('click', InteractiveSideBar);


function ChangeElements(){
    const screenWidth = window.innerWidth;   
    /*HIJOS*/
    const elementToChangeLogoHome = document.querySelector('.logo-home');
    const elementToChangeMenuHome = document.querySelector('.menu-home');
    const elementToChangeBarraHome = document.querySelector('.barra-home');
    const elementSidebarInter = document.querySelector('.sidebar');
    if(screenWidth <= 700){
        elementToChangeLogoHome.innerHTML = `<img style="width: 30px; " src="assets/img/lista.png">`;
        elementToChangeMenuHome.innerHTML = ``;
        elementSidebarInter.innerHTML = `
          <ul>
          <li style="margin-top: 50px;"><a href="#"><i class="bi bi-cart-check-fill"></i>ORDENA AQUÍ</a></li>
          <li style="margin-top: 50px;"><a href="#"><i class="bi bi-shop-window"></i>MENÚ</a></li>
          <li style="margin-top: 50px;"><a href="#"><i class="bi bi-person-fill"></i>EMPLEOS</a></li>
          </ul>
        `;
        elementToChangeBarraHome.innerHTML = '<img style="width: 80px; " src="assets/img/logo.png">';
    }else{
        elementToChangeLogoHome.innerHTML = `<img style="width: 80px; " src="assets/img/logo.png">`;
        elementToChangeMenuHome.innerHTML = `
            <ul>
            <li><a href="#"><i class="bi bi-cart-check-fill"></i>ORDENA AQUÍ</a></li>
            <li><a href="#"><i class="bi bi-shop-window"></i>MENÚ</a></li>
            <li><a href="#"><i class="bi bi-person-fill"></i>EMPLEOS</a></li>
            </ul>
        `;
        elementSidebarInter.innerHTML = ``;
        elementToChangeBarraHome.innerHTML = '<img style="width: 80px; " src="assets/img/entrega-rapida.png">';
    }       
}   
/* Ejecutar la función al cargar y redimensionar la ventana */
window.onload = ChangeElements;
window.onresize = ChangeElements;

function limpiarInput(elemento) {
  var input = document.getElementById(elemento);
  input.value = '';
}

function closePopupEditar(){
  const CloseBtn = document.querySelector('.custom-overlay-editar');
  CloseBtn.style.display = "none"; 
}

function closePopupIngresar(){
  const CloseBtn = document.querySelector('.custom-overlay-ingresar');
  CloseBtn.style.display = "none"; 
}

function closePopupLogin(){
  const CloseBtn = document.querySelector('.custom-overlay-login');
  CloseBtn.style.display = "none"; 
}

function closePopupPedido(){
  const CloseBtn = document.querySelector('.custom-overlay-pedido');
  CloseBtn.style.display = "none"; 
}

function closePopupRegistrarse(){
  const CloseBtn = document.querySelector('.custom-overlay-registrarse');
  CloseBtn.style.display = "none"; 
}


function IngresarDireccion(){
  const OpenDireccion = document.querySelector('.custom-overlay-ingresar');
  OpenDireccion.style.display = "block"; 
}

function EditarDireccion(){
  const OpenDireccion = document.querySelector('.custom-overlay-editar');
  OpenDireccion.style.display = "block"; 
}

function IngresarLogin(){
  const OpenLogin = document.querySelector('.custom-overlay-login');
  OpenLogin.style.display = "block"; 
}

function pedidoCarrito(){
  const OpenLoginCarrito = document.querySelector('.custom-overlay-pedido');
  OpenLoginCarrito.style.display = "block"; 
}

function OlvidasteContrase(){
  const CloseBtnLogin = document.querySelector('.custom-overlay-login');
  CloseBtnLogin.style.display = "none"; 
}

function direccionIngresar(){
  const CloseBtnLogin = document.querySelector('.custom-overlay-ingresar');
  CloseBtnLogin.style.display = "none";
  const OpenBtnDireccionIngresar = document.querySelector('.custom-overlay-editar');
  OpenBtnDireccionIngresar.style.display = "block"; 
}

function Registrarse(){
  const CloseBtnLogin = document.querySelector('.custom-overlay-login');
  CloseBtnLogin.style.display = "none"; 

  const OpenBtnRegistrarse = document.querySelector('.custom-overlay-registrarse');
  OpenBtnRegistrarse.style.display = "block"; 
}