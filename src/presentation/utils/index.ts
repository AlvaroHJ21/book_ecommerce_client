export const container = 'container m-auto w-[95%]';


export const delay = async (delay: number) => {
    return new Promise((resolve) => setTimeout(resolve, delay * 1000));
}