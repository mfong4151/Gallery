import React, {useRef, FC, useState} from 'react';
import './bordereffect.css';

interface Props{

}
const BorderEffect:FC<Props> = () => {
  const cardRef = useRef<any>(null);
  const bokuNoColors = ['red', 'blue', 'green', 'fuchia', 'indigo'];
  const [currColor, setCurrColor] = useState<number>(0);

  const handleOnClick = (e:any):void => {
      e.preventDefault()
      e.stopPropagation()
      setCurrColor(prev => prev + 1)
  }


  return (
    <div id='' className={`udc frame ${bokuNoColors[currColor % bokuNoColors.length]}`} ref={cardRef}>
        <div id='' className='udc inner'>
            <button onClick={handleOnClick}
                className="gradient-btn"
            
            >
                Push to change colors</button>       
         </div>
    </div>
  );
};

export default BorderEffect;