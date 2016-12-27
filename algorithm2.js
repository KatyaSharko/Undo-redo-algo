function Algorithm(model){
    this.model = model;
    this.history = [model];
    this.iterator = 0;
}

Algorithm.prototype = {
    constructor: Algorithm,
    start: function(){
        console.log(this.history);
        console.log(this.iterator);
    },
    save: function(){
        this.history.splice(this.iterator+1);
        var name = document.getElementById('project-name').value;
        this.history.push(name);
        this.iterator++;
        console.log('save');
        console.log(this.history);
        console.log(this.iterator);
    },
    undo: function(){
        if(this.iterator > 0)
            this.iterator--;
        console.log('undo');
        console.log(this.iterator);
        console.log(this.history[this.iterator]);

    },
    redo: function(){
        if(this.iterator < this.history.length-1)
            this.iterator++;
        console.log('redo');
        console.log(this.iterator);
        console.log(this.history[this.iterator]);
    }
};

var model = {
                id:5,
                name: "Ria Project",
                description: "Some text will be here",
                tasks:[
                    {
                        taskId: 1,
                        taskName: "task 1"
                    },
                    {
                        taskId: 2,
                        taskName: "task 2"
                    },
                    {
                        taskId: 3,
                        taskName: "task 3"
                    }
                ],
            };

var algo = new Algorithm(model);
