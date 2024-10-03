import { AUTH_ENDPOINTS } from "@/constants";
import AppService from "./app.service";

class AuthService extends AppService {
    constructor() {
        super();
    }

    signIn = (form: any) => {
        return this.post(AUTH_ENDPOINTS.SIGN_IN, form);
    }

    currentUser = () => {
        return this.get(AUTH_ENDPOINTS.CURRENT_USER);
    }
}

export const authService = new AuthService();