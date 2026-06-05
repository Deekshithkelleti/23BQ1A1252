const BASE_ENDPOINT =
  "http://4.224.186.213/evaluation-service/notifications";

const ACCESS_TOKEN = "QQdEYy";

export const getNotificationData = async (
  pageNumber = 1,
  recordLimit = 10,
  notificationType = ""
) => {
  let requestUrl =
    `${BASE_ENDPOINT}?page=${pageNumber}&limit=${recordLimit}`;

  if (notificationType) {
    requestUrl += `&notification_type=${notificationType}`;
  }

  const response = await fetch(requestUrl, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return response.json();
};