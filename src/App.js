import { useState } from 'react';
import './index.scss';

const Modal = ({ open, setOpen }) => (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className='modal'>
            <p onClick={() => setOpen(false)}>✘</p>
            <img
                src='https://media.giphy.com/media/WZrOaNjFPKT5e/giphy.gif'
                alt='gif'
            />
        </div>
    </div>
);

const App = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='App'>
            <button onClick={() => setOpen(true)} className='open-modal-btn'>
                ✪ Open the window
            </button>

            {/* First way */}

			{/* {open && <Modal open={open} setOpen={setOpen} />} */}

            {/* Second way */}

			<Modal open={open} setOpen={setOpen} />
        </div>
    );
};

export default App;
