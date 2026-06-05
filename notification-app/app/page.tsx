import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Campus Notification Dashboard</h1>

        <p>
          View notifications and filter them by type.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link href="/notifications">
            Notifications
          </Link>

          <Link href="/filter">
            Filter Notifications
          </Link>
        </div>
      </div>
    </main>
  );
}