export const DisplayEmployees = async () => {
    const employees = await fetch("http://localhost:8088/employees?_expand=computer").then(res => res.json());

    let employeeHTML = `<ul class="employee-list">`

    const employeeArray = employees.map((employee) => {
        return `
            <li class="employee-card">
                <h3>${employee.firstName} ${employee.lastName}</h3>
                <p>Age: ${employee.age}</p>
                <p>Computer Model: ${employee.computer.model}</p>
                <p>Manufacture Year: ${employee.computer.year}</p>
            </li>
        `
    }).join("");

    employeeHTML += employeeArray + `</ul>`;

    return employeeHTML;
}