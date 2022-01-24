import React, {useState, useEffect} from 'react';
import Hydra from 'hydra-synth';

const HydraCanvas = () =>  {

         useEffect(() => {

            const hydra = new Hydra({ 
                detectAudio: false,
                canvas: document.querySelector('#myCanvas')
             });

             setResolution(1080,1080)
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
  // jan 24
                // jan 24
let mod = () => Math.sin(time/10)*Math.sin(time/15)*3 + 5
osc(mod, 0, 1)
  .modulate(noise(6,2 ))
  .modulatePixelate(gradient(), 0.3, 2)
  .blend(src(o0).luma(0.4).scale(0.8), 0.2)
  .brightness(0.2)
  .rhombify()
  .out()


            console.log('mounted');
            return () => console.log('unmounting...');
          }, [])  // <-- add this empty array here

        return (
                <canvas id="myCanvas"></canvas>
        )
    
}

export default HydraCanvas;