const schema_inputnewproduct = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "collection_id": {
          "type": "string"
        },
        "project_id": {
          "type": "integer"
        },
        "app_user_id": {
          "type": "null"
        },
        "created_by": {
          "type": "integer"
        },
        "created_at": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "deleted_at": {
          "type": "null"
        },
        "data": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "category": {
              "type": "string"
            },
            "in_stock": {
              "type": "boolean"
            }
          },
          "required": [
            "name",
            "price",
            "category",
            "in_stock"
          ]
        }
      },
      "required": [
        "id",
        "collection_id",
        "project_id",
        "app_user_id",
        "created_by",
        "created_at",
        "updated_at",
        "deleted_at",
        "data"
      ]
    }
  },
  "required": [
    "data"
  ]
}

export default schema_inputnewproduct;