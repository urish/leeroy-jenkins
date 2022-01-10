import { arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { useFirestore, useUser } from 'reactfire';

interface IFeatureItemProps {
  feature: { id: string; title: string; votes?: string[] };
}

export function FeatureItem({ feature }: IFeatureItemProps) {
  const { data: user } = useUser();
  const firestore = useFirestore();
  const featuresCollection = collection(firestore, 'features');
  const votes = feature.votes ?? [];
  const voted = user && votes.includes(user.uid);

  const vote = () => {
    updateDoc(doc(featuresCollection, feature.id), {
      votes: arrayUnion(user?.uid),
    });
  };

  return (
    <li>
      {feature.title} <button onClick={vote}>Vote</button>
      Votes: {feature.votes?.length || 0}
    </li>
  );
}
