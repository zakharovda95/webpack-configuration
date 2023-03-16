export function createCard(title) {
    let scopedTitle = title;
    let date = new Date();

    const toString = () => {
        return JSON.stringify({
            title: title + ' ' + scopedTitle,
            date: date.toJSON(),
        })
    }

    const getSomeStr = () => {
        alert('dfuhsuilfilfhlf')
    }

    return {
        toString,
        getSomeStr,
        scopedTitle,
        date,
    }
}
