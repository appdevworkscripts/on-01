var Car = (function () {
    function Car(model, price) {
        this.model = model || '';
        this.price = price || 0;
    }
    return Car;
}());
