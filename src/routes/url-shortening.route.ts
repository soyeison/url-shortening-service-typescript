import express, { Request, Response } from "express";
import { URLShorteningController } from "../controllers/url-shortening.controller";
import { URLShorteningService } from "../services/url-shortening.service";
import { CreateURLShorteningPayload } from "../dto/create-url-shortening.dto";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { url }: CreateURLShorteningPayload = req.body;

  if (!url) {
    res.status(400).json({ message: "Body format incorrect" });
  } else {
    const urlShorteningService = new URLShorteningService();
    const urlShorteningController = new URLShorteningController(
      urlShorteningService
    );

    const response = await urlShorteningController.create({ url });

    res.status(201).json(response);
  }
});

export { router as urlShorteningRouter };
