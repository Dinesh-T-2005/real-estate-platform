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
  const res = await fetch("http://localhost:8000/api/properties", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data; // <-- IMPORTANT
}

export async function deleteProperty(id: string) {
  const response = await fetch(`${API_URL}/properties/${id}`, {
    method: "DELETE",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}

export async function getPropertyById(id: string) {
  const response = await fetch(`${API_URL}/properties/${id}`, {
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function updateProperty(
  id: string,
  data: any
) {
  const response = await fetch(`${API_URL}/properties/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function uploadImage(file: File) {
  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch("http://localhost:8000/api/upload", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.image;
}
export async function createEnquiry(data: any) {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8000/api/enquiries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function getEnquiries(
  page = 1,
  limit = 10
) {
  const response = await fetch(
    `http://localhost:8000/api/enquiries?page=${page}&limit=${limit}`
  );

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message);
  }

  return result;
}

export async function loginUser(data: {
  email: string;
  password: string;
}) {
  const response = await fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function getDashboardStats() {
  const response = await fetch("http://localhost:8000/api/dashboard/stats");

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function getSettings() {
  const response = await fetch("http://localhost:8000/api/settings");
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function updateSettings(data: any) {
  const response = await fetch("http://localhost:8000/api/settings", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function searchProperties(params: URLSearchParams) {
  const response = await fetch(
    `http://localhost:8000/api/properties/search?${params.toString()}`
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}

export async function getPropertyGallery(propertyId: string) {
  const res = await fetch(
    `http://localhost:8000/api/property-images/${propertyId}`
  );

  const data = await res.json();

  return data.data;
}


export async function registerUser(data: any) {
  const response = await fetch(
    "http://localhost:8000/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result.data;
}


export async function getUserProfile() {
  const token = localStorage.getItem("token");

  console.log("TOKEN:", token);

  const res = await fetch(
    "http://localhost:8000/api/user/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function updateUserProfile(data: {
  fullName: string;
  phone: string;
}) {
  const token = localStorage.getItem("token");

  const res = await fetch(
    "http://localhost:8000/api/user/profile",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function saveProperty(propertyId: string) {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${API_URL}/saved-properties/${propertyId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function getSavedProperties() {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${API_URL}/saved-properties`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function removeSavedProperty(propertyId: string) {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${API_URL}/saved-properties/${propertyId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function getMyEnquiries() {

  const token = localStorage.getItem("token");

  const res = await fetch(
    "http://localhost:8000/api/user/enquiries",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function deleteEnquiry(id: string) {
  const res = await fetch(
    `http://localhost:8000/api/enquiries/${id}`,
    {
      method: "DELETE",
    }
  );

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json;
}

export async function updateEnquiryStatus(
  id: string,
  status: string
) {
  const res = await fetch(
    `http://localhost:8000/api/enquiries/${id}/status`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function getMonthlyChart() {
  const res = await fetch(
    "http://localhost:8000/api/dashboard/monthly"
  );

  const json = await res.json();

  return json.data;
}


export async function getUsers() {
  const res = await fetch("http://localhost:8000/api/user");

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function updateUserStatus(
  id: string,
  isActive: boolean
) {
  const res = await fetch(
    `http://localhost:8000/api/user/${id}/status`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isActive }),
    }
  );

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data;
}

export async function deleteUser(id: string) {
  const res = await fetch(
    `http://localhost:8000/api/user/${id}`,
    {
      method: "DELETE",
    }
  );

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json;
}