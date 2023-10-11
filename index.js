// Write your solution in this file!
let employee={name:"John",streetAddress:285};
function updateEmployeeWithKeyAndValue(employee, key, value) {
let newemp ={...employee};
newemp={name:"Sam",streetAddress:"11 Broadway"}

return newemp;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    Object.assign(employee, {name:"Sam",streetAddress:"12 Broadway"});
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let updEmp={...employee};
    delete updEmp.name;
    return updEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}
