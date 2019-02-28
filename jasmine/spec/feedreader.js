/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should verify feed url exists and is not empty', () => {

            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBeNull();
            })
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should verify feed name exists and is not empty', () => {

            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeNull();
            })
        });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    describe('The menu', () => {

        it('should that ensures the menu element is hidden by default', () => {
            
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        it('should changes visibility when the menu icon is clicked', () => {
            
            let body = document.querySelector('body');
            let button = document.querySelector('.menu-icon-link');
            
            button.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            button.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
      
    });
    

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', () => {

        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            })
        })
        
        it('should that ensures when the loadFeed', (done) => {
            
            let feedContainer = document.querySelector('.feed');
            let entry = document.querySelector('.entry');
            expect(feedContainer.contains(entry)).toBe(true);
            done();
        })
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', () => {

        let feed1Html;
        
        beforeEach( async(done) => {
            loadFeed(0, () => {
                feedHtml1 = document.querySelector('.feed').innerHTML;
                loadFeed(2, () => {
                    done();
                });
            });
        })
    
        it('should that ensures when a new feed is loaded',  (done) => {

            let feedHtml2 = document.querySelector('.feed').innerHTML;
            expect(feedHtml2).not.toBe(feedHtml1);
            done();
           
        })
    });
}());
