const getStoredItem = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredItem();
    if (storedList.includes(id)) {
        console.log('id', 'already in the read list');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}

const getWishListItem = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    } else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getWishListItem();
    if (storedWishList.includes(id)) {
        console.log(id, 'already in wish list')
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}

export {
    addToStoredReadList,
    addToStoredWishList,
    getStoredItem,
    getWishListItem
};