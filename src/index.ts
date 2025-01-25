import { app } from "@getcronit/pylon";
import { CookieStore, sessionMiddleware } from "hono-sessions";
import { AuthService } from "./services/auth";
import { MessagesService } from "./services/messages";
import { validateLogin, validateRegister } from "./validators/auth";
import { validateCreateMessage } from "./validators/message";

const appSecret = process.env.APP_SECRET;
if (!appSecret) {
  throw new Error("APP_SECRET is required");
}

const store = new CookieStore();

app.use(
  "*",
  sessionMiddleware({
    store,
    encryptionKey: appSecret,
    expireAfterSeconds: 60 * 60 * 24 * 30,
    cookieOptions: {
      sameSite: "Lax",
      path: "/",
      httpOnly: true,
    },
  })
);

export const graphql = {
  Query: {
    messages: {
      mine: {
        findAll: MessagesService.findAllMyMessages,
        findOne: MessagesService.findOneMyMessage,
      },
      global: {
        findAll: MessagesService.findAllGlobal,
        findOne: MessagesService.findOneGlobal,
      }
    },
    auth: { me: AuthService.me },
  },
  Mutation: {
    messages: {
      create: validateCreateMessage(MessagesService.create),
      update: MessagesService.update,
      delete: MessagesService.delete,
    },
    auth: {
      register: validateRegister(AuthService.register),
      login: validateLogin(AuthService.login),
      logout: AuthService.logout,
    },
  },
};

export default app;
