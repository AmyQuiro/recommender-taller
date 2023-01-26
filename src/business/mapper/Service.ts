import { ServiceDTO } from './../dtos/dataBase/serviceDTO';
import { Service } from './../domain/service/service';
import { UniqueEntityID } from '../domain/interfaces/UniqueEntityID';

export class ServiceMap {
  static toDTO(parameter: Service): ServiceDTO {
    return {
      id: parameter.id.id.toValue(),
      name: parameter.name,
      code: parameter.code,
      image_url: parameter.image_url ?? '',
      service_type_id: parameter.service_type_id,
    };
  }
  static toDomain(raw: any): Service {
    const domainResponse = Service.create(
      {
        name: raw.name,
        code: raw.code,
        image_url: raw.image_url ?? '',
        service_type_id: raw.service_type_id,
      },
      new UniqueEntityID(raw.service_id),
    );
    return domainResponse;
  }

  static toPersistence(parameter: Service): any {
    var response = {
      service_id: parameter.id.id.toValue(),
      name: parameter.name,
      code: parameter.code,
      image_url: parameter.image_url ?? '',
      service_type_id: parameter.service_type_id,
    };
    return response;
  }
}
