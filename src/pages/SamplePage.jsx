import { Link } from 'react-router-dom';

export default function SamplePage() {
  return (
    <div>
      <h1>Sample</h1>
      <Link to={'/'}>Main으로 이동</Link>
    </div>
  );
}
