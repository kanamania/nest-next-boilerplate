import Configs from '../../configs';
import httpClient from '../httpClient';
import apiServer from 'ra-data-nestjsx-crud';
import uploadFile from './uploadFile';

// @ts-ignore
const dataProvider = apiServer(Configs.API_URL, httpClient);
const fullDataProvider = {
    ...dataProvider,
    create: async (resource: any, params: any) => {
        if (resource == 'investments') {
            // @ts-ignore
            await uploadFile(params.data.banner.rawFile).then(({ json }) => {
                params.data.banner = json.data.id;
            })
        }
        if (resource == 'users') {
            // @ts-ignore
            await uploadFile(params.data.avatar.rawFile).then(({ json }) => {
                params.data.avatar = json.data.id;
            })
        }
        if (resource == 'investment/areas') {
            if(params.data.banner != undefined) {
                // @ts-ignore
                await uploadFile(params.data.banner.rawFile).then(({json}) => {
                    params.data.banner = json.data.id;
                });
            }
        }
        if (resource == 'investment/categories') {
            if(params.data.banner != undefined) {
                // @ts-ignore
                await uploadFile(params.data.banner.rawFile).then(({json}) => {
                    params.data.banner = json.data.id;
                });
            }
        }
        let headers = new Headers({"Accept": 'application/json'});
        headers.set('Content-Type', 'application/json');
        // @ts-ignore
        return httpClient(`${Configs.API_URL}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
            headers
        }).then(({json}) => ({
            data: {...json.data },
        }));
    },
    update: async (resource: any, params: any) => {
        if (resource == 'investments') {
            if(params.data.banner != undefined && typeof params.data.banner === 'object') {
                console.log(params.data);
                // @ts-ignore
                await uploadFile(params.data.banner.rawFile).then(({json}) => {
                    params.data.banner = json.data.id;
                });
            }
        }
        if (resource == 'users') {
            console.log(typeof params.data.avatar);
            if(params.data.avatar != undefined && typeof params.data.avatar === 'object') {
                // @ts-ignore
                await uploadFile(params.data.avatar.rawFile).then(({json}) => {
                    params.data.avatar = json.data.id;
                });
            }
        }
        if (resource == 'investment/areas') {
            if(params.data.banner != undefined && typeof params.data.banner === 'object') {
                // @ts-ignore
                await uploadFile(params.data.banner.rawFile).then(({json}) => {
                    params.data.banner = json.data.id;
                });
            }
        }
        if (resource == 'investment/categories') {
            if(params.data.banner != undefined && typeof params.data.banner === 'object') {
                // @ts-ignore
                await uploadFile(params.data.banner.rawFile).then(({json}) => {
                    params.data.banner = json.data.id;
                });
            }
        }
        if (resource == 'settings') {
            if(params.data.value_current != undefined && typeof params.data.banner === 'object') {
                // @ts-ignore
                await uploadFile(params.data.value_current.rawFile).then(({json}) => {
                    console.log({newSettingImageId: json.data.id})
                    params.data.value_current = json.data.id;
                });
            }
        }
        let headers = new Headers({"Accept": 'application/json'});
        headers.set('Content-Type', 'application/json');
        // @ts-ignore
        return httpClient(`${Configs.API_URL}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
            headers
        }).then(({json}) => ({
            data: {...json.data },
        }));
    },
};
export default fullDataProvider;
