import { URLShortening } from "../entities/url-shortening.entity";

export interface CreateURLShorteningPayload {
  url: string;
}

export interface CreateURLShorteningResponse
  extends Omit<URLShortening, "accessCount"> {} // Extender esto con el modelo y adaptarlo para responder solo lo necesario del mismo
