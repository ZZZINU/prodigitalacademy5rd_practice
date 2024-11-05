// Router: 긱 URL에 따른 page 컴포넌트 연결
import { createBrowserRouter } from 'react-router-dom';
// import MainPage from '../pages/MainPage';
// import MainPage from '~/pages/MainPage';
// import SamplePage from '../pages/SamplePage';
// import SamplePage from '~/pages/SamplePage';
// routes
import MainPage from '~/routes/page';
import BoardListPage from '~/routes/board/page';
import MyNavbar from '~/components/MyNavbar';
import BoardLayout from '../routes/board/layout';
import BoardDetailPage from '../routes/board/detail/page';
import SignupPage from '../routes/signup/page';
import SigninPage from '../routes/signin/page';

export const mainRoutes = [
  {
    path: '/',
    element: <BoardLayout />,
    children: [
      { element: <MainPage />, index: true },
      { element: <SigninPage />, path: 'signin' },
      { element: <SignupPage />, path: 'signup' },
      {
        path: '/board',
        children: [
          {
            path: '',
            index: true,
            element: <BoardListPage />,
          },
          {
            path: ':boardId',
            // index: true,
            element: <BoardDetailPage />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;
