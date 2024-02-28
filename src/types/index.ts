export type Link = {
  id: string;
  url: string;
  description: string;
};

export type Country = {
  id: number;
  country: string;
  country_iso2: string;
  country_iso3: string;
  states: State;
};

export type State = {
  url: String;
  resource: String;
};

export type Query = {
  info: String;
  feed: [Link];
  countries: [Country];
};

export type Mutation = {
  postLink(url: String, description: String): Link;
  createProduct(
    product_id: String,
    name: String,
    cost: Number,
    mass: Number,
    type: ProductType
  ): Product;
};

export type Product = {
  name: String;
  sku: String;
  cost: Number;
  mass: Number;
  type: ProductType;
};

export enum ProductType {
  physical,
  digital,
}
