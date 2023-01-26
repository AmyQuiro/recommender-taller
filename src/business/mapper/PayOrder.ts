import { UniqueEntityID } from '../domain/interfaces/UniqueEntityID';
import { PayOrder } from '../domain/payorder/payorder';
import { PayOrderDTO } from '../dtos/dataBase/payOrderDTO';

export class PayOrderMap {
  static toDTO(parameter: PayOrder): PayOrderDTO {
    return {
      id: parameter.id.id.toValue(),
      transaction_commerce: parameter.transaction_commerce,
      transaction_gateway: parameter.transaction_gateway,
      transaction_multipago: parameter.transaction_multipago,
      service_id: parameter.service_id,
      extra_data: parameter.extra_data,
    };
  }
  static toDomain(raw: any): PayOrder {
    const domainResponse = PayOrder.create(
      {
        transaction_commerce: raw.transaction_commerce,
        transaction_gateway: raw.transaction_gateway,
        transaction_multipago: raw.transaction_multipago,
        service_id: raw.service_id,
        extra_data: raw.extra_data,
      },
      new UniqueEntityID(raw.pay_order_id),
    );
    return domainResponse;
  }

  static toPersistence(parameter: PayOrder): any {
    var response = {
      pay_order_id: parameter.id.id.toValue(),
      transaction_commerce: parameter.transaction_commerce,
      transaction_gateway: parameter.transaction_gateway,
      transaction_multipago: parameter.transaction_multipago,
      service_id: parameter.service_id,
      extra_data: parameter.extra_data,
    };
    return response;
  }
}
