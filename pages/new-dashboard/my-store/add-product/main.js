import React, { useEffect, useState } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import AddProductModal from "./addProductModal"
import ListCategory from "./listCategory"
import { GET_PRODUCTS, ADD_PRODUCT, GET_CATEGORIES } from "../../../../graphql/queries"
const AddProduct = () => {
  const [isActive, setIsActive] = useState(null)
  const [productName, setproductName] = useState("")
  const [main, setMain] = useState(true)
  const [is_4_listing, setis_4_listing] = useState(null)
  const [categoriesNames, setCategoriesNames] = useState([])
  const [categoriesId, setCategoriesId] = useState([])
  const [secondCategoryArray, setSecondCategoryArray] = useState([])
  const [firstCategory, setFirstCategory] = useState(false)
  const [secondCategory, setSecondCategory] = useState(false)
  const [FinalCategory, setFinalCategory] = useState(false)
  const [firstCategoryId, setFirstCategoryId] = useState(false)
  const [secondCategoryId, setSecondCategoryId] = useState(false)

  const router = useRouter()
  const [addProduct] = useMutation(ADD_PRODUCT)
  let categories = []
  const { loading, error, data } = useQuery(GET_CATEGORIES)
  if (loading) {
    console.log("loading......")
  }
  if (error) {
    console.log("error......")
  } else {
    categories = data
  }
  const graph = () => {
    if (loading) {
      console.log("loading......")
    }
    if (error) {
      console.log("error......")
    } else {
      categories = data
    }
  }
  const handleMain = (main) => {
    setSecondCategory(false)
    setFinalCategory(false)
    setMain(true)
    setFirstCategory(false)
    setCategoriesId([])
    setCategoriesNames([])
    graph()
  }
  const handleSelectCategory = (category) => {
    if (category?.sub_categories?.length > 0) {
      categoriesId.push(category?.id)
      setSecondCategoryArray(category.sub_categories)
      categoriesNames.push(category?.category_translations[0]?.category_name)
      setSecondCategory(true)
    } else {
      setFirstCategory(true)
      setFinalCategory(true)
      categoriesId.push(category?.id)
      categoriesNames.push(category?.category_translations[0]?.category_name)
    }
  }

  return (
    <>
      {main && !firstCategory && categories?.data?.length !== 0 && !secondCategory ? (
        <div className="content" id="content">
          {" "}
          <ListCategory
            categoryArray={categories?.categories?.data}
            handleSelectCategory={(category) => handleSelectCategory(category)}
            handleMain={(main) => handleMain(main)}
          />{" "}
        </div>
      ) : secondCategory && secondCategoryArray.length !== 0 && !FinalCategory ? (
        <div className="content" id="content">
          {" "}
          <ListCategory
            categoryArray={secondCategoryArray}
            handleSelectCategory={(category) => handleSelectCategory(category)}
            handleMain={(main) => handleMain(main)}
          />{" "}
        </div>
      ) : FinalCategory ? (
        <AddProductModal
          handleMain={(main) => handleMain(main)}
          categoriesId={categoriesId}
          categories={categories}
          categoriesNames={categoriesNames}
        />
      ) : null}
    </>
  )
}

export default AddProduct
