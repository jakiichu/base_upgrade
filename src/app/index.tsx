import TextField from "@app/components/textfield";
import bg from '@app/assets/bg.svg'
import logo_auth from '@app/assets/logo_auth.svg'
import IPST from '@app/assets/IPST.svg'
import useLoginPresenter from "@app/case/login/presenter";

const App = () => {

    const {form, handleSubmitCallback} = useLoginPresenter()

    return (


        <div
            className='max-[1280px]:grid flex min-[1280px]:grid-cols-2 bg-[#F4F4F4] w-full fixed h-full
            max-[360px]:block max-[360px]:bg-white
            '>

            <div className="relative z-10 w-full flex items-center justify-center">
                <form
                    onSubmit={handleSubmitCallback}
                    className="min-[360px]:border min-[360px]:border-inputBorder min-[360px]:shadow-md rounded-2xl p-[30px] bg-white
                      absolute translate-y-[-50%] xl:translate-x-[-50%] max-[1280px]:translate-x-[0]
                      max-[1280px]:translate-y-[0] max-[1280px]:left-auto max-[1280px]:right-auto max-[1280px]:w-[400px] max-[1280px]:top-[66%]
                      max-[1280px]:mx-auto left-1/2 top-1/2 max-[360px]:left-0 max-[360px]:right-0
                      max-[360px]:w-full max-[360px]:h-full max-[360px]:rounded-none
                      max-[360px]:row-span-2"
                >
                    <div className="flex flex-col items-center mb-8 font-bold">
                        <div className="flex items-center mb-4">
                            <img src={logo_auth} alt="logo_auth"/>
                            <img src={IPST} alt="IPST"/>
                        </div>
                        <h1 className="text-2xl text-textAccent font-semibold ">
                            Войти в аккаунт
                        </h1>
                    </div>

                    <div className="flex flex-col gap-6 mb-[28px]">
                        <TextField
                            className={{input: 'w-full'}}
                            label='Корпоративная почта'
                            id="username"
                            placeholder="Введите почту"
                            error={form.formState.errors.email?.message}
                            {...form.register("email")}
                        />

                        <TextField
                            className={{input: 'w-full'}}
                            type={'password'}
                            label='Пароль'
                            id="password"
                            placeholder="Введите пароль"

                            error={form.formState.errors.password?.message}
                            {...form.register("password")}
                        />
                    </div>

                    <button className="min-[1280px]:w-[468px] w-full h-[44px] bg-[#58A0A3] text-white rounded-lg">
                        Войти
                    </button>
                </form>
            </div>
            <div className='w-full h-full overflow-hidden relative'>
                <img src={bg} className='absolute right-0 object-cover h-full max-[1279px]:hidden' alt="background"/>
            </div>

        </div>
    )
}

export default App
