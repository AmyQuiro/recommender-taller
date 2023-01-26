export interface ServiceDTO {
  id: string;
  name: string;
  code: string;
  image_url?: string;
  service_type_id: string;
}

export interface CreateServiceRequestDTO {
  id: string;
  name: string;
  code: string;
  image_url?: string;
  service_type_id: string;
}
