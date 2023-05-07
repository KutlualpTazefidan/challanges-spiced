// import { products } from "../../../lib/products";
import dbConnect from "db/connect";
import Product from "db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find();
    const { id } = request.query;
    const product = products.find((product) => product.id === id);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(product);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
