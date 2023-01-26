import { GenericId } from '../general/genericId';
import { Entity } from '../interfaces/Entity';
import { UniqueEntityID } from '../interfaces/UniqueEntityID';

export interface IExternalEntityProps {
  name: string;
  status: boolean;
  code: string;
  needToPay: boolean;
}

export class ExternalEntity extends Entity<IExternalEntityProps> {
  get id(): GenericId {
    return GenericId.create(this._id);
  }

  public get name(): string {
    return this.props.name;
  }

  public get status(): boolean {
    return this.props.status;
  }

  public get code(): string {
    return this.props.code;
  }

  public get needToPay(): boolean {
    return this.props.needToPay;
  }

  private constructor(props: IExternalEntityProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(
    props: IExternalEntityProps,
    id?: UniqueEntityID,
  ): ExternalEntity {
    const externalEntity: ExternalEntity = new ExternalEntity(props, id);
    return externalEntity;
  }
}
