import React, { useEffect, useState } from "react";

async function fetcher() {
	await fetch("http://dgice-academy.ucol.mx:3000/userSession", {
		method: "GET",
		mode: "cors",
	})
		.then((res) => res.json())
		.then((data) => {
			localStorage.setItem("name_id", data.name_id);
			localStorage.setItem("session_index", data.session_index);
			localStorage.setItem("displayName", data.attributes.displayName[0]);
			localStorage.setItem("uCorreo", data.attributes.uCorreo[0]);
			localStorage.setItem("uTipo", data.attributes.uTipo[0]);
			localStorage.setItem("uTrabajador", data.attributes.uTrabajador[0]);
			localStorage.setItem("uCuenta", data.attributes.uCuenta[0]);
		})
		.catch(console.log);
}

const buttonNav = () => {

	const [textButton, settextButton] = useState()

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("uCuenta") !== null) {
				settextButton(localStorage.getItem("displayName").toString());
			} else {
				settextButton("Iniciar Sesión");
			}
		}
	}, []);


	return (
		<>
			<button
				className="border border-blue_green bg-blue_green transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-80 rounded-3xl px-8 md:px-12 py-2.5 shadow-md"
				type="button"
				onClick={fetcher}
			>
				<a href="http://dgice-academy.ucol.mx:3000/login">{textButton}</a>
			</button>
		</>
	);
};

export default buttonNav;
