import { IURLShorteningController } from "../interfaces/controller-url-shortening.interface";
import {
  CreateURLShorteningPayload,
  CreateURLShorteningResponse,
} from "../dto/create-url-shortening.dto";
import { GetStatisticsURLShorteningResponse } from "../dto/find-url-shortening.dto";
import {
  UpdateURLShorteningPayload,
  UpdateURLShorteningResponse,
} from "../dto/update-url-shortening-dto";
import { URLShorteningService } from "../services/url-shortening.service";

export class URLShorteningController implements IURLShorteningController {
  constructor(private urlShorteningService: URLShorteningService) {}

  async create(
    payload: CreateURLShorteningPayload
  ): Promise<CreateURLShorteningResponse> {
    const response = await this.urlShorteningService.create(payload);
    return response;
  }

  async findByShortCode(shortCode: string): Promise<string | null> {
    const response = await this.urlShorteningService.findByShortCode(shortCode);

    if (!response) {
      return null;
    }

    return response.url;
  }

  async update(
    shortCode: string,
    payload: UpdateURLShorteningPayload
  ): Promise<UpdateURLShorteningResponse | null> {
    const response = await this.urlShorteningService.update(shortCode, payload);

    if (!response) {
      return null;
    }

    return response;
  }

  async delete(shortCode: string): Promise<void | null> {
    const response = await this.urlShorteningService.delete(shortCode);

    if (response === null) {
      return null;
    }

    return undefined;
  }

  async getStatistics(
    shortCode: string
  ): Promise<GetStatisticsURLShorteningResponse | null> {
    const response = await this.urlShorteningService.getStatistics(shortCode);

    if (!response) {
      return null;
    }

    return response;
  }
}
