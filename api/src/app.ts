import express, { Express, NextFunction, Request, Response } from "express";
import createError from "http-errors";
import cors from "cors";
import path from "path";
const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

app.use((req: Request, res: Response, next: NextFunction) => {
  // Next chuyển tiếp
  next(createError(404));
});

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  const statusCode = err.status || 500;
});

export default app;
