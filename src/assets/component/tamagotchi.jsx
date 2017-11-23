import React, {PropTypes,  Component } from 'react';

export default class Tamagotchi extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (

        <div id="contenedor">
          <div class="carcasa">
            <div class="carcasaInterna">
              <div id="lcd">
              </div>
              <div class="botones">
                <div class="boton" id="a"></div>
                <div class="boton" id="b"></div>
                <div class="boton" id="c"></div>
              </div>
            </div>
          </div>
        </div>
    );
  }
};
