Feature: Autenticación del usuario

  Scenario: Loguearse exitosamente con credenciales válidas
    Given que estoy en la página de login
    When ingreso usuario y contraseña validos
    Then debería ser redirigido al tablero principal
