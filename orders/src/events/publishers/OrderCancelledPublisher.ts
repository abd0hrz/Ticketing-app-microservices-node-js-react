import {
  PublisherAbstract,
  OrderCancelledEventInterface,
  SubjectsEnum,
} from '@lahcene-dergham-tickets/common';

export class OrderCancelledPublisher extends PublisherAbstract<
  OrderCancelledEventInterface
> {
  subject: SubjectsEnum.OrderCancelled = SubjectsEnum.OrderCancelled;
}
