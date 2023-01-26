import { GenericId } from '../general/genericId';
import { Entity } from '../interfaces/Entity';
import { UniqueEntityID } from '../interfaces/UniqueEntityID';
import { Tag } from '../tag/tag';

export interface ISectionProps {
  code: string;
  name: string;
  flow_type: Number;
  service_integration_id: string;
  tag: Tag[];
}

export class Section extends Entity<ISectionProps> {
  get id(): GenericId {
    return GenericId.create(this._id);
  }

  public get code(): string {
    return this.props.code;
  }

  public get name(): string {
    return this.props.name;
  }

  public get flow_type(): Number {
    return this.props.flow_type;
  }

  public get service_integration_id(): string {
    return this.props.service_integration_id;
  }

  public get tags(): Tag[] {
    return this.props.tag;
  }
  public set tags(newTags) {
    this.props.tag = newTags;
  }

  private constructor(props: ISectionProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ISectionProps, id?: UniqueEntityID): Section {
    const section: Section = new Section(props, id);
    return section;
  }
}
