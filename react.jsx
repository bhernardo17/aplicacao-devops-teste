function App() {
    const [items, setItems] = React.useState([]);

    const addItem = () => {
        const name = prompt('Digite o seu nome: '); 
        const rank = parseInt(prompt('Uma nota de 0 a 10 pro projeto: '));
        const mural = prompt('Sugestão para que seu feedback preencha nosso mural: ');
        if (name && mural && !isNaN(rank)) {
            setItems([...items, { name, rank, mural }]);
        }
    };

    return (
        <div className="main">
            <div className="head">
                <h1>Deixe seu feedback!</h1>
                <button onClick={addItem}>Adicionar FeedBack</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        Nome: {item.name}, <br/> <br/> Su: {item.rank} <br/> <br/> Mural: {item.mural}
                    </li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));