import CloseIcon from '@mui/icons-material/Close';
const Toast = ({msg, handleShow, bgColor}) => {
    return(
        <div className={`toast show position-fixed text-light ${bgColor}`}
        style={{ top: '5px', right: '5px', zIndex: 9, minWidth: '280px' }} >

            <div className={`toast-header ${bgColor} text-light d-flex justify-content-between`}>
                <strong className="mr-auto text-light">{msg.title}</strong>

                <button type="button" className={`ms-2 mb-1 text-light close ${bgColor}`} 
                style={{ outline: 'none', border:'none'}} 
                onClick={handleShow}><CloseIcon fontSize="small" /></button>
            </div>

            <div className="toast-body">{msg.msg}</div>

        </div>
    )
}

export default Toast

