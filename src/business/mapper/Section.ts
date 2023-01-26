import { SectionDTO } from './../dtos/dataBase/sectionDTO';
import { Section } from './../domain/section/section';
import { UniqueEntityID } from '../domain/interfaces/UniqueEntityID';

export class SectionMap {
  static toDTO(parameter: Section): SectionDTO {
    return {
      id: parameter.id.id.toValue(),
      code: parameter.code,
      name: parameter.name,
      flow_type: parameter.flow_type,
      service_integration_id: parameter.service_integration_id,
    };
  }
  static toDomain(raw: any): Section {
    const domainResponse = Section.create(
      {
        code: raw.code,
        name: raw.name,
        flow_type: raw.flow_type,
        service_integration_id: raw.service_integration_id,
        tag: raw.Tags,
      },
      new UniqueEntityID(raw.section_id),
    );
    return domainResponse;
  }

  static toPersistence(parameter: Section): any {
    var response = {
      section_id: parameter.id.id.toValue(),
      code: parameter.code,
      name: parameter.name,
      flow_type: parameter.flow_type,
      service_integration_id: parameter.service_integration_id,
    };
    return response;
  }
}
