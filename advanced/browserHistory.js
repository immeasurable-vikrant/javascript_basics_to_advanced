function BrowserHistory(){
    this.history = [];
    this.index = -1;
    
    this.visit = function(url){
      this.history[++this.index] = url;
      this.history.length = this.index + 1;
    }
    
    this.current = function(){
      if(this.index < 0){
        return "Blank Page";
      }
      
      return this.history[this.index];
    }
    
    this.backward = function(){
      this.index = Math.max(-1, --this.index);
    }
    
    this.forward = function(){
      this.index = Math.min(this.history.length - 1, ++this.index);
    }
  }
  
  let bh = new BrowserHistory();
  
  
  bh.visit("A");
  bh.visit("B");
  bh.backward();
  bh.backward();
  bh.backward();
  bh.forward();
  bh.visit("C");
  bh.backward();
  bh.backward();
  console.log(bh.current());