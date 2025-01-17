exports.validname=(name)=>{
    const validname=/^[a-zA-Z\s'-]+$/
    return validname.test(name)
}
exports.validemail=(email)=>{
    const validemail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return validemail.test(email)
}
exports.validpassword=(password)=>{
    const validpassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return validpassword.test(password)
}