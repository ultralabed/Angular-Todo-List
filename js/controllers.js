/**
 * Created by Ed on 2014/10/8.
 */
function TodoCtrl($scope){
    $scope.newItem = "";
    $scope.todoList = [{ label: "Milk 1 pint" }, { label: "Phone bill" }];
    $scope.addItem= function(){
        if(this.newItem) {
            this.todoList.push({label: this.newItem});
            this.newItem = "";
        }
    }
}

function TodoCrtlRemovable($scope){
    $scope.newItem = "";
    $scope.todoList = [{ label: "Milk 1 pint" }, { label: "Phone bill" }];
    $scope.addItem= function(){
        if(this.newItem) {
            this.todoList.push({label: this.newItem, isFinish:false});
            this.newItem = "";
        }
    }
    $scope.removeItem=function(item){
        item.isFinish = true;
    }
    $scope.putBackItem=function(item){
        item.isFinish = false;
    }
}

function TodoCrtlUpdate($scope){
    $scope.newItem = "";
    $scope.todoList = [{ label: "Milk 1 pint" }, { label: "Phone bill" }];
    $scope.addItem= function(){
        if(this.newItem) {
            this.todoList.push({label: this.newItem, isFinish:false});
            this.newItem = "";
        }
    }
    $scope.removeItem=function(item){
        item.isFinish = true;
    }
    $scope.putBackItem=function(item){
        item.isFinish = false;
    }

    $scope.edit =function(item){
        item.editing = true;
    }
    $scope.save = function(item){
        delete item.editing;
    }

}

