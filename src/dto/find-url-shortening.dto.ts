import { URLShortening } from "../entities/url-shortening.entity";

export interface FindByIdURLShorteningResponse
  extends Omit<URLShortening, "accessCount"> {}

export interface GetStatisticsURLShorteningResponse extends URLShortening {}
