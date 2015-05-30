describe("Component validation", function() {

    beforeEach(function() {
        var fixture = setFixtures('<form class="form action="post"><input class="form-field" type="text" value=""><input class="form-action-submit" type="submit" value="Enviar"></form>');
        $form       = fixture.find('.form');
        $inputText  = fixture.find('.form-field');
    });

    it("Element empty", function() {
        expect(Desafio.validation.init($inputText)).toEqual('invalid');
    });

    it("Element not empty", function() {
        $inputText.val('test');
        expect(Desafio.validation.init($inputText)).toEqual('valid');
    });
});