import React from 'react';
import {RoboInfo} from '../index';
import {robotFleet, droneFleet} from '../../seed';

const Home = (props) => (
 <div>
    <RoboInfo robots={robotFleet} drones={droneFleet}/>
 </div>
);

export default Home;
