export default interface ResponseApi<T> {
    ok: boolean;
    data: T;
    message?: string;
}