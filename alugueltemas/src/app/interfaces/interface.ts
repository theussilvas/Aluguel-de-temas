export interface IUsuarios{
    id:number,
    name:string,
    email:string;
}

export interface IEndereco{
    id:number,
    street:string,
    number:number,
    complement:string,
    district: string,
    city:string,
    state:string;
}

export interface Iitens{
    id:number,
    name:string,
    description:string;
}

export interface Itemas{
    id:number,
    name:string,
    color:string,
    price: number,
    itens:number[];
}

export interface IAluguel{
    id:number,
    date: Date,
    start_hours:Date,
    end_hours:Date,
    client:number,
    theme:number,
    adress:number;
}

export interface IFormAluguel{
    date: string,
    end_hours: string,
    start_hours:string,
    client:number,
    theme: number,
    address:number,
    id:number,
  }

export interface IClientesComAlugueis{
    nome:string;
    quantidadeAlugueis:number;
}