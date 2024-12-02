import DashboardElements from '../../support/pages/frontend/DashboardPage.cy'

class DashboardActions {

    constructor(elements = DashboardElements) {
        this.elements = elements;
    }

    verifyTransactionsCount(expectedCount = 6) {
        this.elements.transactionsTable.should('have.length', expectedCount);
    }

    verifyTotalBalance(expectedBalance = '$350') {
        this.elements.totalBalance.should('have.text', expectedBalance);
    }

    verifyCreditAvailable(expectedCredit = '$17,800') {
        this.elements.creditAvailable.invoke('text').then((text) => {
            const cleanedText = text.replace(/\s+/g, '');
            expect(cleanedText).to.equal(expectedCredit);
        });
    }

    verifyValuesHaveStyle(transactionSelector, expectedClass) {
        this.elements[transactionSelector].each((row) => {
            expect(row).to.have.class(expectedClass);
        });
    }

    verifyValuesMatchFormat(transactionSelector, regex) {
        this.elements[transactionSelector].each((row) => {
            expect(row.text().trim()).to.match(regex);
        });
    }

    verifyPositiveValues() {
        this.verifyValuesHaveStyle('positiveTransactions', 'text-success');
        this.verifyValuesMatchFormat(
            'positiveTransactions',
            /^\+\s\d{1,3}(,\d{3})*(\.\d{1,2})? USD$/
        );
    }

    verifyNegativeValues() {
        this.verifyValuesHaveStyle('negativeTransactions', 'text-danger');
        this.verifyValuesMatchFormat(
            'negativeTransactions',
            /^\-\s\d{1,3}(,\d{3})*(\.\d{1,2})? USD$/
        );
    }

    verifyPrimaryButtonVisible() {
        this.elements.primaryButton.should('be.visible');
    }

    verifySuccessButtonVisible() {
        this.elements.successButton.should('be.visible');
    }

    clickStatusColumnHeader() {
        this.elements.statusHeader.click();
    }

    verifyStatusColumnIsSorted() {
        this.elements.transactionsTable.then(($rows) => {
            const statusValues = $rows
                .map((index, row) => Cypress.$(row).find('td').eq(0).text().trim())
                .get();
            const sortedStatusValues = [...statusValues].sort((a, b) =>
                a.localeCompare(b)
            );
            expect(statusValues).to.deep.equal(sortedStatusValues);
        });
    }
}

export default new DashboardActions()
