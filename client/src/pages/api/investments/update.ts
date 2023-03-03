import { apiHandler } from '@/helpers/api-handler';

export default apiHandler({
  post: update,
});

function update(req: any, res: any) {
  const data = req.body;
  ///TODO fetch put /investments/:id
}
