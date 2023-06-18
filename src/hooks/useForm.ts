import { ChangeEvent, useState } from "react"


const useForm = <T>(initialState: T) => {

    const [form, setform] = useState(initialState)

    const changeValues = ({target: {name, value}}:ChangeEvent<HTMLInputElement>) => {
        setform({
            ...form,
            [name]: value
        })
    }

    const reset = () => {
        setform(initialState)
    }

  return {
    form,
    ...form,
    changeValues,
    reset
  }
}

export default useForm
