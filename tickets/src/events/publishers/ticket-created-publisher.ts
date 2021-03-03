import { Publisher, Subjects, TicketCreatedEvent } from "@rpticket/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
