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

  findById(id: number): Promise<FindByIdURLShorteningResponse>; // Corregir esto para devolver el mismo modelo de la entidad

  update(
    id: number,
    payload: UpdateURLShorteningPayload
  ): Promise<FindByIdURLShorteningResponse>; // TODO: Corregir la respuesta para devolver el modelo

  delete(id: number): Promise<void>;

  getStatistics(shortName: string): Promise<GetStatisticsURLShorteningResponse>;
}
