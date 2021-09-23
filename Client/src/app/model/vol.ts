export interface Vols {
  result: Result[]

}

export interface Result {
  id : number;
  depart : number;
  arrivee : number;
  prix: number;
  place: number;
}

export interface Vol {
  id : number;
  depart : number;
  arrivee : number;
  prix: number;
  place: number;
  result: Result[]
}[]
