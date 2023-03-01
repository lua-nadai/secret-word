import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
      <p className="point">Pontuação: 000</p>
      <h1>Advinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>DICA</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name='letter' maxLength={1} required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras utilizadas:</p>
        <span>A,</span>
        <span>N,</span>
      </div>
    </div>
  )
}

export default Game