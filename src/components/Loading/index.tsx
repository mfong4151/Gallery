import React, { FC, useEffect, useState } from 'react'
import './loading.css'

const Loading: FC = () => {
    const [num, setNum] = useState<number>(0);
    
    useEffect(()=>{
        const modChanges = setInterval(()=>{
            setNum(prev => (prev + 1) % 101)
        }, 80)

        return(()=>{
            clearInterval(modChanges);
        })
    }, [])

  return (
    <div className='udc bg'>
        
         <svg className='progress-bar' viewBox='0 0 150 150'>
            <circle
                className='circle'
                cx='75'
                cy='75'
                r='70'
                fill='none'
                strokeWidth='10'
                stroke='#7EFFB2'
                strokeDasharray='439.82'
                strokeDashoffset={439.82 - (439.82 * num) / 100}
            />
                <text
                    className='number'
                    x='50%'
                    y='50%'
                    textAnchor='middle'
                    dominantBaseline='middle'
                    fill='white'
                >
                    {`${num}%`}
                </text>
            </svg>
    </div>
  )
}

export default Loading;
