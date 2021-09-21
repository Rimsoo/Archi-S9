export interface Vol {
  id : number;
  depart : Depart;
  arrivee : Arrivee;
  prix: number;
  place: number

}

export interface Depart {
  name: string;
  ville: string;
}

export interface Arrivee {
  name: string;
  ville: string;
}
