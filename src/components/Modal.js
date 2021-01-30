import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div
                onClick={e => e.stopPropagation()}
                className="ui standard modal visible active"
            >
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    <div onClick={props.onDismiss}
                         className="ui button">Close</div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal-window-container')
    );
};

export default Modal;