import { DisplayEmployees } from "./employees.js";

const container = document.querySelector("#container");

const render = async () => {

    const employees = await DisplayEmployees();


    const composedHTML = `
        <h2>Three Blind Mice Consulting</h2>
        ${employees}


    `

    container.innerHTML = composedHTML;
}

render();