import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function LoginControllers() {
  const navigate = useNavigate()
  const schema = yup
    .object({
      user: yup.string().required('Este campo es requerido'),
      password: yup.string().required('Este campo es requerido'),
    })
    .required()

  const {
    control: controlInputs,
    handleSubmit: handleSubmitData,
    formState: { errors: errorsData },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      user: '',
      password: '',
    },
  })

  const onSendSubmit = async (data) => {
    // try {
    //   loadingRequest.showLoading()
    //   const response = await requestGbcApi({
    //     domain: VITE_ASSET_URL_AUTH,
    //     method: 'POST',
    //     path: `/api-hub/v1/auth/admin/login`,
    //     bodyParams: addaptedUserToEndpointLogin(data),
    //   })
    //   setTokensForUser(response)
    //   navigate('/')
    // } catch (error) {
    //   console.log(error)
    //   HandlerError(error)
    // } finally {
    //   loadingRequest.hiddenLoading()
    // }
    console.log(data)
  }

  return {
    controlInputs,
    errorsData,
    handleSubmitData,
    onSendSubmit,
  }
}
