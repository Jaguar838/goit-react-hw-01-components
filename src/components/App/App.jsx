import React from 'react';
import { Container } from '../Container/container'
import {Profile} from '../Profile/profile';
import {Statistics} from '../Statistics/statistics';
import {FriendList} from '../FriendList/friendList';
import {Transactions} from '../Transactions/transactions';

import userData from '../../server/user.json';
// import avatarNone from '../../server/avatarNone.jpg';
import statsData from '../../server/stats.json';
import friendsData from '../../server/friends.json';
import transactionsData from '../../server/transactions.json';


const App = () => {
    return (
        <>
            <Container>
             <Profile avatar={userData.avatar} name={userData.name} tag={userData.tag} location={userData.location} stats={userData.stats}/>   
             <Statistics items={statsData}/>
             <FriendList friends={friendsData}/>
            <Transactions transactions={transactionsData} />
            </Container>
        </>
    );
}
export default App;

