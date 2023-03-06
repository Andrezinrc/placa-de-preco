
import {useState} from 'react';
import './App.css'; 

function App() {

  const [tipoproduto, setTipoproduto] = useState('')
  const [nomeproduto, setNomeproduto] = useState('')
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState(0)
  const [kilo, setKilo] = useState("")

  return (
    <div className="App">
      <div className='placa'>
        <h1 className='titulo-placa'>{tipoproduto}</h1>
        <h3>{nomeproduto}</h3>
        <h2><strong>DESTAQUE</strong></h2>
        <h3 className="descricao">{descricao}</h3>
        <div className='preco'>
          <h2>RS: <h1>{valor}</h1></h2>
          <p>{kilo}</p>
        </div>
      </div>
      <form>
        <input type="text" placeholder="exemplo: OFERTA" onChange={(event) => setTipoproduto(event.target.value)} /><label> Tipo De Produto</label>
        <br></br>
        <input type="text" placeholder="exemplo: ACEM" onChange={(event) => setNomeproduto(event.target.value)} /><label> Nome Do Produto</label>
        <br></br>
        <input type="text" placeholder="exemplo: CARNE BOVINA" onChange={(event) => setDescricao(event.target.value)} /><label> Descricao</label>
        <br></br>
        <input type="text" placeholder="exemplo: 10,99" onChange={(event) => setValor(event.target.value)} /><label> Preco</label>
        <br></br>
        <input type="text" placeholder="exemplo: 2Kg ou 300ml" onChange={(event) => setKilo(event.target.value)} /><label> Kilos</label>
      </form>
    </div>
  );
}

export default App;