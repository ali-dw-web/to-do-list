import { useState } from 'react'
import Box from './mainbox.jsx'
export default function App() {

  let x = new Date()
  const [inp, setInp] = useState()
  const [data, setData] = useState([])
  const [bgc, setBgc] = useState({
    backgroundImage: ' linear-gradient(100deg, #575656, #062e3f)'
  })
  const [col, setCol] = useState([{
    id: 1,
    backgroundColor: ' #181a1a',
    color: 'white'
  }, {
    id: 2,
    color: '#ffdfdb'
  }
    , {
    id: 3,
    backgroundColor: '#181a1a'
  }])
  const color = (e) => {
    console.log(e.target.getAttribute('data-num'));
    if (e.target.getAttribute('data-num') == 1) {

      setBgc({ backgroundImage: ' linear-gradient(100deg, #575656, #062e3f)' })
      setCol([{
        id: 1,
        backgroundColor: ' #181a1a',
        color: 'white'
      }, {
        id: 2,
        color: '#ffdfdb'
      }
        , {
        id: 3,
        backgroundColor: '#181a1a'
      }])


    } else if (e.target.getAttribute('data-num') == 2) {
      setBgc({ backgroundImage: 'linear-gradient(100deg, #d4f1ff, #ffffff)' })
      setCol([{
        id: 1,
        backgroundColor: ' #aeb1b4',
        color: 'black'
      }, {
        id: 2,
        color: '#1a150e'
      }
        , {
        id: 3,
        backgroundColor: '#aeb1b4'
      }])



    } else {
      setBgc({ backgroundImage: 'linear-gradient(100deg, #001214, #001f29)' })
      setCol([{
        id: 1,
        backgroundColor: ' #01394c',
        color: 'white'
      }, {
        id: 2,
        color: '#ffffff'
      }
        , {
        id: 3,
        backgroundColor: '#01394c'
      }])
    }


  }



  function Add() {
    setInp('')
    if (!(inp == '' || inp == null)) {
      setData(previous => [...previous, inp])

    } else {
      alert('nothing has been written')
    }

  }





  return (
    <>
      <main id="main" className="container-fluid container-xxl" style={bgc}>
        <div className="row">
          <div className="col-12">
            <div onClick={color} data-num='1' style={{ backgroundImage: ' linear-gradient(100deg, #575656, #062e3f)' }}></div>
            <div onClick={color} data-num='2' style={{ backgroundImage: 'linear-gradient(100deg, #d4f1ff, #ffffff)' }}></div>
            <div onClick={color} data-num='3' style={{ backgroundImage: 'linear-gradient(100deg, #001214, #001f29)' }}></div>
          </div>
          <div className="col-12 second-part">
            <div className="col-12 ">
              <p className="col-xl-3 col-md-5 col-8 txl " style={col[1]}>Just Do it</p>
            </div>
            <div className="inp col-12 ">
              <div className="col-lg-6 col-md-8 col-10">
                <input style={col[0]} placeholder='Add a Task' value={inp} onChange={(e) => { setInp(e.target.value) }} type="text" />
                <button onClick={Add} >I Got This</button>
                <div className="time">
                  <div>
                    <span style={col[1]}>{x.getMonth()}/{x.getDay()}/{x.getFullYear()},  </span>
                  </div>
                  <div>
                    <span style={col[1]}>{x.getHours()}:{x.getMinutes()}:{x.getSeconds()}</span>
                  </div>
                </div>
              </div>


            </div>
            <Box setData={setData} dataprops={data} r={col} />
          </div>
        </div>
      </main>
    </>
  )
}