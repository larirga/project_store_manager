const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const mock = require('../mocks/products.models')
const { expect } = require('chai');
const sinon = require('sinon');

describe('Testando Service de Products', function () {
  it('retorna corretamente todos os produtos', async function () {

    //arrange

    sinon.stub(productsModel, 'getProducts')
      .resolves(mock.allProducts);
    
    // act
    const result = await productsService.getProducts()

    // assert 
    expect(result).to.be.deep.equal(mock.allProducts);
  })

    sinon.restore()

  it('retorna invalido os produtos por um id inexistente', async function () {
    
    //arrange
        sinon.stub(productsModel, 'getProductsId')
          .resolves(undefined);
    
    const invalidId = 9999;
    const statusCode = 404;
    // act
    try {
    await productsService.getProductsId(invalidId);
    // console.log(result);
    } catch (e) {
    expect(e.message).to.be.equal('Product not found');
    expect(e.status).to.be.equal(statusCode);
    }

    // assert 

    sinon.restore()
  })

  it('retorna corretamente o produto pelo id', async function () {

    //arrange
    sinon.stub(productsModel, 'getProductsId')
          .resolves(mock.idProductModel);

    // act
    const result = await productsService.getProductsId(1);
    // console.log(result)

    //assert
    expect(result).to.be.deep.equal(mock.idProductModel);

    sinon.restore()
  })
});
