import { FC } from "react";
import pkg from "../../package.json";

export const PackageInformation: FC = () => {
  return (
    <div>
      <h1>
        {pkg.name}@{pkg.version}
      </h1>

      <p>{pkg.description}</p>

      <nav>
        <ul>
          <li>
            <a href="https://github.com/ztrehagem/react-modal">GitHub</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/@ztrehagem/react-modal">
              npm
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
