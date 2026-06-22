import { Router } from "express";
import { HttpError } from "../middleware/errorHandler";

export const contactRouter = Router();

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
  company?: string;
}

function isContactRequestBody(body: unknown): body is ContactRequestBody {
  if (typeof body !== "object" || body === null) return false;
  const { name, email, message, company } = body as Record<string, unknown>;
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    typeof email === "string" &&
    email.trim().length > 0 &&
    typeof message === "string" &&
    message.trim().length > 0 &&
    (company === undefined || typeof company === "string")
  );
}

contactRouter.post("/", (req, res, next) => {
  try {
    if (!isContactRequestBody(req.body)) {
      throw new HttpError(
        400,
        "Request body must include non-empty string fields: name, email, message."
      );
    }

    // `company` is a honeypot field — real users never see or fill it.
    if ((req.body.company ?? "").trim().length > 0) {
      throw new HttpError(400, "Invalid submission.");
    }

    // TODO: wire up actual email sending via Zoho SMTP in a later prompt.
    res.status(200).json({ status: "received" });
  } catch (err) {
    next(err);
  }
});
