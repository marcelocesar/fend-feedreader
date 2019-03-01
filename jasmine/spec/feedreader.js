$(function() {
    
    /**
     * Tests suite RSS Feeds
     */
    describe('RSS Feeds', () => {
        
        // Check if allFeeds are set
        it('are defined', () => {

            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // verifies that the url property is set
        it('should verify feed url exists and is not empty', () => {

            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBeNull();
            })
        });

        // verifies that the name property is set
        it('should verify feed name exists and is not empty', () => {

            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeNull();
            })
        });
    });

     /**
     * Tests suite Menu
     */
    describe('The menu', () => {

        // check if the menu behavior is hidden by default
        it('should that ensures the menu element is hidden by default', () => {
            
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        // verifies menu behavior when icon is clicked
        it('should changes visibility when the menu icon is clicked', () => {
            
            let body = document.querySelector('body');
            let button = document.querySelector('.menu-icon-link');
            
            button.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            button.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
      
    });

    /**
     * Test suite Initial Entries
     */
    describe('Initial Entries', () => {

        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            })
        })
        
        // make sure the feed list has records
        it('should that ensures when the loadFeed', (done) => {
            
            let feedContainer = document.querySelector('.feed');
            let entry = document.querySelector('.entry');
            expect(feedContainer.contains(entry)).toBe(true);
            done();
        })
    });

    /**
     * Tests suite new feed
     */
    describe('New Feed Selection', () => {

        let feed1Html;
        
        beforeEach((done) => {

            loadFeed(0, () => {
                feedHtml1 = document.querySelector('.feed').innerHTML;
                loadFeed(2, () => {
                    done();
                });
            });
        })
    
        // make sure the feed list loads new feeds
        it('should that ensures when a new feed is loaded',  (done) => {

            let feedHtml2 = document.querySelector('.feed').innerHTML;
            expect(feedHtml2).not.toBe(feedHtml1);
            done();
           
        })
    });
}());
