import { ApiResponse } from "@/services/types";

export const apiRequest = async <T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> => {
	try {
		const res = await fetch(url, options);

		if (!res.ok) {
			return {
				success: false,
				error: `HTTP ${res.status} - ${res.statusText}`,
			};
		}

		const data = await res.json();

		if (data.success) {
			return { success: true, data: data.data };
		}

		return {
			success: false,
			error: data.message || "Unknown error",
		};
	} catch (err) {
		return {
			success: false,
			error: (err as Error).message || "Unexpected error",
		};
	}
};
