import React, { useState } from 'react';

export default function useShowPassword() {
	const [show, setShow] = useState<boolean>(false);
	const [showConfirm, setShowConfirm] = useState<boolean>(false);

	const toggleShow = () => setShow(prev => !prev);
	const toggleShowConfirm = () => setShowConfirm(prev => !prev);

	return { show, toggleShow, toggleShowConfirm, showConfirm };
}
