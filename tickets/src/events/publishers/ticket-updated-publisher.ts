import { Publisher, Subjects, TicketUpdatedEvent } from "@rpticket/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}
