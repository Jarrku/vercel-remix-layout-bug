import { Link } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/123/subpath">/123/subpath (NOT nested in subpath_ layout)</Link>
        </li>
        <li>
          <Link to="/123/subpath/hello">/123/subpath/hello (nested in subpath_ layout)</Link>
        </li>
      </ul>
    </div>
  );
}
