import axios from 'axios';
import swal from "sweetalert";
import {
    loginConfirmedAction,
    logout,
} from '../store/actions/AuthActions';

export function signUp(email, password) {
    //axios call

    const postData = {
        email,
        password,
        returnSecureToken: true,
    };

    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        postData,
    );
}

export function login(email, password) {
    const postData = {
        "username": email,
        "password": password,
        returnSecureToken: true,
    };

    return axios.post(
        `https://tutorials.digitalbrilliancehour.com/wp-json/api/v1/token`,
        postData,
    );
}

export function formatError(errorResponse) {
    switch (errorResponse.error.message) {
        case 'EMAIL_EXISTS':
            //return 'Email already exists';
            swal("Oops", "Email already exists", "error");
            break;
        case 'EMAIL_NOT_FOUND':
            //return 'Email not found';
           swal("Oops", "Email not found", "error",{ button: "Try Again!",});
           break;
        case 'INVALID_PASSWORD':
            //return 'Invalid Password';
            swal("Oops", "Invalid Password", "error",{ button: "Try Again!",});
            break;
        case 'USER_DISABLED':
            return 'User Disabled';

        default:
            return '';
    }
}

export function saveTokenInLocalStorage(tokenDetails) {
    console.log(tokenDetails)
    let diff = tokenDetails.expires_in - tokenDetails.iat;
    tokenDetails.expireDate = new Date(
        new Date().getTime() + diff,
    );
    tokenDetails.displayName = "";
    tokenDetails.expiresIn = diff;
    tokenDetails.idToken = tokenDetails.jwt_token;
    tokenDetails.kind = "identitytoolkit#VerifyPasswordResponse";
    tokenDetails.localId = "qmt6dRyipIad8UCc0QpMV2MENSy1";
    tokenDetails.refreshToken = "APJWN8e1WfT_lvydUeV_gMdi_6p7Y4wcO-mJhjHj05IALC1GP-EbVDOlCAIGcIPnjS9IhOsxyIVrS3NfnoCCmaJJVemnteupn0SnJfakckijjbUfs0c2JYQFv-cZIX6KeSOUysinw29J4s9_-1sIuEYA5x9BV4xebgEQC1_t4Uf08h-oZBWGaA_rQgGHKUOwgVNkNaVDP3R0ieYrXnKNvofQ-4-AH2XoFQ";
    tokenDetails.registered = true;
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(logout(history));
        return;
    }
    dispatch(loginConfirmedAction(tokenDetails));

    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, history);
}
