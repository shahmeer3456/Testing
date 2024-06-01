
Feature: User API Testing

  Scenario: Get list of users
    Given I have the endpoint "users?page=2"
    When I send a GET request
    Then the response code should be 200

  Scenario: Get a user by ID
    Given I have the endpoint "users/2"
    When I send a GET request
    Then the response code should be 200

  Scenario: Create a new user
    Given I have the endpoint "users"
    When I send a POST request with body:
      """
      {
        "name": "morpheus",
        "job": "leader"
      }
      """
    Then the response code should be 201

  Scenario: Update a user by ID
    Given I have the endpoint "users/2"
    When I send a PUT request with body:
      """
      {
        "name": "morpheus",
        "job": "zion resident"
      }
      """
    Then the response code should be 200

  Scenario: Partially update a user by ID
    Given I have the endpoint "users/2"
    When I send a PATCH request with body:
      """
      {
        "name": "morpheus"
      }
      """
    Then the response code should be 200

  Scenario: Delete a user by ID
    Given I have the endpoint "users/2"
    When I send a DELETE request
    Then the response code should be 204

  Scenario: Get list of unknown resources
    Given I have the endpoint "unknown"
    When I send a GET request
    Then the response code should be 200

  Scenario: Register a new user
    Given I have the endpoint "register"
    When I send a POST request with body:
      """
      {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      }
      """
    Then the response code should be 200