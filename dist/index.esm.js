function cf(class1, class2) {
    const class1Arr = class1.split(" ");
    const class2Arr = class2.split(" ");
    const filteredClass = class1Arr.filter(cls => {
        return !class2Arr.some(cls2 => cls.startsWith(cls2.split("-")[0]));
    });
    const resultCls = [...filteredClass, ...class2Arr];
    return resultCls.join(" ");
}

export { cf };
