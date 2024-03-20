import { Outlet } from "@remix-run/react";

export default function IdLayout() {
  return (
    <div>
      ID Layout
      <div style={{ border: "2px solid red", padding: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
