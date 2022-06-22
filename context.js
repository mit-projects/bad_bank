const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

const Card = (props) => {
    const classes = () => {
        const bg = props.bgcolor ? 'bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' ';
        const class_str = 'card mb-3 ' + bg + txt;
        return class_str;
    }

    return (
        <div className={classes()} style={{ maxWidth: "25rem" }} >
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div >
    );
}