/**
 * @name formatWithCommas
 * @description Formats a number by adding commas as thousand separators.
 * @param {number | string} value - The number to format.
 * @returns {string} - The formatted number with commas.
 */
export const formatWithCommas = (value: number | string): string => {
	return Number(value).toLocaleString("en-US");
};
