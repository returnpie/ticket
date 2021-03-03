import { Publisher, OrderCreatedEvent, Subjects } from "@rpticket/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
