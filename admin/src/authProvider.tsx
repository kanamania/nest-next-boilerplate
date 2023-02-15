export const authProvider = {
    login: async (data: {email: string, password: string}) => {
        // Suppose we actually send a request to the back end here.
        await fetch('http://localhost:9000/auth/login', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
        }).then((response) => response.json()).then((response) => {
            if(response.status=='success'){
                localStorage.setItem('auth', JSON.stringify(response))
                return Promise.resolve();
            }
            return Promise.reject();
        });
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkError: (error: {statusCode: number}) => {
        if (error && error.statusCode === 401) {
            return Promise.reject();
        }

        return Promise.resolve();
    },
    checkAuth: (ctx: any) => {
        console.log(ctx)
        const auth = JSON.parse(localStorage.getItem('auth') ?? '');
        return auth.access_token ? Promise.resolve() : Promise.reject();
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