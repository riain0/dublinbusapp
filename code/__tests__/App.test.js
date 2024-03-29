import 'react-native';
import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import {ConnectivityRenderer} from 'react-native-offline';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App creation', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <App />
    );
  });
});
