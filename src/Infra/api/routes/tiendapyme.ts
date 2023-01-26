import axios, { AxiosInstance, AxiosResponse } from 'axios';
export class TiendaPyme {


    private async getClientAPI(): Promise<AxiosInstance> {
        let configAxios = {
            baseURL: "https://apimoviltiendapyme.azurewebsites.net/api/",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        let client = axios.create(configAxios);


        return client;
    }


    async getRecomendations(searchCriteria: any): Promise<any> {
        try {
            let dto: any = searchCriteria;
            let client = await this.getClientAPI();

            let responseFromAPI = await client.get<any[]>(
                `product`,
            );
            return new Promise((resolve, reject) => {
                resolve(responseFromAPI.data.slice(0, 5));
            });
        } catch (error) {
            console.log('error en getRecommendations => ', error);
            throw new Error(error.message);
        }
    }

}