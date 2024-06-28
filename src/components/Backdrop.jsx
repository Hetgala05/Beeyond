import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Backdrop.css';

const Backdrop = ({ isOpen, onClose }) => {
  
  return (
    <div className='Backdrop'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="backdrop"
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '100vh' }}
              transition={{ stiffness: 100 }}
              style={{
                background: '#BCBEB3',
                padding: '20px',
                borderRadius: '10px',
              }}
            >
              
                <div className = 'nav_bd'>
                  <button>Menu</button>
                  <h1>OurRevolution</h1>
                  <button>Work*</button>
                </div>
              <div className="bd_text">
                <ul>
                  <li><a>home</a></li>
                  <li><a>about us</a></li>
                  <li><a>new</a></li>
                  <li><a>ventures</a></li>
                  <li><a>contact</a></li>
                </ul>
                <ul className='social_backdrop'>
                  <a>Linkedin</a>
                  <a>behance</a>
                  <a>instagram</a>
                  <a>pinterest</a>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Backdrop;
