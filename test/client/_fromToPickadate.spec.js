describe("Component From to Pickadate", function() {

    beforeEach(function() {
        var fixture = setFixtures('<form class="form action="post"><input class="form-field js-entrydate" type="text" value=""><input class="form-field js-releasedate" type="text" value=""></form>');
        $entrydate    = fixture.find('.js-entrydate');
        $releasedate  = fixture.find('.js-releasedate');
    });

    it("Checking equality in the number of elements", function() {
        expect($entrydate.length).toEqual($releasedate.length);
    });
});