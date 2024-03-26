
export default async function getUserProfile(token: string) {
  const response = await fetch(
    "http://localhost:3000/api/me",
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to get user profile");
  }
  return await response.json();
}