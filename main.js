class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            count: 100,
            clicked: false
        }
    }

    increment() {
        this.setState({
          count: this.state.count + 1
        });
      };

    decrement() {
        this.setState({
        count: this.state.count - 1
        });
    };

    reset() {
        this.setState({
        count: 0
        });
    };

    render() {
        return (
            <div>
                <button className='inc' onClick={(e) => this.increment(e)}>Incrementa</button>
                <button className='dec' onClick={(e) => this.decrement(e)}>Decrementa</button>
                <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
                <h1>Contatore: {this.state.count}</h1>
            </div>
        );
    }
 }
 
ReactDOM.render(<App />, document.getElementById("root")); 
