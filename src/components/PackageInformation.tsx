import { memo } from "react";
import pkg from "../../package.json";

export const PackageInformation = memo(() => {
  return (
    <div>
      <h1>
        {pkg.name}@{pkg.version}
      </h1>

      <p>description</p>

      <nav>
        <ul>
          <li>
            <a>GitHub</a>
          </li>
          <li>
            <a>npm</a>
          </li>
        </ul>
      </nav>
    </div>
  );
});
