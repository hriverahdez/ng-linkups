import { User } from "../../../@core/models/user.model";

export interface State {
  entities: { [_id: string]: User };
  loaded: boolean;
  loading: boolean;
}
