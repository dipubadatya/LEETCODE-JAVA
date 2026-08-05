var MinStack = function () {

    this.mainStack = [];
    this.minStack = [];
};

MinStack.prototype.push = function (val) {

    this.mainStack.push(val);


    if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(val);
    }
};

MinStack.prototype.pop = function () {

    const removedVal = this.mainStack.pop();

    if (removedVal === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function () {

    return this.mainStack[this.mainStack.length - 1];
};

MinStack.prototype.getMin = function () {

    return this.minStack[this.minStack.length - 1];
};