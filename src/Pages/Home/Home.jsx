import React from 'react';
import { Slider } from './Slider';
import { Tickets } from './Tickets';
import { Subscriptions } from './Subscriptions';
import { WatchEverywhere } from './WatchEverywhere';
import { MainContent } from './MainContent';

export const Home = () => {
 
  return(
    <>
       <MainContent/>
       <Slider/>
       <Tickets/>
       <Subscriptions/>
       <WatchEverywhere/>
    </>
  )
}
