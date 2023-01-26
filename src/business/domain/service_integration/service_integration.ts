import { GenericId } from '../general/genericId';
import { Entity } from '../interfaces/Entity';
import { UniqueEntityID } from '../interfaces/UniqueEntityID';

export interface IServiceIntegrationProps {
  display_name: string;
  status: Boolean;
  code: string;
  service_id: string;
  image_url: string;
  extra_data: string;
}

export class ServiceIntegration extends Entity<IServiceIntegrationProps> {
  get id(): GenericId {
    return GenericId.create(this._id);
  }

  public get display_name(): string {
    return this.props.display_name;
  }

  public get status(): Boolean {
    return this.props.status;
  }

  public get code(): string {
    return this.props.code;
  }
  public get service_id(): string {
    return this.props.service_id;
  }

  public get image_url(): string {
    return this.props.image_url;
  }

  public get extra_data(): string {
    return this.props.extra_data;
  }

  private constructor(props: IServiceIntegrationProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(
    props: IServiceIntegrationProps,
    id?: UniqueEntityID,
  ): ServiceIntegration {
    const serviceIntegration: ServiceIntegration = new ServiceIntegration(
      props,
      id,
    );
    return serviceIntegration;
  }
}
