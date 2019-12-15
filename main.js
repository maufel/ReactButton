class ButtonDecrement extends React.Component {

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        console.log(this.props);
        const { counter, onDecrement } = this.props;

        return (
            <button onClick={(event) => this.decrement()}>Decrementa</button>
        );

    }
}

// Primo componente di React
class App extends React.Component {

    constructor(){
        super()
        this.state = {
            counter: 0
        };
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    
    render(){
        
        const { titolo, welcome } = this.props; 
        const { counter } = this.state;

        return (

            <div id="app">
                
                <Header />
                <AppHeader titolo={titolo} />
                <p>{welcome}</p>
                <button onClick={(event) => this.increment()}>Incrementa</button>
                <ButtonDecrement counter={counter} onDecrement={(event) => this.decrement()} />
                <div>
                    <span>Contatore: </span>
                    <span>{counter}</span>
                </div>
                
                <Footer />
                
            </div>
        );
    }
}

ReactDOM.render(<App titolo="Titolo App" welcome="Benvenuto nella nostra app"  />,document.getElementById("root")); 
