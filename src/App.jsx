import { useState,useEffect  } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


class Simon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sequence: ["red", "blue"],
      isWinning: "",
      isEnable: false
    };
  }

  sequenceStart() {
    this.setState({ sequence });
  }

  onClearArray = () => {
    this.setState({ sequence: [] });
  };

  

  getRandomColor() {
    var randomColorInt = Math.floor(Math.random() * 4);

    switch (randomColorInt) {
      case 0:
        return "green";
      case 1:
        return "red";
      case 2:
        return "yellow";
      case 3:
        return"blue";
    }
  }



    onAddItem = (color) => {
      this.setState(state => {
        const sequence = state.sequence.concat(state.value);
       // ReactDOM.findDOMNode(App).getElementsByClassName(color).className = "image-clignote";
       document.getElementsByClassName(color).className = "image-clignote";
       console.log("test = " + document.getElementsByClassName(color).length)

        return {
          sequence,
          value: color,
        };
      });
    };

    // setEnable(){
    //   this.setState(this.state => {

    //   })
    // }

    componentDidMount() {


      // setInterval(() => {
      //     console.log('Interval triggered');
      //     this.onAddItem(this.getRandomColor());
      // }, 1000);

      // useEffect(() => {
      //   const interval = setInterval(() => {
      //     setSeconds(seconds => seconds + 1);
      //   }, 1000);
      //   return () => clearInterval(interval);
      // }, []);

      // useEffect(() => {
      //   const interval = setInterval(() => {
      //     this.onAddItem(this.getRandomColor());
      //   }, 1000);
      //   return () => clearInterval(interval);
      // }, []);


      // this.timerID = setInterval(
      //   () => this.tick(),
      //   1000
      // );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    


    render() {
      return (
        <div>
          <h1>Hello, world!</h1>

          <div className="card">

            <div>
              <button className='simmonBtn green image-clignote' style={{ backgroundColor: "green" }} onClick={() => setCount((count) => count + 1)}> </button>
              <button className='simmonBtn red' style={{ backgroundColor: "red" }} onClick={() => clearInterval(interval)}> </button>
            </div>

            <div>
              <button className='simmonBtn yellow' style={{ backgroundColor: "yellow" }} onClick={() => this.onAddItem()}> </button>
              <button className='simmonBtn blue' style={{ backgroundColor: "blue" }} onClick={() => this.onClearArray()}> </button>
            </div>

            <ul>
              {this.state.sequence.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

          </div>
        </div>
      );
    }
  }


function App() {
  const [count, setCount] = useState(0)

  // Sequence
  const [sequence, setSequence] = useState(0);

  // bip

  // vibration et couleur qui clignote

  // Disable les boutons lors de la séquence de présentation

  // Reconnaissance vocale

  return (
    <div className="App">
      <div>
        <img src="/simon_logo.png" className="logo" alt="Vite logo" />
      </div>
      <h1>Simon Game</h1>

      <Simon />

    </div>
  )
}

export default App
