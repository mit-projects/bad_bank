const { useState } = React;

const USERS = {
    users: [
        {
            name: 'Nick',
            email: 'nickjbernal@gmail.com',
            password: 'secret',
            balance: 100
        }
    ]
}
const Spa = () => {
    const [users, setUsers] = useState(USERS)
    return (
        <div className="app-container">
            <HashRouter>
                <Nav />
                <div className="content-container">
                    <UserContext.Provider value={users}>
                        <Route path="/" exact component={Home} />
                        <Route path="/create/" exact component={CreateAccount} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/deposit" exact component={Deposit} />
                        <Route path="/withdraw" exact component={Withdraw} />
                        <Route path="/balance" exact component={Balance} />
                        <Route path="/all" exact component={AllData} />
                    </UserContext.Provider>
                </div>
            </HashRouter>
        </div >
    )
}

ReactDOM.render(<Spa />, document.getElementById('root')
);
