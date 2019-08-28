import React from 'react';
import { createRegion } from 'region-core';
import { Input } from 'antd';
import Card from "../shared/Card";
import Divider from "../shared/Divider";

const region = createRegion('initialValue')

const handleChange = (e) => region.set(e.target.value)

const Component = () => {
  const value = region.useValue();
  return (
    <Card>
      {value}
      <Divider/>
      <Input value={value} onChange={handleChange} />
    </Card>
  );
}

export default Component;
