export interface TagDTO {
    id: string;
    code: string;
    label: string;
    order: number;
    is_required: boolean;
    datatype: number;
    is_numeric: boolean;
    is_alphanumeric: boolean;
    max_length: number;
    only_letters: boolean;
    with_special_characters: boolean;
    value: string;
    can_modify: boolean;
    section_id: string;
  }
  
  export interface CreateTagRequestDTO {
    id: string;
    code: string;
    label: string;
    order: number;
    is_required: boolean;
    datatype: number;
    is_numeric: boolean;
    is_alphanumeric: boolean;
    max_length: number;
    only_letters: boolean;
    with_special_characters: boolean;
    value: string;
    can_modify: boolean;
    section_id: string;
  }
  