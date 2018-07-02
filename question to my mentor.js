/* TODO: Write a new test suite named "New Feed Selection" */
describe('New Feed Selection', function() {
 /* TODO: Write a test that ensures when a new feed is loaded
 * by the loadFeed function that the content actually changes.
 * Remember, loadFeed() is asynchronous.
 */
 var oldFeed, newFeed;
beforeEach(function(done) {
	 $('.feed').empty();
	loadFeed(0, function() {
		oldFeed = $('.feed').html();
		// oldFeed = document.querySelector('.feed');
		console.log(oldFeed);

		loadFeed(1, function() {
			newFeed =  $('.feed').html();
			// newFeed = document.querySelector('.feed');
			console.log(newFeed);
			done();
		});
	});

});

it('content should change when a new feed is loaded', function(done) {
	expect(oldFeed).not.toEqual(newFeed);
	done();
});
});
