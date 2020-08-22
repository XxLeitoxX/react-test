import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function SearchBar() {

  const { Search } = Input;


      return (
      <div>
       <Search
        prefix={<SearchOutlined />}
        placeholder="Search User"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
      </div>
      );



}