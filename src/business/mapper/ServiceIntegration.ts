import { ServiceIntegrationDTO } from './../dtos/dataBase/serviceIntegrationDTO';
import { ServiceIntegration } from './../domain/service_integration/service_integration';
import { UniqueEntityID } from '../domain/interfaces/UniqueEntityID';

export class ServiceIntegrationMap {
  static toDTO(parameter: ServiceIntegration): ServiceIntegrationDTO {
    return {
      id: parameter.id.id.toValue(),
      display_name: parameter.display_name,
      status: parameter.status,
      code: parameter.code,
      service_id: parameter.service_id,
    };
  }
  static toDomain(raw: any): ServiceIntegration {
    const domainResponse = ServiceIntegration.create(
      {
        display_name: raw.display_name,
        status: raw.status,
        code: raw.code,
        service_id: raw.service_id,
        image_url: raw['service.image_url'],
        extra_data: raw.extra_data,
      },
      new UniqueEntityID(raw.service_integration_id),
    );
    return domainResponse;
  }

  static toPersistence(parameter: ServiceIntegration): any {
    var response = {
      service_integration_id: parameter.id.id.toValue(),
      display_name: parameter.display_name,
      status: parameter.status,
      code: parameter.code,
      service_id: parameter.service_id,
      extra_data: '',
    };
    return response;
  }
}
