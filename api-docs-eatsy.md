# Etsy Clone

## Database Schema Design

![eatsy-database-schema]()

## API Documentation

## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require authentication
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Authentication required",
      "statusCode": 401
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

* Request: endpoints that require proper authorization
* Error Response: Require proper authorization
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Forbidden",
      "statusCode": 403
    }
    ```


### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/auth/login
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "email": "demo@aa.io",
      "password": "password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "username": "demo@aa.io",
      "email": "password"
    }
    ```

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

   ```json
   {
    "errors": [
        "email : Email provided not found.",
        "password : No such user exists."
    ]
   }
   ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/auth/signup
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
        "username": "aapAcademy",
        "email": "aa@aa.com",
        "password": "password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
        "email": "aa@aa.com",
        "id": 7,
        "username": "aapAcademy"
    }

    ```
<!-- discuss with team it is not 403 -->
* Error response: User already exists with the specified email
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
        "errors": [
            "username : Username is already in use.",
            "email : Email address is already in use."
        ]
    }

    ```



## ITEMS

### Get all Items

Returns all the items.

* Require Authentication: false
* Request
  * Method: GET
  * URL: /api/items
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Items":[
        {
          "id": 1,
          "owner_id": 1,
          "description": "Humanity has long been obsessed with eating small,",
          "title": "Gummies Of Real Things",
          "price": 86.59,
          "Images": [
            {
              "id": 1,
              "image_url": "image.url",
            }
          ],
          "Reviews":[
            {
                "id": 1,
                "item_id": 1,
                "user_id": 2,
                "stars":

            }
          ]
        }
      ]
    }
    ```

### Get all Items by the Current User

Returns all the items.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/items/current
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Items":[
        {
          "id": 1,
          "owner_id": 1,
          "description": "Humanity has long been obsessed with eating small,",
          "title": "Gummies Of Real Things",
          "price": 86.59,
          "Images": [
            {
              "id": 1,
              "image_url": "image.url",
            }
          ],
          "Reviews":[
            {
                "id": 1,
                "item_id": 1,
                "user_id": 2,
                "stars":

            }
          ]
        }
      ]
    }
    ```

### Get details of a Item from an id

Returns the details of a item specified by its id.

* Require Authentication: false
* Request
  * Method: GET
  * URL: /api/items/:itemId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
          "id": 1,
          "owner_id": 1,
          "description": "Humanity has long been obsessed with eating small,",
          "title": "Gummies Of Real Things",
          "price": 86.59,
          "Images": [
            {
              "id": 1,
              "image_url": "image.url",
            }
          ],
          "Reviews":[
            {
                "id": 1,
                "item_id": 1,
                "user_id": 2,
                "stars":

            }
          ]
    }
    ```

* Error response: Couldn't find a Item with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json

    {
      "errors": [
        "message": "Item couldn't be found",
      ]
      "statusCode": 404
    }
    ```

### Create an Item

Creates and returns a new item.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/items
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
        "owner_id": 1,
        "description": "Humanity has long been obsessed with eating small,",
        "title": "Gummies Of Real Things",
        "price": 86.59,
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
        "id": 1,
       "owner_id": 1,
        "description": "Humanity has long been obsessed with eating small,",
        "title": "Gummies Of Real Things",
        "price": 86.59,
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {

      }
    }
    ```

### Add an Image to an Item based on the Item's id

Create and return a new image for a item specified by id.

* Require Authentication: true
* Require proper authorization: Current User must own the item
* Request
  * Method: POST
  * URL: /api/items/:itemId/images
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "url": "image url"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "image_url": "image.url",

    }
    ```

* Error response: Couldn't find an Item with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Item couldn't be found",
      "statusCode": 404
    }
    ```

### Edit an Item

Updates and returns an existing item.

* Require Authentication: true
* Require proper authorization: Item must belong to the current user
* Request
  * Method: PUT
  * URL: /api/items/:itemId
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "owner_id": 1,
       "description": "Humanity has long been obsessed with eating small,",
       "title": "Gummies Of Real Things",
       "price": 86.59,
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "owner_id": 1,
      "description": "Humanity has long been obsessed with eating small,",
      "title": "Gummies Of Real Things",
      "price": 86.59,
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {

      }
    }
    ```

* Error response: Couldn't find an Item with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Item couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Item

Deletes an existing item.

* Require Authentication: true
* Require proper authorization: Item must belong to the current user
* Request
  * Method: DELETE
  * URL: /api/items/:itemId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

* Error response: Couldn't find an Item with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Item couldn't be found",
      "statusCode": 404
    }
    ```
#### Add to shopping cart

Adds an item to shopping cart
Require Authentication: True

* Request
  * Method: POST
  * URL: /api/cart
* Body:
```json
{
  "item_id": 5,
  "quantity": 1
}
```
* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json

* Body:

 ```json
  "shopping_cart": {
    "id": 16,
    "item": {
      "description": "It's random. No, you can't choose which flavors you get.",
      "id": 5,
      "images": [
        {
          "id": 15,
          "image_url": "https://media.discordapp.net/attachments/10174/100/9468_Pies_in_real_life.png",
          "item_id": 5
        },
        {
          "id": 12,
          "image_url": "https://media.discordapp.net/attachments/101749298/98904/30085_Pies.png",
          "item_id": 5
        }
      ],
      "owner": {
        "email": "bobbie@aa.io",
        "id": 3,
        "username": "bobbie"
      },
      "owner_id": 3,
      "price": 59.91,
      "reviews": [],
      "title": "Literally Just Pies"
    },
    "quantity": 79,
    "user": {
      "email": "demo@aa.io",
      "id": 1,
      "username": "Demo"
    }
```
#### Delete from shopping cart
Removes an item from shooping cart
Require Authentication: True
Only current user can delete from their shopping cart.
* Request
  * Method: DELETE
  * URL: /api/cart/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json

* Body:
```json
  {
    "message":"successfully deleted",
    "statusCode": 200
  }
```

* Error response: Couldn't find the item in shopping cart with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

  ```json
  {
    "message": "Item couldn't be found",
    "statusCode": 400
  }
  ```

#### Edit from shopping cart
Deletes an item from shooping cart
Require Authentication: True
Only current user can edit in their shopping cart.

* Request
  * Method: PUT
  * URL: /api/cart
  * Body:

  ```json
  {
    "quantity": 5
  }
  ```
* Response error:
```json
  {
    "error": "This item is not in cart"
  }
```
#### Checkout items in shopping cart
Adds items in shopping cart to purchase and delete all from shopping cart
Require Authentication: True
Only cart owner can checkout.

* Request:
  * Method: POST
  * URL: /api/cart/checkout
  * Body:

  ```json
  {
    "item_id": 5,
    "quantity" : 2,
    "price": 30
  }
  ```
* Response:
```json
{
  "message": "successfully added to purchases"
}
```
## Purchases

### Get all Purchases by the Current User

Returns all the items.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/purchases/current
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Purchases":[
        {
          "id": 1,
          "item_id": 1,
          "user_id": 1
          "quantity": 1
          "price": 86.59,
        }
      ]
    }
    ```

# Reviews

### Create an Review

Creates and returns a new review.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/reviews/
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
        "id": 1,
        "item_id" : 1,
        "user_id" : 1,
        "purchase_id" : 1,
        "stars" :4,
        "title" : "wow i really enjoyed this",
        "description" : "not!",
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully created",
      "review_id: 1,
      "statusCode": 200
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
      }
    }
    ```


### Edit a Review

Updates and returns an existing item.

* Require Authentication: true
* Require proper authorization: Item must belong to the current user
* Request
  * Method: PUT
  * URL: /api/items/:reviewId
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
        "stars" :1,
        "title" : "wow i really enjoyed this",
        "description" : "not!",
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
        "stars" :1,
        "title" : "wow i really enjoyed this",
        "description" : "not!",
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {

      }
    }
    ```

* Error response: Couldn't find an review with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Review couldn't be found",
      "statusCode": 404
    }
    ```

### Delete a Review

Deletes an existing item.

* Require Authentication: true
* Require proper authorization: Item must belong to the current user
* Request
  * Method: DELETE
  * URL: /api/items/:reviewId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200
    }
    ```

* Error response: Couldn't find an review with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Review couldn't be found",
      "statusCode": 404
    }
    ```
