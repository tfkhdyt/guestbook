import { app } from "@getcronit/pylon";
import { CookieStore, sessionMiddleware } from "hono-sessions";
import { AuthService } from "./services/auth";
import { MessagesService } from "./services/messages";

const appSecret = process.env.APP_SECRET;
if (!appSecret) {
  throw new Error("APP_SECRET is required");
}

const store = new CookieStore();

app.use(
  "*",
  sessionMiddleware({
    store,
    encryptionKey: process.env.APP_SECRET, // Required for CookieStore, recommended for others
    expireAfterSeconds: 60 * 60 * 24 * 30,
    cookieOptions: {
      sameSite: "Lax", // Recommended for basic CSRF protection in modern browsers
      path: "/", // Required for this library to work properly
      httpOnly: true, // Recommended to avoid XSS attacks
    },
  })
);

export const graphql = {
  Query: {
    messages: { all: MessagesService.findAll, one: MessagesService.findOne },
    auth: { me: AuthService.me },
  },
  Mutation: {
    messages: {
      create: MessagesService.create,
      update: MessagesService.update,
      delete: MessagesService.delete,
    },
    auth: {
      register: AuthService.register,
      login: AuthService.login,
      logout: AuthService.logout,
    },
  },
};

export default app;
