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
            <a>GitHub</a>
          </li>
          <li>
            <a>
              npm
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
