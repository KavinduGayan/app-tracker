const CloseIcon = ({ onDelete }) => {
    return (
        <button type="button" class="close" aria-label="Close" onClick={onDelete}>
            <span aria-hidden="true">&times;</span>
        </button>
    )
}

export default CloseIcon