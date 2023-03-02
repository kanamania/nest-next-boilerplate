import {apiHandler} from '@/helpers/api-handler';

export default apiHandler({
    delete: remove,
});

function remove(req: any, res: any) {
    const data = req.body;
    ///TODO fetch delete /investments
}
