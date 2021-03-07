import {
  SubjectsEnum,
  PublisherAbstract,
  PaymentCreatedEventInteface,
} from '@lahcene-dergham-tickets/common';

export class PaymentCreatedPublisher extends PublisherAbstract<
  PaymentCreatedEventInteface
> {
  subject: SubjectsEnum.PaymentCreated = SubjectsEnum.PaymentCreated;
}
