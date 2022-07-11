class player{
    constructor(name, type){
        console.log('player', this);
        this.name = name ;
        this.type = type ;
    }
    info(){
     console.log(`Hi there I\'m ${this.name}`)
    }
}

class instructor extends player{
    constructor(name, type){
        super(name, type)
        console.log('instructor', this);
    }
    play(){
        console.log(`I do ${this.type} for a living and you`)
    }
}

const instruct1 = new instructor('Kelly', 'Doctor');
const instruct2 = new instructor('Fade', 'Dev');