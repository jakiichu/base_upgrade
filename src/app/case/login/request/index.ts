import UserLoginUseCase from "@domain/use-case/login";
import UserRepository from "@data/repository/user";
import {ILoginPort} from "@domain/interfaces/user/port";
import {useMutation, UseMutationResult} from '@tanstack/react-query'
import {ILoginDto} from "@domain/interfaces/user/dto";
import {Params} from "@domain/common/params/base-class";
import {useSnackbar} from "notistack";
import {EBackendError} from "@domain/interfaces/common/enums/error";
import {ELocalError} from "@domain/interfaces/common/enums/local-error";

type ILoginRequestResponse = UseMutationResult<ILoginDto, Error, ILoginPort>
const useLoginRequest = (): ILoginRequestResponse => {
    const repository = new UserRepository()
    const useCase = new UserLoginUseCase(repository)
    const {enqueueSnackbar} = useSnackbar()
    const paramsNextPage = new Params<{ token: string }>()
    const paramsCurrentPage = new Params<{ project: string }>()

    const callback = (port: ILoginPort) => {
        return useCase.execute(port)
    }
    return useMutation({
        mutationFn: callback,
        onSuccess: (data) => {
            window.location.href = paramsNextPage.setParams(paramsCurrentPage.getParamsOne('project') as string, {token: data.token})
        },
        onError: (data) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (data.response.data.message === EBackendError.invalidEMailOrPassword)
                void enqueueSnackbar({variant: 'error', message: ELocalError.invalidEMailOrPassword,})
        }
    })
}
export default useLoginRequest