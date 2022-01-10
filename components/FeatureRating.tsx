const features = [
  { title: 'Magic smoke' },
  { title: 'Breadboard (מטריצה) 🕯️' },
];

export function FeatureRating() {
  return (
    <ul>
      {features.map(({ title }) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
}
