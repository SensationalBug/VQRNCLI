import React from 'react';
import {ScrollView} from 'react-native';
import TaskBox from '../subComponents/TaskBox';

const Tasks = ({route, navigation}: any) => {
  const {params} = route;
  return (
    <ScrollView>
      {params[0].result.map((item: any, index: number) => (
        <TaskBox
          item={item}
          key={index}
          organizationId={params[1]}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

export default Tasks;
