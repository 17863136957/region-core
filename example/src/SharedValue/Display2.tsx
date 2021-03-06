import React from 'react';
import { Space } from 'antd';
import { Card, Button, Lines } from '../components';
import { loadFollower, clearFollower, useLoading, useUser, useFollower } from './load';

const Display = () => {
  const loading = useLoading();
  const user = useUser();
  const follower = useFollower();
  return (
    <Card
      title={user}
      style={{ width: 300, margin: 30 }}
    >
      <Lines lines={follower} />
      <Space>
        <Button loading={loading} onClick={loadFollower}>More</Button>
        <Button loading={loading} onClick={clearFollower}>Clear</Button>
      </Space>
    </Card>
  );
};

export default Display;
