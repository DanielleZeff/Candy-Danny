const ScoreBoard = ({score}) => {
    return (
        
        <div className="score-board">
            <div className="text"><strong>Score</strong></div>
            <h2> {score}</h2>

        </div>
        
    )
}

export default ScoreBoard;