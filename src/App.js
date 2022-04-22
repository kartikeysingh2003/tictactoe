import React from "react";
import Grid from "./Grid";
import Playerinfo from "./playerinfo";
import Header from "./header";
import styles from './grid.module.css';
import Image from "./image";

function App(props) {

    const [data, setdata] = React.useState({
        winner: {
            name:undefined,
            indexes: []
        },
        turn: 'cross',
        positions: new Array(9).fill(null)
    });
    const handleClick = () => {
        window.location.reload();  // recommended
        //window.location.href = window.location.href;  // not recommended
      };

    return (
        <>
        <Header />
        <Playerinfo turn={data.turn} winner={data.winner.name} />
        <Image winner={data.winner.name} />
        
        <div className={styles.reset}>
        <button   onClick={handleClick}>Reset</button>
        </div>
        <Grid
            winningIndexes={data.winner.indexes}
            positions={data.positions}
            setPositions={index => {
                setdata(prevData => {
                    if (!prevData.positions[index] && !prevData.winner.name) {
                        const data = { ...prevData };
                        data.positions[index] = data.turn;
                        const lines = [
                            [0, 1, 2],
                            [3, 4, 5],
                            [6, 7, 8],
                            [0, 3, 6],
                            [1, 4, 7],
                            [2, 5, 8],
                            [0, 4, 8],
                            [2, 4, 6],
                        ];
                        lines.forEach(line=>{
                            const [a,b,c]=line;
                            if(data.positions[a]&&data.positions[a]===data.positions[b]&&data.positions[a]===data.positions[c])
                            {
                                
                                data.winner.name = data.turn;
                                
                                    data.winner.indexes=line;
                                
                            }
                        });
                        data.turn = (data.turn === 'cross' ? 'circle' : 'cross');
                        return data;
                    }
                    else {
                        return prevData;
                    }
                })
            }}

        />
     
        </>
    )
}

export default App;