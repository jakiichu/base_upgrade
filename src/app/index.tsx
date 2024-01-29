import TextField from "@app/components/textfield";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {object, string} from "yup";
import {useEffect, useState} from "react";
import {Params} from "@domain/common/params/base-class";
import {useNavigate} from "react-router-dom";

interface IBaseLoginForm {
    login: string
    password: string
}

const App = () => {
    const [projectUrl, setProjectUrl] = useState('');
    useEffect(() => {
        const projectParam = new URLSearchParams(window.location.search).get('project');
        setProjectUrl(projectParam ?? 'https://front.ipst-platform.ipst-dev.com');
    }, []);
    console.log(projectUrl)
    const params = new Params<IBaseLoginForm>()
    console.log(params.setParams('https://front.ipst-platform.ipst-dev.com/', {login: 'qwrt', password: 'asdq'}))
    const LoginFormSchema = object().shape({
        login: string().required('Поле "id" обязательно для заполнения'),
        password: string().required('Поле "rtc" обязательно для заполнения'),
    });
    const navigate = useNavigate()
    const {handleSubmit, ...form} = useForm<IBaseLoginForm>({
        resolver: yupResolver(LoginFormSchema),
        reValidateMode: "onChange",
    })
    const handleSubmitCallback = handleSubmit(async (data) => {
        void navigate(params.setParams('https://front.ipst-platform.ipst-dev.com/', data))
    });

    return (
        <div>
            <form onSubmit={handleSubmitCallback}>
                <TextField error={form.formState.errors.login?.message} {...form.register('login')}/>
                <TextField error={form.formState.errors.password?.message} {...form.register('password')}/>
                <button type='submit'>Подтвердить</button>
            </form>
        </div>
    )
}

export default App
