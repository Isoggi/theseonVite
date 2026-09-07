type Props = {
  theme?: string;
};

export default function Home({ theme }: Props) {
  return <div>Home {theme ? `: ${theme}` : ""}</div>;
}
