/// <reference types="Cypress" />

context('Actions', () => {
  it('Visit the Homepage', () => {
    cy.visitHomepage();
  });

  it('Close The Cookie Banner', () => {
    cy.closeCookiebanner();
  });

  it('Select The Model From the Menu', () => {
    cy.header().find('button.owc-header-button__iconWrapper').eq(1).click();
    cy.header()
      .get('vmos-flyout')
      .shadow()
      .find('[name="sportstourer"]')
      .click();
    cy.header().get('vmos-flyout').shadow().contains('p', 'A-Klasse').click();
  });

  it('Filter the fuel Diesel and take screenshot', () => {
    // Temporary fix because mercedes.co.uk was redirected to mercedes.de configurator
    cy.visit(
      'https://www.mercedes-benz.co.uk/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/GB/en/bm/1770122,1770512,1770542,1770842,1770872'
    );

    // Calling the multiSelectButton and Open the Filter
    cy.multiSelectButton().find('button').eq(0).click({ force: true });
    // This clicks the Fuel Type Diesel on the Select
    cy.multiSelectButton()
      .get('ccwb-checkbox')
      .eq(0)
      .find('label')
      .click({ force: true });
    // This take screenshot of the Results
    cy.screenshot('Filter by Fuel Type Diesel');
  });

  it('Save the Highest and lowest Prices In a text file', () => {
    let carPrices = [];
    // Getting the value of all the Car on the List
    cy.carList().each(($car) => {
      // Getting the price
      cy.wrap($car)
        .find('span')
        .invoke('text')
        .then((value) => {
          // Clean string and convert to integer
          const val = +value.replace('£', '').replace(',', '').trim();

          // Save on array
          carPrices = [...carPrices, val];
        })
        .then(() => {
          const cheapeastCar = Math.min(...carPrices);
          const mostExpensiveCar = Math.max(...carPrices);

          const fileContentText = `Cheapeast car: ${cheapeastCar} | Most expensive car: ${mostExpensiveCar}`;
          //This writes the text file result in the mentioned path
          cy.writeFile('cypress/files/car prices.txt', fileContentText);
        });
    });
  });
});
