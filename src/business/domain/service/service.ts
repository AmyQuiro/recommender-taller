import { GenericId } from '../general/genericId';
import { Entity } from '../interfaces/Entity';
import { UniqueEntityID } from '../interfaces/UniqueEntityID';

export interface IServiceProps {
  name: string;
  code: string;
  image_url?: string;
  service_type_id: string;
}

export class Service extends Entity<IServiceProps> {
  get id(): GenericId {
    return GenericId.create(this._id);
  }

  public get name(): string {
    return this.props.name;
  }

  public get code(): string {
    return this.props.code;
  }

  public get image_url(): string {
    return this.props.image_url ?? '';
  }

  public get service_type_id(): string {
    return this.props.service_type_id;
  }

  private constructor(props: IServiceProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: IServiceProps, id?: UniqueEntityID): Service {
    const service: Service = new Service(props, id);
    return service;
  }
}
