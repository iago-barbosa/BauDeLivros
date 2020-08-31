import * as React from 'react';
import { Text, View} from 'react-native';

export default function Home () {
    return(
        <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 24, textAlign: 'center'}}>
                Aqui está a Home!
            </Text>
        </View>
    );
}