import { instructorSliceAction } from './instructor/instructor.slice';
import * as instructorAction from './instructor/instructor.actions';
import { userSliceAction } from './user/user.slice';
import * as userActions from './user/user.action';

export const allActions = { ...userSliceAction, ...userActions, ...instructorSliceAction, ...instructorAction };
