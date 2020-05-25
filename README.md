# NodeJs + Mongo DD Api

A very simple sample of Node JS + Mongo DB Api.
On this example i did an Api to create list update and delete products.

This base model for a product is:
    {
        title: string
        description: string
        url: string
    }

To run this simple sample, just type:
    npm run dev

The APis are

    GET /products // List all products
    GET /products/:id // Show one specific product
    POST /products // Creates a new product
    PUT /products/:id // Updates a specific product
    DELETE /products/:id // Deletes A product