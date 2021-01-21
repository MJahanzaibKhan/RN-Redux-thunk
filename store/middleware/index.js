class GetDataMiddleware {
  static getPlaceholderMiddleware = async () => {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => json)
      if (result) {
        return result
      } else {
        throw 'Failed to fatch data'
      }
    } catch (error) {
      throw error;
    }
  }

}

export { GetDataMiddleware };