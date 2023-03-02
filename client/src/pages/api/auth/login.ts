import {apiHandler} from '@/helpers/api-handler';

export default apiHandler({
    post: login
});

function login(req: any, res: any) {
    console.log(req)
    const data = req.body;
    ///TODO fetch post /auth/login
}
