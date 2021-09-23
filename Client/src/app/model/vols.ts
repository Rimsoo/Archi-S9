export interface Vols {
  code : number;
  departure : string;
  arrival : string;
  base_price: string;
  plane: {
    name: string;
    total_seats: number
  };
}[]
