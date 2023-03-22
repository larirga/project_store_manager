const productsModel = require('../../../src/models/products.model');
const mock = require('../mocks/products.models')
const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection.model');

describe('Testando Model de Products', function () {
  it('retorna corretamente todos os produtos', async function () {

  // arrange
    sinon.stub(connection, 'execute')
      .resolves(mock.allProducts);

  // act
    const result = await productsModel.getProducts();

  // assert 
    
    expect(result).to.be.deep.equal(mock.allProducts);

    sinon.restore()
  })
  it('retorna corretamente o produpo pelo id', async function () {

    //arrange
    sinon.stub(connection, 'execute')
      .resolves([[mock.idProduct]]);

    // act
    const result = await productsModel.getProductsId();

    //assert
    expect(result).to.be.deep.equal(mock.idProduct);

    sinon.restore()
  })
});