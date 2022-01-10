import { collection, query } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { FeatureItem } from './FeatureItem';

export function FeatureRating() {
  const firestore = useFirestore();
  const featuresCollection = collection(firestore, 'features');
  const featuresQuery = query(featuresCollection);

  // ReactFire!
  const { status, data: features } = useFirestoreCollectionData(featuresQuery, {
    idField: 'id', // this field will be added to the object created from each document
  });

  if (status === 'loading') {
    return <div>Loading data...</div>;
  }
  if (status === 'error') {
    return <div>Error connecting to database.</div>;
  }

  return (
    <ul>
      {features.map((feature: any) => (
        <FeatureItem key={feature.id} feature={feature} />
      ))}
    </ul>
  );
}
