import { apiHandler } from '@/helpers/api-handler';

export default apiHandler({
  post: register,
  get: () => true,
});

function register(req: any, res: any) {
  const data = req.body;
  console.log({ data });
  ///TODO fetch post /auth/register
}
