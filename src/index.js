import React, {useEffect} from 'react';

import {StatusBar, View} from 'react-native';
import Navigation from './Navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './State';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="light-content"
          />
          <Navigation />
        </View>
      </PersistGate>
    </Provider>
  );
};
export default App;
