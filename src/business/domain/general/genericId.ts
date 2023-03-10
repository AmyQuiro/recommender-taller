import { UniqueEntityID } from './../interfaces/UniqueEntityID';
import { Entity } from "../interfaces/Entity";

export class GenericId extends Entity<any> {
  get id(): UniqueEntityID {
    return this._id;
  }

  private constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  public static create(id?: UniqueEntityID): GenericId {
    return new GenericId(id);
  }
}
