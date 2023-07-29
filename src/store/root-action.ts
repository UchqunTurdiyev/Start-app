import { instructorSliceAction } from './instructor/instructor.slice';
import * as instructorAction from './instructor/instructor.actions';
import { userSliceAction } from './user/user.slice';
import * as userActions from './user/user.action';
import * as courseActions from './course/course.action';
import { courseSliceAction } from './course/course.slice';

export const allActions = {
	...userSliceAction,
	...userActions,
	...instructorSliceAction,
	...instructorAction,
	...courseActions,
	...courseSliceAction,
};
