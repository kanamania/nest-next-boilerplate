import 'react-toastify/dist/ReactToastify.css';

export const fetcher = (url: string) => fetch(url).then(r => r.json())

export async function saveFormData(data: object, url: string) {
    return await fetch(url, {
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"},
        method: "POST"
    })
}