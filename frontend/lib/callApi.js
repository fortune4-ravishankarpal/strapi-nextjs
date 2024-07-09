import axios from "axios";
import qs from 'qs'
import { flattenAttributes } from "./utils";
export let baseUrl = "http://localhost:1337"

export async function getHomePageData() {
    let query = qs.stringify({
        populate: {
            blocks: {
                populate: {
                    image: {
                        fields: ["url", "alternativeText"]
                    },
                    link: {
                        populate: true
                    }
                }
            }
        },
    })
    const url = new URL("/api/home", baseUrl);
    url.search = query;
    return await axios.get(url.href).then(res => flattenAttributes(res.data.data))
}
