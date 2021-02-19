import CloseIcon from "./CloseIcon";
const AppName = ({ apps , alertStyle , onDelete ,onDoubleClick}) => {
    return (
        <div className={apps.reminder ? alertStyle : 'alert alert-danger'} onDoubleClick={() => onDoubleClick(apps.id)}>
            {apps.name} <CloseIcon onDelete={() => onDelete(apps.id)}/>
        </div>
    )
}

export default AppName