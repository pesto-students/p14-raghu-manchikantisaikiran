// Your solution goes here 
function isStrongPassword(password) {
    
    if(typeof password !== 'string'){
        return false;
    }

    return password.length >= 8 && !password.toLowerCase().includes('password') && /[A-Z]/.test(password);
}


// Test Cases
isStrongPassword("Qwerty");
isStrongPassword("passwordQwerty");
isStrongPassword("qwerty123");
isStrongPassword("Qwerty123");