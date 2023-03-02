import {jwtMiddleware} from '@/helpers/jwt-middleware';
import {errorHandler} from '@/helpers/error-handler';

export { apiHandler };

function apiHandler(handler: any) {
    return async (req: any, res: any) => {
        const method = req.method.toLowerCase();

        // check handler supports HTTP method
        if (!handler[method])
            return res.status(405).end(`Method ${req.method} Not Allowed`);

        try {
            // global middleware
            await jwtMiddleware(req, res);

            // route handler
            await handler[method](req, res);
        } catch (err) {
            // global error handler
            errorHandler(err, res);
        }
    }
}