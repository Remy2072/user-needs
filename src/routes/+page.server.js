import fetchJson from "$lib/fetch-json";

export async function load() {
    const baseUrl = "https://fdnd-agency.directus.app";
    const endpoint = "/items/fdnd_wlw_session";

    const weLoveWeb_url = `${baseUrl}${endpoint}`;

    const weLoveWeb = await fetchJson(weLoveWeb_url);

    return {
        weLoveWebList: weLoveWeb.data,
    };
}