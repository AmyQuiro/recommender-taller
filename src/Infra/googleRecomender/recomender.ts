const { RecommenderClient } = require('@google-cloud/recommender');
const { google } = require('googleapis');

export class Recommender {

    //id cliente= 1070402368417-peno69st1p7oqodcg657mdmob2ejch76.apps.googleusercontent.com
    // secret=1070402368417-peno69st1p7oqodcg657mdmob2ejch76.apps.googleusercontent.com
    jsonKeyFile = 'src/assets/googleRecommender/google_recommender.json';
    parent = 'projects/1070402368417/locations/global/catalogs/default_catalog/branches/1';

    async createProduct2() {
        const recommender = new RecommenderClient({
            keyFilename: this.jsonKeyFile,
        });

        const request = {
            parent: this.parent,
            product: {
                title: "blusas",
                priceInfo: {
                    currencyCode: "BOB",
                    price: 120,
                },
                categories: ["Blusas"],
                images: [
                    {
                        uri: "https://backofficemvc20230103020728.azurewebsites.net/Contenido/Producto/17_03-01-23 06-53-31.png"
                    }
                ]
            }
        };
        console.log('recommender :>> ', recommender);
        console.log('request :>> ', request);
        const [product] = await recommender.product(request);
        console.log(`Product created: ${product.name}`);
    }
    async createProduct() {
        try {
            let key = require('../../../src/assets/googleRecommender/key.json');

            const recommender = google.recommender({
                version: 'v1',
                auth: new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/cloud-platform'])
            });

            const product = {
                name: 'projects/myproject/locations/global/catalogs/default_catalog/products/myproduct',
                title: 'My Product 12',
                displayName: 'My Product',
                description: 'This is my product.'
            };

            recommender.projects.locations.catalogs.products.create({
                parent: 'projects/1070402368417/locations/global/catalogs/default_catalog/branches/1',
                product: product
            }).then(response => {
                console.log(response.data);
            }).catch(console.error);
        }
        catch (e) {
                    console.log('e :>> ', e);
            throw new Error(e);
        }
    }
}

