import AppName from "./appName";

const AppNames = ({appNames,alertStyle , onDelete , onDoubleClick}) => {
    return (
        <div>
            {appNames.map((appName) => (
                <AppName key={appName.id} apps={appName} alertStyle={alertStyle} onDelete={onDelete} 
                onDoubleClick={onDoubleClick}/> 
            ))}
        </div>
    )
}
export default AppNames