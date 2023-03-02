import Configs from '../../configs';
import httpClient from '../httpClient';

const uploadFile = async (file: File) => {
    let formData = new FormData();
    formData.append('file', file);
    return httpClient(`${Configs.API_URL}/files`, {
        method: 'POST',
        body: formData,
    });
}
export default uploadFile;