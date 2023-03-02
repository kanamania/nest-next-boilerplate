import {apiHandler} from '@/helpers/api-handler';

export default apiHandler({
    post: create
});

function create(req: any, res: any) {
    const data = req.body;
    //TODO fetch post /investments

}
