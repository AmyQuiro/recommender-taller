import {
  ClientContractsDTO,
  ClientInfoDTO,
  contractsDTO,
  FeeDTO,
} from '../../business/dtos/flowType/contracts/contractsDTO';

export class Dummy {
  // ================== CONTRATOS ==================
  private dummieFee() {
    let fees: FeeDTO[] = [];

    let auxfee: FeeDTO = {
      code: 232423 + '',
      name: 'Pago módulo 10',
      amount: 380,
      description: '',
      currency: 'Bs',

      extraData: JSON.stringify({
        quantity: 1,
        discount: 20,
        totalSale: 380,
        exchangeRate: 6.97,
      }),
    };

    let auxfee2: FeeDTO = {
      code: 232424 + '',
      name: 'Pago módulo 11',
      amount: 400,
      description: '',
      currency: 'Bs',

      extraData: JSON.stringify({
        quantity: 1,
        discount: 0,
        totalSale: 400,
        exchangeRate: 6.97,
      }),
    };

    fees.push(auxfee);
    fees.push(auxfee2);

    return fees;
  }
  private dummieContract() {
    let client: ClientInfoDTO = {
      code: 'DADF213MDK',
      firstName: 'MARIELA',
      lastName: 'BARRIENTOS',
      fullName: 'MARIELA BARRIENTOS',
      idNumber: '5653423',
      email: 'mbarrientos@gmail.com',
      telephone: '7765457',
    };
    let listContracts: contractsDTO[] = [];

    let contractExtra = {
      amount: 540,
      nit: 6543235,
      business: 'Alejandro Barrientos',
    };
    let auxContract: contractsDTO = {
      code: '1231231',
      name: 'Curso de inglés',
      description: '',
      extraData: JSON.stringify(contractExtra),
    };

    let auxContract2: contractsDTO = {
      code: '0991',
      name: 'Examen de nivel',
      description: '',
      extraData: JSON.stringify(contractExtra),
    };
    listContracts.push(auxContract);
    listContracts.push(auxContract2);

    let clientContracts: ClientContractsDTO = {
      clientInfo: client,
      contracts: listContracts,
    };
    return clientContracts;
  }
}
