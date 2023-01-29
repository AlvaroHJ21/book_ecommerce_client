import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useToast = () => {
    function showToast(msg: string) {
        toast.success(msg, {
            position: 'bottom-left',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }

    function showToastPromise(promise: any, msgPending: string, msgSuccess: string) {
        toast.promise(promise, {
            pending: msgPending,
            success: {
                render({ data }) {
                    return msgSuccess;
                },
                autoClose: 1000,
            },
            error: 'Ocurrió un error 🤯',
        });
    }

    return { ToastContainer, showToast, showToastPromise };
};
