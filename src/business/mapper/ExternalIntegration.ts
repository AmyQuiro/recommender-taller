import { ExternalIntegrationDTO } from './../dtos/dataBase/ExternalIntegrationDTO';
import { ExternalIntegration } from './../domain/external_integration/external_integration';
import { UniqueEntityID } from '../domain/interfaces/UniqueEntityID';

export class ExternalIntegrationMap {
  static toDTO(parameter: ExternalIntegration): ExternalIntegrationDTO {
    return {
      id: parameter.id.id.toValue(),
      state: parameter.state,
      service_integration_id: parameter.service_integration_id,
      external_entity_id: parameter.external_entity_id,
    };
  }
  static toDomain(raw: any): ExternalIntegration {
    const domainResponse = ExternalIntegration.create(
      {
        state: raw.state,
        service_integration_id: raw.service_integration_id,
        external_entity_id: raw.external_entity_id,
      },
      new UniqueEntityID(raw.external_integration_id),
    );
    return domainResponse;
  }

  static toPersistence(parameter: ExternalIntegration): any {
    var response = {
        external_integration_id: parameter.id.id.toValue(),
        state: parameter.state,
        service_integration_id: parameter.service_integration_id,
        external_entity_id: parameter.external_entity_id,
    };
    return response;
  }
}
