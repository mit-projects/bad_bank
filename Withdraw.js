const Withdraw = () => {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const ctx = React.useContext(UserContext)

    const handleWithdraw = () => {
        setShow(false);
    }

    const clearForm = () => {
        setAmount(0)
        setShow(true)
    }

    const validate = (field, label) => {
        if (!field) {
            setStatus(`Error: ${label}`)
            setTimeout(() => setStatus(''), 500);
            return false
        }
        return true
    }

    return (
        <Card
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                    Name<br />
                    (balance)<br /><br />

                    Amount<br />
                    <input type="input" className="form-control" id="amount"
                        placeholder="Withdraw amount" value={amount}
                        onChange={e => setAmount(e.currentTarget.value)} /><br />

                    <button type="submit" className="btn btn-light" onClick={handleWithdraw}>
                        Withdraw
                    </button>
                </>
            ) : (
                <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light"
                        onClick={clearForm}>Another withdrawal</button>
                </>
            )}
        />
    )
}
