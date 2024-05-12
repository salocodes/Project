async function fetchProjects() {
    try {

        const endpoint = await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects');
        const valores= await endpoint.json();

        const api = valores[valores.length -1];

        if (api.uuid === "1") {
           const apiInfo = document.createElement('div');
           apiInfo.innerHTML =`
           <h3>Name: ${api.name}</h3>
           <p>Description: ${api.description}</p>
           <p>Content: ${api.content}</p>
           <img src="${api.image}" alt="Imagen del proyecto" style="max-width: 100px">
           <p>Conpleted_on: ${api.completed_on}</p>`;

           document.body.appendChild(apiInfo); 
        } else {
            console.error("No se ha obtenido la uuid 1 desde la API");
        }

        const restoApis = valores.slice(0,3);
        restoApis.forEach((api) => {
            const projectElement = document.createElement("div");
            projectElement.innerHTML = `
            <h2>Otros proyectos: </h2>
            <h3> Name: ${api.name}</h3>
            <p>Description: ${api.description}</p>
            <p>Content: ${api.content}</p>
            <img src=${api.image}" alt = "Imagen del proyecto" style="max-width: 100px">
            <p>Conpleted_on: ${api.completed_on}</p>`;

            document.body.appendChild(projectElement);

        })

    } catch (error) {
        console.Error("No se han obtenido datos desde la API", error);
    }
}

fetchProjects();