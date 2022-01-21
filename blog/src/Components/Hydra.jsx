import React, {useState, useEffect} from 'react';
import Hydra from 'hydra-synth';

const HydraCanvas = () =>  {



         useEffect(() => {

            const hydra = new Hydra({ 
                detectAudio: false,
             });

             osc().out();
            console.log('mounted');
            return () => console.log('unmounting...');
          }, [])  // <-- add this empty array here

        return (
                <canvas id="hydraCanvas"></canvas>
        )
    
}

export default HydraCanvas;