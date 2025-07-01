import { Skill } from "@/types/skill";

/**
 * Formatea una lista de habilidades en una cadena legible en español.
 * - Si el array está vacío, retorna una cadena vacía.
 * - Si hay un solo elemento, lo retorna como string.
 * - Si hay dos elementos, los une con " y ".
 * - Si hay más de dos, separa con comas y añade " y " antes del último.
 * Ejemplo: ["Angular", "Bitbucket", "React"] => "Angular, Bitbucket y React"
 */
export const formatSkillList = (items: Skill[]) => {
	const skills = items.map((item: Skill) => item.name);

	if (!Array.isArray(skills)) return "";
	const len = skills.length;

	if (len === 0) return "";
	if (len === 1) return String(skills[0]);
	if (len === 2) return `${skills[0]} y ${skills[1]}`;

	const allButLast = skills.slice(0, -1).join(", ");
	const last = skills[len - 1];
	return `${allButLast} y ${last}`;
};
