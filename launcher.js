class launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 8.0

        }    
        this.pointB=pointB   
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
      this.sling.bodyA=null  
    }
   
   display(){
       if(this.sling.bodyA){

       
        
     
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}
}

