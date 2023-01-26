// ======================= get debts =======================
export interface getDebtDTO {
  ci_code: string;
}

export interface RespGetFeeCommerce {
  ObterTitulosEmAbertoBoliviaResult: ObterTitulosEmAbertoBoliviaResult;
}

export interface ObterTitulosEmAbertoBoliviaResult {
  CodigoPessoa: number;
  CodigoDocumento: string;
  NomePessoa: string;
  Titulos: Titulos;
  QtdTitulos: number;
  Erro: string;
  PagamentoEmProcessamento: number;
}

export interface Titulos {
  RetornoObterTitulosEmAbertoListaTitulosEmAbertoBolivia: titulosEmAbertoBolivia[];
}

export interface titulosEmAbertoBolivia {
  date: Date;
  Numero: number;
  DataVencimento: string;
  DescricaoDivida: string;
  SaldoPrincipal: number;
  SaldoFinanceiro: number;
  SaldoTotalAtualizado: number;
  Cambio: number;
  PagamentoEmProcessamento: number;
}

// ======================= register payment =======================
export interface RespRegisterPaymentNatura {
  RealizarPagamentoTituloBoliviaResult: RealizarPagamentoTituloBoliviaResult;
}

export interface RealizarPagamentoTituloBoliviaResult {
  MensagemErro: string;
  Erro: string;
}
