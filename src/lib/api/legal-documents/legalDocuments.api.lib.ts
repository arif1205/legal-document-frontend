import { API_BASE } from "../../../config/api/api.config";
import type { GenerateResponse } from "../../../types";

export async function generate(query: string): Promise<GenerateResponse> {
	try {
		// wait for 1 second to simulate a slow response
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const res = await fetch(`${API_BASE}/generate`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ query }),
		});
		const data = await res.json();

		if (!res.ok) throw new Error(data.error || "Something went wrong");

		return {
			success: true,
			data: data,
			error: undefined,
		};
	} catch (error) {
		return {
			success: false,
			error: error instanceof Error ? error.message : "Something went wrong",
			data: undefined,
		};
	}
}
