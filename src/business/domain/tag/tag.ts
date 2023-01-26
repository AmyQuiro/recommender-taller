import { GenericId } from '../general/genericId';
import { Entity } from '../interfaces/Entity';
import { UniqueEntityID } from '../interfaces/UniqueEntityID';

export interface ITagProps {
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

export class Tag extends Entity<ITagProps> {
  get id(): GenericId {
    return GenericId.create(this._id);
  }

  public get code(): string {
    return this.props.code;
  }

  public get label(): string {
    return this.props.label;
  }

  public get order(): number {
    return this.props.order;
  }

  public get is_required(): boolean {
    return this.props.is_required;
  }

  public get datatype(): number {
    return this.props.datatype;
  }

  public get is_numeric(): boolean {
    return this.props.is_numeric;
  }

  public get is_alphanumeric(): boolean {
    return this.props.is_alphanumeric;
  }

  public get max_length(): number {
    return this.props.max_length;
  }

  public get only_letters(): boolean {
    return this.props.only_letters;
  }

  public get with_special_characters(): boolean {
    return this.props.with_special_characters;
  }

  public get value(): string {
    return this.props.value;
  }

  public get can_modify(): boolean {
    return this.props.can_modify;
  }

  public get section_id(): string {
    return this.props.section_id;
  }

  private constructor(props: ITagProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ITagProps, id?: UniqueEntityID): Tag {
    const tag: Tag = new Tag(props, id);
    return tag;
  }
}
