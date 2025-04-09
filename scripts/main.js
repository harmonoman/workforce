import { DisplayEmployees } from "./employees.js";

const container = document.querySelector("#container");

const render = async () => {

    const employees = await DisplayEmployees();

    const composedHTML = `
        <h1>Three Blind Mice Consulting</h1>
        ${employees}
    `

    container.innerHTML = composedHTML;
}

render();