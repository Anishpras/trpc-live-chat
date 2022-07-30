import { createRouter } from "./context";
import { z } from "zod";

export const roomRouter = createRouter()
  .mutation("send-message", {})
  .subscription("onSendMessage", {});
