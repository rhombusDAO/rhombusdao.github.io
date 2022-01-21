import React, {useState, useEffect} from 'react';
import Hydra from 'hydra-synth';

const HydraCanvas = () =>  {

         useEffect(() => {

            const hydra = new Hydra({ 
                detectAudio: false,
                canvas: document.querySelector('#myCanvas')
             });


             setFunction({
                name: 'rhombify',
                type: 'coord',
                inputs: [
                  {
                    type: 'float',
                    name: 'amt',
                    default: '0.5'
                  }
                ],
                glsl:
              `vec2 xy = _st - vec2(0.5);
              xy.x += amt*xy.y;
              xy.y += amt*xy.y;
              xy += 0.5;
              return xy;`
              })
             //returns an error, but still works
             src(o0).blend(osc(10, 0.05, 1), 0.05)
             .mask(shape(4, 0.6).scale(1, 0.8).rhombify(0.25))
             .modulate(noise(8, 0.01), 0.001)
             .out(o0)
             render(o0)


            console.log('mounted');
            return () => console.log('unmounting...');
          }, [])  // <-- add this empty array here

        return (
                <canvas id="myCanvas"></canvas>
        )
    
}

export default HydraCanvas;