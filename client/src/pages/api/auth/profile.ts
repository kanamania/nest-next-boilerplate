import {apiHandler} from '@/helpers/api-handler';

export default apiHandler({
    post: profile
});

function profile(req: any, res: any) {
    const data = req.body;
    ///TODO fetch post /auth/register
}
