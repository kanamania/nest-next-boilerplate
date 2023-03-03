import { apiHandler } from '@/helpers/api-handler';

export default apiHandler({
  post: read,
});

function read(req: any, res: any) {
  const data = req.body;
  ///TODO fetch get /investments/:id
}
