import { logOut } from "../lib/auth";
//muro personal
export const Wall = (onNavigate) => {
  const WallDiv = document.createElement('div');
  WallDiv.className = 'wall-div'

  const getUser = localStorage.getItem('user');
  console.log("Obteniendo el usuario en local storage..", localStorage.getItem('user'));

  /* Cuando en localStorate["Usuario"] revisamos en firebase que esa id exista y traemos los datos del usuario, mostrandole el timeline  */
  if (getUser) {
    // Verificar con firebase...

    // Si no es válido eliminar todo localStorage con localStorage.clear() y enviar de nuevo a la misma página.npm s

    const loggedText = document.createElement('h2');
    loggedText.textContent = 'Hola soy wall, bienvenid@ ' + getUser;

    const logOutButton = document.createElement('button');
    logOutButton.textContent = 'Cerrar sesión';
    logOutButton.className = 'logout-button';
    logOutButton.addEventListener('click', () => {
      logOut();
      onNavigate('/');
    });

    WallDiv.appendChild(loggedText);
    WallDiv.appendChild(logOutButton);
  } else {
    /* El usuario NO está logueado, por lo tanto sólo ve una página estática en la que le decimos que se registre o inicie sesión */
    const notLoggedText = document.createElement('h2');
    notLoggedText.textContent = 'Hola soy home, no estás loguead@';
    const logInButton = document.createElement('button');
    logInButton.textContent = 'Inicio';
    const registerButton = document.createElement('button');
    registerButton.textContent = 'Registrar';

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons-div';
    buttonsDiv.appendChild(logInButton);
    buttonsDiv.appendChild(registerButton);
    WallDiv.appendChild(notLoggedText);
    WallDiv.appendChild(buttonsDiv);

    logInButton.addEventListener('click', () => { onNavigate('/') });
    registerButton.addEventListener('click', () => { onNavigate('/register') });
  }
  // TO DO inputs de email y password
  return WallDiv;
}
