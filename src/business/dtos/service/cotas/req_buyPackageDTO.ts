import { Infotransaction, Contract, PackageLTE } from './general';

export interface BuyPackageDTO {
  contract: Contract;
  packageLte: PackageLTE;
  infotransaccion: Infotransaction;
}
