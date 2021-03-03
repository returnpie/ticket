import { Publisher, OrderCancelledEvent, Subjects } from "@rpticket/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
