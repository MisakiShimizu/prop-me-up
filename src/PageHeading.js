const PageHeading = (props) => {
    return (
        <header>
            {props.children/* props stuff here (maybe some components) */}
            <p>This will appear where you see me</p>
        </header>
    )
}
export default PageHeading;