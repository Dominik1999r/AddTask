import { ObjectUnsubscribedError } from 'rxjs';

export interface Task {
  name: string;
  created: Date;
  end?: Date;
}
