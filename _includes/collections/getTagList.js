module.exports = function (collection) {
    const temp = {}
    const tagList = []

    collection.getAll().forEach((item) => {
        if ("tags" in item.data) {
            for (const tag of item.data.tags) {
                switch (tag) {
                    case 'examples':
                        continue;
                    default:
                        if (!temp[tag]) {
                            tagList.push(tag)
                            temp[tag] = true
                        }
                }
            }
        }
    });

    return tagList;
};
