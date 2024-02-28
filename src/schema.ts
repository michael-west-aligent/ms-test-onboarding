import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
import { ProductType } from "./types";

const typeDefinitions = /* GraphQL */ `
  type Query {
    info: String!
    feed: [Link!]!
    countries: [Country!]!
  }

  type Mutation {
    postLink(url: String!, description: String!): Link!
    createProduct(
      product_id: ID!
      name: String!
      sku: String!
      weight: Int!
      price: Int!
      type: ProductType!
    ): Product!
  }

  type Product {
    product_id: ID!
    name: String!
    sku: String!
    cost: Int!
    mass: Int!
    type: ProductType!
  }

  enum ProductType {
    physical
    digital
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }

  type Country {
    id: Int!
    country: String!
    country_iso2: String!
    country_iso3: String!
    states: State!
  }

  type State {
    url: String!
    resource: String!
  }
`;

// 1
type Link = {
  id: string;
  url: string;
  description: string;
};

type Country = {
  id: Number;
  country: String;
  country_iso2: String;
  country_iso3: String;
  states: State;
};

type State = {
  url: String;
  resource: String;
};

// // 2
const links: Link[] = [
  {
    id: "link-0",
    url: "https://graphql-yoga.com",
    description: "The easiest way of setting up a GraphQL server",
  },
];

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
