import { URL } from "url";

export const validateUrl = (value: string): boolean => {
	try {
		new URL(value);
		return true;
	} catch (err) {
		return false;
	}
};
