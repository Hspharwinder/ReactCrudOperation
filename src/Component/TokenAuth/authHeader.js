import AuthService from '../../Services/AuthService';

export function AuthHeader() {
    // return authorization header with jwt token
    const currentUser = AuthService.currentUserValue();
    if (currentUser && currentUser.token) {
        return { authorization: `Bearer ${currentUser.token}` };
    } else {
        return {};
    }
}