import {
  CreateURLShorteningPayload,
  CreateURLShorteningResponse,
} from "../dto/create-url-shortening.dto";
import {
  FindByIdURLShorteningResponse,
  GetStatisticsURLShorteningResponse,
} from "../dto/find-url-shortening.dto";
import { UpdateURLShorteningPayload } from "../dto/update-url-shortening-dto";
import { IURLShorteningService } from "../interfaces/service-url-shortening.interface";

export class URLShorteningService implements IURLShorteningService {
  create(
    payload: CreateURLShorteningPayload
  ): Promise<CreateURLShorteningResponse> {
    // Generar el shortCode
    console.log("Se genera shortCode");
    // Utilizar el repositorio para guardar interactuar con la DB
    console.log("Se guarda en DB");
    throw new Error("Method not implemented.");
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
