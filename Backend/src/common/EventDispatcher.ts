import { Event } from "./Event";

type Handler = (event: Event<any>)=> void;

export class EventDispatcher {
  public static handlers: Handler[] = [];
  
  public static register = (handler: Handler)=> {
    this.handlers.push(handler);
  }

  public static dispatch = (event: Event<any>)=> {
    this.handlers.forEach((handler)=> handler(event));
  }
}
