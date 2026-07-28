const API_URL = "http://localhost:8000/api";

export async function getProperties() {
  const response = await fetch(`${API_URL}/properties`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  const result = await response.json();
  return result.data;
}


export async function createProperty(data: any) {
let response: Response;

try {
  response = await fetch(`${API_URL}/properties`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
} catch (error) {
  console.error("Fetch Error:", error);
  throw error;
}
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to create property");
  }

  return result;
}