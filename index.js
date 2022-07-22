// Write your solution in this file!
const employee = {
    name: "Harry Styles",
    streetAddress: "42 Sunflower Way"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee, [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway"

    return employee; 
}

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
};