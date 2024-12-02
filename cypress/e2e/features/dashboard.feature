Feature: Suite de pruebas en tableros

  Background:
    Given que estoy en la página de login
    When ingreso usuario y contraseña validos
    Then debería ser redirigido al tablero principal

  Scenario Outline: Verificar 6 transacciones en la tabla de gastos
    When navego al tablero
    Then debería ver <cantidad> transacciones en la tabla de gastos
    Examples:
      | cantidad |
      | 6        |

  Scenario Outline: Verificar total balance
    When navego al tablero
    Then el balance total debería ser "<balance>"
    Examples:
      | balance |
      | $350    |

  Scenario Outline: Verificar Credit Available
    When navego al tablero
    Then el crédito disponible debería ser "<credito>"
    Examples:
      | credito |
      | $17,800 |

  Scenario: Verificar valores positivos en verde
    When navego al tablero
    Then los valores positivos deberían ser verdes

  Scenario: Verificar valores negativos en rojo
    When navego al tablero
    Then los valores negativos deberían ser rojos

  Scenario: Verificar que los botones "Add Account" y "Make Payment" del menú se muestren
    When navego al tablero
    Then debería ver el botón "Add Account"
    And debería ver el botón "Make Payment"

  Scenario: Validar ordenamiento de columna "STATUS" de manera ascendente
    When navego al tablero
    And hago clic en el encabezado de la columna "STATUS"
    Then la columna "STATUS" debería estar ordenada de manera ascendente
