import useLoginRequest from "@app/case/login/request";
import {object, string} from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ILoginPort} from "@domain/interfaces/user/port";

const useLoginPresenter = () => {
    const {mutateAsync} = useLoginRequest()
    const LoginFormSchema = object().shape({
        email: string().required('Поле "id" обязательно для заполнения'),
        password: string().required('Поле "rtc" обязательно для заполнения'),
    });
    const {handleSubmit, ...form} = useForm<ILoginPort>({
        resolver: yupResolver(LoginFormSchema),
        reValidateMode: "onChange",
    })
    const handleSubmitCallback = handleSubmit(async (data) => {
        await mutateAsync(data)
    });
    return {form, handleSubmitCallback}
}
export default useLoginPresenter