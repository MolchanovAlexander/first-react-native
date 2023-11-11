export const checkImageURL = (url) => {
    if (!url) return false
    else {
        // console.log(url);
        // console.log("zzzitem.employer_logo");
        const pattern = new RegExp('^https?:\\/\\/.+', 'i');
        //console.log(pattern.test(url));
        return pattern.test(url);
    }
};//\\(png|jpg|svg|jpeg|bmp|gif|webp).$
