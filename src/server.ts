import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { routes } from "./routes";

const server = Fastify ({ logger: true });

const startServer = async () => {

    await server.register(fastifyCors);
    await server.register(routes);
    try {
        await server.listen({ port: 3000 });
    } catch(err) {
        process.exit(1);
    }
}

startServer();