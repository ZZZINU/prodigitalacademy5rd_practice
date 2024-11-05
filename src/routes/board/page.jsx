import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { fetchBoardList } from '../../lib/apis/board';
import { Link } from 'react-router-dom';

export default function BoardListPage() {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    fetchBoardList().then((data) => {
      if (data) {
        setBoardList(data);
      }
    });
  }, []);

  return (
    <div>
      <h1>My Board</h1>

      {boardList.map((item) => {
        return (
          <Link
            to={`/board/${item._id}`}
            key={item._id}
            preventScrollReset
            className="text-decoration-none"
            state={{ data: item }}
          >
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.content}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
