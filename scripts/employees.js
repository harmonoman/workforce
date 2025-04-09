export const DisplayEmployees = async () => {
    const employees = await fetch("http://localhost:8088/employees?_expand=computer&_expand=department").then(res => res.json());

    const employeeHTML = employees.map((employee) => {
        return `
            <div class="employee">
                <header class="employee_name">
                    <h2>${employee.firstName} ${employee.lastName}</h2>
                </header>
                <section class="employee_computer">
                    Currently using a ${employee.computer.year} ${employee.computer.model}
                </section>
                <section class="employee_department">
                    Works in the ${employee.department.name} department
                </section>
            </div>
        `
    }).join("");

    return employeeHTML;
}