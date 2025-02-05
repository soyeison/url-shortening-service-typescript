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

router.get("/:shortCode", async (req: Request, res: Response) => {
  const { shortCode } = req.params;
  if (!shortCode) {
    res.status(400).json({ message: "Param format incorrect" });
  } else {
    const urlShorteningService = new URLShorteningService();
    const urlShorteningController = new URLShorteningController(
      urlShorteningService
    );

    const response = await urlShorteningController.findByShortCode(shortCode);
    if (!response) {
      res.status(404).send("Don't exist url to this shortCode");
    } else {
      res.redirect(response);
    }
  }
});

router.put("/:shortCode", async (req: Request, res: Response) => {
  const { shortCode } = req.params;
  const { url } = req.body;
  if (!shortCode || !url) {
    res.status(400).json({ message: "Param format incorrect" });
  } else {
    const urlShorteningService = new URLShorteningService();
    const urlShorteningController = new URLShorteningController(
      urlShorteningService
    );

    const response = await urlShorteningController.update(shortCode, { url });
    if (!response) {
      res.status(404).send("Don't exist url to this shortCode");
    } else {
      res.status(200).json(response);
    }
  }
});

router.delete("/:shortCode", async (req: Request, res: Response) => {
  const { shortCode } = req.params;
  if (!shortCode) {
    res.status(400).json({ message: "Param format incorrect" });
  } else {
    const urlShorteningService = new URLShorteningService();
    const urlShorteningController = new URLShorteningController(
      urlShorteningService
    );

    const response = await urlShorteningController.delete(shortCode);
    if (response === null) {
      res.status(404).send("Don't exist url to this shortCode");
    } else {
      res.status(204).send("Deleted");
    }
  }
});

router.get("/:shortCode/stats", async (req: Request, res: Response) => {
  const { shortCode } = req.params;
  if (!shortCode) {
    res.status(400).json({ message: "Param format incorrect" });
  } else {
    const urlShorteningService = new URLShorteningService();
    const urlShorteningController = new URLShorteningController(
      urlShorteningService
    );

    const response = await urlShorteningController.getStatistics(shortCode);
    if (response === null) {
      res.status(404).send("Don't exist url to this shortCode");
    } else {
      res.status(200).json(response);
    }
  }
});

export { router as urlShorteningRouter };
