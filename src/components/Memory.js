import React, { useState } from 'react'
import styles from "./Memory.module.scss";
import Utils from '../helpers/utils';
const Memory = () => {
    const [memory,setMemory]=useState(Utils.createMemory(15));
    console.log(memory);
  return (
    <div className={styles.memory}>
        {memory.map(eachRow=>{
            return (<div className={styles.row}>
                        {eachRow.map(eachCell=>{
                                return <div className={styles.cell}/>
                        })}
                    </div>)
        })}
        
    </div>
  )
}

export default Memory