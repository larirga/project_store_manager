const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const mock = require('../mocks/products.models')
const { expect } = require('chai');
const sinon = require('sinon');

const chai = require('chai')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)

describe('Testando Controller de Products', function () {
  it('retorna corretamente o status 200', async function () {

    //arrange
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProducts')
      .resolves(mock.allProducts);
    
    // act
    await productsController.getProducts(req, res)


    // assert 
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.allProducts[0]);

    sinon.restore()
  })
  // it('retorna corretamente o produto pelo id', async function () {

  //   //arrange
  //   const req = {
  //     params: { id: 1 },
  //   };
  //   const res = {};

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productsService, 'getProducts')
  //     .resolves(mock.idProduct);
    
  //   // act
  //   const result = await productsController.getProducts(req, res)
  //   console.log(result);

  //   // assert 
  //   expect(res.status).to.have.been.calledWith(200);
  //   expect(res.json).to.have.been.calledWith(mock.idProduct);

  //   sinon.restore()
  // })

});
