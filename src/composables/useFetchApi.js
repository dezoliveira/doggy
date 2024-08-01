import { reactive } from "vue"

export async function useFetchApi(url, method = 'get'){
  const data = reactive({
    info: {}
  })
  
  try {
    const fetchApi = await fetch(url, {
      method
    })

    data.info = await fetchApi.json()
  } catch (error) {
    console.log(error)
  }

  return data
}