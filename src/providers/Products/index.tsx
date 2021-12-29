import {
  createContext,
  ReactNode,
  useEffect,
  useContext,
  useState,
} from "react";
import api from "../../services/api";
import React, { SetStateAction } from 'react';

interface ProductsProps {
  children: ReactNode;
}

interface ProductsInterface {
  title: string;
  image: string;
  category: string;
  price: number;
  id: number;
  userId: number;
  quantity: number;
  total: number;
}


interface ProductsProviderData {
  products: ProductsInterface[];
  filteredProducts: ProductsInterface[];
  productNameFiltered: (searchedProd: string) => void;
  inputValue: string;
  setInputValue: React.Dispatch<SetStateAction<string>>;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProps) => {


  const [products, setProducts] = useState<ProductsInterface[]>(
    [] as ProductsInterface[]
  );

  const [filteredProducts, setFilteredProducts] = useState<ProductsInterface[]>(
    [] as ProductsInterface[]
  );

  const [inputValue, setInputValue] = useState("");

  console.log(inputValue)
  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const productNameFiltered = (searchedProd: string) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchedProd.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
    setInputValue("")
  };



  return (
    <ProductsContext.Provider
      value={{ inputValue, setInputValue, products, filteredProducts, productNameFiltered }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
