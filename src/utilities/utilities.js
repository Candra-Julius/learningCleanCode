class Utilities {
    buildPagination = (page, limit, count) => {
        const endpage = Math.ceil((parseInt(limit) * parseInt(page)) / 2);
        const firstRess = page == 1 ? 1 : endpage + 1;
        const secondRess = parseInt(limit) * parseInt(page) > count ? count : parseInt(limit) * parseInt(page);
        const response = {
            page: parseInt(page),
            desc: `${firstRess} - ${secondRess} dari ${count}`,
            totalPage: Math.ceil(count / limit),
            count,
        };
        return response;
    };
}

module.exports=Utilities