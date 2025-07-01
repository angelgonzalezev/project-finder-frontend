import { apiRequest } from "@/lib/api-client";
import { Project } from "@/types/project";
import { ApiResponse } from "./types";
import { FilterData } from "@/types/filters";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

export async function getProjects(filters?: FilterData): Promise<ApiResponse<Project[]>> {
	return await apiRequest<Project[]>(`${apiUrl}/projects`, {
		method: "POST",
		body: JSON.stringify(filters),
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export async function getProjectDetails(projectId: string): Promise<ApiResponse<Project>> {
	return await apiRequest<Project>(`${apiUrl}/projects/${projectId}`);
}
