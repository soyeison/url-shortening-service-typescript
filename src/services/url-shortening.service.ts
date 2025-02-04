import { AppDataSource } from "../data-source";
import {
  CreateURLShorteningPayload,
  CreateURLShorteningResponse,
} from "../dto/create-url-shortening.dto";
import {
  FindByIdURLShorteningResponse,
  GetStatisticsURLShorteningResponse,
} from "../dto/find-url-shortening.dto";
import { UpdateURLShorteningPayload } from "../dto/update-url-shortening-dto";
import { URLShortening } from "../entities/url-shortening.entity";
import { IURLShorteningService } from "../interfaces/service-url-shortening.interface";

export class URLShorteningService implements IURLShorteningService {
  async create(
    payload: CreateURLShorteningPayload
  ): Promise<CreateURLShorteningResponse> {
    // TODO: Generar el shortCode
    console.log("Se genera shortCode");

    const modelToSave = new URLShortening();
    modelToSave.url = payload.url;
    modelToSave.shortCode = "123";

    const urlEntity = AppDataSource.getRepository(URLShortening);
    const { accessCount, ...rest } = await urlEntity.save(modelToSave);
    const responseSchema: CreateURLShorteningResponse = {
      ...rest,
    };

    return responseSchema;
  }
  findById(id: number): Promise<FindByIdURLShorteningResponse> {
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
}
