//Exercise 1
const employee = {
    name: 'James Bond',
    streetAddress: 'Kiambu road'
};

//Exercise 2
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value
    };
}

//Exercise 3
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

//Exercise 4
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

//Exercise 5
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

