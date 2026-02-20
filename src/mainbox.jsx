import { useState } from 'react'
export default function Box({ dataprops , setData , r}) {
     const [style , setStyle] = useState({})
     const [status , setStatus] = useState({})
    
    function confirm(ind) {
       if (status[ind] == true) {
        setStyle(pre => ({...pre , [ind]:{}}))
        setStatus(pre =>({...pre , [ind]:false}) )
       }else{
         setStyle(pre => ({
      ...pre,
      [ind]: { textDecoration: 'line-through', opacity: '0.6' }
    }));
    setStatus(pre => ({...pre , [ind] : true}))
       }
  }
  function del(ind){
     
    
      setData(prev => prev.filter((_, i) => i !== ind))
  
  }
    return (
        <>
            <div className="box col-12">
                <div>{dataprops.map((s , ind) => {
                    return (
                        <>
                            <div className="main" style={{...style[ind] , ...r[2]} }>
                                <div>
                                    <p className="col-12">{s}</p>
                                </div>
                                <div >
                                    <span className="icon-ok" onClick={()=> confirm(ind)}></span>
                                    <span  className="icon-trash" onClick={()=> del(ind)}></span>
                                </div>
                            </div>
                        </>
                    )
                })}</div>
            </div>
        </>
    )

}