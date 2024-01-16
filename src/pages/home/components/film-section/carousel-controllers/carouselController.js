export const setWidth = () => 
{
    if(window.innerWidth < 992)
        return 2500;

    const containerWidth = (window.innerWidth * 80) / 100;
    let space;
    let width;

    if(window.innerWidth > 1900)
        space = (containerWidth - 1000) / 4
    else if(window.innerWidth >= 1300 && window.innerWidth <= 1900 )
        space = (containerWidth - 1000) / 3
    else if(window.innerWidth >= 992 && window.innerWidth < 1300)
        space = (containerWidth - 750) / 2
    if(window.innerWidth <= 1900)
        width = 2000 + (7 * space);
    else 
        width = 1600 + (7 * space);
    
    return {width : width, space : space}
}

export const changePage = (value, currentPage, spaceBetween) => 
{
    let widthToChange;
    if((currentPage === -3 && value < 0) && (window.innerWidth > 1900))
        return
    if((currentPage === -4 && value < 0) && (window.innerWidth > 1300 && window.innerWidth <= 1900))
        return
    if(currentPage === -5 && value < 0)
        return
    if(currentPage === 0 && value > 0)
        return

    const newPage = currentPage + value;

    if(window.innerWidth <=1900)
        widthToChange = newPage * (250 + spaceBetween);

    else 
    widthToChange = newPage * (200 + spaceBetween);
    
    return{newPage : newPage, widthToChange : widthToChange};
}
