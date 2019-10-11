var assert = chai.assert,
    expect = chai.expect;

suite("Testing hex valores dentro del rango", function() {
    test("Test pasado", function() {
        expect(hex("#FFFFFF")).to.equal('255255255');
    });
    test("Test pasado", function() {
        expect(hex("#000000")).to.equal('000000000');
    });
    test("Test pasado", function() {
        expect(hex("#9400D3")).to.equal('148000211');
    });
    test("Test pasado", function() {
        expect(hex("#4286F4")).to.equal('066134244');
    });
    test("Test pasado", function() {
        expect(hex("#010101")).to.equal('001001001');
    });
    test("Test pasado", function() {
        expect(hex("#0F0F0F")).to.equal('015015015');
    });
    test("Test pasado", function() {
        expect(hex("#101010")).to.equal('016016016');
    });
    test("Test pasado", function() {
        expect(hex("#F0F0F0")).to.equal('240240240');
    });
    test("Test pasado", function() {
        expect(hex("#111111")).to.equal('017017017');
    });

});



