import { GenericId } from '../general/genericId';
import { Entity } from '../interfaces/Entity';
import { UniqueEntityID } from '../interfaces/UniqueEntityID';

export interface IExternalIntegrationProps {
  state: Boolean;
  service_integration_id: string;
  external_entity_id: string;
}

export class ExternalIntegration extends Entity<IExternalIntegrationProps> {
  get id(): GenericId {
    return GenericId.create(this._id);
  }

  public get state(): Boolean {
    return this.props.state;
  }

  public get service_integration_id(): string {
    return this.props.service_integration_id;
  }

  public get external_entity_id(): string {
    return this.props.external_entity_id;
  }

  private constructor(props: IExternalIntegrationProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: IExternalIntegrationProps, id?: UniqueEntityID): ExternalIntegration {
    const externalIntegration: ExternalIntegration = new ExternalIntegration(props, id);
    return externalIntegration;
  }
}
