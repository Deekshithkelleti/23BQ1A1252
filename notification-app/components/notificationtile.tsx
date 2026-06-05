type NotificationTileProps = {
  title: string;
  description: string;
  isViewed: boolean;
  onOpen: () => void;
};

export default function NotificationTile({
  title,
  description,
  isViewed,
  onOpen,
}: NotificationTileProps) {
  return (
    <div
      onClick={onOpen}
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "12px",
        cursor: "pointer",
        backgroundColor: isViewed ? "#f9fafb" : "#eef6ff",
        transition: "0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>

        <span
          style={{
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {isViewed ? "Viewed" : "New"}
        </span>
      </div>

      <p
        style={{
          marginTop: "8px",
          color: "#555",
        }}
      >
        {description}
      </p>
    </div>
  );
}