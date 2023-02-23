import Configs from '../configs';

export const authProvider = {
    login: async (data: {email: string, password: string}) => {
        await fetch(`${Configs.API_URL}/admin/login`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        }).then((response) => response.json()).then((response) => {
            if(response.status=='success'){
                localStorage.setItem('auth', JSON.stringify({token: response.access_token, user: response.data}))
                return Promise.resolve();
            }
            return Promise.reject();
        });
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkError: (error: {status: number}) => {
        if (error && (error.status === 401 || error.status === 403)) {
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: (ctx: any) => {
        const auth = JSON.parse(localStorage.getItem('auth') ?? '[]');
        return auth.token ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => {
        const auth = localStorage.getItem('auth');
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser.roles);
        }
        return Promise.reject();
    },
    getUserIdentity: () => {
        const auth = localStorage.getItem('auth');
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser.first_name+' '+parsedUser.last_name);
        }
        return Promise.reject();
    },
};