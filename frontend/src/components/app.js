import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import NavBar from './atoms/NavBar';
import WalletPassForm from './molecules/WalletPassForm';

function App(props) {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <div>
                <NavBar />
                <WalletPassForm />
            </div>
        </>
    );
}

export default hot(App);