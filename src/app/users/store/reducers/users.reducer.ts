import { User } from "../../../@shared/models";

export interface State {
  entities: { [_id: string]: User };
  loaded: boolean;
  loading: boolean;
}
