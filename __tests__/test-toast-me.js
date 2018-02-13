import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import ToastMe from '../src/index'

it('renders correctly', () => {
  const tree = renderer.create(
    <ToastMe message={'Hello world!'} type={'success'} isShow={true} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})