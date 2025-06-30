/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Formatea una lista de habilidades en una cadena legible en español.
 * - Si el array está vacío, retorna una cadena vacía.
 * - Si hay un solo elemento, lo retorna como string.
 * - Si hay dos elementos, los une con " y ".
 * - Si hay más de dos, separa con comas y añade " y " antes del último.
 * Ejemplo: ["Angular", "Bitbucket", "React"] => "Angular, Bitbucket y React"
 */
export const formatSkillList = (items: any[]) => {
	if (!Array.isArray(items)) return "";
	const len = items.length;

	if (len === 0) return "";
	if (len === 1) return String(items[0]);
	if (len === 2) return `${items[0]} y ${items[1]}`;

	const allButLast = items.slice(0, -1).join(", ");
	const last = items[len - 1];
	return `${allButLast} y ${last}`;
};
