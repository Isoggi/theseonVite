import { Link, Title2 } from "@fluentui/react-components";
import { IGitRepository } from "../Interfaces";

const GitRepositorySection = (data: IGitRepository[]) => {
  return (
    <section aria-labelledby="repository-heading">
      <div>
        <Title2 as="h2" id="repository-heading">
          Repositories
        </Title2>
      </div>
      <div>
        {data.map((repo) => (
          <Link href={repo.url}>{repo.title}</Link>
        ))}
      </div>
    </section>
  );
};

export default GitRepositorySection;
