import { Response, Request } from "express";
import { IURLShorteningController } from "../interfaces/controller-url-shortening.interface";
import {
  CreateURLShorteningPayload,
  CreateURLShorteningResponse,
} from "../dto/create-url-shortening.dto";
import {
  FindByIdURLShorteningResponse,
  GetStatisticsURLShorteningResponse,
} from "../dto/find-url-shortening.dto";
import { UpdateURLShorteningPayload } from "../dto/update-url-shortening-dto";
import { URLShorteningService } from "../services/url-shortening.service";

export class URLShorteningController implements IURLShorteningController {
  constructor(private urlShorteningService: URLShorteningService) {}

  async create(
    payload: CreateURLShorteningPayload
  ): Promise<CreateURLShorteningResponse> {
    const response = await this.urlShorteningService.create(payload);
    return response;
  }
  findByShortCode(shortCode: string): Promise<FindByIdURLShorteningResponse> {
    throw new Error("Method not implemented.");
  }
  update(
    id: number,
    payload: UpdateURLShorteningPayload
  ): Promise<FindByIdURLShorteningResponse> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getStatistics(
    shortName: string
  ): Promise<GetStatisticsURLShorteningResponse> {
    throw new Error("Method not implemented.");
  }
  static async create(req: Request, res: Response) {
    console.log("Create url shortening");
  }
}
