const MyToken = artifacts.require('MyToken');
const MyTokenCrowdsale = artifacts.require('MyTokenCrowdsale');

contract('MyTokenCrowdsale', function([_, wallet, investor1, investor2]) {

  beforeEach(async function () {
    // Token config
    this.name = "MyToken TRC20";
    this.symbol = "MYT";
    this.decimals = 18;

    // Deploy Token
    this.token = await DappToken.new(
      this.name,
      this.symbol,
      this.decimals
    );

    // Crowdsale config
    this.rate = 500;
	this.rateString = "500";
    this.wallet = wallet;

    this.crowdsale = await DappTokenCrowdsale.new(
      this.rate,
      this.wallet,
      this.token.address
    );
  });

  describe('crowdsale', function() {
    it('tracks the rate', async function() {
      const rate = await this.crowdsale.rate();
      rate.should.equal(this.rateString);
    });

    it('tracks the wallet', async function() {
      const wallet = await this.crowdsale.wallet();
      wallet.should.equal(this.wallet);
    });

    it('tracks the token', async function() {
      const token = await this.crowdsale.token();
      token.should.equal(this.token.address);
    });
  });

});