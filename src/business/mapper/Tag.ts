import { TagDTO } from './../dtos/dataBase/tagDTO';
import { Tag } from './../domain/tag/tag';
import { UniqueEntityID } from '../domain/interfaces/UniqueEntityID';

export class TagMap {
  static toDTO(parameter: Tag): TagDTO {
    return {
      id: parameter.id.id.toValue(),
      code: parameter.code,
      label: parameter.label,
      order: parameter.order,
      is_required: parameter.is_required,
      datatype: parameter.datatype,
      is_numeric: parameter.is_numeric,
      is_alphanumeric: parameter.is_alphanumeric,
      max_length: parameter.max_length,
      only_letters: parameter.only_letters,
      with_special_characters: parameter.with_special_characters,
      value: parameter.value,
      can_modify: parameter.can_modify,
      section_id: parameter.section_id,
    };
  }
  static toDomain(raw: any): Tag {
    const domainResponse = Tag.create(
      {
        code: raw.code,
        label: raw.label,
        order: raw.order,
        is_required: raw.is_required,
        datatype: raw.datatype,
        is_numeric: raw.is_numeric,
        is_alphanumeric: raw.is_alphanumeric,
        max_length: raw.max_length,
        only_letters: raw.only_letters,
        with_special_characters: raw.with_special_characters,
        value: raw.value,
        can_modify: raw.can_modify,
        section_id: raw.section_id,
      },
      new UniqueEntityID(raw.tag_id),
    );
    return domainResponse;
  }

  static toPersistence(parameter: Tag): any {
    var response = {
        tag_id: parameter.id.id.toValue(),
        code: parameter.code,
        label: parameter.label,
        order: parameter.order,
        is_required: parameter.is_required,
        datatype: parameter.datatype,
        is_numeric: parameter.is_numeric,
        is_alphanumeric: parameter.is_alphanumeric,
        max_length: parameter.max_length,
        only_letters: parameter.only_letters,
        with_special_characters: parameter.with_special_characters,
        value: parameter.value,
        can_modify: parameter.can_modify,
        section_id: parameter.section_id,
    };
    return response;
  }
}
