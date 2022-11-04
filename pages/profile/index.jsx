import React from 'react'



export default function Login(){

  async function onLoad() {
    await fetch("http://dgice-academy.ucol.mx:3000/userSession", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((user) => {
        const isLogged = localStorage.getItem("name_id");
        if (isLogged) {
          console.log('Logeado');
          return;
        } else {
          console.log(user);
          localStorage.setItem("name_id", user.name_id);
          localStorage.setItem("session_index", user.session_index);
          localStorage.setItem("displayName", user.attributes.displayName[0]);
          localStorage.setItem("uCorreo", user.attributes.uCorreo[0]);
          localStorage.setItem("uTipo", user.attributes.uTipo[0]);
          localStorage.setItem("uTrabajador", user.attributes.uTrabajador[0]);
          localStorage.setItem("uCuenta", user.attributes.uCuenta[0]);
          return;
        }
      })
      .catch(console.log);
  
    return;
  }

  onLoad();

  return (
    <>
    <div className='flex justify-center items-center py-3'>
      <p>HOLA</p>
      <button className='border border-blue_green bg-blue_green transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-80 rounded-3xl px-8 md:px-12 py-2.5 shadow-md'type='button' onClick={logOut}>Cerrar sesión</button>
    </div>
    </>
  )
}

async function logOut() {
  const name_id = localStorage.getItem("name_id");
  const session_index = localStorage.getItem("session_index");
  await fetch(
    `http://dgice-academy.ucol.mx:3000/logout/${name_id}/${session_index}`,
    {
      method: "GET",
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then(({ status }) => {
      localStorage.clear();
      if (status)
        window.location.href = "http://localhost:3001/";
    });
}

