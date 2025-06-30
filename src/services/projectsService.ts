import { Project } from "@/types/project";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

export async function getProjects(): Promise<Project[]> {
	const res = await fetch(`${apiUrl}/projects`);
	const data = await res.json();
	if (data.success) {
		return data.data;
	}
	throw new Error("Error fetching projects");
}
