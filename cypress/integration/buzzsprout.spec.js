/// <reference types="cypress" />

import { getIframeBody } from '../support/commands';

context('<Buzzsprout />', () => {
  it('it loads buzzsprout player widget', () => {
    cy.visit('/iframe.html?id=components-buzzsprout--usage&viewMode=story');
    cy.get('[data-testId="buzzsprout"]').should('not.be.undefined');
    getIframeBody().find('.buzzsprout-player').should('not.be.undefined');
    getIframeBody().find('.artwork-container').should('not.be.undefined');
    getIframeBody().find('.episode-container').should('not.be.undefined');
  });

  it('it not loads the buzzsprout player', () => {
    cy.visit('/iframe.html?id=components-buzzsprout--wrong-usage&viewMode=story');
    cy.get('[data-testId="buzzsprout"]').should('not.exist');
    cy.get('iframe').should('not.exist');
  });
});