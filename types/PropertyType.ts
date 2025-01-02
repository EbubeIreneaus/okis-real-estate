export type PropertyType = {
    id: number;
    property: "land" | "apartment" | "office";
    amount: number;
    image: string;
    forSale: boolean;
    location: string;
    state: string;
    squareFt: number;
    beds: number | null;
    bathroom: number | null;
  };
  