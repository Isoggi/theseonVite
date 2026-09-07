type Props = { urls?: string[] };

export default function Portfolio({ urls }: Props) {
  return (
    <div>
      <h2>Portofolio</h2>
      <div>{urls && urls.map((url) => <p>{url}</p>)}</div>
    </div>
  );
}
