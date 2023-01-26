export interface ServiceIntegrationDTO {
    id: string;
    display_name: string;
    status: Boolean;
    code: string;
    service_id: string;
  }
  
  export interface CreateServiceIntegrationRequestDTO {
    id: string;
    display_name: string;
    status: Boolean;
    code: string;
    service_id: string;
  }
  