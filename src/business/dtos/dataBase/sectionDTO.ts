export interface SectionDTO {
    id: string;
    code: string;
    name: string;
    flow_type: Number;
    service_integration_id: string;
  }
  
  export interface CreateSectionRequestDTO {
    id: string;
    code: string;
    name: string;
    flow_type: Number;
    service_integration_id: string;
  }
  