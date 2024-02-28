import axios from "axios";

const headers = {
  "X-Auth-Token": "2dwb7v48ai89ng29a4miz3dyah2bxi1",
};
const STORE_HASH = "xxazhvt7gd";

export const countriesResolver = async () => {
  const url = `https://api.bigcommerce.com/stores/${STORE_HASH}/v2/countries`;

  try {
    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    throw new Error(`Countries resolver failed, error: ${error}`);
  }
};

