import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { allActions } from '@/store/root-action';

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};

// bind action creater bu asynxron sorovlar bilan bog'lidi
