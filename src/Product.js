import React, { Component } from 'react';
import './productsList.css';

class Product extends Component {
  render() {
    // const image = this.props.prod.image
    // const title = this.props.prod.title
    // const price = this.props.prod.price
    return (
      <div class="container">
        <ul class="responsive-table">
        <li class="table-header">
            <div class="col col-1">Tela</div>
            <div class="col col-2">Tipo</div>
            <div class="col col-3">Cantidad(mts)</div>
            <div class="col col-4">Costo de compra</div>
          </li>
          {this.props.filteredTelas.map((Tela) => {
            return (
            <li class="table-row" key={Tela.Tela}>
              <div class="col col-1" data-label="Tela">{Tela.Tela}</div>
              <div class="col col-2" data-label="Tipo">{Tela.Tipo}</div>
              <div class="col col-3" data-label="Cantidad(mts)">{Tela.Cantidad}(mts)</div>
              <div class="col col-4" data-label="Costo de compra">{Tela.Costo}</div>
            </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Product;