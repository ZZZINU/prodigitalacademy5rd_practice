import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SigninPage() {
  // location: pathname과 state에 접근가능한 객체
  const location = useLocation();
  console.log(location);

  // ** page로 이돌하는 두가지방법. **
  // - 1. Link 컴포넌트 이용
  // - 2. navigate 함수 이용
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get('redirect'));
  console.log(searchParams.get('page'));
  console.log(searchParams.get('limit'));
  // http://localhost:5173/signin
  // ?redirect=sample
  // &page=1
  // &limit=10

  return (
    <div>
      <button
        onClick={(e) => {
          navigate('/'); // home으로 가기
          navigate(-1); // 뒤로가기
          // navigate('/', {})
          navigate('/', {
            state: {
              some: 'value',
            },
          });
        }}
      >
        홈으로 이동
      </button>
      <h1>This is my SigninPage</h1>
      <p>SigninPage입니다.</p>
    </div>
  );
}
