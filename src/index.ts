import { app } from "@getcronit/pylon";
import { CookieStore, sessionMiddleware } from "hono-sessions";
import { AuthService } from "./services/auth";
import { MessagesService } from "./services/messages";
import { validateLogin, validateRegister } from "./validators/auth";
import { validateCreateMessage, validateUpdateMessage } from "./validators/message";

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
    me: AuthService.me,
    myMessages: {
      list: MessagesService.listMyMessages,
      get: MessagesService.getMyMessage,
    },
    publicMessages: {
      list: MessagesService.listPublicMessages,
      get: MessagesService.getPublicMessage,
    },
    // Optional: Add health check
    healthCheck: () => ({ status: "OK" }),
  },
  Mutation: {
    // Authentication mutations
    registerUser: validateRegister(AuthService.register),
    loginUser: validateLogin(AuthService.login),
    logoutUser: AuthService.logout,

    // Message mutations
    createMessage: validateCreateMessage(MessagesService.create),
    updateMessage: validateUpdateMessage(MessagesService.update),
    deleteMessage: MessagesService.delete,
  },
};

export default app;
