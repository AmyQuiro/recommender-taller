export interface ExternalIntegrationDTO {
    id: string;
    state: Boolean;
    service_integration_id: string;
    external_entity_id: string;
  }
  
  export interface CreateExternalIntegrationRequestDTO {
    id: string;
    state: Boolean;
    service_integration_id: string;
    external_entity_id: string;
  }
  