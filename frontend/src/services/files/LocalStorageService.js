export function saveSignupData(userData) {
    console.log("Saving signup data:", userData);
  localStorage.setItem(userData.email, JSON.stringify(userData));
}

export function getSignupData(email) {
    console.log("Retrieving signup data for user=", email);
    const userData = localStorage.getItem(email);
    return userData ? JSON.parse(userData) : null;
}

