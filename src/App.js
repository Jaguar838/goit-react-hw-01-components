import React from 'react';
import {Container} from './components/Container/container'
import userData from './server/user.json';
import Profile from './components/Profile/profile';
import avatarNone from './server/avatarNone.jpg';
import friendsData from './server/friends.json';
import FriendsItem from './components/FriendsItem/friendsItem';
import statsData from './server/stats.json';
import Statistics from './components/Statistics/statistics'
import transactionsData from './server/transactions.json';
import Transactions from './components/Transactions/transactions';


const App = () => {
    return (
        <>
            <Container>Hello World</Container>
        </>
    );
}
export default App;