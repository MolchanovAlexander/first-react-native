export const checkImageURL = (url) => {
    if (!url) return false
    else {
        // console.log(url);
        // console.log("zzzitem.employer_logo");
        //const pattern = new RegExp('^https?:\\/\\/.+(png|jpg|svg|jpeg|bmp|gif|webp).$', 'i');
        //console.log(pattern.test(url));
        const pattern = new RegExp('^https?:\\/\\/.+', 'i');
        return pattern.test(url);
    }
};//
