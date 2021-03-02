import {
  SubjectsEnum,
  PublisherAbstract,
  ExpirationCompleteEventInterface,
} from '@lahcene-dergham-tickets/common';

export class ExpirationCompletePublisher extends PublisherAbstract<
  ExpirationCompleteEventInterface
> {
  subject: SubjectsEnum.ExpirationComplete = SubjectsEnum.ExpirationComplete;
}
