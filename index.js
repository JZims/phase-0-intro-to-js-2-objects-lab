const employee = {
    name: "Josh", 
    streetAddress: "1561 E. 16th St."
}

function updateEmployeeWithKeyAndValue(employee, key, value){

    const  updatedEmployeeNondestructively = Object.assign({}, employee, {[key]: value});
    return updatedEmployeeNondestructively;
    
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployeeDestructively = Object.assign(employee, {[key]: value});
    return updatedEmployeeDestructively;
}

function deleteFromEmployeeByKey(employee, key){
    
    const nondestructiveDeletion = {...employee};
    delete nondestructiveDeletion.name;
    return nondestructiveDeletion;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    
    //const nondestructiveDeletion = {...employee};
    delete employee.name;
    return employee;
} 