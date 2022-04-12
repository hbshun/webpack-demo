import React from 'react';
import MyComponent from '../components/MyComponent';
import _ from 'lodash'

export default function () {
  return <>
    <h2>Basic Home Page {_.uniqueId('uid')}</h2>
    <MyComponent />
  </>;
}
