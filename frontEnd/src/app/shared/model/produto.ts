// export class Produto {
//   constructor(
//   public id: number,
//   public nome: string,
//   public dataCompra: Date,
//   public duracaoGarantiaMeses: number,
//   public dataFimGarantia: string,
//   )
//   {}
// }

export class Produto {
  id?: string;
  nome: string;
  dataCompra: Date;
  duracaoGarantiaMeses: number;
  dataFimGarantia?: Date;

  constructor(nome: string, dataCompra: Date, duracaoGarantiaMeses: number, dataFimGarantia: Date) {
    this.nome = nome;
    this.dataCompra = dataCompra;
    this.duracaoGarantiaMeses = duracaoGarantiaMeses;
    this.dataFimGarantia = dataFimGarantia;
  }
}
