import { DataObject } from './data-object.model';

export class Player extends DataObject {

  public id: number;
  public userName: string;
  public game: string;
  public difficulty: string;
  public startTime: Date;
  public endTime: Date;
  public score: number;

  constructor() {
    super();
  }
}
