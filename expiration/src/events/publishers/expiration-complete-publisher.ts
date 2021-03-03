import { Subjects, Publisher, ExpirationCompleteEvent } from "@rpticket/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
