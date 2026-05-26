export interface ProductType {
  id: number;
  bgImage: string;
  title: string;
  description: string;
  productImage: string;
  animations?: {
    text1: any;
    text2: any;
    image: any;
    image1?: any;
  };
}
