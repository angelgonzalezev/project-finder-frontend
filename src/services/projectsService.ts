import { apiRequest } from "@/lib/api-client";
import { Project } from "@/types/project";
import { ApiResponse } from "./types";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

export async function getProjects(): Promise<ApiResponse<Project[]>> {
	return await apiRequest<Project[]>(`${apiUrl}/projects`);
}

export async function getProjectDetails(projectId: string): Promise<ApiResponse<Project>> {
	return await apiRequest<Project>(`${apiUrl}/projects/${projectId}`);
}
