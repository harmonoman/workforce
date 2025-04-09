```mermaid
erDiagram

Employee ||--|| Computer : "uses"
Employee }o--|| Department : "works in"


Employee {
    int id pk
    string firstName
    string lastName
    int age
    int computerId fk
    int departmentId fk
}

Computer {
    int id pk
    string model
    int year
}

Department {
    int id pk
    string name
}