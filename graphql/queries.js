import { gql } from "@apollo/client"

//<----------------------ApolloClient-------------------------------->//

export const GET_PRODUCTS = gql`
  {
    products(first: 10, page: 2603) {
      data {
        id
        is_active
        product_translations {
          product_name
        }
        product_photos {
          is_4_listing
        }
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`

//<------------------------------------------------------------------>//
export const ADD_PRODUCT = gql`
  mutation createProduct($is_active: Boolean, $product_name: String, $is_4_listing: Boolean) {
    createProduct(
      input: {
        is_active: $is_active
        number_of_views: 12
        is_for_advertise: true
        is_for_saving: true
        is_notified: true
        price: 123
        showed_price: 1234
        newprice: 132
        is_downloadable_product: true
        SKU: "ibrahem"
        less_number_of_sell: 123
        product_translations: {
          create: {
            language_code: "String"
            product_name: $product_name
            description_text: "String"
            product_note: "String"
          }
        }
        physical_products: {
          create: {
            stock_id: 1
            number_in_stock: 1
            price: 1
            newprice: 1
            is_rechargeable: true
            unlimited_number: true
            has_free_shipping: true
            has_free_return: true
            attributes: {
              create: {
                attribute_value: {
                  create: { int_value: 2, tiny_value: 2, datetime_value: "asd", string_value: "String" }
                }
              }
            }
          }
        }
        product_photos: {
          create: {
            photo_path: "String"
            photo_size: "String"
            is_4_listing: $is_4_listing
            is_main_for_listing: true
            is_4_detail: true
            is_main_for_details: true
            product_photo_categories: { sync: [1] }
          }
        }
        product_categories: { sync: [1] }
        meta_tag_translations: {
          create: { language_code: "en", meta_keywords: "String", meta_description: "String" }
        }
      }
    ) {
      id
      is_active
      product_translations {
        product_name
      }
      product_photos {
        is_4_listing
      }
    }
  }
`

export const GET_CATEGORIES = gql`
  {
    categories(first: 10, page: 1) {
      data {
        id
        category_translations {
          language_code
          category_name
        }
        sub_categories {
          id
          category_translations {
            language_code
            category_name
          }
        }
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`
