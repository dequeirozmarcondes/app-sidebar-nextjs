import { Inter, Roboto } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto({
  weight: ["100", "400", "900"], // Especifica a faixa de pesos
  subsets: ["latin"], // Adiciona suporte a caracteres latinos
});
