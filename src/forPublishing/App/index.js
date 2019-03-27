import React from "react";
import styles from "./index.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  clickHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <button className={styles.button} onClick={this.clickHandler}>
          Click me
        </button>
        {this.state.clicked ? (
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            beatae sequi officia modi incidunt magnam ducimus molestias? Porro,
            iste nemo consectetur, unde eos impedit recusandae rerum cupiditate
            architecto asperiores et!
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
