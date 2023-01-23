Feature('FavoriteFeature');

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('http://localhost:9000/');
  I.see('THS Restoran');
});
