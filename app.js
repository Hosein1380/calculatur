class Calculator {
    constructor() {
        this.area = $("#results");
        this.keys = $(".key");
        this.clear = $(".clear");
        this.equal = $(".equal");
        this.operation = $(".operation-btn");
        this.delete = $(".delete");
        this.compute();
    }

    compute() {
        this.keys.click((el) => {
            let valor = $(el.target).val();
            this.area.val(this.area.val() + valor);
        });

        this.clear.click(() => {
            this.area.val("");
        });

        this.equal.click(() => {
            this.area.val(eval(this.area.val()));
        });

        this.operation.click((el) => {
            let valor = $(el.target).val();

            switch (valor) {

                case "subx":
                    this.area.val(1 / this.area.val());
                    break;
                case "power2":
                    this.area.val(Math.pow(this.area.val(), 2));
                    break;
                case "sqrt":
                    this.area.val(Math.sqrt(this.area.val()));
                    break;
            }
        });

        this.delete.click(() => {
            let deletion = this.area.val().length - 1;
            let afterDeletion = this.area.val().substring(0, deletion);
            this.area.val(afterDeletion);
        });
    }
}

// const calculator = new Calculator();
new Calculator();
