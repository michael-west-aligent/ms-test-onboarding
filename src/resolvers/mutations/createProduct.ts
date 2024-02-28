import axios from "axios";

// 1
interface BcProductArgs {
  name: string;
  sku: string;
  weight: number;
  price: number;
  type: "physical" | "digital";
}

interface BcProductResponse {
  id: number;
  name: string;
  sku: string;
  weight: number;
  price: number;
  type: "physical" | "digital";
}

interface Product {
  product_id: string;
  name: string;
  sku: string;
  mass: number;
  cost: number;
  type: "physical" | "digital";
}

// 2
const headers = {
  "X-Auth-Token": "2dwb7v48ai89ng29a4miz3dyah2bxi1",
};
const STORE_HASH = "xxazhvt7gd";

// 3
const transformProduct = (bcProduct: BcProductResponse): Product => {
  const { id, name, sku, price, weight, type } = bcProduct;
  return {
    product_id: String(id),
    name,
    sku,
    mass: weight,
    cost: price,
    type,
  };
};

// 4
export const createProductResolver = async (
  _root: unknown,
  args: BcProductArgs
) => {
  // Send user input/args to BC, often this will need to be transformed too
  const url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/catalog/products`;
  const bcProduct = await axios.post<
    BcProductArgs,
    { data: { data: BcProductResponse } }
  >(url, args, { headers });

  // Transform response from BC to match our schema
  const transformedProduct = transformProduct(bcProduct.data.data);

  return transformedProduct;
};
