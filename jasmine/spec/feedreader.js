// feedreader.js

$(function() {
    
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('should each have a URL', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }  
        });

         it('should each have a name', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }  
        });
    });



    describe('The menu', function() {

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        

        it('should show when clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });

        it('should hide when clicked again', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    
        
    describe('Initial Entries', function() {
        
        
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should have at least a single .entry when loadFeed() is called', function() {
            expect($('.entry').length).toBeGreaterThan(0);
           
        });
    });
    
        
    describe('New Feed Selection', function() {
        var oldFeedContent,
            newFeedContent;

        beforeEach(function(done) {
            loadFeed(0, function(){
                oldFeedContent = $('.feed').html();
                done();
            });
        });

        beforeEach(function(done) {
            loadFeed(1, function(){
                newFeedContent = $('.feed').html();
                done();
            });
        });

        it('should actually change content when new feed is loaded', function() {
            
            expect(oldFeedContent).not.toBe(newFeedContent);

        });
    });

}());
