import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      <h1>MainPage 14</h1>
      <Link to={'/sample'}>Sample로 이동</Link>
    </div>
  );
}
