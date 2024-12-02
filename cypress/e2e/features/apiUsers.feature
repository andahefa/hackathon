Feature: Pruebas de API de usuarios

    Scenario Outline: Crear y verificar usuario creado exitosamente
        Given los datos del nuevo usuario son "<name>" y "<job>"
        When creo el usuario con estos datos
        Then el usuario debería ser creado y verificado exitosamente

        Examples:
            | name      | job                 |
            | Test User | Automation Engineer |

    Scenario Outline: Actualizar usuario exitosamente
        Given los datos de actualización del usuario son "<email>", "<firstName>" y "<lastName>"
        When actualizo el usuario con estos datos
        Then el usuario debería ser actualizado exitosamente

        Examples:
            | email            | firstName | lastName  |
            | prueba@gmail.com | Anderson  | Hernandez |
