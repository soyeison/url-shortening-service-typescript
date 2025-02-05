import { v4 as uuidv4 } from "uuid";
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
    const fullUuid = uuidv4();

    const modelToSave = new URLShortening();
    modelToSave.url = payload.url;
    modelToSave.shortCode = fullUuid.split("-")[0];

    const urlEntity = AppDataSource.getRepository(URLShortening);
    const { accessCount, ...rest } = await urlEntity.save(modelToSave);
    const responseSchema: CreateURLShorteningResponse = {
      ...rest,
    };

    return responseSchema;
  }

  async findByShortCode(
    shortCode: string
  ): Promise<FindByIdURLShorteningResponse | null> {
    const urlEntity = AppDataSource.getRepository(URLShortening);
    const entity = await urlEntity.findOne({ where: { shortCode: shortCode } });

    if (!entity) {
      return null;
    }

    // Como la entidad existe aumentar el conteo de visitas
    entity.accessCount += 1;
    await urlEntity.save(entity);

    const { accessCount, ...rest } = entity;
    const responseSchema: FindByIdURLShorteningResponse = {
      ...rest,
    };

    return responseSchema;
  }

  async update(
    shortCode: string,
    payload: UpdateURLShorteningPayload
  ): Promise<FindByIdURLShorteningResponse | null> {
    const urlEntity = AppDataSource.getRepository(URLShortening);
    const entity = await urlEntity.findOne({ where: { shortCode: shortCode } });

    if (!entity) {
      return null;
    }

    entity.url = payload.url;
    const entityUpdated = await urlEntity.save(entity);
    const { accessCount, ...rest } = entityUpdated;
    const responseSchema: FindByIdURLShorteningResponse = {
      ...rest,
    };
    return responseSchema;
  }

  async delete(shortCode: string): Promise<void | null> {
    const urlEntity = AppDataSource.getRepository(URLShortening);
    const entity = await urlEntity.findOne({ where: { shortCode: shortCode } });

    if (!entity) {
      return null;
    }

    await AppDataSource.createQueryBuilder()
      .delete()
      .from(URLShortening)
      .where("shortCode = :shortCode", { shortCode })
      .execute();
  }

  async getStatistics(
    shortCode: string
  ): Promise<GetStatisticsURLShorteningResponse | null> {
    const urlEntity = AppDataSource.getRepository(URLShortening);
    const entity = await urlEntity.findOne({ where: { shortCode: shortCode } });

    if (!entity) {
      return null;
    }

    return entity;
  }
}
