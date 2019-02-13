const MyToken = artifacts.require('MyToken');

contract('DappToken', accounts => {
  const _name = 'My Token TRC20';
  const _symbol = 'MYT';
  const _decimals = 18;
  const _decimalsString = '18';

  beforeEach(async function () {
    this.token = await MyToken.new(_name, _symbol, _decimals);
  });

  describe('token attributes', function() {
    it('has the correct name', async function() {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it('has the correct symbol', async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });

    it('has the correct decimals', async function() {
      const decimals = await this.token.decimals();
      decimals.should.equal(_decimalsString);
    });
  });
});