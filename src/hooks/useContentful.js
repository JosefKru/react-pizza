import client from './../contentful/index'

const useContentful = () => {
  const getHome = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'home',
        select: 'fields',
        // order: 'fields.items',
      })
      const sanitizedEntries = entries.items.map((item) => {
        const logo = item.fields.logo.fields
        const pizzas = item.fields.pizzas.fields

        return {
          ...item.fields,
          logo,
          pizzas,
        }
      })
      return sanitizedEntries
    } catch (error) {
      console.log(`Error fetching home: ${error}`)
    }
  }

  return { getHome }
}

export default useContentful
