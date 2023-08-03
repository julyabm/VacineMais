import { Home } from '../views/Home/index.js';
import {Stack } from './stack.js';


export function AuthRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}