import { Outlet } from "@remix-run/react";

export default function IdPathlessLayout() {
  return (
    <div>
      ID Subpath Layout
      <div style={{ border: "2px solid green", padding: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
