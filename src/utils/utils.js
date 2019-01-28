export const loadLocalImage = (url) => {
    let image;
    try {
        image = require(`static/assets${url}`);
    } catch (error) {
        console.error(error);
        image = require(`static/assets/notfound.png`);
    }
    return image;
}