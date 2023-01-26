import { ExternalEntityDTO } from './../dtos/dataBase/ExternalEntityDTO';
import { ExternalEntity } from './../domain/external_entity/external_entity';
import { UniqueEntityID } from '../domain/interfaces/UniqueEntityID';

export class ExternalEntityMap {
  static toDTO(parameter: ExternalEntity): ExternalEntityDTO {
    return {
      id: parameter.id.id.toValue(),
      name: parameter.name,
      status: parameter.status,
      code: parameter.code,
    };
  }
  static toDomain(raw: any): ExternalEntity {
    const domainResponse = ExternalEntity.create(
      {
        name: raw.name,
        status: raw.status,
        code: raw.code,
        needToPay: +raw.need_to_pay == 1,
      },
      new UniqueEntityID(raw.external_entity_id),
    );
    return domainResponse;
  }

  static toPersistence(parameter: ExternalEntity): any {
    var response = {
      external_entity_id: parameter.id.id.toValue(),
      name: parameter.name,
      status: parameter.status,
      code: parameter.code,
    };
    return response;
  }
}
