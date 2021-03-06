import express, { Request, Response } from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@rpticket/common";

import { createTicketRouter } from "./routes/create";
import { indexTicketRouter } from "./routes/index";
import { showTicketRouter } from "./routes/show";
import { updateTicketRouter } from "./routes/update";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== "test",
    secure: false,
  })
);

app.use(currentUser);

app.use(createTicketRouter);
app.use(indexTicketRouter);
app.use(showTicketRouter);
app.use(updateTicketRouter);

app.get("*", async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
