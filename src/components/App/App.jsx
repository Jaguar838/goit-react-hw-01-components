import React from 'react';
import { Container } from '../Container/container'

import userData from '../../server/user.json';
import Profile from '../Profile/profile';
import avatarNone from '../../server/avatarNone.jpg';

import friendsData from '../../server/friends.json';
import FriendItem from '../FriendList/FriendItem/friendItem';
import FriendList from '../FriendList/friendList';

import statsData from '../../server/stats.json';
import Statistics from '../Statistics/statistics';

import transactionsData from '../../server/transactions.json';
import Transactions from '../Transactions/transactions';


const App = () => {
    return (
        <>
            <Container>Hello World
             <FriendList/>
            </Container>
        </>
    );
}
export default App;