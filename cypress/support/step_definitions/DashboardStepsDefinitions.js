import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import DashboardActions from '../../support/actions/DashboardActionsElements.cy';

When('navego al tablero', () => {
});

Then('debería ver {int} transacciones en la tabla de gastos', (cantidad) => {
  DashboardActions.verifyTransactionsCount(cantidad);
});

Then('el balance total debería ser {string}', (balance) => {
  DashboardActions.verifyTotalBalance(balance);
});

Then('el crédito disponible debería ser {string}', (credito) => {
  DashboardActions.verifyCreditAvailable
});

Then('los valores positivos deberían ser verdes', () => {
  DashboardActions.verifyPositiveValues();
});

Then('los valores negativos deberían ser rojos', () => {
  DashboardActions.verifyNegativeValues();
});

Then('debería ver el botón {string}', (button) => {
  if (button === "Add Account") {
    DashboardActions.verifyPrimaryButtonVisible();
  } else if
    (button === "Make Payment") {
    DashboardActions.verifySuccessButtonVisible();
  }
});

When('hago clic en el encabezado de la columna "STATUS"', () => {
  DashboardActions.clickStatusColumnHeader();
});

Then('la columna "STATUS" debería estar ordenada de manera ascendente', () => {
  DashboardActions.verifyStatusColumnIsSorted();
});
