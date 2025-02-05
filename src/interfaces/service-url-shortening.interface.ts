import {
  CreateURLShorteningPayload,
  CreateURLShorteningResponse,
} from "../dto/create-url-shortening.dto";
import {
  FindByIdURLShorteningResponse,
  GetStatisticsURLShorteningResponse,
} from "../dto/find-url-shortening.dto";
import { UpdateURLShorteningPayload } from "../dto/update-url-shortening-dto";

export interface IURLShorteningService {
  create(
    payload: CreateURLShorteningPayload
  ): Promise<CreateURLShorteningResponse>;

  findByShortCode(
    shortCode: string
  ): Promise<FindByIdURLShorteningResponse | null>;

  update(
    shortCode: string,
    payload: UpdateURLShorteningPayload
  ): Promise<FindByIdURLShorteningResponse | null>;

  delete(shortCode: string): Promise<void | null>;

  getStatistics(
    shortCode: string
  ): Promise<GetStatisticsURLShorteningResponse | null>;
}
