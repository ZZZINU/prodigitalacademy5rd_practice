import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBoardDetail } from '~/lib/apis/board';
import { useState } from 'react';

export default function BoardDetailPage() {
  const [boardDetail, setBoardDetail] = useState({ title: '', content: '' });
  /**
   * /board/:boardId
   * :boardId 파라미터 받아오기
   */
  // :boardId 처럼 url에서 변수 받아오기
  // const params = useParams();
  // console.log(params.boardId);
  const { boardId } = useParams();

  useEffect(() => {
    fetchBoardDetail(boardId).then((data) => {
      setBoardDetail(data);
    });
  }, [boardId]);

  return (
    <div>
      {/* <h1>BoardDetail</h1>
      <div>This is BoardDetailPage</div> */}
      <h1>{boardDetail.title}</h1>
      <div>{boardDetail.content}</div>
    </div>
  );
}
