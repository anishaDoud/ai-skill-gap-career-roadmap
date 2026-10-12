import {saveSignupData, getSignupData} from '../files/LocalStorageService';

export function signup(userData,formData ,setErrorMessage){
     if (
        !formData.fullName ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setErrorMessage("Please fill all fields.");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

    saveSignupData(userData);
}

export function login(email, password){
    if((!email || !password)){
        throw new Error("Email and password are required.");
    }else{
        const userData = getSignupData(email);
        if(!userData){
            throw new Error("User not found.");
        }else if(userData.password !== password){
            throw new Error("Incorrect password.");
        }else{
            return userData;
        }
    }
}