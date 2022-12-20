import { generateId } from "./helpers/generateId";
import { getCurrentTime } from "./helpers/getCurrentTime";

export class Event<T> {
  public readonly id: string;
  public readonly name: string;
  public readonly time: string;
  public readonly data: T;

  public constructor(name: string, data: T) {
    this.id = generateId();
    this.name = name;
    this.time = getCurrentTime();
    this.data = data;
  }
}
