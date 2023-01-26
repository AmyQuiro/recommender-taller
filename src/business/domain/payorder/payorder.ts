import { GenericId } from './../general/genericId';

import { Entity } from '../interfaces/Entity';
import { UniqueEntityID } from '../interfaces/UniqueEntityID';

export interface IPayOrderProps {
  transaction_multipago: Number;
  transaction_commerce: string;
  transaction_gateway: string;
  service_id: string;
  extra_data?: string;
}

export class PayOrder extends Entity<IPayOrderProps> {
  get id(): GenericId {
    return GenericId.create(this._id);
  }

  get transaction_multipago(): Number {
    return this.props.transaction_multipago;
  }

  get transaction_commerce(): string {
    return this.props.transaction_commerce;
  }

  public get transaction_gateway(): string {
    return this.props.transaction_gateway;
  }
  public get service_id(): string {
    return this.props.service_id;
  }

  public get extra_data(): string {
    return this.props.extra_data;
  }

  public set extra_data(newData) {
    this.props.extra_data = newData;
  }


  private constructor(props: IPayOrderProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: IPayOrderProps, id?: UniqueEntityID): PayOrder {
    const payOrder: PayOrder = new PayOrder(props, id);

    return payOrder;
  }
}
