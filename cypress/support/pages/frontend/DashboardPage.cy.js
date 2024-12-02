class DashboardPage {

  get transactionsTable() {
    return cy.get('#transactionsTable tbody tr');
  }

  get totalBalance() {
    return cy.get('#totalBalance').find('span').first();
  }

  get creditAvailable() {
    return cy.get('#creditAvailable').find('.balance-value');
  }

  get positiveTransactions() {
    return cy.get('#transactionsTable .text-success');
  }

  get negativeTransactions() {
    return cy.get('#transactionsTable .text-danger');
  }

  get transactionsTable() {
    return cy.get('#transactionsTable tbody tr');
  }
  get statusHeader() {
    return cy.get('th#status');
  }

  get primaryButton() {
    return cy.get('.btn-primary > span');
  }

  get successButton() {
    return cy.get('.btn-success > span');
  }
}

export default new DashboardPage()
