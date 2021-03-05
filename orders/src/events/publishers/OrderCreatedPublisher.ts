import {
  PublisherAbstract,
  OrderCreatedEventInterface,
  SubjectsEnum,
} from '@lahcene-dergham-tickets/common';

export class OrderCreatedPublisher extends PublisherAbstract<
  OrderCreatedEventInterface
> {
  subject: SubjectsEnum.OrderCreated = SubjectsEnum.OrderCreated;
}
