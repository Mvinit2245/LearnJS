class College {
    constructor(name, fees, placement) {
        this.name = name;
        this.fees = fees;
        this.placement = placement;


    }

    admission() {
        console.log(`Student name is ${this.name} and fees paid ${this.fees} `);
    }

    placed() {
        console.log(`We have placement ${this.placement} %`);
    }
}

const student = new College("Vinit", 52000, 80);
student.admission();
student.placed();