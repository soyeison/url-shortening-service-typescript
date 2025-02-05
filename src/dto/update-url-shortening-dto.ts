import { URLShortening } from "../entities/url-shortening.entity";

export interface UpdateURLShorteningPayload {
  url: string;
}

export interface UpdateURLShorteningResponse
  extends Omit<URLShortening, "accessCount"> {} // Extender esto con el modelo y adaptarlo para responder solo lo necesario del mismo
