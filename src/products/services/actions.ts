import { type Product, productsApi } from '..';

interface GetProductsOptions {
  filterKey?: string;
}

export const sleep = (seconds: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const getProducts = async ({
  filterKey,
}: GetProductsOptions): Promise<Product[]> => {
  const filterUrl = filterKey ? `category=${filterKey}` : '';
  const url = `/products?${filterUrl}`;

  const { data } = await productsApi.get<Product[]>(url);
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const url = `/products/${id}`;

  const { data } = await productsApi.get<Product>(url);
  return data;
};

export interface ProductLike {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export const createProduct = async (product: ProductLike) => {
  const url = '/products';

  const { data } = await productsApi.post<Product>(url, product);
  return data;
};
