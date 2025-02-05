import {
  CreateURLShorteningResponse,
  CreateURLShorteningPayload,
} from "../dto/create-url-shortening.dto";
import {
  FindByIdURLShorteningResponse,
  GetStatisticsURLShorteningResponse,
} from "../dto/find-url-shortening.dto";
import { UpdateURLShorteningPayload } from "../dto/update-url-shortening-dto";

export interface IURLShorteningController {
  create(
    payload: CreateURLShorteningPayload
  ): Promise<CreateURLShorteningResponse>;

  findByShortCode(shortCode: string): Promise<string | null>;

  update(
    shortCode: string,
    payload: UpdateURLShorteningPayload
  ): Promise<FindByIdURLShorteningResponse | null>;

  delete(shortCode: string): Promise<void | null>;

  getStatistics(
    shortCode: string
  ): Promise<GetStatisticsURLShorteningResponse | null>;
}
