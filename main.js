class Header extends React.Component{
    render(){
        return <header>Header</header>;
    }
}

class Footer extends React.Component{
    render(){
        return <footer>Footer</footer>;
    }
}

class Main extends React.Component{

    constructor(){
        super()
        this.state = {
            counter: 0
        };
    }

    onIncrement() {
        console.log('Incrementa');
        this.setState({
            counter: this.state.counter + 1
        });
    }

    onDecrement() {
        console.log('Decrementa');
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render(){
        const {counter} = this.state;

        return <main>
            <button onClick={(e) => this.onIncrement()}>Incrementa</button>
            <button onClick={(e) => this.onDecrement()}>Decrementa</button>
            <div> Contatore =  {counter}</div>
        </main>;
    }
}

// Come passare le informazion ad un componente
class AppHeader extends React.Component {
    render() {
        
        // Variabile di stato visibile solo nella console
        console.log(this.props);
        
        const { titolo} = this.props; // ES 6
        
        return (
            
            <div>
                <h1>{titolo}</h1>
            </div>
        );
    }
}

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
/* ReactDOM.render(<Titolo titolo="Titolo App" welcome="Benvenuto nella nostra app" />,document.getElementById("root")); */