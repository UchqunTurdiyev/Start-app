import { userSliceAction } from './user/user.slice';
import * as userActions from './user/user.action';

export const allActions = { ...userSliceAction, ...userActions };
