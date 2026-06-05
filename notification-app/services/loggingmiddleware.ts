

export const logRequest = async (
  url: string,
  options: RequestInit = {}
) => {
  console.log("========== API REQUEST ==========");
  console.log("URL:", url);
  console.log("Method:", options.method || "GET");
  console.log("Time:", new Date().toISOString());

  try {
    const response = await fetch(url, options);

    console.log("========== API RESPONSE ==========");
    console.log("Status:", response.status);
    console.log("Status Text:", response.statusText);

    return response;
  } catch (error) {
    console.error("========== API ERROR ==========");
    console.error(error);
    throw error;
  }
};