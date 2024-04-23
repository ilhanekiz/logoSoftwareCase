import React from 'react';
import './SwitchButton.scss';
import PropTypes from 'prop-types';

const SwitchButton = (props) => {
  const { switchList } = props && props.data;

  const handleChange = (e, id) => {
    props.switchChanged(id);
    const $li = e.target.closest('li');
    const $allList = Array.from($li.parentNode.querySelectorAll('li'));
    const isActive = $li.classList.contains('active');
    if (!isActive) {
      $allList.forEach(node => node.classList.remove('active'));
      $li.classList.add('active');
    }
  };

  return (
    <> 
      {
        switchList && switchList.length > 0  && (
          <ul className="switch-button">
            {
              switchList.map((item, index) => {
                return <li key={index} className={item.active ? 'active' : ''}><a href="#!" onClick={(e) => handleChange(e, item.id)}>{item.value}</a></li>
              })
            }
          </ul>
        )
      }
    </>
  );
};

SwitchButton.propTypes = {
  switchList: PropTypes.array.isRequired,
  switchChanged: PropTypes.func
};

SwitchButton.defaultProps = {
   switchList: []
};

export default SwitchButton;
