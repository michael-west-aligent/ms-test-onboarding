import { Link, Country } from "../types";
import { postLinkResolver } from "./mutations/post-link";
import { createProductResolver} from "./mutations/createProduct"; 
import { feedResolver } from "./queries/feeds";
import { infoResolver } from "./queries/info";
import { countriesResolver } from "./queries/country";
import axios from "axios";

export const resolvers = {
  Query: {
    info: infoResolver,
    feed: feedResolver,
    countries: countriesResolver,
  },
  Mutation: {
    postLink: postLinkResolver,
    createProduct: createProductResolver, 
  },
};