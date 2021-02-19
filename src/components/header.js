
const Header = (props) => {
    return (
        <header>
            <h1 className="App">{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'App Tracker'
}

export default Header