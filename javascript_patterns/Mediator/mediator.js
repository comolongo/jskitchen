/**
 * Created by Lutskiy on 11.01.14.
 */

// The mediator pattern alleviates this situation promoting loose coupling and helping improve maintainability.
// In this pattern the independent objects (colleagues) do not communicate directly,
// but through a mediator object. When one of the colleagues changes state,
// it notifies the mediator, and the mediator communicates the change
// to any other colleagues that should know about it.

var orgChart = {

    addNewEmployee: function(){

        // getEmployeeDetail provides a view that users interact with
        var employeeDetail = this.getEmployeeDetail();

        // when the employee detail is complete, the mediator (the 'orgchart' object)
        // decides what should happen next
        employeeDetail.on("complete", function(employee){

            // set up additional objects that have additional events, which are used
            // by the mediator to do additional things
            var managerSelector = this.selectManager(employee);
            managerSelector.on("save", function(employee){
                employee.save();
            });

        });
    },

    // ...
}
