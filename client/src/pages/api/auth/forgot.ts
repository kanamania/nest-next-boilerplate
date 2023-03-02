import {apiHandler} from '@/helpers/api-handler';

export default apiHandler({
    post: forgot
});

function forgot(req: any, res: any) {
    const data = req.body;
    ///TODO fetch post /auth/forgot
}
